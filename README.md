# Vegas Wash Co.

A professional pressure washing service landing page for Summerlin & Las Vegas, Nevada.

## Overview

Vegas Wash Co. is a modern, fully responsive landing page designed to showcase pressure washing services and convert visitors into customers. The site features an interactive before/after image slider, service packages, real results gallery, local service area map, and a lead generation CTA.

## Features

- **Interactive Before/After Slider** — Drag to compare pressure washing results in real-time (desktop fade effect, clean full-width on mobile)
- **Mobile-First Design** — Fully responsive on all screen sizes with hamburger navigation
- **Modern Typography** — Google Fonts (Barlow & Barlow Condensed) throughout
- **Curb Appeal Package** — Featured $99 package with checklist and "Perfect For" panel
- **$9 Garbage Can Refresh** — Intro offer section with large product photo
- **Real Results Gallery** — Before/after photo cards for Driveway, Sidewalk, Trash Can, Front Entry
- **Proudly Serving Section** — Aerial background with joined info + map card and floating pin
- **Contact Footer** — Logo, contact info, social links, Licensed & Insured badge

## Project Structure

```
vegas-wash/
├── index.html                           # Entry point — Vercel serves this from root
├── CLAUDE.md                            # Claude developer context & build playbook
├── README.md                            # This file
├── Design Images/                       # All visual assets
│   ├── Garage Before.png                # Hero before/after slider
│   ├── Garage After.png                 # Hero before/after slider
│   ├── Clean Driveway Image.png         # Package section photo
│   ├── Driveway Refresh.png             # Real Results card
│   ├── Sidewalk Cleanup.png             # Real Results card
│   ├── Trash Can Refresh.png            # Real Results card
│   ├── Front Entry Boost.png            # Real Results card
│   ├── Trash Can in Water Image.png     # Garbage Can section
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
│       ├── logo_vector.png
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
│       ├── location_pin_vector.png
│       ├── shield_vector.png
│       ├── facebook_vector.png
│       └── instagram_vector.png
├── src/
│   ├── index.html                       # src copy (kept in sync with root index.html)
│   ├── components/                      # Individual section HTML files
│   │   ├── Navbar.html                  # Section 1 — sticky nav + mobile menu
│   │   ├── Hero.html                    # Section 2 — before/after slider
│   │   ├── Package.html                 # Section 3 — Curb Appeal Package $99
│   │   ├── VegasDust.html               # Section 4 — Vegas Dust, Dirt & Heat
│   │   ├── WhatWeClean.html             # Section 5 — service icon grid
│   │   ├── GarbageCan.html              # Section 6 — $9 Garbage Can Refresh
│   │   ├── RealResults.html             # Section 7 — before/after photo cards
│   │   ├── SimpleLocal.html             # Section 8 — Simple. Local. Affordable.
│   │   ├── ProudlyServing.html          # Section 9 — map + service area
│   │   ├── ReadyToMake.html             # Section 10 — CTA banner
│   │   └── ContactFooter.html           # Section 11 — footer with contact info
│   ├── styles/
│   │   ├── global.css                   # CSS variables, reset, base styles, Google Fonts
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
│       ├── main.js                      # Bundled JS — inits all sections on DOMContentLoaded
│       ├── navbar.js                    # Sticky scroll + hamburger toggle
│       ├── hero.js                      # Before/after slider drag logic
│       ├── package.js                   # Package CTA smooth scroll
│       ├── vegas-dust.js
│       ├── what-we-clean.js
│       ├── garbage-can.js
│       ├── real-results.js
│       ├── simple-local.js
│       ├── proudly-serving.js
│       ├── ready-to-make.js
│       └── contact-footer.js
└── .claude/                             # Claude development tools
    ├── settings.json
    ├── DESIGN_SYSTEM.md                 # Colors, fonts, spacing, component tokens
    ├── SPEC_NAVBAR.md
    ├── SPEC_HERO.md
    ├── SPEC_PACKAGE.md
    ├── SPEC_VEGAS_DUST.md
    ├── SPEC_WHAT_WE_CLEAN.md
    ├── SPEC_GARBAGE_CAN.md
    ├── SPEC_REAL_RESULTS.md
    ├── SPEC_SIMPLE_LOCAL_AFFORDABLE.md
    ├── SPEC_PROUDLY_SERVING.md
    ├── SPEC_READY_TO_MAKE.md
    ├── SPEC_CONTACT_FOOTER.md
    └── skills/
        └── todo/
            └── tasks.md
```

## Technology Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Markup** | HTML5 | Semantic, accessible, no build step |
| **Styling** | CSS3 | Flexbox/Grid, CSS variables, responsive breakpoints |
| **Interactivity** | Vanilla JavaScript | No frameworks, plain `<script defer>` |
| **Fonts** | Google Fonts API | Barlow & Barlow Condensed (400–900) |
| **Images** | PNG | Section photos + vector icon set |

## Navbar Link Routing

| Link | Scrolls To |
|------|-----------|
| SERVICES | Curb Appeal Package (`#how-it-works`) |
| ABOUT US | Proudly Serving (`#proudly-serving`) |
| HOW IT WORKS | Real Results (`#reviews`) |
| REVIEWS | Proudly Serving (`#proudly-serving`) |
| CONTACT | Contact Footer (`#contact`) |

## Setup & Usage

### Open Locally
No build process required — open directly in a browser:
```
src/index.html
```

### Run on a Local Server (recommended for full JS support)
```bash
npx serve .
# then visit http://localhost:3000/src/
```

### Deployment
Upload the entire repo to any static web host (Netlify, Vercel, GitHub Pages, etc.). The entry point is `src/index.html`.

### Update Business Info
- Phone / email / website: edit `src/components/ContactFooter.html` and `src/index.html`
- Social links: update `href` on Facebook/Instagram anchors in the footer
- Service area copy: `src/components/ProudlyServing.html`
- Pricing: `src/components/Package.html`

### Customize Colors
All color tokens live in `src/styles/global.css` under `:root`:
- Primary blue: `--color-primary: #1A56DB`
- Dark navy: `--color-dark-navy: #0F1F3D`
- Light blue bg: `--color-primary-light: #EBF2FF`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari & Chrome Mobile
