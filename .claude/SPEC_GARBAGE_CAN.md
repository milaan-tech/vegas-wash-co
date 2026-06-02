# Spec: Garbage Can Refresh Section

Screenshot: `Design Images/High Resolution Sections/Garbage Can Refresh.jpg`

---

## Layout

- Full-width section
- Background: deep navy gradient — `#0F1F3D` to `#1A3A6B` (left to right or top to bottom)
- Vertical padding: ~32–40px top/bottom
- Inner container: max-width 1140px, centered
- Three-part flex row, align-items center:
  1. **Left** — product photo with price badge (~30% width)
  2. **Middle** — text content (~45% width)
  3. **Right** — CTA button (~25% width)

## Left — Product Photo + Price Badge

- Image: olive/green wheeled garbage can with water splash/splatter around it
- Asset: `Design Images/` (garbage can photo)
- Image dimensions: ~240–260px wide, ~180–200px tall (cropped/contained)
- Positioned slightly overlapping section edge (negative margin top) or bottom-aligned

### Price Badge
- Circle overlay on image (bottom-left area of photo)
- Diameter: ~72–80px
- Background: `#1A56DB` (solid blue)
- Text: "$9" — Barlow Condensed, ~32–36px, weight 900, `#FFFFFF`
- Circle has white border: 2–3px solid `#FFFFFF`
- Box-shadow: `0 4px 12px rgba(0,0,0,0.3)`

## Middle — Text Content

- Padding-left: ~32px

### Top Label
- Text: "TRY US FOR JUST $9"
- Font: Barlow Condensed, ~22–24px, weight 800, `#FFFFFF`, uppercase

### Badge/Tag
- Text: "$9 GARBAGE CAN REFRESH"
- Background: `#1A56DB`
- Text: Barlow Condensed, ~14px, weight 700, `#FFFFFF`, uppercase
- Padding: 6px 16px
- Border-radius: 6px
- Display: inline-block
- Margin-top: 8px

### Body Text
- "Perfect for Vegas summer.\nWe'll clean and refresh your garbage cans so they smell better and look better."
- Font: Barlow, 14–15px, weight 400, `#CBD5E1` (light gray-blue on dark bg)
- Line-height: 1.6
- Margin-top: 12px

## Right — CTA Button

- Text (two lines): "BOOK MY\n$9 REFRESH"
- Style: **outlined white** button (not filled)
- Background: transparent
- Border: 2px solid `#FFFFFF`
- Text: Barlow Condensed, ~15–16px, weight 700, `#FFFFFF`, uppercase
- Padding: 16px 28px
- Border-radius: 12px
- Text-align: center
- Hover: background `rgba(255,255,255,0.1)`, border-color `#FFFFFF`
- Width: ~160px

## Decorative

- Small diamond/sparkle ✦ in bottom-right corner area of the section
- Color: `rgba(255,255,255,0.25)`, ~16px

## Responsive

- Tablet: photo and middle text stack; button remains right or goes below middle text
- Mobile: full stack — photo+badge top, text middle, button bottom full-width

## Assets Referenced

- Garbage can with water splash photo (from `Design Images/`)
