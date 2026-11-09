export default function GreenMatIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floor shadow */}
      <ellipse cx="60" cy="104" rx="38" ry="8" fill="rgba(0,0,0,0.10)" />

      {/* ── Flat isometric mat tile ── */}
      {/* Main top surface */}
      <path d="M20 80 L60 60 L100 80 L60 100 Z" fill="#2D8A3E" />

      {/* Left side thickness */}
      <path d="M20 80 L20 86 L60 106 L60 100 Z" fill="#1F6B2D" />
      {/* Right side thickness */}
      <path d="M60 100 L60 106 L100 86 L100 80 Z" fill="#186025" />

      {/* ── Mat grid pattern on top surface ── */}
      {/* Horizontal grid lines (in isometric space) */}
      <path d="M28 84 L68 64" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <path d="M36 88 L76 68" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <path d="M44 92 L84 72" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <path d="M52 96 L92 76" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

      {/* Vertical grid lines (in isometric space) */}
      <path d="M20 80 L60 100" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <path d="M35 72 L75 92" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <path d="M50 64 L90 84" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <path d="M65 60 L100 80" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      <path d="M80 68 L100 80" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />

      {/* Grass texture dots on surface */}
      {[
        [40,76],[50,72],[60,68],[70,72],[80,76],
        [45,82],[55,78],[65,74],[75,78],[85,82],
        [50,88],[60,84],[70,80],[80,84],
        [55,93],[65,89],[75,85],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(100,255,100,0.2)" />
      ))}

      {/* Surface highlight */}
      <path d="M24 79 L60 61" stroke="rgba(200,255,200,0.3)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Corner curl detail (rolled edge) */}
      <path d="M20 80 Q18 82 20 86" stroke="#1F6B2D" strokeWidth="1.5" fill="none" />

      {/* Mat border/edge stripe */}
      <path d="M20 80 L60 60 L100 80" stroke="#4CAF50" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M20 80 L60 100 L100 80" stroke="#2D8A3E" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}
