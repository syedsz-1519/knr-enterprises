"use client";

import { useState, useRef } from "react";
import { Minus, Plus, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";

interface ProductCard3DProps {
  id: string;
  category: string;
  categoryColor?: string;
  name: string;
  desc: string;
  detail: string;
  unit: string;
  price: number;
  priceLabel: string;
  priceUnit: string;
  inStock: boolean;
  soldBy: string;
  handling?: string;
  icon: React.ReactNode;
  bgGradient: string;
  qty: number;
  onQtyChange: (id: string, val: number) => void;
}

export default function ProductCard3D({
  id,
  category,
  categoryColor = "#E8710A",
  name,
  desc,
  detail,
  unit,
  price,
  priceLabel,
  priceUnit,
  inStock,
  soldBy,
  handling,
  icon,
  bgGradient,
  qty,
  onQtyChange,
}: ProductCard3DProps) {
  const [hovered, setHovered] = useState(false);
  const [showHandling, setShowHandling] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const isAdded = qty > 0;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }

  function handleMouseLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        background: "#FFFFFF",
        border: isAdded ? "2px solid #E8710A" : "1px solid #E2E8F0",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 32px rgba(11,27,58,0.14), 0 4px 12px rgba(11,27,58,0.08)"
          : "0 1px 3px rgba(11,27,58,0.06), 0 1px 2px rgba(11,27,58,0.04)",
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-2px)" : "translateY(0)"}`,
        transition: hovered
          ? "box-shadow 0.15s ease, border-color 0.15s ease"
          : "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease, border-color 0.15s ease",
        willChange: "transform",
      }}
    >
      {/* ── Icon stage ── */}
      <div
        style={{
          background: bgGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 140,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow behind icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 60%, rgba(255,255,255,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Icon with float animation */}
        <div
          style={{
            transform: hovered ? "translateY(-5px) scale(1.05)" : "translateY(0) scale(1)",
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            filter: hovered ? "drop-shadow(0 12px 16px rgba(0,0,0,0.18))" : "drop-shadow(0 4px 8px rgba(0,0,0,0.10))",
          }}
        >
          {icon}
        </div>

        {/* In-stock badge */}
        {inStock && (
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 9999,
              background: "rgba(22,138,72,0.12)",
              color: "#168A48",
              border: "1px solid rgba(22,138,72,0.3)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#168A48",
                display: "inline-block",
              }}
            />
            In Stock
          </span>
        )}

        {/* Added indicator */}
        {isAdded && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 9999,
              background: "#E8710A",
              color: "#FFFFFF",
            }}
          >
            ✓ {qty} Added
          </span>
        )}
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: "12px 14px 14px" }}>
        {/* Category label */}
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: categoryColor,
            marginBottom: 2,
          }}
        >
          {category}
        </div>

        {/* Product name */}
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            color: "#0B1B3A",
            lineHeight: 1.1,
            marginBottom: 6,
          }}
        >
          {name}
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 12,
            lineHeight: 1.5,
            color: "#64748B",
            marginBottom: 4,
          }}
        >
          {desc}
        </p>

        {/* Detail / spec line */}
        <div
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 11,
            color: "#94a3b8",
            marginBottom: 8,
          }}
        >
          {detail}
        </div>

        {/* Price */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 4,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontWeight: 700,
              fontSize: 20,
              color: "#E8710A",
            }}
          >
            {priceLabel}
          </span>
          <span
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 12,
              color: "#94a3b8",
            }}
          >
            {priceUnit}
          </span>
        </div>

        {/* Sold by */}
        <div
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 11,
            color: "#94a3b8",
            marginBottom: 12,
          }}
        >
          {soldBy}
        </div>

        {/* ── Stepper ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <button
            onClick={() => onQtyChange(id, qty - 1)}
            aria-label="Decrease quantity"
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "#F1F5F9",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0B1B3A",
              flexShrink: 0,
              transition: "background 0.12s",
            }}
          >
            <Minus size={16} />
          </button>

          <div
            style={{
              flex: 1,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              fontFamily: "'Courier Prime', monospace",
              fontWeight: 700,
              fontSize: 20,
              color: qty > 0 ? "#E8710A" : "#0F172A",
            }}
          >
            {qty}
          </div>

          <button
            onClick={() => onQtyChange(id, qty + 1)}
            aria-label="Increase quantity"
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "#F1F5F9",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#0B1B3A",
              flexShrink: 0,
              transition: "background 0.12s",
            }}
          >
            <Plus size={16} />
          </button>
        </div>

        {/* ── Add to Indent CTA ── */}
        <button
          onClick={() => { if (qty === 0) onQtyChange(id, 1); }}
          style={{
            width: "100%",
            height: 48,
            background: isAdded ? "#168A48" : "#E8710A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 8,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
            transition: "background 0.15s, transform 0.1s",
            transform: hovered && !isAdded ? "scale(1.01)" : "scale(1)",
          }}
        >
          {isAdded ? (
            <>
              <CheckCircle size={16} />
              Added to Indent ({qty})
            </>
          ) : (
            <>
              <Plus size={16} />
              Add to Indent
            </>
          )}
        </button>

        {/* ── Handling & Safety tab (chemicals only) ── */}
        {handling && (
          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => setShowHandling((v) => !v)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(232,113,10,0.06)",
                border: "1px solid rgba(232,113,10,0.2)",
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#E8710A",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <AlertTriangle size={13} />
                Handling &amp; Safety
              </span>
              {showHandling ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showHandling && (
              <div
                style={{
                  marginTop: 6,
                  padding: "10px 12px",
                  background: "#FFFBF5",
                  border: "1px solid rgba(232,113,10,0.15)",
                  borderRadius: 8,
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: 12,
                  lineHeight: 1.6,
                  color: "#5C3A00",
                }}
              >
                {handling}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
