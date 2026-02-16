const PLAY_URL = "https://play.google.com/store/apps/details?id=cz.raldes.ukulelepouch";
const PRIVACY_URL = "https://albardo.github.io/ukulele-pouch-legal/privacy-policy";
const APP_PRICE = null;
const APP_CURRENCY = "CZK";
const MOBILE_MEDIA = window.matchMedia("(max-width: 899px)");
const COMPACT_SCREENSHOTS = true;

const i18n = {
  cs: {
  metaTitle: "Ukulele Pouch",
    metaDescription:
      "Aplikace se vším co na ukulele potřebuješ: import PDF zpěvníků a tabulatur, knihovna akordů, akordových progresí, stupnice, ladička (High‑G/Low‑G) a metronom. Funguje offline. Bez reklam.",
    heroTitle: "Ukulele Pouch",
    heroSubtitle:
      "Aplikace se vším co na ukulele potřebuješ: import PDF zpěvníků a tabulatur, knihovna akordů, akordových progresí, stupnice, ladička a metronom.",
    heroLead:
      "Měj své PDF zpěvníky a tabulatury na jednom místě, procházej akordy a cvič s vestavěnými nástroji. Navrženo pro pohodlné cvičení, výuku i hraní pro radost.",
    primaryCta: "Stáhnout z Google Play",
    qrCaption: "Naskenuj QR pro otevření Google Play",
    qrAlt: "QR kód na Google Play",
    logoAlt: "Logo Ukulele Pouch",
  heroTagline: "Pohodový nástroj pro ukulele",
    badgeOffline: "Funguje offline",
    badgeNoAds: "Bez reklam",
    badgeNoSubs: "Bez předplatného",
    featuresTitle: "Co umí",
    feature1Title: "PDF zpěvník a taby",
    feature1Desc: "Importování vlastních PDF, třidění do kategorií a rychlé vyhledávání..",
    feature2Title: "Akordy",
    feature2Desc:
      "Najdi skoro každý akord s několika prstoklady. Přehraj ho, ulož do oblíbených a urči název z hmatníku.",
    feature3Title: "Akordové progrese",
    feature3Desc:
      "Filtruj podle nálady/žánru/energie i římských číslic, transponuj do libovolné tóniny a přehrávej.",
    feature4Title: "Stupnice",
    feature4Desc:
      "Zobraz tóny na hmatníku a diatonické akordy. Přehraj stupnici i její akordy.",
    feature5Title: "Ladička",
    feature5Desc: "Nalaď si High-G i Low-G ukulele. Automatická detekce struny i ruční výběr.",
    feature6Title: "Metronom",
    feature6Desc:
      "Hraj s plně nastavitelným metronomem pomocí mini přehrávače v celé aplikaci.",
    feature7Title: "Plovoucí tlačítko nástrojů",
    feature7Desc:
      "Měj v celé aplikaci okamžitý přístup ke všem nástrojům. Lze volně přesouvat po displeji.",
    feature8Title: "Design a pohodlí",
    feature8Desc:
      "Teplé a útulné barvy, světlý i tmavý režim, podpora na šířku.",
    feature9Title: "Záloha a přenos dat",
    feature9Desc: "Exportuj a importuj celou knihovnu pro snadný přechod na nové zařízení.",
    screenshotsTitle: "Ukázky aplikace",
    devicePhone: "Telefon",
    deviceTablet: "Tablet",
    faqTitle: "FAQ",
    faq1Q: "Funguje Ukulele Pouch bez internetu?",
    faq1A:
      "Ano. Celá aplikace funguje offline. Internet potřebuješ jen pro stažení a aktualizace aplikace (a případně pro přenos souborů mezi zařízeními).",
    faq2Q: "Jak funguje ladička a proč chce mikrofon?",
    faq2A:
      "Nejdřív povol mikrofon — používá se pouze k rozpoznání právě hraného tónu. Pak stačí brnkat na struny: aplikace sama detekuje, která struna zní a jak je naladěná. Kdykoliv si také můžeš ručně vybrat konkrétní strunu nebo ladění.",
    faq3Q: "Jak funguje určování akordů na interaktivním hmatníku?",
    faq3A:
      "Jednoduše naklikáš, které struny jsou otevřené a které jsou zmáčknuté na konkrétním pražci. Aplikace pak automaticky vyhledá názvy akordů, které odpovídají zadanému prstokladu.",
    faq4Q: "Co všechno lze v aplikaci přehrát?",
    faq4A:
      "Přehrát můžeš: prstoklady akordů, libovolné kombinace z interaktivního hmatníku, tóny a diatonické akordy stupnic a také akordové progrese v zvolené tónině.",
    faq5Q: "Jak zálohovat data nebo je přenést do nového telefonu?",
    faq5A:
      "V Nastavení otevři Export a vyber, co chceš zálohovat. Aplikace vytvoří soubor, který zkopíruješ do nového telefonu. Tam v Nastavení zvol Import a soubor načti.",
    faq6Q: "Co všechno jde v aplikaci nastavit?",
    faq6A:
      "Například: zobrazení plovoucího tlačítka nástrojů, zobrazení aktuálního tónu při ladění, automatické invertování PDF, téma (světlé/tmavé), jazyk a zvuk metronomu.",
    faq7Q: "Jak nahlásit problém nebo kontaktovat podporu?",
    faq7A:
      "V Nastavení sjeď dolů na Kontaktovat podporu. Otevře se tvoje e-mailová aplikace s připravenou šablonou — stačí ji doplnit a odeslat.",
    footerText:
      `© ${new Date().getFullYear()} Ukulele Pouch.`,
    footerPlay: "Google Play",
    footerPrivacy: "Zásady ochrany soukromí",
  },
  en: {
  metaTitle: "Ukulele Pouch",
    metaDescription:
      "All‑in‑one ukulele app: PDF songbook & tabs viewer, chord library, progressions, scales, tuner (High‑G/Low‑G) and metronome. Works offline. No ads.",
    heroTitle: "Ukulele Pouch",
    heroSubtitle:
      "All‑in‑one ukulele app: PDF songbook & tabs, chords, tuner, metronome, scales, chord progressions.",
    heroLead:
      "Keep your PDF songbooks & tabs in one place, explore chords and practice with built‑in tools. Designed for comfortable practicing, teaching, and casual playing.",
    primaryCta: "Get it on Google Play",
    qrCaption: "Scan the QR to open Google Play",
    qrAlt: "QR code to Google Play",
    logoAlt: "Ukulele Pouch logo",
    heroTagline: "Warm & cozy ukulele toolkit",
    badgeOffline: "Works offline",
    badgeNoAds: "No ads",
    badgeNoSubs: "No subscriptions",
    featuresTitle: "What you get",
    feature1Title: "PDF Songbook & Tabs",
    feature1Desc: "Import your own PDFs, sort into categories, and search fast.",
    feature2Title: "Chords",
    feature2Desc:
      "Find almost any chord with multiple fingerings. Play it, save favorites, and detect the name from the fretboard.",
    feature3Title: "Chord Progressions",
    feature3Desc:
      "Filter by mood/genre/energy or Roman numerals, transpose to any key, and play them back.",
    feature4Title: "Scales",
    feature4Desc:
      "Show notes on the fretboard and diatonic chords. Play the scale and its chords.",
    feature5Title: "Tuner",
    feature5Desc: "Tune your High-G or Low-G ukulele. Automatic string detection or manual selection.",
    feature6Title: "Metronome",
    feature6Desc:
      "Play with a fully adjustable metronome using the mini player across the app.",
    feature7Title: "Floating Tools Button",
    feature7Desc:
      "Instant access to all tools across the app. Freely movable on the screen.",
    feature8Title: "Design & Comfort",
    feature8Desc:
      "Warm, cozy colors, light & dark mode, landscape support.",
    feature9Title: "Backup & Transfer",
    feature9Desc: "Export and import your library for easy migration to a new device.",
    screenshotsTitle: "Screenshots",
    devicePhone: "Phone",
    deviceTablet: "Tablet",
    faqTitle: "FAQ",
    faq1Q: "Does Ukulele Pouch work without internet?",
    faq1A:
      "Yes. The whole app works offline. You only need internet to download and update the app (and optionally to transfer files between devices).",
    faq2Q: "How does the tuner work, and why does it need microphone access?",
    faq2A:
      "First, allow microphone access — it’s used only to detect the note you’re playing. Then just pluck the strings: the app automatically detects which string is sounding and how well it’s tuned. You can also manually pick a specific string or tuning anytime.",
    faq3Q: "How does chord detection on the interactive fretboard work?",
    faq3A:
      "You simply tap which strings are open and which are fretted at specific positions. The app then automatically finds chord names that match the fingering.",
    faq4Q: "What can the app play back?",
    faq4A:
      "You can play back: chord fingerings, any combination on the interactive fretboard, scale notes and diatonic chords, and chord progressions in the selected key.",
    faq5Q: "How do I back up my data or move it to a new phone?",
    faq5A:
      "In Settings, use Export and choose what you want to include. The app creates a file—copy it to your new phone, then open Settings and use Import to load it.",
    faq6Q: "What can I customize in the app?",
    faq6A:
      "For example: the floating tools button, showing the current note while tuning, automatic PDF color inversion, theme (light/dark), language, and the metronome sound.",
    faq7Q: "How do I report a problem or contact support?",
    faq7A:
      "In Settings, scroll down to Contact support. It opens your email app with a pre-filled template—just add details and send it.",
    footerText:
      `© ${new Date().getFullYear()} Ukulele Pouch.`,
    footerPlay: "Google Play",
    footerPrivacy: "Privacy policy",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
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

let currentLang = "en";
let currentDevice = "phone";
let screenshotsData = [];
let lastFocusedCard = null;
let lightboxItems = [];
let lightboxIndex = -1;
let lightboxDevice = null;

const supportedLangs = ["cs", "en"];

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (supportedLangs.includes(urlLang)) {
    return urlLang;
  }
  const storedLang = localStorage.getItem("ukuleleLang");
  if (supportedLangs.includes(storedLang)) {
    return storedLang;
  }
  const preferred = navigator.languages?.[0] || navigator.language || "en";
  if (preferred.toLowerCase().startsWith("cs") || preferred.toLowerCase().startsWith("sk")) {
    return "cs";
  }
  return "en";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("ukuleleLang", lang);

  const params = new URLSearchParams(window.location.search);
  params.set("lang", lang);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", newUrl);

  document.documentElement.lang = lang;
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
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const canonical = `${baseUrl}?lang=${lang}`;
  const otherLang = lang === "cs" ? "en" : "cs";
  document.getElementById("canonical-link").href = canonical;
  document.getElementById("hreflang-cs").href = `${baseUrl}?lang=cs`;
  document.getElementById("hreflang-en").href = `${baseUrl}?lang=en`;
  document.getElementById("og-url").setAttribute("content", canonical);
  document.getElementById("og-title").setAttribute("content", i18n[lang].metaTitle);
  document
    .getElementById("og-description")
    .setAttribute("content", i18n[lang].metaDescription);
  document.getElementById("twitter-title").setAttribute("content", i18n[lang].metaTitle);
  document
    .getElementById("twitter-description")
    .setAttribute("content", i18n[lang].metaDescription);

  document.getElementById("hreflang-cs").setAttribute("hreflang", "cs");
  document.getElementById("hreflang-en").setAttribute("hreflang", "en");

  document
    .querySelectorAll("[data-i18n-attr]")
    .forEach((element) => applyI18nAttr(element, lang));

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
  const baseUrl = new URL(".", window.location.href);
  const graphic = lang === "cs" ? "assets/feature-graphic-cz.png" : "assets/feature-graphic-en.png";
  const absGraphic = new URL(graphic, baseUrl).toString();
  document.getElementById("og-image").setAttribute("content", absGraphic);
  document.getElementById("twitter-image").setAttribute("content", absGraphic);
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
    const response = await fetch("assets/screenshots.json", { cache: "no-cache" });
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
    button.dataset.fullSrc = `assets/screenshots-${item.device}/${item.file}`;
    button.dataset.caption = item.caption;
    button.innerHTML = `
      <div class="screenshot-image">
        <img src="assets/screenshots-${item.device}/${item.file}" alt="${item.caption}" loading="lazy" />
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
      src: `assets/screenshots-${item.device}/${item.file}`,
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
  const baseUrl = new URL(".", window.location.href);
  const pageUrl = new URL(window.location.href);
  pageUrl.searchParams.set("lang", currentLang);
  const screenshots = screenshotsData
    .filter((item) => item.lang === currentLang)
    .map((item) =>
      new URL(`assets/screenshots-${item.device}/${item.file}`, baseUrl).toString()
    );
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
    image: new URL("assets/icon.png", baseUrl).toString(),
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
  button.addEventListener("click", () => setLang(button.dataset.lang));
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
  currentLang = detectLanguage();
  setLang(currentLang);
  setCompactMode(COMPACT_SCREENSHOTS);
})();
