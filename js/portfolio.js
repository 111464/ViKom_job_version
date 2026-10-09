/* Портфолио: сетка реальных фотографий выполненных работ + лайтбокс для просмотра по клику */

document.addEventListener("DOMContentLoaded", () => {
  const ribbon = document.getElementById("portfolioRibbon");
  if (ribbon && typeof PORTFOLIO_IMAGES !== "undefined") {
    ribbon.innerHTML = PORTFOLIO_IMAGES.map((item, i) => renderRibbonThumb(item, i)).join("");

    ribbon.addEventListener("click", (e) => {
      const btn = e.target.closest(".ribbon-thumb");
      if (!btn) return;
      openPortfolioLightbox(Number(btn.dataset.index));
    });
  }

  setupPortfolioLightbox();
});

/* ---------- Лайтбокс: увеличенный просмотр фото портфолио ---------- */
let _lightboxIndex = 0;

function setupPortfolioLightbox() {
  const lb = document.getElementById("portfolioLightbox");
  if (!lb) return;

  const closeBtn = lb.querySelector(".lightbox-close");
  const prevBtn = lb.querySelector(".lightbox-prev");
  const nextBtn = lb.querySelector(".lightbox-next");

  closeBtn.addEventListener("click", closePortfolioLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closePortfolioLightbox();
  });
  prevBtn.addEventListener("click", () => stepPortfolioLightbox(-1));
  nextBtn.addEventListener("click", () => stepPortfolioLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closePortfolioLightbox();
    if (e.key === "ArrowLeft") stepPortfolioLightbox(-1);
    if (e.key === "ArrowRight") stepPortfolioLightbox(1);
  });
}

function openPortfolioLightbox(index) {
  _lightboxIndex = index;
  renderPortfolioLightbox();
  const lb = document.getElementById("portfolioLightbox");
  lb.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closePortfolioLightbox() {
  const lb = document.getElementById("portfolioLightbox");
  lb.classList.remove("is-open");
  document.body.style.overflow = "";
}

function stepPortfolioLightbox(delta) {
  const total = PORTFOLIO_IMAGES.length;
  _lightboxIndex = (_lightboxIndex + delta + total) % total;
  renderPortfolioLightbox();
}

function renderPortfolioLightbox() {
  const item = PORTFOLIO_IMAGES[_lightboxIndex];
  const lb = document.getElementById("portfolioLightbox");
  const img = lb.querySelector(".lightbox-img");
  const caption = lb.querySelector(".lightbox-caption");
  img.src = item.full;
  img.alt = item.title;
  caption.textContent = `${item.title} · ${_lightboxIndex + 1} / ${PORTFOLIO_IMAGES.length}`;
}
