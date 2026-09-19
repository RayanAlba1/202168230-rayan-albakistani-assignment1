# Rayan Albakistani — Personal Portfolio (Assignment 1)

Foundation web application for my professional portfolio, built for **SWE 363 –
Web Engineering & Development**, Assignment 1: *Foundation & AI Integration*.

A live, responsive one-page site with an About section, two project cards, and a
front-end contact form — the starting frame that later assignments will expand
into a full portfolio.

## Live demo

> Add your GitHub Pages / Netlify / Vercel link here once deployed, e.g.
> `https://<your-username>.github.io/<repo-name>/`

## Features

- Responsive layout (desktop / tablet / mobile) built with CSS Grid & Flexbox, no framework
- Dark / light theme toggle, remembered across visits via `localStorage`
- Smooth scrolling navigation with a mobile hamburger menu
- Front-end contact form with validation and an inline confirmation message
  (no backend — out of scope for this assignment)
- Color identity carried over from my own Optimal X brand (navy `#0D1B2A` + teal `#00B7B3`)

## Project structure

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── avatar.svg
│       ├── project1.svg
│       └── project2.svg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Running it locally

No build step or dependencies — it's plain HTML/CSS/JS.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Open `index.html` directly in a browser, **or** serve it locally (recommended,
   avoids any file:// quirks):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080` (or whichever port your server prints).

## Deploying (optional)

Easiest option — GitHub Pages:

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**, branch
   `main`, folder `/ (root)`.
4. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

## AI usage

I used an AI assistant (Claude) to scaffold this project's HTML/CSS/JS and
documentation. See [`docs/ai-usage-report.md`](docs/ai-usage-report.md) for the
full breakdown of what it was used for, what I changed, and what I learned.

## Tech stack

- HTML5, CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks/libraries)
- Google Fonts: Sora (headings) + Inter (body)
