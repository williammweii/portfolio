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
