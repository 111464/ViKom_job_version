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

  /* ---------- Карта (Яндекс Карты) ----------
     Наведение на точку — над ней раскрывается фото конструкции (без клика).
     Клик по точке — карточка в ленте подсвечивается и подъезжает в видимую область, выбор закрепляется
     (кольцо на карте + карточка с фото остаются, пока не выберут другую точку / не нажмут на пустое место / «×»).
     Балуны Яндекса не используются: своё окошко проще и не конфликтует с кластерами. */
  var map = null;
  var clusterer = null;
  var activeId = null;      /* закреплённая конструкция */
  var hoverId = null;       /* конструкция под курсором */
  var selectToken = 0;      /* номер последнего выбора: устаревшие отложенные вызовы отбрасываются */
  var halo = null;          /* кольцо вокруг выбранной точки */
  var mapWrap = root.querySelector(".bb-map-wrap");
  var hoverCard = document.createElement("div");
  hoverCard.className = "bb-hover";
  hoverCard.setAttribute("aria-hidden", "true");
  mapWrap.appendChild(hoverCard);
  var hoverKey = "";

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

  function isClustered(id) {
    try {
      var st = clusterer && markersById[id] ? clusterer.getObjectState(markersById[id]) : null;
      return !!(st && st.isClustered);
    } catch (err) { return false; }
  }

  /* Положение метки в пикселях контейнера карты */
  function pointPx(id) {
    var pm = markersById[id];
    if (!pm || !map) return null;
    try {
      var g = map.options.get("projection").toGlobalPixels(pm.geometry.getCoordinates(), map.getZoom());
      var page = map.converter.globalToPage(g);
      var r = mapWrap.getBoundingClientRect();
      return { x: page[0] - window.pageXOffset - r.left, y: page[1] - window.pageYOffset - r.top };
    } catch (err) { return null; }
  }

  function popupHtml(it, pinned) {
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
        (pinned ? '<button type="button" class="bb-pop-close" data-bb-close aria-label="Снять выбор">&times;</button>' : "") +
      "</div>"
    );
  }

  function hideHover() {
    hoverCard.classList.remove("is-on", "is-pinned");
    hoverKey = "";
  }

  /* Окошко с фото: приоритет у точки под курсором, иначе — у закреплённой */
  function renderHover() {
    var id = hoverId || activeId;
    if (!id || !map || !itemsById[id] || isClustered(id)) { hideHover(); return; }
    var p = pointPx(id);
    if (!p) { hideHover(); return; }
    var pinned = !hoverId && id === activeId;
    var key = id + (pinned ? ":p" : ":h");
    if (key !== hoverKey) {
      hoverCard.innerHTML = popupHtml(itemsById[id], pinned);
      hoverKey = key;
    }
    hoverCard.classList.toggle("is-pinned", pinned);
    var W = mapWrap.clientWidth, H = mapWrap.clientHeight;
    var w = hoverCard.offsetWidth || 260, h = hoverCard.offsetHeight || 230;
    var above = p.y - 26 - h >= 8;
    var top = above ? p.y - 26 - h : p.y + 26;
    top = Math.max(8, Math.min(top, H - h - 8));
    var left = Math.max(8, Math.min(p.x - w / 2, W - w - 8));
    hoverCard.style.left = Math.round(left) + "px";
    hoverCard.style.top = Math.round(top) + "px";
    hoverCard.classList.add("is-on");
  }
  var renderQueued = false;
  function queueRender() {
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(function () { renderQueued = false; renderHover(); updateHalo(); });
  }

  function updateHalo() {
    if (!map) return;
    try {
      var pm = activeId && markersById[activeId];
      if (halo) { map.geoObjects.remove(halo); halo = null; }
      if (!pm || isClustered(activeId)) return;      /* точка внутри группы — кольцо не рисуем */
      var it = itemsById[activeId];
      halo = new ymaps.Placemark(pm.geometry.getCoordinates(), {}, {
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

  /* Выбор конструкции: подсветка карточки + кольцо + закреплённое окошко */
  function setActive(id) {
    if (activeId && cardsById[activeId]) cardsById[activeId].classList.remove("is-active");
    activeId = id || null;
    if (activeId && cardsById[activeId]) cardsById[activeId].classList.add("is-active");
    updateHalo();
    renderHover();
  }

  function scrollCardIntoView(id) {
    var c = cardsById[id];
    if (!c) return;
    var left = c.offsetLeft - (strip.clientWidth - c.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior });
    /* лента ниже карты — если она вне экрана, аккуратно подъезжаем к ней */
    var wr = root.querySelector(".bb-strip-wrap");
    if (wr) {
      var r = wr.getBoundingClientRect();
      if (r.top > window.innerHeight - 120 || r.bottom < 60) wr.scrollIntoView({ behavior: scrollBehavior, block: "nearest" });
    }
  }

  /* Клик по карточке: карта подъезжает к точке (при необходимости — разворачивая группу) и закрепляет её */
  function focusMarker(id) {
    var m = markersById[id];
    if (!m || !map) return;
    var token = ++selectToken;
    var coords = m.geometry.getCoordinates();
    var r = mapEl.getBoundingClientRect();
    if (r.top < 0 || r.bottom > window.innerHeight) {
      mapWrap.scrollIntoView({ behavior: scrollBehavior, block: "center" });
    }
    function go(zoom, tries) {
      if (token !== selectToken) return;
      var finished = false;
      function after() {
        if (finished || token !== selectToken) return;     /* устарело или уже выполнено */
        finished = true;
        setTimeout(function () {                            /* даём кластеризатору пересчитать группы */
          if (token !== selectToken) return;
          if (isClustered(id) && tries > 0 && zoom < 18) go(Math.min(zoom + 2, 18), tries - 1);
          else { setActive(id); }
        }, 160);
      }
      var p;
      try { p = map.setCenter(coords, zoom, { duration: reduceMotion ? 0 : 500, checkZoomRange: true }); } catch (err) { after(); return; }
      if (p && p.then) p.then(after, after);
      setTimeout(after, 1000);                              /* страховка: если карта не сообщила об окончании движения */
    }
    go(Math.max(map.getZoom(), 14), 3);
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

    /* Кластеры: близкие точки собираются в одну большую с числом; клик по группе — приближение */
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
      clusterOpenBalloonOnClick: false,
      zoomMargin: 40
    });

    /* Карта двигается / меняет масштаб — прячем окошко под курсором и пересчитываем положение закреплённого */
    map.events.add("actionbegin", function () { hoverId = null; queueRender(); });
    map.events.add("boundschange", queueRender);
    map.events.add("click", function () {                   /* клик по пустому месту снимает выбор */
      hoverId = null;
      selectToken++;
      setActive(null);
    });

    var coordsAll = [];
    var placemarks = [];
    var seen = {};
    data.forEach(function (it) {
      /* две конструкции в одной точке разводим на ~10 м, иначе кластер никогда не раскроется */
      var key = it.lat + "," + it.lng, k = seen[key] || 0;
      seen[key] = k + 1;
      var lat = it.lat, lng = it.lng + k * 0.00014;
      var pm = new ymaps.Placemark([lat, lng], {}, {
        iconLayout: "default#image",
        iconImageHref: pinHref(pinColor(it), 30, false),
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
        hasBalloon: false,
        hasHint: false
      });
      pm.events.add("mouseenter", function () { hoverId = it.id; renderHover(); });
      pm.events.add("mouseleave", function () { if (hoverId === it.id) { hoverId = null; renderHover(); } });
      pm.events.add("click", function () {
        selectToken++;
        hoverId = null;
        setActive(it.id);
        scrollCardIntoView(it.id);
      });
      placemarks.push(pm);
      markersById[it.id] = pm;
      coordsAll.push([lat, lng]);
    });

    clusterer.add(placemarks);
    map.geoObjects.add(clusterer);

    function fitAll() {
      map.setBounds(ymaps.util.bounds.fromPoints(coordsAll), { checkZoomRange: true, zoomMargin: 40 });
    }
    fitAll();

    var resetBtn = root.querySelector("[data-bb-reset]");
    if (resetBtn) resetBtn.addEventListener("click", function () { selectToken++; hoverId = null; setActive(null); fitAll(); });

    /* Крестик на закреплённом окошке */
    hoverCard.addEventListener("click", function (e) {
      if (e.target.closest("[data-bb-close]")) { selectToken++; hoverId = null; setActive(null); }
    });

    window.addEventListener("resize", function () { map.container.fitToViewport(); queueRender(); });
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
    if (map && markersById[id]) { setActive(id); focusMarker(id); }
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
