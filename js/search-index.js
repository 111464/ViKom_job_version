/* Единый индекс поиска по всему сайту.
   Собирает статичные страницы + разделы услуг + проекты портфолио,
   чтобы поиск в шапке находил информацию на любой странице сайта. */

function buildSearchIndex() {
  const index = [
    { title: "Главная", url: "index.html", type: "Страница", keywords: "главная реклама" },
    { title: "О нас", url: "about.html", type: "Страница", keywords: "о нас о компании агентство виком рекламное агентство команда история" },
    { title: "Наши услуги", url: "services.html", type: "Страница", keywords: "услуги разделы форматы рекламы" },
    { title: "Портфолио", url: "portfolio.html", type: "Страница", keywords: "портфолио проекты кейсы работы" },
    { title: "Цены", url: "prices.html", type: "Страница", keywords: "цены прайс прайс-лист стоимость расценки" },
    { title: "Производство", url: "production.html", type: "Страница", keywords: "производство станки оборудование цех" },
    { title: "Блог", url: "blog.html", type: "Страница", keywords: "блог новости статьи" },
  ];

  if (typeof SERVICES !== "undefined") {
    SERVICES.forEach((item) => {
      index.push({
        title: item.name,
        url: `${item.category}.html`,
        type: "Услуги",
        keywords: `${item.name} ${item.desc}`.toLowerCase(),
      });
    });
  }

  if (typeof PORTFOLIO !== "undefined") {
    PORTFOLIO.forEach((item) => {
      index.push({
        title: item.title,
        url: "portfolio.html",
        type: "Портфолио",
        keywords: `${item.title} ${item.category} ${item.desc}`.toLowerCase(),
      });
    });
  }

  if (typeof PRODUCTION !== "undefined") {
    PRODUCTION.forEach((item) => {
      index.push({
        title: item.name,
        url: "production.html",
        type: "Производство",
        keywords: `${item.name} ${item.desc}`.toLowerCase(),
      });
    });
  }

  if (typeof BLOG !== "undefined") {
    BLOG.forEach((item) => {
      index.push({
        title: item.title,
        url: "blog.html",
        type: "Блог",
        keywords: `${item.title} ${item.category} ${item.excerpt}`.toLowerCase(),
      });
    });
  }

  return index;
}

function searchSite(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const index = buildSearchIndex();
  return index
    .filter((entry) => entry.title.toLowerCase().includes(q) || entry.keywords.includes(q))
    .slice(0, 6);
}
