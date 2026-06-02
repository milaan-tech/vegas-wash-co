# Spec: Hero Section

Screenshot: `Design Images/High Resolution Sections/Hero Section.jpg`

---

## Layout

- Full-width section, no top padding (sits below sticky nav)
- Content split: left ~45% (text overlay on white/light bg), right ~55% (before/after image slider)
- Min-height: ~420–460px desktop
- Left side background: `#FFFFFF` (white), content padded ~48–64px left, ~40px top/bottom
- Right side: image fills full height, no padding

## Left Panel — Headline

- Line 1: "MAKE YOUR HOME LOOK FRESH AGAIN —"
  - Font: Barlow Condensed, ~48–52px, weight 800, `#111827`, uppercase
  - Line-height: ~1.05
- Line 2: "WITHOUT SPENDING THOUSANDS"
  - Font: Barlow Condensed, ~48–52px, weight 800, `#1A56DB`, uppercase
  - Same line-height
- Total headline block: ~2–3 lines stacked

## Left Panel — Sub-headline

- Text: "Affordable pressure washing for driveways, sidewalks, patios, trash cans, and curb appeal in Summerlin & Las Vegas."
- Font: Barlow, 15–16px, weight 400, `#374151`
- Margin-top: ~16px from headline
- Max-width: ~380px

## Left Panel — CTA Button

- Text: "GET MY FREE QUOTE"
- Style: pill, background `#1A56DB`, text `#FFFFFF`
- Font: Barlow Condensed, 14px, weight 700, uppercase
- Padding: 14px 28px
- Border-radius: 24px
- Margin-top: ~24px
- Hover: `#1641B0`, shadow `0 4px 14px rgba(26,86,219,0.35)`

## Left Panel — Trust Bar (bottom of left panel)

Three items separated by `|` vertical dividers (1px `#D1D5DB`):
1. ⚡ **FAST QUOTES** — lightning bolt icon (blue), text Barlow Condensed 12px 700 uppercase `#111827`
2. 📍 **LOCAL SERVICE** — pin icon (blue), same style
3. 🛡 **SUMMERLIN / LAS VEGAS AREA** — shield icon (blue), same style

- Icon size: ~16px, `#1A56DB`
- Gap between icon and text: 6px
- Divider: 1px solid `#D1D5DB`, height ~20px, margin 0 16px
- Full trust bar margin-top: ~24px from CTA button

## Right Panel — Before/After Slider

- Background images: `Design Images/Garage Before.png` (left half) and `Design Images/Garage After.png` (right half)
- Images cover full right panel height and width (object-fit: cover)
- Vertical split slider handle:
  - Circle button: ~40px diameter, background `#FFFFFF`, border 2px `#D1D5DB`
  - Contains `< >` arrows (chevrons), color `#374151`, ~14px
  - Box-shadow: `0 2px 8px rgba(0,0,0,0.2)`
  - Draggable/interactive horizontal handle
- "BEFORE" label: pill bottom-left corner of left image, background `#1F2937`, text `#FFFFFF`, 12px 700 Barlow Condensed uppercase, padding 4px 14px, border-radius 6px
- "AFTER" label: pill bottom-right corner of right image, background `#1A56DB`, text `#FFFFFF`, same sizing
- Label bottom offset: ~16px from image bottom
- Label left/right offset: ~12px from image edges

## Responsive

- Tablet (640–1023px): stack vertically — image panel above, text panel below; both full-width
- Mobile (< 640px): same stacking; headline reduces to ~34–36px; trust bar wraps to 2 rows or single column

## Assets Referenced

- `Design Images/Garage Before.png`
- `Design Images/Garage After.png`
- Vector icons: lightning bolt, map pin, shield (inline SVG or `Design Images/Vector Icons/`)
