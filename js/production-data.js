/* Оборудование собственного производства ВИКОМ.
   Используется на странице production.html. */

const PRODUCTION = [
  {
    id: "uv-printer",
    name: "УФ-принтер BluePrint 3200",
    desc: "Прямая УФ-печать по жёстким и рулонным материалам: композит, оргстекло, ПВХ, баннер, дерево, стекло.",
    image: "assets/machines/uv-printer-blueprint3200.png",
    specs: [
      { label: "Формат печати", value: "до 3,2 м" },
      { label: "Печатающие головы", value: "Kyocera / Ricoh / Konica" },
      { label: "Материалы", value: "жёсткие и рулонные" },
    ],
  },
  {
    id: "eco-solvent-vj1624",
    name: "Экосольвент принтер ValueJet VJ-1624",
    desc: "Экосольвентная печать баннеров, наклеек и вывесок с высокой скоростью и точным позиционированием капли.",
    image: "assets/machines/uv-valuejet-vj1624.jpeg",
    specs: [
      { label: "Ширина печати", value: "до 1,62 м" },
      { label: "Скорость", value: "до 600 фут²/ч" },
      { label: "Технология", value: "пьезоструйная" },
    ],
  },
  {
    id: "eco-solvent-at3300s",
    name: "Экосольвент AT-3300S",
    desc: "Широкоформатная экосольвентная печать баннеров и плёнок для наружной и интерьерной рекламы.",
    image: "assets/machines/eco-solvent-at3300s.jpeg",
    specs: [
      { label: "Формат печати", value: "до 3,2 м" },
      { label: "Разрешение", value: "1440 dpi" },
      { label: "Материалы", value: "баннер, плёнка, сетка" },
    ],
  },
  {
    id: "cutting-plotter",
    name: "Плоттер",
    desc: "Резка самоклеящейся плёнки и баннерной ткани по контуру для наклеек, вывесок и оформления витрин.",
    image: "assets/machines/cutting-plotter.png",
    specs: [
      { label: "Ширина реза", value: "до 1,6 м" },
      { label: "Позиционирование", value: "по меткам (ARMS)" },
      { label: "Материалы", value: "плёнка, бумага, картон" },
    ],
  },
  {
    id: "letter-bender-dobosen",
    name: "Бортогиб Dobosen",
    desc: "Автоматическая гибка алюминиевого профиля для бортов объёмных световых букв и коробов.",
    image: "assets/machines/letter-bender-dobosen.png",
    specs: [
      { label: "Высота профиля", value: "до 130 мм" },
      { label: "Управление", value: "компьютерное, авто-гиб" },
      { label: "Материал", value: "алюминий" },
    ],
  },
  {
    id: "solvent-signstar-volk-c7",
    name: "Сольвент Signstar Volk C7",
    desc: "Скоростная сольвентная печать брандмауэров, перетяжек и баннеров большим форматом одним полотном.",
    image: "assets/machines/solvent-signstar-volk-c7.jpeg",
    specs: [
      { label: "Формат печати", value: "до 3,2 м" },
      { label: "Печатающие головы", value: "Konica Minolta" },
      { label: "Цветность", value: "CMYK" },
    ],
  },
  {
    id: "dtf-printer",
    name: "ДТФ",
    desc: "Прямая печать на плёнке для последующего термопереноса изображения на текстиль и сувенирную продукцию.",
    image: "assets/machines/dtf-printer.jpeg",
    specs: [
      { label: "Печатающие головы", value: "2 × Epson i3200" },
      { label: "Ширина плёнки", value: "до 60 см" },
      { label: "Цветность", value: "CMYK + White" },
    ],
  },
  {
    id: "cnc-wood-router",
    name: "Фрезер с ЧПУ по дереву на гусеницах",
    desc: "Рельсовый фрезерно-гравировальный станок с ЧПУ для раскроя, резьбы и гравировки по дереву и МДФ для объёмных вывесок и элементов интерьера.",
    image: "assets/machines/cnc-wood-router.png",
    specs: [
      { label: "Рабочее поле", value: "1,3 × 2,5 м" },
      { label: "Точность", value: "±0,03 мм" },
      { label: "Материалы", value: "дерево, МДФ, ЛДСП" },
    ],
  },
];
