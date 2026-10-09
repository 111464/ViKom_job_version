/* Блок «Нам доверяют»: лента логотипов клиентов со стрелками, свайпом и перетаскиванием мышью.
   Данные: js/trust-data.js (TRUST_CLIENTS). */
(function () {
  "use strict";
  var root = document.querySelector("[data-trust]");
  if (!root || typeof TRUST_CLIENTS === "undefined") return;

  var track = root.querySelector("[data-trust-track]");
  var prev = root.querySelector("[data-trust-prev]");
  var next = root.querySelector("[data-trust-next]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var behavior = reduce ? "auto" : "smooth";

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Только логотипы — без подписей с названиями компаний (name идёт в alt).
     Набор выводится три раза подряд (клоны скрыты от скринридеров) — лента бесконечная:
     дойдя до края, она незаметно «переезжает» на такую же позицию соседнего набора. */
  function setHtml(clone) {
    return TRUST_CLIENTS.map(function (c) {
      return '<li class="trust-item"' + (clone ? ' aria-hidden="true"' : "") + '><div class="trust-logo">' +
        '<img src="' + esc(c.logo) + '" alt="' + (clone ? "" : esc(c.name)) + '" loading="eager" draggable="false">' +
        "</div></li>";
    }).join("");
  }
  track.innerHTML = setHtml(true) + setHtml(false) + setHtml(true);

  var n = TRUST_CLIENTS.length;
  var items = track.children;
  var drag = null, moved = false;

  function setWidth() { return items[n].offsetLeft - items[0].offsetLeft; }   // ширина одного набора

  function toMiddle() { track.style.scrollSnapType = "none"; track.scrollLeft = setWidth(); track.style.scrollSnapType = ""; }

  /* Перепрыгиваем между наборами, когда лента подходит к краю */
  var wrapTimer = null;
  function wrap() {
    var w = setWidth();
    if (!w) return;
    var x = track.scrollLeft, shift = 0;
    if (x < w * 0.5) shift = w;
    else if (x > w * 1.5) shift = -w;
    if (!shift) return;
    track.style.scrollSnapType = "none";
    track.scrollLeft = x + shift;
    track.style.scrollSnapType = "";
    if (drag) drag.left += shift;
  }
  track.addEventListener("scroll", function () {
    if (drag) { wrap(); return; }
    clearTimeout(wrapTimer);
    wrapTimer = setTimeout(wrap, 90);   // ждём конца плавной прокрутки
  }, { passive: true });
  if ("onscrollend" in window) track.addEventListener("scrollend", function () { if (!drag) wrap(); });
  window.addEventListener("resize", toMiddle);
  window.addEventListener("load", toMiddle);
  toMiddle();

  /* Стрелки */
  function page() { return Math.max(track.clientWidth * 0.85, 200); }
  prev.addEventListener("click", function () { track.scrollBy({ left: -page(), behavior: behavior }); });
  next.addEventListener("click", function () { track.scrollBy({ left: page(), behavior: behavior }); });

  /* Перетаскивание мышью (на тач-устройствах работает обычный свайп) */
  track.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag = { x: e.clientX, left: track.scrollLeft, id: e.pointerId, on: false };
  });
  track.addEventListener("pointermove", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x;
    if (!drag.on) {
      if (Math.abs(dx) < 6) return;
      drag.on = true; moved = true;
      track.classList.add("is-dragging");
      try { track.setPointerCapture(e.pointerId); } catch (err) {}
    }
    track.scrollLeft = drag.left - dx;
  });
  function end(e) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (drag.on) {
      track.classList.remove("is-dragging");
      try { track.releasePointerCapture(drag.id); } catch (err) {}
    }
    drag = null;
    setTimeout(function () { moved = false; }, 0);
  }
  track.addEventListener("pointerup", end);
  track.addEventListener("pointercancel", end);
  track.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* Стрелки клавиатуры, когда лента в фокусе */
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); next.click(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev.click(); }
  });
})();
