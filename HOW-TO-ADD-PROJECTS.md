# How to add a project — step by step

You only ever need to touch **one file** to add a project: `projects-data.js`.
You never need to create or edit HTML pages for individual projects anymore.

---

## Step 1 — Prepare your images

For each project, pick:
- 1 **cover image** (this shows on thumbnails and at the top of the project page)
- 4 **gallery images** (more detail shots, process work, etc. — you can add more or fewer than 4 if you want, see Step 4)

Before uploading, compress/resize them so the site stays fast:
- Resize so the longest side is around 2000px (most art software can "export/resize image" — Photoshop, Procreate, etc. all do this)
- Save as JPG, not PNG, unless you specifically need transparency
- Aim for each file under ~1-2MB. If you're not sure how, just ask me to help compress a batch once you have them ready.

## Step 2 — Make a folder for the project

Inside `media/projects/`, make a new folder named after the project's number.

Example, for your 4th project:
```
media/projects/04/
```

Put your 5 images inside it, named clearly:
```
media/projects/04/cover.jpg
media/projects/04/gallery-1.jpg
media/projects/04/gallery-2.jpg
media/projects/04/gallery-3.jpg
media/projects/04/gallery-4.jpg
```

(The exact filenames don't matter as long as they match what you type in Step 3 — but keeping this pattern makes it easy to stay consistent across 15 projects.)

## Step 3 — Add the project info

Open `projects-data.js`. You'll see a list of project blocks that look like this:

```js
{
  id: "01",
  name: "Project Name",
  role: "Environment Art",
  tagline: "one-line tagline goes here",
  tools: "Blender, Photoshop",
  year: "2026",
  type: "Personal / Client / Studio",
  cover: "media/projects/01/cover.jpg",
  overview: "Short overview paragraph...",
  process: "Talk through your approach...",
  challenges: "Optional: a specific problem you solved...",
  gallery: [
    "media/projects/01/gallery-1.jpg",
    "media/projects/01/gallery-2.jpg",
    "media/projects/01/gallery-3.jpg",
    "media/projects/01/gallery-4.jpg"
  ]
},
```

To add project #4:
1. Copy one whole block (from `{` to the `},` at the end).
2. Paste it just before the closing `];` at the bottom of the list.
3. Change `id: "01"` to `id: "04"` (must be unique — don't reuse a number).
4. Fill in your own text for `name`, `role`, `tagline`, `tools`, `year`, `type`, `overview`, `process`, `challenges`.
5. Update the `cover` and `gallery` paths to point at your new `media/projects/04/` folder.
6. Save the file.

That's it — no other file needs to change. The homepage, the projects grid page, and the individual project page all pull from this one list automatically.

## Step 4 — Want more or fewer than 4 gallery images?

Just add or remove lines inside the `gallery: [ ... ]` brackets for that project. Each line is one image path, separated by a comma — except the last one, which has no trailing comma.

## A few rules to avoid breaking things

- Every `id` must be unique — don't have two projects with `id: "04"`.
- Keep the quote marks `" "` around every piece of text.
- Every block except the very last one needs a comma `,` right after its closing `}`.
- If a project page shows broken images, double check the file path in `projects-data.js` exactly matches the real filename (capitalization matters — `Cover.jpg` and `cover.jpg` are different files to a web browser).

## Optional: using a video instead of an image at the top of a project

If a project's main visual is a video (like a showreel clip or animation), you can embed
one from YouTube or Vimeo instead of a static cover image. Add a `coverVideo` field to
that project's block:

```js
coverVideo: "https://www.youtube.com/embed/VIDEO_ID_HERE",
```

How to get this URL from YouTube: open the video, click Share → Embed, and copy just the
`src="..."` link from inside the `<iframe>` code — that's the URL you paste in.

Keep the `cover:` field too, even when using `coverVideo` — it's still used as the
thumbnail image on the homepage and the all-projects grid (video thumbnails can't be
generated automatically everywhere). For YouTube specifically, you can just use:
```
cover: "https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg"
```
which pulls YouTube's own auto-generated thumbnail — no need to save or upload anything.

## Optional: embedding a Behance (or other) breakdown

If you have a more detailed breakdown elsewhere (like a Behance case study) that you want
linked at the bottom of the project page, add:

```js
externalEmbed: "https://www.behance.net/embed/project/XXXXXXX?ilo0=1",
externalEmbedLabel: "Full Breakdown on Behance",
```

Get the embed URL the same way — on Behance, click the project's Share/Embed option and
copy the `src="..."` link. Leave both fields out entirely if a project doesn't have one.

## How the pieces fit together

- `projects-data.js` — your project info (the only file you edit regularly)
- `project.html` — the single template that displays any project's details, based on a `?id=` in the URL (e.g. `project.html?id=04`)
- `project-render.js` — the code that reads your data and builds the page (you shouldn't need to touch this)
- `projects.html` — the "all projects" grid, builds itself from your data automatically
- `index.html` — homepage, shows your first 3 projects as "Featured" automatically (reorder the list in `projects-data.js` to change which ones are featured)
