const PLAY_URL = "https://play.google.com/store/apps/details?id=cz.raldes.ukulelepouch";
const PRIVACY_URL = "https://albardo.github.io/ukulele-pouch-legal/privacy-policy";
const APP_PRICE = null;
const APP_CURRENCY = "CZK";
const MOBILE_MEDIA = window.matchMedia("(max-width: 899px)");
const COMPACT_SCREENSHOTS = true;
const THEME_KEY = "ukuleleTheme";
const supportedThemes = ["light", "dark"];
const ROOT_PATH = getRootPath();
const IS_FILE_PROTOCOL = window.location.protocol === "file:";

function getRootPath() {
  const path = window.location.pathname;
  if (path.includes("/ukulele-pouch/")) {
    return "/ukulele-pouch/";
  }
  if (/\/(cs|en)\/[^/]+\/index\.html$/.test(path)) {
    return path.replace(/(cs|en)\/[^/]+\/index\.html$/, "");
  }
  if (/\/(cs|en)\/[^/]+\/$/.test(path)) {
    return path.replace(/(cs|en)\/[^/]+\/$/, "");
  }
  if (/\/(cs|en)\/index\.html$/.test(path)) {
    return path.replace(/(cs|en)\/index\.html$/, "");
  }
  if (/\/(cs|en)\/$/.test(path)) {
    return path.replace(/(cs|en)\/$/, "");
  }
  if (path.endsWith("/index.html")) {
    return path.replace(/index\.html$/, "");
  }
  if (path.endsWith("/")) {
    return path;
  }
  return path.replace(/[^/]+$/, "");
}

function toAbsoluteUrl(path) {
  if (IS_FILE_PROTOCOL) {
    return new URL(path, window.location.href).toString();
  }
  return `${window.location.origin}${path}`;
}



const langButtons = document.querySelectorAll(".lang-btn");
const themeButtons = document.querySelectorAll(".theme-btn");
const deviceTabs = document.querySelectorAll(".device-tab");
const deviceSections = document.querySelectorAll(".device-section");
const deviceTabsWrapper = document.querySelector(".device-tabs");
const screenshotGridPhone = document.getElementById("screenshot-grid-phone");
const screenshotGridTablet = document.getElementById("screenshot-grid-tablet");
const carouselButtons = document.querySelectorAll(".carousel-btn");
const carouselDots = document.querySelectorAll(".carousel-dots");
const jsonLdScript = document.getElementById("json-ld");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const screenshotsSection = document.querySelector(".screenshots");
const faviconEl = document.getElementById("favicon");
const metaThemeColorEl = document.getElementById("meta-theme-color");

let currentLang = "en";
let currentDevice = "phone";
let currentTheme = "light";
let screenshotsData = [];
let lastFocusedCard = null;
let lightboxItems = [];
let lightboxIndex = -1;
let lightboxDevice = null;

const supportedLangs = ["cs", "en"];

function detectLanguage() {
  const path = window.location.pathname;
  if (path.includes("/cs/")) return "cs";
  if (path.includes("/en/")) return "en";

  const storedLang = localStorage.getItem("ukuleleLang");
  if (supportedLangs.includes(storedLang)) return storedLang;

  const preferred = navigator.languages?.[0] || navigator.language || "en";
  if (preferred.toLowerCase().startsWith("cs") || preferred.toLowerCase().startsWith("sk")) {
    return "cs";
  }
  return "en";
}

function detectTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return stored === "dark" ? "dark" : "light";
}

function setTheme(theme, { persist = true } = {}) {
  const next = supportedThemes.includes(theme) ? theme : "light";
  currentTheme = next;
  document.documentElement.dataset.theme = next;

  if (persist) {
    localStorage.setItem(THEME_KEY, next);
  }

  updateThemeButtons(next);
  updateThemeAssets(next);
  updateThemeMeta(next);

  if (screenshotsData.length) {
    renderScreenshots();
    updateStructuredData();
  }
}

function updateThemeButtons(theme) {
  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.theme === theme ? "true" : "false");
  });
}

