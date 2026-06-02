# Vegas Wash Co. — Build Orchestration Playbook

When the user asks to **build the site**, **rebuild a section**, or says something like "build it" / "run the agents" — follow this playbook exactly.

---

## Reference Files (read before doing anything)

- **Design tokens:** `.claude/DESIGN_SYSTEM.md` — colors, fonts, spacing, buttons, breakpoints. Every agent must import this first.
- **Section specs:** `.claude/SPEC_[SECTION].md` — pixel-exact measurements, asset references, hover states.
- **Screenshots:** `Design Images/High Resolution Sections/[Section].jpg` — ground truth. Final output must match visually.

---

## Phase 1 — Parallel Section Agents

Spawn all 11 agents **simultaneously** (parallel). Each agent owns exactly three files and must not touch any other file.

| Agent | Spec file | Owns |
|---|---|---|
| Agent 1 — Navbar | `SPEC_NAVBAR.md` | `src/components/Navbar.html`, `src/styles/navbar.css`, `src/js/navbar.js` |
| Agent 2 — Hero | `SPEC_HERO.md` | `src/components/Hero.html`, `src/styles/hero.css`, `src/js/hero.js` |
| Agent 3 — Package | `SPEC_PACKAGE.md` | `src/components/Package.html`, `src/styles/package.css`, `src/js/package.js` |
| Agent 4 — Vegas Dust | `SPEC_VEGAS_DUST.md` | `src/components/VegasDust.html`, `src/styles/vegas-dust.css`, `src/js/vegas-dust.js` |
| Agent 5 — What We Clean | `SPEC_WHAT_WE_CLEAN.md` | `src/components/WhatWeClean.html`, `src/styles/what-we-clean.css`, `src/js/what-we-clean.js` |
| Agent 6 — Garbage Can | `SPEC_GARBAGE_CAN.md` | `src/components/GarbageCan.html`, `src/styles/garbage-can.css`, `src/js/garbage-can.js` |
| Agent 7 — Real Results | `SPEC_REAL_RESULTS.md` | `src/components/RealResults.html`, `src/styles/real-results.css`, `src/js/real-results.js` |
| Agent 8 — Simple Local | `SPEC_SIMPLE_LOCAL_AFFORDABLE.md` | `src/components/SimpleLocal.html`, `src/styles/simple-local.css`, `src/js/simple-local.js` |
| Agent 9 — Proudly Serving | `SPEC_PROUDLY_SERVING.md` | `src/components/ProudlyServing.html`, `src/styles/proudly-serving.css`, `src/js/proudly-serving.js` |
| Agent 10 — Ready To Make | `SPEC_READY_TO_MAKE.md` | `src/components/ReadyToMake.html`, `src/styles/ready-to-make.css`, `src/js/ready-to-make.js` |
| Agent 11 — Contact Footer | `SPEC_CONTACT_FOOTER.md` | `src/components/ContactFooter.html`, `src/styles/contact-footer.css`, `src/js/contact-footer.js` |

### Rules every section agent must follow

1. **Read DESIGN_SYSTEM.md first.** Use only the tokens defined there — no hardcoded hex values or font names outside of what's specified.
2. **Read your SPEC_[SECTION].md.** Match every measurement, color, font size, and layout described.
3. **HTML file** — emit a single `<section>` (or `<header>`/`<footer>` where appropriate) with no `<html>`, `<head>`, or `<body>` wrapper. The Assembler will embed it.
4. **CSS file** — scope all selectors to the section's root class (e.g. `.hero`, `.navbar`, `.package`). No global resets — those live in `global.css`.
5. **JS file** — export a single `init()` function. Do not call it inline. `main.js` calls all inits after DOM load.
6. **Asset paths** — reference images as `../Design Images/...` relative to `src/`.
7. **No placeholder content** — use the real copy from the spec (headings, body text, labels, prices).
8. **Responsive** — implement the breakpoints from DESIGN_SYSTEM.md (mobile < 640px, tablet 640–1023px, desktop ≥ 1024px).

---

## Phase 2 — Global Styles Agent (runs in parallel with Phase 1)

One dedicated agent writes `src/styles/global.css` only.

