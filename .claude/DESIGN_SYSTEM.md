# Vegas Wash Co. — Master Design System

Shared tokens extracted from all 11 High Resolution Section screenshots.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#1A56DB` | CTA buttons, accent text, icon fills, links |
| `--color-primary-dark` | `#1641B0` | Button hover/active state |
| `--color-primary-light` | `#EBF2FF` | Light blue card backgrounds (Package "Perfect For" panel) |
| `--color-dark-navy` | `#0F1F3D` | Garbage Can section background, Contact footer background |
| `--color-text-black` | `#111827` | Primary body text, headings |
| `--color-text-dark` | `#1F2937` | Secondary headings, card labels |
| `--color-text-body` | `#374151` | Body paragraph text |
| `--color-text-muted` | `#6B7280` | Sub-labels, captions |
| `--color-white` | `#FFFFFF` | Backgrounds, reversed text on dark sections |
| `--color-border` | `#E5E7EB` | Card borders, dividers |
| `--color-bg-light` | `#F9FAFB` | Subtle section backgrounds (What We Clean) |
| `--color-before-badge` | `#1F2937` | "BEFORE" label pill (dark charcoal) |
| `--color-after-badge` | `#1A56DB` | "AFTER" label pill (primary blue) |

---

## Typography

| Token | Value | Usage |
|---|---|---|
| `--font-heading` | `'Barlow Condensed', sans-serif` | All section headings, navbar logo, labels |
| `--font-body` | `'Barlow', sans-serif` | Body copy, sub-text, button text |
| `--fw-regular` | `400` | Body paragraphs |
| `--fw-semibold` | `600` | Sub-headings, nav links, card labels |
| `--fw-bold` | `700` | Most headings |
| `--fw-extrabold` | `800` | Hero headline, section title emphasis |
| `--fw-black` | `900` | Large price callouts ($99, $9) |

### Type Scale

| Role | Size (desktop) | Weight | Font | Transform |
|---|---|---|---|---|
| Hero H1 line 1 | ~52–56px | 800 | Barlow Condensed | UPPERCASE |
| Hero H1 line 2 (blue) | ~52–56px | 800 | Barlow Condensed | UPPERCASE |
| Section heading | ~32–36px | 800 | Barlow Condensed | UPPERCASE |
| Package title line 1 | ~28px | 700 | Barlow Condensed | UPPERCASE |
| Package title line 2 (blue) | ~34px | 800 | Barlow Condensed | UPPERCASE |
| Price callout ($99) | ~64–72px | 900 | Barlow Condensed | — |
| Price callout ($9) | ~64–72px | 900 | Barlow Condensed | — |
| Card label / icon label | ~12–13px | 700 | Barlow Condensed | UPPERCASE, letter-spacing ~0.08em |
| Body paragraph | ~15–16px | 400 | Barlow | Normal |
| Nav link | ~14px | 600 | Barlow Condensed | UPPERCASE, letter-spacing ~0.06em |
| Button text | ~14–15px | 700 | Barlow / Barlow Condensed | UPPERCASE |
| Footer tagline | ~12px | 400–600 | Barlow Condensed | UPPERCASE |
| Checklist item | ~15px | 400 | Barlow | Normal |

---

## Spacing Scale

| Token | Value |
|---|---|
| `--space-xs` | `4px` |
| `--space-sm` | `8px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |
| `--space-4xl` | `96px` |

---

## Container & Layout

- Max content width: **1100–1140px** (centered, horizontal padding ~24–32px on sides)
- Section vertical padding: **40–64px** top/bottom (compact sections like "Vegas Dust" use ~20–28px)
- Grid gap (cards): **16px**
- Card border-radius: **12px** (rounded cards throughout)
- Inner card padding: **20–24px**

---

## Buttons

### Primary CTA (filled blue)
- Background: `#1A56DB`
- Text: `#FFFFFF`, uppercase, ~14px, font-weight 700, Barlow Condensed
- Border-radius: **24px** (pill shape)
- Padding: **12px 28px**
- Hover: background `#1641B0`, slight box-shadow `0 4px 12px rgba(26,86,219,0.35)`
- Example: "GET MY FREE QUOTE", "CLAIM THIS OFFER", "BOOK MY $9 REFRESH"

### Secondary CTA (outlined white on dark bg)
- Background: transparent
- Border: 2px solid `#FFFFFF`
- Text: `#FFFFFF`, uppercase
- Border-radius: **12px** (rectangular rounded, not pill)
- Padding: **14px 32px**
- Hover: background `rgba(255,255,255,0.1)`
- Example: "GET MY FREE QUOTE" on the Ready To Make Your Home section

### Navbar CTA
- Background: `#1A56DB`
- Text: `#FFFFFF`
- Border-radius: **24px**
- Padding: **10px 20px**
- Same pill shape as primary CTA

---

## Icons & Illustrations

- Style: **flat vector line art**, single color (navy `#1A3A6B` or primary `#1A56DB`)
- What We Clean icons: ~64–72px tall, inside white rounded-rect cards with border ~1px `#E5E7EB`
- Simple Local Affordable icons: ~48–56px, circular outline style, primary blue
- Navbar logo: text-based ("VEGAS WASH CO." with pressure washer spray graphic), two-tone (black + blue)
- Footer logo: same two-tone, white + blue variant on dark background

---

## Cards

### Service Icon Card (What We Clean)
- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Border-radius: `12px`
- Padding: `16px 12px`
- Icon: ~64px, centered
- Label: 12px, 700, Barlow Condensed, uppercase, `#1F2937`, centered below icon, ~8px gap

### Feature Card (Simple Local Affordable)
- No card border — open layout
- Icon: ~52px circular outlined in blue
- Title: ~16px, 700, Barlow Condensed, uppercase, `#111827`
- Body: ~14px, 400, Barlow, `#374151`

### Package Card
- Background: `#FFFFFF`
- Border: 1px solid `#E5E7EB`
- Border-radius: `16px`
- Internal sections separated by vertical dividers

### "Perfect For" Side Panel
- Background: `#EBF2FF` (light blue)
- Border-radius: `12px`
- User icon + label rows, 700 Barlow Condensed uppercase

---

## Before/After Labels

- "BEFORE" pill: background `#1F2937`, text `#FFFFFF`, font-size ~12px, font-weight 700, border-radius 6px, padding 4px 12px
- "AFTER" pill: background `#1A56DB`, text `#FFFFFF`, same sizing

---

## Dividers

- Heading underline accent: ~40–48px wide, ~3px tall, `#1A56DB`, below section title
- Vertical rule (Vegas Dust section): 1px solid `#D1D5DB`, full section height

---

## Responsive Breakpoints

| Name | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1023px |
| Desktop | ≥ 1024px |

- Mobile: single-column stacking, reduced font sizes (~30–35% smaller headings), full-width buttons
- Tablet: 2-column grids where applicable
- Nav collapses to hamburger on mobile

---

## Shadow / Elevation

- Subtle card shadow: `0 2px 8px rgba(0,0,0,0.06)`
- CTA hover shadow: `0 4px 16px rgba(26,86,219,0.3)`
- Hero handle/slider button: `0 2px 8px rgba(0,0,0,0.25)`
