"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initCardStagger = () => {
        const cards = qsa(".photo-card, .detail-row");

        cards.forEach((card, index) => {
            card.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
        });
    };

    const initRoofTypeFocus = () => {
        const cards = qsa(".roof-type-card");

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

    const initMarqueeAccessibility = () => {
        const marquees = qsa(".marquee");

        marquees.forEach((marquee) => {
            marquee.addEventListener("focusin", () => {
                marquee.classList.add("is-paused");
            });

            marquee.addEventListener("focusout", () => {
                marquee.classList.remove("is-paused");
            });

            if (prefersReducedMotion) {
                marquee.classList.add("is-paused");
            }
        });
    };

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

    const initServicesPage = () => {
        initCardStagger();
        initRoofTypeFocus();
        initMarqueeAccessibility();
        initSectionProgress();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initServicesPage);
    } else {
        initServicesPage();
    }
})();