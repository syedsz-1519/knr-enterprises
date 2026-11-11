import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Facebook, Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-gradient-to-r from-[#0D2B5B] via-[#1a3a6b] to-[#0D2B5B] text-white border-t-4 border-orange-500">
      {/* Main Content */}
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo size="md" variant="dark" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Trusted institutional supplier since 2014. Serving 500+ gram panchayats, municipalities & contractors across all 33 Telangana districts with certified, high-grade sanitation and civic equipment.
            </p>
            <div className="space-y-2">
              <div className="text-orange-400 font-semibold text-sm">Certifications</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1 rounded text-xs">✓ GST Verified</span>
                <span className="bg-white/10 px-3 py-1 rounded text-xs">✓ ISI Certified</span>
                <span className="bg-white/10 px-3 py-1 rounded text-xs">✓ CIB Approved</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-orange-300 uppercase tracking-widest">Navigation</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/catalogue" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-orange-400 transition text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Officers */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-orange-300 uppercase tracking-widest">Officers</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-300 font-semibold text-sm">K. Narendar Reddy</div>
                <div className="text-gray-400 text-xs mb-1">Municipal Relations</div>
                <a href="tel:8886175855" className="text-orange-400 hover:text-orange-300 text-sm font-mono">
                  +91 8886175855
                </a>
              </div>
              <div>
                <div className="text-gray-300 font-semibold text-sm">G. Siva</div>
                <div className="text-gray-400 text-xs mb-1">Logistics & Dispatch</div>
                <a href="tel:9640195798" className="text-orange-400 hover:text-orange-300 text-sm font-mono">
                  +91 9640195798
                </a>
              </div>
            </div>
          </div>

          {/* Depot Info */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-orange-300 uppercase tracking-widest">Chevella Depot</h3>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm">
                <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-xs">
                  H.No 1-77/6, Near HP Petrol Pump, Chevella Mandal, Ranga Reddy, Telangana 501503
                </div>
              </div>
              <div className="flex gap-2 text-sm">
                <Globe size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-xs">
                  Mon–Sat: 8:30 AM to 7:30 PM
                </div>
              </div>
              <div className="flex gap-2 text-sm">
                <Mail size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:knrenterprises679@gmail.com" className="text-orange-400 hover:text-orange-300 text-xs">
                  knrenterprises679@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mb-8"></div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <span className="text-orange-400 font-semibold">GSTIN:</span> 36CUHPK5939D1ZG | 
            <span className="ml-2 text-orange-400 font-semibold">EST:</span> 2014
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400 transition">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 bg-black/20">
        <div className="container-app text-center text-xs text-gray-400">
          © 2026 KNR Enterprises. All rights reserved. | Chevella, Telangana | Government & Panchayat Tender Authorized Vendor
        </div>
      </div>
    </footer>
  );
}
