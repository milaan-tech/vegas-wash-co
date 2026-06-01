// Mobile nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Before/After slider
(function () {
  const wrap = document.querySelector('.hero__bg-slider .before-after');
  if (!wrap) return;
  const after = wrap.querySelector('.before-after__after');
  const handle = wrap.querySelector('.before-after__handle');
  let dragging = false;

  function setPos(x) {
    const rect = wrap.getBoundingClientRect();
    let pct = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
    handle.style.left = pct + '%';
  }

  handle.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  handle.addEventListener('touchstart', e => { dragging = true; }, { passive: true });
  document.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  document.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('mouseup',  () => { dragging = false; });
  document.addEventListener('touchend', () => { dragging = false; });

  // Also allow clicking anywhere on the slider to reposition
  wrap.addEventListener('click', e => setPos(e.clientX));
})();
