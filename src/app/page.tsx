import Link from "next/link";
import { ChevronRight, Phone, MessageSquare, CheckCircle, MapPin } from "lucide-react";

const products = [
  {
    category: "DISINFECTANT",
    name: "Bleaching Powder",
    desc: "Standard grade • Grade 3 ISI HDPE",
    emoji: "🧴",
    bg: "#FFF7ED",
  },
  {
    category: "DISINFECTANT",
    name: "Lime Powder",
    desc: "Standard grade • Slaked & Moisture-Proof",
    emoji: "🪣",
    bg: "#F0FDF4",
  },
  {
    category: "PEST CONTROL",
    name: "Malathion",
    desc: "Standard grade • 2% DP Vector Eradication",
    emoji: "🧪",
    bg: "#FFF7ED",
  },
  {
    category: "PEST CONTROL",
    name: "Delta Fog",
    desc: "Standard grade • Thermal Pulse-Jet Fogger",
    emoji: "💨",
    bg: "#EFF6FF",
  },
  {
    category: "CIVIC SUPPLIES",
    name: "Street Light",
    desc: "Standard grade • 45W / 90W Surge Protected",
    emoji: "💡",
    bg: "#FEFCE8",
  },
  {
    category: "CIVIC SUPPLIES",
    name: "Green Mat",
    desc: "Standard grade • UV-Proof Heavy Duty Roll",
    emoji: "🟩",
    bg: "#F0FDF4",
  },
  {
    category: "CIVIC SUPPLIES",
    name: "Dust Bins",
    desc: "Standard grade • Dual Wet & Dry 120L / 240L",
    emoji: "🗑️",
    bg: "#F8FAFC",
  },
  {
    category: "TOOLS",
    name: "All Sanitization Tools",
    desc: "Standard grade • Brooms, Iron Shovels, Wipers",
    emoji: "🧹",
    bg: "#FFF7ED",
  },
];

export default function HomePage() {
  return (
    <div className="container-app py-4">
      {/* Depot Status Banner */}
      <div
        className="card p-4 mb-4"
        style={{ borderLeft: "4px solid #168A48" }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "#168A48" }}
              />
              <span
                className="font-heading font-bold uppercase text-sm tracking-widest"
                style={{ color: "#168A48" }}
              >
                Chevella Central Dep... Active Dispatch
              </span>
            </div>
            <p className="font-body text-sm" style={{ color: "#64748B" }}>
              Gram Panchayat &amp; Municipal Institutional Supply Depot ·
              Ready for direct fleet dispatch across Ranga Reddy District.
            </p>
          </div>
        </div>
        {/* Quick contacts */}
        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href="tel:8886175855"
            className="flex items-center gap-1.5 font-mono text-sm"
            style={{ color: "#0B1B3A" }}
          >
            <Phone size={14} style={{ color: "#E8710A" }} />
            K. Narendar Reddy &nbsp;88861 75855
          </a>
          <a
            href="tel:9640195798"
            className="flex items-center gap-1.5 font-mono text-sm"
            style={{ color: "#0B1B3A" }}
          >
            <Phone size={14} style={{ color: "#E8710A" }} />
            G. Siva &nbsp;96401 95798
          </a>
        </div>
      </div>

      {/* Section header */}
      <div className="mb-4">
        <h2 className="section-heading text-2xl">We Supply</h2>
        <p className="font-body text-sm mt-2" style={{ color: "#64748B" }}>
          Everything on this shelf, for panchayats, municipalities and
          contractors. Tap an item to order it.
        </p>
      </div>

      {/* Product list */}
      <div className="space-y-3 mb-6">
        {products.map((product) => (
          <Link
            key={product.name}
            href={`/catalogue#${product.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="card flex items-center gap-4 p-4 hover:shadow-md transition-shadow group"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: product.bg }}
            >
              {product.emoji}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div
                className="font-heading font-bold text-xs uppercase tracking-widest mb-0.5"
                style={{ color: "#E8710A" }}
              >
                {product.category}
              </div>
              <div
                className="font-heading font-bold text-lg uppercase tracking-wide leading-tight"
                style={{ color: "#0B1B3A" }}
              >
                {product.name}
              </div>
              <div className="font-body text-sm mt-0.5" style={{ color: "#64748B" }}>
                {product.desc}
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight
              size={20}
              style={{ color: "#0B1B3A", flexShrink: 0 }}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        ))}
      </div>

      {/* CTA strip */}
      <div className="space-y-3 mb-6">
        <Link href="/catalogue" className="btn-primary w-full text-center">
          Open the Catalogue &amp; Order
        </Link>
        <Link href="/contact" className="btn-outline w-full text-center">
          Contact Us
        </Link>
      </div>

      {/* Statutory Registry */}
      <div
        className="card p-4"
        style={{ borderTop: "3px solid #0B1B3A" }}
      >
        <h3
          className="font-heading font-bold uppercase text-sm tracking-widest mb-3"
          style={{ color: "#0B1B3A" }}
        >
          KNR Enterprises Statutory Registry
        </h3>
        <div className="space-y-2 font-body text-sm" style={{ color: "#64748B" }}>
          <div className="font-mono text-sm" style={{ color: "#0F172A" }}>
            GSTIN: 36CUHPK5939D1ZG
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin size={14} style={{ color: "#0B1B3A", flexShrink: 0, marginTop: 2 }} />
            H.No 1-77/6, Near HP Petrol Pump, Chevella (Mdl &amp; Vill), Ranga Reddy, Telangana 501503
          </div>
          <div className="flex items-start gap-1.5">
            <span style={{ color: "#0B1B3A", flexShrink: 0 }}>✉</span>
            <a href="mailto:knrenterprises679@gmail.com" style={{ color: "#E8710A" }}>
              knrenterprises679@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-1.5 mt-2">
            <CheckCircle size={14} style={{ color: "#168A48", flexShrink: 0, marginTop: 2 }} />
            <span>
              Zero online payment gateway. Institutional WhatsApp indent ordering for verified gram panchayats, ULBs and contractors.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
