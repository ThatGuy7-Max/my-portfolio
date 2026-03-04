// ============================================================
// Lenis.js — Smooth scroll initialisation
// ============================================================

export function initLenis(isTouchDevice) {
  if (isTouchDevice) {
    gsap.registerPlugin(ScrollTrigger);
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}
