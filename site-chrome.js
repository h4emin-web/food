// Shared header extras for every page: the ingredient search box and the
// language menu.
//
// Languages live under a path prefix (/en/, /zh/, /ja/, /vi/); vercel.json
// rewrites those paths to the same files. The prefix decides the language:
// the page body is translated by the Google Translate widget (which reads
// the googtrans cookie), while header labels use the short hand-written
// labels below so the menu never wraps. No prefix = Korean, the source.
(() => {
  const header = document.querySelector(".site-header");

  const LANGUAGES = [
    { prefix: "", google: "ko", html: "ko", label: "한국어" },
    { prefix: "en", google: "en", html: "en", label: "English" },
    { prefix: "zh", google: "zh-CN", html: "zh-CN", label: "中文" },
    { prefix: "ja", google: "ja", html: "ja", label: "日本語" },
    { prefix: "vi", google: "vi", html: "vi", label: "Tiếng Việt" },
  ];

  const LABELS = {
    en: {
      "원료 찾기": "Find ingredients",
      "원료 소싱요청": "Sourcing request",
      "원료문의": "Inquiries",
      "원료 등록": "List ingredient",
      "소개": "About",
      "로그인": "Log in",
      "회원가입": "Sign up",
      "나의 원료": "My ingredients",
      "내 즐겨찾기": "Favorites",
      "관리자": "Admin",
      "로그아웃": "Log out",
      "공급사": "Suppliers",
      "공급사 등록 안내": "Supplier guide",
      placeholder: "Search ingredients · suppliers",
    },
    zh: {
      "원료 찾기": "原料搜索",
      "원료 소싱요청": "采购需求",
      "원료문의": "原料咨询",
      "원료 등록": "原料登记",
      "소개": "关于我们",
      "로그인": "登录",
      "회원가입": "注册",
      "나의 원료": "我的原料",
      "내 즐겨찾기": "收藏",
      "관리자": "管理",
      "로그아웃": "退出",
      "공급사": "供应商",
      "공급사 등록 안내": "供应商入驻指南",
      placeholder: "搜索原料 · 供应商",
    },
    ja: {
      "원료 찾기": "原料を探す",
      "원료 소싱요청": "調達依頼",
      "원료문의": "お問い合わせ",
      "원료 등록": "原料登録",
      "소개": "紹介",
      "로그인": "ログイン",
      "회원가입": "新規登録",
      "나의 원료": "マイ原料",
      "내 즐겨찾기": "お気に入り",
      "관리자": "管理者",
      "로그아웃": "ログアウト",
      "공급사": "サプライヤー",
      "공급사 등록 안내": "サプライヤー案内",
      placeholder: "原料・サプライヤー検索",
    },
    vi: {
      "원료 찾기": "Tìm nguyên liệu",
      "원료 소싱요청": "Tìm nguồn",
      "원료문의": "Hỏi đáp",
      "원료 등록": "Đăng nguyên liệu",
      "소개": "Giới thiệu",
      "로그인": "Đăng nhập",
      "회원가입": "Đăng ký",
      "나의 원료": "Nguyên liệu của tôi",
      "내 즐겨찾기": "Yêu thích",
      "관리자": "Quản trị",
      "로그아웃": "Đăng xuất",
      "공급사": "Nhà cung cấp",
      "공급사 등록 안내": "Hướng dẫn NCC",
      placeholder: "Tìm nguyên liệu · nhà cung cấp",
    },
  };

  const PREFIX_PATTERN = /^\/(en|zh|ja|vi)(?=\/|$)/;
  const prefixMatch = window.location.pathname.match(PREFIX_PATTERN);
  const current = LANGUAGES.find((lang) => lang.prefix === (prefixMatch ? prefixMatch[1] : "")) || LANGUAGES[0];
  const prefixPath = current.prefix ? `/${current.prefix}` : "";
  const basePath = window.location.pathname.replace(PREFIX_PATTERN, "") || "/";

  // "/en" → "/en/" so relative links (search.html) stay under the prefix.
  if (current.prefix && window.location.pathname === prefixPath) {
    history.replaceState(null, "", `${prefixPath}/${window.location.search}${window.location.hash}`);
  }

  const withPrefix = (path) => {
    if (!current.prefix || !path.startsWith("/") || path.startsWith("//") || PREFIX_PATTERN.test(path)) return path;
    if (/^\/(api|fonts|images|videos)\//.test(path)) return path;
    return `${prefixPath}${path}`;
  };

  // ---------- Translation cookie ----------
  const host = window.location.hostname;
  const cookieDomains = ["", host, `.${host.replace(/^www\./, "")}`];
  const clearCookie = () => {
    cookieDomains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  };

  // Fonts follow SK hynix per language; Noto Sans KR and Roboto load on
  // every page, the Japanese / Chinese faces only when that language is on.
  // Chinese uses the system font stack (as cxmt.com does), so nothing loads.
  const EXTRA_FONTS = {
    en: "Barlow:wght@300;400;500;600;700",
    ja: "Noto+Sans+JP:wght@300;400;500;700",
  };
  if (EXTRA_FONTS[current.prefix]) {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = `https://fonts.googleapis.com/css2?family=${EXTRA_FONTS[current.prefix]}&display=swap`;
    document.head.appendChild(fontLink);
  }

  if (current.prefix) {
    clearCookie();
    document.cookie = `googtrans=/ko/${current.google}; path=/`;
    document.documentElement.lang = current.html;
  } else if (/(?:^|;\s*)googtrans=/.test(document.cookie)) {
    clearCookie();
  }

  // Internal absolute links (also ones rendered later) keep the prefix.
  if (current.prefix) {
    document.addEventListener(
      "click",
      (event) => {
        const link = event.target.closest && event.target.closest("a[href^='/']");
        if (!link || link.closest(".lang-switch")) return;
        const href = link.getAttribute("href");
        const next = withPrefix(href);
        if (next !== href) link.setAttribute("href", next);
      },
      true,
    );
  }

  // Hero buttons that stand in for an existing button further down the page
  // (e.g. 요청 등록), so the page's own logic — login checks included — runs.
  document.addEventListener("click", (event) => {
    const proxy = event.target.closest && event.target.closest("[data-click-target]");
    if (!proxy) return;
    const target = document.querySelector(proxy.dataset.clickTarget);
    if (!target) return;
    target.click();
    const form = target.closest("section") || target;
    window.setTimeout(() => form.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  });

  if (!header) {
    if (current.prefix) loadGoogleTranslate();
    return;
  }

  const SEARCH_ICON =
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const GLOBE_ICON =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

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

  // ---------- 공급사 menu (like Pharmaoffer's "For suppliers") ----------
  // 원료 등록 moves out of the main nav into this menu. The existing link
  // element is moved, not copied, so script.js can still update its href.
  const nav = header.querySelector(".main-nav");
  const navRegister =
    (nav && nav.querySelector(".ingredient-register-nav")) ||
    (nav && [...nav.querySelectorAll("a")].find((link) => link.textContent.trim() === "원료 등록"));
  const registerLink = navRegister || document.createElement("a");
  if (!navRegister) {
    registerLink.className = "ingredient-register-nav";
    registerLink.href = "/ingredient-register.html";
    registerLink.textContent = "원료 등록";
  }
  registerLink.setAttribute("role", "menuitem");
  const supplier = document.createElement("div");
  supplier.className = "supplier-menu";
  supplier.innerHTML =
    '<button class="supplier-toggle" type="button" aria-haspopup="true" aria-expanded="false">공급사<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>' +
    '<div class="supplier-dropdown" role="menu" hidden></div>';
  const supplierDropdown = supplier.querySelector(".supplier-dropdown");
  const guideLink = document.createElement("a");
  guideLink.href = "/intro.html#supplier-onboarding";
  guideLink.setAttribute("role", "menuitem");
  guideLink.textContent = "공급사 등록 안내";
  supplierDropdown.append(registerLink, guideLink);
  if (nav) nav.after(supplier);
  else header.insertBefore(supplier, actions);
  const supplierToggle = supplier.querySelector(".supplier-toggle");
  const setSupplierOpen = (open) => {
    supplierDropdown.hidden = !open;
    supplierToggle.setAttribute("aria-expanded", String(open));
  };
  supplierToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setSupplierOpen(supplierDropdown.hidden);
  });
  document.addEventListener("click", (event) => {
    if (!supplier.contains(event.target)) setSupplierOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSupplierOpen(false);
  });

  // ---------- Search box: always goes to the ingredient search page ----------
  const labels = LABELS[current.prefix] || {};
  const form = document.createElement("form");
  form.className = "header-search notranslate";
  form.setAttribute("translate", "no");
  form.action = withPrefix("/search.html");
  form.method = "get";
  form.setAttribute("role", "search");
  form.innerHTML =
    `<input type="search" name="search" placeholder="${labels.placeholder || "원료명 · 공급사 검색"}" aria-label="원료 검색" autocomplete="off" />` +
    `<button type="submit" aria-label="검색">${SEARCH_ICON}</button>`;
  const query = new URLSearchParams(window.location.search).get("search");
  if (query && /\/search(\.html)?$/.test(basePath)) {
    form.querySelector("input").value = query;
  }
  form.addEventListener("submit", (event) => {
    if (!form.querySelector("input").value.trim()) event.preventDefault();
  });
  header.insertBefore(form, actions);

  // ---------- Language menu ----------
  const target = (lang) => `${lang.prefix ? `/${lang.prefix}` : ""}${basePath}${window.location.search}${window.location.hash}`;
  const lang = document.createElement("div");
  lang.className = "lang-switch notranslate";
  lang.setAttribute("translate", "no");
  lang.innerHTML =
    `<button class="lang-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="언어 선택 / Language">${GLOBE_ICON}</button>` +
    '<ul class="lang-menu" role="menu" hidden>' +
    LANGUAGES.map(
      (item) =>
        `<li role="none"><a role="menuitem" hreflang="${item.html}" href="${target(item)}"${item === current ? ' aria-current="true"' : ""}>${item.label}</a></li>`,
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

  // ---------- Header labels in the chosen language ----------
  if (current.prefix) {
    [nav, supplier, actions].forEach((node) => {
      if (!node) return;
      node.setAttribute("translate", "no");
      node.classList.add("notranslate");
    });
    const relabel = () => {
      [nav, supplier, actions].forEach((root) => {
        if (!root) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const text = node.nodeValue.trim();
          if (text && labels[text]) node.nodeValue = node.nodeValue.replace(text, labels[text]);
        }
      });
    };
    relabel();
    // script.js rewrites the account links after sign-in checks.
    new MutationObserver(relabel).observe(header, { childList: true, subtree: true, characterData: true });
    loadGoogleTranslate();
  }

  // Chinese: drop the full stops (。) machine translation adds, which look
  // fussy in short UI text. Mid-text ones become a space.
  if (current.prefix === "zh") {
    const stripStops = (root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        if (!node.nodeValue.includes("。")) continue;
        node.nodeValue = node.nodeValue.replace(/。\s*$/, "").replace(/。\s*/g, " ");
      }
    };
    new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "characterData") stripStops(record.target.parentNode || document.body);
        record.addedNodes.forEach((node) => stripStops(node.nodeType === 3 ? node.parentNode : node));
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function loadGoogleTranslate() {
    if (document.getElementById("google_translate_element")) return;
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
