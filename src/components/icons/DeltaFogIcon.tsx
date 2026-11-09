export default function DeltaFogIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="58" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* ── Red spray canister body ── */}
      {/* Left face */}
      <path d="M36 95 L36 52 Q36 46 46 43 L58 42 L58 94 Z" fill="#CC2200" />
      {/* Right face */}
      <path d="M58 42 L70 43 Q80 46 80 52 L80 95 L58 94 Z" fill="#991A00" />
      {/* Top face */}
      <path d="M36 52 Q36 46 46 43 L58 42 L70 43 Q80 46 80 52 L58 56 Z" fill="#E83010" />

      {/* Bottom */}
      <path d="M36 95 L58 94 L80 95 L58 100 Z" fill="#881500" />

      {/* Canister dome top */}
      <path d="M46 43 Q58 36 70 43 L70 46 Q58 40 46 46 Z" fill="#E83010" />
      <ellipse cx="58" cy="38" rx="12" ry="6" fill="#CC2200" />
      <ellipse cx="58" cy="36" rx="10" ry="5" fill="#E83010" />

      {/* Black pump nozzle */}
      <rect x="54" y="24" width="8" height="16" rx="3" fill="#222222" />
      <rect x="55" y="22" width="6" height="5" rx="2" fill="#333333" />

      {/* Nozzle tip + spray cone */}
      <rect x="58" y="26" width="18" height="4" rx="2" fill="#1A1A1A" />
      <path d="M76 26 L84 20 M76 30 L84 36 M76 28 L90 28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />

      {/* Spray mist particles */}
      <circle cx="87" cy="22" r="2" fill="#94EAFF" opacity="0.7" />
      <circle cx="91" cy="27" r="1.5" fill="#94EAFF" opacity="0.5" />
      <circle cx="88" cy="32" r="2.5" fill="#94EAFF" opacity="0.6" />
      <circle cx="94" cy="24" r="1" fill="#94EAFF" opacity="0.4" />
      <circle cx="93" cy="31" r="1.5" fill="#94EAFF" opacity="0.45" />
      <circle cx="85" cy="18" r="1" fill="#B8F0FF" opacity="0.5" />

      {/* Red label on front */}
      <path d="M40 62 L40 86 L58 89 L58 65 Z" fill="#FFEEEE" opacity="0.9" />
      <path d="M58 65 L58 89 L76 86 L76 62 Z" fill="#FFE0E0" opacity="0.85" />

      {/* Label text */}
      <rect x="42" y="67" width="13" height="2" rx="1" fill="#CC2200" />
      <rect x="42" y="71" width="10" height="1.5" rx="0.75" fill="#CC2200" opacity="0.7" />
      <rect x="42" y="74" width="12" height="1.5" rx="0.75" fill="#CC2200" opacity="0.7" />

      {/* Trigger / handle grip */}
      <path d="M36 68 Q28 70 28 78 Q28 86 36 86" stroke="#881500" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Highlight */}
      <path d="M42 55 L42 90" stroke="rgba(255,180,160,0.2)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
