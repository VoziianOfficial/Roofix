"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const initCardFocus = () => {
        const groups = [
            qsa(".photo-card"),
            qsa(".detail-row"),
            qsa(".step-card")
        ];

        groups.forEach((items) => {
            if (!items.length) return;

            items.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    items.forEach((otherItem) => {
                        otherItem.classList.toggle("is-soft-muted", otherItem !== item);
                    });
                });

                item.addEventListener("mouseleave", () => {
                    items.forEach((otherItem) => {
                        otherItem.classList.remove("is-soft-muted");
                    });
                });
            });
        });
    };

    const initStaggerDelays = () => {
        const items = qsa(".photo-card, .detail-row, .step-card, .notice-column");

        items.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
        });
    };

    const initHeroImageMotion = () => {
        if (prefersReducedMotion) return;

        const hero = qs(".page-hero");
        const heroImage = qs(".page-hero__bg img");

        if (!hero || !heroImage) return;

        const update = () => {
            const rect = hero.getBoundingClientRect();
            const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
            const move = progress * 18;

            heroImage.style.transform = `translate3d(0, ${move}px, 0) scale(1.035)`;
        };

        update();

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
    };

    const initRelatedCards = () => {
        const cards = qsa("[data-roof-type-cards] .photo-card");

        if (!cards.length) return;

        cards.forEach((card, index) => {
            const icon = qs(".photo-card__icon", card);

            card.addEventListener("mouseenter", () => {
                card.style.zIndex = "2";

                if (icon) {
                    icon.style.transform = "rotate(4deg)";
                }
            });

            card.addEventListener("mouseleave", () => {
                card.style.zIndex = "";

                if (icon) {
                    icon.style.transform = "";
                }
            });

            card.style.transitionDelay = `${Math.min(index * 45, 180)}ms`;
        });
    };

    const initServicePage = () => {
        initSectionProgress();
        initCardFocus();
        initStaggerDelays();
        initHeroImageMotion();
        initRelatedCards();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initServicePage);
    } else {
        initServicePage();
    }
})();