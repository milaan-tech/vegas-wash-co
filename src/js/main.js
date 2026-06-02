/* Vegas Wash Co. — all section logic bundled as a plain script (no ES modules) */

document.addEventListener('DOMContentLoaded', function () {

  // ── Navbar ────────────────────────────────────────────────────────
  (function initNavbar() {
    const navbar     = document.querySelector('.navbar');
    const hamburger  = document.querySelector('.navbar__hamburger');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
    const allLinks   = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

    if (!navbar) return;

    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.setAttribute('aria-hidden', String(isOpen));
        mobileMenu.classList.toggle('open', !isOpen);
      });

      mobileMenu.addEventListener('click', function (e) {
        if (e.target.matches('.navbar__mobile-link, .navbar__cta--mobile')) {
          hamburger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          mobileMenu.classList.remove('open');
        }
      });

      document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
          hamburger.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          mobileMenu.classList.remove('open');
        }
      });
    }

    var sections = [
      { id: 'services',     link: '[href="#services"]' },
      { id: 'about',        link: '[href="#about"]' },
      { id: 'how-it-works', link: '[href="#how-it-works"]' },
      { id: 'reviews',      link: '[href="#reviews"]' },
      { id: 'contact',      link: '[href="#contact"]' },
    ];

    function updateActiveLink() {
      var scrollY = window.scrollY + 80;
      var currentId = null;
      for (var i = 0; i < sections.length; i++) {
        var el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) currentId = sections[i].id;
      }
      allLinks.forEach(function (link) {
        link.classList.toggle('active', currentId && link.getAttribute('href') === '#' + currentId);
      });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  })();

  // ── Hero — Before/After Slider ────────────────────────────────────
  (function initHero() {
    var slider  = document.querySelector('.hero__ba-slider');
    if (!slider) return;
    var afterEl = slider.querySelector('.hero__ba-after');
    var handle  = slider.querySelector('.hero__ba-handle');
    if (!afterEl || !handle) return;

    var isDragging = false;

    function getPercent(clientX) {
      var rect = slider.getBoundingClientRect();
      var pct  = ((clientX - rect.left) / rect.width) * 100;
      return Math.min(100, Math.max(0, pct));
    }

    function applyPercent(percent) {
      afterEl.style.clipPath = 'inset(0 0 0 ' + percent + '%)';
      handle.style.left      = percent + '%';
      handle.setAttribute('aria-valuenow', Math.round(percent));
    }

    slider.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isDragging = true;
      applyPercent(getPercent(e.clientX));
    });

    window.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      applyPercent(getPercent(e.clientX));
    });

    window.addEventListener('mouseup', function () {
      isDragging = false;
    });

    slider.addEventListener('touchstart', function (e) {
      e.preventDefault();
      isDragging = true;
      applyPercent(getPercent(e.touches[0].clientX));
    }, { passive: false });

    window.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      applyPercent(getPercent(e.touches[0].clientX));
    }, { passive: false });

    window.addEventListener('touchend', function () {
      isDragging = false;
    });

    handle.addEventListener('keydown', function (e) {
      var current = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
      var step    = e.shiftKey ? 10 : 5;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); applyPercent(Math.max(0,   current - step)); }
      if (e.key === 'ArrowRight') { e.preventDefault(); applyPercent(Math.min(100, current + step)); }
    });

    applyPercent(50);
  })();

  // ── Package — CTA smooth scroll ───────────────────────────────────
  (function initPackage() {
    var ctaBtn = document.querySelector('.package__cta-btn');
    if (!ctaBtn) return;

    ctaBtn.addEventListener('click', function (e) {
      var targetId = ctaBtn.getAttribute('href');
      if (!targetId || targetId.charAt(0) !== '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  })();

});
