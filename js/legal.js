"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const initLegalRevealDelays = () => {
        const cards = qsa(".legal-card, .legal-meta__item, .legal-note");

        cards.forEach((card, index) => {
            card.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
        });
    };

    const initLegalExternalLinks = () => {
        qsa(".legal-content a, .legal-meta a").forEach((link) => {
            const href = link.getAttribute("href") || "";

            if (href.startsWith("http")) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noreferrer");
            }
        });
    };

    const initLegalCardHover = () => {
        const cards = qsa(".legal-card");

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

    const initLegalPage = () => {
        initLegalRevealDelays();
        initLegalExternalLinks();
        initLegalCardHover();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLegalPage);
    } else {
        initLegalPage();
    }
})();