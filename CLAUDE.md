# Vegas Wash Co. — Claude Project Context

This document provides context, development guidelines, and skill references for working on the Vegas Wash Co. landing page project.

## Project Overview

**Project Name:** Vegas Wash Co. Landing Page  
**Type:** Marketing/Lead Generation Website  
**Business:** Pressure Washing Service (Summerlin & Las Vegas)  
**Status:** Active Development  
**Last Updated:** June 2024

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
├── index.html              # Main page markup
├── style.css               # All styling & responsive design
├── script.js               # Client-side interactivity
├── README.md               # User documentation
├── CLAUDE.md               # This file (developer context)
├── Design Images/          # Assets and visual resources
│   ├── Before/after photos
│   ├── Service showcase images
│   ├── Background & hero images
│   └── Vector Icons/       # Custom icon assets
└── .claude/                # Claude development tools
├── settings.json       # Project configuration
└── skills/             # Custom AI skills
├── lead-generation/
│   └── SKILL.md    # Lead capture & conversion
└── todo/
└── tasks.md    # Development tasks & checklist
```


## Technology Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Markup** | HTML5 | Semantic, accessible |
| **Styling** | CSS3 | Flexbox/Grid, responsive, variables |
| **Interactivity** | Vanilla JavaScript | No frameworks or dependencies |
| **Fonts** | Google Fonts API | Barlow, Barlow Condensed |
| **Images** | PNG | Optimized for web where possible |

## Key Sections & Functionality

### 1. Header (`<header class="header">`)
- Fixed navigation bar
- Logo and main menu
- CTA button (Get My Free Quote)
- Responsive hamburger menu (mobile)
- **Skills Used:** Mobile nav, responsive design

### 2. Hero Section (`<section class="hero">`)
- Full-width before/after slider (garage photos)
- Headline with blue accent
- Subheading emphasizing affordability
- Trust badges (Fast Quotes, Local Service, Coverage Area)
- **Skills Used:** Interactive slider, copywriting

### 3. Services Grid
- 8 service offerings with vector icons
- Driveways, Patios, Sidewalks, Garage Doors, Pool Decks, HOA Cleanup, Trash Cans, Front Entryways
- Icon + description layout
- **Skills Used:** UI design, service messaging

### 4. Curb Appeal Package (`<section class="package">`)
- Feature image with service breakdown
- Pricing: $149 one-time / $99/month
- Checklist of included services
- Large CTA button
- **Skills Used:** Sales copywriting, pricing psychology

### 5. How It Works (3-step process)
- Icon-based step visualization
- Emphasizes quick & easy process
- Builds customer confidence
- **Skills Used:** Process design, UX clarity

### 6. Reviews Section
- Customer testimonials with 5-star ratings
- Real-looking review content
- Trust signals and social proof
- **Skills Used:** Social proof copywriting

### 7. Contact/Lead Capture Form
- Email input
- Phone number input
- Service selection
- Message textarea
- Form submission handler
- **Skills Used:** Lead generation, form optimization

## Development Guidelines

### Code Style
- Clean, readable HTML with semantic tags
- CSS organized by component (BEM methodology)
- JavaScript using vanilla ES6+
- Comments for complex sections
- No trailing semicolons in CSS (modern style)

### Responsive Design Breakpoints
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+
- Uses `max-width` containers for readability

### Color Palette
```css
Primary Blue:      #2563eb
Dark Text:         #1e293b
Light Background:  #f8fafc
White:             #ffffff
Success/Green:     #16a34a (for trust elements)
Accent Gold:       #dc9b2c (optional highlights)
```

### Typography
- **Headings:** Barlow Condensed (900, 800, 700 weight)
- **Body:** Barlow (400, 500, 600 weight)
- **Sizes:** 14px base, scale up to 48px+ for hero

### Common Patterns

**Container/Layout:**
```html
<section class="section-name">
  <div class="container">
    <div class="section__inner">
      <!-- Content -->
    </div>
  </div>
</section>
```

**Buttons:**
```html
<a href="#contact" class="btn btn--blue">Get My Free Quote</a>
<button class="btn btn--outline">Secondary Action</button>
```

**Icon Usage:**
```html
<img src="Design Images/Vector Icons/service_vector.png" 
     alt="Service name" 
     class="icon">
```