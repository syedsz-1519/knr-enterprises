import Link from "next/link";
import { ChevronRight, Phone, MessageSquare, CheckCircle, MapPin, Lock, ShoppingBag } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";

const products = [
  { slug: "bleaching-powder",      label: "BLEACHING BAG",   emoji: "🧴" },
  { slug: "lime-powder",           label: "LIME BOX",         emoji: "🪣" },
  { slug: "malathion",             label: "MALATHION",        emoji: "🧪" },
  { slug: "delta-fog",             label: "DELTA FOG",        emoji: "💨" },
  { slug: "street-light",          label: "STREET LIGHT",     emoji: "💡" },
  { slug: "dust-bins",             label: "GREEN BIN",        emoji: "🗑️" },
  { slug: "green-mat",             label: "GREEN MAT",        emoji: "🟩" },
  { slug: "all-sanitization-tools",label: "CLEAN TOOL",       emoji: "🧹" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          padding: "2rem 1rem",
          background:
            "radial-gradient(120% 90% at 50% 0%, #10224A 0%, #0A1530 60%, #060d1f 100%)",
        }}
      >
        {/* Perspective grid floor */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-50%",
            right: "-50%",
            bottom: "-10%",
            height: "60%",
            backgroundImage:
              "linear-gradient(rgba(242,140,40,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(242,140,40,.28) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(62deg)",
            transformOrigin: "center top",
            animation: "flow 6s linear infinite",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 40%)",
            maskImage: "linear-gradient(to bottom, transparent, #000 40%)",
          }}
        />

        {/* Orange glow pulse */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "60vmax",
            height: "60vmax",
            left: "50%",
            top: "40%",
            translate: "-50% -50%",
            background:
              "radial-gradient(circle, rgba(242,140,40,.22), transparent 60%)",
            animation: "pulse 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* Canvas bubbles + fog */}
        <HeroAnimation />

        {/* ─ Hero content ─ */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 760, width: "100%" }}>
          {/* Location badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1.5px solid rgba(242,140,40,0.6)",
              borderRadius: 9999,
              padding: "0.35rem 1rem",
              marginBottom: "1.5rem",
              color: "#F28C28",
              fontSize: 13,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
                boxShadow: "0 0 6px #4ade80",
              }}
            />
            Chevella &nbsp;·&nbsp; Ranga Reddy &nbsp;·&nbsp; Telangana
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 10vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#F28C28",
              marginBottom: "0.5rem",
            }}
          >
            KNR Enterprises
          </h1>

          {/* Amber decorative rule */}
          <div
            style={{
              width: 40,
              height: 3,
              background: "#C98A1B",
              borderRadius: 2,
              margin: "0.75rem auto",
            }}
          />

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
              lineHeight: 1.6,
              marginBottom: "0.75rem",
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            We supply disinfectants, pest-control chemicals, street lights, dust bins and sanitation tools.
          </p>
          <p
            style={{
              color: "#F28C28",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            Govt &amp; Gram Panchayat Approved Indent Supply Depot
          </p>

          {/* Product icon grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(70px, 90px))",
              gap: "0.75rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/catalogue#${p.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 14,
                    padding: "0.75rem 0.5rem 0.6rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.4rem",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                >
                  <span style={{ fontSize: 28 }}>{p.emoji}</span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* ─ Who is visiting gateway ─ */}
          <div
            style={{
              background: "rgba(10,21,48,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(242,140,40,0.25)",
              borderRadius: 18,
              padding: "1.75rem 1.5rem",
              maxWidth: 520,
              margin: "0 auto 2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F28C28",
                marginBottom: "0.35rem",
              }}
            >
              Who is Visiting?
            </div>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 13,
                fontFamily: "'Source Sans 3', sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              Select your portal to proceed to Chevella Depot
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                href="/admin"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F28C28",
                  color: "#1a1000",
                  borderRadius: 12,
                  padding: "1rem 1.25rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Lock size={18} />
                  Admin – Shop Owner Login
                </div>
                <ChevronRight size={18} />
              </Link>

              <Link
                href="/catalogue"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(242,140,40,0.1)",
                  border: "1.5px solid rgba(242,140,40,0.5)",
                  color: "#FFFFFF",
                  borderRadius: 12,
                  padding: "1rem 1.25rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ShoppingBag size={18} />
                  Customer – Browse Items &amp; Order
                </div>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* Bottom contact line */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "0.75rem",
            }}
          >
            <a
              href="tel:8886175855"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#F28C28",
                fontFamily: "'Courier Prime', monospace",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <Phone size={14} /> 8886175855
            </a>
            <a
              href="tel:9640195798"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#F28C28",
                fontFamily: "'Courier Prime', monospace",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <Phone size={14} /> 9640195798
            </a>
          </div>
          <div
            style={{
              color: "#64748B",
              fontFamily: "'Courier Prime', monospace",
              fontSize: 12,
              letterSpacing: "0.04em",
            }}
          >
            GSTIN 36CUHPK5939D1ZG &nbsp;·&nbsp; H.No 1-77/6, Near HP Petrol Pump, Chevella 501503
          </div>
        </div>

        {/* CSS animations injected inline */}
        <style>{`
          @keyframes flow { to { background-position: 0 60px; } }
          @keyframes pulse { 50% { scale: 1.15; opacity: .7; } }
          @media (prefers-reduced-motion: reduce) {
            [style*="flow"], [style*="pulse"] { animation: none !important; }
          }
        `}</style>
      </section>

      {/* ─── BELOW-FOLD: quick product list for non-hero scroll ─── */}
      <div className="container-app py-8">
        <div className="mb-5">
          <h2 className="section-heading text-2xl">We Supply</h2>
          <p className="font-body text-sm mt-2" style={{ color: "#64748B" }}>
            Everything on this shelf, for panchayats, municipalities and contractors. Tap an item to order it.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { category: "DISINFECTANT", name: "Bleaching Powder", desc: "Standard grade • Grade 3 ISI HDPE", emoji: "🧴", bg: "#FFF7ED", slug: "bleaching-powder" },
            { category: "DISINFECTANT", name: "Lime Powder", desc: "Standard grade • Slaked & Moisture-Proof", emoji: "🪣", bg: "#F0FDF4", slug: "lime-powder" },
            { category: "PEST CONTROL", name: "Malathion", desc: "Standard grade • 2% DP Vector Eradication", emoji: "🧪", bg: "#FFF7ED", slug: "malathion" },
            { category: "PEST CONTROL", name: "Delta Fog", desc: "Standard grade • Thermal Pulse-Jet Fogger", emoji: "💨", bg: "#EFF6FF", slug: "delta-fog" },
            { category: "CIVIC SUPPLIES", name: "Street Light", desc: "Standard grade • 45W / 90W Surge Protected", emoji: "💡", bg: "#FEFCE8", slug: "street-light" },
            { category: "CIVIC SUPPLIES", name: "Green Mat", desc: "Standard grade • UV-Proof Heavy Duty Roll", emoji: "🟩", bg: "#F0FDF4", slug: "green-mat" },
            { category: "CIVIC SUPPLIES", name: "Dust Bins", desc: "Standard grade • Dual Wet & Dry 120L / 240L", emoji: "🗑️", bg: "#F8FAFC", slug: "dust-bins" },
            { category: "TOOLS", name: "All Sanitization Tools", desc: "Standard grade • Brooms, Iron Shovels, Wipers", emoji: "🧹", bg: "#FFF7ED", slug: "all-sanitization-tools" },
          ].map((product) => (
            <Link
              key={product.slug}
              href={`/catalogue#${product.slug}`}
              className="card flex items-center gap-4 p-4 hover:shadow-md transition-shadow group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: product.bg }}
              >
                {product.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5" style={{ color: "#E8710A" }}>
                  {product.category}
                </div>
                <div className="font-heading font-bold text-lg uppercase tracking-wide leading-tight" style={{ color: "#0B1B3A" }}>
                  {product.name}
                </div>
                <div className="font-body text-sm mt-0.5" style={{ color: "#64748B" }}>
                  {product.desc}
                </div>
              </div>
              <ChevronRight size={20} style={{ color: "#0B1B3A", flexShrink: 0 }} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="space-y-3 mb-6">
          <Link href="/catalogue" className="btn-primary w-full text-center">
            Open the Catalogue &amp; Order
          </Link>
          <Link href="/contact" className="btn-outline w-full text-center">
            Contact Us
          </Link>
        </div>

        {/* Statutory Registry */}
        <div className="card p-4" style={{ borderTop: "3px solid #0B1B3A" }}>
          <h3 className="font-heading font-bold uppercase text-sm tracking-widest mb-3" style={{ color: "#0B1B3A" }}>
            KNR Enterprises Statutory Registry
          </h3>
          <div className="space-y-2 font-body text-sm" style={{ color: "#64748B" }}>
            <div className="font-mono text-sm" style={{ color: "#0F172A" }}>GSTIN: 36CUHPK5939D1ZG</div>
            <div className="flex items-start gap-1.5">
              <MapPin size={14} style={{ color: "#0B1B3A", flexShrink: 0, marginTop: 2 }} />
              H.No 1-77/6, Near HP Petrol Pump, Chevella (Mdl &amp; Vill), Ranga Reddy, Telangana 501503
            </div>
            <div className="flex items-start gap-1.5">
              <span style={{ color: "#0B1B3A", flexShrink: 0 }}>✉</span>
              <a href="mailto:knrenterprises679@gmail.com" style={{ color: "#E8710A" }}>knrenterprises679@gmail.com</a>
            </div>
            <div className="flex items-start gap-1.5 mt-2">
              <CheckCircle size={14} style={{ color: "#168A48", flexShrink: 0, marginTop: 2 }} />
              <span>Zero online payment gateway. Institutional WhatsApp indent ordering for verified gram panchayats, ULBs and contractors.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
