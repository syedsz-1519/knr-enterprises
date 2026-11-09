export default function DustBinIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="60" cy="107" rx="30" ry="7" fill="rgba(0,0,0,0.12)" />

      {/* ── Green bin body ── */}
      {/* Left face */}
      <path d="M30 98 L30 54 L60 44 L60 88 Z" fill="#2D8A2D" />
      {/* Right face */}
      <path d="M60 88 L60 44 L90 54 L90 98 Z" fill="#1F6B1F" />
      {/* Bottom front */}
      <path d="M30 98 L60 88 L90 98 L60 108 Z" fill="#267326" />

      {/* Wheels */}
      <circle cx="38" cy="100" r="5" fill="#222" />
      <circle cx="38" cy="100" r="2.5" fill="#555" />
      <circle cx="82" cy="100" r="5" fill="#222" />
      <circle cx="82" cy="100" r="2.5" fill="#555" />

      {/* ── Lid ── */}
      {/* Lid left face */}
      <path d="M28 56 L28 50 L60 40 L60 46 Z" fill="#3AAA3A" />
      {/* Lid right face */}
      <path d="M60 46 L60 40 L92 50 L92 56 Z" fill="#2A8A2A" />
      {/* Lid top */}
      <path d="M28 50 L60 40 L92 50 L60 60 Z" fill="#4CC44C" />

      {/* Lid hinge */}
      <rect x="56" y="39" width="8" height="4" rx="2" fill="#1A5C1A" />

      {/* Lid handle */}
      <path d="M50 44 Q60 40 70 44" stroke="#1A5C1A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Recycle symbol on left face */}
      <text x="38" y="78" fontSize="18" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">♻</text>

      {/* Ribbed lines on bin body */}
      <line x1="30" y1="66" x2="60" y2="58" stroke="#267326" strokeWidth="0.8" opacity="0.6" />
      <line x1="30" y1="74" x2="60" y2="66" stroke="#267326" strokeWidth="0.8" opacity="0.6" />
      <line x1="30" y1="82" x2="60" y2="74" stroke="#267326" strokeWidth="0.8" opacity="0.6" />
      <line x1="60" y1="58" x2="90" y2="66" stroke="#1A5C1A" strokeWidth="0.8" opacity="0.6" />
      <line x1="60" y1="66" x2="90" y2="74" stroke="#1A5C1A" strokeWidth="0.8" opacity="0.6" />
      <line x1="60" y1="74" x2="90" y2="82" stroke="#1A5C1A" strokeWidth="0.8" opacity="0.6" />

      {/* Highlight */}
      <path d="M33 58 L33 96" stroke="rgba(150,255,150,0.15)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
