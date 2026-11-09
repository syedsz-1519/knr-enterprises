import Link from "next/link";
import { MapPin, Mail, CheckCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0B1B3A", color: "#FFFFFF" }}>
      <div className="container-app py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="flex items-center justify-center rounded-lg font-heading font-bold text-white text-sm shrink-0"
                style={{ width: 40, height: 40, background: "rgba(255,255,255,0.1)" }}
              >
                KNR
              </div>
              <div>
                <div className="font-heading font-bold text-sm uppercase tracking-wider">KNR Enterprises</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Premier institutional supply depot</div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Gram panchayats, municipalities, and civil infrastructure contractors across Ranga Reddy District.
            </p>
            <div className="mt-3 font-mono text-xs tracking-wider" style={{ color: "#C98A1B" }}>
              GSTIN: 36CUHPK5939D1ZG
            </div>
          </div>

          {/* Depot */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">Depot Location</h4>
            <div className="font-body text-sm space-y-1" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>H.No 1-77/6, Near HP Petrol Pump</p>
              <p>Chevella Mandal, Ranga Reddy</p>
              <p>Telangana – 501503</p>
            </div>
            <a
              href="https://maps.google.com/?q=Chevella+KNR+Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 font-heading font-semibold text-xs uppercase tracking-wider"
              style={{ color: "#C98A1B" }}
            >
              <MapPin size={12} /> Open in Maps
            </a>
          </div>

          {/* Officers */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">Direct Officers</h4>
            <div className="space-y-3">
              <div>
                <div className="font-heading font-semibold text-sm">K. Narendar Reddy</div>
                <div className="font-body text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Managing Proprietor</div>
                <a href="tel:8886175855" className="flex items-center gap-1.5 font-mono text-sm" style={{ color: "#E8710A" }}>
                  <Phone size={12} /> +91 88861 75855
                </a>
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">G. Siva</div>
                <div className="font-body text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Depot Operations</div>
                <a href="tel:9640195798" className="flex items-center gap-1.5 font-mono text-sm" style={{ color: "#E8710A" }}>
                  <Phone size={12} /> +91 96401 95798
                </a>
              </div>
            </div>
          </div>

          {/* Quick links + verification */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">Quick Links</h4>
            <div className="space-y-2 mb-4">
              {[
                { href: "/", label: "Home" },
                { href: "/catalogue", label: "Catalogue" },
                { href: "/contact", label: "Contact" },
                { href: "/admin", label: "Admin Login" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block font-body text-sm hover:underline" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="space-y-1.5">
              {["Telangana Civil Depot Clearance", "Panchayat Indent Approved", "Instant WhatsApp Indent Slips"].map((v) => (
                <div key={v} className="flex items-center gap-2 font-body text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <CheckCircle size={12} style={{ color: "#73dc90", flexShrink: 0 }} />
                  {v}
                </div>
              ))}
            </div>

            <div className="mt-3">
              <a href="mailto:knrenterprises679@gmail.com" className="flex items-center gap-1.5 font-body text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                <Mail size={12} /> knrenterprises679@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="container-app flex flex-wrap items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <span>© 2024 KNR Enterprises · Chevella, Telangana. All municipal rights reserved.</span>
          <span className="font-mono">Portal Build v2.4</span>
        </div>
      </div>
    </footer>
  );
}
