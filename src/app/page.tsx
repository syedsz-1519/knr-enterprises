import Link from "next/link";
import { Phone, ArrowRight, ChevronRight, Star, Check, Zap, Shield, Truck, Award } from "lucide-react";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION WITH GRADIENT ─── */}
      <section className="relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] opacity-95"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="container-app py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-orange-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-orange-300">✨ Serving 500+ Institutions</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Municipal Supplies
              <span className="block text-orange-400 mt-2">Made Simple</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Institutional-grade sanitation chemicals, civic equipment & infrastructure supplies. GST-compliant, directly from Chevella depot to your mandal in 24-48 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/catalogue" className="btn-primary">
                Browse Products
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/918886175855" target="_blank" className="btn-secondary">
                💬 WhatsApp Quote
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-orange-400">33</div>
                <div className="text-sm text-gray-300">Districts Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">10Y+</div>
                <div className="text-sm text-gray-300">Trusted Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container-app">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "✓", title: "GST Verified", desc: "36CUHPK5939D1ZG" },
              { icon: "⚡", title: "24-48h Delivery", desc: "All Districts" },
              { icon: "🛡️", title: "ISI Certified", desc: "Quality Assured" },
              { icon: "💰", title: "Best Rates", desc: "Wholesale Direct" },
            ].map((badge, idx) => (
              <div key={idx} className="card p-4 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{badge.title}</div>
                <div className="text-xs text-gray-600 mt-1">{badge.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS SHOWCASE ─── */}
      <section className="py-20">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Complete Product Range
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for municipal operations, in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Bleaching Powder", 
                desc: "ISI Grade 1, 33%+ chlorine potency",
                emoji: "🧴",
                icon: "🧪",
                color: "from-orange-100 to-orange-50",
                price: "₹450/bag"
              },
              { 
                title: "Pest Control", 
                desc: "Malathion DP, thermal foggers",
                emoji: "🧪",
                icon: "🪲",
                color: "from-red-100 to-red-50",
                price: "₹1200+",
                popular: true
              },
              { 
                title: "Waste Management", 
                desc: "HDPE dustbins (120L/240L)",
                emoji: "🗑️",
                icon: "♻️",
                color: "from-green-100 to-green-50",
                price: "₹3200+",
              },
              { 
                title: "Street Lighting", 
                desc: "IP66 LED fixtures, surge protected",
                emoji: "💡",
                icon: "⚡",
                color: "from-yellow-100 to-yellow-50",
                price: "₹2800+",
              },
              { 
                title: "Sanitation Tools", 
                desc: "Safety jackets, gloves, sprayers",
                emoji: "🧹",
                icon: "🛠️",
                color: "from-blue-100 to-blue-50",
                price: "Bulk Pricing",
              },
              { 
                title: "Landscaping", 
                desc: "UV-resistant artificial grass",
                emoji: "🟩",
                icon: "🌱",
                color: "from-teal-100 to-teal-50",
                price: "₹40+/sqft",
              },
            ].map((product, idx) => (
              <Link 
                key={idx}
                href="/catalogue"
                className={`card overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group relative ${product.popular ? 'ring-2 ring-orange-400' : ''}`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${product.color} h-32 flex items-center justify-center`}>
                  <span className="text-6xl">{product.emoji}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-600">{product.price}</span>
                    <button className="bg-orange-400 text-white p-2 rounded-lg group-hover:bg-orange-500 transition">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/catalogue" className="btn-primary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b]">
        <div className="container-app">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why 500+ Institutions Trust Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "10+ Years Experience", desc: "Proven track record in municipal procurement" },
              { icon: Truck, title: "Rapid Delivery", desc: "Same-day Chevella pickup, 24-48h nationwide" },
              { icon: Shield, title: "Complete Compliance", desc: "GST verified, tender-approved, audit-ready" },
              { icon: Zap, title: "Direct Supply", desc: "No middlemen, direct manufacturer partnerships" },
              { icon: Check, title: "Quality Assured", desc: "ISI & CIB certified materials tested" },
              { icon: Phone, title: "Instant Support", desc: "15-minute quotation, direct officer contact" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition">
                <item.icon size={32} className="text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container-app">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chevella Gram Panchayat", role: "Municipal Official", text: "Excellent service, reliable supply, perfect for our monsoon preparedness." },
              { name: "Moinabad Municipality", role: "Procurement Head", text: "KNR delivers on time, every time. Best wholesale rates in the district." },
              { name: "Rajendranagar Contractor", role: "Project Manager", text: "Professional team, quality products, competitive pricing. Highly recommended!" },
            ].map((testimonial, idx) => (
              <div key={idx} className="card p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20">
        <div className="container-app max-w-3xl">
          <div className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] rounded-2xl p-8 md:p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Next Bulk Order?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Get GST quotation in 15 minutes. WhatsApp or call our officers directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918886175855"
                target="_blank"
                className="btn-secondary"
              >
                💬 WhatsApp Us Now
              </a>
              <a href="tel:8886175855" className="btn-outline text-white border-orange-400 hover:bg-orange-400 hover:text-[#0D2B5B]">
                📞 Call 8886175855
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-sm text-gray-300">
              <div className="mb-2">K. Narendar Reddy | G. Siva (Logistics)</div>
              <div>H.No 1-77/6, Near HP Petrol Pump, Chevella 501503</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
