/**
 * Package Section — JS
 * Smooth-scroll the CTA button to #get-quote.
 */
export function init() {
  const ctaBtn = document.querySelector('.package__cta-btn');
  if (!ctaBtn) return;

  ctaBtn.addEventListener('click', (e) => {
    const targetId = ctaBtn.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
