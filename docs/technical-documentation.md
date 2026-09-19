# Technical Documentation

## Overview

Single-page static website with three in-page sections (About, Projects,
Contact) plus a sticky header. No backend, no build tooling, no framework —
just semantic HTML, hand-written CSS, and vanilla JavaScript.

## Architecture

```
index.html        → page structure & content (one file, three <section>s)
css/styles.css     → all styling: CSS custom properties for theming,
                      Flexbox/Grid for layout, media queries for responsiveness
js/script.js       → all behavior, split into three small independent
                      functions initialized on DOMContentLoaded
assets/images/     → inline-scalable SVG placeholder graphics (avatar + 2
                      project thumbnails) — no external image dependency
docs/              → this file + the AI usage report
```

## Theming (dark / light mode)

- All colors are defined once as CSS custom properties on `:root`.
- A `[data-theme='dark']` selector overrides those same variable names.
- `js/script.js` toggles the `data-theme="dark"` attribute on `<html>` and
  stores the choice in `localStorage` under the key `theme`, so the choice
  survives a page reload. On first visit (no stored value), it falls back to
  the visitor's OS-level `prefers-color-scheme`.

## Responsive design

- Layout is built with CSS Grid (`.hero-grid`, `.projects-grid`) and Flexbox
  (`.navbar`, `.hero-actions`, `.contact-form`), both of which reflow
  naturally at smaller sizes.
- Three breakpoints handle the main layout shifts:
  - `≤ 860px` — hero and project grid collapse from two columns to one.
  - `≤ 700px` — the nav links move into a slide-down mobile menu, toggled by
    a hamburger button.
  - `≤ 480px` — section padding is reduced to fit smaller screens better.
- All spacing/typography that needs to scale between breakpoints uses
  `clamp()` (e.g. the hero heading and section titles) instead of fixed
  `px` values.

## JavaScript behavior

`js/script.js` is organized into three independent init functions, all
called once on `DOMContentLoaded`:

1. `initThemeToggle()` — reads/writes `localStorage`, flips the `data-theme`
   attribute, swaps the toggle button's icon (🌙 / ☀️).
2. `initMobileNav()` — toggles an `.open` class on the nav list and closes
   the menu automatically whenever a nav link is clicked.
3. `initContactForm()` — intercepts the form's `submit` event, does simple
   client-side validation (all fields present, email matches a basic regex),
   and shows an inline status message. There is intentionally no network
   request here — no backend exists yet for this assignment.

No external JS libraries are used.

## Browser/device compatibility

Built with standard, widely-supported CSS/JS features (Grid, Flexbox, CSS
custom properties, `localStorage`, `matchMedia`) that work across current
versions of Chrome, Edge, Firefox, and Safari, and on both desktop and
mobile. `color-mix()` is used for the header's blur backdrop as a
progressive enhancement — on a browser that doesn't support it, the header
just falls back to a solid background with no visual breakage.

## Known limitations / next steps

- The contact form has no backend yet — a later assignment phase
  (Back-End Fundamentals) is expected to wire this up to a real endpoint.
- Project card links (`Live site`, `Case study`, `Repository`, `Report`)
  are placeholders — fill them in with real URLs once available.
- Profile/project images are placeholder SVGs; swap in real photos/screenshots
  under `assets/images/` and update the corresponding `src` attributes in
  `index.html`.
