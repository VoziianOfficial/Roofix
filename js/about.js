"use strict";

(function () {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initAboutMarquee = () => {
        const marquees = qsa(".marquee");

        marquees.forEach((marquee) => {
            if (prefersReducedMotion) {
                marquee.classList.add("is-paused");
            }

            marquee.addEventListener("mouseenter", () => {
                marquee.classList.add("is-paused");
            });

            marquee.addEventListener("mouseleave", () => {
                if (!prefersReducedMotion) {
                    marquee.classList.remove("is-paused");
                }
            });

            marquee.addEventListener("focusin", () => {
                marquee.classList.add("is-paused");
            });

            marquee.addEventListener("focusout", () => {
                if (!prefersReducedMotion) {
                    marquee.classList.remove("is-paused");
                }
            });
        });
    };

    const initAboutCardDelays = () => {
        const animatedItems = qsa(".step-card, .notice-column, .detail-row, .slideshow-tab");

        animatedItems.forEach((item, index) => {
            item.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
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

    const initSlideshowKeyboard = () => {
        const slideshow = qs("[data-slideshow]");

        if (!slideshow) return;

        const buttons = qsa("[data-slide-button]", slideshow);

        if (!buttons.length) return;

        buttons.forEach((button, index) => {
            button.addEventListener("keydown", (event) => {
                const isNext = event.key === "ArrowRight" || event.key === "ArrowDown";
                const isPrev = event.key === "ArrowLeft" || event.key === "ArrowUp";

                if (!isNext && !isPrev) return;

                event.preventDefault();

                const nextIndex = isNext
                    ? (index + 1) % buttons.length
                    : (index - 1 + buttons.length) % buttons.length;

                buttons[nextIndex].focus();
                buttons[nextIndex].click();
            });
        });
    };

    const initAboutPage = () => {
        initAboutMarquee();
        initAboutCardDelays();
        initSectionProgress();
        initSlideshowKeyboard();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAboutPage);
    } else {
        initAboutPage();
    }
})();