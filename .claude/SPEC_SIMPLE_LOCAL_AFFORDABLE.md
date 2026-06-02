# Spec: Simple Local Affordable Section

Screenshot: `Design Images/High Resolution Sections/Simple Local Affordable.jpg`

---

## Layout

- Full-width section, background `#FFFFFF`
- Vertical padding: ~40–48px top/bottom
- Inner container: max-width 1140px, centered

## Section Heading

- Text: "SIMPLE. LOCAL. AFFORDABLE."
- Font: Barlow Condensed, ~32–36px, weight 800, `#111827`, uppercase
- Centered horizontally
- No underline accent (heading stands alone)
- Margin-bottom: ~32–36px

## Feature Cards Row

- 4 columns, single flex row, desktop
- justify-content: center
- Gap: ~32–48px between items
- No card borders — open/flat layout (no box backgrounds)

### Individual Feature Item

- Width: ~220–240px
- Display: flex row, align-items: flex-start
- Gap between icon and text: 16px

#### Icon

- Style: circular outline icon (stroke, not filled), ~48–52px diameter
- Color: `#1A56DB` (primary blue)
- Stroke-width: ~2px
- No background fill

#### Text Block

- **Title** — Barlow Condensed, ~15–16px, weight 700, `#111827`, uppercase
- **Body** — Barlow, 13–14px, weight 400, `#6B7280`, normal case
- Line-height: 1.5
- Margin-top: ~4px below title

### Four Features (left to right)

| # | Icon | Title | Body |
|---|---|---|---|
| 1 | Stopwatch / timer | FAST RESPONSE | We value your time and respond quickly. |
| 2 | Dollar sign circle | CLEAR PRICING | Upfront, honest pricing. No surprises. |
| 3 | Handshake | NO PUSHY SALES | We're here to help, not to sell you. |
| 4 | Map pin / location | LOCAL VEGAS SERVICE | Proudly serving Summerlin & Las Vegas. |

## Responsive

- Tablet: 2-column × 2-row grid, gap 24px
- Mobile: single column stack, each item is flex row (icon left, text right), gap 12px, full-width

## Assets Referenced

- Stopwatch icon (inline SVG or `Design Images/Vector Icons/`)
- Dollar sign circle icon
- Handshake icon
- Map pin icon
