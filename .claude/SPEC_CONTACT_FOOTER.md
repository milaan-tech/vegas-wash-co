# Spec: Contact Us / Footer Section

Screenshot: `Design Images/High Resolution Sections/Contact Us.jpg`

---

## Layout

- Full-width footer section
- Background: `#0F1F3D` (dark navy)
- Vertical padding: ~28–36px top/bottom
- Inner container: max-width 1140px, centered
- Four-column flex row, align-items: center:
  1. **Far Left** — Logo + tagline (~22% width)
  2. **Center-Left** — Contact Us column (~28% width)
  3. **Center-Right** — Follow Us + social icons (~25% width)
  4. **Far Right** — Licensed & Insured badge (~25% width)
- Flex: row, justify-content: space-between
- Separator lines between columns: 1px solid `rgba(255,255,255,0.12)`, full section height, margin 0 16px

---

## Column 1 — Logo + Tagline

- Logo: "VEGAS WASH CO." two-tone on dark background
  - "VEGAS" — Barlow Condensed, ~24px, weight 800, `#FFFFFF`
  - "WASH CO." — Barlow Condensed, ~18px, weight 700, `#FFFFFF`
  - Spray icon: `#1A56DB` (same as header logo but white/blue variant)
- Tagline (below logo):
  - Text: "PRESSURE WASHING\nIN SUMMERLIN & LAS VEGAS"
  - Font: Barlow Condensed, 11–12px, weight 600, `rgba(255,255,255,0.6)`, uppercase
  - Line-height: 1.4
  - Margin-top: 8px

---

## Column 2 — Contact Us

- Header: "CONTACT US"
  - Font: Barlow Condensed, 14px, weight 700, `#FFFFFF`, uppercase
  - Margin-bottom: 12px

- Row 1: 📞 (702) 123-4567
  - Phone icon: `#1A56DB`, ~14px
  - Text: Barlow, 14px, weight 400, `#FFFFFF`
  - Gap: 8px between icon and text

- Row 2: ✉ hello@vegaswashco.com
  - Email icon: `#1A56DB`, ~14px
  - Text: Barlow, 14px, weight 400, `#FFFFFF`

- Row 3: 🌐 vegaswashco.com
  - Globe icon: `#1A56DB`, ~14px
  - Text: Barlow, 14px, weight 400, `#FFFFFF`

- Row gap: 8–10px between each contact row

---

## Column 3 — Follow Us + Social Icons

- Header: "FOLLOW US"
  - Font: Barlow Condensed, 14px, weight 700, `#FFFFFF`, uppercase
  - Margin-bottom: 12px

- Social icons row (horizontal):
  1. **Facebook** — circular icon, background `#1877F2` (Facebook blue), white "f" logo, ~36px diameter
  2. **Instagram** — circular icon, gradient background (Instagram colors: purple→pink→orange) or `#E1306C`, white camera icon, ~36px diameter
  - Gap: 10px between icons
  - Hover: opacity 0.85, slight scale(1.05) transform

---

## Column 4 — Licensed & Insured Badge

- Container: white border box
- Border: 1.5px solid `rgba(255,255,255,0.4)`
- Border-radius: 10px
- Padding: 12px 16px
- Display: flex row, align-items center, gap 10px

- Shield icon: `#1A56DB`, ~28px, checkmark inside
- Text block:
  - Line 1: "LICENSED" — Barlow Condensed, 14px, weight 700, `#FFFFFF`, uppercase
  - Line 2: "& INSURED" — Barlow Condensed, 14px, weight 700, `#FFFFFF`, uppercase
  - Line-height: 1.3

---

## Copyright Bar

- Text: "© 2024 Vegas Wash Co. All Rights Reserved."
- Font: Barlow, 12px, weight 400, `rgba(255,255,255,0.45)`
- Centered below the four columns
- Margin-top: ~16px
- Border-top: 1px solid `rgba(255,255,255,0.1)`, padding-top: 16px

---

## Responsive

- Tablet: 2-column × 2-row grid; Logo + Contact left column, Social + Badge right column
- Mobile: single column stack; each block full-width; copyright bottom

## Assets Referenced

- Logo (footer variant): `Design Images/Vector Icons/logo_vector.png` (or white/blue footer version)
- Shield/verified icon (SVG)
- Phone, email, globe icons (inline SVG or `Design Images/Vector Icons/`)
- Facebook / Instagram icons (inline SVG or icon font)
