import Link from "next/link";
import { MessageSquare, Phone, ChevronRight, Package } from "lucide-react";

const categories = [
  {
    id: "disinfectants",
    label: "Disinfectants",
    items: [
      {
        id: "bleaching-powder",
        name: "Bleaching Powder",
        desc: "Standard grade ISI HDPE packaging",
        spec: "Grade 3 • 33% Available Chlorine",
        unit: "Per 50 kg Bag",
        emoji: "🧴",
        hsn: "2828.10",
        bg: "#FFF7ED",
      },
      {
        id: "lime-powder",
        name: "Lime Powder",
        desc: "Slaked & Moisture-Proof bagging",
        spec: "Ca(OH)₂ ≥ 90% • 25 kg Pack",
        unit: "Per 25 kg Bag",
        emoji: "🪣",
        hsn: "2522.20",
        bg: "#F0FDF4",
      },
    ],
  },
  {
    id: "pest-control",
    label: "Pest Control",
    items: [
      {
        id: "malathion",
        name: "Malathion",
        desc: "2% DP Vector Eradication",
        spec: "WHO Spec PES/3.97 • 5 kg Pack",
        unit: "Per 5 kg Pack",
        emoji: "🧪",
        hsn: "3808.91",
        bg: "#FFF7ED",
      },
      {
        id: "delta-fog",
        name: "Delta Fog",
        desc: "Thermal Pulse-Jet Fogger",
        spec: "10% EC • 1L Concentrate",
        unit: "Per Litre",
        emoji: "💨",
        hsn: "3808.91",
        bg: "#EFF6FF",
      },
    ],
  },
  {
    id: "civic-supplies",
    label: "Civic Supplies",
    items: [
      {
        id: "street-light",
        name: "Street Light LED Fixtures",
        desc: "Surge Protected • IP66 Rated",
        spec: "45W / 90W • 6500K Daylight",
        unit: "Per Unit",
        emoji: "💡",
        hsn: "9405.10",
        bg: "#FEFCE8",
      },
      {
        id: "green-mat",
        name: "Green Mat",
        desc: "UV-Proof Heavy Duty Roll",
        spec: "200 GSM • 1m × 50m Roll",
        unit: "Per Roll",
        emoji: "🟩",
        hsn: "5603.94",
        bg: "#F0FDF4",
      },
      {
        id: "dust-bins",
        name: "Dust Bins (Dual Wet & Dry)",
        desc: "120L / 240L Capacity",
        spec: "HDPE • Dual Compartment",
        unit: "Per Unit",
        emoji: "🗑️",
        hsn: "3924.90",
        bg: "#F8FAFC",
      },
      {
        id: "hdpe-drums",
        name: "HDPE Sanitation Drums",
        desc: "200L Capacity • Sealed Lid",
        spec: "Virgin HDPE • UN Approved",
        unit: "Per Unit",
        emoji: "🛢️",
        hsn: "3923.10",
        bg: "#EFF6FF",
      },
    ],
  },
  {
    id: "tools",
    label: "Sanitization Tools",
    items: [
      {
        id: "all-sanitization-tools",
        name: "All Sanitization Tools",
        desc: "Brooms, Iron Shovels, Wipers",
        spec: "Municipal Grade • Bulk Pack",
        unit: "Per Set",
        emoji: "🧹",
        hsn: "9603.90",
        bg: "#FFF7ED",
      },
    ],
  },
];

