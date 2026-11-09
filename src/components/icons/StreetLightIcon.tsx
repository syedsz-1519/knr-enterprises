export default function StreetLightIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="52" cy="108" rx="18" ry="5" fill="rgba(0,0,0,0.12)" />

      {/* ── Base plate ── */}
      {/* Left face */}
      <path d="M36 105 L36 100 L52 96 L52 101 Z" fill="#888888" />
      {/* Right face */}
      <path d="M52 101 L52 96 L68 100 L68 105 Z" fill="#666666" />
      {/* Top */}
      <path d="M36 100 L52 96 L68 100 L52 104 Z" fill="#AAAAAA" />

      {/* ── Pole (slim, slightly tapered) ── */}
      {/* Left face of pole */}
      <path d="M49 100 L49 35 L52 34 L52 99 Z" fill="#9A9A9A" />
      {/* Right face of pole */}
      <path d="M52 34 L55 35 L55 100 L52 99 Z" fill="#777777" />
      {/* Front sliver */}
      <rect x="49" y="34" width="6" height="2" fill="#BBBBBB" />

      {/* ── Arm curve ── */}
      <path d="M52 45 Q52 32 70 30" stroke="#9A9A9A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M52 45 Q52 34 70 32" stroke="#BBBBBB" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* ── LED lamp head ── */}
      {/* Body left */}
      <path d="M66 38 L66 28 L80 25 L80 35 Z" fill="#B0B8C0" />
      {/* Body right */}
      <path d="M80 35 L80 25 L92 28 L92 38 Z" fill="#888E94" />
      {/* Top */}
      <path d="M66 28 L80 25 L92 28 L78 31 Z" fill="#CDD4DA" />
      {/* Bottom (light face) */}
      <path d="M66 38 L80 35 L92 38 L78 41 Z" fill="#FFFDE0" />

      {/* LED panel glow */}
      <path d="M68 37 L78 34 L90 37 L80 40 Z" fill="#FFEF80" opacity="0.9" />

      {/* LED grid dots */}
      {[70, 74, 78, 82, 86].map((x, i) => (
        <circle key={i} cx={x} cy={37.5} r="1" fill="#FFD700" opacity="0.8" />
      ))}

      {/* Lamp bracket bolt */}
      <circle cx="68" cy="33" r="2" fill="#666666" />

      {/* Light beam (subtle) */}
      <path d="M70 41 L60 62 M79 41 L74 62 M88 41 L88 62"
        stroke="#FFFDE0" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}
