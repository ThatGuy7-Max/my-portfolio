// ============================================================
// Loader.js — Animated loader that fires a callback on complete
// ============================================================

export function initLoader(onComplete) {
  setTimeout(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        document.getElementById('loader').style.display = 'none';
        onComplete();
      },
    });

    tl.to('#loader',           { opacity: 0, duration: 0.8, ease: 'power2.inOut', delay: 0.5 });
    tl.to('#hero-line1',       { y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.4');
    tl.to('#hero-line2',       { y: 0, duration: 1.2, ease: 'power4.out' }, '-=1');
    tl.to('#hero-tag',         { opacity: 1, scale: 1, duration: 0.8 },     '-=0.8');
    tl.to('#hero-subtitle',    { y: 0, duration: 1,   ease: 'power4.out' }, '-=0.8');
    tl.to('#hero-cta-primary', { y: 0, duration: 1,   ease: 'power4.out' }, '-=0.8');
    tl.to('#hero-cta-secondary',{ y: 0, duration: 1,  ease: 'power4.out' }, '-=0.8');
    tl.to('#hero-social',      { opacity: 1, duration: 1 },                 '-=0.5');
    tl.to('#scroll-ind',       { opacity: 1, duration: 1 },                 '-=0.5');
  }, 2000);
}