function updateThemeAssets(theme) {
  document.querySelectorAll("img[data-src-light][data-src-dark]").forEach((img) => {
    img.src = theme === "dark" ? img.dataset.srcDark : img.dataset.srcLight;
  });

  if (faviconEl) {
    faviconEl.href = theme === "dark"
      ? `${ROOT_PATH}assets/icon-dark.png`
      : `${ROOT_PATH}assets/icon.png`;
  }
}

function updateThemeMeta(theme) {
  if (!metaThemeColorEl) return;
  metaThemeColorEl.setAttribute("content", theme === "dark" ? "#3A3630" : "#F8F1E3");
}

function screenshotsBase(device) {
  return `${ROOT_PATH}assets/screenshots-${device}${currentTheme === "dark" ? "-dark" : ""}`;
}

function screenshotSrc(device, file) {
  return `${screenshotsBase(device)}/${file}`;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("ukuleleLang", lang);

  const desiredPath = `${ROOT_PATH}${lang}/`;
  if (!window.location.pathname.startsWith(desiredPath)) {
    try {
      sessionStorage.setItem("ukuleleScrollY", String(window.scrollY));
      sessionStorage.setItem("ukuleleScrollPending", "1");
    } catch (e) {
      // Ignore storage errors.
    }
    window.location.href = IS_FILE_PROTOCOL ? `${ROOT_PATH}${lang}/index.html` : desiredPath;
    return;
  }

  document.documentElement.lang = lang;
  const isStaticPage = document.body?.dataset.staticPage === "true";
  if (isStaticPage) {
    updateLangButtons(lang);
    return;
  }

  document.title = i18n[lang].metaTitle;

  updateMeta(lang);
  updateContent(lang);
  updateLangButtons(lang);
  updateSocialImages(lang);
  renderScreenshots();
  updateStructuredData();
}

function setCompactMode(enabled) {
  if (!screenshotsSection) return;
  screenshotsSection.classList.toggle("compact", enabled);
}

function updateMeta(lang) {
  const canonical = toAbsoluteUrl(`${ROOT_PATH}${lang}/`);

  document.getElementById("canonical-link").href = canonical;
  document.getElementById("hreflang-cs").href = toAbsoluteUrl(`${ROOT_PATH}cs/`);
  document.getElementById("hreflang-en").href = toAbsoluteUrl(`${ROOT_PATH}en/`);

  document.getElementById("og-url").setAttribute("content", canonical);
  document.getElementById("og-title").setAttribute("content", i18n[lang].metaTitle);
  document.getElementById("og-description").setAttribute("content", i18n[lang].metaDescription);

  document.getElementById("twitter-title").setAttribute("content", i18n[lang].metaTitle);
  document
    .getElementById("twitter-description")
    .setAttribute("content", i18n[lang].metaDescription);

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => applyI18nAttr(element, lang));

  document.querySelectorAll("a[href*='play.google.com']").forEach((link) => {
    link.setAttribute("href", PLAY_URL);
  });
  document.querySelectorAll("a[href*='privacy-policy']").forEach((link) => {
    link.setAttribute("href", PRIVACY_URL);
  });
}

function updateContent(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const text = i18n[lang][key];
    if (typeof text === "string") {
      element.textContent = text;
    }
  });
}

function updateLangButtons(lang) {
  langButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
}

function updateSocialImages(lang) {
  const graphic = lang === "cs"
    ? `${ROOT_PATH}assets/feature-graphic-cz.png`
    : `${ROOT_PATH}assets/feature-graphic-en.png`;
  const absGraphic = toAbsoluteUrl(graphic);
  document.getElementById("og-image").setAttribute("content", absGraphic);
  document.getElementById("twitter-image").setAttribute("content", absGraphic);
}

function fixFileLinks() {
  if (!IS_FILE_PROTOCOL) return;
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("#")) return;
    if (/^(https?:|mailto:|tel:)/i.test(href)) return;
    if (!href.endsWith("/")) return;
    link.setAttribute("href", `${href}index.html`);
  });
}

