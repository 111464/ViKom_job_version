/* Главная страница: карусель отзывов реальных клиентов с фото готовых объектов */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("caseCarouselTrack");
  if (track && typeof REVIEWS !== "undefined") {
    const cardsHtml = REVIEWS.map(renderCaseCard).join("");
    /* Дублируем набор карточек для бесшовной бесконечной прокрутки */
    track.innerHTML = cardsHtml + cardsHtml;

    /* Автопрокрутка. Останавливается при наведении мыши и пока человек листает (свайп / стрелки);
       если касаний не было 3 секунды — автопрокрутка снова едет сама. */
    const viewport = track.parentElement;          /* .case-carousel-viewport */
    const wrap = viewport.parentElement;           /* .case-carousel-wrap: окно + кнопки */
    const AUTO_SPEED = 0.12; /* px/мс */
    const STEP = 382;        /* карточка 360 + зазор 22 */
    const IDLE_MS = 3000;
    let offset = 0, lastTs = null, hovering = false, touching = false, anim = null, idleUntil = 0;
    const half = () => track.scrollWidth / 2;
    const norm = () => {
      const w = half();
      if (w > 0) {
        const n = ((offset % w) + w) % w;
        if (n !== offset) { const d = offset - n; offset = n; if (anim) { anim.from -= d; anim.to -= d; } if (drag) drag.off -= d; }
      }
    };
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const touched = () => { idleUntil = performance.now() + IDLE_MS; };
    let drag = null;
    const frame = (ts) => {
      const dt = lastTs === null ? 0 : Math.min(ts - lastTs, 100);
      lastTs = ts;
      if (anim) {
        const k = Math.min(1, (ts - anim.t0) / anim.dur);
        offset = anim.from + (anim.to - anim.from) * ease(k);
        if (k >= 1) anim = null;
      } else if (!hovering && !touching && ts >= idleUntil) {
        offset += dt * AUTO_SPEED;
      }
      norm();
      track.style.transform = "translate3d(" + (-offset) + "px,0,0)";
      requestAnimationFrame(frame);
    };
    track.style.animation = "none";
    requestAnimationFrame(frame);

    /* Наведение — только настоящей мышью (на телефоне после тапа «наведение» не залипает) */
    wrap.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") hovering = true; });
    wrap.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") hovering = false; });

    /* Свайп пальцем и перетаскивание мышью */
    viewport.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, off: offset, on: false, lastX: e.clientX, lastT: e.timeStamp, v: 0 };
      touching = true;
      anim = null;
    });
    viewport.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      if (!drag.on) {
        if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(e.clientY - drag.y)) return;
        drag.on = true;
        viewport.classList.add("is-dragging");
        try { viewport.setPointerCapture(e.pointerId); } catch (err) {}
      }
      const dtm = e.timeStamp - drag.lastT;
      if (dtm > 0) drag.v = 0.8 * drag.v + 0.2 * ((drag.lastX - e.clientX) / dtm);
      drag.lastX = e.clientX; drag.lastT = e.timeStamp;
      offset = drag.off - dx;
    });
    const endDrag = (e) => {
      if (!drag || (e && e.pointerId !== drag.id)) return;
      if (drag.on) {
        viewport.classList.remove("is-dragging");
        try { viewport.releasePointerCapture(drag.id); } catch (err) {}
        /* лёгкая инерция после броска */
        const fling = Math.max(-420, Math.min(420, drag.v * 220));
        if (Math.abs(fling) > 8) anim = { from: offset, to: offset + fling, t0: performance.now(), dur: 500 };
      }
      drag = null;
      touching = false;
      touched();
    };
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dragstart", (e) => e.preventDefault());

    const go = (dir) => {
      const from = anim ? anim.to : offset;
      anim = { from: offset, to: from + dir * STEP, t0: performance.now(), dur: 450 };
      touched();
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
