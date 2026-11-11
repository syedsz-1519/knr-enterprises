import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      category: "Orders & Delivery",
      items: [
        {
          q: "What's the minimum order quantity?",
          a: "We accept bulk orders from 5+ bags/units. For smaller institutional orders, we offer flexible purchase options. Contact us for details."
        },
        {
          q: "How quickly can you deliver?",
          a: "We guarantee 24-48 hour delivery across all 33 Telangana districts from our Chevella depot. Express delivery available on request."
        },
        {
          q: "Do you ship outside Telangana?",
          a: "Currently, we serve all 33 districts of Telangana. Pan-India shipping is available for bulk institutional orders. Contact us for a quote."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, NEFT, RTGS, and digital payments. Invoices are GST-compliant and can be integrated into your procurement systems."
        }
      ]
    },
    {
      category: "Products & Quality",
      items: [
        {
          q: "Are all products ISI certified?",
          a: "Yes, all our chemical and sanitation products are ISI Grade 1 or CIB certified. We maintain full compliance with BIS and CIBSE standards."
        },
        {
          q: "Can I request a product sample?",
          a: "Absolutely. We provide free samples of bleaching powder, malathion, and other products. Samples are typically available within 24 hours."
        },
        {
          q: "What's the shelf life of bleaching powder?",
          a: "ISI Grade 1 bleaching powder has a 12-month shelf life if stored in cool, dry conditions. We recommend inspection upon delivery."
        },
        {
          q: "Do you stock seasonal products?",
          a: "Yes. We maintain inventory for monsoon (water management, pest control) and summer (sanitation, lighting) requirements."
        }
      ]
    },
    {
      category: "Pricing & Quotations",
      items: [
        {
          q: "How do I get a quotation?",
          a: "WhatsApp your product list and quantity to 8886175855. We provide detailed GST quotations within 15 minutes."
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes, tiered discounts apply for orders above 50 units. Gram panchayats and municipalities qualify for additional institutional discounts."
        },
        {
          q: "Can you match competitor prices?",
          a: "We offer the best wholesale rates in Telangana. If you find a lower certified supplier, send us their quote and we'll match it."
        },
        {
          q: "Are GST invoices available immediately?",
          a: "Yes, GST invoices are generated and emailed instantly upon order confirmation. No delays."
        }
      ]
    },
    {
      category: "Compliance & Tender",
      items: [
        {
          q: "Are you tender-approved?",
          a: "Yes, we're registered with most gram panchayats and municipal tenders in Telangana. GSTIN: 36CUHPK5939D1ZG"
        },
        {
          q: "Can you provide compliance certificates?",
          a: "Absolutely. We provide ISI certificates, safety data sheets (SDS), and test reports with every shipment."
        },
        {
          q: "Do you handle government procurement?",
          a: "Yes, we specialize in institutional procurement. Our officers handle all bid documentation and compliance requirements."
        },
        {
          q: "What's your GSTIN and business registration?",
          a: "GSTIN: 36CUHPK5939D1ZG | Registered Entity: KNR Enterprises | Address: H.No 1-77/6, Chevella 501503"
        }
      ]
    },
    {
      category: "Support & Returns",
      items: [
        {
          q: "What if the product is damaged on delivery?",
          a: "We guarantee damage-free delivery. If damage occurs, report within 24 hours with photos. Replacement or refund processed immediately."
        },
        {
          q: "Do you offer returns?",
          a: "Unused products in original packaging can be returned within 7 days for refund. Opened/used products cannot be returned."
        },
        {
          q: "Who do I contact for urgent issues?",
          a: "Call K. Narendar Reddy at 8886175855 or WhatsApp for immediate support. Available 7am–9pm daily."
        },
        {
          q: "Do you provide on-site training?",
          a: "Yes, we offer free training on bleaching powder application, pest control safety, and sanitation tool usage for institutional clients."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] py-16">
        <div className="container-app text-white">
          <h1 className="text-5xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-orange-200 text-lg max-w-2xl">
            Find answers to common questions about our products, orders, and services
          </p>
        </div>
      </div>

      <div className="container-app py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left sidebar - Category links */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {faqs.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#${section.category.replace(/\s+/g, '-').toLowerCase()}`}
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
                  >
                    {section.category}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx} id={section.category.replace(/\s+/g, '-').toLowerCase()}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-400">
                  {section.category}
                </h2>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <details
                      key={itemIdx}
                      className="group bg-gray-50 rounded-lg border border-gray-200 hover:border-orange-400 transition cursor-pointer"
                    >
                      <summary className="flex items-center justify-between p-6 font-semibold text-gray-900 hover:bg-gray-100 transition">
                        <span>{item.q}</span>
                        <ChevronDown size={20} className="text-orange-600 group-open:rotate-180 transition" />
                      </summary>
                      <div className="px-6 pb-6 border-t border-gray-200 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Didn't find your answer?</h2>
          <p className="text-gray-200 mb-6 text-lg">
            Our team is here to help. Reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918886175855"
              target="_blank"
              className="btn-secondary"
            >
              💬 WhatsApp Support
            </a>
            <a 
              href="tel:8886175855"
              className="btn-outline text-white border-orange-400 hover:bg-orange-400"
            >
              📞 Call 8886175855
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