function applyI18nAttr(element, lang) {
  const key = element.getAttribute("data-i18n");
  const attr = element.getAttribute("data-i18n-attr");
  if (!key || !attr) return;
  const text = i18n[lang][key];
  if (typeof text === "string") {
    element.setAttribute(attr, text);
  }
}

async function loadScreenshots() {
  try {
    const response = await fetch(`${ROOT_PATH}assets/screenshots.json`, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error("Screenshots JSON not found");
    }
    const data = await response.json();
    screenshotsData = Array.isArray(data) ? data : [];
  } catch (error) {
    const fallback = window.SCREENSHOTS_DATA;
    screenshotsData = Array.isArray(fallback) ? fallback : [];
  }
}

function renderScreenshotsForDevice(device, container) {
  if (!container) return;
  const filtered = screenshotsData.filter(
    (item) => item.lang === currentLang && item.device === device
  );

  container.innerHTML = "";

  if (!filtered.length) {
    container.innerHTML = `<div class="card"><p>${
      currentLang === "cs"
        ? "Screenshoty doplníš do assets/screenshots.json"
        : "Add screenshots to assets/screenshots.json"
    }</p></div>`;
    return;
  }

  filtered.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "screenshot-card";
    button.setAttribute("aria-label", item.caption);
    button.dataset.fullSrc = screenshotSrc(item.device, item.file);
    button.dataset.caption = item.caption;
    button.innerHTML = `
      <div class="screenshot-image">
        <img src="${screenshotSrc(item.device, item.file)}" alt="${item.caption}" loading="lazy" />
      </div>
      <p>${item.caption}</p>
    `;
    button.addEventListener("click", () =>
      openLightbox(button.dataset.fullSrc, button.dataset.caption, button)
    );
    container.appendChild(button);
  });
}

function updateDeviceTabs() {
  deviceTabs.forEach((button) => {
    button.setAttribute("aria-selected", button.dataset.device === currentDevice ? "true" : "false");
  });
}

function syncDeviceSections() {
  const hasPhone = screenshotsData.some((item) => item.device === "phone");
  const hasTablet = screenshotsData.some((item) => item.device === "tablet");
  const showTabs = hasPhone && hasTablet;
  if (deviceTabsWrapper) {
    deviceTabsWrapper.style.display = showTabs && MOBILE_MEDIA.matches ? "inline-flex" : "none";
  }

  deviceSections.forEach((section) => {
    const isActive = section.dataset.device === currentDevice;
    section.classList.toggle("is-active", isActive);
  });

  updateDeviceTabs();
}

function renderScreenshots() {
  renderScreenshotsForDevice("phone", screenshotGridPhone);
  renderScreenshotsForDevice("tablet", screenshotGridTablet);
  setupCarousel("phone");
  setupCarousel("tablet");
  syncDeviceSections();
}

function scrollCarousel(target, direction) {
  const grid = target === "tablet" ? screenshotGridTablet : screenshotGridPhone;
  if (!grid) return;
  const step = Math.round(grid.clientWidth * 0.9);
  grid.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
}

function setupCarousel(device) {
  const grid = device === "tablet" ? screenshotGridTablet : screenshotGridPhone;
  const dots = document.querySelector(`.carousel-dots[data-dots-for="${device}"]`);
  if (!grid || !dots) return;

  renderDots(device, grid, dots);
  updateCarouselState(device, grid, dots);

  if (grid.dataset.carouselInit) return;
  grid.dataset.carouselInit = "true";

  let rafId = null;
  grid.addEventListener("scroll", () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateCarouselState(device, grid, dots);
      rafId = null;
    });
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollCarousel(device, "next");
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollCarousel(device, "prev");
    }
  });

  enableDragScroll(grid);
}

function enableDragScroll(grid) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  grid.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".screenshot-card")) {
      return;
    }
    if (event.pointerType !== "mouse") return;
    isDown = true;
    startX = event.clientX;
    scrollLeft = grid.scrollLeft;
    grid.setPointerCapture(event.pointerId);
    grid.classList.add("is-dragging");
  });

  grid.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const walk = event.clientX - startX;
    grid.scrollLeft = scrollLeft - walk;
  });

  grid.addEventListener("pointerup", (event) => {
    if (!isDown) return;
    isDown = false;
    grid.releasePointerCapture(event.pointerId);
    grid.classList.remove("is-dragging");
  });

  grid.addEventListener("pointerleave", () => {
    if (!isDown) return;
    isDown = false;
    grid.classList.remove("is-dragging");
  });
}

