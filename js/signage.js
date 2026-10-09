/* Страница «Вывески»: калькулятор стоимости букв по прайсу ВИКОМ (цена за 1 см высоты буквы) */
document.addEventListener("DOMContentLoaded", () => {
  const typeEl = document.getElementById("sgType");
  const textEl = document.getElementById("sgText");
  const heightEl = document.getElementById("sgHeight");
  const frameEl = document.getElementById("sgFrame");
  const mountEl = document.getElementById("sgMount");
  const fileEl = document.getElementById("sgFile");
  const totalEl = document.getElementById("sgTotal");
  const linesEl = document.getElementById("sgLines");
  if (!typeEl || !textEl || !heightEl || !totalEl || !linesEl) return;

  const SMALL_CM = 15, SMALL_FACTOR = 1.25;   /* буквы ниже 15 см — от +25% */
  const FRAME_RATE = 1000;                    /* металлокаркас, от 1 000 ₽/п.м. */
  const MOUNT_FACTOR = 1.3;                   /* монтаж — от +30% */
  const FILE_PRICE = 800;                     /* подготовка файла — от 800 ₽ */

  const fmt = (n) => Math.round(n).toLocaleString("ru-RU") + " ₽";
  const plural = (n) => {
    const a = n % 10, b = n % 100;
    if (a === 1 && b !== 11) return "буква";
    if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return "буквы";
    return "букв";
  };

  const update = () => {
    const letters = (textEl.value.match(/[\p{L}\p{N}]/gu) || []).length;
    const h = parseFloat(heightEl.value);
    const rate = Number(typeEl.value);
    const frameM = Math.max(parseFloat(frameEl.value) || 0, 0);

    if (!letters || !h || h <= 0) {
      totalEl.textContent = "—";
      linesEl.innerHTML = '<li class="sg-calc-hint">' + (letters ? letters + " " + plural(letters) + " — укажите высоту букв" : "Введите текст и высоту букв") + "</li>";
      return;
    }

    const rows = [];
    let sum = 0;
    let letterCost = letters * h * rate;
    rows.push([letters + " " + plural(letters) + " × " + h + " см × " + rate + " ₽", letterCost]);
    if (h < SMALL_CM) {
      const extra = letterCost * (SMALL_FACTOR - 1);
      rows.push(["Надбавка за высоту меньше 15 см (+25%)", extra]);
      letterCost += extra;
    }
    sum += letterCost;
    if (frameM > 0) {
      const f = frameM * FRAME_RATE;
      rows.push(["Металлокаркас " + frameM + " п.м. × " + FRAME_RATE.toLocaleString("ru-RU") + " ₽", f]);
      sum += f;
    }
    if (mountEl && mountEl.checked) {
      const m = sum * (MOUNT_FACTOR - 1);
      rows.push(["Монтаж (+30%)", m]);
      sum += m;
    }
    if (fileEl && fileEl.checked) {
      rows.push(["Подготовка файла", FILE_PRICE]);
      sum += FILE_PRICE;
    }

    totalEl.textContent = "от " + fmt(Math.round(sum / 10) * 10);
    linesEl.innerHTML = rows.map((r) => "<li><span>" + r[0] + "</span><b>" + fmt(r[1]) + "</b></li>").join("");
  };

  [textEl, heightEl, frameEl].forEach((el) => el && el.addEventListener("input", update));
  [typeEl, mountEl, fileEl].forEach((el) => el && el.addEventListener("change", update));
  const form = document.getElementById("sgCalcForm");
  if (form) form.addEventListener("submit", (e) => e.preventDefault());
  update();
});
