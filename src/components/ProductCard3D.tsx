"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Minus, Plus, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";

export interface ProductCard3DProps {
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
  imageUrl: string;
  imageBg: string;
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
  priceLabel,
  priceUnit,
  inStock,
  soldBy,
  handling,
  imageUrl,
  imageBg,
  qty,
  onQtyChange,
}: ProductCard3DProps) {
  const [hovered, setHovered] = useState(false);
  const [showHandling, setShowHandling] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isAdded = qty > 0;

  // Only run tilt on non-touch (desktop)
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -5, y: dx * 5 });
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
        display: "flex",
        flexDirection: "column",
        boxShadow: hovered
          ? "0 16px 40px rgba(11,27,58,0.14), 0 4px 12px rgba(11,27,58,0.08)"
          : "0 1px 4px rgba(11,27,58,0.06)",
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-3px)" : "translateY(0)"}`,
        transition: hovered
          ? "box-shadow 0.18s ease"
          : "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.5s ease, border-color 0.15s ease",
        willChange: "transform",
      }}
    >
      {/* ── Image area ── */}
      <div
        style={{
          position: "relative",
          height: 180,
          background: imageBg,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Gradient overlay so text on image is legible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(11,27,58,0.45) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        {/* In-stock pill */}
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
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 9999,
              background: "rgba(22,138,72,0.9)",
              color: "#FFFFFF",
              backdropFilter: "blur(4px)",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7BE3A0", display: "inline-block" }} />
            In Stock
          </span>
        )}

        {/* Added badge */}
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
              letterSpacing: "0.07em",
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

        {/* Category label at bottom of image */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {category}
        </div>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: "14px 14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Name */}
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#0B1B3A",
            lineHeight: 1.1,
            marginBottom: 6,
          }}
        >
          {name}
        </div>

        {/* Description */}
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, lineHeight: 1.55, color: "#64748B", marginBottom: 4 }}>
          {desc}
        </p>

        {/* Spec */}
        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "#94a3b8", marginBottom: 10 }}>
          {detail}
        </div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 3 }}>
          <span style={{ fontFamily: "'Courier Prime', monospace", fontWeight: 700, fontSize: 22, color: "#E8710A" }}>
            {priceLabel}
          </span>
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "#94a3b8" }}>
            {priceUnit}
          </span>
        </div>

        <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "#94a3b8", marginBottom: 14 }}>
          {soldBy}
        </div>

        {/* Spacer pushes controls to bottom */}
        <div style={{ flex: 1 }} />

        {/* ── Stepper ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <button
            onClick={() => onQtyChange(id, qty - 1)}
            aria-label="Decrease quantity"
            style={{
              width: 44, height: 44, borderRadius: 8,
              background: "#F1F5F9", border: "1px solid #E2E8F0",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#0B1B3A", flexShrink: 0,
            }}
          >
            <Minus size={16} />
          </button>

          <div style={{
            flex: 1, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
            background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8,
            fontFamily: "'Courier Prime', monospace", fontWeight: 700, fontSize: 22,
            color: qty > 0 ? "#E8710A" : "#0F172A",
          }}>
            {qty}
          </div>

          <button
            onClick={() => onQtyChange(id, qty + 1)}
            aria-label="Increase quantity"
            style={{
              width: 44, height: 44, borderRadius: 8,
              background: "#F1F5F9", border: "1px solid #E2E8F0",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#0B1B3A", flexShrink: 0,
            }}
          >
            <Plus size={16} />
          </button>
        </div>

        {/* ── CTA ── */}
        <button
          onClick={() => { if (qty === 0) onQtyChange(id, 1); }}
          style={{
            width: "100%", height: 48,
            background: isAdded ? "#168A48" : "#E8710A",
            color: "#FFFFFF", border: "none", borderRadius: 8,
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            cursor: "pointer", transition: "background 0.15s",
          }}
        >
          {isAdded ? (
            <><CheckCircle size={16} /> Added to Indent ({qty})</>
          ) : (
            <><Plus size={16} /> Add to Indent</>
          )}
        </button>

        {/* ── Handling & Safety (chemicals only) ── */}
        {handling && (
          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => setShowHandling((v) => !v)}
              style={{
                width: "100%",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(232,113,10,0.06)", border: "1px solid rgba(232,113,10,0.2)",
                borderRadius: 8, padding: "8px 12px", cursor: "pointer",
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E8710A",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <AlertTriangle size={13} /> Handling &amp; Safety
              </span>
              {showHandling ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showHandling && (
              <div style={{
                marginTop: 6, padding: "10px 12px",
                background: "#FFFBF5", border: "1px solid rgba(232,113,10,0.15)",
                borderRadius: 8,
                fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, lineHeight: 1.6, color: "#5C3A00",
              }}>
                {handling}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