function renderDots(device, grid, dots) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  dots.innerHTML = "";
  if (cards.length <= 1) {
    dots.style.display = "none";
    return;
  }
  dots.style.display = "flex";

  cards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => scrollToCard(grid, index));
    dots.appendChild(dot);
  });
}

function scrollToCard(grid, index) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  const card = cards[index];
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", inline: "start" });
}

function updateCarouselState(device, grid, dots) {
  const cards = Array.from(grid.querySelectorAll(".screenshot-card"));
  const prevButton = document.querySelector(
    `.carousel-btn[data-carousel-target="${device}"][data-direction="prev"]`
  );
  const nextButton = document.querySelector(
    `.carousel-btn[data-carousel-target="${device}"][data-direction="next"]`
  );

  const maxScroll = grid.scrollWidth - grid.clientWidth - 1;
  const hasOverflow = grid.scrollWidth > grid.clientWidth + 2;
  if (prevButton) {
    prevButton.disabled = !hasOverflow || grid.scrollLeft <= 1;
  }
  if (nextButton) {
    nextButton.disabled = !hasOverflow || grid.scrollLeft >= maxScroll;
  }

  if (!dots || !cards.length) return;
  const paddingLeft = parseFloat(getComputedStyle(grid).paddingLeft) || 0;
  const target = grid.scrollLeft + paddingLeft + 1;
  let activeIndex = 0;
  let smallestDiff = Number.POSITIVE_INFINITY;
  cards.forEach((card, index) => {
    const diff = Math.abs(card.offsetLeft - target);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      activeIndex = index;
    }
  });

  dots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeIndex);
  });
}

window.addEventListener("resize", () => {
  if (screenshotGridPhone) {
    const dots = document.querySelector('.carousel-dots[data-dots-for="phone"]');
    updateCarouselState("phone", screenshotGridPhone, dots);
  }
  if (screenshotGridTablet) {
    const dots = document.querySelector('.carousel-dots[data-dots-for="tablet"]');
    updateCarouselState("tablet", screenshotGridTablet, dots);
  }
});

function openLightbox(fullSrc, caption, trigger) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lastFocusedCard = trigger || document.activeElement;
  lightboxDevice = fullSrc.includes("screenshots-phone") ? "phone" : "tablet";
  if (lightboxDevice === "phone") {
    lightbox.classList.add("lightbox-phone");
  } else {
    lightbox.classList.remove("lightbox-phone");
  }
  lightboxItems = screenshotsData
    .filter((item) => item.lang === currentLang && item.device === lightboxDevice)
    .map((item) => ({
      src: screenshotSrc(item.device, item.file),
      caption: item.caption,
    }));
  lightboxIndex = lightboxItems.findIndex((item) => item.src === fullSrc);
  if (lightboxIndex < 0) lightboxIndex = 0;
  updateLightboxView();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  lightboxClose?.focus();
}

function updateLightboxView() {
  if (!lightboxImage || !lightboxCaption) return;
  const current = lightboxItems[lightboxIndex];
  if (!current) return;
  lightboxImage.src = current.src;
  lightboxImage.alt = current.caption || "";
  lightboxCaption.textContent = current.caption || "";
  if (lightboxPrev) lightboxPrev.disabled = lightboxIndex <= 0;
  if (lightboxNext) lightboxNext.disabled = lightboxIndex >= lightboxItems.length - 1;
}

function moveLightbox(direction) {
  if (!lightboxItems.length) return;
  const nextIndex = lightboxIndex + direction;
  if (nextIndex < 0 || nextIndex >= lightboxItems.length) return;
  lightboxIndex = nextIndex;
  updateLightboxView();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.classList.remove("lightbox-phone");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
  document.body.classList.remove("no-scroll");
  lightboxItems = [];
  lightboxIndex = -1;
  lightboxDevice = null;
  if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
    lastFocusedCard.focus();
  }
  lastFocusedCard = null;
}