**global.css must contain:**
- CSS custom properties (variables) for every token in DESIGN_SYSTEM.md: colors, font families, font weights, spacing scale, border-radii, shadows, breakpoints as comments
- CSS reset: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
- Base: `html { font-family: var(--font-body); color: var(--color-text-black); }`, smooth scroll, image `max-width: 100%`
- Google Fonts `@import` for Barlow and Barlow Condensed (weights 400, 500, 600, 700, 800, 900)
- No section-specific rules

---

## Phase 3 — Assembler Agent (runs after Phases 1 & 2 complete)

The Assembler writes three files: `src/index.html`, and updates `src/js/main.js`. It must not re-implement any section logic.

### src/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vegas Wash Co. — Pressure Washing in Summerlin & Las Vegas</title>
  <!-- Global styles first, then section styles in page order -->
  <link rel="stylesheet" href="styles/global.css">
  <link rel="stylesheet" href="styles/navbar.css">
  <link rel="stylesheet" href="styles/hero.css">
  <link rel="stylesheet" href="styles/package.css">
  <link rel="stylesheet" href="styles/vegas-dust.css">
  <link rel="stylesheet" href="styles/what-we-clean.css">
  <link rel="stylesheet" href="styles/garbage-can.css">
  <link rel="stylesheet" href="styles/real-results.css">
  <link rel="stylesheet" href="styles/simple-local.css">
  <link rel="stylesheet" href="styles/proudly-serving.css">
  <link rel="stylesheet" href="styles/ready-to-make.css">
  <link rel="stylesheet" href="styles/contact-footer.css">
</head>
<body>
  <!-- Inline each component file's content here, in section order -->
  <!-- 1. Navbar -->
  <!-- 2. Hero -->
  <!-- 3. Package -->
  <!-- 4. Vegas Dust -->
  <!-- 5. What We Clean -->
  <!-- 6. Garbage Can -->
  <!-- 7. Real Results -->
  <!-- 8. Simple Local Affordable -->
  <!-- 9. Proudly Serving -->
  <!-- 10. Ready To Make -->
  <!-- 11. Contact Footer -->
  <script src="js/main.js" type="module"></script>
</body>
</html>
```

### src/js/main.js

Import and call every section's `init()` in page order after `DOMContentLoaded`.

### Assembler checklist before finishing

- [ ] All 11 `<link>` stylesheet tags present and in order
- [ ] All 11 component HTML blocks inlined, in section order, with no gaps
- [ ] `main.js` imports all 11 section modules and calls `init()`
- [ ] No duplicate IDs across inlined components
- [ ] Page opens in browser without console errors

---

## Phase 4 — Visual QA Agent (runs after Phase 3)

One agent performs a final visual comparison against every screenshot.

**For each of the 11 sections:**
1. Read `Design Images/High Resolution Sections/[Section].jpg`
2. Read the corresponding built HTML + CSS
3. Check against the spec: layout, colors, font sizes, spacing, content, hover states described
4. Report any deviation as: `[SECTION] — ISSUE: <what's wrong> | FIX: <what to change>`

**Pass criteria:**
- Colors match DESIGN_SYSTEM.md tokens
- Typography matches spec sizes and weights
- Layout matches screenshot (column counts, alignment, proportions)
- All copy matches spec exactly
- No section is missing or empty
- Responsive rules present for all three breakpoints

**If issues are found:** list them all, then ask the user whether to auto-fix or review manually.

---

## Rebuilding a single section

If the user asks to rebuild only one section (e.g. "redo the hero"):
1. Spawn only that section's agent + the Visual QA agent for that section
2. Do NOT re-run the Assembler unless the user asks — the component files feed directly into `src/index.html`

---

## File ownership summary

| File | Owner |
|---|---|
| `src/styles/global.css` | Global Styles Agent (Phase 2) |
| `src/components/[Section].html` | Section Agent (Phase 1) |
| `src/styles/[section].css` | Section Agent (Phase 1) |
| `src/js/[section].js` | Section Agent (Phase 1) |
| `src/index.html` | Assembler Agent (Phase 3) |
| `src/js/main.js` | Assembler Agent (Phase 3) |
