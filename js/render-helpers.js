/* Хелперы отрисовки карточек каталога и портфолио */

function categoryLabel(catId) {
  const found = SERVICE_CATEGORIES.find((c) => c.id === catId);
  return found ? found.label : catId;
}

function renderServiceCard(item) {
  return `
    <article class="card service-card" data-id="${item.id}" data-category="${item.category}" data-name="${item.name.toLowerCase()}">
      <div class="thumb">${item.name}</div>
      <div class="card-body">
        <span class="tag">${categoryLabel(item.category)}</span>
        <h3>${item.name}</h3>
        <p class="muted">${item.desc}</p>
        <a href="prices.html#${item.category}" class="btn btn-outline btn-block">Смотреть цены</a>
      </div>
    </article>
  `;
}

function renderPortfolioCard(item) {
  return `
    <article class="card">
      <div class="thumb">${item.title}</div>
      <div class="card-body">
        <span class="tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="muted">${item.desc}</p>
      </div>
    </article>
  `;
}

/* Портфолио-страница: сетка реальных фотографий выполненных работ.
   Все миниатюры одного размера (квадрат, object-fit: cover), по клику
   открывается увеличенная версия в лайтбоксе (см. openPortfolioLightbox в portfolio.js). */
function renderRibbonThumb(item, index) {
  return `
    <button type="button" class="ribbon-thumb" data-index="${index}" title="${item.title}" aria-label="Открыть фото: ${item.title}">
      <img src="${item.thumb}" alt="${item.title}" loading="lazy">
    </button>
  `;
}

/* Производство: карточка станка/оборудования */
function renderMachineCard(item) {
  return `
    <article class="machine-card">
      <div class="machine-photo">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <h3>${item.name}</h3>
      <p class="muted">${item.desc}</p>
      <ul class="machine-specs">
        ${item.specs.map((s) => `<li><span>${s.label}</span><span>${s.value}</span></li>`).join("")}
      </ul>
    </article>
  `;
}

/* Блог: форматирование даты в русском формате */
function formatBlogDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

/* Блог: обычная карточка новости в ленте */
function renderBlogCard(item) {
  return `
    <article class="card blog-card">
      <div class="thumb"></div>
      <div class="card-body">
        <span class="tag">${item.category}</span>
        <div class="blog-date">${formatBlogDate(item.date)}</div>
        <h3>${item.title}</h3>
        <p class="muted">${item.excerpt}</p>
        <span class="blog-read-more">Читать далее →</span>
      </div>
    </article>
  `;
}

/* Блог: крупная карточка первой/закреплённой новости */
function renderFeaturedBlogPost(item) {
  return `
    <article class="blog-featured">
      <div class="thumb"></div>
      <div class="card-body">
        <span class="tag">${item.category}</span>
        <div class="blog-date">${formatBlogDate(item.date)}</div>
        <h2 style="margin-bottom:0.3em;">${item.title}</h2>
        <p class="muted">${item.excerpt}</p>
        <span class="blog-read-more">Читать далее →</span>
      </div>
    </article>
  `;
}

/* Главная: карточка "отзыв реального клиента" с фото готового объекта для карусели */
function renderCaseCard(review) {
  return `
    <article class="case-card">
      <div class="thumb" style="background-image:url('${review.img}')"></div>
      <div class="case-card-body">
        <span class="tag">${review.category}</span>
        <h3>${review.title}</h3>
        <div class="case-quote">«${review.quote}»</div>
        <div class="case-name">${review.name}</div>
        <div class="case-role">${review.role}</div>
      </div>
    </article>
  `;
}
