"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Search, ShoppingCart, CheckCircle, Minus, Plus } from "lucide-react";

/* ─── Catalogue data ─────────────────────────────────────────────── */

interface CatalogueItem {
  id: string;
  category: string;
  catId: string;
  name: string;
  desc: string;
  detail: string;
  spec: string;
  unit: string;
  price: number;
  priceLabel: string;
  emoji: string;
  bg: string;
  hsn: string;
  inStock: boolean;
  soldBy: string;
}

const items: CatalogueItem[] = [
  {
    id: "bleaching-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    name: "Bleaching Powder",
    desc: "High suitable for drinking water remediation, deodorisation, and surface sterilisation.",
    detail: "Standard Grade • Grade 3 ISI HDPE",
    spec: "Grade 3 • 33% Available Chlorine",
    unit: "50 kg / bag",
    price: 850,
    priceLabel: "₹850/unit",
    emoji: "🧴",
    bg: "#FFF7ED",
    hsn: "2828.10",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "lime-powder",
    category: "Disinfectant",
    catId: "disinfectants",
    name: "Lime Powder",
    desc: "High suitable for making pools, pest mitigation, and killing organisations.",
    detail: "Standard Grade • Slaked & Moisture-Proof",
    spec: "Ca(OH)₂ ≥ 90% • 25 kg Pack",
    unit: "25 kg / kg",
    price: 60,
    priceLabel: "₹60/kg",
    emoji: "🪣",
    bg: "#F0FDF4",
    hsn: "2522.20",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "malathion",
    category: "Pest Control",
    catId: "pest-control",
    name: "Malathion",
    desc: "Particularly useful for outdoor home disease control, mosquito fogging, and vector eradication.",
    detail: "Standard Grade • 2% DP Vector Eradication",
    spec: "WHO Spec PES/3.97 • 5 kg Pack",
    unit: "5 kg / litre",
    price: 650,
    priceLabel: "₹650/litre",
    emoji: "🧪",
    bg: "#FFF7ED",
    hsn: "3808.91",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "delta-fog",
    category: "Pest Control",
    catId: "pest-control",
    name: "Delta Fog",
    desc: "Anti-malaria anti-dengue fogging agent for narrow-target chemical dosage systems.",
    detail: "Standard Grade • Thermal Pulse-Jet Fogger",
    spec: "10% EC • 1L Concentrate",
    unit: "1 kg / 2 litre",
    price: 980,
    priceLabel: "₹980/litre",
    emoji: "💨",
    bg: "#EFF6FF",
    hsn: "3808.91",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "street-light",
    category: "Civic Supplies",
    catId: "civic-supplies",
    name: "Street Light",
    desc: "Industrial energy-saving surge-protected, high-lumen output for municipal roadways.",
    detail: "Standard Grade • 45W / 90W Surge Protected",
    spec: "45W / 90W • 6500K Daylight • IP66",
    unit: "Per unit",
    price: 2000,
    priceLabel: "₹2,000 / ₹3,600",
    emoji: "💡",
    bg: "#FEFCE8",
    hsn: "9405.10",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "dust-bins",
    category: "Civic Supplies",
    catId: "civic-supplies",
    name: "Dust Bins",
    desc: "UV-resistant, impact-proof, heavy duty municipal bins, with dual wet and dry storage.",
    detail: "Standard Grade • Dual Wet & Dry 120L / 240L",
    spec: "HDPE • Dual Compartment • 120L / 240L",
    unit: "4 / 1 piece",
    price: 2400,
    priceLabel: "₹2,400/pair",
    emoji: "🗑️",
    bg: "#F8FAFC",
    hsn: "3924.90",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "green-mat",
    category: "Civic Supplies",
    catId: "civic-supplies",
    name: "Green Mat",
    desc: "UV-proof heavy duty mat for your growing parks, gardens, and municipal public buildings.",
    detail: "Standard Grade • UV-Proof Heavy Duty Roll",
    spec: "200 GSM • 1m × 50m Roll",
    unit: "1 sq m / 1 piece",
    price: 1650,
    priceLabel: "₹1,650/piece",
    emoji: "🟩",
    bg: "#F0FDF4",
    hsn: "5603.94",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
  {
    id: "all-sanitization-tools",
    category: "Tools",
    catId: "tools",
    name: "All Sanitization Tools",
    desc: "Comprises all kinds of heavy duty brooms, rakes, and cleaning accessories.",
    detail: "Standard Grade • Brooms, Iron Shovels, Wipers",
    spec: "Municipal Grade • Bulk Pack",
    unit: "Per set",
    price: 1200,
    priceLabel: "₹1,200 / set",
    emoji: "🧹",
    bg: "#FFF7ED",
    hsn: "9603.90",
    inStock: true,
    soldBy: "Sold by: WhatsApp, Phone, Face-to-face Items",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Supplies" },
  { id: "disinfectants", label: "Disinfectants" },
  { id: "pest-control", label: "Pest Control" },
  { id: "civic-supplies", label: "Civic Supplies" },
  { id: "tools", label: "Tools" },
];

/* ─── Component ──────────────────────────────────────────────────── */

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function setQty(id: string, val: number) {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, val) }));
  }

  const filtered = items.filter((item) => {
    const matchCat = activeCategory === "all" || item.catId === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const cartItems = items.filter((i) => (quantities[i.id] ?? 0) > 0);
  const cartTotal = cartItems.reduce(
    (sum, i) => sum + i.price * (quantities[i.id] ?? 0),
    0
  );
  const cartCount = cartItems.reduce((s, i) => s + (quantities[i.id] ?? 0), 0);

  // Build WhatsApp message
  function buildWAMessage() {
    const lines = cartItems.map(
      (i) => `${i.name} × ${quantities[i.id]} (${i.unit})`
    );
    return encodeURIComponent(
      `Indent Request – KNR Enterprises\n\n${lines.join("\n")}\n\nEstimated Total: ₹${cartTotal.toLocaleString("en-IN")}\n\nPlease confirm availability.`
    );
  }

  return (
    <div className="container-app py-4">
      {/* Header */}
      <div className="mb-4">
        <div
          className="inline-flex items-center gap-1.5 font-heading font-semibold uppercase text-xs tracking-widest mb-2"
          style={{ color: "#E8710A" }}
        >
          <span className="block w-7 h-0.5 rounded-full" style={{ background: "#C98A1B" }} />
          Direct Procurement Channels
        </div>
        <h1 className="section-heading text-3xl">Catalogue</h1>
        <p className="font-body text-sm mt-1" style={{ color: "#64748B" }}>
          Set a quantity on each item you need, then send the order slip. The grade on each item is sold by KNR Enterprises.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#64748B" }} />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Bleaching Powder, Street Light, Bins..."
          className="input-field pl-10"
        />
      </div>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="flex-shrink-0 font-heading font-bold uppercase text-xs tracking-widest px-4 py-2 rounded-full transition-colors"
            style={{
              background: activeCategory === cat.id ? "#0B1B3A" : "#FFFFFF",
              color: activeCategory === cat.id ? "#FFFFFF" : "#0B1B3A",
              border: "1px solid #E2E8F0",
              minHeight: 36,
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Item list */}
      <div className="space-y-4 mb-28">
        {filtered.map((item) => {
          const qty = quantities[item.id] ?? 0;
          return (
            <div key={item.id} id={item.id} className="card overflow-hidden">
              <div className="flex items-stretch">
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-20 flex-shrink-0 text-3xl"
                  style={{ background: item.bg, minHeight: 120 }}
                >
                  {item.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 p-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <div
                        className="font-heading font-bold uppercase text-[11px] tracking-widest"
                        style={{ color: "#E8710A" }}
                      >
                        {item.category}
                      </div>
                      <div
                        className="font-heading font-bold text-base uppercase tracking-wide leading-tight"
                        style={{ color: "#0B1B3A" }}
                      >
                        {item.name}
                      </div>
                    </div>
                    {item.inStock && (
                      <span
                        className="flex-shrink-0 inline-flex items-center gap-1 font-heading font-bold uppercase text-[10px] tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(22,138,72,0.1)",
                          color: "#168A48",
                          border: "1px solid rgba(22,138,72,0.3)",
                        }}
                      >
                        <CheckCircle size={10} /> In Stock
                      </span>
                    )}
                  </div>

                  <p className="font-body text-xs leading-snug mb-1.5" style={{ color: "#64748B" }}>
                    {item.desc}
                  </p>

                  <div className="font-body text-xs mb-2" style={{ color: "#64748B" }}>
                    {item.detail}
                  </div>

                  {/* Price + unit */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className="font-mono font-bold text-base"
                      style={{ color: "#E8710A" }}
                    >
                      {item.priceLabel}
                    </span>
                    <span className="font-body text-xs" style={{ color: "#64748B" }}>
                      {item.unit}
                    </span>
                  </div>

                  {/* Sold by */}
                  <div className="font-body text-[11px] mb-3" style={{ color: "#64748B" }}>
                    {item.soldBy}
                  </div>

                  {/* Stepper + CTA */}
                  <div className="flex items-center gap-2">
                    {/* Quantity stepper */}
                    <div
                      className="flex items-center rounded-lg overflow-hidden"
                      style={{ border: "1px solid #E2E8F0", background: "#FFFFFF" }}
                    >
                      <button
                        onClick={() => setQty(item.id, qty - 1)}
                        className="flex items-center justify-center font-bold text-lg"
                        style={{
                          width: 44,
                          height: 44,
                          color: "#0B1B3A",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span
                        className="font-mono font-bold text-base"
                        style={{
                          width: 40,
                          textAlign: "center",
                          color: "#0F172A",
                          display: "inline-block",
                        }}
                      >
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(item.id, qty + 1)}
                        className="flex items-center justify-center font-bold text-lg"
                        style={{
                          width: 44,
                          height: 44,
                          color: "#0B1B3A",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Add to indent */}
                    <button
                      onClick={() => qty === 0 && setQty(item.id, 1)}
                      className="btn-primary flex-1 text-sm"
                      style={{ minHeight: 44, fontSize: 13 }}
                    >
                      {qty > 0 ? (
                        <>
                          <CheckCircle size={14} />
                          Added ({qty})
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          Add to Indent
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─ Sticky cart bar ─ */}
      {cartCount > 0 && (
        <div
          className="fixed bottom-16 md:bottom-0 left-0 right-0 z-50 px-4 py-3"
          style={{
            background: "#0B1B3A",
            boxShadow: "0 -4px 6px -1px rgba(11,27,58,0.2)",
          }}
        >
          <div className="container-app flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <ShoppingCart size={18} style={{ color: "#E8710A", flexShrink: 0 }} />
              <div>
                <div className="font-heading font-bold uppercase text-xs tracking-widest text-white">
                  {cartCount} Item{cartCount !== 1 ? "s" : ""} · View Order Slip
                </div>
                <div className="font-mono text-sm" style={{ color: "#E8710A" }}>
                  ₹{cartTotal.toLocaleString("en-IN")} est.
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="/order-slip"
                className="btn-primary text-sm"
                style={{ minHeight: 44, fontSize: 13 }}
              >
                View Order Slip →
              </Link>
              <a
                href={`https://wa.me/918886175855?text=${buildWAMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
                style={{ minHeight: 44, fontSize: 13 }}
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
