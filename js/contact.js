"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const initSectionProgress = () => {
        const navLinks = qsa(".hero-nav__link");

        const sections = navLinks
            .map((link) => {
                const href = link.getAttribute("href");

                if (!href || !href.startsWith("#")) return null;

                const section = qs(href);

                if (!section) return null;

                return {
                    link,
                    section
                };
            })
            .filter(Boolean);

        if (!sections.length) return;

        const setActive = () => {
            const offset = 150;
            let activeItem = sections[0];

            sections.forEach((item) => {
                const top = item.section.getBoundingClientRect().top;

                if (top <= offset) {
                    activeItem = item;
                }
            });

            sections.forEach((item) => {
                item.link.classList.toggle("is-active", item === activeItem);
            });
        };

        setActive();

        window.addEventListener("scroll", setActive, { passive: true });
        window.addEventListener("resize", setActive);
    };

    const initPhoneFormatting = () => {
        const phoneInput = qs("#phone");

        if (!phoneInput) return;

        phoneInput.addEventListener("input", () => {
            const digits = phoneInput.value.replace(/\D/g, "").slice(0, 10);

            if (digits.length <= 3) {
                phoneInput.value = digits;
                return;
            }

            if (digits.length <= 6) {
                phoneInput.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
                return;
            }

            phoneInput.value = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
        });
    };

    const initContactCardFocus = () => {
        const cards = qsa(".contact-card");

        if (!cards.length) return;

        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                cards.forEach((otherCard) => {
                    otherCard.classList.toggle("is-soft-muted", otherCard !== card);
                });
            });

            card.addEventListener("mouseleave", () => {
                cards.forEach((otherCard) => {
                    otherCard.classList.remove("is-soft-muted");
                });
            });
        });
    };

    const initFormFocusState = () => {
        const fields = qsa(".form-control");

        fields.forEach((field) => {
            field.addEventListener("focus", () => {
                field.closest(".form-field")?.classList.add("is-focused");
            });

            field.addEventListener("blur", () => {
                field.closest(".form-field")?.classList.remove("is-focused");
            });
        });
    };

    const initMapMotion = () => {
        const mapCard = qs(".map-card");
        const pin = qs(".map-pin");

        if (!mapCard || !pin) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) return;

        mapCard.addEventListener("mousemove", (event) => {
            const rect = mapCard.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            pin.style.transform = `translate(calc(-50% + ${x * 10}px), calc(-50% + ${y * 10}px)) rotate(-45deg)`;
        });

        mapCard.addEventListener("mouseleave", () => {
            pin.style.transform = "translate(-50%, -50%) rotate(-45deg)";
        });
    };

    const initSubmitScroll = () => {
        const form = qs("[data-roofix-form]");
        const successBox = qs("[data-form-success]", form || document);

        if (!form || !successBox) return;

        form.addEventListener("submit", () => {
            window.setTimeout(() => {
                if (!successBox.hidden) {
                    successBox.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            }, 80);
        });
    };

    const initContactPage = () => {
        initSectionProgress();
        initPhoneFormatting();
        initContactCardFocus();
        initFormFocusState();
        initMapMotion();
        initSubmitScroll();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initContactPage);
    } else {
        initContactPage();
    }
})();