# Spec: What We Clean Section

Screenshot: `Design Images/High Resolution Sections/What We Clean.jpg`

---

## Layout

- Full-width section, background `#FFFFFF` (or very light `#F9FAFB`)
- Vertical padding: ~48–56px top/bottom
- Inner container: max-width 1140px, centered

## Section Heading

- Text: "WHAT WE CLEAN"
- Font: Barlow Condensed, ~34–36px, weight 800, `#111827`, uppercase
- Centered horizontally
- Underline accent: ~44px wide, 3px tall, `#1A56DB`, centered below text, margin-top ~8px
- Margin-bottom: ~32px before icon grid

## Icon Card Grid

- 8 cards in a single row (desktop)
- Grid: `display: flex`, `justify-content: center`, gap ~12–16px
- Each card: equal width (~120px desktop)

### Individual Icon Card

- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Border-radius: 12px
- Padding: 16px 12px
- Width: ~120px, height: ~130–140px
- Display: flex column, align-items center, justify-content center
- Box-shadow: `0 1px 4px rgba(0,0,0,0.06)`

#### Icon

- Size: ~60–68px width, ~60px height
- Color: navy blue `#1A3A6B` / `#1A56DB` (single-color line art / flat vector)
- Centered in card

#### Label

- Font: Barlow Condensed, ~11–12px, weight 700, `#1F2937`, uppercase
- Letter-spacing: ~0.06em
- Text-align: center
- Margin-top: 10px
- Multi-word labels wrap (e.g., "FRONT\nENTRYWAYS")

### Card Items (8 total, left to right)

| # | Label | Icon Description |
|---|---|---|
| 1 | DRIVEWAYS | House with garage, car, driveway |
| 2 | SIDEWALKS | Person with pressure washer on path |
| 3 | PATIOS | Patio umbrella with table/chairs |
| 4 | FRONT ENTRYWAYS | Double front door with columns |
| 5 | GARAGE DOORS | Garage door with bushes |
| 6 | TRASH CANS | Wheeled trash bin |
| 7 | POOL DECKS | Pool ladder with water waves |
| 8 | HOA CLEANUP | House with windows |

- Assets: `Design Images/Vector Icons/` (individual icon PNGs or SVGs per service)

## Responsive

- Tablet (640–1023px): 4-column × 2-row grid, gap 12px
- Mobile (< 640px): 4-column × 2-row grid, cards ~80px wide, icon ~44px, label ~10px

## Assets Referenced

- `Design Images/Vector Icons/` — 8 service icons (driveways, sidewalks, patios, front-entry, garage, trash-can, pool-deck, hoa)
