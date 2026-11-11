"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container-app">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600">Get in touch for bulk orders and procurement queries</p>
        </div>
      </div>

      <div className="container-app py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Phone */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Phone size={20} className="text-blue-600" /> Phone
              </h3>
              <div className="space-y-2 text-gray-600">
                <div>
                  <div className="font-semibold text-gray-900">K. Narendar Reddy</div>
                  <a href="tel:8886175855" className="text-blue-600 hover:underline">
                    +91 8886175855
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">G. Siva (Logistics)</div>
                  <a href="tel:9640195798" className="text-blue-600 hover:underline">
                    +91 9640195798
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail size={20} className="text-blue-600" /> Email
              </h3>
              <a href="mailto:knrenterprises679@gmail.com" className="text-blue-600 hover:underline">
                knrenterprises679@gmail.com
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" /> Address
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>H.No 1-77/6, Near HP Petrol Pump</p>
                <p>Chevella Mandal, Ranga Reddy District</p>
                <p>Telangana 501503</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Depot Hours</h4>
              <p className="text-sm text-gray-600">Mon–Sat: 8:30 AM to 7:30 PM</p>
              <p className="text-sm text-gray-600">Sunday: Closed</p>
              <p className="text-sm text-gray-600 mt-2">Response: 15 minutes (WhatsApp)</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-field"
                    placeholder="Bulk order inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary flex items-center justify-center gap-2">
                  <Send size={16} /> Send Message
                </button>
                <a href="https://wa.me/918886175855" target="_blank" className="btn-secondary flex items-center justify-center gap-2 text-center">
                  💬 WhatsApp Us
                </a>
              </div>
            </form>

            {/* FAQ Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Answers</h3>
              <div className="space-y-4">
                <div className="card p-4">
                  <p className="font-semibold text-gray-900 mb-1">How long for quotation?</p>
                  <p className="text-sm text-gray-600">Within 15 minutes via WhatsApp or email</p>
                </div>
                <div className="card p-4">
                  <p className="font-semibold text-gray-900 mb-1">What payment methods?</p>
                  <p className="text-sm text-gray-600">NEFT, RTGS, Treasury Challan for institutional orders</p>
                </div>
                <div className="card p-4">
                  <p className="font-semibold text-gray-900 mb-1">Delivery timeline?</p>
                  <p className="text-sm text-gray-600">Same-day for Chevella, 24-48 hours for other districts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
