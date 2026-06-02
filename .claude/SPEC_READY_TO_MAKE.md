# Spec: Ready To Make Your Home Section (CTA Banner)

Screenshot: `Design Images/High Resolution Sections/Ready To Make Your Home.jpg`

---

## Layout

- Full-width banner section
- Background: `#1A56DB` (solid primary blue)
- Vertical padding: ~28–36px top/bottom
- Inner container: max-width 1140px, centered
- Three-part flex row, align-items: center:
  1. **Left** — pressure washer illustration (~20% width)
  2. **Middle** — headline + sub-text (~55% width)
  3. **Right** — CTA button (~25% width)
- justify-content: space-between

## Left — Pressure Washer Illustration

- Graphic: pressure washer gun pointed right with spray lines/jets
- Style: flat vector illustration, white/light blue tones on blue background
- Asset: `Design Images/Vector Icons/` pressure washer illustration
- Width: ~140–160px
- Bottom-aligned or center-aligned vertically

## Middle — Text Block

- Heading line 1: "READY TO MAKE YOUR HOME"
  - Font: Barlow Condensed, ~22–24px, weight 700, `#FFFFFF`, uppercase
  - Normal weight appearance
- Heading line 2: "LOOK BETTER THIS WEEK?"
  - Font: Barlow Condensed, ~28–30px, weight 800, `#FFFFFF`, uppercase
  - Larger/bolder than line 1
- Sub-text: "Send us a quick message and we'll get you a fast quote."
  - Font: Barlow, 14px, weight 400, `rgba(255,255,255,0.85)`
  - Margin-top: 8px

## Right — CTA Button

- Text: "GET MY FREE QUOTE"
- Style: **outlined white** (rectangular rounded, not pill)
- Background: `rgba(255,255,255,0.08)` or transparent
- Border: 2px solid `#FFFFFF`
- Text: Barlow Condensed, 14–15px, weight 700, `#FFFFFF`, uppercase
- Padding: 14px 28px
- Border-radius: 10px
- Hover: background `rgba(255,255,255,0.18)`, no border change
- Flex-shrink: 0

## Decorative

- Small diamond/sparkle ✦ bottom-right corner
- Color: `rgba(255,255,255,0.3)`, ~14px

## Responsive

- Tablet: illustration hidden; text and button remain two-column
- Mobile: all stacked vertically — illustration (if shown) top, text middle, button bottom full-width

## Assets Referenced

- Pressure washer gun illustration (from `Design Images/Vector Icons/`)
