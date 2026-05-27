"use strict";

window.SITE_CONFIG = {
    companyName: "Roofix",
    companyId: "RFX-2026",

    brand: {
        shortName: "Roofix",
        tagline: "Compare roofing providers with better clarity.",
        logoLabel: "Roofix",
        logoIconLabel: "Roofix roof mark"
    },

    phone: "555-123-4567",
    phoneHref: "tel:+15551234567",
    phoneButtonLabel: "Call Now",

    email: "support@roofix.com",
    emailHref: "mailto:support@roofix.com",

    address: {
        line1: "1847 Ridgeway Avenue",
        city: "Denver",
        state: "CO",
        zip: "80202",
        country: "USA",
        full: "1847 Ridgeway Avenue, Denver, CO 80202, USA",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=1847%20Ridgeway%20Avenue%2C%20Denver%2C%20CO%2080202%2C%20USA"
    },

    serviceArea: "United States",

    footerText:
        "Roofix helps homeowners compare independent roofing provider options for installation, replacement, repair, and inspection.",

    disclaimer:
        "Roofix is an independent provider-matching platform. Roofing companies are independent and handle their own estimates, timelines, warranties, pricing, permits, and project work. Roofix does not perform roofing work directly and does not guarantee provider availability, pricing, or results. Homeowners should verify licensing, insurance, estimates, permits, and warranty terms directly with each provider.",

    legalNotice:
        "Provider availability, pricing, timelines, and warranty terms may vary by location, project scope, roof type, home condition, and provider criteria.",

    navigation: [
        {
            label: "Home",
            href: "index.html"
        },
        {
            label: "Services",
            href: "services.html",
            children: [
                {
                    label: "Roof Installation",
                    href: "roof-installation.html"
                },
                {
                    label: "Roof Replacement",
                    href: "roof-replacement.html"
                },
                {
                    label: "Roof Repair",
                    href: "roof-repair.html"
                },
                {
                    label: "Roof Inspection",
                    href: "roof-inspection.html"
                }
            ]
        },
        {
            label: "Roof Types",
            href: "services.html#roof-types",
            children: [
                {
                    label: "Asphalt Shingle Roofing",
                    href: "asphalt-shingle-roofing.html"
                },
                {
                    label: "Metal Roofing",
                    href: "metal-roofing.html"
                },
                {
                    label: "Flat Roof Systems",
                    href: "flat-roof-systems.html"
                },
                {
                    label: "Tile Roofing",
                    href: "tile-roofing.html"
                }
            ]
        },
        {
            label: "About Us",
            href: "about.html"
        },
        {
            label: "Pages",
            href: "about.html",
            children: [
                {
                    label: "About Us",
                    href: "about.html"
                },
                {
                    label: "Contact",
                    href: "contact.html"
                },
                {
                    label: "Privacy Policy",
                    href: "privacy-policy.html"
                },
                {
                    label: "Cookie Policy",
                    href: "cookie-policy.html"
                },
                {
                    label: "Terms of Service",
                    href: "terms-of-service.html"
                }
            ]
        },
        {
            label: "Blog",
            href: "blog.html"
        },
        {
            label: "Contact",
            href: "contact.html"
        }
    ],

    heroNav: {
        home: [
            {
                label: "How It Works",
                href: "#how-it-works"
            },
            {
                label: "Services",
                href: "#popular-services"
            },
            {
                label: "Provider Fit",
                href: "#provider-fit"
            },
            {
                label: "Before You Choose",
                href: "#before-you-choose"
            },
            {
                label: "Notice",
                href: "#platform-notice"
            }
        ],

        services: [
            {
                label: "Services",
                href: "#service-paths"
            },
            {
                label: "Roof Types",
                href: "#roof-types"
            },
            {
                label: "Estimates",
                href: "#estimate-clarity"
            },
            {
                label: "Provider Fit",
                href: "#provider-fit"
            },
            {
                label: "Questions",
                href: "#homeowner-questions"
            }
        ],

        about: [
            {
                label: "Why",
                href: "#why-roofix"
            },
            {
                label: "Compare",
                href: "#compare-smarter"
            },
            {
                label: "Model",
                href: "#aggregator-model"
            },
            {
                label: "Role",
                href: "#platform-role"
            },
            {
                label: "Verify",
                href: "#comparison-factors"
            }
        ],

        contact: [
            {
                label: "After Submit",
                href: "#after-submit"
            },
            {
                label: "Checklist",
                href: "#request-checklist"
            },
            {
                label: "Form",
                href: "#contact-form-section"
            },
            {
                label: "Contact",
                href: "#contact-options"
            },
            {
                label: "Notice",
                href: "#contact-notice"
            }
        ]
    },

    services: [
        {
            id: "roof-installation",
            title: "Roof Installation",
            shortTitle: "Installation",
            href: "roof-installation.html",
            icon: "home",
            image: "./assets/images/service-roof-installation.jpg",
            heroImage: "./assets/images/hero-roof-installation.jpg",
            eyebrow: "Service path",
            summary:
                "Compare independent providers for planned roof installation projects, additions, and new roof systems.",
            cardText:
                "Compare installation provider options for new roof projects and planned home upgrades.",
            ctaLabel: "Compare installation options",
            pricingNote: "Provider pricing varies",
            pageTitle: "Compare Roof Installation Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent roofing providers for planned roof installation projects. Providers handle estimates, materials, timelines, warranties, permits, and project work directly.",
            fitPoints: [
                "New construction or home addition roofing",
                "Planned roof system installation",
                "Material and ventilation planning",
                "Provider estimate comparison before choosing"
            ],
            comparisonFactors: [
                {
                    title: "Installation scope",
                    text:
                        "Ask which roof areas, decking, underlayment, flashing, ventilation, and accessories are included."
                },
                {
                    title: "Material direction",
                    text:
                        "Compare shingles, metal panels, tile, flat roof materials, fasteners, and manufacturer specifications."
                },
                {
                    title: "Timeline and access",
                    text:
                        "Review scheduling, weather windows, home access, delivery, cleanup, and communication expectations."
                },
                {
                    title: "Warranty terms",
                    text:
                        "Verify manufacturer coverage and labor warranty details directly with each provider."
                }
            ]
        },

        {
            id: "roof-replacement",
            title: "Roof Replacement",
            shortTitle: "Replacement",
            href: "roof-replacement.html",
            icon: "refresh-cw",
            image: "./assets/images/service-roof-replacement.jpg",
            heroImage: "./assets/images/hero-roof-replacement.jpg",
            eyebrow: "Service path",
            summary:
                "Compare providers for full roof replacement, tear-off, worn shingles, and updated roofing systems.",
            cardText:
                "Compare replacement provider options for aging roofs, worn shingles, and full system updates.",
            ctaLabel: "Compare replacement options",
            pricingNote: "Request estimate",
            pageTitle: "Compare Roof Replacement Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent roofing providers for roof replacement projects. Homeowners should verify tear-off, disposal, decking, materials, permits, timelines, and warranty terms directly.",
            fitPoints: [
                "Aging roof with widespread wear",
                "Full tear-off and new roofing system",
                "Damaged or curling shingles",
                "Changing roofing material or appearance"
            ],
            comparisonFactors: [
                {
                    title: "Tear-off details",
                    text:
                        "Ask whether old roofing removal, disposal, decking review, and cleanup are included."
                },
                {
                    title: "Decking and flashing",
                    text:
                        "Clarify how damaged decking, flashing, vents, and roof transitions are handled."
                },
                {
                    title: "Material comparison",
                    text:
                        "Compare material grade, underlayment, ventilation, accessories, and manufacturer guidance."
                },
                {
                    title: "Project protection",
                    text:
                        "Ask how landscaping, gutters, driveway access, and cleanup will be managed."
                }
            ]
        },

        {
            id: "roof-repair",
            title: "Roof Repair",
            shortTitle: "Repair",
            href: "roof-repair.html",
            icon: "wrench",
            image: "./assets/images/service-roof-repair.jpg",
            heroImage: "./assets/images/hero-roof-repair.jpg",
            eyebrow: "Service path",
            summary:
                "Compare repair providers for leaks, missing shingles, flashing issues, storm damage, and localized roof concerns.",
            cardText:
                "Compare repair provider options for leaks, flashing problems, storm damage, and localized fixes.",
            ctaLabel: "Compare repair options",
            pricingNote: "Compare options",
            pageTitle: "Compare Roof Repair Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent roofing providers for repair-related needs. Providers inspect, estimate, schedule, and complete repairs directly with the homeowner.",
            fitPoints: [
                "Active leaks or water stains",
                "Missing, lifted, or damaged shingles",
                "Flashing, vent, or chimney issues",
                "Storm, wind, or hail-related concerns"
            ],
            comparisonFactors: [
                {
                    title: "Leak source",
                    text:
                        "Ask how the provider identifies the actual leak source before recommending repair work."
                },
                {
                    title: "Repair boundary",
                    text:
                        "Clarify whether the estimate covers only the visible issue or nearby affected areas too."
                },
                {
                    title: "Temporary vs permanent",
                    text:
                        "Ask whether the proposed fix is temporary, maintenance-based, or intended as a longer-term repair."
                },
                {
                    title: "Future replacement risk",
                    text:
                        "Discuss whether the repair is enough or whether broader roof age may affect future decisions."
                }
            ]
        },

        {
            id: "roof-inspection",
            title: "Roof Inspection",
            shortTitle: "Inspection",
            href: "roof-inspection.html",
            icon: "search-check",
            image: "./assets/images/service-roof-inspection.jpg",
            heroImage: "./assets/images/hero-roof-inspection.jpg",
            eyebrow: "Service path",
            summary:
                "Compare inspection and consultation options for roof condition checks, maintenance planning, and storm assessment.",
            cardText:
                "Compare inspection options for roof condition checks, maintenance planning, and storm assessment.",
            ctaLabel: "Compare inspection options",
            pricingNote: "Provider terms vary",
            pageTitle: "Compare Roof Inspection & Consultation Options",
            pageIntro:
                "Roofix helps homeowners compare independent provider options for roof inspections and roofing consultations. Providers handle inspection scope, reporting, recommendations, and follow-up directly.",
            fitPoints: [
                "Pre-sale or pre-purchase roof review",
                "Storm or wind damage assessment",
                "Maintenance planning",
                "Understanding whether repair or replacement may fit"
            ],
            comparisonFactors: [
                {
                    title: "Inspection scope",
                    text:
                        "Ask what areas are reviewed, whether photos are provided, and how findings are explained."
                },
                {
                    title: "Report format",
                    text:
                        "Clarify whether the provider gives a written summary, photo notes, or verbal recommendations."
                },
                {
                    title: "Repair recommendations",
                    text:
                        "Ask how repair, maintenance, and replacement recommendations are separated."
                },
                {
                    title: "Limitations",
                    text:
                        "Verify whether attic access, moisture checks, storm review, or warranty review are included."
                }
            ]
        },

        {
            id: "roof-drainage",
            title: "Roof Drainage",
            shortTitle: "Drainage",
            href: "services.html#roof-drainage",
            icon: "droplets",
            image: "./assets/images/service-roof-drainage.jpg",
            eyebrow: "Related path",
            summary:
                "Compare provider options for gutter, drainage, and roof water-flow questions connected to roofing projects.",
            cardText:
                "Compare drainage-related provider options for gutters, roof edges, and water-flow concerns.",
            ctaLabel: "Compare drainage options",
            pricingNote: "Provider pricing varies"
        }
    ],

    roofTypes: [
        {
            id: "asphalt-shingle",
            title: "Asphalt Shingle Roofing",
            shortTitle: "Asphalt Shingle",
            href: "asphalt-shingle-roofing.html",
            icon: "layers",
            image: "./assets/images/roof-type-asphalt-shingle.jpg",
            heroImage: "./assets/images/hero-asphalt-shingle.jpg",
            eyebrow: "Roof type",
            summary:
                "A common residential roof option with broad style availability and provider familiarity.",
            pageTitle: "Compare Asphalt Shingle Roofing Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent providers familiar with asphalt shingle roofing. Homeowners verify material suitability, estimate details, warranty terms, and installation scope directly."
        },
        {
            id: "metal-roofing",
            title: "Metal Roofing",
            shortTitle: "Metal Roofing",
            href: "metal-roofing.html",
            icon: "panel-top",
            image: "./assets/images/roof-type-metal.jpg",
            heroImage: "./assets/images/hero-metal-roofing.jpg",
            eyebrow: "Roof type",
            summary:
                "A durable roof category often compared for longevity, profile, finish, and installation requirements.",
            pageTitle: "Compare Metal Roofing Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent providers familiar with metal roofing. Homeowners verify system type, fastening method, finish, estimate details, and warranty terms directly."
        },
        {
            id: "flat-roof",
            title: "Flat Roof Systems",
            shortTitle: "Flat Roof",
            href: "flat-roof-systems.html",
            icon: "layout-panel-top",
            image: "./assets/images/roof-type-flat.jpg",
            heroImage: "./assets/images/hero-flat-roof.jpg",
            eyebrow: "Roof type",
            summary:
                "A roof category where drainage, membrane type, flashing, and maintenance details matter.",
            pageTitle: "Compare Flat Roof System Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent providers familiar with flat roof systems. Homeowners verify slope, drainage, membrane details, flashing, maintenance, and warranty terms directly."
        },
        {
            id: "tile-roofing",
            title: "Tile Roofing",
            shortTitle: "Tile Roofing",
            href: "tile-roofing.html",
            icon: "grid-3x3",
            image: "./assets/images/roof-type-tile.jpg",
            heroImage: "./assets/images/hero-tile-roofing.jpg",
            eyebrow: "Roof type",
            summary:
                "A premium roof look where structure, weight, underlayment, and installation details should be reviewed carefully.",
            pageTitle: "Compare Tile Roofing Provider Options",
            pageIntro:
                "Roofix helps homeowners compare independent providers familiar with tile roofing. Homeowners verify material suitability, structural requirements, underlayment, estimate details, and warranty terms directly."
        }
    ],

    trustStrip: [
        {
            icon: "badge-check",
            label: "Verified Roofers"
        },
        {
            icon: "star",
            label: "Fair & Transparent Pricing"
        },
        {
            icon: "message-circle-heart",
            label: "Real Customer Reviews"
        },
        {
            icon: "calendar-check",
            label: "Fast & Easy Booking"
        }
    ],

    howItWorks: [
        {
            number: "01",
            icon: "search",
            title: "Search",
            text: "Enter your location and select your roofing needs."
        },
        {
            number: "02",
            icon: "list-checks",
            title: "Compare",
            text: "Compare estimates, provider details, and service options."
        },
        {
            number: "03",
            icon: "phone-call",
            title: "Connect",
            text: "Contact providers directly and review project details."
        },
        {
            number: "04",
            icon: "smile",
            title: "Choose",
            text: "Select the provider that fits your home and expectations."
        }
    ],

    comparisonFactors: [
        {
            number: "01",
            title: "Licensing & insurance",
            text: "Confirm provider credentials directly before choosing."
        },
        {
            number: "02",
            title: "Estimate structure",
            text: "Compare materials, labor, disposal, repairs, permits, and warranties."
        },
        {
            number: "03",
            title: "Roof material direction",
            text:
                "Ask how roof type affects appearance, maintenance, durability, and cost."
        },
        {
            number: "04",
            title: "Timeline & weather fit",
            text: "Review scheduling, weather delays, and communication expectations."
        }
    ],

    homeownerQuestions: [
        "Is the estimate itemized?",
        "What roof materials are included?",
        "Is tear-off and disposal included?",
        "Are permits needed?",
        "What warranty terms apply?",
        "What should the homeowner verify?"
    ],

    estimateClarity: [
        {
            number: "01",
            title: "Scope",
            text:
                "Ask which roof areas, decking, flashing, vents, and project boundaries are included."
        },
        {
            number: "02",
            title: "Materials",
            text:
                "Compare shingles, metal panels, underlayment, flashing, fasteners, and accessories."
        },
        {
            number: "03",
            title: "Labor",
            text:
                "Review tear-off, disposal, repairs, cleanup, access needs, and possible extras."
        },
        {
            number: "04",
            title: "Warranty",
            text:
                "Verify manufacturer and labor warranty details directly with each provider."
        }
    ],

    providerFitMarquee: [
        "Credentials",
        "Roofing experience",
        "Estimate structure",
        "Timeline fit",
        "Communication",
        "Warranty clarity",
        "Permit awareness",
        "Material guidance",
        "Cleanup expectations",
        "Home protection"
    ],

    socialProof: {
        eyebrow: "Roofix comparison clarity",
        title: "A cleaner way to compare roofing provider options.",
        items: [
            {
                label: "500+",
                value: "roofing professionals",
                text: "Provider availability may vary by location and project type."
            },
            {
                label: "4",
                value: "core service paths",
                text: "Installation, replacement, repair, and inspection."
            },
            {
                label: "100%",
                value: "independent comparison",
                text: "Roofix does not perform roofing work directly."
            }
        ]
    },

    forms: {
        contact: {
            formName: "Roofix provider comparison request",
            successMessage:
                "Thanks — your request has been received. Roofix helps organize comparison only; providers will discuss details directly.",
            errorMessage:
                "Please check the highlighted fields and complete the required details.",
            submitLabel: "Submit Request",
            serviceOptions: [
                "Roof Installation",
                "Roof Replacement",
                "Roof Repair",
                "Roof Inspection / Consultation"
            ],
            fields: {
                name: {
                    label: "Full Name",
                    placeholder: "Your name",
                    requiredMessage: "Please enter your name."
                },
                phone: {
                    label: "Phone",
                    placeholder: "555-123-4567",
                    requiredMessage: "Please enter your phone number.",
                    invalidMessage: "Please enter a valid phone number."
                },
                email: {
                    label: "Email",
                    placeholder: "you@example.com",
                    requiredMessage: "Please enter your email address.",
                    invalidMessage: "Please enter a valid email address."
                },
                service: {
                    label: "Selected Service",
                    placeholder: "Choose a service",
                    requiredMessage: "Please select a roofing service."
                },
                zip: {
                    label: "Project ZIP Code",
                    placeholder: "80202",
                    requiredMessage: "Please enter your project ZIP code."
                },
                message: {
                    label: "Message",
                    placeholder:
                        "Tell us about your roof, timeline, project goal, or questions.",
                    requiredMessage: "Please add a short message."
                }
            }
        }
    },

    cookieBanner: {
        storageKey: "roofix_cookie_preference_v1",
        title: "Cookie preferences",
        text:
            "Roofix uses cookies and local storage to improve site experience and remember your preferences. Review our Privacy Policy, Cookie Policy, and Terms of Service.",
        acceptLabel: "Accept",
        declineLabel: "Decline",
        links: [
            {
                label: "Privacy Policy",
                href: "privacy-policy.html"
            },
            {
                label: "Cookie Policy",
                href: "cookie-policy.html"
            },
            {
                label: "Terms of Service",
                href: "terms-of-service.html"
            }
        ]
    },

    faq: {
        home: [
            {
                question: "Does Roofix perform roofing work directly?",
                answer:
                    "No. Roofix is an independent provider-matching platform. Roofing companies are independent and handle estimates, pricing, timelines, warranties, permits, and project work directly."
            },
            {
                question: "Are roofing providers independent?",
                answer:
                    "Yes. Providers are independent businesses. Homeowners should verify licensing, insurance, estimate details, warranty terms, and project scope directly with each provider."
            },
            {
                question: "What should I verify before choosing a roofing provider?",
                answer:
                    "Verify licensing, insurance, estimate scope, materials, labor, disposal, permits, timeline, cleanup, and warranty terms before choosing."
            },
            {
                question: "Can I compare multiple roofing providers?",
                answer:
                    "Roofix is designed to help homeowners organize comparison around service intent, roof type, estimate details, and provider fit."
            },
            {
                question: "Does Roofix guarantee pricing or availability?",
                answer:
                    "No. Pricing, availability, timelines, warranties, and project terms are handled by independent providers and may vary."
            }
        ],

        services: [
            {
                question: "Which roofing services can I compare through Roofix?",
                answer:
                    "You can compare provider options for roof installation, roof replacement, roof repair, and roof inspection or consultation."
            },
            {
                question: "Are roof types separate from services?",
                answer:
                    "Roof types help guide the comparison, but the main service paths are installation, replacement, repair, and inspection."
            },
            {
                question: "Does Roofix set roofing prices?",
                answer:
                    "No. Roofix does not set pricing. Independent providers handle their own estimates, project terms, and pricing."
            },
            {
                question: "What makes estimates different?",
                answer:
                    "Roofing estimates may differ by materials, roof condition, labor, tear-off, disposal, permits, access, timeline, and warranty terms."
            }
        ],

        about: [
            {
                question: "Why was Roofix created?",
                answer:
                    "Roofix was created to help homeowners compare roofing provider options with clearer categories, better questions, and direct verification reminders."
            },
            {
                question: "What does Roofix help with?",
                answer:
                    "Roofix helps organize roofing service categories, provider comparison paths, and homeowner questions before direct provider conversations."
            },
            {
                question: "What does Roofix not do?",
                answer:
                    "Roofix does not install, replace, repair, inspect, consult, price, schedule, permit, warrant, or manage roofing projects directly."
            }
        ],

        contact: [
            {
                question: "What happens after I submit a request?",
                answer:
                    "Your request helps organize provider comparison around your project goal. Independent providers discuss details directly with you."
            },
            {
                question: "Should I include my ZIP code?",
                answer:
                    "Yes. A ZIP code helps organize the request around location, provider availability, and project context."
            },
            {
                question: "Can I call instead of using the form?",
                answer:
                    "Yes. You can call Roofix using the phone number listed on the site."
            }
        ],

        installation: [
            {
                question: "When does roof installation make sense?",
                answer:
                    "Roof installation may fit new construction, additions, planned roof systems, or major exterior upgrades."
            },
            {
                question: "What should I ask installation providers?",
                answer:
                    "Ask about roof system scope, materials, ventilation, underlayment, flashing, timeline, permits, cleanup, and warranty terms."
            },
            {
                question: "Does Roofix install roofs?",
                answer:
                    "No. Roofix helps compare independent provider options. Providers perform roofing work directly."
            }
        ],

        replacement: [
            {
                question: "When does roof replacement make sense?",
                answer:
                    "Replacement may fit aging roofs, widespread wear, repeated leaks, damaged shingles, or full system updates."
            },
            {
                question: "What should I compare in replacement estimates?",
                answer:
                    "Compare tear-off, disposal, decking review, materials, flashing, ventilation, cleanup, permits, and warranty terms."
            },
            {
                question: "Does Roofix guarantee replacement pricing?",
                answer:
                    "No. Independent providers set their own pricing and terms."
            }
        ],

        repair: [
            {
                question: "When does roof repair make sense?",
                answer:
                    "Repair may fit localized leaks, missing shingles, flashing problems, storm damage, or smaller roof concerns."
            },
            {
                question: "What should I ask repair providers?",
                answer:
                    "Ask how the issue is diagnosed, what area is covered, whether the fix is temporary or long-term, and what future risks may remain."
            },
            {
                question: "Does Roofix repair roofs directly?",
                answer:
                    "No. Roofix helps homeowners compare independent provider options."
            }
        ],

        inspection: [
            {
                question: "When does roof inspection make sense?",
                answer:
                    "Inspection may fit maintenance planning, storm assessment, pre-sale or pre-purchase review, or general roof condition questions."
            },
            {
                question: "What should I ask inspection providers?",
                answer:
                    "Ask what is included, whether photos or written notes are provided, and how repair or replacement recommendations are explained."
            },
            {
                question: "Does Roofix inspect roofs directly?",
                answer:
                    "No. Roofix is a provider-matching platform, not a roofing inspection company."
            }
        ],

        roofTypes: [
            {
                question: "Does Roofix recommend one roof type?",
                answer:
                    "No. Roofix helps homeowners compare provider options and questions by roof type. Suitability should be verified directly with qualified providers."
            },
            {
                question: "Can roof type affect estimate details?",
                answer:
                    "Yes. Materials, labor, underlayment, flashing, slope, drainage, maintenance, and warranty terms may vary by roof type."
            },
            {
                question: "Should I verify material warranties?",
                answer:
                    "Yes. Homeowners should verify manufacturer warranties, labor warranties, exclusions, and installation requirements directly."
            }
        ],

        legal: [
            {
                question: "Is Roofix a roofing contractor?",
                answer:
                    "No. Roofix is an independent provider-matching platform and does not perform roofing work directly."
            },
            {
                question: "Who handles roofing project details?",
                answer:
                    "Independent roofing providers handle estimates, pricing, timelines, permits, warranties, communication, and project work directly."
            }
        ]
    },

    blogPosts: [
        {
            title: "How to Compare Roofing Estimates",
            href: "blog.html#compare-roofing-estimates",
            image: "./assets/images/blog-compare-estimates.jpg",
            category: "Estimate clarity",
            excerpt:
                "Learn which roofing estimate details homeowners should review before choosing an independent provider."
        },
        {
            title: "Roof Replacement vs Roof Repair",
            href: "blog.html#replacement-vs-repair",
            image: "./assets/images/blog-replacement-vs-repair.jpg",
            category: "Decision guide",
            excerpt:
                "Understand how provider conversations may differ when comparing repair and replacement paths."
        },
        {
            title: "Questions to Ask Before Hiring a Roofing Provider",
            href: "blog.html#questions-to-ask",
            image: "./assets/images/blog-questions.jpg",
            category: "Homeowner checklist",
            excerpt:
                "A clear list of questions about licensing, insurance, materials, permits, timelines, and warranties."
        },
        {
            title: "Understanding Roofing Warranties",
            href: "blog.html#roofing-warranties",
            image: "./assets/images/blog-warranties.jpg",
            category: "Warranty review",
            excerpt:
                "Review the difference between manufacturer warranties, labor warranties, exclusions, and provider terms."
        },
        {
            title: "Roof Inspection Checklist",
            href: "blog.html#inspection-checklist",
            image: "./assets/images/blog-inspection-checklist.jpg",
            category: "Inspection",
            excerpt:
                "Helpful items to discuss when comparing roof inspection and consultation providers."
        },
        {
            title: "Choosing Between Asphalt and Metal Roofing",
            href: "blog.html#asphalt-vs-metal",
            image: "./assets/images/blog-asphalt-metal.jpg",
            category: "Roof types",
            excerpt:
                "Compare basic homeowner questions for asphalt shingle and metal roofing provider conversations."
        }
    ],

    pageMeta: {
        "index.html": {
            title: "Roofix | Compare Roofing Providers With Better Clarity",
            description:
                "Roofix helps homeowners compare independent roofing provider options for installation, replacement, repair, and inspection."
        },

        "services.html": {
            title: "Roofing Services | Roofix Provider Matching",
            description:
                "Compare roofing provider options for installation, replacement, repair, and inspection through Roofix."
        },

        "about.html": {
            title: "About Roofix | Independent Roofing Provider Matching",
            description:
                "Learn how Roofix helps homeowners compare independent roofing provider options without performing roofing work directly."
        },

        "contact.html": {
            title: "Contact Roofix | Request Roofing Provider Matches",
            description:
                "Contact Roofix to request roofing provider comparison options for installation, replacement, repair, or inspection."
        },

        "roof-installation.html": {
            title: "Roof Installation | Roofix Provider Matching",
            description:
                "Compare independent roofing provider options for roof installation projects through Roofix."
        },

        "roof-replacement.html": {
            title: "Roof Replacement | Roofix Provider Matching",
            description:
                "Compare independent roofing provider options for roof replacement projects through Roofix."
        },

        "roof-repair.html": {
            title: "Roof Repair | Roofix Provider Matching",
            description:
                "Compare independent roofing provider options for roof repair, leak concerns, storm damage, and localized fixes."
        },

        "roof-inspection.html": {
            title: "Roof Inspection | Roofix Provider Matching",
            description:
                "Compare independent roofing provider options for roof inspection, consultation, and maintenance planning."
        },

        "asphalt-shingle-roofing.html": {
            title: "Asphalt Shingle Roofing | Roofix",
            description:
                "Compare providers familiar with asphalt shingle roofing and verify estimates, materials, and warranties directly."
        },

        "metal-roofing.html": {
            title: "Metal Roofing | Roofix",
            description:
                "Compare providers familiar with metal roofing and review material, finish, installation, and warranty questions."
        },

        "flat-roof-systems.html": {
            title: "Flat Roof Systems | Roofix",
            description:
                "Compare providers familiar with flat roof systems and review drainage, membrane, flashing, and maintenance questions."
        },

        "tile-roofing.html": {
            title: "Tile Roofing | Roofix",
            description:
                "Compare providers familiar with tile roofing and review material suitability, structure, underlayment, and warranties."
        },

        "blog.html": {
            title: "Roofix Blog | Roofing Comparison Guides",
            description:
                "Read roofing comparison guides about estimates, warranties, roof repair, roof replacement, inspections, and roof types."
        },

        "privacy-policy.html": {
            title: "Privacy Policy | Roofix",
            description:
                "Read the Roofix Privacy Policy and learn how information may be used for roofing provider comparison requests."
        },

        "cookie-policy.html": {
            title: "Cookie Policy | Roofix",
            description:
                "Read the Roofix Cookie Policy and learn how cookies and local storage may be used on this website."
        },

        "terms-of-service.html": {
            title: "Terms of Service | Roofix",
            description:
                "Read the Roofix Terms of Service, including platform role, independent providers, homeowner verification, and limitations."
        }
    }
};