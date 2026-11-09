"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Copy,
  CheckCircle,
  Clock,
  User,
  Home,
} from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="btn-outline text-sm flex-1"
      style={{ minHeight: 44, fontSize: 13 }}
      aria-label="Copy number"
    >
      {copied ? <CheckCircle size={14} style={{ color: "#168A48" }} /> : <Copy size={14} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

interface ContactCardProps {
  role: string;
  name: string;
  phone: string;
  icon: React.ReactNode;
  bg: string;
}

function ContactCard({ role, name, phone, icon, bg }: ContactCardProps) {
  const waLink = `https://wa.me/91${phone.replace(/\s+/g, "")}?text=Enquiry%20-%20KNR%20Enterprises`;

  return (
    <div className="card p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div
            className="font-heading font-semibold uppercase text-xs tracking-widest mb-0.5"
            style={{ color: "#E8710A" }}
          >
            {role}
          </div>
          <div
            className="font-heading font-bold text-xl uppercase tracking-wide"
            style={{ color: "#0B1B3A" }}
          >
            {name}
          </div>
        </div>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: bg }}
        >
          {icon}
        </div>
      </div>

      {/* Phone number row */}
      <div
        className="flex items-center gap-2 p-2.5 rounded-lg mb-3"
        style={{ background: "#EEF1F5" }}
      >
        <Phone size={14} style={{ color: "#0B1B3A" }} />
        <span className="font-mono text-sm" style={{ color: "#0F172A" }}>
          +91 {phone}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="btn-primary flex-1 text-sm"
          style={{ minHeight: 44, fontSize: 13 }}
        >
          <Phone size={14} />
          Call
        </a>
        <CopyButton text={phone.replace(/\s+/g, "")} />
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 text-sm"
          style={{ minHeight: 44, fontSize: 13 }}
        >
          <MessageSquare size={14} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("knrenterprises679@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }

  return (
    <div className="container-app py-4">
      {/* Page header */}
      <div className="mb-5">
        <div
          className="inline-flex items-center gap-1.5 font-heading font-semibold uppercase text-xs tracking-widest mb-2"
          style={{ color: "#E8710A" }}
        >
          <span
            className="block w-7 h-0.5 rounded-full"
            style={{ background: "#C98A1B" }}
          />
          Direct Procurement Channels
        </div>
        <h1 className="section-heading text-3xl">Contact</h1>
        <p className="font-body text-sm mt-2" style={{ color: "#64748B" }}>
          Call, WhatsApp or email us for rates, stock and delivery in Ranga Reddy and nearby districts.
        </p>
      </div>

      {/* Two-column layout on md+ */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-4">
          {/* Managing Proprietor */}
          <ContactCard
            role="Managing Proprietor"
            name="K. Narendar Reddy"
            phone="88861 75855"
            icon={<User size={20} style={{ color: "#0B1B3A" }} />}
            bg="#EEF1F5"
          />

          {/* Depot Operations */}
          <ContactCard
            role="Depot Operations"
            name="G. Siva"
            phone="96401 95798"
            icon={<Home size={20} style={{ color: "#0B1B3A" }} />}
            bg="#EEF1F5"
          />

          {/* Email */}
          <div className="card p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div
                  className="font-heading font-semibold uppercase text-xs tracking-widest mb-0.5"
                  style={{ color: "#E8710A" }}
                >
                  Electronic Mail
                </div>
                <div
                  className="font-heading font-bold text-xl uppercase tracking-wide"
                  style={{ color: "#0B1B3A" }}
                >
                  Official Inquiry Desk
                </div>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "#EEF1F5" }}
              >
                <Mail size={20} style={{ color: "#0B1B3A" }} />
              </div>
            </div>

            <div
              className="flex items-center gap-2 p-2.5 rounded-lg mb-3"
              style={{ background: "#EEF1F5" }}
            >
              <span className="text-sm" style={{ color: "#64748B" }}>@</span>
              <span className="font-mono text-sm" style={{ color: "#E8710A" }}>
                knrenterprises679@gmail.com
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyEmail}
                className="btn-outline flex-1 text-sm"
                style={{ minHeight: 44, fontSize: 13 }}
              >
                {emailCopied ? (
                  <CheckCircle size={14} style={{ color: "#168A48" }} />
                ) : (
                  <Copy size={14} />
                )}
                {emailCopied ? "Copied!" : "Copy Address"}
              </button>
              <a
                href="mailto:knrenterprises679@gmail.com"
                className="btn-primary flex-1 text-sm"
                style={{ minHeight: 44, fontSize: 13 }}
              >
                <Mail size={14} />
                Send Mail
              </a>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Depot map + info */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between p-4 pb-3">
              <div>
                <div
                  className="font-heading font-semibold uppercase text-xs tracking-widest mb-0.5"
                  style={{ color: "#E8710A" }}
                >
                  Main Dispatch Anchor
                </div>
                <div
                  className="font-heading font-bold text-xl uppercase tracking-wide"
                  style={{ color: "#0B1B3A" }}
                >
                  Chevella Depot Hub
                </div>
              </div>
              <MapPin size={20} style={{ color: "#E8710A" }} />
            </div>

            {/* Static map embed */}
            <div
              className="mx-4 rounded-xl overflow-hidden border"
              style={{ borderColor: "#E2E8F0", height: 180 }}
            >
              <iframe
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3bvQ&q=Chevella,Telangana"
                title="Chevella Depot Location"
                style={{ border: 0 }}
              />
            </div>

            {/* Address block */}
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2 font-body text-sm" style={{ color: "#0F172A" }}>
                <MapPin size={14} style={{ color: "#0B1B3A", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="font-semibold">H.No 1-77/6, Near HP Petrol Pump</div>
                  <div style={{ color: "#64748B" }}>
                    Chevella Mandal, Ranga Reddy District, Telangana – 501503
                  </div>
                </div>
              </div>

              {/* GSTIN */}
              <div
                className="p-2.5 rounded-lg"
                style={{ background: "#EEF1F5" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold uppercase text-xs tracking-widest" style={{ color: "#64748B" }}>
                    Statutory Registration
                  </span>
                  <div className="flex items-center gap-1 font-body text-xs" style={{ color: "#168A48" }}>
                    <CheckCircle size={12} />
                    Verified
                  </div>
                </div>
                <div className="font-mono text-sm mt-1" style={{ color: "#0F172A" }}>
                  GSTIN: 36CUHPK5939D1ZG
                </div>
                <div className="font-body text-xs mt-0.5" style={{ color: "#64748B" }}>
                  Verified Municipal Taxpayer ID
                </div>
              </div>

              {/* Operating hours */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 font-heading font-semibold uppercase text-xs tracking-widest" style={{ color: "#64748B" }}>
                    <Clock size={12} />
                    Operating Hours
                  </div>
                  <span
                    className="font-heading font-bold text-xs uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(22,138,72,0.1)", color: "#168A48" }}
                  >
                    ● Open Now
                  </span>
                </div>
                <div className="space-y-1 font-body text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "#64748B" }}>Monday – Saturday</span>
                    <span className="font-mono text-xs" style={{ color: "#0F172A" }}>08:00 AM – 08:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#64748B" }}>Sunday (Emergency Indents)</span>
                    <span className="font-mono text-xs" style={{ color: "#0F172A" }}>09:00 AM – 02:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Open in maps */}
              <a
                href="https://maps.google.com/?q=H.No+1-77/6,+Near+HP+Petrol+Pump,+Chevella,+Telangana+501503"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MapPin size={16} />
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
