"use client";

export default function Logo({ size = "md", variant = "light" }: { 
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark" 
}) {
  const sizes = {
    sm: { width: 140, height: 46 },
    md: { width: 180, height: 60 },
    lg: { width: 240, height: 80 },
  };

  const s = sizes[size];
  const primaryColor = variant === "light" ? "#0D2B5B" : "#FFFFFF";
  const accentColor = "#F57C00";

  return (
    <svg
      viewBox="0 0 300 100"
      width={s.width}
      height={s.height}
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* KNR Text - Navy */}
      <text
        x="25"
        y="65"
        fontFamily="'Courier New', monospace"
        fontSize="65"
        fontWeight="bold"
        fill={primaryColor}
        letterSpacing="2"
      >
        KNR
      </text>

      {/* Orange wave line under K */}
      <path
        d="M 30 75 Q 60 65, 100 75 Q 120 80, 140 72"
        stroke={accentColor}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Water drop - Orange */}
      <g>
        {/* Outer drop shape */}
        <path
          d="M 280 20 Q 290 30, 290 45 Q 290 60, 280 70 Q 270 60, 270 45 Q 270 30, 280 20 Z"
          fill={accentColor}
        />
        {/* Inner highlight */}
        <circle cx="278" cy="35" r="4" fill="white" opacity="0.6" />
      </g>

      {/* ENTERPRISES text - Navy, smaller */}
      <text
        x="25"
        y="92"
        fontFamily="'Courier New', monospace"
        fontSize="18"
        fontWeight="600"
        fill={primaryColor}
        letterSpacing="3"
      >
        ENTERPRISES
      </text>
    </svg>
  );
}
