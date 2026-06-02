/**
 * Hero Section — Before/After Slider
 * Exports a single init() called by main.js after DOMContentLoaded.
 */

export function init() {
  const slider = document.querySelector('.hero__ba-slider');
  if (!slider) return;

  const afterEl = slider.querySelector('.hero__ba-after');
  const handle  = slider.querySelector('.hero__ba-handle');
  if (!afterEl || !handle) return;

  let isDragging = false;

  /** Convert a clientX position to a percentage (0–100) within the slider */
  function getPercent(clientX) {
    const rect = slider.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, pct));
  }

  /** Apply the split at `percent` (0 = all before, 100 = all after) */
  function applyPercent(percent) {
    afterEl.style.clipPath = `inset(0 0 0 ${percent}%)`;
    handle.style.left = `${percent}%`;
    handle.setAttribute('aria-valuenow', Math.round(percent));
  }

  // ── Mouse events — attached to slider so entire area is draggable ──

  slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    applyPercent(getPercent(e.clientX));
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    applyPercent(getPercent(e.clientX));
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // ── Touch events ──────────────────────────────────────────────────

  slider.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDragging = true;
    applyPercent(getPercent(e.touches[0].clientX));
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    applyPercent(getPercent(e.touches[0].clientX));
  }, { passive: false });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // ── Keyboard accessibility ────────────────────────────────────────

  handle.addEventListener('keydown', (e) => {
    const current = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
    const step = e.shiftKey ? 10 : 5;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      applyPercent(Math.max(0, current - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      applyPercent(Math.min(100, current + step));
    }
  });

  // Initial position: 50%
  applyPercent(50);
}
