import { CheckCircle, Users, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container-app">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About KNR Enterprises</h1>
          <p className="text-gray-600">Telangana's institutional municipal supply partner since 2014</p>
        </div>
      </div>

      <div className="container-app py-16">
        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Equipping every gram panchayat, municipal body, and contractor with certified, high-grade sanitation and civic equipment at transparent wholesale rates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We actively empower healthier and cleaner civic habitats across Telangana through uncompromising material standards and accountable regional service.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">By the Numbers</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">10+</span>
                <span className="text-gray-600">Years in service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">500+</span>
                <span className="text-gray-600">Institutions served</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">33</span>
                <span className="text-gray-600">Districts covered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">24–48h</span>
                <span className="text-gray-600">Delivery guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "Quality First", desc: "ISI & CIB certified materials only" },
              { icon: Users, title: "Institutional Focus", desc: "Gram panchayats, ULBs, contractors" },
              { icon: Zap, title: "Fast Response", desc: "15-minute quotations, same-day dispatch" },
              { icon: Globe, title: "Full Coverage", desc: "All 33 Telangana districts" },
            ].map((item, idx) => (
              <div key={idx} className="card p-6">
                <item.icon size={32} className="text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
          <div className="space-y-6">
            {[
              { year: "2014", title: "Foundation", desc: "Started as local building & agricultural supply outlet" },
              { year: "2017", title: "Swachh Bharat Scale", desc: "Transitioned to municipal-grade sanitation" },
              { year: "2019", title: "Vector Logistics", desc: "Partnered with primary chemical producers" },
              { year: "2022", title: "Depot Expansion", desc: "Commissioned multi-bay warehouse facility" },
              { year: "2024–2026", title: "Statewide Reach", desc: "Serving all 33 districts with digital RFQ" },
            ].map((event, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  {idx < 4 && <div className="w-0.5 h-16 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="font-bold text-gray-900">{event.year} – {event.title}</div>
                  <p className="text-gray-600 text-sm mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="font-mono text-sm text-blue-600 font-bold mb-2">GSTIN</div>
              <p className="text-gray-900 font-semibold">36CUHPK5939D1ZG</p>
              <p className="text-sm text-gray-600 mt-1">Regular GST taxpayer</p>
            </div>
            <div>
              <div className="font-mono text-sm text-blue-600 font-bold mb-2">CERTIFICATIONS</div>
              <p className="text-gray-900 font-semibold">ISI & CIB Approved</p>
              <p className="text-sm text-gray-600 mt-1">All materials tested & verified</p>
            </div>
            <div>
              <div className="font-mono text-sm text-blue-600 font-bold mb-2">TENDERS</div>
              <p className="text-gray-900 font-semibold">Authorized Vendor</p>
              <p className="text-sm text-gray-600 mt-1">Government tender compliant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
