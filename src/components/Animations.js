// ============================================================
// Animations.js — All GSAP scroll-triggered animations
// ============================================================

export function initAnimations(isTouchDevice, lenis) {
  // Horizontal project scroll (desktop only)
  if (!isTouchDevice && window.innerWidth > 1024) {
    const horizontalSection = document.getElementById('horizontal-scroll');
    gsap.to(horizontalSection, {
      x: () => -(horizontalSection.scrollWidth - window.innerWidth + 100),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-wrapper',
        start: 'top top',
        end: () => `+=${horizontalSection.scrollWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  // Animated counters
  document.querySelectorAll('.counter-value').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    gsap.to(counter, {
      innerHTML: target,
      duration: 2.5,
      snap: { innerHTML: 1 },
      ease: 'power2.out',
      scrollTrigger: { trigger: counter, start: 'top 85%' },
    });
  });

  // Skill bars
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
      width: width + '%',
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: { trigger: bar, start: 'top 85%' },
    });
  });

  // Section reveals
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(
      section.querySelectorAll('h2, p, .service-card, .tilt-card, .social-card, .achievement-card, .process-step'),
      {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%' },
      }
    );
  });
}
