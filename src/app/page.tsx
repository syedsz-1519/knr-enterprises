import Link from "next/link";
import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container-app py-20 md:py-32">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="mb-8">
              <Logo size="lg" variant="light" />
            </div>

            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Based in Chevella, Telangana
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Municipal Supply Partner
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sanitation chemicals, pest control, civic equipment & infrastructure supplies for gram panchayats, municipalities & contractors across Telangana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/catalogue" className="btn-primary">
                Browse Products
                <ArrowRight size={16} />
              </Link>
              <a href="tel:8886175855" className="btn-outline">
                <Phone size={16} />
                Call for Quote
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">33</div>
                <div className="text-sm text-gray-600">Districts Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Institutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10Y+</div>
                <div className="text-sm text-gray-600">In Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS OVERVIEW ─── */}
      <section className="py-20">
        <div className="container-app">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Supply</h2>
            <p className="text-gray-600">Verified, GST-compliant bulk supplies for institutional procurement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Bleaching Powder", 
                desc: "Grade 1 ISI certified, 33%+ chlorine potency",
                emoji: "🧴",
                cat: "Disinfectants"
              },
              { 
                title: "Pest Control", 
                desc: "Malathion DP, thermal foggers, larvicides",
                emoji: "🧪",
                cat: "Vector Control"
              },
              { 
                title: "Waste Management", 
                desc: "HDPE dustbins (120L/240L), twin bins",
                emoji: "🗑️",
                cat: "Solid Waste"
              },
              { 
                title: "Street Lighting", 
                desc: "IP66 LED fixtures, surge protected",
                emoji: "💡",
                cat: "Infrastructure"
              },
              { 
                title: "Sanitation Tools", 
                desc: "Safety jackets, gloves, sprayers, brooms",
                emoji: "🧹",
                cat: "PPE & Tools"
              },
              { 
                title: "Landscaping", 
                desc: "UV-resistant artificial grass rolls",
                emoji: "🟩",
                cat: "Greenery"
              },
            ].map((product, idx) => (
              <Link 
                key={idx}
                href="/catalogue"
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{product.emoji}</div>
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  {product.cat}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  View Details <ChevronRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/catalogue" className="btn-primary">
              Open Full Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST SECTION ─── */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="container-app">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <p className="text-gray-600">Institutional-grade procurement with transparency & compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "✓", title: "GST Verified", desc: "GSTIN 36CUHPK5939D1ZG • Full audit compliance" },
              { icon: "✓", title: "Direct Manufacturer", desc: "Primary supplier alliances • No middlemen" },
              { icon: "✓", title: "ISO Certified", desc: "ISI & CIB tested formulations & equipment" },
              { icon: "✓", title: "Same-Day Dispatch", desc: "Chevella depot with 4 active loading bays" },
              { icon: "✓", title: "Institutional Payments", desc: "NEFT/RTGS/Treasury challan accepted" },
              { icon: "✓", title: "48-Hour Delivery", desc: "All 33 Telangana districts covered" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-2xl font-bold text-blue-600 flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-20">
        <div className="container-app max-w-3xl">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-gray-200 mb-8">
              Get a formal GST quotation within 15 minutes. WhatsApp or call us for quick institutional procurement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/918886175855"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                WhatsApp Us
                <ArrowRight size={16} />
              </a>
              <a href="tel:8886175855" className="btn-outline justify-center text-white border-gray-400 hover:bg-gray-700">
                <Phone size={16} />
                Call 8886175855
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-300">
              <div className="mb-2">📧 knrenterprises679@gmail.com</div>
              <div>📍 H.No 1-77/6, Near HP Petrol Pump, Chevella, Telangana 501503</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTITUTIONAL INFO ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container-app">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span> GST Compliance
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                GSTIN 36CUHPK5939D1ZG • Regular taxpayer • Authorized tender vendor
              </p>
              <p className="text-xs text-gray-500">All invoices include GST-3B compliance & tender documentation</p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏢</span> Depot Location
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Chevella Central Hub · Ranga Reddy District
              </p>
              <p className="text-xs text-gray-500">Mon–Sat: 8:30 AM to 7:30 PM</p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📞</span> Contact
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                K. Narendar Reddy: 8886175855
              </p>
              <p className="text-sm text-gray-600">
                G. Siva (Logistics): 9640195798
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
