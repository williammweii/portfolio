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
    cover: "https://img.youtube.com/vi/zFt6nfCnKBA/maxresdefault.jpg",
    coverVideo: "https://www.youtube.com/embed/zFt6nfCnKBA",
    overview: "NBA 2K Mobile – Run The Court was created to promote a new game mode for NBA 2K Mobile. The project was a collaboration between Apeplus Studio and Mosmoss Studio, where Mosmoss handled the 3D production while our team was responsible for the motion graphics and final visual presentation. I was entrusted to lead this project because of my familiarity with NBA 2K and my passion for basketball. My responsibilities included developing the storyboard, directing the visual style, creating the motion graphics, and compositing the final sequences. The project allowed me to combine dynamic sports visuals with a high-energy presentation that matched the identity of the NBA 2K franchise.",
    process: "The project began with extensive visual research. I gathered references primarily from the NBA 2K series, studying its cinematography, pacing, transitions, typography, and overall presentation style. The goal was to capture the bold, energetic identity of the franchise while adapting it to promote the new Run The Court game mode. Once the creative direction was established, I created the storyboard in Adobe Photoshop, planning each shot, transition, and camera movement to ensure the pacing felt exciting and impactful. This stage served as the blueprint for the entire project and helped align the vision before moving into production. The motion graphics and compositing were primarily created in Adobe After Effects. Working closely with Mosmoss Studio, I received their 3D renders and integrated them into the motion graphics pipeline. I enhanced the scenes through compositing, typography, visual effects, transitions, and additional animations to create a polished final piece. I also experimented with incorporating extra 3D background elements into several shots, adding depth and scale that made the compositions feel more immersive and cinematic. Throughout production, I continuously refined the timing and visual rhythm to ensure every transition, camera movement, and animation complemented the fast-paced energy associated with NBA 2K. Having the opportunity to lead the storyboard from the beginning also allowed me to shape the project's narrative flow and maintain a consistent visual direction from concept to final delivery.",
    challenges: "This project did not present major technical obstacles, but it did require adapting to a collaborative workflow with another studio. Since the 3D assets were produced externally, I needed to adjust my workflow to efficiently receive, organize, and composite their files while maintaining visual consistency throughout the project. Despite this adjustment, the collaboration went smoothly and became a valuable learning experience in cross-team production. Looking back, this project represents my strongest motion graphics work to date. It gave me the opportunity to lead the creative direction, experiment with different artistic approaches, and produce a final result that I am genuinely proud of.",
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
    name: "Pseudo Immortals",
    role: "3D Modelling, Sculpting, Animation, Texturing",
    tagline: "teaser for book launch",
    tools: "Blender, Substance Painter, Zbrush, Photoshop, After Effects",
    year: "May 2025",
    type: "Studio - Ape Plus Studio",
    cover: "https://img.youtube.com/vi/fwPZHaSMqd4/maxresdefault.jpg",
    coverVideo: "https://www.youtube.com/embed/fwPZHaSMqd4",
    overview: "Pseudo Immortals is a cinematic book trailer created to visualize the world and atmosphere of a novel written by Charissa Ong, a friend of our creative director. Unlike a typical client project, this was a passion project where our team was given complete creative freedom to interpret the story and bring its surreal universe to life through cinematic visuals. The storyboard and initial visual direction were developed by our creative director, Harris, who used AI-generated concept renders to communicate ideas with the author. Once the concepts were approved, they became the primary visual guide throughout production. My role focused on creating several key 3D assets, look development, texturing, and collaborating with my supervisor, Eileen, who handled portions of the 3D work and much of the final compositing.",
    process: "The production revolved around three main sequences: the Baby Lab, Yggdrasil, and the TV Man. For the Baby Lab, I sculpted the baby character in ZBrush before bringing it into Substance 3D Painter for texturing. I also modeled the incubation capsule in Blender and integrated the embryo asset created by Eileen. Using Geometry Nodes, I scattered and lightly animated the embryos to create subtle movement that made the environment feel more alive and unsettling. The Yggdrasil sequence became one of my favorite parts of the project. My initial goal was to create the tree entirely through traditional polygon modeling in Blender, but achieving the intricate organic forms proved inefficient. Instead, I sculpted the tree in ZBrush, then brought it back into Blender where I used hair particles to generate the foliage. The completed tree also served a second purpose by being repurposed as a bas-relief design for a ceremonial coin, allowing a single asset to contribute to multiple parts of the trailer. The assets were then textured in Substance 3D Painter to establish the final look. For the TV Man, I received a base model that had already been created by another artist. I refined the model by adding additional details such as cables and surface elements, then completely reworked the textures in Substance 3D Painter to give the character a richer and more believable appearance that better matched the project's visual direction. One of the most enjoyable aspects of this project was discovering efficient ways to achieve complex cinematic visuals without unnecessarily increasing production time. Rather than relying solely on highly detailed models, I combined sculpting, procedural techniques, strategic texturing, and compositing to "cheat" the final look. Seeing how much the compositing elevated every scene reinforced how important the final stage of the pipeline is in bringing a cinematic vision together.",
    challenges: "One of the biggest technical challenges was developing the baby's skin shader. I wanted to achieve a semi-translucent appearance with multiple layers of subsurface scattering to simulate realistic skin. While the effect was technically successful, it pushed the design too far and made the baby appear overly disturbing. After several iterations, the shader was simplified to maintain the intended unsettling atmosphere without becoming visually distracting. Another challenge came during the creation of Yggdrasil. Attempting to build the entire tree through polygon modeling quickly became impractical due to its complex organic forms. Transitioning the workflow to ZBrush allowed me to sculpt the intricate details more naturally before bringing the asset back into Blender for procedural foliage generation, resulting in a workflow that was both faster and produced a higher-quality final result. Overall, this project was an opportunity to experiment creatively while collaborating closely with the team. It encouraged me to explore different workflows, combine multiple software packages, and discover practical techniques for producing cinematic visuals efficiently. More than anything, it reinforced that strong compositing can transform well-crafted assets into a cohesive and visually compelling final film.",
    gallery: [
      "media/projects/03/pseudo styleframe 1.jpg",
      "media/projects/03/pseudo styleframe 2.jpg",
      "media/projects/03/pseudo styleframe 3.jpg",
      "media/projects/03/pseudo styleframe 4.jpg",
      "media/projects/03/pseudo styleframe 5.jpg",
      "media/projects/03/pseudo styleframe 6.jpg"
    ],
    externalEmbed: "https://www.behance.net/embed/project/243513993?ilo0=1",
    externalEmbedLabel: "Full Breakdown on Behance"
  }
  // Add projects 04 through 15 the same way — copy a block above this line,
  // paste it here, give it a new id, and fill in your details.
];
