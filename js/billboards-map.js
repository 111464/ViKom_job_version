/* Блок «Карта рекламных конструкций + лента карточек».
   Зависимости: Яндекс Карты JS API 2.1 (ymaps) и js/billboards-data.js (const BILLBOARDS).
   Разметка: <section id="billboard-map" data-billboard-map> — см. outdoor.html. */
(function () {
  "use strict";

  var root = document.querySelector("[data-billboard-map]");
  if (!root) return;

  var mapEl = root.querySelector("[data-bb-map]");
  var strip = root.querySelector("[data-bb-strip]");
  var btnPrev = root.querySelector("[data-bb-prev]");
  var btnNext = root.querySelector("[data-bb-next]");
  var data = typeof BILLBOARDS !== "undefined" ? BILLBOARDS : [];

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var scrollBehavior = reduceMotion ? "auto" : "smooth";

  /* ---------- Вспомогательные ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shortLabel(label) {
    var m = label.match(/Сторона\s+([АБ])|Место\s+№\s*(\d+)/);
    return m ? (m[1] || m[2]) : label;
  }
  function photoHtml(item, cls) {
    return '<img class="' + cls + '" src="' + esc(item.photo) + '" alt="' +
      esc(item.type + ": " + item.title + ", " + item.city) + '" loading="lazy" draggable="false" data-bb-img>';
  }
  /* Нет файла с фото — вместо него штатная заглушка сайта (.photo-empty).
     Один делегированный обработчик на весь блок (фаза захвата: событие error не всплывает) —
     работает для карточек, балунов и групп меток, ничего не навешивается повторно. */
  root.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG" || !img.hasAttribute("data-bb-img") || !img.parentNode) return;
    var ph = document.createElement("div");
    ph.className = "photo-empty " + img.className;
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", img.alt);
    img.parentNode.replaceChild(ph, img);
  }, true);

  /* ---------- Карточки ---------- */
  var cardsById = {};
  var markersById = {};

  function cardHtml(it) {
    var photos = it.photoLinks.map(function (p) {
      return '<a href="' + esc(p.url) + '" target="_blank" rel="noopener" title="Фото: ' + esc(p.label) + '">' + esc(shortLabel(p.label)) + "</a>";
    }).join("");
    return (
      '<article class="bb-card" role="button" tabindex="0" data-id="' + it.id + '" aria-label="Показать на карте: ' + esc(it.title + ", " + it.city) + '">' +
        '<div class="bb-card-img">' + photoHtml(it, "bb-img") +
          '<span class="bb-card-type">' + esc(it.type) + "</span>" +
        "</div>" +
        '<div class="bb-card-body">' +
          '<p class="bb-card-city">' + esc(it.city) + "</p>" +
          "<h3>" + esc(it.title) + "</h3>" +
          '<p class="bb-card-addr">' + esc(it.address) + "</p>" +
          '<ul class="bb-benefits">' + it.benefits.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
          '<div class="bb-card-links">' +
            '<span class="bb-card-links-group"><span>Фото</span>' + photos + "</span>" +
            '<a class="bb-card-maplink" href="' + esc(it.mapLink) + '" target="_blank" rel="noopener">Яндекс Карты</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  strip.innerHTML = data.map(cardHtml).join("");
  strip.querySelectorAll(".bb-card").forEach(function (c) { cardsById[c.dataset.id] = c; });

  /* ---------- Карта (Яндекс Карты) ---------- */
  var map = null;
  var clusterer = null;
  var activeId = null;
  var selectToken = 0;      /* номер последнего выбора: устаревшие отложенные вызовы отбрасываются */
  var halo = null;          /* отдельная метка-кольцо вокруг выбранной точки */

  /* Круглые метки без номеров: терракотовые — билборды, тёмные — остальное */
  function pinHref(color, size, ring) {
    var c = size / 2;
    var svg = ring
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '">' +
        '<circle cx="' + c + '" cy="' + c + '" r="' + (c - 3) + '" fill="' + color + '" fill-opacity="0.28" stroke="' + color + '" stroke-width="2.5"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '">' +
        '<circle cx="' + c + '" cy="' + c + '" r="11" fill="' + color + '" stroke="#FBF6EC" stroke-width="2.5"/>' +
        '<circle cx="' + c + '" cy="' + c + '" r="3.5" fill="#FBF6EC"/></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function pinColor(it) { return it.type === "Билборд" ? "#C1502E" : "#2B2B2B"; }

  var itemsById = {};
  data.forEach(function (it) { itemsById[it.id] = it; });

  /* Выбор точки: меняет только подсветку карточки и кольцо. Сами метки и балуны не трогает,
     поэтому события карты не могут вызвать этот код повторно по кругу. */
  function setActive(id) {
    if (id === activeId) return;
    if (activeId && cardsById[activeId]) cardsById[activeId].classList.remove("is-active");
    activeId = id;
    if (id && cardsById[id]) cardsById[id].classList.add("is-active");
    updateHalo();
  }

  function updateHalo() {
    if (!map) return;
    try {
      if (halo) { map.geoObjects.remove(halo); halo = null; }
      var it = activeId && itemsById[activeId];
      if (!it) return;
      var pm = markersById[it.id];
      var st = pm && clusterer ? clusterer.getObjectState(pm) : null;
      if (st && st.isClustered) return;          /* точка внутри группы — кольцо не рисуем */
      halo = new ymaps.Placemark([it.lat, it.lng], {}, {
        iconLayout: "default#image",
        iconImageHref: pinHref(pinColor(it), 44, true),
        iconImageSize: [44, 44],
        iconImageOffset: [-22, -22],
        interactivityModel: "default#transparent",   /* клики проходят сквозь кольцо */
        zIndex: 400
      });
      map.geoObjects.add(halo);
    } catch (err) { /* подсветка — не критичная функция */ }
  }

  function popupHtml(it) {
    return (
      '<div class="bb-pop">' +
        '<div class="bb-pop-img">' + photoHtml(it, "bb-img") + "</div>" +
        '<div class="bb-pop-body">' +
          "<h4>" + esc(it.title) + "</h4>" +
          '<p class="bb-pop-addr">' + esc(it.address) + "</p>" +
          '<ul class="bb-benefits bb-benefits-compact">' +
            it.benefits.slice(0, 2).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
          "</ul>" +
        "</div>" +
      "</div>"
    );
  }

  function scrollCardIntoView(id) {
    var card = cardsById[id];
    if (!card) return;
    var left = card.offsetLeft - (strip.clientWidth - card.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior });
  }

  function focusMarker(id) {
    var m = markersById[id];
    if (!m || !map) return;
    var token = ++selectToken;                  /* новый выбор отменяет все прежние отложенные действия */
    var coords = m.geometry.getCoordinates();
    var zoom = Math.max(map.getZoom(), 14);

    var r = mapEl.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight) {
      root.querySelector(".bb-map-wrap").scrollIntoView({ behavior: scrollBehavior, block: "center" });
    }
    var done = false;
    var open = function () {
      if (done || token !== selectToken) return;  /* устарело или уже выполнено */
      done = true;
      /* даём кластеризатору пересчитать группы после смены масштаба */
      setTimeout(function () {
        if (token !== selectToken) return;
        try {
          var st = clusterer ? clusterer.getObjectState(m) : null;
          if (st && st.isClustered && st.cluster) {
            /* точка осталась внутри группы (например, две стороны одной конструкции) — открываем балун группы на нужной точке */
            st.cluster.state.set("activeObject", m);
            clusterer.balloon.open(st.cluster);
            setActive(id);
            scrollCardIntoView(id);
          } else {
            m.balloon.open();
          }
        } catch (err) { setActive(id); scrollCardIntoView(id); }
      }, 120);
    };
    var moved = map.setCenter(coords, zoom, { duration: reduceMotion ? 0 : 600, checkZoomRange: true });
    if (moved && moved.then) moved.then(open, open);
    setTimeout(open, 900);                      /* страховка: если карта не сообщила об окончании движения */
  }

  function initMap() {
    if (!data.length) return;
    mapEl.innerHTML = "";
    map = new ymaps.Map(mapEl, {
      center: [52.6, 38.4],
      zoom: 9,
      controls: ["zoomControl", "fullscreenControl"]
    }, { suppressMapOpenBlock: true });
    /* Масштабирование колесом мыши включено всегда */
    map.behaviors.enable("scrollZoom");

    /* Кластеры: близкие точки собираются в одну большую с числом, при приближении — снова разделяются */
    var clusterLayout = ymaps.templateLayoutFactory.createClass(
      '<div class="bb-cluster"><span>{{ properties.geoObjects.length }}</span></div>'
    );
    clusterer = new ymaps.Clusterer({
      clusterIconLayout: clusterLayout,
      clusterIconShape: { type: "Circle", coordinates: [0, 0], radius: 22 },
      gridSize: 72,
      minClusterSize: 2,
      groupByCoordinates: false,
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: true,
      clusterBalloonPanelMaxMapArea: 0,
      clusterBalloonMaxWidth: 270,
      clusterBalloonMinWidth: 250,
      zoomMargin: 40
    });
    /* События меток всплывают до кластеризатора, поэтому реагируем только на закрытие балуна самой группы */
    clusterer.events.add("balloonclose", function (e) {
      var target = e && e.get ? e.get("target") : null;
      if (target && typeof target.getGeoObjects === "function") setActive(null);
    });
    /* Смена масштаба/группировки — обновляем кольцо (точка могла уйти в группу или выйти из неё) */
    map.events.add("boundschange", function () { if (activeId) updateHalo(); });

    var coordsAll = [];
    var placemarks = [];
    data.forEach(function (it) {
      var pm = new ymaps.Placemark([it.lat, it.lng], {
        hintContent: it.title + ", " + it.city,
        balloonContent: popupHtml(it)
      }, {
        iconLayout: "default#image",
        iconImageHref: pinHref(pinColor(it), 30, false),
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
        balloonOffset: [0, -16],
        balloonMaxWidth: 270,
        balloonMinWidth: 250,
        balloonPanelMaxMapArea: 0,
        hideIconOnBalloonOpen: false
      });
      pm.events.add("balloonopen", function () {
        setActive(it.id);
        scrollCardIntoView(it.id);
      });
      pm.events.add("balloonclose", function () { if (activeId === it.id) setActive(null); });
      placemarks.push(pm);
      markersById[it.id] = pm;
      coordsAll.push([it.lat, it.lng]);
    });

    clusterer.add(placemarks);
    map.geoObjects.add(clusterer);

    function fitAll() {
      map.setBounds(ymaps.util.bounds.fromPoints(coordsAll), { checkZoomRange: true, zoomMargin: 40 });
    }
    fitAll();

    var resetBtn = root.querySelector("[data-bb-reset]");
    if (resetBtn) resetBtn.addEventListener("click", function () { selectToken++; map.balloon.close(); setActive(null); fitAll(); });

    window.addEventListener("resize", function () { map.container.fitToViewport(); });
  }

  if (typeof ymaps === "undefined") {
    mapEl.innerHTML = '<p class="bb-map-fail">Не удалось загрузить карту. Все места — в карточках ниже.</p>';
  } else {
    try {
      ymaps.ready(function () {
        try { initMap(); } catch (err) {
          map = null;
          mapEl.innerHTML = '<p class="bb-map-fail">Не удалось загрузить карту. Все места — в карточках ниже.</p>';
        }
      }, function () {
        mapEl.innerHTML = '<p class="bb-map-fail">Не удалось загрузить карту. Все места — в карточках ниже.</p>';
      });
    } catch (err) {
      mapEl.innerHTML = '<p class="bb-map-fail">Не удалось загрузить карту. Все места — в карточках ниже.</p>';
    }
  }

  /* ---------- Клик по карточке → карта ---------- */
  var dragMoved = false;

  function activateCard(card) {
    var id = card.dataset.id;
    if (map && markersById[id]) focusMarker(id);
    else setActive(id);
  }
  strip.addEventListener("click", function (e) {
    if (dragMoved) { dragMoved = false; return; }
    if (e.target.closest("a")) return;                 // ссылки «Фото» / «Яндекс Карты» работают как обычно
    var card = e.target.closest(".bb-card");
    if (card) activateCard(card);
  });
  strip.addEventListener("keydown", function (e) {
    if (e.target.closest("a")) return;
    if (e.key !== "Enter" && e.key !== " ") return;
    var card = e.target.closest(".bb-card");
    if (!card) return;
    e.preventDefault();
    activateCard(card);
  });

  /* ---------- Горизонтальная прокрутка: перетаскивание мышью, свайп — нативный ---------- */
  var drag = null;
  strip.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag = { x: e.clientX, left: strip.scrollLeft, id: e.pointerId, active: false };
  });
  strip.addEventListener("pointermove", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x;
    if (!drag.active) {
      if (Math.abs(dx) < 6) return;
      drag.active = true;
      dragMoved = true;
      strip.classList.add("is-dragging");
      try { strip.setPointerCapture(e.pointerId); } catch (err) {}
    }
    strip.scrollLeft = drag.left - dx;
  });
  function endDrag(e) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.active) {
      strip.classList.remove("is-dragging");
      try { strip.releasePointerCapture(drag.id); } catch (err) {}
      setTimeout(function () { dragMoved = false; }, 0);
    }
    drag = null;
  }
  strip.addEventListener("pointerup", endDrag);
  strip.addEventListener("pointercancel", endDrag);
  strip.addEventListener("lostpointercapture", endDrag);
  window.addEventListener("blur", function () { endDrag(null); });
  window.addEventListener("pointerup", endDrag);
  strip.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* ---------- Стрелки ---------- */
  function step() {
    var card = strip.querySelector(".bb-card");
    var w = card ? card.offsetWidth + 18 : 300;
    return Math.max(w, Math.floor(strip.clientWidth / w) * w * 0.9);
  }
  btnPrev.addEventListener("click", function () { strip.scrollBy({ left: -step(), behavior: scrollBehavior }); });
  btnNext.addEventListener("click", function () { strip.scrollBy({ left: step(), behavior: scrollBehavior }); });

  var ticking = false;
  function updateArrows() {
    var max = strip.scrollWidth - strip.clientWidth - 2;
    btnPrev.disabled = strip.scrollLeft <= 2;
    btnNext.disabled = strip.scrollLeft >= max;
    ticking = false;
  }
  strip.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateArrows); }
  }, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();
})();
