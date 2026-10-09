/* Страница «Интерьерная печать»: калькулятор по прайсу ВИКОМ (цена за м² × площадь × тираж).
   Цены берутся из PRICE_TABLES (js/prices-data.js) — правьте прайс только там. */
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const matEl = $("ipMaterial"), wEl = $("ipW"), hEl = $("ipH"), qEl = $("ipQty");
  const lamEl = $("ipLam"), cutEl = $("ipCut"), fileEl = $("ipFile");
  const totalEl = $("ipTotal"), linesEl = $("ipLines");
  if (!matEl || !totalEl || !linesEl || typeof PRICE_TABLES === "undefined") return;

  const LAM = 220, CUT = 30, FILE = 500;
  const num = (s) => parseInt(String(s).replace(/[^\d]/g, ""), 10) || 0;
  const fmt = (n) => Math.round(n).toLocaleString("ru-RU") + " ₽";
  const fmtM = (n) => (Math.round(n * 100) / 100).toString().replace(".", ",");
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const short = (s) => s.replace(/\s*\([^)]*\)/, "");

  /* Список позиций: [{group, label, price, min}] */
  const list = [];
  PRICE_TABLES.canvas.rows.forEach((r) => list.push({ group: "Холст", label: r[0], price: num(r[2]), min: num(r[3]) }));
  PRICE_TABLES.uv.rows.forEach((r) => {
    const own = /заказчика/i.test(r[0]);
    list.push({ group: "УФ-печать по жёстким материалам", label: r[0], price: num(r[2]), min: own ? 400 : 500 });
  });
  PRICE_TABLES.banners.rows.filter((r) => /интерьерная/i.test(r[1])).forEach((r) =>
    list.push({ group: "Баннер, плёнка, бумага (интерьерная печать)", label: short(r[0]) + " — " + r[1].replace(/\s*интерьерная/i, "").toLowerCase(), price: num(r[2]), min: num(r[3]), flex: true }));

  const groups = [];
  list.forEach((it, i) => { let g = groups.find((x) => x.name === it.group); if (!g) groups.push(g = { name: it.group, items: [] }); g.items.push([i, it]); });
  matEl.innerHTML = groups.map((g) => `<optgroup label="${esc(g.name)}">${g.items.map(([i, it]) => `<option value="${i}">${esc(it.label)} — ${it.price.toLocaleString("ru-RU")} ₽/м²</option>`).join("")}</optgroup>`).join("");

  const update = () => {
    const it = list[Number(matEl.value)];
    const w = parseFloat(String(wEl.value).replace(",", "."));
    const h = parseFloat(String(hEl.value).replace(",", "."));
    const qty = Math.max(parseInt(qEl.value, 10) || 1, 1);
    if (!it || !(w > 0) || !(h > 0)) {
      totalEl.textContent = "—";
      linesEl.innerHTML = '<li class="sg-calc-hint">Введите ширину и высоту изделия</li>';
      return;
    }
    const area = w * h, rows = [];
    let sum = 0;
    const raw = area * qty * it.price, cost = Math.max(raw, it.min);
    rows.push([`Печать: ${fmtM(area)} м² × ${qty} шт × ${it.price.toLocaleString("ru-RU")} ₽`, raw]);
    if (raw < it.min) rows.push([`Доплата до минимального заказа (${it.min} ₽)`, it.min - raw]);
    sum += cost;
    if (lamEl.checked) { const c = area * qty * LAM; rows.push([`Ламинирование: ${fmtM(area * qty)} м² × ${LAM} ₽`, c]); sum += c; }
    if (cutEl.checked) { const p = 2 * (w + h) * qty, c = p * CUT; rows.push([`Плоттерная резка: ${fmtM(p)} п.м. × ${CUT} ₽`, c]); sum += c; }
    if (fileEl.checked) { rows.push(["Эскиз / подготовка макета (от)", FILE]); sum += FILE; }
    totalEl.textContent = "от " + fmt(Math.round(sum / 10) * 10);
    linesEl.innerHTML = rows.map((r) => `<li><span>${esc(r[0])}</span><b>${fmt(r[1])}</b></li>`).join("");
  };

  matEl.addEventListener("change", update);
  [wEl, hEl, qEl].forEach((el) => el.addEventListener("input", update));
  [lamEl, cutEl, fileEl].forEach((el) => el.addEventListener("change", update));
  const form = $("ipCalcForm"); if (form) form.addEventListener("submit", (e) => e.preventDefault());
  update();
});
