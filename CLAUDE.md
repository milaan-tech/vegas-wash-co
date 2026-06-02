# Vegas Wash Co. — Claude Project Context

This document provides context, development guidelines, and skill references for working on the Vegas Wash Co. landing page project.

## Project Overview

**Project Name:** Vegas Wash Co. Landing Page  
**Type:** Marketing/Lead Generation Website  
**Business:** Pressure Washing Service (Summerlin & Las Vegas)  
**Status:** Active Development  
**Last Updated:** June 2026

### Core Objective

Build a high-converting landing page that:
1. Showcases pressure washing services with visual before/afters
2. Builds trust through testimonials and service highlights
3. Captures leads through free quote requests
4. Optimizes for mobile and desktop users
5. Emphasizes local service area (Summerlin, Las Vegas)

## Project Structure
```
vegas-wash/
├── index.html                           # Entry point — served by Vercel from root
├── CLAUDE.md                            # This file (developer context)
├── README.md                            # User documentation
├── Design Images/                       # All visual assets
│   ├── Garage Before.png                # Hero before/after slider
│   ├── Garage After.png                 # Hero before/after slider
│   ├── Clean Driveway Image.png         # Package section background photo
│   ├── Driveway Refresh.png             # Real Results card
│   ├── Sidewalk Cleanup.png             # Real Results card
│   ├── Trash Can Refresh.png            # Real Results card
│   ├── Front Entry Boost.png            # Real Results card
│   ├── Trash Can in Water Image.png     # Garbage Can section photo
│   ├── Watergun.png                     # Ready To Make illustration
│   ├── Summerlin-Vegas Map.png          # Proudly Serving map
│   ├── Las Vegas - Summerlin Background Image.png  # Proudly Serving background
│   ├── High Resolution Sections/        # Design reference screenshots (11 sections)
│   │   ├── Navbar.jpg
│   │   ├── Hero Section.jpg
│   │   ├── Package.jpg
│   │   ├── Vegas Dust, Dirt And Heat.jpg
│   │   ├── What We Clean.jpg
│   │   ├── Garbage Can Refresh.jpg
│   │   ├── Real Results You Can See.jpg
│   │   ├── Simple Local Affordable.jpg
│   │   ├── Proudly Serving.jpg
│   │   ├── Ready To Make Your Home.jpg
│   │   └── Contact Us.jpg
│   └── Vector Icons/                    # Custom PNG icon assets
│       ├── logo_vector.png              # Navbar logo
│       ├── logo_vector_white.png        # Footer logo (white version)
│       ├── driveways_vector.png
│       ├── sidewalks_vector.png
│       ├── patios_vector.png
│       ├── front_entryways_vector.png
│       ├── garage_doors_vector.png
│       ├── trash_cans_vector.png
│       ├── pool_decks_vector.png
│       ├── hoa_cleanup_vector.png
│       ├── fast_response_vector.png
│       ├── clear_pricing_vector.png
│       ├── no_pushy_sales_vector.png
│       ├── local_service_vector.png
│       ├── sun_icon_vector.png
│       ├── location_pin_vector.png      # Proudly Serving floating pin
│       ├── shield_vector.png            # Licensed & Insured badge
│       ├── facebook_vector.png
│       └── instagram_vector.png
├── src/
│   ├── index.html                       # src copy (kept in sync with root index.html)
│   ├── components/                      # Individual section HTML files
│   │   ├── Navbar.html                  # Section 1 — sticky nav + mobile hamburger
│   │   ├── Hero.html                    # Section 2 — before/after drag slider
│   │   ├── Package.html                 # Section 3 — Curb Appeal Package $99
│   │   ├── VegasDust.html               # Section 4 — Vegas Dust, Dirt & Heat
│   │   ├── WhatWeClean.html             # Section 5 — service icon grid
│   │   ├── GarbageCan.html              # Section 6 — $9 Garbage Can Refresh
│   │   ├── RealResults.html             # Section 7 — before/after photo cards
│   │   ├── SimpleLocal.html             # Section 8 — Simple. Local. Affordable.
│   │   ├── ProudlyServing.html          # Section 9 — map + service area card
│   │   ├── ReadyToMake.html             # Section 10 — CTA banner
│   │   └── ContactFooter.html           # Section 11 — footer
│   ├── styles/
│   │   ├── global.css                   # CSS variables, reset, Google Fonts import
│   │   ├── navbar.css                   # Section 1
│   │   ├── hero.css                     # Section 2
│   │   ├── package.css                  # Section 3
│   │   ├── vegas-dust.css               # Section 4
│   │   ├── what-we-clean.css            # Section 5
│   │   ├── garbage-can.css              # Section 6
│   │   ├── real-results.css             # Section 7
│   │   ├── simple-local.css             # Section 8
│   │   ├── proudly-serving.css          # Section 9
│   │   ├── ready-to-make.css            # Section 10
│   │   └── contact-footer.css           # Section 11
│   └── js/
│       ├── main.js                      # Bundled — inits all sections on DOMContentLoaded
│       ├── navbar.js                    # Sticky scroll + hamburger toggle
│       ├── hero.js                      # Before/after slider drag logic
│       ├── package.js                   # CTA smooth scroll
│       ├── vegas-dust.js
│       ├── what-we-clean.js
│       ├── garbage-can.js
│       ├── real-results.js
│       ├── simple-local.js
│       ├── proudly-serving.js
│       ├── ready-to-make.js
│       └── contact-footer.js
└── .claude/                             # Claude development tools
    ├── settings.json                    # Project configuration
    ├── DESIGN_SYSTEM.md                 # Master design tokens (colors, fonts, spacing)
    ├── SPEC_NAVBAR.md                   # Section 1 spec
    ├── SPEC_HERO.md                     # Section 2 spec
    ├── SPEC_PACKAGE.md                  # Section 3 spec
    ├── SPEC_VEGAS_DUST.md               # Section 4 spec
    ├── SPEC_WHAT_WE_CLEAN.md            # Section 5 spec
    ├── SPEC_GARBAGE_CAN.md              # Section 6 spec
    ├── SPEC_REAL_RESULTS.md             # Section 7 spec
    ├── SPEC_SIMPLE_LOCAL_AFFORDABLE.md  # Section 8 spec
    ├── SPEC_PROUDLY_SERVING.md          # Section 9 spec
    ├── SPEC_READY_TO_MAKE.md            # Section 10 spec
    ├── SPEC_CONTACT_FOOTER.md           # Section 11 spec
    └── skills/
        └── todo/
            └── tasks.md                 # Development tasks & checklist
```


## Technology Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Markup** | HTML5 | Semantic, accessible |
| **Styling** | CSS3 | Flexbox/Grid, responsive, variables |
| **Interactivity** | Vanilla JavaScript | No frameworks or dependencies |
| **Fonts** | Google Fonts API | Barlow, Barlow Condensed |
| **Images** | PNG | Optimized for web where possible |


### The Goal / Expected Site

#### Here are the sections in order:
1. Navbar
2. Hero Section
3. Package
4. Vegas Dust, Dirt And Heat
5. What We Clean
6. Garbage Can Refresh
7. Real Results You Can See
8. Simple Local Affordable
9. Proudly Serving
10. Ready To Make Your Home
11. Contact Us