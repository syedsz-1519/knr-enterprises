import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg mb-2">KNR Enterprises</div>
            <p className="text-sm text-gray-400 mb-4">
              Institutional supplies for municipal government, gram panchayats & civil contractors.
            </p>
            <div className="text-xs text-gray-500 font-mono">GSTIN: 36CUHPK5939D1ZG</div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/catalogue" className="block hover:text-white transition">Products</Link>
              <Link href="/contact" className="block hover:text-white transition">Contact</Link>
              <Link href="/admin" className="block hover:text-white transition">Admin</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <div className="text-gray-300">K. Narendar Reddy</div>
                  <a href="tel:8886175855" className="hover:text-white">8886175855</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <div className="text-gray-300">G. Siva</div>
                  <a href="tel:9640195798" className="hover:text-white">9640195798</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <a href="mailto:knrenterprises679@gmail.com" className="hover:text-white">Email</a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Depot</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <div className="text-gray-300 font-medium mb-1">Chevella Central Hub</div>
                  <div className="text-xs">H.No 1-77/6, Near HP Petrol Pump</div>
                  <div className="text-xs">Ranga Reddy, Telangana 501503</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 pt-2">
                Mon–Sat: 8:30 AM to 7:30 PM
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2026 KNR Enterprises. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
