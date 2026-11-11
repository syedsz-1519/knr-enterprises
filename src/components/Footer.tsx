import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0D2B5B] to-[#1a3a6b] text-white border-t border-orange-400/20">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="sm" variant="dark" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Institutional supplies for gram panchayats, municipalities & civil contractors across Telangana. Trusted since 2014.
            </p>
            <div className="text-xs text-orange-300 font-mono">GSTIN: 36CUHPK5939D1ZG</div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-orange-300">QUICK LINKS</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-orange-400 transition">Home</Link>
              <Link href="/catalogue" className="block hover:text-orange-400 transition">Products</Link>
              <Link href="/contact" className="block hover:text-orange-400 transition">Contact</Link>
              <Link href="/about" className="block hover:text-orange-400 transition">About</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-orange-300">CONTACT OFFICERS</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <div>
                  <div className="text-gray-100 font-medium">K. Narendar Reddy</div>
                  <a href="tel:8886175855" className="hover:text-orange-400">8886175855</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <div>
                  <div className="text-gray-100 font-medium">G. Siva</div>
                  <a href="tel:9640195798" className="hover:text-orange-400">9640195798</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <a href="mailto:knrenterprises679@gmail.com" className="hover:text-orange-400">Email</a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-orange-300">CHEVELLA DEPOT</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <div>
                  <div className="text-gray-100 font-medium mb-1">Central Hub</div>
                  <div className="text-xs">H.No 1-77/6, Near HP Petrol Pump, Ranga Reddy, Telangana 501503</div>
                </div>
              </div>
              <div className="text-xs text-orange-300 pt-2">
                ⏰ Mon–Sat: 8:30 AM to 7:30 PM
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <span>© 2026 KNR Enterprises. All rights reserved. | Chevella, Telangana</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
