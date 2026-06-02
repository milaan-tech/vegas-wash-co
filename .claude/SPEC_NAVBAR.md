# Spec: Navbar

Screenshot: `Design Images/High Resolution Sections/Navbar.jpg`

---

## Layout

- Position: sticky top, full viewport width
- Background: `#FFFFFF`
- Border-bottom: 1px solid `#E5E7EB`
- Height: ~72px desktop
- Inner container: max-width 1140px, centered, horizontal padding 24px
- Layout: flex row, `space-between`, vertically centered

## Logo (left)

- Asset: `Design Images/Vector Icons/logo_vector.png`
- Two-line stacked text logo with pressure washer spray graphic
- "VEGAS" — Barlow Condensed, ~28px, weight 800, `#111827` (black), uppercase
- "WASH CO." — Barlow Condensed, ~22px, weight 700, `#111827`, uppercase
- Spray icon: blue (`#1A56DB`), positioned right of "VEGAS" text
- Logo block width: ~160px

## Navigation Links (center)

- Items: SERVICES | ABOUT US | HOW IT WORKS | REVIEWS | CONTACT
- Font: Barlow Condensed, 13–14px, weight 600, `#1F2937`, uppercase
- Letter-spacing: 0.06em
- Gap between links: ~32–36px
- Hover state: color `#1A56DB`, no underline
- Active/current: color `#1A56DB`

## CTA Button (right)

- Text: "GET MY FREE QUOTE"
- Style: pill button, background `#1A56DB`, text `#FFFFFF`
- Font: Barlow Condensed, 13–14px, weight 700, uppercase
- Padding: 10px 20px
- Border-radius: 24px
- Hover: background `#1641B0`, box-shadow `0 4px 12px rgba(26,86,219,0.3)`
- Right arrow icon (►) inside button, right-aligned, ~10px, `rgba(255,255,255,0.7)`

## Mobile (< 640px)

- Nav links hidden, replaced by hamburger icon (3 horizontal lines, ~20px, `#111827`)
- CTA button hidden or reduced to icon only
- Logo remains visible
- Hamburger opens a full-width dropdown menu overlay

## Assets Referenced

- `Design Images/Vector Icons/logo_vector.png`
