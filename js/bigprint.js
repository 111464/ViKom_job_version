/* Страница «Широкоформатная печать»: калькулятор по прайсу ВИКОМ (цена за м² × площадь × тираж).
   Материалы и цены берутся из PRICE_TABLES.banners (js/prices-data.js) — правьте прайс только там. */
document.addEventListener("DOMContentLoaded", () => {
  const matEl = document.getElementById("bpMaterial");
  const prEl = document.getElementById("bpPrint");
  const wEl = document.getElementById("bpW");
  const hEl = document.getElementById("bpH");
  const qEl = document.getElementById("bpQty");
  const luvEl = document.getElementById("bpLuvers");
  const ropeEl = document.getElementById("bpRope");
  const lamEl = document.getElementById("bpLam");
  const fileEl = document.getElementById("bpFile");
  const totalEl = document.getElementById("bpTotal");
  const linesEl = document.getElementById("bpLines");
  const noteEl = document.getElementById("bpNote");
  if (!matEl || !prEl || !totalEl || !linesEl || typeof PRICE_TABLES === "undefined") return;

  const ROLL = 3.2;          /* ширина рулона, м */
  const LUVER_STEP = 0.5;    /* шаг люверсов, м (ориентировочно) */
  const LUVER = 17;          /* люверс с установкой, ₽/шт */
  const ROPE = 120;          /* проклейка периметра с верёвкой, ₽/п.м. */
  const GLUE = 100;          /* склейка полотен, ₽/п.м. */
  const LAM = 220;           /* ламинирование, ₽/м² */
  const FILE = 500;          /* эскиз / подготовка макета, от ₽ */
  const BASE_NOTE = noteEl ? noteEl.textContent : "";

  const num = (s) => parseInt(String(s).replace(/[^\d]/g, ""), 10) || 0;
  const fmt = (n) => Math.round(n).toLocaleString("ru-RU") + " ₽";
  const fmtM = (n) => (Math.round(n * 100) / 100).toString().replace(".", ",");
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* Материал → список видов печати с ценой и минимальным заказом */
  const items = new Map();
  PRICE_TABLES.banners.rows.forEach((r) => {
    if (!items.has(r[0])) items.set(r[0], []);
    items.get(r[0]).push({ type: r[1], price: num(r[2]), min: num(r[3]) });
  });
  const names = Array.from(items.keys());
  matEl.innerHTML = names.map((n, i) => `<option value="${i}">${esc(n.replace(/\s*\([^)]*\)/, ""))}</option>`).join("");

  const fillPrint = () => {
    const opts = items.get(names[Number(matEl.value)]) || [];
    prEl.innerHTML = opts.map((o, i) => `<option value="${i}">${esc(o.type)} — ${o.price} ₽/м²</option>`).join("");
  };

  const update = () => {
    const name = names[Number(matEl.value)];
    const opt = (items.get(name) || [])[Number(prEl.value)];
    const w = parseFloat(String(wEl.value).replace(",", "."));
    const h = parseFloat(String(hEl.value).replace(",", "."));
    const qty = Math.max(parseInt(qEl.value, 10) || 1, 1);
    if (noteEl) noteEl.textContent = BASE_NOTE;

    if (!opt || !(w > 0) || !(h > 0)) {
      totalEl.textContent = "—";
      linesEl.innerHTML = '<li class="sg-calc-hint">Введите ширину и высоту изделия</li>';
      return;
    }

    const area = w * h;
    const rows = [];
    let sum = 0;

    const printRaw = area * qty * opt.price;
    const print = Math.max(printRaw, opt.min);
    rows.push([`Печать: ${fmtM(area)} м² × ${qty} шт × ${opt.price} ₽`, printRaw]);
    if (printRaw < opt.min) rows.push([`Доплата до минимального заказа (${opt.min} ₽)`, opt.min - printRaw]);
    sum += print;

    /* Склейка: если обе стороны больше ширины рулона */
    const isRoll = /баннер|плёнк|бумаг/i.test(name);
    const shortSide = Math.min(w, h), longSide = Math.max(w, h);
    if (isRoll && shortSide > ROLL) {
      const seams = Math.ceil(shortSide / ROLL) - 1;
      const glue = seams * longSide * qty * GLUE;
      rows.push([`Склейка полотен (${seams} шов., ${fmtM(seams * longSide * qty)} п.м.)`, glue]);
      sum += glue;
    }

    const perim = 2 * (w + h);
    if (luvEl.checked) {
      const n = Math.max(4, Math.ceil(perim / LUVER_STEP)) * qty;
      rows.push([`Люверсы: ${n} шт × ${LUVER} ₽`, n * LUVER]);
      sum += n * LUVER;
    }
    if (ropeEl.checked) {
      const c = perim * qty * ROPE;
      rows.push([`Проклейка периметра с верёвкой: ${fmtM(perim * qty)} п.м.`, c]);
      sum += c;
    }
    if (lamEl.checked) {
      const c = area * qty * LAM;
      rows.push([`Ламинирование: ${fmtM(area * qty)} м² × ${LAM} ₽`, c]);
      sum += c;
    }
    if (fileEl.checked) {
      rows.push(["Эскиз / подготовка макета (от)", FILE]);
      sum += FILE;
    }

    totalEl.textContent = "от " + fmt(Math.round(sum / 10) * 10);
    linesEl.innerHTML = rows.map((r) => `<li><span>${esc(r[0])}</span><b>${fmt(r[1])}</b></li>`).join("");

    /* Подсказки по ограничениям материала */
    if (noteEl) {
      if (/литой/i.test(name) && longSide < 3) {
        noteEl.innerHTML = '<span class="sg-calc-warn">Для литого баннера длина одной из сторон макета — не менее 3 м.</span> ' + BASE_NOTE;
      } else if (!isRoll) {
        noteEl.textContent = BASE_NOTE;
      }
    }
  };

  matEl.addEventListener("change", () => { fillPrint(); update(); });
  prEl.addEventListener("change", update);
  [wEl, hEl, qEl].forEach((el) => el.addEventListener("input", update));
  [luvEl, ropeEl, lamEl, fileEl].forEach((el) => el.addEventListener("change", update));
  const form = document.getElementById("bpCalcForm");
  if (form) form.addEventListener("submit", (e) => e.preventDefault());
  fillPrint();
  update();
});
