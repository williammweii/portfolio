// Lightweight scroll parallax — no dependencies.
// Targets the showreel placeholder/video and project cover images.
(function () {
  const targets = document.querySelectorAll(
    '.showreel .reel-placeholder, .showreel video, .project-cover .placeholder-art, .project-cover img'
  );

  if (!targets.length) return;

  // Respect users who've asked for reduced motion.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  function updateParallax() {
    const viewportH = window.innerHeight;

    targets.forEach((el) => {
      const container = el.closest('.showreel, .project-cover');
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // Only animate while the element is roughly in view.
      if (rect.bottom < 0 || rect.top > viewportH) return;

      // Progress from -1 (above viewport) to 1 (below viewport), 0 = centered.
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      const offset = progress * 40; // max ~40px shift, subtle

      el.style.transform = `translateY(${offset.toFixed(2)}px)`;
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateParallax();
})();

// ===== Hero entrance animation =====
// As the hero section scrolls into view, the photo scales in from 0 at center,
// and the left/right text columns slide out from a centered position to their
// final left/right-aligned spots, fading in as they go.
(function () {
  const hero = document.getElementById('hero-intro');
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const photo = hero.querySelector('[data-hero-el="photo"]');
  const colLeft = hero.querySelector('.hero-col-left');
  const colRight = hero.querySelector('.hero-col-right');

  if (prefersReducedMotion) {
    // Just show everything in its final state, no animation.
    if (photo) { photo.style.transform = 'scale(1)'; photo.style.opacity = '1'; }
    if (colLeft) { colLeft.style.transform = 'none'; colLeft.style.opacity = '1'; }
    if (colRight) { colRight.style.transform = 'none'; colRight.style.opacity = '1'; }
    return;
  }

  // How far each column travels inward (toward center) at progress = 0.
  const TRAVEL_PX = 220;

  let ticking = false;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateHero() {
    const rect = hero.getBoundingClientRect();
    const viewportH = window.innerHeight;

    // Progress: 0 when the section's top just enters viewport bottom,
    // 1 when the section is centered/fully scrolled into view.
    // We map "hero top crosses 85% of viewport" -> 0 and "hero top crosses 35% of viewport" -> 1.
    const startLine = viewportH * 0.85;
    const endLine = viewportH * 0.35;

    let raw = (startLine - rect.top) / (startLine - endLine);
    raw = Math.max(0, Math.min(1, raw));
    const progress = easeOutCubic(raw);

    if (photo) {
      photo.style.transform = `scale(${progress.toFixed(3)})`;
      photo.style.opacity = progress.toFixed(3);
    }

    if (colLeft) {
      const dx = (1 - progress) * TRAVEL_PX;
      colLeft.style.transform = `translateX(${dx.toFixed(2)}px)`;
      colLeft.style.opacity = progress.toFixed(3);
    }

    if (colRight) {
      const dx = (1 - progress) * -TRAVEL_PX;
      colRight.style.transform = `translateX(${dx.toFixed(2)}px)`;
      colRight.style.opacity = progress.toFixed(3);
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHero);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateHero();
})();
