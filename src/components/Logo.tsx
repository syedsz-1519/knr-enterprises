"use client";

export default function Logo({ size = "md", variant = "light" }: { 
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark" 
}) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 53 },
    lg: { width: 240, height: 80 },
  };

  const s = sizes[size];

  return (
    <svg
      viewBox="0 0 240 80"
      width={s.width}
      height={s.height}
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Text: KNR */}
      <text
        x="45"
        y="50"
        fontFamily="Inter, sans-serif"
        fontSize="48"
        fontWeight="700"
        fill={variant === "light" ? "#1F2937" : "#FFFFFF"}
        letterSpacing="-2"
      >
        KNR
      </text>

      {/* Water drop accent - converted to blue */}
      <circle
        cx="175"
        cy="25"
        r="6"
        fill={variant === "light" ? "#3B82F6" : "#60A5FA"}
      />

      {/* Flowing wave - from orange to blue gradient */}
      <path
        d="M 80 45 Q 120 35, 160 45"
        stroke={variant === "light" ? "#3B82F6" : "#60A5FA"}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Secondary wave accent */}
      <path
        d="M 20 60 Q 80 50, 140 58"
        stroke={variant === "light" ? "#9CA3AF" : "#D1D5DB"}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Text: ENTERPRISES */}
      <text
        x="45"
        y="72"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill={variant === "light" ? "#6B7280" : "#D1D5DB"}
        letterSpacing="1.5"
      >
        ENTERPRISES
      </text>
    </svg>
  );
}
