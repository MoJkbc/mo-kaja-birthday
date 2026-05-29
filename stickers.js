(function () {
  const field = document.getElementById('stickerField');
  if (!field) return;

  /* Vibrant collage palette — CTA labels + reference hues */
  const LABEL_COLORS = [
    '#ff9b4a',
    '#6ec8ff',
    '#b8f55a',
    '#ffe566',
    '#ff6bcb',
    '#9f86c0',
    '#e0b1cb',
    '#f5c842',
    '#7b5cff',
    '#fff8ef',
  ];
  const STROKE = '#ffffff';
  const STROKE_SHADOW = '#231942';
  const BIT_FILL = '#1a1430';

  const STICKERS = {
    burst: { id: 'burst', build: burstSvg },
    wave: { id: 'wave', build: waveSvg },
    squiggle: { id: 'squiggle', build: squiggleSvg },
    circle: { id: 'circle', build: circleSvg },
    dots: { id: 'dots', build: dotsGridSvg },
    heart: { id: 'heart', build: heartSvg },
    nestedHeart: { id: 'nested-heart', build: nestedHeartSvg },
    arch: { id: 'arch', build: archSvg },
    pill: { id: 'pill', build: pillSvg },
    stripedPill: { id: 'striped-pill', build: stripedPillSvg },
    trapezoid: { id: 'trapezoid', build: trapezoidSvg },
    sunburst: { id: 'sunburst', build: sunburstSvg },
    bit: { id: 'bit', build: bitSvg },
  };

  const widthScale = {
    squiggle: 1.85,
    wave: 1.55,
    pill: 1.35,
    'striped-pill': 1.35,
    trapezoid: 1.15,
    dots: 1.35,
    bit: 1,
    'nested-heart': 1.05,
  };

  /* Fixed viewport positions — one static layer, no scroll swapping */
  const places = [
    { type: 'burst', top: 10, left: 5, size: 46, rot: -22, layer: 'front' },
    { type: 'bit', top: 18, left: 12, size: 30, rot: 0, layer: 'front', icon: '+' },
    { type: 'nestedHeart', top: 28, left: 92, size: 38, rot: 12, layer: 'front' },
    { type: 'arch', top: 38, left: 6, size: 34, rot: -14, layer: 'mid' },
    { type: 'trapezoid', top: 48, left: 90, size: 32, rot: 10, layer: 'mid' },
    { type: 'stripedPill', top: 56, left: 10, size: 22, rot: -24, layer: 'mid' },
    { type: 'squiggle', top: 64, left: 88, size: 28, rot: 8, layer: 'mid' },
    { type: 'sunburst', top: 72, left: 50, size: 32, rot: -14, layer: 'mid' },
    { type: 'dots', top: 80, left: 7, size: 30, rot: 0, layer: 'back' },
    { type: 'pill', top: 86, left: 85, size: 22, rot: -18, layer: 'back' },
    { type: 'circle', top: 22, left: 78, size: 24, rot: 20, layer: 'back' },
    { type: 'wave', top: 52, left: 4, size: 24, rot: 6, layer: 'back' },
    { type: 'heart', top: 92, left: 58, size: 28, rot: -8, layer: 'back' },
    { type: 'bit', top: 44, left: 16, size: 28, rot: 0, layer: 'back', icon: '=' },
  ];

  function burstPoints(cx, cy, outer, inner, n) {
    const pts = [];
    for (let i = 0; i < n * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (Math.PI / 2) * -1 + (i * Math.PI) / n;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    return pts.map((p) => p.join(',')).join(' ');
  }

  function burstSvg(fill) {
    const pts = burstPoints(32, 32, 28, 12, 8);
    return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${pts}" fill="${fill}" stroke="${STROKE}" stroke-width="4" stroke-linejoin="round"/>
    </svg>`;
  }

  function waveSvg(fill) {
    return `<svg viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16 C16 16, 16 6, 28 16 S40 26, 52 16 S64 6, 76 16 S88 26, 92 16"
        stroke="${STROKE_SHADOW}" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M4 16 C16 16, 16 6, 28 16 S40 26, 52 16 S64 6, 76 16 S88 26, 92 16"
        stroke="${fill}" stroke-width="6" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  function squiggleSvg(fill) {
    const d = 'M6 22 C22 6, 38 34, 54 14 S90 8, 90 20';
    return `<svg viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${d}" stroke="${STROKE_SHADOW}" stroke-width="11" stroke-linecap="round" fill="none"/>
      <path d="${d}" stroke="${fill}" stroke-width="7" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  function circleSvg(fill) {
    return `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" fill="${fill}" stroke="${STROKE}" stroke-width="3.5"/>
    </svg>`;
  }

  function dotsGridSvg(fill) {
    let circles = '';
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 6; col++) {
        circles += `<circle cx="${10 + col * 14}" cy="${10 + row * 14}" r="4.5" fill="${fill}"/>`;
      }
    }
    return `<svg viewBox="0 0 92 68" fill="none" xmlns="http://www.w3.org/2000/svg">${circles}</svg>`;
  }

  function heartPath() {
    return 'M32 54 C32 54, 10 40, 10 26 C10 16, 18 10, 32 20 C46 10, 54 16, 54 26 C54 40, 32 54, 32 54 Z';
  }

  function heartSvg(fill) {
    return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${heartPath()}" fill="${fill}" stroke="${STROKE}" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>`;
  }

  function nestedHeartSvg(fill, innerFill) {
    return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="${heartPath()}" fill="${fill}" stroke="${STROKE}" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M32 46 C32 46, 18 36, 18 28 C18 22, 22 18, 32 24 C42 18, 46 22, 46 28 C46 36, 32 46, 32 46 Z"
        fill="${innerFill || '#b8f55a'}" stroke="${STROKE}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  }

  function archSvg(fill) {
    return `<svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 52 L8 22 A 16 16 0 0 1 40 22 L40 52 Z"
        fill="${fill}" stroke="${STROKE}" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>`;
  }

  function pillSvg(fill) {
    return `<svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="108" height="28" rx="14" fill="${fill}" stroke="${STROKE}" stroke-width="3.5"/>
    </svg>`;
  }

  function stripedPillSvg(fill) {
    let stripes = '';
    for (let i = 0; i < 14; i++) {
      const x = 8 + i * 8;
      stripes += `<rect x="${x}" y="12" width="4" height="24" rx="2" fill="${STROKE}" opacity="0.4"/>`;
    }
    return `<svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="108" height="28" rx="14" fill="${fill}" stroke="${STROKE}" stroke-width="3.5"/>
      ${stripes}
    </svg>`;
  }

  function trapezoidSvg(fill) {
    return `<svg viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 46 L14 8 L50 8 L42 46 Z"
        fill="${fill}" stroke="${STROKE}" stroke-width="3.5" stroke-linejoin="round"/>
    </svg>`;
  }

  function sunburstSvg(fill) {
    const cx = 32;
    const cy = 32;
    let lines = '';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const x2 = cx + Math.cos(a) * 22;
      const y2 = cy + Math.sin(a) * 22;
      lines += `<line x1="${cx}" y1="${cy}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${STROKE_SHADOW}" stroke-width="2.5" stroke-linecap="round"/>`;
    }
    return `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${cx}" cy="${cy}" r="24" fill="${fill}" stroke="${STROKE}" stroke-width="3.5"/>
      ${lines}
    </svg>`;
  }

  function bitSvg(fill, icon) {
    const sym = icon === '=' ? '=' : '+';
    return `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="15" fill="${BIT_FILL}" stroke="${STROKE}" stroke-width="2.5"/>
      <text x="20" y="21" text-anchor="middle" dominant-baseline="middle"
        fill="${fill}" font-size="${sym === '=' ? '16' : '18'}" font-weight="700"
        font-family="system-ui, sans-serif">${sym}</text>
    </svg>`;
  }

  function addSticker(layer, place, colorIndex) {
    const type = STICKERS[place.type];
    if (!type) return;

    const el = document.createElement('div');
    el.className = `sticker sticker--${type.id}`;
    el.style.top = `${place.top}%`;
    el.style.left = `${place.left}%`;
    el.style.width = `${Math.round(place.size * (widthScale[type.id] || 1))}px`;
    el.style.setProperty('--sticker-rot', `${place.rot}deg`);
    if (place.layer) el.dataset.layer = place.layer;

    const fill = LABEL_COLORS[colorIndex % LABEL_COLORS.length];
    if (place.type === 'bit') {
      el.innerHTML = type.build(fill, place.icon);
    } else if (place.type === 'nestedHeart') {
      el.innerHTML = type.build(fill, LABEL_COLORS[(colorIndex + 2) % LABEL_COLORS.length]);
    } else {
      el.innerHTML = type.build(fill);
    }
    layer.appendChild(el);
  }

  let colorIndex = 0;
  places.forEach((place) => {
    addSticker(field, place, colorIndex++);
  });
})();
