import Link from "next/link";
import { MapPin, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "#0B1B3A", color: "#FFFFFF" }}
    >
      <div className="container-app py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-sm"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
              >
                KNR
              </div>
              <div>
                <div className="font-heading font-bold text-sm uppercase tracking-wider">
                  KNR Enterprises
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Premier institutional supply depot
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              Premier institutional supply depot for gram panchayats, municipalities, and civil infrastructure
              contractors across Ranga Reddy District.
            </p>
            <div className="mt-3 font-mono text-xs tracking-wider" style={{ color: "#C98A1B" }}>
              GSTIN: 36CUHPK5939D1ZG
            </div>
          </div>

          {/* Depot Location */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">
              Depot Location
            </h4>
            <div className="font-body text-sm leading-relaxed space-y-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>H.No 1-77/6, Near HP Petrol Pump</p>
              <p>Chevella Mandal, Ranga Reddy District</p>
              <p>Telangana – 501503</p>
            </div>
            <a
              href="https://maps.google.com/?q=Chevella+Depot+Yard+KNR+Enterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 font-heading font-semibold text-xs uppercase tracking-wider"
              style={{ color: "#C98A1B" }}
            >
              <MapPin size={12} />
              Chevella Depot Anchor Yard
            </a>
          </div>

          {/* Direct Officers */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">
              Direct Officers
            </h4>
            <div className="space-y-3">
              <div>
                <div className="font-heading font-semibold text-sm">K. Narendar Reddy</div>
                <a href="tel:8886175855" className="font-mono text-sm" style={{ color: "#E8710A" }}>
                  +91 88861 75855
                </a>
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">G. Siva</div>
                <a href="tel:9640195798" className="font-mono text-sm" style={{ color: "#E8710A" }}>
                  +91 96401 95798
                </a>
              </div>
            </div>
          </div>

          {/* Civic Verification */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-3">
              Civic Verification
            </h4>
            <div className="space-y-2">
              {[
                "Telangana Civil Depot Clearance",
                "Panchayat Indent Approved",
                "Instant WhatsApp Indent Slips",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <CheckCircle size={14} style={{ color: "#73dc90", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="mailto:knrenterprises679@gmail.com"
                className="flex items-center gap-1.5 font-body text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <Mail size={13} />
                knrenterprises679@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container-app flex flex-wrap items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span>© 2024 KNR Enterprises · Chevella, Telangana. All municipal rights reserved.</span>
          <span className="font-mono">Institutional Portal Build v2.4</span>
        </div>
      </div>
    </footer>
  );
}
