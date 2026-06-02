# Spec: Proudly Serving Section

Screenshot: `Design Images/High Resolution Sections/Proudly Serving.jpg`

---

## Layout

- Full-width section
- Background: Las Vegas skyline/cityscape photo (aerial/wide, muted/slightly dark overlay)
- Background-size: cover, background-position: center
- Overlay: `rgba(0,0,0,0.35)` dark overlay on top of background photo
- Vertical padding: ~28–40px top/bottom
- Inner container: max-width 1140px, centered
- Two-column flex row, align-items: center:
  1. **Left** — white info card (~42% width)
  2. **Right** — map image (~58% width)
- Gap: ~24px

## Left — White Info Card

- Background: `#FFFFFF`
- Border-radius: 16px
- Padding: 28–32px
- Box-shadow: `0 4px 24px rgba(0,0,0,0.15)`

### Icon + Heading Row

- Pin icon: `#1A56DB`, ~32px, positioned left of heading block
- Line 1: "PROUDLY SERVING" — Barlow Condensed, ~16px, weight 700, `#1A56DB`, uppercase
- Line 2: "SUMMERLIN & LAS VEGAS" — Barlow Condensed, ~26–28px, weight 800, `#111827`, uppercase
- Icon and text: flex row, align-items center, gap 12px

### Body Text

- "We help homeowners in Summerlin, West Las Vegas, and surrounding neighborhoods keep their homes looking clean, fresh, and HOA-ready."
- Font: Barlow, 14–15px, weight 400, `#374151`
- Line-height: 1.6
- Margin-top: 14px

## Right — Map

- Google Maps static-style map showing Summerlin/Las Vegas area
- Map style: light/default road map
- Width: ~100% of right column, height: ~220–240px
- Border-radius: 12px
- Overlay circle: semi-transparent blue circle centered on Summerlin
  - Color: `rgba(26,86,219,0.25)` fill, `#1A56DB` border ~2px
  - Diameter: ~160–180px on map
- Map labels visible: "SUMMERLIN", "LAS VEGAS", "SUN CITY SUMMERLIN", "SPRING VALLEY", "SUMMERLIN SOUTH", "PECCOLE RANCH", "THE VISTAS"

## Decorative

- Small diamond/sparkle ✦ bottom-right of section background
- Color: `rgba(255,255,255,0.3)`, ~14px

## Responsive

- Tablet: map moves below info card; both full-width
- Mobile: same stacking; map height ~180px; card padding 20px

## Assets Referenced

- Las Vegas skyline background photo (from `Design Images/`)
- Map image (static map or embedded Google Maps iframe)
- Map pin icon (SVG or `Design Images/Vector Icons/`)
