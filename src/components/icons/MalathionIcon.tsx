export default function MalathionIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="60" cy="107" rx="22" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* ── Brown bottle ── */}
      {/* Bottle body left */}
      <path d="M44 90 L44 54 Q44 48 50 46 L60 44 L60 92 Z" fill="#8B4513" />
      {/* Bottle body right */}
      <path d="M60 44 L70 46 Q76 48 76 54 L76 90 L60 92 Z" fill="#6B340E" />
      {/* Bottle top face (shoulder) */}
      <path d="M44 54 Q44 48 50 46 L60 44 L70 46 Q76 48 76 54 L60 58 Z" fill="#A0521A" />

      {/* Bottle neck left */}
      <rect x="54" y="34" width="6" height="12" fill="#8B4513" />
      {/* Bottle neck right */}
      <rect x="60" y="34" width="6" height="12" fill="#6B340E" />
      {/* Neck top */}
      <ellipse cx="60" cy="34" rx="6" ry="3" fill="#A0521A" />

      {/* Orange cap */}
      <path d="M53 34 L53 28 Q53 24 60 24 Q67 24 67 28 L67 34 Z" fill="#E8710A" />
      <ellipse cx="60" cy="34" rx="7" ry="3.5" fill="#F28C28" />
      <ellipse cx="60" cy="28" rx="7" ry="3.5" fill="#F28C28" />
      {/* Cap highlight */}
      <path d="M55 26 Q60 23 65 26" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

      {/* Label on bottle front */}
      <path d="M46 62 L46 84 L60 87 L60 65 Z" fill="#F5DEB3" opacity="0.9" />
      <path d="M60 65 L60 87 L74 84 L74 62 Z" fill="#EDD89A" opacity="0.9" />

      {/* Label text */}
      <rect x="48" y="67" width="10" height="1.8" rx="0.9" fill="#5C3317" />
      <rect x="48" y="71" width="8" height="1.5" rx="0.75" fill="#5C3317" opacity="0.7" />
      <rect x="48" y="74" width="9" height="1.5" rx="0.75" fill="#5C3317" opacity="0.7" />

      {/* Label border */}
      <path d="M46 62 L46 84 L74 84 L74 62" stroke="#C8A050" strokeWidth="0.8" fill="none" />

      {/* Bottle highlight */}
      <path d="M48 58 L48 88" stroke="rgba(255,200,150,0.25)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Warning diamond on label */}
      <rect x="61" y="68" width="8" height="8" rx="1" fill="#E8710A" transform="rotate(45 65 72)" />
      <text x="64.5" y="73.5" fontSize="4" fill="white" fontWeight="bold" fontFamily="sans-serif">!</text>
    </svg>
  );
}
