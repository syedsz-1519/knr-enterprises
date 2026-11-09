"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, CheckCircle, ChevronRight, X, Truck } from "lucide-react";

/* ─── Mock cart data (would come from a shared store in production) ── */
const defaultCart = [
  { id: "bleaching-powder", name: "Bleaching Powder (Grade 1 / ISI)", detail: "Standard Grade – 25kg Bag", qty: 10, unit: "10 Bags", price: 850, priceLabel: "₹850/unit" },
  { id: "dust-bins",        name: "Wet & Dry Civic Dust Bins (120L)", detail: "Swachh Bharat Norms (Pair)", qty: 4,  unit: "4 Pairs",  price: 2400, priceLabel: "₹2,400/pair" },
  { id: "street-light",     name: "LED Civic Street Lights (45W)",    detail: "Depot Institutional Price",  qty: 10, unit: "10 Units", price: 1850, priceLabel: "₹1,850/unit" },
];

type TabId = "draft" | "success";

export default function OrderSlipPage() {
  const [activeTab, setActiveTab] = useState<TabId>("draft");
  const [cart, setCart] = useState(defaultCart);
  const [org, setOrg] = useState("Chevella Gram Panchayat");
  const [phone, setPhone] = useState("9848022338");
  const [address, setAddress] = useState("Gram Panchayat Office, Main Road, Chevella,\nRanga Reddy Dist - 501503");
  const [note, setNote] = useState("Required before Monday morning municipal ir…");
  const [submitted, setSubmitted] = useState(false);

  function removeItem(id: string) {
    setCart((c) => c.filter((i) => i.id !== id));
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function buildWAText() {
    const lines = cart.map((i) => `• ${i.name} × ${i.qty} (${i.detail})`).join("\n");
    return encodeURIComponent(
      `ORDER INDENT – KNR Enterprises\n\nOrganisation: ${org}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n${lines}\n\nEstimated Total: ₹${total.toLocaleString("en-IN")}\n\nNote: ${note}`
    );
  }

  function handleSubmit() {
    setSubmitted(true);
    setActiveTab("success");
  }

  return (
    <div className="container-app py-4" style={{ maxWidth: 540 }}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Link
            href="/catalogue"
            className="font-body text-xs"
            style={{ color: "#64748B" }}
          >
            ← Catalogue
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="section-heading text-2xl">Order Slip &amp; Indent</h1>
          <span
            className="inline-flex items-center gap-1.5 font-heading font-bold uppercase text-xs tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(22,138,72,0.1)",
              color: "#168A48",
              border: "1px solid rgba(22,138,72,0.3)",
            }}
          >
            <Truck size={12} /> Depot Ready
          </span>
        </div>
        <div className="font-mono text-xs mt-1" style={{ color: "#64748B" }}>
          GSTIN: 36CUHPK5939D1ZG
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex rounded-xl overflow-hidden mb-5"
        style={{ background: "#E2E8F0" }}
      >
        {(["draft", "success"] as TabId[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-3 font-heading font-bold uppercase text-sm tracking-wider transition-colors"
            style={{
              background: activeTab === tab ? "#0B1B3A" : "transparent",
              color: activeTab === tab ? "#FFFFFF" : "#64748B",
              border: "none",
              cursor: "pointer",
            }}
          >
            {tab === "draft" ? "Draft Indent" : "Success & Tracker"}
          </button>
        ))}
      </div>

      {activeTab === "draft" ? (
        <>
          {/* Selected items */}
          <div className="mb-5">
            <h2 className="section-heading text-base mb-3">Selected Municipal Items</h2>

            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div
                        className="font-heading font-bold text-sm uppercase tracking-wide leading-tight mb-0.5"
                        style={{ color: "#0B1B3A" }}
                      >
                        {item.name}
                      </div>
                      <div className="font-body text-xs" style={{ color: "#64748B" }}>
                        {item.detail}
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ color: "#64748B", background: "none", border: "none", cursor: "pointer", padding: 4 }}
                      aria-label={`Remove ${item.name}`}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div
                    className="flex items-center gap-2 mt-2 pt-2"
                    style={{ borderTop: "1px solid #E2E8F0" }}
                  >
                    <span
                      className="font-heading font-bold text-xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: "#0B1B3A", color: "#FFFFFF", fontSize: 11 }}
                    >
                      {item.unit}
                    </span>
                    <span
                      className="font-mono font-bold text-sm"
                      style={{ color: "#E8710A" }}
                    >
                      {item.priceLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Estimated total */}
            <div
              className="flex items-center justify-between p-3 mt-3 rounded-xl"
              style={{ background: "#EEF1F5", border: "1px solid #E2E8F0" }}
            >
              <span
                className="font-heading font-bold uppercase text-sm tracking-widest"
                style={{ color: "#64748B" }}
              >
                Estimated Indent Total
              </span>
              <span className="font-mono font-bold text-xl" style={{ color: "#E8710A" }}>
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Org details form */}
          <div className="mb-5">
            <h2 className="section-heading text-base mb-3">Panchayat / Organisation Details</h2>

            <div className="space-y-4">
              <div>
                <label
                  className="block font-heading font-semibold uppercase text-xs tracking-widest mb-1.5"
                  style={{ color: "#64748B" }}
                >
                  Your Name or Organisation
                </label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="input-field"
                  placeholder="e.g. Chevella Gram Panchayat"
                />
              </div>

              <div>
                <label
                  className="block font-heading font-semibold uppercase text-xs tracking-widest mb-1.5"
                  style={{ color: "#64748B" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field font-mono"
                  placeholder="e.g. 9848012345"
                />
              </div>

              <div>
                <label
                  className="block font-heading font-semibold uppercase text-xs tracking-widest mb-1.5"
                  style={{ color: "#64748B" }}
                >
                  Delivery Address
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="input-field"
                  style={{ height: "auto", padding: "0.75rem", resize: "none" }}
                  placeholder="Full delivery address with district and PIN"
                />
              </div>

              <div>
                <label
                  className="block font-heading font-semibold uppercase text-xs tracking-widest mb-1.5"
                  style={{ color: "#64748B" }}
                >
                  Note (Optional)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="input-field"
                  placeholder="Any special instructions..."
                />
              </div>
            </div>
          </div>

          {/* Submit actions */}
          <div className="space-y-3">
            <button
              onClick={handleSubmit}
              className="btn-primary w-full"
              disabled={cart.length === 0}
            >
              <CheckCircle size={16} />
              Place Order &amp; Generate Indent Voucher
            </button>

            <div
              className="flex items-center gap-3"
              style={{ color: "#64748B", fontSize: 13 }}
            >
              <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
              <span className="font-body text-xs">or</span>
              <div style={{ flex: 1, height: 1, background: "#E2E8F0" }} />
            </div>

            <a
              href={`https://wa.me/918886175855?text=${buildWAText()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageSquare size={16} />
              Send Order on WhatsApp to K. Narendar Reddy
            </a>
          </div>
        </>
      ) : (
        /* ─ Success / Tracker ─ */
        <div>
          {submitted ? (
            <div className="card p-6 text-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(22,138,72,0.1)" }}
              >
                <CheckCircle size={32} style={{ color: "#168A48" }} />
              </div>
              <h2
                className="font-heading font-bold uppercase text-xl tracking-wider mb-2"
                style={{ color: "#0B1B3A" }}
              >
                Indent Submitted!
              </h2>
              <p className="font-body text-sm mb-3" style={{ color: "#64748B" }}>
                Your order slip has been recorded. Our team will confirm via WhatsApp or phone within 2 hours.
              </p>
              <div
                className="font-mono text-xs p-2.5 rounded-lg mb-4"
                style={{ background: "#EEF1F5", color: "#0F172A" }}
              >
                Voucher #IND-{Date.now().toString().slice(-6)}
              </div>
              <a
                href={`https://wa.me/918886175855?text=${buildWAText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full mb-2"
              >
                <MessageSquare size={16} />
                Confirm on WhatsApp
              </a>
            </div>
          ) : (
            <div className="card p-6 text-center">
              <p className="font-body text-sm" style={{ color: "#64748B" }}>
                Fill in the Draft Indent form and submit to see your tracker here.
              </p>
              <button
                className="btn-primary mt-4"
                onClick={() => setActiveTab("draft")}
              >
                Go to Draft Indent
              </button>
            </div>
          )}

          {/* Status tracker */}
          {submitted && (
            <div className="card p-4">
              <h3 className="font-heading font-bold uppercase text-sm tracking-widest mb-3" style={{ color: "#0B1B3A" }}>
                Order Progress
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Indent Received", done: true, sub: "Submitted to Chevella Depot" },
                  { label: "Awaiting Confirmation", done: false, sub: "Depot team reviewing stock" },
                  { label: "Dispatch Scheduled", done: false, sub: "Vehicle assignment pending" },
                  { label: "Delivered", done: false, sub: "" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: step.done ? "#168A48" : "#EEF1F5",
                        border: step.done ? "none" : "2px solid #E2E8F0",
                      }}
                    >
                      {step.done ? (
                        <CheckCircle size={14} style={{ color: "#FFFFFF" }} />
                      ) : (
                        <span
                          className="font-heading font-bold text-xs"
                          style={{ color: "#64748B" }}
                        >
                          {i + 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <div
                        className="font-heading font-semibold uppercase text-sm tracking-wide"
                        style={{ color: step.done ? "#0B1B3A" : "#64748B" }}
                      >
                        {step.label}
                      </div>
                      {step.sub && (
                        <div className="font-body text-xs" style={{ color: "#64748B" }}>
                          {step.sub}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
