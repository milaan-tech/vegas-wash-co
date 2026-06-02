# Spec: Vegas Dust, Dirt And Heat Section

Screenshot: `Design Images/High Resolution Sections/Vegas Dust, Dirt And Heat.jpg`

---

## Layout

- Full-width section, background `#FFFFFF`
- Vertical padding: ~20–28px top/bottom (compact banner-style section)
- Inner container: max-width 1140px, centered
- Two-column flex row, vertically centered:
  1. **Left** — icon + heading block (~48% width)
  2. **Right** — body paragraph (~52% width)
- Separated by vertical rule: 1px solid `#D1D5DB`, full section height, margin 0 ~32px

## Left Column — Icon + Heading

- Icon: sun/rays illustration (~64–72px), two-tone blue (`#1A56DB` and lighter blue dashes)
  - Style: abstract sun with radiating dashes, outline/line art, not filled
  - Asset: `Design Images/Vector Icons/` sun icon
  - Margin-right: ~20px from heading text

- Heading block (right of icon):
  - Line 1: "VEGAS DUST, DIRT & HEAT" — Barlow Condensed, ~22–24px, weight 800, `#1A56DB`, uppercase
  - Line 2: "MAKE EVERYTHING LOOK OLDER" — Barlow Condensed, ~22–24px, weight 800, `#111827`, uppercase
  - Line-height: 1.2
  - Both lines left-aligned

- Left column: flex row, align-items center, no background

## Divider

- 1px solid `#D1D5DB`
- Full section height (~60–70px)
- Margin: 0 32px

## Right Column — Body Text

- Paragraph: "Your driveway, walkway, patio, and entryway are the first things people see. Over time, they collect dirt, stains, grime, and that dry Vegas buildup that makes your look neglected — even when it isn't."
- Font: Barlow, 15–16px, weight 400, `#374151`
- Line-height: 1.6
- Max-width: ~520px
- Vertically centered within right column

## Responsive

- Mobile: vertical stack — icon+heading row on top, full-width; body paragraph below; divider becomes horizontal rule `<hr>` ~1px `#D1D5DB`, margin 16px 0

## Assets Referenced

- Sun rays icon (from `Design Images/Vector Icons/`)
