import * as THREE from 'three';

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 'password-manager',
    name: 'Password Manager',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Cartoon_Lock_With_A_Digital_Code.svg',
    tech: ['Python'],
    description: 'A Python-based password manager that securely generates, stores, and retrieves passwords using encryption.',
    github: 'https://github.com/shweshd/Password-Manager',
    demo: null,
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/KeePassXC.svg',
    tech: ['Python'],
    description: 'A Python password generator that creates customizable, secure passwords using letters, numbers, and special characters.',
    github: 'https://github.com/shweshd/Password-Generator',
    demo: null,
  },
  {
    id: 'python-media-downloader',
    name: 'Python Media Downloader',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Crystal_Clear_app_download_manager.png',
    tech: ['Python', 'yt-dlp'],
    description: 'A Python-based media downloader that uses yt-dlp to download online videos and audio with a simple interface.',
    github: 'https://github.com/shweshd/Python-Media-Downloader',
    demo: null,
  },
  {
    id: 'alarm-clock',
    name: 'Alarm Clock',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Antu_org.kde.uptimeWidget.svg',
    tech: ['Python'],
    description: 'A Python alarm clock application that lets users set countdown timers and plays an alarm when the timer reaches zero.',
    github: 'https://github.com/shweshd/Alarm-Clock',
    demo: null,
  },
  {
    id: 'wpm-typing-test',
    name: 'WPM Typing Test',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Keyboard_Wikipedia_20_inspired_symbol.svg',
    tech: ['Python'],
    description: 'A terminal-based typing speed test built with Python that measures typing speed and accuracy.',
    github: 'https://github.com/shweshd/WPM-Typing-Test',
    demo: null,
  },
  {
    id: 'shortest-path-finder',
    name: 'Shortest Path Finder',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Shortest_path.svg',
    tech: ['Python', 'Algorithms', 'Curses'],
    description: 'A Python terminal-based pathfinding project that finds the shortest route through a maze using graph-search concepts.',
    github: 'https://github.com/shweshd/Shortest-Path-Finder',
    demo: null,
  },
  {
    id: 'python-quiz-game',
    name: 'Python Quiz Game',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Agn%C3%B3stico.svg',
    tech: ['Python'],
    description: 'A 10-question terminal-based quiz game built with Python to practice fundamental programming concepts.',
    github: 'https://github.com/shweshd/Quiz-Game',
    demo: null,
  },
  {
    id: 'rock-paper-scissors',
    name: 'Rock Paper Scissors',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg',
    tech: ['Python'],
    description: 'A Python-based Rock Paper Scissors game where the player competes against a computer-controlled opponent.',
    github: 'https://github.com/shweshd/Rock-Paper-Scissors',
    demo: null,
  },
  {
    id: 'number-guessing-game',
    name: 'Number Guessing Game',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Bingo.svg',
    tech: ['Python'],
    description: 'A Python game where players try to guess a randomly generated number with helpful hints after each attempt.',
    github: 'https://github.com/shweshd/Number-Guessing-Game',
    demo: null,
  },
  {
    id: 'turtle-racing',
    name: 'Turtle Racing',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Goldenturtle-heraldic.svg',
    tech: ['Python', 'Turtle'],
    description: 'A graphical Python racing game using the Turtle module, featuring multiple racers and randomized movement.',
    github: 'https://github.com/shweshd/Turtle-Racing',
    demo: null,
  },
  {
    id: 'python-slot-machine',
    name: 'Python Slot Machine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/601-slot-machine.svg',
    tech: ['Python'],
    description: 'A command-line slot machine game built with Python featuring betting logic, randomized symbols, winning lines, balance management, and input validation.',
    github: 'https://github.com/shweshd/Slot-Machine',
    demo: null,
  },
  {
    id: 'timed-math-challenge',
    name: 'Timed Math Challenge',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Arithmetic_symbols1.svg',
    tech: ['Python'],
    description: 'A Python command-line math game that generates random problems, measures completion time, tracks incorrect attempts, and handles invalid user input.',
    github: 'https://github.com/shweshd/Timed-math-challenge',
    demo: null,
  },
  {
    id: 'madlibs-generator',
    name: 'Mad Libs Generator',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Letters_template.svg',
    tech: ['Python'],
    description: 'A Python program that reads a story from a text file, detects placeholders, collects user input, and generates a customized story.',
    github: 'https://github.com/shweshd/Madlibs-Generator',
    demo: null,
  },
  {
    id: 'choose-your-own-adventure',
    name: 'Choose Your Own Adventure',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Treasure_map.svg',
    tech: ['Python'],
    description: 'An interactive text-based adventure game built with Python, where players make choices that determine the outcome.',
    github: 'https://github.com/shweshd/Choose-your-own-adventure',
    demo: null,
  },
  {
    id: 'riskcube-institute',
    name: 'RiskCube Institute Official Website',
    image: 'assets/IDR-ICON-NO-BG.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Clean, responsive front-end website for RiskCube Institute, designed for seamless user experience across all devices.',
    github: 'https://github.com/shweshd/RiskCube-Institute-Official-Website',
    demo: 'https://shweshd.github.io/RiskCube-Institute-Official-Website/',
  },
  {
    id: 'youtube-clone',
    name: 'YouTube Clone',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
    tech: ['HTML', 'CSS'],
    description: 'YouTube Homepage Clone — a responsive front-end replica built with pure HTML & CSS, down to the last detail.',
    github: 'https://github.com/shweshd/YouTube-Clone',
    demo: 'https://shweshd.github.io/YouTube-Clone/',
  },
];

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = {
  languages: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
  tools: ['VS Code', 'Git', 'GitHub'],
};

