/* Блок «Нам доверяют»: плитки с логотипами клиентов — все сразу, без прокрутки.
   Данные: js/trust-data.js (TRUST_CLIENTS). */
(function () {
  "use strict";
  var root = document.querySelector("[data-trust]");
  if (!root || typeof TRUST_CLIENTS === "undefined") return;
  var track = root.querySelector("[data-trust-track]");
  if (!track) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Только логотипы — без подписей (name идёт в alt) */
  track.innerHTML = TRUST_CLIENTS.map(function (c) {
    return '<li class="trust-item"><div class="trust-logo">' +
      '<img src="' + esc(c.logo) + '" alt="' + esc(c.name) + '" loading="lazy" draggable="false">' +
      "</div></li>";
  }).join("");
  track.removeAttribute("tabindex");
  root.classList.add("is-static");
})();
