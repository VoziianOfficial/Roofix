"use strict";

(function () {
    const config = window.SITE_CONFIG || {};

    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const getCurrentPage = () => {
        const path = window.location.pathname.split("/").pop();
        return path || "index.html";
    };

    const currentPage = getCurrentPage();

    const escapeHTML = (value = "") => {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    };

    const createIcon = (name, className = "") => {
        return `<i data-lucide="${escapeHTML(name)}" class="${escapeHTML(className)}" aria-hidden="true"></i>`;
    };

    const getBaseHref = () => {
        return currentPage === "index.html" ? "./" : "./";
    };

    const normalizeHref = (href = "") => {
        if (!href) return "#";
        if (href.startsWith("#")) return href;
        if (href.startsWith("http")) return href;
        return `${getBaseHref()}${href}`;
    };

    const isActiveLink = (href = "") => {
        const cleanHref = href.split("#")[0];
        return cleanHref === currentPage;
    };

    const applyPageMeta = () => {
        const meta = config.pageMeta?.[currentPage] || config.pageMeta?.["index.html"];

        if (!meta) return;

        if (meta.title) {
            document.title = meta.title;
        }

        let description = qs('meta[name="description"]');

        if (!description) {
            description = document.createElement("meta");
            description.setAttribute("name", "description");
            document.head.appendChild(description);
        }

        if (meta.description) {
            description.setAttribute("content", meta.description);
        }
    };

    const logoMarkup = () => {
        const label = escapeHTML(config.brand?.logoLabel || config.companyName || "Roofix");

        return `
      <a class="site-logo" href="${normalizeHref("index.html")}" aria-label="${label} home">
        <span class="site-logo__mark" aria-hidden="true">
          <svg viewBox="0 0 42 32" role="img" focusable="false">
            <path d="M5 19.5 21 5l16 14.5" />
            <path d="M10.5 24 21 14.5 31.5 24" />
            <path d="M15.5 27.5 21 22.5l5.5 5" />
          </svg>
        </span>
        <span class="site-logo__text">${label}</span>
      </a>
    `;
    };

    const navItemMarkup = (item) => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const active = isActiveLink(item.href) || (hasChildren && item.children.some((child) => isActiveLink(child.href)));

        if (!hasChildren) {
            return `
        <li class="site-nav__item">
          <a class="site-nav__link${active ? " is-active" : ""}" href="${normalizeHref(item.href)}">
            ${escapeHTML(item.label)}
          </a>
        </li>
      `;
        }

        return `
      <li class="site-nav__item site-nav__item--dropdown">
        <a class="site-nav__link${active ? " is-active" : ""}" href="${normalizeHref(item.href)}" aria-haspopup="true">
          ${escapeHTML(item.label)}
          <span class="site-nav__chevron" aria-hidden="true">${createIcon("chevron-down")}</span>
        </a>

        <div class="site-dropdown" aria-label="${escapeHTML(item.label)} submenu">
          ${item.children
                .map(
                    (child) => `
                <a class="site-dropdown__link${isActiveLink(child.href) ? " is-active" : ""}" href="${normalizeHref(child.href)}">
                  <span>${escapeHTML(child.label)}</span>
                  ${createIcon("arrow-up-right")}
                </a>
              `
                )
                .join("")}
        </div>
      </li>
    `;
    };

    const renderHeader = () => {
        const mount = qs("[data-site-header]");
        if (!mount) return;

        const nav = config.navigation || [];

        mount.innerHTML = `
      <header class="site-header" data-header>
        <div class="site-header__inner">
          <div class="site-header__brand">
            ${logoMarkup()}
          </div>

          <nav class="site-nav" aria-label="Primary navigation">
            <ul class="site-nav__list">
              ${nav.map(navItemMarkup).join("")}
            </ul>
          </nav>

          <div class="site-header__actions">
            <a class="btn btn--dark site-header__cta" href="${normalizeHref("contact.html")}">
              <span>Get a Free Quote</span>
              ${createIcon("arrow-right")}
            </a>

            <button class="mobile-toggle" type="button" data-mobile-open aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div class="mobile-menu" id="mobileMenu" data-mobile-menu inert>
        <div class="mobile-menu__backdrop" data-mobile-close></div>

        <aside class="mobile-menu__panel" aria-label="Mobile navigation">
          <div class="mobile-menu__top">
            ${logoMarkup()}

            <button class="mobile-menu__close" type="button" data-mobile-close aria-label="Close menu">
              ${createIcon("x")}
            </button>
          </div>

          <nav class="mobile-menu__nav" aria-label="Mobile primary navigation">
            ${nav
                .filter((item) => item.label !== "Pages")
                .map(
                    (item) => `
                  <a class="mobile-menu__link${isActiveLink(item.href) ? " is-active" : ""}" href="${normalizeHref(item.href)}">
                    <span>${escapeHTML(item.label)}</span>
                    ${createIcon("arrow-right")}
                  </a>
                `
                )
                .join("")}
          </nav>

          <div class="mobile-menu__group">
            <p class="mobile-menu__label">Services</p>

            <div class="mobile-menu__services">
              ${(config.services || [])
                .filter((service) => ["roof-installation", "roof-replacement", "roof-repair", "roof-inspection"].includes(service.id))
                .map(
                    (service) => `
                    <a href="${normalizeHref(service.href)}">
                      ${createIcon(service.icon || "home")}
                      <span>${escapeHTML(service.title)}</span>
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>

          <div class="mobile-menu__contact">
            <a href="${config.phoneHref || "#"}">
              ${createIcon("phone")}
              <span>${escapeHTML(config.phone || "")}</span>
            </a>

            <a href="${config.emailHref || "#"}">
              ${createIcon("mail")}
              <span>${escapeHTML(config.email || "")}</span>
            </a>

            <a href="${config.address?.mapsUrl || "#"}" target="_blank" rel="noreferrer">
              ${createIcon("map-pin")}
              <span>${escapeHTML(config.address?.full || "")}</span>
            </a>
          </div>

          <a class="btn btn--dark mobile-menu__cta" href="${normalizeHref("contact.html")}">
            <span>Get a Free Quote</span>
            ${createIcon("arrow-right")}
          </a>

          <p class="mobile-menu__notice">
            Roofix helps compare independent roofing providers. Homeowners verify details directly.
          </p>
        </aside>
      </div>
    `;
    };

    const renderFooter = () => {
        const mount = qs("[data-site-footer]");
        if (!mount) return;

        const mainLinks = [
            { label: "Home", href: "index.html" },
            { label: "Services", href: "services.html" },
            { label: "About Us", href: "about.html" },
            { label: "Contact", href: "contact.html" }
        ];

        const legalLinks = [
            { label: "Privacy Policy", href: "privacy-policy.html" },
            { label: "Cookie Policy", href: "cookie-policy.html" },
            { label: "Terms of Service", href: "terms-of-service.html" }
        ];

        mount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="site-footer__top">
            <div class="site-footer__brand">
              ${logoMarkup()}

              <p>
                ${escapeHTML(config.footerText || "")}
              </p>

              <div class="site-footer__contact">
                <a href="${config.phoneHref || "#"}">${createIcon("phone")} ${escapeHTML(config.phone || "")}</a>
                <a href="${config.emailHref || "#"}">${createIcon("mail")} ${escapeHTML(config.email || "")}</a>
                <a href="${config.address?.mapsUrl || "#"}" target="_blank" rel="noreferrer">
                  ${createIcon("map-pin")} ${escapeHTML(config.address?.full || "")}
                </a>
              </div>
            </div>

            <div class="site-footer__cols">
              <div class="site-footer__col">
                <h3>Navigation</h3>
                ${mainLinks
                .map((link) => `<a href="${normalizeHref(link.href)}">${escapeHTML(link.label)}</a>`)
                .join("")}
              </div>

              <div class="site-footer__col">
                <h3>Services</h3>
                ${(config.services || [])
                .filter((service) => ["roof-installation", "roof-replacement", "roof-repair", "roof-inspection"].includes(service.id))
                .map((service) => `<a href="${normalizeHref(service.href)}">${escapeHTML(service.title)}</a>`)
                .join("")}
              </div>

              <div class="site-footer__col">
                <h3>Roof Types</h3>
                ${(config.roofTypes || [])
                .map((type) => `<a href="${normalizeHref(type.href)}">${escapeHTML(type.shortTitle || type.title)}</a>`)
                .join("")}
              </div>

              <div class="site-footer__col">
                <h3>Legal</h3>
                ${legalLinks
                .map((link) => `<a href="${normalizeHref(link.href)}">${escapeHTML(link.label)}</a>`)
                .join("")}

                <span class="site-footer__id">
                  Company ID: ${escapeHTML(config.companyId || "")}
                </span>
              </div>
            </div>
          </div>

          <div class="site-footer__notice">
            <strong>Platform notice:</strong>
            <span data-disclaimer>${escapeHTML(config.disclaimer || "")}</span>
          </div>

          <div class="site-footer__bottom">
            <p>© <span data-current-year></span> ${escapeHTML(config.companyName || "Roofix")}. All rights reserved.</p>
            <p>${escapeHTML(config.legalNotice || "")}</p>
          </div>
        </div>
      </footer>
    `;
    };

    const injectSimpleData = () => {
        const dataMap = [
            ["[data-company-name]", config.companyName],
            ["[data-company-id]", config.companyId],
            ["[data-phone-text]", config.phone],
            ["[data-phone-button-label]", config.phoneButtonLabel],
            ["[data-email-text]", config.email],
            ["[data-address-text]", config.address?.full],
            ["[data-footer-text]", config.footerText],
            ["[data-service-area]", config.serviceArea],
            ["[data-disclaimer]", config.disclaimer],
            ["[data-legal-notice]", config.legalNotice]
        ];

        dataMap.forEach(([selector, value]) => {
            qsa(selector).forEach((element) => {
                element.textContent = value || "";
            });
        });

        qsa("[data-phone-link]").forEach((element) => {
            element.setAttribute("href", config.phoneHref || "#");
        });

        qsa("[data-email-link]").forEach((element) => {
            element.setAttribute("href", config.emailHref || "#");
        });

        qsa("[data-address-link]").forEach((element) => {
            element.setAttribute("href", config.address?.mapsUrl || "#");
            element.setAttribute("target", "_blank");
            element.setAttribute("rel", "noreferrer");
        });

        qsa("[data-current-year]").forEach((element) => {
            element.textContent = String(new Date().getFullYear());
        });
    };

    const renderHeroNav = () => {
        qsa("[data-hero-nav]").forEach((mount) => {
            const group = mount.dataset.heroNav || "home";
            const items = config.heroNav?.[group] || [];

            mount.innerHTML = items
                .map(
                    (item) => `
            <a href="${escapeHTML(item.href)}" class="hero-nav__link">
              <span>${escapeHTML(item.label)}</span>
              ${createIcon("arrow-down")}
            </a>
          `
                )
                .join("");
        });
    };

    const renderServiceCards = () => {
        qsa("[data-service-cards]").forEach((mount) => {
            const ids = mount.dataset.serviceIds
                ? mount.dataset.serviceIds.split(",").map((id) => id.trim()).filter(Boolean)
                : null;

            const limit = Number(mount.dataset.limit || 0);

            let services = config.services || [];

            if (ids?.length) {
                services = services.filter((service) => ids.includes(service.id));
            }

            if (limit > 0) {
                services = services.slice(0, limit);
            }

            mount.innerHTML = services
                .map(
                    (service) => `
            <article class="photo-card service-card">
              <img
                src="${escapeHTML(service.image)}"
                alt="${escapeHTML(service.title)} provider comparison"
                loading="lazy"
              />

              <div class="photo-card__overlay"></div>

              <span class="photo-card__icon" aria-hidden="true">
                ${createIcon(service.icon || "home")}
              </span>

              <div class="photo-card__content">
                <span class="photo-card__eyebrow">${escapeHTML(service.eyebrow || "Service path")}</span>
                <h3>${escapeHTML(service.title)}</h3>
                <p>${escapeHTML(service.cardText || service.summary || "")}</p>

                <a href="${normalizeHref(service.href)}">
                  <span>${escapeHTML(service.ctaLabel || "Compare options")}</span>
                  ${createIcon("arrow-right")}
                </a>
              </div>
            </article>
          `
                )
                .join("");
        });
    };

    const renderRoofTypeCards = () => {
        qsa("[data-roof-type-cards]").forEach((mount) => {
            const limit = Number(mount.dataset.limit || 0);
            let roofTypes = config.roofTypes || [];

            if (limit > 0) {
                roofTypes = roofTypes.slice(0, limit);
            }

            mount.innerHTML = roofTypes
                .map(
                    (type) => `
            <article class="photo-card roof-type-card" id="${escapeHTML(type.id)}">
              <img
                src="${escapeHTML(type.image)}"
                alt="${escapeHTML(type.title)} comparison"
                loading="lazy"
              />

              <div class="photo-card__overlay"></div>

              <span class="photo-card__icon" aria-hidden="true">
                ${createIcon(type.icon || "layers")}
              </span>

              <div class="photo-card__content">
                <span class="photo-card__eyebrow">${escapeHTML(type.eyebrow || "Roof type")}</span>
                <h3>${escapeHTML(type.title)}</h3>
                <p>${escapeHTML(type.summary || "")}</p>

                <a href="${normalizeHref(type.href)}">
                  <span>View comparison</span>
                  ${createIcon("arrow-right")}
                </a>
              </div>
            </article>
          `
                )
                .join("");
        });
    };

    const renderFaq = () => {
        qsa("[data-faq-list]").forEach((mount) => {
            const group = mount.dataset.faqGroup || "home";
            const faqs = config.faq?.[group] || [];

            mount.innerHTML = faqs
                .map(
                    (item, index) => `
            <div class="faq-item">
              <button class="faq-item__button" type="button" aria-expanded="false">
                <span>${escapeHTML(item.question)}</span>
                <span class="faq-item__icon" aria-hidden="true">${createIcon("plus")}</span>
              </button>

              <div class="faq-item__panel" hidden>
                <p>${escapeHTML(item.answer)}</p>
              </div>
            </div>
          `
                )
                .join("");

            const buttons = qsa(".faq-item__button", mount);

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    const item = button.closest(".faq-item");
                    const panel = qs(".faq-item__panel", item);
                    const isOpen = button.getAttribute("aria-expanded") === "true";

                    buttons.forEach((otherButton) => {
                        const otherItem = otherButton.closest(".faq-item");
                        const otherPanel = qs(".faq-item__panel", otherItem);

                        otherButton.setAttribute("aria-expanded", "false");
                        otherItem.classList.remove("is-open");
                        otherPanel.hidden = true;
                    });

                    if (!isOpen) {
                        button.setAttribute("aria-expanded", "true");
                        item.classList.add("is-open");
                        panel.hidden = false;
                    }
                });
            });
        });
    };

    const renderFaqSchema = () => {
        qsa("[data-faq-schema]").forEach((mount) => {
            const group = mount.dataset.faqSchema || mount.dataset.faqGroup || "home";
            const faqs = config.faq?.[group] || [];

            if (!faqs.length) return;

            const schema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer
                    }
                }))
            };

            mount.textContent = JSON.stringify(schema);
        });
    };

    const renderPolicyBanner = () => {
        const mount = qs("[data-policy-banner]");
        const bannerConfig = config.cookieBanner;

        if (!mount || !bannerConfig?.storageKey) return;

        const savedChoice = localStorage.getItem(bannerConfig.storageKey);

        if (savedChoice) {
            mount.innerHTML = "";
            mount.hidden = true;
            return;
        }

        mount.hidden = false;

        mount.innerHTML = `
      <div class="policy-banner" role="region" aria-label="Cookie preferences">
        <div class="policy-banner__content">
          <strong>${escapeHTML(bannerConfig.title || "Cookie preferences")}</strong>
          <p>${escapeHTML(bannerConfig.text || "")}</p>

          <div class="policy-banner__links">
            ${(bannerConfig.links || [])
                .map((link) => `<a href="${normalizeHref(link.href)}">${escapeHTML(link.label)}</a>`)
                .join("")}
          </div>
        </div>

        <div class="policy-banner__actions">
          <button class="btn btn--dark" type="button" data-cookie-accept>
            ${escapeHTML(bannerConfig.acceptLabel || "Accept")}
          </button>

          <button class="btn btn--outline" type="button" data-cookie-decline>
            ${escapeHTML(bannerConfig.declineLabel || "Decline")}
          </button>
        </div>
      </div>
    `;

        const saveChoice = (choice) => {
            localStorage.setItem(bannerConfig.storageKey, choice);
            mount.innerHTML = "";
            mount.hidden = true;
        };

        qs("[data-cookie-accept]", mount)?.addEventListener("click", () => saveChoice("accepted"));
        qs("[data-cookie-decline]", mount)?.addEventListener("click", () => saveChoice("declined"));
    };

    const initStickyHeader = () => {
        const header = qs("[data-header]");

        if (!header) return;

        const updateHeaderState = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
        };

        updateHeaderState();
        window.addEventListener("scroll", updateHeaderState, { passive: true });
    };

    const initMobileMenu = () => {
        const menu = qs("[data-mobile-menu]");
        const openButton = qs("[data-mobile-open]");
        const closeButtons = qsa("[data-mobile-close]");

        if (!menu || !openButton) return;

        const panel = qs(".mobile-menu__panel", menu);
        let lastFocusedElement = null;

        const focusableSelector = [
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "[tabindex]:not([tabindex='-1'])"
        ].join(",");

        const openMenu = () => {
            lastFocusedElement = document.activeElement;

            menu.removeAttribute("inert");
            menu.classList.add("is-open");
            document.body.classList.add("menu-open");
            openButton.setAttribute("aria-expanded", "true");

            const firstFocusable = qs(focusableSelector, panel);
            firstFocusable?.focus();
        };

        const closeMenu = () => {
            menu.classList.remove("is-open");
            document.body.classList.remove("menu-open");
            openButton.setAttribute("aria-expanded", "false");

            setTimeout(() => {
                menu.setAttribute("inert", "");
            }, 250);

            if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
                lastFocusedElement.focus();
            }
        };

        openButton.addEventListener("click", openMenu);

        closeButtons.forEach((button) => {
            button.addEventListener("click", closeMenu);
        });

        qsa(".mobile-menu a", menu).forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (!menu.classList.contains("is-open")) return;

            if (event.key === "Escape") {
                closeMenu();
            }

            if (event.key === "Tab") {
                const focusable = qsa(focusableSelector, panel);
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (!first || !last) return;

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });
    };

    const initDropdowns = () => {
        qsa(".site-nav__item--dropdown").forEach((item) => {
            const link = qs(".site-nav__link", item);
            const dropdown = qs(".site-dropdown", item);

            if (!link || !dropdown) return;

            item.addEventListener("mouseenter", () => {
                item.classList.add("is-open");
            });

            item.addEventListener("mouseleave", () => {
                item.classList.remove("is-open");
            });

            link.addEventListener("focus", () => {
                item.classList.add("is-open");
            });

            qsa("a", dropdown).forEach((childLink) => {
                childLink.addEventListener("blur", () => {
                    setTimeout(() => {
                        if (!item.contains(document.activeElement)) {
                            item.classList.remove("is-open");
                        }
                    }, 30);
                });
            });
        });
    };

    const initSmoothAnchors = () => {
        qsa('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const targetId = link.getAttribute("href");
                if (!targetId || targetId === "#") return;

                const target = qs(targetId);
                if (!target) return;

                event.preventDefault();

                const headerHeight = qs("[data-header]")?.offsetHeight || 0;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 14;

                window.scrollTo({
                    top: targetTop,
                    behavior: "smooth"
                });
            });
        });
    };

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validatePhone = (value) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 7 && digits.length <= 15;
    };

    const setFieldState = (field, message = "", state = "") => {
        const fieldWrap = field.closest(".form-field");
        const error = qs(".form-field__error", fieldWrap);
        const status = qs(".form-field__status", fieldWrap);

        fieldWrap.classList.remove("is-error", "is-valid");

        if (state === "error") {
            fieldWrap.classList.add("is-error");
            if (error) error.textContent = message;
            if (status) status.innerHTML = createIcon("circle-alert");
            return;
        }

        if (state === "valid") {
            fieldWrap.classList.add("is-valid");
            if (error) error.textContent = "";
            if (status) status.innerHTML = createIcon("check");
            return;
        }

        if (error) error.textContent = "";
        if (status) status.innerHTML = "";
    };

    const initForms = () => {
        qsa("[data-roofix-form]").forEach((form) => {
            const successBox = qs("[data-form-success]", form);
            const errorBox = qs("[data-form-error]", form);

            form.setAttribute("novalidate", "");

            const validateField = (field) => {
                const value = field.value.trim();
                const type = field.dataset.validate || field.type;
                const required = field.hasAttribute("required");
                const label = field.dataset.label || field.getAttribute("name") || "This field";

                if (required && !value) {
                    setFieldState(field, `${label} is required.`, "error");
                    return false;
                }

                if (value && type === "email" && !validateEmail(value)) {
                    setFieldState(field, "Please enter a valid email address.", "error");
                    return false;
                }

                if (value && type === "phone" && !validatePhone(value)) {
                    setFieldState(field, "Please enter a valid phone number.", "error");
                    return false;
                }

                if (value) {
                    setFieldState(field, "", "valid");
                } else {
                    setFieldState(field);
                }

                return true;
            };

            qsa("input, select, textarea", form).forEach((field) => {
                field.addEventListener("input", () => validateField(field));
                field.addEventListener("blur", () => validateField(field));
            });

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                const fields = qsa("input, select, textarea", form);
                const isValid = fields.map(validateField).every(Boolean);

                if (!isValid) {
                    if (successBox) successBox.hidden = true;

                    if (errorBox) {
                        errorBox.hidden = false;
                        errorBox.textContent = config.forms?.contact?.errorMessage || "Please check the highlighted fields.";
                    }

                    const firstError = qs(".form-field.is-error input, .form-field.is-error select, .form-field.is-error textarea", form);
                    firstError?.focus();
                    return;
                }

                if (errorBox) errorBox.hidden = true;

                if (successBox) {
                    successBox.hidden = false;
                    successBox.textContent =
                        config.forms?.contact?.successMessage ||
                        "Thanks — your request has been received.";
                }

                form.reset();

                qsa(".form-field", form).forEach((fieldWrap) => {
                    fieldWrap.classList.remove("is-error", "is-valid");
                });

                qsa(".form-field__status", form).forEach((status) => {
                    status.innerHTML = "";
                });
            });
        });
    };

    const initSlideshows = () => {
        qsa("[data-slideshow]").forEach((slideshow) => {
            const slides = qsa("[data-slide]", slideshow);
            const buttons = qsa("[data-slide-button]", slideshow);

            if (!slides.length || !buttons.length) return;

            const setSlide = (index) => {
                slides.forEach((slide, slideIndex) => {
                    slide.classList.toggle("is-active", slideIndex === index);
                });

                buttons.forEach((button, buttonIndex) => {
                    button.classList.toggle("is-active", buttonIndex === index);
                    button.setAttribute("aria-selected", buttonIndex === index ? "true" : "false");
                });
            };

            buttons.forEach((button, index) => {
                button.addEventListener("click", () => setSlide(index));
            });

            setSlide(0);
        });
    };

    const initReveal = () => {
        const elements = qsa("[data-reveal]");

        if (!elements.length) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.14
            }
        );

        elements.forEach((element) => observer.observe(element));
    };

    const renderLucideIcons = () => {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }
    };

    const init = () => {
        applyPageMeta();

        renderHeader();
        renderFooter();

        injectSimpleData();
        renderHeroNav();
        renderServiceCards();
        renderRoofTypeCards();
        renderFaq();
        renderFaqSchema();
        renderPolicyBanner();

        initStickyHeader();
        initMobileMenu();
        initDropdowns();
        initSmoothAnchors();
        initForms();
        initSlideshows();
        initReveal();

        renderLucideIcons();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();