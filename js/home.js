/* Главная страница: карусель отзывов реальных клиентов с фото готовых объектов */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("caseCarouselTrack");
  if (track && typeof REVIEWS !== "undefined") {
    const cardsHtml = REVIEWS.map(renderCaseCard).join("");
    /* Дублируем набор карточек для бесшовной бесконечной прокрутки */
    track.innerHTML = cardsHtml + cardsHtml;

    /* Автопрокрутка; остановка при наведении; листание — кнопками */
    const viewport = track.parentElement;          /* .case-carousel-viewport */
    const wrap = viewport.parentElement;           /* .case-carousel-wrap: окно + кнопки */
    const AUTO_SPEED = 0.12; /* px/мс */
    const STEP = 382;        /* карточка 360 + зазор 22 */
    let offset = 0, lastTs = null, hovering = false, anim = null;
    const half = () => track.scrollWidth / 2;
    const norm = () => { const w = half(); if (w > 0) offset = ((offset % w) + w) % w; };
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const frame = (ts) => {
      const dt = lastTs === null ? 0 : ts - lastTs;
      lastTs = ts;
      if (anim) {
        const k = Math.min(1, (ts - anim.t0) / anim.dur);
        offset = anim.from + (anim.to - anim.from) * ease(k);
        if (k >= 1) anim = null;
      } else if (!hovering) {
        offset += dt * AUTO_SPEED;
      }
      norm();
      track.style.transform = "translate3d(" + (-offset) + "px,0,0)";
      requestAnimationFrame(frame);
    };
    track.style.animation = "none";
    requestAnimationFrame(frame);

    wrap.addEventListener("mouseenter", () => { hovering = true; });
    wrap.addEventListener("mouseleave", () => { hovering = false; });

    const go = (dir) => {
      const from = anim ? anim.to : offset;
      anim = { from: offset, to: from + dir * STEP, t0: performance.now(), dur: 450 };
    };
    const prev = document.getElementById("caseCarouselPrev");
    const next = document.getElementById("caseCarouselNext");
    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));
  }

  /* Калькулятор объёмных букв: цена за 1 см высоты каждой буквы (прайс «Буквы и вывески») */
  const SMALL_LETTER_CM = 15;      /* буквы ниже 15 см — от +25% */
  const SMALL_LETTER_FACTOR = 1.25;
  const MOUNT_FACTOR = 1.3;        /* монтаж от +30% */
  const baTextEl = document.getElementById("baText");
  const baHeightEl = document.getElementById("baHeight");
  const baTypeEl = document.getElementById("baType");
  const baMountEl = document.getElementById("baMount");
  const baPriceEl = document.getElementById("baQuickPrice");
  const baCalcEl = document.getElementById("baQuickCalc");
  if (baTextEl && baHeightEl && baTypeEl && baPriceEl) {
    const countLetters = (s) => (s.match(/[\p{L}\p{N}]/gu) || []).length;
    const updateBaPrice = () => {
      const letters = countLetters(baTextEl.value);
      const heightCm = parseFloat(baHeightEl.value);
      const rate = Number(baTypeEl.value);
      if (!letters || !heightCm || heightCm <= 0) {
        baPriceEl.textContent = "—";
        if (baCalcEl) baCalcEl.textContent = letters ? letters + " " + pluralLetters(letters) + " — укажите высоту букв" : "";
        return;
      }
      const small = heightCm < SMALL_LETTER_CM;
      const mount = baMountEl && baMountEl.checked;
      let price = letters * heightCm * rate;
      if (small) price *= SMALL_LETTER_FACTOR;
      if (mount) price *= MOUNT_FACTOR;
      price = Math.round(price / 10) * 10;
      baPriceEl.textContent = price.toLocaleString("ru-RU") + " ₽";
      if (baCalcEl) {
        baCalcEl.textContent = letters + " " + pluralLetters(letters) + " × " + heightCm + " см × " + rate + " ₽" +
          (small ? " + 25% за малую высоту" : "") + (mount ? " + монтаж 30%" : "");
      }
    };
    const pluralLetters = (n) => {
      const m10 = n % 10, m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return "буква";
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "буквы";
      return "букв";
    };
    [baTextEl, baHeightEl].forEach((el) => el.addEventListener("input", updateBaPrice));
    baTypeEl.addEventListener("change", updateBaPrice);
    if (baMountEl) baMountEl.addEventListener("change", updateBaPrice);
    const baForm = document.getElementById("baQuickForm");
    if (baForm) baForm.addEventListener("submit", (e) => e.preventDefault());
  }
});
