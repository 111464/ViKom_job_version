/* Главное фото страницы «Наружная реклама»: фото наших билбордов (сторона А) меняются раз в 3 секунды.
   Источник — js/billboards-data.js (BILLBOARDS[].photo). Следующий кадр подгружается заранее. */
(function () {
  "use strict";
  var box = document.querySelector("[data-bb-hero]");
  if (!box || typeof BILLBOARDS === "undefined" || !BILLBOARDS.length) return;

  var INTERVAL = 3000;
  var photos = BILLBOARDS.filter(function (b) { return b.photo; });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers = [0, 1].map(function () {
    var img = document.createElement("img");
    img.className = "bb-hero-img";
    img.alt = "";
    img.draggable = false;
    img.decoding = "async";
    box.appendChild(img);
    return img;
  });
  var cur = 0, front = 0, timer = null;

  function alt(b) { return "Рекламная конструкция: " + b.title + ", " + b.city; }
  function load(i, cb) {
    var b = photos[i % photos.length], im = new Image();
    im.onload = function () { cb(true, b); };
    im.onerror = function () { cb(false, b); };
    im.src = b.photo;
  }
  function show(i) {
    load(i, function (ok, b) {
      if (!ok) { if (photos.length > 1) { cur = (i + 1) % photos.length; show(cur); } return; }
      var next = layers[1 - front], prev = layers[front];
      next.src = b.photo; next.alt = alt(b);
      next.classList.add("is-on"); prev.classList.remove("is-on");
      front = 1 - front;
    });
  }
  function tick() {
    cur = (cur + 1) % photos.length;
    show(cur);
    /* прогреваем следующий кадр */
    var n = new Image(); n.src = photos[(cur + 1) % photos.length].photo;
  }
  function start() { if (!timer && photos.length > 1) timer = setInterval(tick, INTERVAL); }
  function stop() { clearInterval(timer); timer = null; }

  if (reduce) box.classList.add("no-fade");
  show(0);
  start();
  document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
})();
