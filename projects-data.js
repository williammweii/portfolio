// ============================================================
// PROJECT DATA — this is the ONLY file you need to edit to
// add, remove, or update projects on your site.
//
// HOW TO ADD A NEW PROJECT:
// 1. Copy one whole block from { to }, (including the comma after).
// 2. Paste it at the end of the list, just before the closing ];
// 3. Change the "id" to a new unique value (e.g. "16").
// 4. Fill in your own text and image paths.
// 5. Put your images in: media/projects/<id>/
//
// Image paths below assume a folder per project, e.g.:
//   media/projects/01/cover.jpg
//   media/projects/01/gallery-1.jpg
//   media/projects/01/gallery-2.jpg
// This keeps every project's files together and easy to find.
// ============================================================

const PROJECTS = [
  {
    id: "01",
    name: "Project Name",
    role: "Environment Art",
    tagline: "one-line tagline goes here",
    tools: "Blender, Photoshop",
    year: "2026",
    type: "Personal / Client / Studio",
    cover: "media/projects/01/cover.jpg",
    overview: "Short overview paragraph: what this project is, the brief or goal, and your role in it. Keep this to 2-4 sentences.",
    process: "Talk through your approach — references, blockout, iteration. This is the section that shows how you think, not just what you made.",
    challenges: "Optional: a specific problem you solved. Studios like seeing this — it shows judgement, not just execution.",
    gallery: [
      "media/projects/01/gallery-1.jpg",
      "media/projects/01/gallery-2.jpg",
      "media/projects/01/gallery-3.jpg",
      "media/projects/01/gallery-4.jpg"
    ]
  },
  {
    id: "02",
    name: "Project Name",
    role: "Concept Art",
    tagline: "one-line tagline goes here",
    tools: "Photoshop, Procreate",
    year: "2026",
    type: "Personal / Client / Studio",
    cover: "media/projects/02/cover.jpg",
    overview: "Short overview paragraph here.",
    process: "Process notes here.",
    challenges: "Challenges notes here.",
    gallery: [
      "media/projects/02/gallery-1.jpg",
      "media/projects/02/gallery-2.jpg",
      "media/projects/02/gallery-3.jpg",
      "media/projects/02/gallery-4.jpg"
    ]
  },
  {
    id: "03",
    name: "Project Name",
    role: "3D Modelling",
    tagline: "one-line tagline goes here",
    tools: "Blender, Substance Painter",
    year: "2026",
    type: "Personal / Client / Studio",
    cover: "media/projects/03/cover.jpg",
    overview: "Short overview paragraph here.",
    process: "Process notes here.",
    challenges: "Challenges notes here.",
    gallery: [
      "media/projects/03/gallery-1.jpg",
      "media/projects/03/gallery-2.jpg",
      "media/projects/03/gallery-3.jpg",
      "media/projects/03/gallery-4.jpg"
    ]
  }
  // Add projects 04 through 15 the same way — copy a block above this line,
  // paste it here, give it a new id, and fill in your details.
];
