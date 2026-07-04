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
    name: "Isyana Sarasvati — Concert Opening 3D Visuals",
    role: "3D Sculptor, Texture Artist, Layouting, Environment Artist",
    tagline: "a statue brought to life for a concert opening",
    tools: "Character Creator 5, ZBrush, Substance Painter, Blender",
    year: "October 2024",
    type: "Studio — Ape Plus Studio",
    cover: "https://img.youtube.com/vi/nu0GeXjAXEo/maxresdefault.jpg",
    coverVideo: "https://www.youtube.com/embed/nu0GeXjAXEo?si=BWhxlgkO2vYbciNx",
    overview: "One of my earliest projects at Ape Plus Studio, made in October 2024, and still one I'm very proud of. This was a collaboration between three studios: Shadtoto Studio handled the storyboard, concept, and art direction; Above Space handled compositing; and our team built the 3D visuals for the concert opening. The piece was split into two figures — a goddess and a statue. My boss Harris worked on the goddess, and I was assigned the statue, with him mentoring me through the full workflow. This was also my first full 3D project, and my first time ever using ZBrush.",
    process: "I started by feeding Isyana's face scans into Character Creator 5 to get a rough face and rig, then brought that into Blender to pose the body into the statue's final stance. Eileen helped sculpt out the head from there. I moved into ZBrush to sculpt the hair and body, then the armor and skirt — based on the actual costume Isyana would wear for the performance, but reinterpreted to read as stone. After sculpting, I built high-poly and low-poly versions of the statue, separated into hair, head, body, and armor, and baked the high-poly detail down in Substance Painter to texture the low-poly version. Finally I built the layout in Blender — modelling the stairs and podium, adding rock assets and cloud VDBs, then blocking camera movements per scene and lighting the whole thing.",
    challenges: "Sculpting near-realism wasn't the hard part — the real challenge was pushing it convincingly into 'statue' territory, referencing Victorian statues and the Statue of Liberty, while keeping it recognizably Isyana's actual costume. The client kept asking for the costume to feel more statue-like without losing the source design, and I ended up doing around 6 full skirt sculpts before one finally landed. Adjusting to the ZBrush workflow itself was also new territory for me at the time. A year later I revisited the sculpt just to see how far I'd come — the hair alone, which originally took me more than a day, only took 2-3 hours the second time around.",
    gallery: [
      "media/projects/01/gallery-1.jpg",
      "media/projects/01/gallery-2.jpg",
      "media/projects/01/gallery-3.jpg",
      "media/projects/01/gallery-4.jpg"
    ],
    externalEmbed: "https://www.behance.net/embed/project/251948567?ilo0=1",
    externalEmbedLabel: "Full Breakdown on Behance"
  },
  {
    id: "02",
    name: "NBA 2K MOBILE - RUN THE COURT",
    role: "Concept Art, Storyboard, Motion Graphics, Compositing",
    tagline: "from playing the game to creating an ad for it",
    tools: "Photoshop, After Effects, Blender, Premiere Pro",
    year: "2025",
    type: "Studio - Ape Plus Studio",
    cover: "media/projects/02/cover.jpg",
    coverVideo: "https://www.youtube.com/embed/zFt6nfCnKBA",
    overview: "Short overview paragraph here.",
    process: "Process notes here.",
    challenges: "Challenges notes here.",
    gallery: [
      "media/projects/02/storyboard 1.jpg",
      "media/projects/02/storyboard 2.jpg",
      "media/projects/02/nba wip 1.jpg",
      "media/projects/02/nba wip 2.jpg",
      "media/projects/02/nba wip 3.jpg",
      "media/projects/02/nba wip.gif"
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
