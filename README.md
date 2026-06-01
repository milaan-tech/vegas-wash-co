# Vegas Wash Co.

A professional pressure washing service landing page for Summerlin & Las Vegas, Nevada.

## Overview

Vegas Wash Co. is a modern, fully responsive landing page website designed to showcase pressure washing services and convert visitors into customers. The site features an interactive before/after slider, service showcase, pricing, testimonials, and lead generation capabilities.

## Features

- **Interactive Before/After Slider** — Drag or click to compare pressure washing results in real-time
- **Mobile-First Design** — Fully responsive on all screen sizes with hamburger navigation
- **Modern Typography** — Custom Google Fonts (Barlow & Barlow Condensed) for clean, professional aesthetics
- **Service Showcase** — Highlights key offerings including driveways, patios, sidewalks, garage doors, and more
- **Curb Appeal Package** — Featured pricing section with clear service breakdown
- **Social Proof** — Customer testimonials and reviews section
- **Lead Capture** — Free quote request form for customer inquiries
- **Local Business Focus** — Emphasis on Summerlin & Las Vegas service area

## Project Structure
vegas-wash/
├── index.html           # Main landing page HTML
├── style.css            # Complete styling (responsive & interactive)
├── script.js            # JavaScript for interactivity (mobile nav, before/after slider)
├── README.md            # This file
├── CLAUDE.md            # AI project context & skills
├── Design Images/       # Asset library
│   ├── MAIN IMAGE.png
│   ├── Garage Before.png
│   ├── Garage After.png
│   ├── Clean Driveway Image.png
│   ├── Driveway Refresh.png
│   ├── Front Entry Boost.png
│   ├── Sidewalk Cleanup.png
│   ├── Trash Can in Water Image.png
│   ├── Trash Can Refresh.png
│   ├── Watergun.png
│   ├── Las Vegas - Summerlin Background Image.png
│   ├── Summerlin-Vegas Map.png
│   └── Vector Icons/    # Custom icons for services
│       ├── logo_vector.png
│       ├── driveways_vector.png
│       ├── patios_vector.png
│       ├── sidewalks_vector.png
│       ├── garage_doors_vector.png
│       ├── trash_cans_vector.png
│       ├── pool_decks_vector.png
│       ├── hoa_cleanup_vector.png
│       ├── fast_response_vector.png
│       ├── clear_pricing_vector.png
│       ├── local_service_vector.png
│       ├── no_pushy_sales_vector.png
│       ├── shield_vector.png
│       ├── location_pin_vector.png
│       ├── sun_icon_vector.png
│       ├── facebook_vector.png
│       └── instagram_vector.png
└── .claude/             # Claude development settings
├── settings.json
└── skills/
├── lead-generation/
│   └── SKILL.md
└── todo/
└── tasks.md

## Technical Details

### Technology Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Modern styling with flexbox/grid, responsive breakpoints, CSS variables
- **Vanilla JavaScript** — No dependencies; lightweight interactivity
- **Google Fonts API** — Barlow & Barlow Condensed typefaces

### Key Components

#### 1. Header & Navigation
- Fixed header with logo and navigation menu
- Responsive hamburger menu for mobile devices
- Call-to-action "Get My Free Quote" button

#### 2. Hero Section
- Full-width interactive before/after image slider
- Compelling headline with blue accent text
- Value proposition messaging
- Trust badges (Fast Quotes, Local Service, Area Coverage)

#### 3. Service Showcase
- Grid layout of service offerings with vector icons
- Each service has descriptive text and visual representation

#### 4. Curb Appeal Package
- Feature package section with large photo
- Pricing display with monthly breakdown
- Complete service checklist
- Call-to-action button

#### 5. How It Works
- 3-step process visualization
- Clear, action-oriented messaging

#### 6. Reviews Section
- Customer testimonials with ratings
- Trust-building social proof

#### 7. Contact Form
- Lead capture form
- Field validation
- Integration-ready for backend processing

### Interactive Features

**Before/After Slider:**
- Draggable handle with visual feedback
- Click anywhere to reposition
- Touch-friendly on mobile devices
- Smooth clip-path animation

**Mobile Navigation:**
- Hamburger menu toggle
- Auto-closes on link click
- Full mobile responsiveness

## Setup & Usage

### Prerequisites
- No build process or dependencies required
- Works with any web server or local file system

### Deployment

1. **Local Testing:**
```bash
   # Simply open in a browser
   open index.html
   
   # Or use a local server
   python -m http.server 8000
```

2. **Production Deployment:**
   - Upload all files to your web host maintaining directory structure
   - Ensure image paths are correct for your server environment
   - Update form action in contact section to your backend endpoint
   - Configure CDN for images if desired

### Configuration

**Update Business Information:**
- Edit company name, phone, and email in `index.html`
- Modify service descriptions and pricing as needed
- Replace images with your own pressure washing before/afters
- Update social media links in footer

**Customize Colors:**
- Primary blue: `#2563eb` (search style.css and replace)
- Dark slate: `#1e293b`
- Light backgrounds: `#f8fafc`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images (compress PNGs, consider WebP)
- Lazy load below-fold images for faster initial load
- Consider CDN for global delivery

## Future Enhancements

- Add backend form processing
- Implement real-time quote calculator
- Add service booking calendar
- Integrate Google Maps
- Implement live chat support
- Add customer photo gallery
- SEO optimization and blog section
- Payment processing for deposits

## SEO Considerations

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text on images
- Clear heading hierarchy
- Mobile-responsive design

Recommendations:
- Add schema markup for LocalBusiness
- Create XML sitemap
- Submit to Google Search Console
- Implement analytics tracking
- Add Google Business Profile

## Accessibility

- Semantic HTML elements
- ARIA labels on interactive controls
- High contrast text colors
- Touch-friendly button sizes (min 44px)
- Mobile navigation accessibility
- Form labels associated with inputs