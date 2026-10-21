// Shared header extras for every page: the ingredient search box and the
// language menu. Translation uses the Google Translate widget, which reads
// the googtrans cookie; Korean (the source language) clears it.
(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const SEARCH_ICON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const GLOBE_ICON =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  const LANGUAGES = [
    ["ko", "한국어"],
    ["en", "English"],
    ["zh-CN", "中文"],
    ["ja", "日本語"],
    ["vi", "Tiếng Việt"],
  ];

  const brand = header.querySelector(".brand");
  if (brand) {
    brand.setAttribute("translate", "no");
    brand.classList.add("notranslate");
  }

  let actions = header.querySelector(".header-actions");
  if (!actions) {
    actions = document.createElement("div");
    actions.className = "header-actions";
    header.appendChild(actions);
  }

  // Search box: always goes to the ingredient search page.
  const form = document.createElement("form");
  form.className = "header-search";
  form.action = "/search.html";
  form.method = "get";
  form.setAttribute("role", "search");
  form.innerHTML =
    '<input type="search" name="search" placeholder="원료명 · 공급사 검색" aria-label="원료 검색" autocomplete="off" />' +
    `<button type="submit" aria-label="검색">${SEARCH_ICON}</button>`;
  const query = new URLSearchParams(window.location.search).get("search");
  if (query && /\/search(\.html)?$/.test(window.location.pathname)) {
    form.querySelector("input").value = query;
  }
  form.addEventListener("submit", (event) => {
    if (!form.querySelector("input").value.trim()) event.preventDefault();
  });
  header.insertBefore(form, actions);

  // Language menu
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/ko\/([^;]+)/);
  const current = match ? decodeURIComponent(match[1]) : "ko";

  const lang = document.createElement("div");
  lang.className = "lang-switch notranslate";
  lang.setAttribute("translate", "no");
  lang.innerHTML =
    `<button class="lang-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="언어 선택 / Language">${GLOBE_ICON}</button>` +
    '<ul class="lang-menu" role="menu" hidden>' +
    LANGUAGES.map(
      ([code, label]) =>
        `<li role="none"><button type="button" role="menuitem" data-lang="${code}"${code === current ? ' aria-current="true"' : ""}>${label}</button></li>`,
    ).join("") +
    "</ul>";
  actions.appendChild(lang);

  const toggle = lang.querySelector(".lang-toggle");
  const menu = lang.querySelector(".lang-menu");
  const setOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });
  document.addEventListener("click", (event) => {
    if (!lang.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  const host = window.location.hostname;
  const cookieDomains = ["", host, `.${host.replace(/^www\./, "")}`];
  const clearCookie = () => {
    cookieDomains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  };

  menu.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-lang]");
    if (!choice) return;
    const code = choice.dataset.lang;
    setOpen(false);
    if (code === current) return;
    clearCookie();
    if (code !== "ko") document.cookie = `googtrans=/ko/${code}; path=/`;
    window.location.reload();
  });

  if (current !== "ko") {
    document.documentElement.lang = current;
    const holder = document.createElement("div");
    holder.id = "google_translate_element";
    holder.hidden = true;
    document.body.appendChild(holder);
    window.__initGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "ko", autoDisplay: false },
        "google_translate_element",
      );
    };
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=__initGoogleTranslate";
    script.async = true;
    document.head.appendChild(script);
  }
})();
