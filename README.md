# Shwesh Dubey — Developer Journey Portfolio

An interactive 3D scrollytelling portfolio built with vanilla HTML/CSS/JS and Three.js
(no build step required). Scrolling drives a cinematic camera along a spline through
six stations: **Home → About → Education → Skills → Projects → Contact**.

## Run it locally

Because it uses ES modules, open it through a local server (not `file://`):

```bash
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, VS Code "Live Server", etc.).

## Structure

```
index.html              Page shell: loading screen, canvas mount, nav, section content
css/style.css            Design tokens, glassmorphism, layout, responsive + reduced-motion rules
js/main.js                Entry point — wires everything together
js/three/
  SceneManager.js         Renderer, camera, render loop, device-tier detection
  CameraPath.js            The 6-waypoint camera spline (position + look-at)
  Environment.js           Geometry for each station (tower, learning stack, tech ring, lab, beacon)
  Lighting.js               Ambient + directional rig
  Particles.js               Drifting atmospheric particle field
js/ScrollController.js    Reads scroll position → global progress 0..1 → feeds the camera + overlay fades
js/ui/
  Loader.js                Loading screen progress
  Typewriter.js              Hero role typewriter
  Navigation.js               Floating nav + progress rail
  ProjectModal.js              Project Lab list + detail modal
js/data/projects.js       Single source of truth for all 15 projects
js/utils/math.js          clamp/lerp/smoothstep/reduced-motion helpers
```

## Assets referenced but not included

The brief mentioned these files; none were uploaded, so the site currently runs
without them (the 3D scene is the visual background, so nothing is broken):

- `assets/Shwesh-Dubey-Resume-WD.pdf` — the **Download CV** button in the Contact
  section already points here. Drop the real PDF into `/assets` and it will work.
- `shwesh-blue-img-square.webp`, `201735-916310640_medium.mp4`, `IDR-ICON-NO-BG.png`
  were not used, since the 3D environment itself is the hero visual and no section
  in this build calls for a profile photo, background video, or the RiskCube logo.
  If you'd like a photo worked into the About / Contact glass panels, add the file
  to `/assets` and it can be wired in.

## Notes on the 3D approach

Rather than modelling literal 3D objects for every icon or project, the scene uses a
small set of abstract, premium-feeling structures (a central tower, a floating glass
slab, a learning "stack", a rotating tech ring, a lab node-grid, a calm beacon) that
the camera glides between. Actual content (bio text, skills, the 15 project cards,
contact details) renders as glass-panel HTML overlays synced to camera position —
this keeps text sharp and accessible (screen readers, zoom, selection) while the
canvas stays purely atmospheric. The Project Lab section pairs a fixed cinematic
camera view with its own scrollable glass card list so all 15 projects stay easy to
scan without inflating the page's scroll length.

Device tier detection (core count / memory / mobile UA) scales particle count,
antialiasing and pixel ratio; `prefers-reduced-motion` disables camera smoothing,
particle drift and the typewriter animation in favor of instant states.
