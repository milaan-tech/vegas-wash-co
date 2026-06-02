# Spec: Real Results You Can See Section

Screenshot: `Design Images/High Resolution Sections/Real Results You Can See.jpg`

---

## Layout

- Full-width section, background `#FFFFFF`
- Vertical padding: ~48–56px top/bottom
- Inner container: max-width 1140px, centered

## Section Heading

- Text: "REAL RESULTS YOU CAN SEE"
- Font: Barlow Condensed, ~34–36px, weight 800, `#1A56DB`, uppercase
- Centered horizontally
- Underline accent: ~48px wide, 3px tall, `#1A56DB`, centered below text, margin-top 8px
- Margin-bottom: ~32px

## Photo Grid

- 4 columns, single row (desktop)
- Gap: ~16px
- Each card: equal width (~255–270px desktop), height ~190–200px

### Individual Result Card

- Border-radius: 12px
- Overflow: hidden
- Position: relative (for label overlays)
- No border
- Box-shadow: `0 2px 8px rgba(0,0,0,0.1)`

#### Photo

- Object-fit: cover, full card width & height
- Split-view appearance: left half "before" (dirty/stained), right half "after" (clean)
- No interactive slider — static split image

#### Before/After Labels (bottom corners)

- "BEFORE" — bottom-left
  - Background: `#1F2937` (dark charcoal)
  - Text: `#FFFFFF`, Barlow Condensed 11–12px, weight 700, uppercase
  - Padding: 4px 12px
  - Border-radius: 5px
  - Bottom offset: 10px, left offset: 10px

- "AFTER" — bottom-right
  - Background: `#1A56DB` (blue)
  - Text: `#FFFFFF`, same sizing
  - Bottom offset: 10px, right offset: 10px

### Card Labels (below each photo)

- Font: Barlow Condensed, ~13–14px, weight 700, `#374151`, uppercase
- Text-align: center
- Margin-top: 10px

### Four Cards (left to right)

| # | Label | Before Content | After Content |
|---|---|---|---|
| 1 | DRIVEWAY REFRESH | Stained gray concrete driveway | Clean bright concrete |
| 2 | SIDEWALK CLEANUP | Dirty/shadowed sidewalk with trees | Clean bright path |
| 3 | TRASH CAN REFRESH | Grimy dark green trash can | Clean bright green can |
| 4 | FRONT ENTRY BOOST | Weathered front entry pavers | Clean sealed pavers |

- Assets: split before/after images from `Design Images/` folder

## Responsive

- Tablet: 2-column × 2-row grid, gap 16px
- Mobile: 2-column × 2-row grid, cards reduced to ~160px height, labels ~11px

## Assets Referenced

- Driveway before/after split image (from `Design Images/`)
- Sidewalk before/after split image
- Trash can before/after split image
- Front entry before/after split image
