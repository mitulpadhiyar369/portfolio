/**
 * GlobalBackground.jsx
 * ─────────────────────────────────────────────────────────────────
 * A premium, cinematic, fixed background layer for the entire site.
 *
 * Design intent:
 *   • Stars are FULLY STATIC — generated once, never animated.
 *   • Only the ambient glow orbs move, at an imperceptibly slow pace
 *     (40–80 seconds per cycle) using GPU-accelerated transforms only.
 *   • No Three.js, no particle libraries, no requestAnimationFrame loops.
 *   • All motion is CSS-only via `transform` + `opacity` (compositor
 *     thread only → 60 fps, no layout/paint cost).
 *   • Respects prefers-reduced-motion by disabling glow animation.
 *
 * Layers (back → front):
 *   1. Deep-space base gradient (static)
 *   2. Micro stars  — 200 × 0.6–1 px dots
 *   3. Small stars  —  90 × 1–1.5 px dots
 *   4. Medium stars —  45 × 1.5–2.2 px dots, blue-white tint
 *   5. Large accent stars — 14 × 2.2–3.2 px dots, brighter
 *   6. Nebula dust panels (static, ultra-low opacity)
 *   7. Ambient glow orbs — 4 slow-moving blurred circles (animated)
 *   8. Subtle vignette (static)
 * ─────────────────────────────────────────────────────────────────
 */

import React, { useMemo } from 'react';
import './GlobalBackground.css';

// ─── Seeded pseudo-random for deterministic star positions ───────
// Avoids Math.random() at render time so positions never shift.
function createSeededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateStars(count, sizeRange, opacityRange, seed) {
  const rand = createSeededRandom(seed);
  return Array.from({ length: count }, (_, i) => {
    const size    = sizeRange[0]    + rand() * (sizeRange[1]    - sizeRange[0]);
    const opacity = opacityRange[0] + rand() * (opacityRange[1] - opacityRange[0]);
    return { id: i, x: rand() * 100, y: rand() * 100, size, opacity };
  });
}

// ─── Glow orb definitions ────────────────────────────────────────
const GLOW_ORBS = [
  { id: 'a', cx: '18%',  cy: '22%', size: '560px', color: 'rgba(108, 99, 255, 0.055)',  cls: 'gb-orb-a' },
  { id: 'b', cx: '82%',  cy: '68%', size: '480px', color: 'rgba(236, 72,  153, 0.045)', cls: 'gb-orb-b' },
  { id: 'c', cx: '58%',  cy: '12%', size: '420px', color: 'rgba(6,  182, 212, 0.035)',  cls: 'gb-orb-c' },
  { id: 'd', cx: '28%',  cy: '78%', size: '380px', color: 'rgba(167,139, 250, 0.04)',   cls: 'gb-orb-d' },
];

const GlobalBackground = () => {
  // Generated once — memoized, never change
  const microStars  = useMemo(() => generateStars(200, [0.6, 1.0],  [0.12, 0.38], 42),    []);
  const smallStars  = useMemo(() => generateStars(90,  [1.0, 1.5],  [0.20, 0.50], 1337),  []);
  const mediumStars = useMemo(() => generateStars(45,  [1.5, 2.2],  [0.30, 0.65], 9001),  []);
  const accentStars = useMemo(() => generateStars(14,  [2.2, 3.2],  [0.55, 0.90], 31415), []);

  return (
    <div className="gb-root" aria-hidden="true" role="presentation">
      {/* Layer 1 – Deep space base gradient */}
      <div className="gb-base" />

      {/* Layer 2 – Static star field (SVG — pixel-perfect, no repaints) */}
      <svg className="gb-stars" xmlns="http://www.w3.org/2000/svg">
        {microStars.map((s) => (
          <circle key={`mi-${s.id}`} cx={`${s.x}%`} cy={`${s.y}%`} r={s.size / 2} fill="white" opacity={s.opacity} />
        ))}
        {smallStars.map((s) => (
          <circle key={`sm-${s.id}`} cx={`${s.x}%`} cy={`${s.y}%`} r={s.size / 2} fill="white" opacity={s.opacity} />
        ))}
        {mediumStars.map((s) => (
          <circle key={`md-${s.id}`} cx={`${s.x}%`} cy={`${s.y}%`} r={s.size / 2} fill="rgb(210,222,255)" opacity={s.opacity} />
        ))}
        {accentStars.map((s) => (
          <circle key={`ac-${s.id}`} cx={`${s.x}%`} cy={`${s.y}%`} r={s.size / 2} fill="rgb(240,244,255)" opacity={s.opacity} />
        ))}
      </svg>

      {/* Layer 3 – Static nebula dust */}
      <div className="gb-nebula gb-nebula-1" />
      <div className="gb-nebula gb-nebula-2" />
      <div className="gb-nebula gb-nebula-3" />

      {/* Layer 4 – Ambient glow orbs (only animated layer) */}
      {GLOW_ORBS.map((orb) => (
        <div
          key={orb.id}
          className={`gb-orb ${orb.cls}`}
          style={{
            left: orb.cx,
            top:  orb.cy,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 68%)`,
          }}
        />
      ))}

      {/* Layer 5 – Vignette */}
      <div className="gb-vignette" />
    </div>
  );
};

export default GlobalBackground;
