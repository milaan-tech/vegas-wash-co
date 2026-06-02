# Spec: Package Section ("The Instant Curb Appeal Package")

Screenshot: `Design Images/High Resolution Sections/Package.jpg`

---

## Layout

- Full-width section, background `#FFFFFF`
- Vertical padding: ~40–48px top/bottom
- Inner container: max-width 1140px, centered
- Three-column flex row:
  1. **Left** — house photo (~28% width)
  2. **Middle** — package details (~44% width)
  3. **Right** — "Perfect For" panel (~28% width)
- Gap between columns: ~24–32px
- Outer card border: 1px solid `#E5E7EB`, border-radius 16px, overflow hidden (wraps all three columns)

## Left Column — House Photo

- Image: luxury Las Vegas home with green lawn
- Asset: `Design Images/` (house exterior photo)
- Object-fit: cover, full column height
- Border-radius: 12px 0 0 12px (rounded left corners only, as left edge of card)

## Middle Column — Package Details

- Padding: ~28–32px

### Heading
- Line 1: "THE INSTANT" — Barlow Condensed, ~28px, weight 700, `#111827`, uppercase
- Line 2: "CURB APPEAL PACKAGE" — Barlow Condensed, ~34px, weight 800, `#1A56DB`, uppercase
- Line-height: 1.1, no gap between lines

### Price Block
- Label: "STARTING AT" — Barlow Condensed, ~14px, weight 700, `#374151`, uppercase
- Price: "$99" — Barlow Condensed, ~64–72px, weight 900, `#111827`
- Label stacked directly above price number, left-aligned

### Divider
- Vertical rule between price block and checklist: 1px solid `#E5E7EB`, full column height, margin ~16–24px horizontal

### Checklist (right of price)
- Items (4):
  1. Driveway Cleaning
  2. Sidewalk Cleaning
  3. Front Entry Cleaning
  4. Garage Door Rinse
- Each row: blue checkmark circle icon (~18px) + text 15px Barlow weight 400 `#111827`
- Checkmark icon fill: `#1A56DB`
- Row gap: ~12px

## Right Column — "Perfect For" Panel

- Background: `#EBF2FF` (light blue)
- Border-radius: 0 12px 12px 0 (right corners)
- Padding: ~24–28px

### Header
- "PERFECT FOR:" — Barlow Condensed, ~16px, weight 700, `#1A56DB`, uppercase

### List Items (4 rows)
1. 👤 REALTORS
2. 👤 HOMEOWNERS
3. 👥 HOMEOWNERS *(appears twice in screenshot — likely "Neighbors / HOAs" intended)*
4. 📅 PARTIES & EVENTS

- Icon: person/group/calendar silhouette, ~20px, `#1A56DB`
- Text: Barlow Condensed, 14px, weight 700, `#111827`, uppercase
- Row gap: ~14px

### CTA Button
- Text: "CLAIM THIS OFFER"
- Style: filled blue pill — same as primary CTA
- Background: `#1A56DB`, text `#FFFFFF`
- Barlow Condensed 14px 700 uppercase
- Padding: 12px 24px, border-radius 24px
- Full width of right panel
- Margin-top: ~24px (below list)
- Hover: `#1641B0`

## Responsive

- Tablet: middle column stacks below photo; right panel becomes full-width row
- Mobile: all columns stack vertically; photo full-width, rounded-rect top; price and checklist stack; right panel full-width bottom

## Assets Referenced

- House exterior photo (from `Design Images/`)
- Checkmark circle icon (SVG or `Design Images/Vector Icons/`)
- Person / group / calendar icons (inline SVG)
