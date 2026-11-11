import { Phone, Mail, MapPin, CheckCircle, Truck, FileText, Zap } from "lucide-react";
import Link from "next/link";

export default function BulkOrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] py-16">
        <div className="container-app text-white">
          <h1 className="text-5xl font-bold mb-4">Bulk Orders for Institutions</h1>
          <p className="text-orange-200 text-xl">
            Streamlined procurement for gram panchayats, municipalities & contractors
          </p>
        </div>
      </div>

      <div className="container-app py-20">
        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Send Requirements",
                desc: "WhatsApp your product list, quantities & delivery address",
                icon: Mail,
                duration: "5 mins"
              },
              {
                step: 2,
                title: "Get GST Quotation",
                desc: "Detailed quote with taxes & delivery charges included",
                icon: FileText,
                duration: "15 mins"
              },
              {
                step: 3,
                title: "Confirm & Pay",
                desc: "Approve quotation, make payment via NEFT/RTGS",
                icon: CheckCircle,
                duration: "30 mins"
              },
              {
                step: 4,
                title: "Delivery & Invoice",
                desc: "Fast delivery + GST invoice. Order complete!",
                icon: Truck,
                duration: "24-48h"
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 h-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <Icon size={32} className="text-orange-600 mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                    <div className="text-xs font-semibold text-orange-600 bg-orange-200 rounded px-3 py-1 inline-block">
                      {item.duration}
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-1 bg-orange-400" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Institutions Choose KNR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "📋 Government Tender Approved",
                desc: "Pre-registered with gram panchayats & municipalities. Bid-ready with all compliance docs."
              },
              {
                title: "🏅 GST Compliant Invoicing",
                desc: "Instant GST invoices (GSTIN: 36CUHPK5939D1ZG). Audit-trail ready for your records."
              },
              {
                title: "✅ ISI & CIB Certified Products",
                desc: "All materials tested & verified. Safety & quality sheets included with every shipment."
              },
              {
                title: "🚚 Guaranteed 24-48h Delivery",
                desc: "Direct from Chevella depot to your mandal. Same-day dispatch available on request."
              },
              {
                title: "💰 Wholesale Direct Pricing",
                desc: "No middlemen, no markup. Best rates in Telangana. Bulk discounts from 50+ units."
              },
              {
                title: "📞 Dedicated Account Support",
                desc: "Direct contact with K. Narendar Reddy. 15-min quotations, same-day problem resolution."
              }
            ].map((item, idx) => (
              <div key={idx} className="card p-6 border-l-4 border-orange-600">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Order Flow */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sample Bulk Order</h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Gram Panchayat Order</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Bleaching Powder: 50 bags</p>
                  <p>• Malathion DP: 10 liters</p>
                  <p>• Safety Vests: 20 units</p>
                  <p>• Gloves Kit: 15 sets</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Quotation Breakdown</h4>
                <div className="space-y-2 text-sm bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">₹28,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%):</span>
                    <span className="font-semibold">₹5,130</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-bold">Total (All In):</span>
                    <span className="font-bold text-orange-600 text-lg">₹33,630</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Timeline</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Quote: 15 mins</p>
                  <p>✓ Payment Confirmation: 30 mins</p>
                  <p>✓ Dispatch: Same day</p>
                  <p>✓ Delivery: 24-48 hours</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <p className="text-sm text-gray-600">
                <strong>Result:</strong> Panchayat gets ISI-certified materials, GST invoice for tender compliance, and fast delivery. Plus ₹1,500 bulk discount (5% off 50+ units).
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bulk Order Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                org: "Chevella Gram Panchayat",
                quote: "KNR delivers quarterly bulk orders on time, every time. Their GST compliance is perfect for our audits.",
                contact: "Municipal Official"
              },
              {
                org: "Moinabad Municipality",
                quote: "Switched from 3 suppliers to KNR. Saved 20% on costs while maintaining quality. Highly recommend!",
                contact: "Procurement Head"
              },
              {
                org: "Rajendranagar Contractor",
                quote: "Fast quotes, professional service, competitive rates. Best wholesale partner in Telangana.",
                contact: "Project Manager"
              }
            ].map((item, idx) => (
              <div key={idx} className="card p-6">
                <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
                <div className="font-semibold text-gray-900 text-sm">{item.org}</div>
                <div className="text-xs text-gray-500">{item.contact}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents & Compliance */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compliance & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "GST Certificate", icon: "📄", status: "Ready" },
              { label: "ISI Certificates", icon: "✓", status: "Included" },
              { label: "Safety Data Sheets", icon: "📋", status: "Per Order" },
              { label: "Audit Trail", icon: "📊", status: "Available" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{item.label}</div>
                <div className="text-sm text-blue-600 font-semibold">{item.status}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready for Your First Bulk Order?</h2>
          <p className="text-orange-200 text-lg mb-8 max-w-2xl mx-auto">
            Send your requirements now. GST quotation in 15 minutes, delivery in 24-48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises%2C%20I%20need%20bulk%20quotation%20for%20municipal%20supplies"
              target="_blank"
              className="btn-secondary"
            >
              💬 WhatsApp Requirements
            </a>
            <a href="tel:8886175855" className="btn-outline text-white border-orange-400 hover:bg-orange-400">
              📞 Call 8886175855
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-sm text-gray-300 mb-2">Direct Contact for Bulk Orders:</p>
            <p className="font-semibold text-lg">K. Narendar Reddy | Logistics: G. Siva</p>
            <p className="text-orange-200">Available 7am – 9pm, 7 days a week</p>
          </div>
        </section>
      </div>
    </div>
  );
}
