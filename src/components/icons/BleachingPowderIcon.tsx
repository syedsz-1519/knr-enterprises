export default function BleachingPowderIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="60" cy="105" rx="32" ry="7" fill="rgba(0,0,0,0.10)" />

      {/* ── Isometric bag body ── */}
      {/* Left face (dark side) */}
      <path d="M32 82 L32 42 L60 28 L60 68 Z" fill="#C8D8E8" />
      {/* Right face (darker side) */}
      <path d="M60 68 L60 28 L88 42 L88 82 Z" fill="#A0B8CC" />
      {/* Top face */}
      <path d="M32 42 L60 28 L88 42 L60 56 Z" fill="#E8F2FA" />
      {/* Front face (brightest) */}
      <path d="M32 82 L60 68 L88 82 L60 96 Z" fill="#DDE9F5" />

      {/* Bag tie / crinkle top */}
      <path d="M46 38 Q60 32 74 38" stroke="#7A9CB8" strokeWidth="2" fill="none" />
      <ellipse cx="60" cy="27" rx="8" ry="4" fill="#B0C8DC" />
      <path d="M52 27 Q60 22 68 27" stroke="#90AABF" strokeWidth="1.5" fill="none" />

      {/* Blue label on left face */}
      <path d="M36 58 L36 75 L58 65 L58 48 Z" fill="#1A4A8A" rx="2" />

      {/* Label text lines */}
      <rect x="38" y="52" width="16" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="38" y="56" width="18" height="1.5" rx="0.75" fill="white" opacity="0.7" />
      <rect x="38" y="59" width="14" height="1.5" rx="0.75" fill="white" opacity="0.7" />
      <rect x="38" y="62" width="16" height="1.5" rx="0.75" fill="white" opacity="0.7" />

      {/* Label accent line */}
      <rect x="38" y="49.5" width="18" height="1.5" rx="0.75" fill="#4A90D9" opacity="0.9" />

      {/* Subtle bag seam */}
      <line x1="60" y1="68" x2="60" y2="96" stroke="#B8CCD8" strokeWidth="0.5" />
    </svg>
  );
}
