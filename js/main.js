/* =====================================================================
   Hassan Marble and Granite — main script (vanilla JS, no libraries)
   ---------------------------------------------------------------------
   1. Helpers
   2. Config binding (phone, WhatsApp, map, hours… from js/config.js)
   3. Products grid + filters
   4. Gallery
   5. Lightbox (keyboard, swipe, focus trap)
   6. Header, mobile menu, active links, back-to-top
   7. Scroll reveal
   8. Enquiry form → WhatsApp
   9. Structured data (JSON-LD)
  10. Init
   ===================================================================== */
(function () {
  "use strict";

  /* 1. HELPERS -------------------------------------------------------- */
  var C = window.SITE_CONFIG || {};
  var I = window.I18N;
  var PRODUCTS = window.PRODUCTS || [];
  var CATEGORIES = window.CATEGORIES || [];
  var GALLERY = window.GALLERY || [];
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function t(key, vars) { return I.t(key, vars); }
  function lang() { return I.lang; }
  function pick(obj) { return obj ? (obj[lang()] || obj.en || "") : ""; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* WhatsApp link with a correctly URL-encoded message */
  function waUrl(text) {
    return "https://wa.me/" + C.whatsappNumber + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  function icon(id) { return '<svg aria-hidden="true" focusable="false"><use href="#' + id + '"></use></svg>'; }
  /* <picture> with WebP + JPG fallback, explicit size to avoid layout shift */
  function picture(base, webp, alt, w, h, loading) {
    var img = '<img src="' + base + '.jpg" alt="' + esc(alt) + '" width="' + w + '" height="' + h +
      '" loading="' + (loading || "lazy") + '" decoding="async">';
    return webp ? '<picture><source type="image/webp" srcset="' + base + '.webp">' + img + "</picture>" : img;
  }
  /* Product cards: stock photos also ship a 480px version for small cards.
     Owner photos (webp:false) are a single .jpg, so no srcset is used. */
  var CARD_SIZES = "(min-width: 1200px) 290px, (min-width: 960px) 31vw, (min-width: 560px) 48vw, 100vw";
  function cardPicture(p, alt) {
    if (!p.webp) return picture(p.image, false, alt, 900, 675, "lazy");
    var b = p.image;
    return '<picture><source type="image/webp" srcset="' + b + '-480.webp 480w, ' + b + '.webp 900w" sizes="' + CARD_SIZES + '">' +
      '<img src="' + b + '.jpg" srcset="' + b + '-480.jpg 480w, ' + b + '.jpg 900w" sizes="' + CARD_SIZES + '" alt="' + esc(alt) +
      '" width="900" height="675" loading="lazy" decoding="async"></picture>';
  }
  var supportsWebp = (function () {
    try { return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") === 0; }
    catch (e) { return false; }
  })();

  /* 2. CONFIG BINDING ------------------------------------------------- */
  function bindConfig() {
    var hours = pick(C.hours);
    var values = {
      businessName: C.businessName,
      phone: C.phone,
      phoneIntl: C.phoneIntl,
      phone2: C.phone2,
      phone2Intl: C.phone2Intl,
      ownerName: C.ownerName ? pick(C.ownerName) : "",
      address: pick(C.address),
      hours: hours,
      email: C.email
    };
    $$("[data-cfg]").forEach(function (el) {
      var v = values[el.getAttribute("data-cfg")];
      if (v) el.textContent = v;
    });
    /* hide anything whose data is still a placeholder */
    var has = {
      hours: !!hours, email: !!C.email, facebookUrl: !!C.facebookUrl, instagramUrl: !!C.instagramUrl,
      social: !!(C.facebookUrl || C.instagramUrl)
    };
    $$("[data-requires]").forEach(function (el) { el.hidden = !has[el.getAttribute("data-requires")]; });

    $$("a[data-tel]").forEach(function (a) { a.href = "tel:" + C.telLink; });
    $$("a[data-tel2]").forEach(function (a) { if (C.tel2Link) a.href = "tel:" + C.tel2Link; });
    $$("a[data-maplink]").forEach(function (a) { a.href = C.mapLinkUrl; });
    $$("a[data-wa]").forEach(function (a) { a.href = waUrl(t(a.getAttribute("data-wa") || "wa.general")); });
    $$("a[data-directions]").forEach(function (a) { a.href = C.directionsUrl; });
    $$("a[data-email]").forEach(function (a) { if (C.email) a.href = "mailto:" + C.email; });
    $$("a[data-fb]").forEach(function (a) { if (C.facebookUrl) a.href = C.facebookUrl; });
    $$("a[data-ig]").forEach(function (a) { if (C.instagramUrl) a.href = C.instagramUrl; });
    $$("iframe[data-map]").forEach(function (f) { if (f.getAttribute("src") !== C.mapEmbedUrl) f.src = C.mapEmbedUrl; });
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* 3. PRODUCTS ------------------------------------------------------- */
  var grids = []; // { el, filtersEl, mode, cat, visible: [] }

  function productCard(p, i) {
    var name = pick(p.name);
    return '<article class="card is-entering" style="animation-delay:' + Math.min(i * 0.05, 0.4) + 's">' +
      '<button type="button" class="card__media" data-product-index="' + i + '" aria-label="' + esc(t("product.view", { product: name })) + '">' +
        cardPicture(p, pick(p.alt)) +
        '<span class="card__zoom">' + icon("i-zoom") + "</span>" +
      "</button>" +
      '<div class="card__body">' +
        '<span class="card__cat">' + esc(t("cat." + p.category)) + "</span>" +
        '<h3 class="card__name">' + esc(name) + "</h3>" +
        '<p class="card__desc">' + esc(pick(p.desc)) + "</p>" +
        '<p class="card__rate">' + esc(t("product.rate")) + "</p>" +
        '<a class="btn btn--dark btn--sm btn--block" href="' + waUrl(t("wa.product", { product: name })) +
          '" target="_blank" rel="noopener">' + icon("i-wa") + "<span>" + esc(t("product.inquire")) + "</span></a>" +
      "</div></article>";
  }

  function renderFilters(g) {
    if (!g.filtersEl) return;
    var source = g.mode === "featured" ? PRODUCTS.filter(function (p) { return p.featured; }) : PRODUCTS;
    var cats = ["all"].concat(CATEGORIES.filter(function (c) {
      return source.some(function (p) { return p.category === c; });
    }));
    g.filtersEl.innerHTML = cats.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' + (c === g.cat) + '">' +
        esc(c === "all" ? t("filter.all") : t("cat." + c)) + "</button>";
    }).join("");
  }

  function renderGrid(g) {
    g.visible = PRODUCTS.filter(function (p) {
      return (g.mode !== "featured" || p.featured) && (g.cat === "all" || p.category === g.cat);
    });
    g.el.innerHTML = g.visible.length
      ? g.visible.map(productCard).join("")
      : '<p class="products__empty">' + esc(t("products.empty")) + "</p>";
  }

  function setupProducts() {
    $$("[data-products]").forEach(function (el) {
      var g = {
        el: el,
        mode: el.getAttribute("data-products"),
        filtersEl: $("[data-filters='" + el.id + "']"),
        cat: "all",
        visible: []
      };
      /* catalogue page: allow products.html?cat=granite */
      var m = /[?&]cat=([a-z]+)/.exec(location.search);
      if (g.mode === "all" && m && CATEGORIES.indexOf(m[1]) > -1) g.cat = m[1];
      grids.push(g);

      if (g.filtersEl) {
        g.filtersEl.addEventListener("click", function (e) {
          var b = e.target.closest("[data-cat]");
          if (!b || b.getAttribute("data-cat") === g.cat) return;
          g.cat = b.getAttribute("data-cat");
          $$("[data-cat]", g.filtersEl).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          renderGrid(g);
          if (g.mode === "all" && history.replaceState) {
            history.replaceState(null, "", g.cat === "all" ? location.pathname : "?cat=" + g.cat);
          }
        });
      }
      el.addEventListener("click", function (e) {
        var b = e.target.closest("[data-product-index]");
        if (!b) return;
        var items = g.visible.map(function (p) {
          return { base: p.image, webp: p.webp, alt: pick(p.alt), caption: pick(p.name) };
        });
        Lightbox.open(items, +b.getAttribute("data-product-index"), b);
      });
    });
  }

  function refreshProducts() {
    grids.forEach(function (g) { renderFilters(g); renderGrid(g); });
  }

  /* 4. GALLERY -------------------------------------------------------- */
  function renderGallery() {
    var el = $("[data-gallery]");
    if (!el) return;
    el.innerHTML = GALLERY.map(function (g, i) {
      var cap = pick(g.caption);
      return '<button type="button" class="gallery__item reveal" style="--d:' + (i % 4) * 0.08 + 's" data-gallery-index="' + i +
        '" aria-label="' + esc(t("gallery.open", { caption: cap })) + '">' +
        picture(g.thumb, g.webp, cap, g.w, g.h, "lazy") +
        '<span class="gallery__cap" aria-hidden="true">' + esc(cap) + "</span></button>";
    }).join("");
    observeReveal(el);
  }
  function setupGallery() {
    var el = $("[data-gallery]");
    if (!el) return;
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-gallery-index]");
      if (!b) return;
      var items = GALLERY.map(function (g) {
        return { base: g.full, webp: g.webp, alt: pick(g.caption), caption: pick(g.caption) };
      });
      Lightbox.open(items, +b.getAttribute("data-gallery-index"), b);
    });
  }

  /* 5. LIGHTBOX ------------------------------------------------------- */
  var Lightbox = (function () {
    var root, img, cap, count, items = [], index = 0, opener = null, touchX = null, touchY = null;

    function build() {
      root = document.createElement("div");
      root.className = "lightbox";
      root.setAttribute("role", "dialog");
      root.setAttribute("aria-modal", "true");
      root.setAttribute("data-i18n-attr", "aria-label:lightbox.label");
      root.setAttribute("aria-label", t("lightbox.label"));
      root.hidden = true;
      root.innerHTML =
        '<button type="button" class="lb-btn lb-close" data-i18n-attr="aria-label:lightbox.close" aria-label="' + esc(t("lightbox.close")) + '">' + icon("i-close") + "</button>" +
        '<button type="button" class="lb-btn lb-prev" data-i18n-attr="aria-label:lightbox.prev" aria-label="' + esc(t("lightbox.prev")) + '">' + icon("i-chev-left") + "</button>" +
        '<figure class="lightbox__figure"><img class="lightbox__img" alt=""><figcaption class="lightbox__cap"></figcaption>' +
        '<p class="lightbox__count" aria-live="polite"></p></figure>' +
        '<button type="button" class="lb-btn lb-next" data-i18n-attr="aria-label:lightbox.next" aria-label="' + esc(t("lightbox.next")) + '">' + icon("i-chev-right") + "</button>";
      document.body.appendChild(root);
      img = $(".lightbox__img", root);
      cap = $(".lightbox__cap", root);
      count = $(".lightbox__count", root);

      $(".lb-close", root).addEventListener("click", close);
      $(".lb-prev", root).addEventListener("click", function () { go(-1); });
      $(".lb-next", root).addEventListener("click", function () { go(1); });
      root.addEventListener("click", function (e) { if (e.target === root) close(); });
      img.addEventListener("load", function () { img.classList.remove("is-loading"); });
      root.addEventListener("touchstart", function (e) {
        touchX = e.changedTouches[0].clientX; touchY = e.changedTouches[0].clientY;
      }, { passive: true });
      root.addEventListener("touchend", function (e) {
        if (touchX === null) return;
        var dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          var rtl = document.documentElement.dir === "rtl";
          go((dx < 0) !== rtl ? 1 : -1);
        }
        touchX = null;
      }, { passive: true });
      document.addEventListener("keydown", onKey);
    }

    function onKey(e) {
      if (!root || root.hidden) return;
      var rtl = document.documentElement.dir === "rtl";
      if (e.key === "Escape") { close(); }
      else if (e.key === "ArrowRight") { go(rtl ? -1 : 1); }
      else if (e.key === "ArrowLeft") { go(rtl ? 1 : -1); }
      else if (e.key === "Tab") { // keep focus inside the dialog
        var f = $$("button", root).filter(function (b) { return !b.hidden; });
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    function show() {
      var it = items[index];
      img.classList.add("is-loading");
      img.src = it.base + (it.webp && supportsWebp ? ".webp" : ".jpg");
      img.alt = it.alt;
      cap.textContent = it.caption;
      count.textContent = items.length > 1 ? (index + 1) + " / " + items.length : "";
      var multi = items.length > 1;
      $(".lb-prev", root).hidden = !multi;
      $(".lb-next", root).hidden = !multi;
    }
    function go(step) {
      if (items.length < 2) return;
      index = (index + step + items.length) % items.length;
      show();
    }
    function open(list, i, from) {
      if (!root) build();
      items = list; index = i || 0; opener = from || document.activeElement;
      show();
      root.hidden = false;
      void root.offsetWidth; // force a reflow so the fade-in transition runs
      root.classList.add("is-open"); // must be visible before it can take focus
      document.body.classList.add("no-scroll");
      $(".lb-close", root).focus();
    }
    function close() {
      root.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
      setTimeout(function () { root.hidden = true; img.removeAttribute("src"); }, reduceMotion ? 0 : 400);
      if (opener && opener.focus) opener.focus();
    }
    return { open: open, close: close };
  })();

  /* 6. HEADER / MENU / BACK-TO-TOP ------------------------------------ */
  function setupHeader() {
    var header = $(".site-header");
    var backTop = $(".back-top");
    var ticking = false;
    function onScroll() {
      var y = window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 40);
      if (backTop) backTop.classList.toggle("is-visible", y > 700);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();

    if (backTop) backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      var skipTarget = $("#main");
      if (skipTarget) skipTarget.focus({ preventScroll: true });
    });

    /* mobile menu */
    var burger = $(".burger");
    var menu = $("#site-menu");
    if (!burger || !menu) return;
    function setMenu(open) {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("data-i18n-attr", "aria-label:" + (open ? "menu.close" : "menu.open"));
      burger.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
      menu.classList.toggle("is-open", open);
      if (header) header.classList.toggle("menu-open", open);
      document.body.classList.toggle("no-scroll", open);
      if (open) { var first = $("a", menu); if (first) first.focus(); }
    }
    burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { setMenu(false); burger.focus(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1100 && burger.getAttribute("aria-expanded") === "true") setMenu(false);
    });

    /* highlight the nav link of the section in view (home page) */
    if (!("IntersectionObserver" in window)) return;
    var links = $$(".nav__link[href^='#']");
    if (!links.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          var on = l.getAttribute("href") === "#" + en.target.id;
          l.classList.toggle("is-active", on);
          if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var s = $(l.getAttribute("href")); if (s) io.observe(s); });
  }

  /* 7. SCROLL REVEAL -------------------------------------------------- */
  var revealIO = null;
  function observeReveal(scope) {
    var els = $$(".reveal:not(.is-visible)", scope);
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-visible"); revealIO.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el) { revealIO.observe(el); });
  }

  /* 8. ENQUIRY FORM → WHATSAPP --------------------------------------- */
  function fillProductSelect() {
    var sel = $("#f-product");
    if (!sel) return;
    var current = sel.value;
    sel.innerHTML = '<option value="">' + esc(t("form.productAny")) + "</option>" +
      PRODUCTS.map(function (p) {
        return '<option value="' + p.id + '">' + esc(pick(p.name)) + "</option>";
      }).join("");
    sel.value = current;
  }
  function setupForm() {
    var form = $("#enquiry-form");
    if (!form) return;
    var status = $(".form-status", form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var message = form.elements.message.value.trim();
      var sel = form.elements.product;
      var product = sel.value ? sel.options[sel.selectedIndex].text : t("form.productAny");

      form.elements.name.setAttribute("aria-invalid", String(!name));
      form.elements.phone.setAttribute("aria-invalid", String(!phone));
      if (!name || !phone) {
        status.textContent = t("form.error");
        status.classList.add("is-error");
        (name ? form.elements.phone : form.elements.name).focus();
        return;
      }
      var text = t("wa.form", { name: name, phone: phone, product: product, message: message || "-" });
      var url = waUrl(text);
      var w = window.open(url, "_blank");
      if (w) { w.opener = null; } else { window.location.href = url; }
      status.textContent = t("form.sent");
      status.classList.remove("is-error");
    });
  }

  /* 9. STRUCTURED DATA (JSON-LD) -------------------------------------- */
  function injectJsonLd() {
    var base = C.siteBaseUrl || "";
    var data = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": base + "#business",
      name: C.businessName,
      alternateName: "Hassan Marble and Granite G-13 Islamabad",
      description: "Marble, granite and chips (terrazzo) flooring supplier with custom inlay work, based in G-13/2, Islamabad, serving Islamabad and Rawalpindi.",
      url: base,
      image: base + "assets/images/og-image.jpg",
      logo: base + "assets/icons/icon-512.png",
      telephone: C.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: C.address.street,
        addressLocality: C.address.city,
        addressRegion: C.address.region,
        postalCode: C.address.postalCode,
        addressCountry: C.address.country
      },
      areaServed: (C.areaServed || []).map(function (c) { return { "@type": "City", name: c }; }),
      hasMap: C.mapLinkUrl,
      knowsAbout: ["Marble", "Granite", "Chips flooring", "Terrazzo flooring", "Stone inlay", "Kitchen countertops"]
    };
    if (C.hoursSchema && C.hoursSchema.length) data.openingHours = C.hoursSchema;
    if (C.email) data.email = C.email;
    if (C.phone2Intl) data.contactPoint = [C.phoneIntl, C.phone2Intl].map(function (tel) {
      return { "@type": "ContactPoint", telephone: tel, contactType: "sales", areaServed: "PK", availableLanguage: ["English", "Urdu"] };
    });
    if (C.ownerName) data.employee = { "@type": "Person", name: C.ownerName.en, jobTitle: "Owner", telephone: C.phone2Intl };
    var same = [C.facebookUrl, C.instagramUrl].filter(Boolean);
    if (same.length) data.sameAs = same;
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* 10. INIT ---------------------------------------------------------- */
  function onLanguage() {
    bindConfig();
    refreshProducts();
    renderGallery();
    fillProductSelect();
  }

  function init() {
    setupProducts();
    setupGallery();
    setupHeader();
    setupForm();
    injectJsonLd();

    document.addEventListener("languagechange", onLanguage);
    $$("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { I.apply(b.getAttribute("data-lang")); });
    });
    I.apply(I.lang); // renders text + products + gallery in the saved language
    observeReveal(document);

    /* fade out the loader as soon as the page is ready */
    var loader = $(".loader");
    if (loader) {
      var done = function () {
        loader.classList.add("is-done");
        setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 600);
      };
      if (document.readyState === "complete") done(); else window.addEventListener("load", done);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
