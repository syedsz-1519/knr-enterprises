export default function LimePowderIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="60" cy="105" rx="32" ry="7" fill="rgba(0,0,0,0.10)" />

      {/* ── Isometric box / sack ── */}
      {/* Left face */}
      <path d="M30 85 L30 45 L60 30 L60 70 Z" fill="#D8C8A0" />
      {/* Right face */}
      <path d="M60 70 L60 30 L90 45 L90 85 Z" fill="#B8A878" />
      {/* Top face */}
      <path d="M30 45 L60 30 L90 45 L60 60 Z" fill="#EDE0C0" />
      {/* Front face */}
      <path d="M30 85 L60 70 L90 85 L60 100 Z" fill="#D4C494" />

      {/* Box edge lines */}
      <line x1="60" y1="30" x2="60" y2="70" stroke="#C4AE82" strokeWidth="0.8" />
      <line x1="60" y1="70" x2="60" y2="100" stroke="#A89060" strokeWidth="0.8" />

      {/* Label on left face */}
      <path d="M34 55 L34 78 L58 66 L58 43 Z" fill="#8B6914" opacity="0.85" />

      {/* Label text lines */}
      <rect x="36.5" y="48" width="18" height="2" rx="1" fill="#FFF8E0" opacity="0.95" />
      <rect x="36.5" y="52" width="15" height="1.5" rx="0.75" fill="#FFF8E0" opacity="0.7" />
      <rect x="36.5" y="55" width="17" height="1.5" rx="0.75" fill="#FFF8E0" opacity="0.7" />
      <rect x="36.5" y="58" width="13" height="1.5" rx="0.75" fill="#FFF8E0" opacity="0.7" />

      {/* Top tied knot */}
      <ellipse cx="60" cy="29" rx="9" ry="4" fill="#C8B080" />
      <path d="M52 28 Q60 24 68 28" stroke="#A89060" strokeWidth="1.5" fill="none" />
      <path d="M55 25 L57 21 M65 25 L63 21" stroke="#A89060" strokeWidth="1.5" strokeLinecap="round" />

      {/* Corner patch accent */}
      <path d="M34 78 L34 83 L38 81 L38 76 Z" fill="#A89060" opacity="0.5" />
    </svg>
  );
}
