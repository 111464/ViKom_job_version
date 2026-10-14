/* Общая логика для всех страниц: шапка, поиск, подвал */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Раскрывающееся меню (слева, во всю высоту страницы) ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const dropdownNav = document.getElementById("dropdownNav");
  const navOverlay = document.getElementById("navOverlay");

  if (menuToggle && dropdownNav) {
    const closeMenu = () => {
      dropdownNav.classList.remove("open");
      if (navOverlay) navOverlay.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-locked");
    };
    const openMenu = () => {
      dropdownNav.classList.add("open");
      if (navOverlay) navOverlay.classList.add("open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-locked");
    };

    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdownNav.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });

    if (navOverlay) navOverlay.addEventListener("click", closeMenu);

    document.addEventListener("click", (e) => {
      if (!dropdownNav.contains(e.target) && e.target !== menuToggle) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    dropdownNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    /* Подсветка текущей страницы в меню (только пункты верхнего уровня —
       вложенные ссылки подменю «Наши услуги» подсвечиваются отдельно) */
    const currentPage = document.body.dataset.page;
    if (currentPage) {
      const activeLink = dropdownNav.querySelector(`:scope > a[data-page="${currentPage}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  }

  /* ---------- Поиск по всему сайту: шапка (десктоп) + меню (мобильные) ---------- */
  setupSearchInstance("headerSearchForm", "headerSearch", "searchSuggest");
  setupSearchInstance("navSearchForm", "navSearchInput", "navSearchSuggest");

  /* ---------- Услуги в меню: подсветка текущего раздела ---------- */
  if (dropdownNav) {
    const curFile = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
    const curSub = dropdownNav.querySelector(':scope > a[data-sub="' + curFile + '"]');
    if (curSub) curSub.classList.add("active");
    if (document.body.dataset.page === "services") {
      const all = dropdownNav.querySelector(':scope > a[data-page="services"]');
      if (all) all.classList.add("active");
    }
  }

  /* ---------- Форма обратной связи в подвале ---------- */
  const feedbackForm = document.getElementById("feedbackForm");
  const formSuccess = document.getElementById("formSuccess");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      feedbackForm.reset();
      feedbackForm.classList.add("hidden");
      if (formSuccess) formSuccess.hidden = false;
    });
  }

  /* ---------- Плавное появление текста и блоков при прокрутке ---------- */
  initScrollReveal();

  /* ---------- Слайдер «До / После» ---------- */
  initBeforeAfterSlider();
});

function initBeforeAfterSlider() {
  const inner = document.getElementById("baSliderInner");
  const clip = document.getElementById("baClip");
  const divider = document.getElementById("baDivider");
  const handle = document.getElementById("baHandle");
  const range = document.getElementById("baRange");
  if (!inner || !clip || !divider || !handle || !range) return;

  let dragging = false;

  const setFullWidth = () => {
    inner.style.setProperty("--ba-full-width", `${inner.offsetWidth}px`);
  };

  const setPosition = (percent, syncRange = true) => {
    const p = Math.min(100, Math.max(0, percent));
    clip.style.width = `${p}%`;
    divider.style.left = `${p}%`;
    handle.style.left = `${p}%`;
    if (syncRange) range.value = String(Math.round(p));
  };

  const percentFromClientX = (clientX) => {
    const rect = inner.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  };

  setFullWidth();
  setPosition(Number(range.value));

  /* Перетаскивание — только за ручку по центру (или линию рядом с ней),
     чтобы не нужно было целиться в верх фотографии */
  const startDrag = (e) => {
    dragging = true;
    handle.classList.add("dragging");
    handle.setPointerCapture(e.pointerId);
    setPosition(percentFromClientX(e.clientX));
    e.preventDefault();
  };
  const moveDrag = (e) => {
    if (!dragging) return;
    setPosition(percentFromClientX(e.clientX));
  };
  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove("dragging");
    if (handle.hasPointerCapture(e.pointerId)) handle.releasePointerCapture(e.pointerId);
  };

  handle.addEventListener("pointerdown", startDrag);
  handle.addEventListener("pointermove", moveDrag);
  handle.addEventListener("pointerup", endDrag);
  handle.addEventListener("pointercancel", endDrag);

  /* Клавиатура: фокус на скрытом range-инпуте, стрелки двигают ползунок */
  range.addEventListener("input", (e) => setPosition(Number(e.target.value), false));

  window.addEventListener("resize", debounce(setFullWidth, 150));

  /* ResizeObserver подстраховывает пересчёт, если контейнер меняет ширину
     без события resize окна (напр. при смене ориентации на некоторых устройствах) */
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => setFullWidth());
    ro.observe(inner);
  }
}

function setupSearchInstance(formId, inputId, suggestId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  const suggest = document.getElementById(suggestId);
  if (!input) return;

  function renderSuggestions(query) {
    if (!suggest) return;
    const results = typeof searchSite === "function" ? searchSite(query) : [];
    if (!query.trim()) {
      suggest.classList.remove("open");
      suggest.innerHTML = "";
      return;
    }
    if (!results.length) {
      suggest.innerHTML = `<div class="search-suggest-empty">Ничего не найдено по запросу «${query}»</div>`;
    } else {
      suggest.innerHTML = results
        .map((r) => `<a href="${r.url}"><span class="search-suggest-title">${r.title}</span><span class="search-suggest-type">${r.type}</span></a>`)
        .join("");
    }
    suggest.classList.add("open");
  }

  input.addEventListener("input", (e) => renderSuggestions(e.target.value));
  input.addEventListener("focus", (e) => { if (e.target.value.trim()) renderSuggestions(e.target.value); });
  document.addEventListener("click", (e) => {
    if (suggest && !suggest.contains(e.target) && e.target !== input) {
      suggest.classList.remove("open");
    }
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = input.value.trim();
      const results = typeof searchSite === "function" ? searchSite(query) : [];
      if (results.length) {
        window.location.href = results[0].url;
      } else {
        window.location.href = "services.html";
      }
    });
  }
}

function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

function initScrollReveal() {
  const selector = [
    ".hero-copy", ".page-hero .container", ".section-head",
    ".price-tier", ".process-step", ".service-tile", ".card",
    ".stats-row", ".testimonial-card", ".calc-categories",
    ".calc-form", ".calc-result", "#about .grid-2 > div",
    ".machine-card", ".blog-featured", ".blog-card", ".ribbon-thumb", ".price-table-wrap",
  ].join(", ");

  const targets = Array.from(document.querySelectorAll(selector));
  if (!targets.length) return;

  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.09}s`;
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ---------- Кнопка «Наверх» ---------- */
(function initBackToTop() {
  const init = () => {
    if (document.getElementById("toTop")) return;
    const btn = document.createElement("button");
    btn.id = "toTop";
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("aria-label", "Наверх");
    btn.title = "Наверх";
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 15 12 9 18 15"/></svg>';
    document.body.appendChild(btn);

    const SHOW_AFTER = 300; /* px прокрутки вниз, после которых кнопка появляется */
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      btn.classList.toggle("is-visible", y > SHOW_AFTER);
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });

    btn.addEventListener("click", () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      btn.blur();
    });
    update();
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