const SKILL_ICONS = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
};

function renderSkillChips() {
  const langList = document.getElementById('skill-grid-lang');
  const toolList = document.getElementById('skill-grid-tools');
  if (!langList || !toolList) return;

  const chip = (name) => {
    const li = document.createElement('li');
    li.className = 'skill-chip';
    li.tabIndex = 0;
    li.innerHTML = `
      <div class="skill-chip-icon">
        <img src="${SKILL_ICONS[name]}" alt="${name}" loading="lazy">
      </div>
      <span class="skill-chip-name">${name}</span>
    `;
    return li;
  };

  SKILLS.languages.forEach((skill) => langList.appendChild(chip(skill)));
  SKILLS.tools.forEach((tool) => toolList.appendChild(chip(tool)));
}

/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const lerp = (a, b, t) => a + (b - a) * t;

const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const windowRamp = (x, start, rampIn, rampOut, end) => {
  if (x <= start || x >= end) return 0;
  if (x < rampIn) return smoothstep(start, rampIn, x);
  if (x > rampOut) return 1 - smoothstep(rampOut, end, x);
  return 1;
};

const isReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   RESPONSIVE BREAKPOINT
========================================================= */

const MOBILE_BREAKPOINT = 768;
const isMobileViewport = () => window.innerWidth < MOBILE_BREAKPOINT;

/* =========================================================
   CAMERA PATH
========================================================= */

const POSITIONS = [
  new THREE.Vector3(0, 2.4, 20),
  new THREE.Vector3(7, 3.2, 6),
  new THREE.Vector3(0.5, 6.4, -26),
  new THREE.Vector3(9, 5.4, -46),
  new THREE.Vector3(0, 4.2, -70),
];

const TARGETS = [
  new THREE.Vector3(0, 3.2, 0),
  new THREE.Vector3(1.5, 3, -1),
  new THREE.Vector3(0.5, 5.4, -32),
  new THREE.Vector3(6, 3.6, -52),
  new THREE.Vector3(0, 3.6, -78),
];

class CameraPath {
  constructor() {
    this.positionCurve = new THREE.CatmullRomCurve3(POSITIONS, false, 'catmullrom', 0.4);
    this.targetCurve = new THREE.CatmullRomCurve3(TARGETS, false, 'catmullrom', 0.4);
    this.waypointCount = POSITIONS.length;
  }

  sample(t, outPos, outTarget) {
    const clamped = THREE.MathUtils.clamp(t, 0, 1);
    this.positionCurve.getPoint(clamped, outPos);
    this.targetCurve.getPoint(clamped, outTarget);
  }

  static waypointForT(t) {
    return THREE.MathUtils.clamp(Math.round(t * (POSITIONS.length - 1)), 0, POSITIONS.length - 1);
  }
}

/* =========================================================
   THREE.JS MATERIALS
========================================================= */

const COLOR_WHITE = 0xeef2f7;
const COLOR_ACCENT = 0x7fb2ff;
const COLOR_DIM = 0x3b4552;

function glassMaterial(color = COLOR_WHITE, opacity = 0.14) {
  return new THREE.MeshPhysicalMaterial({
    color, transparent: true, opacity,
    roughness: 0.15, metalness: 0.1,
    transmission: 0.4, thickness: 1.2, clearcoat: 0.6,
  });
}

