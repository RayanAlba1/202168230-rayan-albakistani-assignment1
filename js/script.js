/* =========================================================
   Rayan Albakistani — Portfolio Interactivity
   Features:
   1) Dark / light theme toggle (persisted in localStorage)
   2) Mobile nav toggle
   3) Smooth-scroll aware "active link" + auto-closing mobile menu
   4) Contact form front-end validation + friendly confirmation
      (no backend — this is a static site, per assignment scope)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- 1) Theme toggle ---------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      icon.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      icon.textContent = '🌙';
    }
  }
}

/* ---------- 2) Mobile nav ---------- */
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu whenever a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- 3) Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field before sending.';
      status.style.color = '#e0575b';
      return;
    }

    if (!isValidEmail(email)) {
      status.textContent = 'That email address doesn\'t look right — double check it.';
      status.style.color = '#e0575b';
      return;
    }

    // No backend is wired up yet (out of scope for Assignment 1),
    // so we simply acknowledge the submission client-side.
    status.textContent = `Thanks, ${name.split(' ')[0]}! Your message has been noted — I'll get back to you soon.`;
    status.style.color = 'var(--color-accent)';
    form.reset();
  });

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}
