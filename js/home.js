"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initHeroParallax = () => {
        if (prefersReducedMotion) return;

        const hero = qs(".home-hero");
        const heroImage = qs(".home-hero__bg img");

        if (!hero || !heroImage) return;

        const update = () => {
            const rect = hero.getBoundingClientRect();
            const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
            const move = progress * 22;

            heroImage.style.transform = `translate3d(0, ${move}px, 0) scale(1.035)`;
        };

        update();

        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
    };

    const initTrustStripHover = () => {
        const items = qsa(".trust-strip__item");

        if (!items.length) return;

        items.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                items.forEach((other) => {
                    other.classList.toggle("is-muted", other !== item);
                });
            });

            item.addEventListener("mouseleave", () => {
                items.forEach((other) => {
                    other.classList.remove("is-muted");
                });
            });
        });
    };

    const initHeroProofDelay = () => {
        const badges = qsa(".proof-badge");

        badges.forEach((badge, index) => {
            badge.style.transitionDelay = `${index * 80}ms`;
        });
    };

    const initHome = () => {
        initHeroParallax();
        initTrustStripHover();
        initHeroProofDelay();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHome);
    } else {
        initHome();
    }
})();