function emissiveMaterial(color = COLOR_ACCENT, intensity = 1.1) {
  return new THREE.MeshStandardMaterial({
    color, emissive: color, emissiveIntensity: intensity,
    roughness: 0.35, metalness: 0.6,
  });
}

function metalMaterial(color = COLOR_DIM) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.8 });
}

/* =========================================================
   THREE.JS ENVIRONMENT — GROUND
========================================================= */

function buildGround() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#050607';
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = 'rgba(127,178,255,0.16)';
  ctx.lineWidth = 1;

  const step = 512 / 16;
  for (let i = 0; i <= 16; i++) {
    ctx.beginPath();
    ctx.moveTo(i * step, 0);
    ctx.lineTo(i * step, 512);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i * step);
    ctx.lineTo(512, i * step);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(size / 8, size / 2.2);

  const geo = new THREE.PlaneGeometry(size, size * 3.4);
  const mat = new THREE.MeshStandardMaterial({
    map: texture, color: 0x0a0c0f, roughness: 0.9, metalness: 0.1,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, -1.6, -50);
  return mesh;
}

/* =========================================================
   STARFIELD
========================================================= */

function buildStarfield(group) {
  const PARTICLE_COUNT = 1000;
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = new Float32Array(PARTICLE_COUNT * 3);
  const sizes = new Float32Array(PARTICLE_COUNT);
  const opacities = new Float32Array(PARTICLE_COUNT);
  const colors = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;

    positions[i3] = (Math.random() - 0.5) * 180;
    positions[i3 + 1] = Math.random() * 70 - 10;
    positions[i3 + 2] = Math.random() * -150 + 30;

    velocities[i3] = (Math.random() - 0.5) * 0.1;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.1;
    velocities[i3 + 2] = 0;

    sizes[i] = Math.random() * 1.5 + 0.3;
    opacities[i] = Math.random() * 0.5 + 0.1;

    const isCyan = Math.random() > 0.6;
    colors[i3] = isCyan ? 0 : 1;
    colors[i3 + 1] = isCyan ? 229 / 255 : 1;
    colors[i3 + 2] = 1;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('particleOpacity', new THREE.BufferAttribute(opacities, 1));
  geometry.setAttribute('particleColor', new THREE.BufferAttribute(colors, 3));

  // Soft circular particle texture
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;

  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.6, 'rgba(255,255,255,0.25)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);

  // Shader lets each particle keep its own size, color and opacity
  const material = new THREE.ShaderMaterial({
    uniforms: { pointTexture: { value: texture } },
    vertexShader: `
      attribute float size;
      attribute float particleOpacity;
      attribute vec3 particleColor;
      varying float vOpacity;
      varying vec3 vColor;
      void main() {
        vOpacity = particleOpacity;
        vColor = particleColor;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform sampler2D pointTexture;
      varying float vOpacity;
      varying vec3 vColor;
      void main() {
        vec4 tex = texture2D(pointTexture, gl_PointCoord);
        if (tex.a < 0.05) discard;
        gl_FragColor = vec4(vColor, tex.a * vOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const stars = new THREE.Points(geometry, material);
  stars.name = 'PortfolioStarfield';
  stars.userData.velocities = velocities;
  stars.userData.count = PARTICLE_COUNT;

  group.add(stars);
  return stars;
}

/* =========================================================
   HOME — DEVELOPER TOWER
========================================================= */

function buildTower(group) {
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(2.2, 2.6, 0.6, 8),
    metalMaterial()
  );
  base.position.set(0, -1.3, 0);
  group.add(base);

  const core = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 1.1, 7.5, 8),
    metalMaterial(0x22262c)
  );
  core.position.set(0, 2.5, 0);
  group.add(core);

  for (let i = 0; i < 5; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.25 + i * 0.02, 0.03, 8, 32),
      emissiveMaterial(COLOR_ACCENT, 1.4)
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, i * 1.7, 0);
    group.add(ring);
  }

  const beacon = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 24, 24),
    emissiveMaterial(COLOR_WHITE, 2)
  );
  beacon.position.set(0, 6.6, 0);
  group.add(beacon);

  const light = new THREE.PointLight(COLOR_ACCENT, 6, 20);
  light.position.set(0, 4, 2);
  group.add(light);
}

/* =========================================================
   NAME GLITCH HOVER SOUND
========================================================= */

const glitchSound = new Audio('assets/glitch.mp3');
glitchSound.volume = 0.2;
glitchSound.loop = true;

const glitchName = document.querySelector('.glitch');
if (glitchName) {
  glitchName.addEventListener('mouseenter', () => {
    glitchSound.currentTime = 0;
    glitchSound.play().catch(() => {});
  });

  glitchName.addEventListener('mouseleave', () => {
    glitchSound.pause();
    glitchSound.currentTime = 0;
  });
}

/* =========================================================
   ABOUT — GLASS SLAB
========================================================= */

function buildAboutSlab(group) {
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 3.4, 0.15),
    glassMaterial(COLOR_WHITE, 0.16)
  );
  slab.position.set(3, 3, -1);
  slab.rotation.y = -0.35;
  group.add(slab);

  const frame = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.02, 8, 32),
    emissiveMaterial(COLOR_ACCENT, 1)
  );
  frame.position.set(3, 3, -0.9);
  frame.rotation.y = -0.35;
  group.add(frame);
}

/* =========================================================
   EDUCATION — LEARNING STACK
========================================================= */

function buildLearningStack(group) {
  const rackGroup = new THREE.Group();
  rackGroup.position.set(-8, 0, -12);

  for (let i = 0; i < 6; i++) {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.35, 1.4),
      metalMaterial(0x1b1e22)
    );
    bar.position.set(0, i * 0.55, 0);
    rackGroup.add(bar);

    const strip = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.04, 0.04),
      emissiveMaterial(COLOR_ACCENT, i % 2 === 0 ? 1.6 : 0.6)
    );
    strip.position.set(0, i * 0.55 + 0.2, 0.72);
    rackGroup.add(strip);
  }

  group.add(rackGroup);

  const light = new THREE.PointLight(COLOR_ACCENT, 4, 14);
  light.position.set(-8, 3, -10);
  group.add(light);
}

/* =========================================================
   SKILLS — TECHNOLOGY RING
========================================================= */

function buildTechRing(group) {
  const ringGroup = new THREE.Group();
  ringGroup.position.set(0.5, 5.4, -32);

  const count = 8;
  const radius = 4.2;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const mod = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.32, 0),
      emissiveMaterial(i % 2 === 0 ? COLOR_ACCENT : COLOR_WHITE, 1)
    );
    mod.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle * 2) * 0.6,
      Math.sin(angle) * radius
    );
    ringGroup.add(mod);
  }

  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.02, 8, 64),
    emissiveMaterial(COLOR_DIM, 0.6)
  );
  halo.rotation.x = Math.PI / 2;
  ringGroup.add(halo);

  group.add(ringGroup);
  ringGroup.userData.spin = true;
  group.userData.techRing = ringGroup;

  const light = new THREE.PointLight(COLOR_ACCENT, 5, 18);
  light.position.copy(ringGroup.position);
  group.add(light);
}

/* =========================================================
   PROJECTS — LAB
========================================================= */

function buildProjectLab(group) {
  const labGroup = new THREE.Group();
  labGroup.position.set(6, 0, -52);

  const cols = 5;
  const rows = 3;

  for (let x = 0; x < cols; x++) {
    for (let z = 0; z < rows; z++) {
      const node = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 1 + ((x + z) % 3) * 0.5, 0.7),
        glassMaterial(COLOR_WHITE, 0.18)
      );
      node.position.set((x - cols / 2) * 1.6, 0.4, (z - rows / 2) * 1.6);
      labGroup.add(node);

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 8),
        emissiveMaterial(COLOR_ACCENT, 1.6)
      );
      dot.position.set(node.position.x, node.position.y + 0.9, node.position.z);
      labGroup.add(dot);
    }
  }

  group.add(labGroup);
  group.userData.labGroup = labGroup;

  const light = new THREE.PointLight(COLOR_ACCENT, 5, 20);
  light.position.set(6, 4, -50);
  group.add(light);
}

/* =========================================================
   CONTACT — BEACON
   A single orb, visible from the start of the page as a
   small distant light. As the user scrolls into the final
   section it grows and glides into place — beside the
   content on desktop, behind it on mobile — instead of a
   second orb appearing separately.
========================================================= */

const BEACON_HOME_POSITION = new THREE.Vector3(0, 3.4, -78);

const BEACON_ARRIVAL = {
  desktop: new THREE.Vector3(4.2, 2.8, -82),
  mobile: new THREE.Vector3(0, 4.5, -86),
};

const BEACON_BASE_SCALE = 1;
const BEACON_ARRIVAL_SCALE = 4.7; // grows to contact-page size on arrival

function buildBeacon(group) {
  const beaconGroup = new THREE.Group();
  beaconGroup.name = 'ContactBeacon';

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 32, 32),
    emissiveMaterial(COLOR_WHITE, 1.4)
  );
  beaconGroup.add(orb);


  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.2, 0.015, 3, 100),
    emissiveMaterial(COLOR_ACCENT, 1)
  );
  ring.rotation.x = Math.PI / 4;
  beaconGroup.add(ring);

  // Soft glow — subtle while small, reads clearly once grown
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.63, 32, 32),
    new THREE.MeshBasicMaterial({
      color: COLOR_ACCENT, transparent: true, opacity: 0.07,
      side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
    })
  );
  beaconGroup.add(glow);

  const light = new THREE.PointLight(COLOR_WHITE, 5, 16);
  beaconGroup.add(light);

  beaconGroup.position.copy(BEACON_HOME_POSITION);

  beaconGroup.userData = {
    rotationSpeedY: 0.12,
    rotationSpeedZ: 0.025,
    currentScale: BEACON_BASE_SCALE,
  };

  group.add(beaconGroup);
  group.userData.beacon = beaconGroup;
}

/* =========================================================
   BUILD ENVIRONMENT
========================================================= */

function buildEnvironment(scene) {
  const group = new THREE.Group();
  scene.add(buildGround());

  buildTower(group);
  buildAboutSlab(group);
  buildLearningStack(group);
  buildTechRing(group);
  buildProjectLab(group);
  buildBeacon(group);
  buildStarfield(group);

  scene.add(group);
  return group;
}

/* =========================================================
   LIGHTING
========================================================= */

function buildLighting(scene) {
  const ambient = new THREE.AmbientLight(0x30363f, 1.1);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0xcfd9e6, 0.5);
  key.position.set(10, 20, 10);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x7fb2ff, 0.35);
  rim.position.set(-14, 6, -30);
  scene.add(rim);

  return { ambient, key, rim };
}

/* =========================================================
   PARTICLES
========================================================= */

class ParticleField {
  constructor(scene, count = 500) {
    this.count = count;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 1] = Math.random() * 16 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 30;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x9fc2ff, size: 0.035, transparent: true, opacity: 0.55, depthWrite: false,
    });

    this.points = new THREE.Points(geometry, material);
    scene.add(this.points);
  }

  update(delta) {
    this.points.rotation.y += delta * 0.01;

    const pos = this.points.geometry.attributes.position;
    for (let i = 0; i < this.count; i++) {
      const idx = i * 3 + 1;
      pos.array[idx] += delta * 0.06;
      if (pos.array[idx] > 14) pos.array[idx] = -2;
    }
    pos.needsUpdate = true;
  }

  setLowDetail() {
    this.points.visible = this.count > 0;
  }
}

/* =========================================================
   SCENE MANAGER
========================================================= */

class SceneManager {
  constructor(container) {
    this.container = container;
    this.reducedMotion = isReducedMotion();
    this.tier = this.detectTier();
    this.isMobile = isMobileViewport();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050607);
    this.scene.fog = new THREE.FogExp2(0x050607, 0.026);

    this.camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 0.1, 200
    );
    this.camera.position.set(0, 2.4, 20);

    this.renderer = new THREE.WebGLRenderer({
      antialias: this.tier !== 'low',
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.tier === 'low' ? 1.25 : 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    buildLighting(this.scene);
    this.environment = buildEnvironment(this.scene);

    this.particles = new ParticleField(
      this.scene,
      this.tier === 'low' ? 160 : this.tier === 'mid' ? 320 : 520
    );

    this.starfield = this.environment.getObjectByName('PortfolioStarfield');

    this.cameraPath = new CameraPath();
    this._pos = new THREE.Vector3();
    this._target = new THREE.Vector3();
    this._smoothPos = this.camera.position.clone();
    this._smoothTarget = new THREE.Vector3(0, 3, 0);

    this.progress = 0;
    this.activeIndex = 0;
    this.mouse = { x: 0, y: 0 };
    this.clock = new THREE.Clock();

    this._bindEvents();
  }

  detectTier() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return 'unsupported';

    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 4;
    const isMobileUA = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobileUA || cores <= 4 || mem <= 4) return 'low';
    if (cores <= 8) return 'mid';
    return 'high';
  }

  _bindEvents() {
    window.addEventListener('resize', () => this.onResize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.isMobile = isMobileViewport();
  }

  setProgress(progress) {
    this.progress = THREE.MathUtils.clamp(progress, 0, 1);
  }

  setActiveIndex(index) {
    this.activeIndex = THREE.MathUtils.clamp(index, 0, 4);
  }

  updateBeacon(delta) {
  const beacon = this.environment.userData.beacon;

  if (!beacon) return;

  const data = beacon.userData;

  // Slow rotation
  if (!this.reducedMotion) {
    beacon.rotation.y += delta * data.rotationSpeedY;
    beacon.rotation.z += delta * data.rotationSpeedZ;
  }

  // 0 = Home
  // 1 = Contact
  const arrival = THREE.MathUtils.smoothstep(
    this.progress,
    0.82,
    1.0
  );

  const arrivalLayout = this.isMobile
    ? BEACON_ARRIVAL.mobile
    : BEACON_ARRIVAL.desktop;

  // Move toward Contact
  const targetPos = new THREE.Vector3().lerpVectors(
    BEACON_HOME_POSITION,
    arrivalLayout,
    arrival
  );

  const posLerp = this.reducedMotion
    ? 1
    : Math.min(1, delta * 3);

  beacon.position.lerp(
    targetPos,
    posLerp
  );

  // Grow
  const targetScale = THREE.MathUtils.lerp(
    BEACON_BASE_SCALE,
    BEACON_ARRIVAL_SCALE,
    arrival
  );

  const scaleLerp = this.reducedMotion
    ? 1
    : 1 - Math.pow(0.001, delta);

  data.currentScale = THREE.MathUtils.lerp(
    data.currentScale,
    targetScale,
    scaleLerp
  );

  beacon.scale.setScalar(
    data.currentScale
  );

  // IMPORTANT:
  // Once we reach the very bottom, permanently lock
  // the orb to its final visible position and size.
  if (this.progress >= 0.999) {
    beacon.position.copy(arrivalLayout);

    data.currentScale =
      BEACON_ARRIVAL_SCALE;

    beacon.scale.setScalar(
      BEACON_ARRIVAL_SCALE
    );
  }
}

  updateStarfield(delta) {
    if (!this.starfield) return;

    const positions = this.starfield.geometry.attributes.position;
    const velocities = this.starfield.userData.velocities;
    const count = this.starfield.userData.count;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions.array[i3] += velocities[i3] * delta * 60;
      positions.array[i3 + 1] += velocities[i3 + 1] * delta * 60;

      if (positions.array[i3] < -90 || positions.array[i3] > 90) {
        positions.array[i3] = (Math.random() - 0.5) * 180;
      }

      if (positions.array[i3 + 1] < -10 || positions.array[i3 + 1] > 60) {
        positions.array[i3 + 1] = Math.random() * 70 - 10;
      }
    }

    positions.needsUpdate = true;
  }

  updateTechRing(delta) {
    const techRing = this.environment.userData.techRing;
    if (!techRing) return;
    techRing.rotation.y += delta * 0.15;
  }

  start() {
    const loop = () => {
      requestAnimationFrame(loop);
      const delta = Math.min(this.clock.getDelta(), 0.05);

      // Camera
      this.cameraPath.sample(this.progress, this._pos, this._target);
      const smoothFactor = this.reducedMotion ? 1 : Math.min(1, delta * 3.2);
      this._smoothPos.lerp(this._pos, smoothFactor);
      this._smoothTarget.lerp(this._target, smoothFactor);

      // Mouse parallax
      const parallaxX = this.reducedMotion ? 0 : this.mouse.x * 0.35;
      const parallaxY = this.reducedMotion ? 0 : this.mouse.y * 0.2;
      this.camera.position.set(
        this._smoothPos.x + parallaxX,
        this._smoothPos.y - parallaxY,
        this._smoothPos.z
      );
      this.camera.lookAt(this._smoothTarget);

      // Animations
      if (!this.reducedMotion) {
        this.particles.update(delta);
        this.updateBeacon(delta);
        this.updateStarfield(delta);
        this.updateTechRing(delta);
      }

      this.renderer.render(this.scene, this.camera);
    };

    loop();
  }
}

/* =========================================================
   LOADER
========================================================= */

class Loader {
  constructor() {
    this.el = document.getElementById('loader');
    this.fill = document.getElementById('loader-fill');
    this.percent = document.getElementById('loader-percent');
    this.value = 0;
  }

  set(pct) {
    this.value = Math.min(100, Math.max(this.value, pct));
    if (this.fill) this.fill.style.width = `${this.value}%`;
    if (this.percent) this.percent.textContent = `${Math.round(this.value)}%`;
  }

  finish() {
    this.set(100);
    document.body.style.overflow = '';
    setTimeout(() => {
      if (this.el) this.el.classList.add('is-hidden');
    }, 250);
  }

  lockScroll() {
    document.body.style.overflow = 'hidden';
  }
}

/* =========================================================
   NAVIGATION
========================================================= */

class Navigation {
  constructor({ sectionEls }) {
    this.sectionEls = sectionEls;
    this.navLinks = Array.from(document.querySelectorAll('.nav-link'));
    this.jumpLinks = Array.from(document.querySelectorAll('.nav-jump'));
    this.menuToggle = document.getElementById('menu-toggle');
    this.navList = document.getElementById('nav-list');
    this.progressFill = document.getElementById('progress-fill');
    this.progressLabel = document.getElementById('progress-label');

    this._bindJumps();
    this._bindMenu();
  }

  _bindJumps() {
    [...this.navLinks, ...this.jumpLinks].forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = Number(link.dataset.target);
        const target = this.sectionEls[idx];
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.closeMenu();
      });
    });
  }

  _bindMenu() {
    if (!this.menuToggle) return;
    this.menuToggle.addEventListener('click', () => {
      const isOpen = this.navList.classList.toggle('is-open');
      this.menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  closeMenu() {
    if (!this.navList) return;
    this.navList.classList.remove('is-open');
    if (this.menuToggle) this.menuToggle.setAttribute('aria-expanded', 'false');
  }

  update(progress, activeIndex) {
    if (this.progressFill) this.progressFill.style.height = `${progress * 100}%`;

    if (this.progressLabel) {
      this.progressLabel.textContent = `${String(activeIndex + 1).padStart(2, '0')} / 05`;
    }

    this.navLinks.forEach((link) => {
      link.classList.toggle('is-active', Number(link.dataset.target) === activeIndex);
    });
  }
}

/* =========================================================
   PROJECT GALLERY / MODAL
========================================================= */

class ProjectGallery {
  constructor(projects) {
    this.projects = projects;
    this.grid = document.getElementById('project-grid');
    this.modal = document.getElementById('project-modal');
    this.modalTitle = document.getElementById('modal-title');
    this.modalDesc = document.getElementById('modal-desc');
    this.modalTags = document.getElementById('modal-tags');
    this.modalGithub = document.getElementById('modal-github');
    this.modalDemo = document.getElementById('modal-demo');
    this.closeBtn = document.getElementById('modal-close');
    this.lastFocused = null;

    if (!this.grid) return;

    this.grid.addEventListener('wheel', (e) => {
      const atTop = this.grid.scrollTop === 0;
      const atBottom = this.grid.scrollTop + this.grid.clientHeight >= this.grid.scrollHeight - 1;

      if (!((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0))) {
        e.stopPropagation();
      }
    }, { passive: true });

    this._renderGrid();
    this._bindClose();
  }

  _renderGrid() {
    this.projects.forEach((p) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'project-card';
      button.type = 'button';

      button.innerHTML = `
        <div class="project-card-header">
          <div class="project-title">
            <img class="project-logo" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
            <p class="project-card-name">${p.name}</p>
          </div>
        </div>
        <p class="project-card-desc">${p.description}</p>
        <ul class="tag-list">
          ${p.tech.map((t) => `<li class="tag">${t}</li>`).join('')}
        </ul>
      `;

      button.addEventListener('click', () => this.open(p, button));
      li.appendChild(button);
      this.grid.appendChild(li);
    });
  }

  open(project, triggerEl) {
    this.lastFocused = triggerEl || document.activeElement;
    this.modalTitle.textContent = project.name;
    this.modalDesc.textContent = project.description;
    this.modalTags.innerHTML = project.tech.map((t) => `<li class="tag">${t}</li>`).join('');
    this.modalGithub.href = project.github;

    if (project.demo) {
      this.modalDemo.href = project.demo;
      this.modalDemo.classList.remove('hidden');
    } else {
      this.modalDemo.classList.add('hidden');
    }

    this.modal.hidden = false;
    requestAnimationFrame(() => this.modal.classList.add('is-open'));
    this.closeBtn.focus();

    document.addEventListener('keydown', this._escHandler);
  }

  close = () => {
    this.modal.classList.remove('is-open');
    document.removeEventListener('keydown', this._escHandler);

    setTimeout(() => {
      this.modal.hidden = true;
      this.lastFocused?.focus();
    }, 300);
  };

  _escHandler = (e) => {
    if (e.key === 'Escape') this.close();
  };

  _bindClose() {
    this.closeBtn.addEventListener('click', this.close);
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
  }
}

/* =========================================================
   TYPEWRITER
========================================================= */

class Typewriter {
  constructor(el, words, { typeSpeed = 70, deleteSpeed = 40, hold = 1400 } = {}) {
    this.el = el;
    this.words = words;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.hold = hold;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
  }

  start() {
    if (!this.el) return;

    if (isReducedMotion()) {
      this.el.textContent = this.words[0];
      return;
    }

    this._tick();
  }

  _tick() {
    const word = this.words[this.wordIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.el.textContent = word.slice(0, this.charIndex);

      if (this.charIndex === word.length) {
        this.deleting = true;
        return setTimeout(() => this._tick(), this.hold);
      }

      return setTimeout(() => this._tick(), this.typeSpeed);
    }

    this.charIndex--;
    this.el.textContent = word.slice(0, this.charIndex);

    if (this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    setTimeout(() => this._tick(), this.deleteSpeed);
  }
}

/* =========================================================
   SCROLL CONTROLLER
========================================================= */

class ScrollController {
  constructor({ sceneManager, sections, onProgress }) {
    this.sceneManager = sceneManager;
    this.sections = sections;
    this.onProgress = onProgress;
    this.progress = 0;
    this.ticking = false;

    window.addEventListener('scroll', () => this._requestTick(), { passive: true });
    window.addEventListener('resize', () => this._update());
  }

  _requestTick() {
    if (this.ticking) return;
    this.ticking = true;

    requestAnimationFrame(() => {
      this._update();
      this.ticking = false;
    });
  }

  _update() {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    const p = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;

    this.progress = p;
    this.sceneManager.setProgress(p);

    this.sections.forEach(({ el, contentEl }) => {
      if (!contentEl) return;

      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - window.innerHeight / 2);
      const visible = dist < window.innerHeight * 0.55;

      contentEl.classList.toggle('is-visible', visible);
    });

    this.onProgress?.(p);
  }

  init() {
    this._update();
  }
}

/* =========================================================
   CUSTOM CURSOR
========================================================= */

function setupCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.25;
    ringY += (mouseY - ringY) * 0.25;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const interactiveSelector = 'a, button, .skill-chip, .project-card, .modal-close';

  document.addEventListener('mouseover', (event) => {
    if (event.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (event) => {
    if (event.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* =========================================================
   ABOUT REVEAL
========================================================= */

function setupAboutReveal() {
  const lines = Array.from(document.querySelectorAll('#about-lines .reveal-line'));
  if (!lines.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idx = lines.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('is-in'), idx * 160);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  lines.forEach((line) => observer.observe(line));
}

/* =========================================================
   INITIALIZATION
========================================================= */

async function init() {
  const loader = new Loader();
  loader.lockScroll();
  loader.set(12);

  setupCustomCursor();

  const container = document.getElementById('scene-container');
  if (!container) {
    console.error('Scene container not found.');
    loader.finish();
    return;
  }

  const sceneManager = new SceneManager(container);
  loader.set(55);

  renderSkillChips();
  setupAboutReveal();

  new Typewriter(
    document.getElementById('typewriter-target'),
    ['Python Developer', 'Backend Developer', 'Software Engineer']
  ).start();

  new ProjectGallery(projects);
  loader.set(80);

  const sectionEls = Array.from(document.querySelectorAll('.stop'));
  const sections = sectionEls.map((el) => ({
    el,
    index: Number(el.dataset.index),
    contentEl: el.querySelector('.stop-content'),
  }));

  const navigation = new Navigation({ sectionEls });

  const scrollController = new ScrollController({
    sceneManager,
    sections,
    onProgress: (p) => {
      const activeIndex = CameraPath.waypointForT(p);
      navigation.update(p, activeIndex);
      sceneManager.setActiveIndex(activeIndex);
    },
  });

  sceneManager.start();
  scrollController.init();

  loader.set(100);
  loader.finish();
}

/* =========================================================
   START APPLICATION
========================================================= */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}