function handleScreenshotClick(event) {
  const path = event.composedPath ? event.composedPath() : [];
  const cardFromPath = path.find(
    (node) => node?.classList && node.classList.contains("screenshot-card")
  );
  const card = cardFromPath || event.target.closest(".screenshot-card");
  if (!card) return;
  const fullSrc = card.dataset.fullSrc;
  const caption = card.dataset.caption;
  if (!fullSrc) return;
  openLightbox(fullSrc, caption, card);
}

function updateStructuredData() {
  const baseUrl = new URL(toAbsoluteUrl(ROOT_PATH));
  const pageUrl = new URL(toAbsoluteUrl(`${ROOT_PATH}${currentLang}/`));
  const screenshots = screenshotsData
    .filter((item) => item.lang === currentLang)
    .map((item) => new URL(screenshotSrc(item.device, item.file), baseUrl).toString());
  const iconPath = currentTheme === "dark"
    ? `${ROOT_PATH}assets/icon-dark.png`
    : `${ROOT_PATH}assets/icon.png`;
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ukulele Pouch",
    operatingSystem: "Android",
    applicationCategory: "MusicApplication",
    url: pageUrl.toString(),
    downloadUrl: PLAY_URL,
    installUrl: PLAY_URL,
    sameAs: PLAY_URL,
    image: new URL(iconPath, baseUrl).toString(),
    screenshot: screenshots,
  };

  if (APP_PRICE !== null) {
    data.offers = {
      "@type": "Offer",
      price: String(APP_PRICE),
      priceCurrency: APP_CURRENCY,
    };
  }

  jsonLdScript.textContent = JSON.stringify(data, null, 2);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetUrl = button.dataset.langUrl;
    if (targetUrl) {
      try {
        sessionStorage.setItem("ukuleleScrollY", String(window.scrollY));
        sessionStorage.setItem("ukuleleScrollPending", "1");
      } catch (e) {
        // Ignore storage errors.
      }
      if (IS_FILE_PROTOCOL && targetUrl.endsWith("/")) {
        window.location.href = `${targetUrl}index.html`;
        return;
      }
      window.location.href = targetUrl;
      return;
    }
    setLang(button.dataset.lang);
  });
});

function restoreScrollPosition() {
  try {
    if (sessionStorage.getItem("ukuleleScrollPending") !== "1") return;
    const stored = sessionStorage.getItem("ukuleleScrollY");
    const value = stored ? Number.parseInt(stored, 10) : 0;
    sessionStorage.removeItem("ukuleleScrollPending");
    sessionStorage.removeItem("ukuleleScrollY");
    if (!Number.isFinite(value)) return;
    requestAnimationFrame(() => {
      window.scrollTo(0, value);
    });
  } catch (e) {
    // Ignore storage errors.
  }
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.theme));
});

deviceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentDevice = button.dataset.device;
    syncDeviceSections();
  });
});


carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scrollCarousel(button.dataset.carouselTarget, button.dataset.direction);
  });
});

if (screenshotGridPhone) {
  screenshotGridPhone.addEventListener("click", handleScreenshotClick);
}

if (screenshotGridTablet) {
  screenshotGridTablet.addEventListener("click", handleScreenshotClick);
}

MOBILE_MEDIA.addEventListener("change", () => {
  if (MOBILE_MEDIA.matches && !currentDevice) {
    currentDevice = "phone";
  }
  syncDeviceSections();
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => moveLightbox(-1));
lightboxNext?.addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    moveLightbox(-1);
  } else if (event.key === "ArrowRight") {
    moveLightbox(1);
  }
});

(async function init() {
  await loadScreenshots();
  currentTheme = detectTheme();
  setTheme(currentTheme, { persist: false });
  currentLang = detectLanguage();
  setLang(currentLang);
  setCompactMode(COMPACT_SCREENSHOTS);
  fixFileLinks();
  requestAnimationFrame(() => {
    document.documentElement.classList.add("theme-ready");
  });
  restoreScrollPosition();
})();
