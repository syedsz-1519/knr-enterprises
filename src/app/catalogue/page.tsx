"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, ChevronRight, MessageSquare } from "lucide-react";
import ProductCard3D from "@/components/ProductCard3D";

/* ─── Real product images from Unsplash (open license, free to use) ─ */
const PRODUCTS = [
  {
    id: "bleaching-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    categoryColor: "#1A4A8A",
    name: "Bleaching Powder",
    desc: "Used for drinking water treatment, surface sterilisation and waste deodorisation across municipalities.",
    detail: "Grade 3 ISI • 33% Available Chlorine • 50 kg Bag",
    unit: "50 kg / bag",
    price: 850,
    priceLabel: "₹850",
    priceUnit: "/ bag",
    inStock: true,
    soldBy: "Sold by kg · WhatsApp / Phone / Face-to-face",
    imageBg: "#EBF4FF",
    // Bleaching powder / chemical white powder
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    handling:
      "⚠ Wear gloves and a face mask when handling. Keep away from acids and heat. Store in a dry, ventilated area. Do not inhale dust. Wash hands after contact.",
  },
  {
    id: "lime-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    categoryColor: "#8B6914",
    name: "Lime Powder",
    desc: "Slaked lime for pools, pest control, whitewashing and soil stabilisation in civic infrastructure projects.",
    detail: "Ca(OH)₂ ≥ 90% · Agricultural Grade · 25 kg Pack",
    unit: "25 kg / pack",
    price: 60,
    priceLabel: "₹60",
    priceUnit: "/ kg",
    inStock: true,
    soldBy: "Sold by kg · WhatsApp / Phone / Face-to-face",
    imageBg: "#FEFCE8",
    // White powder / lime
    imageUrl: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80",
    handling:
      "⚠ Irritant. Avoid contact with eyes and skin. Use rubber gloves and safety goggles. Keep dry and sealed — moisture causes heat. Do not mix with acids.",
  },
  {
    id: "malathion",
    category: "Pest Control",
    catId: "pest-control",
    categoryColor: "#9A3412",
    name: "Malathion",
    desc: "Organophosphate insecticide for mosquito fogging, agricultural pest control and vector eradication drives.",
    detail: "WHO Spec PES/3.97 · 2% DP · 5 kg Pack",
    unit: "5 kg / pack",
    price: 650,
    priceLabel: "₹650",
    priceUnit: "/ litre",
    inStock: true,
    soldBy: "Sold by litre · WhatsApp / Phone / Face-to-face",
    imageBg: "#FFF7ED",
    // Pesticide / chemical bottle
    imageUrl: "https://images.unsplash.com/photo-1563720223523-d4dbaf4d1b04?w=600&q=80",
    handling:
      "⚠ Toxic — restricted chemical. Use only by trained operators. Full PPE required: gloves, goggles, respirator. Keep away from water sources, food and children. Antidote: Atropine.",
  },
  {
    id: "delta-fog",
    category: "Pest Control",
    catId: "pest-control",
    categoryColor: "#BE123C",
    name: "Delta Fog",
    desc: "Deltamethrin-based insecticide concentrate for thermal fogging against mosquitoes, flies and dengue vectors. Chemical concentrate — fogging machine sold separately.",
    detail: "Deltamethrin 10% EC · 1 L Concentrate per bottle",
    unit: "1 L / bottle",
    price: 980,
    priceLabel: "₹980",
    priceUnit: "/ litre",
    inStock: true,
    soldBy: "Sold by litre · WhatsApp / Phone / Face-to-face",
    imageBg: "#FFF1F2",
    // Fogging / spray bottle
    imageUrl: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80",
    handling:
      "⚠ Toxic concentrate — always dilute before use. Keep people and animals away from fogged areas for 2 hours. Full PPE required. Store below 30°C, away from flames.",
  },
  {
    id: "street-light",
    category: "Civic Supplies",
    catId: "civic-supplies",
    categoryColor: "#7A5410",
    name: "Street Light",
    desc: "IP66-rated LED street fixtures for municipal roads, panchayat paths, and public spaces. Surge-protected.",
    detail: "45W / 90W · 6500K Daylight · IP66 Surge Protected",
    unit: "Per piece",
    price: 2000,
    priceLabel: "₹2,000",
    priceUnit: "/ piece (45W)",
    inStock: true,
    soldBy: "Sold by piece · WhatsApp / Phone / Face-to-face",
    imageBg: "#FEFCE8",
    // LED street light
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
  },
  {
    id: "dust-bins",
    category: "Waste Management",
    catId: "waste-management",
    categoryColor: "#166534",
    name: "Dust Bins",
    desc: "Heavy-duty HDPE dual-compartment bins for Swachh Bharat compliance. Wheeled for easy movement.",
    detail: "HDPE · 120L / 240L · Dual Wet & Dry · Wheeled",
    unit: "Per piece",
    price: 2400,
    priceLabel: "₹2,400",
    priceUnit: "/ pair",
    inStock: true,
    soldBy: "Sold by piece · WhatsApp / Phone / Face-to-face",
    imageBg: "#F0FDF4",
    // Waste / recycling bins
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  },
  {
    id: "green-mat",
    category: "Civic Supplies",
    catId: "civic-supplies",
    categoryColor: "#065F46",
    name: "Green Mat",
    desc: "UV-stabilised heavy-duty artificial grass mat for parks, public buildings, footpaths and civic landscaping.",
    detail: "200 GSM · UV-Proof · 1m × 50m Roll",
    unit: "Per sq. metre",
    price: 1650,
    priceLabel: "₹1,650",
    priceUnit: "/ piece",
    inStock: true,
    soldBy: "Sold by piece / sq m · WhatsApp / Phone",
    imageBg: "#ECFDF5",
    // Artificial grass / green mat
    imageUrl: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
  },
  {
    id: "all-sanitization-tools",
    category: "Tools",
    catId: "tools",
    categoryColor: "#1E40AF",
    name: "All Sanitization Tools",
    desc: "Complete set of municipal-grade brooms, iron shovels, squeegees, wipers and cleaning accessories.",
    detail: "Brooms, Iron Shovels, Squeegees, Wipers · Municipal Grade",
    unit: "Per set",
    price: 1200,
    priceLabel: "₹1,200",
    priceUnit: "/ set",
    inStock: true,
    soldBy: "Sold by set / piece · WhatsApp / Phone",
    imageBg: "#EFF6FF",
    // Cleaning tools / mop bucket
    imageUrl: "https://images.unsplash.com/photo-1587316205021-27a0426cdaef?w=600&q=80",
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
      !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const cartItems = PRODUCTS.filter((p) => (quantities[p.id] ?? 0) > 0);
  const cartCount = cartItems.reduce((s, p) => s + (quantities[p.id] ?? 0), 0);
  const cartTotal = cartItems.reduce((sum, p) => sum + p.price * (quantities[p.id] ?? 0), 0);

  function buildWAMessage() {
    const lines = cartItems.map((p) => `• ${p.name} × ${quantities[p.id]} (${p.unit})`);
    return encodeURIComponent(
      `Indent Request – KNR Enterprises\n\n${lines.join("\n")}\n\nEstimated Total: ₹${cartTotal.toLocaleString("en-IN")}\n\nPlease confirm availability and dispatch date.`
    );
  }

  return (
    <>
      {/* ── Main content ── */}
      <div className="container-app pt-4 pb-28">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-3" aria-label="Breadcrumb">
          <Link href="/" className="font-body text-xs hover:underline" style={{ color: "#64748B" }}>Home</Link>
          <ChevronRight size={12} style={{ color: "#94a3b8" }} />
          <span className="font-body text-xs font-medium" style={{ color: "#0B1B3A" }}>Catalogue</span>
        </nav>

        {/* Header */}
        <div className="mb-5">
          <h1 className="section-heading" style={{ fontSize: "clamp(1.6rem, 5vw, 2.5rem)" }}>Catalogue</h1>
          <p className="font-body text-sm mt-2 max-w-xl" style={{ color: "#64748B" }}>
            Set a quantity on each item, then send the order slip. All items sold by KNR Enterprises, Chevella.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#94a3b8" }} />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Bleaching Powder, Street Light, Bins..."
            className="input-field pl-9"
            style={{ fontSize: 15 }}
          />
        </div>

        {/* Category filter pills */}
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
                  cursor: "pointer",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Responsive product grid ── */}
        {filtered.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="font-body text-sm" style={{ color: "#64748B" }}>No products match your search.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              // 1 col mobile, 2 col tablet, 3 col desktop
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(0.75rem, 2vw, 1.25rem)",
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

      {/* ── Sticky cart bar ── */}
      <div
        className="fixed bottom-[60px] md:bottom-0 left-0 right-0 z-40"
        style={{
          background: "#0B1B3A",
          boxShadow: "0 -4px 16px rgba(11,27,58,0.25)",
        }}
      >
        <div className="container-app">
          <div
            className="flex items-center justify-between"
            style={{ height: 56, padding: "0 0.25rem" }}
          >
            {/* Cart info */}
            <div className="flex items-center gap-3">
              <div
                style={{
                  position: "relative",
                  width: 38,
                  height: 38,
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
                      top: -6, right: -6,
                      background: "#FFFFFF",
                      color: "#E8710A",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      width: 18, height: 18,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                    }}
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", color: "#FFFFFF" }}>
                  {cartCount > 0 ? `${cartCount} Item${cartCount !== 1 ? "s" : ""} · View Order Slip` : "0 Items · View Order Slip"}
                </div>
                {cartTotal > 0 && (
                  <div style={{ fontFamily: "'Courier Prime', monospace", fontWeight: 700, fontSize: 12, color: "#E8710A" }}>
                    ₹{cartTotal.toLocaleString("en-IN")} est.
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="/order-slip"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "#E8710A", color: "#FFFFFF",
                  borderRadius: 8, padding: "0 14px", height: 40,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 13, letterSpacing: "0.05em",
                  textTransform: "uppercase", textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="hidden sm:inline">View Order Slip</span>
                <span className="sm:hidden">Order Slip</span>
                <ChevronRight size={14} />
              </Link>

              {cartCount > 0 && (
                <a
                  href={`https://wa.me/918886175855?text=${buildWAMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#168A48", borderRadius: 8, width: 40, height: 40, flexShrink: 0,
                  }}
                  aria-label="Send order on WhatsApp"
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
