/**
 * Navbar — Vegas Wash Co.
 * Export a single init() — called by main.js after DOMContentLoaded.
 */

export function init() {
  const navbar    = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');
  const allLinks  = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

  if (!navbar) return;

  // ------------------------------------------------------------------
  // 1. Sticky scroll — add .scrolled class to apply drop shadow
  // ------------------------------------------------------------------
  function onScroll() {
    if (window.scrollY > 8) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on init in case page is already scrolled

  // ------------------------------------------------------------------
  // 2. Hamburger toggle — open / close mobile menu
  // ------------------------------------------------------------------
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      mobileMenu.classList.toggle('open', !isOpen);
    });

    // Close menu when a mobile link is tapped
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.matches('.navbar__mobile-link, .navbar__cta--mobile')) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      }
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      }
    });
  }

}
