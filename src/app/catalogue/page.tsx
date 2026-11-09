"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronRight, MessageSquare } from "lucide-react";
import ProductCard3D from "@/components/ProductCard3D";
import BleachingPowderIcon from "@/components/icons/BleachingPowderIcon";
import LimePowderIcon from "@/components/icons/LimePowderIcon";
import MalathionIcon from "@/components/icons/MalathionIcon";
import DeltaFogIcon from "@/components/icons/DeltaFogIcon";
import StreetLightIcon from "@/components/icons/StreetLightIcon";
import DustBinIcon from "@/components/icons/DustBinIcon";
import GreenMatIcon from "@/components/icons/GreenMatIcon";
import SanitizationToolsIcon from "@/components/icons/SanitizationToolsIcon";

/* ─── Product definitions ────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "bleaching-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    name: "Bleaching Powder",
    desc: "Used for drinking water treatment, surface sterilisation and waste deodorisation across municipalities.",
    detail: "Grade 3 ISI • 33% Available Chlorine • 50 kg Bag",
    unit: "50 kg / bag",
    price: 850,
    priceLabel: "₹850",
    priceUnit: "/ bag",
    inStock: true,
    soldBy: "Sold by kg • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)",
    categoryColor: "#1A4A8A",
    handling:
      "⚠ Chemical hazard. Wear gloves and a face mask when handling. Keep away from acids and heat. Store in a dry, ventilated area away from direct sunlight. Do not inhale dust. Wash hands thoroughly after contact.",
    icon: <BleachingPowderIcon size={110} />,
  },
  {
    id: "lime-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    name: "Lime Powder",
    desc: "Slaked lime for pools, pest control, whitewashing and soil stabilisation in civic infrastructure projects.",
    detail: "Ca(OH)₂ ≥ 90% • Agricultural Grade • 25 kg Pack",
    unit: "25 kg / pack",
    price: 60,
    priceLabel: "₹60",
    priceUnit: "/ kg",
    inStock: true,
    soldBy: "Sold by kg • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #FEFCE8 0%, #FEF3C7 100%)",
    categoryColor: "#8B6914",
    handling:
      "⚠ Irritant. Avoid contact with eyes and skin — causes burns. Use rubber gloves and safety goggles. Keep dry and sealed; moisture causes heat generation. Do not mix with acids.",
    icon: <LimePowderIcon size={110} />,
  },
  {
    id: "malathion",
    category: "Pest Control",
    catId: "pest-control",
    name: "Malathion",
    desc: "Organophosphate insecticide for mosquito fogging, agricultural pest control and vector eradication drives.",
    detail: "WHO Spec PES/3.97 • 2% DP • 5 kg Pack",
    unit: "5 kg / pack",
    price: 650,
    priceLabel: "₹650",
    priceUnit: "/ litre",
    inStock: true,
    soldBy: "Sold by litre • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #FFF7ED 0%, #FDEBD0 100%)",
    categoryColor: "#9A3412",
    handling:
      "⚠ Toxic — restricted chemical. Use only by trained operators. Wear full PPE: gloves, goggles, respirator. Keep away from water sources, food, and children. Dispose of empty containers per CPCB norms. Antidote: Atropine (consult a physician immediately if ingested).",
    icon: <MalathionIcon size={110} />,
  },
  {
    id: "delta-fog",
    category: "Pest Control",
    catId: "pest-control",
    name: "Delta Fog",
    desc: "Deltamethrin-based insecticide concentrate for thermal fogging against mosquitoes, flies and dengue vectors. Sold as chemical concentrate — fogging machine sold separately.",
    detail: "Deltamethrin 10% EC • 1 L Concentrate per bottle",
    unit: "1 L / bottle",
    price: 980,
    priceLabel: "₹980",
    priceUnit: "/ litre",
    inStock: true,
    soldBy: "Sold by litre • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)",
    categoryColor: "#BE123C",
    handling:
      "⚠ Toxic concentrate. Always dilute before use per label instructions — never apply undiluted. Keep people and animals away from fogged areas for at least 2 hours. Operator must wear full PPE. Store below 30°C away from flames.",
    icon: <DeltaFogIcon size={110} />,
  },
  {
    id: "street-light",
    category: "Civic Supplies",
    catId: "civic-supplies",
    name: "Street Light",
    desc: "IP66-rated LED street fixtures for municipal roads, panchayat paths, and public spaces. Surge-protected.",
    detail: "45W / 90W • 6500K Daylight • IP66 Surge Protected",
    unit: "Per piece",
    price: 2000,
    priceLabel: "₹2,000",
    priceUnit: "/ piece (45W)",
    inStock: true,
    soldBy: "Sold by piece • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)",
    categoryColor: "#7A5410",
    icon: <StreetLightIcon size={110} />,
  },
  {
    id: "dust-bins",
    category: "Waste Management",
    catId: "waste-management",
    name: "Dust Bins",
    desc: "Heavy-duty HDPE dual-compartment bins (wet & dry) for Swachh Bharat compliance. Wheeled for easy movement.",
    detail: "HDPE • 120L / 240L • Dual Wet & Dry • Wheeled",
    unit: "Per piece",
    price: 2400,
    priceLabel: "₹2,400",
    priceUnit: "/ pair",
    inStock: true,
    soldBy: "Sold by piece • WhatsApp, Phone, Face-to-face",
    bgGradient: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    categoryColor: "#166534",
    icon: <DustBinIcon size={110} />,
  },
  {
    id: "green-mat",
    category: "Civic Supplies",
    catId: "civic-supplies",
    name: "Green Mat",
    desc: "UV-stabilised heavy-duty artificial grass mat for parks, public buildings, footpaths and civic landscaping.",
    detail: "200 GSM • UV-Proof • 1m × 50m Roll",
    unit: "Per sq. metre",
    price: 1650,
    priceLabel: "₹1,650",
    priceUnit: "/ piece",
    inStock: true,
    soldBy: "Sold by piece / sq m • WhatsApp, Phone",
    bgGradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    categoryColor: "#065F46",
    icon: <GreenMatIcon size={110} />,
  },
  {
    id: "all-sanitization-tools",
    category: "Tools",
    catId: "tools",
    name: "All Sanitization Tools",
    desc: "Complete set of municipal-grade brooms, iron shovels, squeegees, wipers and cleaning accessories.",
    detail: "Brooms, Iron Shovels, Squeegees, Wipers • Municipal Grade",
    unit: "Per set",
    price: 1200,
    priceLabel: "₹1,200",
    priceUnit: "/ set",
    inStock: true,
    soldBy: "Sold by set / piece • WhatsApp, Phone",
    bgGradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    categoryColor: "#1E40AF",
    icon: <SanitizationToolsIcon size={110} />,
  },
];

const CATEGORIES = [
  { id: "all",              label: "All Supplies" },
  { id: "disinfectants",    label: "Disinfectants" },
  { id: "pest-control",     label: "Pest Control" },
  { id: "civic-supplies",   label: "Civic" },
  { id: "waste-management", label: "Waste Mgmt" },
  { id: "tools",            label: "Tools" },
];

/* ─── Page ───────────────────────────────────────────────────────── */

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function setQty(id: string, val: number) {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, val) }));
  }

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.catId === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const cartItems = PRODUCTS.filter((p) => (quantities[p.id] ?? 0) > 0);
  const cartCount = cartItems.reduce((s, p) => s + (quantities[p.id] ?? 0), 0);
  const cartTotal = cartItems.reduce(
    (sum, p) => sum + p.price * (quantities[p.id] ?? 0),
    0
  );

  function buildWAMessage() {
    const lines = cartItems.map(
      (p) => `• ${p.name} × ${quantities[p.id]} (${p.unit})`
    );
    return encodeURIComponent(
      `Indent Request – KNR Enterprises\n\n${lines.join("\n")}\n\nEstimated Total: ₹${cartTotal.toLocaleString("en-IN")}\n\nPlease confirm availability and dispatch date.`
    );
  }

  return (
    <>
      <div className="container-app pt-3 pb-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 font-body text-xs mb-3" style={{ color: "#64748B" }}>
          <Link href="/" style={{ color: "#64748B" }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: "#0B1B3A" }}>Catalogue</span>
        </div>

        {/* Header */}
        <h1 className="section-heading text-3xl mb-1">Catalogue</h1>
        <p className="font-body text-sm mb-5" style={{ color: "#64748B" }}>
          Set a quantity on each item you need, then send the order slip. The grade on each item is sold by KNR Enterprises.
        </p>

        {/* Search */}
        <div className="relative mb-3">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "#94a3b8" }}
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Bleaching Powder, Street Light, Bins..."
            className="input-field pl-9"
            style={{ fontSize: 14 }}
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-6">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex-shrink-0 font-heading font-bold uppercase text-xs tracking-widest px-4 rounded-full transition-all"
                style={{
                  height: 36,
                  background: active ? "#0B1B3A" : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#0B1B3A",
                  border: active ? "2px solid #0B1B3A" : "1px solid #E2E8F0",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── 3D Product card grid ── */}
        {filtered.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="font-body text-sm" style={{ color: "#64748B" }}>
              No products match your search.
            </p>
          </div>
        ) : (
          /* Single column on mobile, 2-col on sm+, 3-col on lg+ */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtered.map((product) => (
              <ProductCard3D
                key={product.id}
                {...product}
                qty={quantities[product.id] ?? 0}
                onQtyChange={setQty}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Sticky bottom cart bar ── */}
      <div
        className="fixed bottom-16 md:bottom-0 left-0 right-0 z-50"
        style={{
          background: "#0B1B3A",
          boxShadow: "0 -4px 12px rgba(11,27,58,0.25)",
        }}
      >
        <div className="container-app">
          <div className="flex items-center justify-between" style={{ height: 56, padding: "0 1rem" }}>
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  position: "relative",
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#E8710A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ShoppingCart size={18} color="#FFFFFF" />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      background: "#FFFFFF",
                      color: "#E8710A",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  {cartCount > 0
                    ? `${cartCount} Item${cartCount !== 1 ? "s" : ""} · View Order Slip`
                    : "0 Items · View Order Slip"}
                </div>
                {cartTotal > 0 && (
                  <div
                    style={{
                      fontFamily: "'Courier Prime', monospace",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#E8710A",
                    }}
                  >
                    ₹{cartTotal.toLocaleString("en-IN")} est.
                  </div>
                )}
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Link
                href="/order-slip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#E8710A",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 8,
                  padding: "0 14px",
                  height: 40,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                View Order Slip
                <ChevronRight size={14} />
              </Link>
              {cartCount > 0 && (
                <a
                  href={`https://wa.me/918886175855?text=${buildWAMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#168A48",
                    borderRadius: 8,
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                  }}
                  aria-label="Send on WhatsApp"
                >
                  <MessageSquare size={18} color="#FFFFFF" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
