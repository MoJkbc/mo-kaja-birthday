(function () {
  const field = document.getElementById('seaField');
  if (!field) return;

  const PALETTE = [
    'rgba(162, 210, 255, 0.55)',
    'rgba(189, 224, 254, 0.5)',
    'rgba(107, 185, 210, 0.45)',
    'rgba(224, 177, 203, 0.5)',
    'rgba(190, 149, 196, 0.45)',
    'rgba(159, 134, 192, 0.4)',
    'rgba(130, 210, 200, 0.45)',
    'rgba(200, 220, 240, 0.4)',
  ];

  function fish1(color) {
    return `<svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20 Q20 8, 40 10 Q58 10, 62 20 Q58 30, 40 30 Q20 32, 12 20Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M62 20 L74 10 L74 30Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="28" cy="18" r="2" fill="${color}"/>
      <path d="M38 16 Q42 14, 46 16" stroke="${color}" stroke-width="1" fill="none" stroke-linecap="round"/>
      <path d="M36 22 Q42 24, 48 22" stroke="${color}" stroke-width="1" fill="none" stroke-linecap="round"/>
    </svg>`;
  }

  function fish2(color) {
    return `<svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24 Q14 6, 32 8 Q48 8, 52 18 Q54 24, 52 30 Q48 40, 32 40 Q14 42, 8 24Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M52 24 L62 14 Q60 24, 62 34Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="22" cy="20" r="2.5" fill="${color}"/>
      <path d="M30 14 L30 34" stroke="${color}" stroke-width="1" stroke-dasharray="2 3" stroke-linecap="round"/>
      <path d="M38 12 L38 36" stroke="${color}" stroke-width="1" stroke-dasharray="2 3" stroke-linecap="round"/>
    </svg>`;
  }

  function fish3(color) {
    return `<svg viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16 C12 6, 24 4, 34 8 C42 10, 46 14, 46 16 C46 18, 42 22, 34 24 C24 28, 12 26, 6 16Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M46 16 L54 8 L52 16 L54 24Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="18" cy="14" r="1.8" fill="${color}"/>
      <path d="M26 10 Q30 16, 26 22" stroke="${color}" stroke-width="1" fill="none" stroke-linecap="round"/>
    </svg>`;
  }

  function jellyfish(color) {
    return `<svg viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 28 Q8 8, 24 8 Q40 8, 40 28 Q34 32, 24 30 Q14 32, 8 28Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M14 30 Q12 42, 14 52" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M20 30 Q22 44, 18 56" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M28 30 Q26 44, 30 56" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M34 30 Q36 42, 34 52" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <circle cx="18" cy="18" r="1.5" fill="${color}"/>
      <circle cx="28" cy="18" r="1.5" fill="${color}"/>
    </svg>`;
  }

  function starfish(color) {
    return `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4 L28 18 L42 16 L32 26 L38 40 L24 32 L10 40 L16 26 L6 16 L20 18Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="22" r="3" stroke="${color}" stroke-width="1" fill="none"/>
    </svg>`;
  }

  function seahorse(color) {
    return `<svg viewBox="0 0 36 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6 Q30 6, 28 16 Q26 22, 20 24 Q14 26, 14 32 Q14 38, 20 40 Q26 42, 24 48 Q22 54, 16 56 Q10 58, 10 52" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M20 6 Q16 2, 12 6" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <circle cx="24" cy="12" r="1.5" fill="${color}"/>
      <path d="M14 32 L8 30" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
      <path d="M14 36 L8 35" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
      <path d="M16 40 L10 40" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
    </svg>`;
  }

  function shell(color) {
    return `<svg viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4 Q38 8, 40 28 Q38 36, 22 36 Q6 36, 4 28 Q2 8, 22 4Z" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M22 4 L20 36" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
      <path d="M22 4 Q14 18, 8 32" stroke="${color}" stroke-width="1" fill="none" stroke-linecap="round"/>
      <path d="M22 4 Q30 18, 36 32" stroke="${color}" stroke-width="1" fill="none" stroke-linecap="round"/>
    </svg>`;
  }

  function bubbles(color) {
    return `<svg viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="8" stroke="${color}" stroke-width="1.2" fill="none"/>
      <circle cx="12" cy="32" r="5" stroke="${color}" stroke-width="1.2" fill="none"/>
      <circle cx="28" cy="38" r="6" stroke="${color}" stroke-width="1.2" fill="none"/>
      <circle cx="18" cy="50" r="3.5" stroke="${color}" stroke-width="1.2" fill="none"/>
    </svg>`;
  }

  function wave(color) {
    return 'canvas';
  }

  function createWaveCanvas(color) {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 120;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const seed = Math.random() * 100;

    // baseY: resting centre, vertAmp: how far it bobs up/down
    const layers = [
      { baseY: 34,  speed: 1.2, amp: 16, freq: 0.014, vertSpeed: 0.38, vertAmp: 10, lineWidth: 2,   alpha: 0.65 },
      { baseY: 86,  speed: 0.8, amp: 12, freq: 0.016, vertSpeed: 0.52, vertAmp:  8, lineWidth: 1.5, alpha: 0.42 },
    ];

    function draw(t) {
      ctx.clearRect(0, 0, w, 120);
      const time = t * 0.001 + seed;

      for (const layer of layers) {
        // whole line bobs vertically
        const vertOffset = Math.sin(time * layer.vertSpeed) * layer.vertAmp;
        // amplitude breathes over time + varies along x
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const phase = time * layer.speed;
          const globalSwell = Math.sin(time * 0.22) * 0.6 + Math.sin(time * 0.11) * 0.4;
        const localAmp = layer.amp * (0.25 + 0.75 * Math.max(0, globalSwell))
          + Math.sin(time * 0.35 + x * 0.004) * (layer.amp * 0.4);
          const y = layer.baseY + vertOffset
            + Math.sin(phase + x * layer.freq) * localAmp
            + Math.sin(phase * 0.55 + x * layer.freq * 0.68) * (localAmp * 0.38);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color.replace(/[\d.]+\)$/, layer.alpha + ')');
        ctx.lineWidth = layer.lineWidth;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
    return canvas;
  }

  function octopus(color) {
    return `<svg viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 26 Q12 10, 28 10 Q44 10, 44 26 Q44 34, 36 36" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M12 26 Q12 34, 20 36" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M14 34 Q10 44, 6 52" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M20 36 Q18 46, 14 54" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M26 37 Q26 48, 24 56" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M32 37 Q34 48, 32 56" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M36 36 Q40 46, 42 54" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path d="M40 34 Q46 44, 50 52" stroke="${color}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <circle cx="22" cy="22" r="2" fill="${color}"/>
      <circle cx="34" cy="22" r="2" fill="${color}"/>
    </svg>`;
  }

  const CREATURES = {
    fish1: { build: fish1, aspect: 2 },
    fish2: { build: fish2, aspect: 1.33 },
    fish3: { build: fish3, aspect: 1.75 },
    jellyfish: { build: jellyfish, aspect: 0.75 },
    starfish: { build: starfish, aspect: 1 },
    seahorse: { build: seahorse, aspect: 0.56 },
    shell: { build: shell, aspect: 1.1 },
    bubbles: { build: bubbles, aspect: 0.71 },
    wave: { build: wave, aspect: 3.57 },
    octopus: { build: octopus, aspect: 0.875 },
  };

  const creatureTypes = ['fish1','fish2','fish3','jellyfish','seahorse','starfish','octopus','shell','bubbles'];

  const positions = [
    { type: 'fish1',     top: 5,  left: 82, size: 72, rot: -4 },
    { type: 'jellyfish', top: 14, left: 5,  size: 56, rot: 5 },
    { type: 'fish2',     top: 24, left: 88, size: 64, rot: -5 },
    { type: 'starfish',  top: 33, left: 6,  size: 36, rot: 15 },
    { type: 'octopus',   top: 42, left: 90, size: 52, rot: 4 },
    { type: 'fish3',     top: 50, left: 4,  size: 68, rot: 3 },
    { type: 'seahorse',  top: 58, left: 91, size: 52, rot: -4 },
    { type: 'shell',     top: 66, left: 7,  size: 42, rot: -12 },
    { type: 'fish1',     top: 74, left: 87, size: 72, rot: 4 },
    { type: 'bubbles',   top: 82, left: 5,  size: 34, rot: 0 },
    { type: 'fish2',     top: 90, left: 90, size: 60, rot: -3 },
    { type: 'jellyfish', top: 96, left: 6,  size: 50, rot: -5 },
  ];

  positions.forEach((p, i) => {
    const creature = CREATURES[p.type];
    if (!creature) return;

    const el = document.createElement('div');
    const drift = i % 2 === 0 ? 'drift-slow' : 'drift-med';
    el.className = `sea-doodle sea-doodle--${p.type} ${drift}`;
    el.style.top = p.top + '%';
    el.style.left = p.left + '%';
    el.style.width = Math.round(p.size * creature.aspect) + 'px';
    el.style.setProperty('--doodle-rot', p.rot + 'deg');
    el.style.animationDelay = `${-(i * 1.7)}s`;

    const color = PALETTE[i % PALETTE.length];
    el.innerHTML = creature.build(color);
    field.appendChild(el);
  });
})();
