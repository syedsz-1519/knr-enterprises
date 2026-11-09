export default function SanitizationToolsIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="58" cy="107" rx="30" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* ── Blue bucket ── */}
      {/* Left face */}
      <path d="M32 98 L34 62 L58 55 L58 91 Z" fill="#1A6BB5" />
      {/* Right face */}
      <path d="M58 91 L58 55 L82 62 L80 98 Z" fill="#1355A0" />
      {/* Top opening */}
      <path d="M34 62 L58 55 L82 62 L58 69 Z" fill="#2280D0" />
      {/* Bottom */}
      <path d="M32 98 L58 91 L80 98 L56 105 Z" fill="#0E4882" />

      {/* Water/liquid inside */}
      <path d="M36 65 L58 58 L80 65 L58 72 Z" fill="#60B8FF" opacity="0.6" />
      <path d="M36 65 L36 68 L58 75 L80 68 L80 65 L58 72 Z" fill="#4AA8F0" opacity="0.5" />

      {/* Bucket handle */}
      <path d="M38 62 Q38 46 58 44 Q78 46 78 62"
        stroke="#0E4882" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M38 62 Q38 48 58 46 Q78 48 78 62"
        stroke="#2280D0" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Bucket ribbing */}
      <path d="M33 74 L57 67 M33 82 L57 75 M33 90 L57 83"
        stroke="#1355A0" strokeWidth="0.8" opacity="0.5" />

      {/* ── Mop handle ── */}
      <rect x="76" y="22" width="5" height="72" rx="2" fill="#C8A060" transform="rotate(8 76 22)" />
      <rect x="77" y="22" width="2" height="72" rx="1" fill="#E0B878" transform="rotate(8 76 22)" opacity="0.6" />

      {/* Mop head */}
      <path d="M80 88 Q72 96 64 98 Q56 100 52 96 Q60 90 68 88 Q76 86 80 88 Z" fill="#E8E8E8" />
      {/* Mop strands */}
      {[52, 56, 60, 64, 68, 72, 76].map((x, i) => (
        <path
          key={i}
          d={`M${x} ${96 - i * 0.5} Q${x + 1} ${102} ${x - 1} ${104}`}
          stroke="#CCCCCC"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <path d="M52 96 Q56 100 60 102 Q64 104 68 102 Q72 100 76 96"
        stroke="#BBBBBB" strokeWidth="1" fill="none" />

      {/* Bucket highlight */}
      <path d="M36 66 L36 96" stroke="rgba(100,200,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