export default function CataloguePage() {
  return (
    <div className="container-app py-4">
      {/* Page header */}
      <div className="mb-5">
        <div
          className="inline-flex items-center gap-1.5 font-heading font-semibold uppercase text-xs tracking-widest mb-2"
          style={{ color: "#E8710A" }}
        >
          <span
            className="block w-7 h-0.5 rounded-full"
            style={{ background: "#C98A1B" }}
          />
          Direct Procurement Channels
        </div>
        <h1 className="section-heading text-3xl">Product Catalogue</h1>
        <p className="font-body text-sm mt-2" style={{ color: "#64748B" }}>
          Rates on request. WhatsApp or call for stock confirmation and depot dispatch scheduling.
        </p>
      </div>

      {/* Quick contact strip */}
      <div className="card p-3 mb-5 flex flex-wrap gap-3">
        <a
          href="https://wa.me/918886175855?text=Indent%20Enquiry%20-%20KNR%20Enterprises%20Catalogue"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 min-w-[140px]"
        >
          <MessageSquare size={16} />
          WhatsApp Indent
        </a>
        <a href="tel:8886175855" className="btn-outline flex-1 min-w-[140px]">
          <Phone size={16} />
          Call Depot
        </a>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="section-heading text-xl mb-4">{cat.label}</h2>

            <div className="space-y-3">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="card overflow-hidden"
                >
                  <div className="flex items-stretch">
                    {/* Left icon block */}
                    <div
                      className="flex items-center justify-center w-20 flex-shrink-0 text-3xl"
                      style={{ background: item.bg }}
                    >
                      {item.emoji}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div
                            className="font-heading font-bold text-base uppercase tracking-wide leading-tight"
                            style={{ color: "#0B1B3A" }}
                          >
                            {item.name}
                          </div>
                          <div className="font-body text-sm mt-0.5" style={{ color: "#64748B" }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      {/* Spec row */}
                      <div
                        className="mt-2 pt-2 flex flex-wrap gap-x-4 gap-y-1"
                        style={{ borderTop: "1px solid #E2E8F0" }}
                      >
                        <div>
                          <span
                            className="font-heading font-semibold uppercase text-[10px] tracking-widest"
                            style={{ color: "#64748B" }}
                          >
                            Spec&nbsp;
                          </span>
                          <span className="font-body text-sm" style={{ color: "#0F172A" }}>
                            {item.spec}
                          </span>
                        </div>
                        <div>
                          <span
                            className="font-heading font-semibold uppercase text-[10px] tracking-widest"
                            style={{ color: "#64748B" }}
                          >
                            Unit&nbsp;
                          </span>
                          <span className="font-body text-sm" style={{ color: "#0F172A" }}>
                            {item.unit}
                          </span>
                        </div>
                        <div>
                          <span
                            className="font-heading font-semibold uppercase text-[10px] tracking-widest"
                            style={{ color: "#64748B" }}
                          >
                            HSN&nbsp;
                          </span>
                          <span className="font-mono text-sm" style={{ color: "#0F172A" }}>
                            {item.hsn}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={`https://wa.me/918886175855?text=Indent%20for%20${encodeURIComponent(item.name)}%20-%20KNR%20Enterprises`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp text-sm px-4"
                          style={{ minHeight: 40, fontSize: 13 }}
                        >
                          <MessageSquare size={14} />
                          Add to Indent
                        </a>
                        <a
                          href="tel:8886175855"
                          className="btn-outline text-sm px-4"
                          style={{ minHeight: 40, fontSize: 13 }}
                        >
                          <Phone size={14} />
                          Get Rate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="mt-8 card p-4 text-center"
        style={{ borderTop: "3px solid #E8710A" }}
      >
        <Package size={28} className="mx-auto mb-2" style={{ color: "#E8710A" }} />
        <h3
          className="font-heading font-bold uppercase text-lg tracking-wider mb-1"
          style={{ color: "#0B1B3A" }}
        >
          Need a Bulk Indent?
        </h3>
        <p className="font-body text-sm mb-4" style={{ color: "#64748B" }}>
          WhatsApp your quantity list for instant rate confirmation and dispatch scheduling.
        </p>
        <a
          href="https://wa.me/918886175855?text=Bulk%20Indent%20Request%20-%20KNR%20Enterprises"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full"
        >
          <MessageSquare size={16} />
          Send Bulk Indent on WhatsApp
        </a>
      </div>
    </div>
  );
}
