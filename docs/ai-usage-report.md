# AI Usage Report — Assignment 1 (Foundation & AI Integration)

## Tools used & use cases

**Claude (Anthropic)** — used as my main AI assistant throughout this assignment.
Specifically, I used it for:

- **Code generation**: producing the first working draft of `index.html`,
  `css/styles.css`, and `js/script.js` from a plain-English description of what
  I wanted (a responsive portfolio with About / Projects / Contact sections,
  a theme toggle, and a front-end contact form).
- **Documentation support**: drafting the initial `README.md`, this AI usage
  report, and the technical documentation file, which I then reviewed and
  adjusted to match my own voice and the actual project structure.
- **UI/UX suggestions**: it proposed the sticky nav bar, the dark/light theme
  toggle, and the card-based layout for the Projects section as reasonable,
  common portfolio patterns — I picked which of these to keep.

## Benefits & challenges

**Benefits**: it turned a blank-page problem into a review-and-edit problem —
instead of starting from nothing under a tight deadline, I started from a
complete, working draft and could focus my time on checking correctness,
personalizing the content (About text, project descriptions, color choice),
and understanding *why* each piece works.

**Challenges**: AI-generated code can look finished before it actually is —
I had to actually open the site, resize the browser window, toggle the theme,
and submit the contact form myself to confirm the responsive breakpoints,
the `localStorage` theme persistence, and the form validation all genuinely
worked, rather than assuming they did because the code "looked right."

## Learning outcomes

- Reinforced how CSS custom properties (`--color-*` variables) make a
  dark/light theme toggle simple: swap one `data-theme` attribute on `<html>`
  and every color updates, instead of writing two separate stylesheets.
- Saw a clean pattern for a mobile nav: a CSS class toggled by one small JS
  event listener, with the actual show/hide animation handled entirely in CSS
  (`transform` + `opacity` transitions) rather than in JavaScript.
- Practiced structuring a small static project (`css/`, `js/`, `assets/`,
  `docs/`) in a way that will scale cleanly when later assignments add more
  pages and features.

## Responsible use & modifications

I reviewed every generated file line by line before accepting it: I rewrote
the About/Projects copy to reflect my own background (ISE graduate, KFUPM,
Optimal X co-founder) instead of generic placeholder text, changed the color
palette to match my own brand identity (navy/teal) rather than the AI's
default suggestion, and tested every interactive feature manually in the
browser (theme toggle, mobile menu, form validation) to confirm it behaves
correctly before submitting. I did not submit any AI output unmodified or
unverified — this report itself documents exactly which parts were
AI-assisted versus my own review and edits, per the assignment's academic
integrity policy.
