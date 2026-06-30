// ============================================================
// PROJECT RENDERER — you shouldn't need to edit this file.
// It reads "?id=01" (etc.) from the page URL, finds that
// project in PROJECTS (from projects-data.js), and builds
// the page content automatically.
// ============================================================

(function () {
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');

  const container = document.getElementById('project-content');
  if (!container || typeof PROJECTS === 'undefined') return;

  const index = PROJECTS.findIndex((p) => p.id === requestedId);
  const project = index !== -1 ? PROJECTS[index] : null;

  if (!project) {
    container.innerHTML = `
      <div class="project-hero" style="margin-top: 4.5rem;">
        <div class="waypoint" style="margin: 0; padding-top: 2.5rem;">
          <span class="index">/--</span>
          <h1>Project not found</h1>
          <span class="descriptor">check the link, or go back to all projects</span>
        </div>
      </div>
      <div class="project-body">
        <p>This project link doesn't match anything yet. <a href="projects.html" style="color: var(--accent);">View all projects →</a></p>
      </div>
    `;
    return;
  }

  // Update browser tab title
  document.title = project.name + ' — William Wei';

  // Figure out prev/next project for the nav links (wraps around)
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  const galleryHTML = project.gallery
    .map(
      (src, i) => `
      <div class="gallery-piece">
        <img src="${src}" alt="${project.name} — image ${i + 1}" loading="lazy"
             onerror="this.closest('.gallery-piece').innerHTML='<div class=\\'placeholder-art\\' style=\\'height:100%;\\'><span class=\\'slot-no\\'>${String(i + 1).padStart(2, '0')}</span><span>Image missing</span></div>'">
      </div>`
    )
    .join('');

  container.innerHTML = `
    <div class="project-hero" style="margin-top: 4.5rem;">
      <div class="waypoint" style="margin: 0; padding-top: 2.5rem;">
        <span class="index">/${project.id}</span>
        <h1>${project.name}</h1>
        <span class="descriptor">${project.tagline}</span>
      </div>
      <div class="proj-meta">
        <div class="meta-item"><strong>Role</strong>${project.role}</div>
        <div class="meta-item"><strong>Tools</strong>${project.tools}</div>
        <div class="meta-item"><strong>Year</strong>${project.year}</div>
        <div class="meta-item"><strong>Type</strong>${project.type}</div>
      </div>
    </div>

    <div class="project-cover">
      <img src="${project.cover}" alt="${project.name} cover"
           onerror="this.parentElement.innerHTML='<div class=\\'placeholder-art\\' style=\\'height:100%;\\'><span class=\\'slot-no\\'>COVER</span><span>Add cover image</span></div>'">
    </div>

    <div class="project-body">
      <p>${project.overview}</p>
      <h3>Process</h3>
      <p>${project.process}</p>
      <h3>Challenges</h3>
      <p>${project.challenges}</p>
    </div>

    <div class="project-gallery">
      ${galleryHTML}
    </div>

    <div class="project-nav">
      <a href="project.html?id=${prevProject.id}">← ${prevProject.name}</a>
      <a href="projects.html">All projects</a>
      <a href="project.html?id=${nextProject.id}">${nextProject.name} →</a>
    </div>
  `;
})();
