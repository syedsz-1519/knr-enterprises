"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Plus,
  MessageSquare,
  User,
  ChevronRight,
  Download,
  Truck,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────── */

type GpStatus = "Verified" | "Pending KYC";
type OrderStatus = "New Indent" | "Confirmed" | "Dispatched" | "Delivered";

interface GramPanchayat {
  id: string;
  code: string;
  name: string;
  status: GpStatus;
  phone: string;
  orders: number;
  lastOrder: string;
}

interface Order {
  id: string;
  status: OrderStatus;
  datetime: string;
  customer: string;
  phone: string;
  item: string;
  qty: string;
  value: string;
}

const gramPanchayats: GramPanchayat[] = [
  {
    id: "gp1",
    code: "GP-TS-502",
    name: "Gram Panchayat Chevella",
    status: "Verified",
    phone: "+91 98490 12345",
    orders: 14,
    lastOrder: "24 Oct",
  },
  {
    id: "gp2",
    code: "GP-TS-508",
    name: "Mandal Parishad Shabad",
    status: "Verified",
    phone: "+91 97005 88991",
    orders: 8,
    lastOrder: "22 Oct",
  },
  {
    id: "gp3",
    code: "GP-TS-512",
    name: "Gram Panchayat Shankarpally",
    status: "Verified",
    phone: "+91 94401 55678",
    orders: 21,
    lastOrder: "Yesterday",
  },
  {
    id: "gp4",
    code: "GP-TS-519",
    name: "Gram Panchayat Yacharam",
    status: "Pending KYC",
    phone: "+91 99122 33445",
    orders: 3,
    lastOrder: "15 Oct",
  },
];

const orders: Order[] = [
  {
    id: "#ORD-8921",
    status: "New Indent",
    datetime: "Today, 10:45 AM",
    customer: "Gram Panchayat Chevella",
    phone: "+91 98490 12345",
    item: "HDPE Sanitation Drums (200L)",
    qty: "45 Units",
    value: "₹1,12,500",
  },
  {
    id: "#ORD-8915",
    status: "Confirmed",
    datetime: "Yesterday, 04:20 PM",
    customer: "Mandal Parishad Shabad",
    phone: "+91 97005 88991",
    item: "Bleaching Powder (50kg Bags)",
    qty: "120 Bags",
    value: "₹84,000",
  },
  {
    id: "#ORD-8902",
    status: "Dispatched",
    datetime: "24 Oct, 09:15 AM",
    customer: "Gram Panchayat Shankarpally",
    phone: "+91 94401 55678",
    item: "Streetlight LED Fixtures (90W)",
    qty: "30 Units",
    value: "₹1,35,000",
  },
];

/* ─── Helpers ───────────────────────────────────────────────────── */

const STATUS_STEPS: OrderStatus[] = ["New Indent", "Confirmed", "Dispatched", "Delivered"];

function statusPillClass(status: OrderStatus | GpStatus): string {
  switch (status) {
    case "Verified":     return "pill-verified";
    case "Pending KYC":  return "pill-pending";
    case "New Indent":   return "pill-new";
    case "Confirmed":    return "pill-confirmed";
    case "Dispatched":   return "pill-dispatched";
    case "Delivered":    return "pill-delivered";
    default:             return "pill-new";
  }
}

function statusLabel(s: OrderStatus): string {
  if (s === "New Indent") return "NEW";
  return s.toUpperCase();
}

/* ─── Components ────────────────────────────────────────────────── */

function GpCard({ gp }: { gp: GramPanchayat }) {
  return (
    <div className="card p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <div className="font-mono text-xs font-bold mb-0.5" style={{ color: "#E8710A" }}>
            {gp.code}
          </div>
          <div
            className="font-heading font-bold text-base uppercase tracking-wide leading-tight"
            style={{ color: "#0B1B3A" }}
          >
            {gp.name}
          </div>
        </div>
        <span
          className={`inline-block font-heading font-bold uppercase text-xs tracking-widest px-2.5 py-1 rounded-full flex-shrink-0 ${statusPillClass(gp.status)}`}
        >
          {gp.status}
        </span>
      </div>

      <div
        className="flex items-center justify-between pt-2"
        style={{ borderTop: "1px solid #E2E8F0" }}
      >
        <a
          href={`tel:${gp.phone.replace(/\s+/g, "")}`}
          className="font-mono text-sm"
          style={{ color: "#E8710A" }}
        >
          {gp.phone}
        </a>
        <span className="font-body text-xs" style={{ color: "#64748B" }}>
          {gp.orders} Orders &nbsp;•&nbsp; Last: {gp.lastOrder}
        </span>
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  const stepIndex = STATUS_STEPS.indexOf(order.status);

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-sm" style={{ color: "#0B1B3A" }}>
            {order.id}
          </span>
          <span
            className={`inline-block font-heading font-bold uppercase text-xs tracking-widest px-2.5 py-1 rounded-full ${statusPillClass(order.status)}`}
          >
            {order.status}
          </span>
        </div>
        <span className="font-body text-xs" style={{ color: "#64748B" }}>
          {order.datetime}
        </span>
      </div>

      {/* Body */}
      <div
        className="grid grid-cols-2 gap-4 px-4 pb-3"
        style={{ borderBottom: "1px solid #E2E8F0" }}
      >
        <div>
          <div className="font-heading font-semibold uppercase text-[10px] tracking-widest mb-0.5" style={{ color: "#64748B" }}>
            Customer &amp; Contact
          </div>
          <div className="font-body text-sm font-medium" style={{ color: "#0F172A" }}>
            {order.customer}
          </div>
          <a
            href={`tel:${order.phone.replace(/\s+/g, "")}`}
            className="font-mono text-sm"
            style={{ color: "#E8710A" }}
          >
            {order.phone}
          </a>
        </div>
        <div>
          <div className="font-heading font-semibold uppercase text-[10px] tracking-widest mb-0.5" style={{ color: "#64748B" }}>
            Item Summary
          </div>
          <div className="font-body text-sm" style={{ color: "#0F172A" }}>
            {order.item}
          </div>
          <div className="font-body text-xs" style={{ color: "#64748B" }}>
            Qty: {order.qty} &nbsp;•&nbsp;
            <span className="font-mono font-bold" style={{ color: "#0F172A" }}>
              {order.value}
            </span>
          </div>
        </div>
      </div>

      {/* Progress stepper */}
      <div className="px-4 py-3 flex items-center gap-1.5 flex-wrap">
        {STATUS_STEPS.map((step, i) => {
          const isActive = i === stepIndex;
          const isPast = i < stepIndex;
          return (
            <div key={step} className="flex items-center gap-1.5">
              <span
                className={`font-heading font-bold uppercase text-[10px] tracking-widest px-2.5 py-1 rounded border ${
                  isActive
                    ? "text-white border-transparent"
                    : isPast
                    ? "border-transparent text-white"
                    : "border-current"
                }`}
                style={{
                  background: isActive
                    ? step === "New Indent" ? "#0B1B3A" : step === "Confirmed" ? "#0B1B3A" : step === "Dispatched" ? "#E8710A" : "#168A48"
                    : isPast
                    ? "rgba(11,27,58,0.15)"
                    : "transparent",
                  color: isActive ? "#FFFFFF" : isPast ? "#0B1B3A" : "#64748B",
                  borderColor: isActive || isPast ? "transparent" : "#E2E8F0",
                }}
              >
                {statusLabel(step)}
              </span>
              {i < STATUS_STEPS.length - 1 && (
                <ChevronRight size={12} style={{ color: "#64748B" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp action */}
      <div className="px-4 pb-4">
        <a
          href={`https://wa.me/918886175855?text=Dispatch%20Slip%20for%20${encodeURIComponent(order.id)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full"
          style={{ minHeight: 44 }}
        >
          <MessageSquare size={15} />
          WhatsApp Slip
        </a>
      </div>
    </div>
  );
}

/* ─── Sales by Item data ────────────────────────────────────────── */

const salesItems = [
  { abbr: "BP", name: "Bleaching Powder",   grade: "ISI Marked (33% Cl)",         customers: 18, qty: "4.5 Metric Tons", color: "#0B1B3A" },
  { abbr: "LP", name: "Lime Powder",        grade: "Agricultural Grade (Hydrated)",customers: 24, qty: "12.0 Metric Tons", color: "#168A48" },
  { abbr: "DB", name: "Dust Bins (Heavy Duty)", grade: "100L HDPE Wheelable",      customers: 12, qty: "350 Units",        color: "#168A48" },
  { abbr: "SL", name: "Street Lights (LED)",grade: "90W IP66 Municipal",           customers:  8, qty: "125 Units",        color: "#64748B" },
];

const volumeShare = [
  { label: "Lime Powder",       pct: 42, color: "#E8710A" },
  { label: "Bleaching Powder",  pct: 28, color: "#0B1B3A" },
  { label: "Dust Bins",         pct: 18, color: "#E8710A" },
  { label: "Street Lights",     pct: 12, color: "#64748B" },
];

type TimePeriod = "Today" | "7 Days" | "30 Days";

/* ─── Sales View ────────────────────────────────────────────────── */

function SalesByItemView() {
  const [period, setPeriod] = useState<TimePeriod>("Today");

  return (
    <div>
      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Customers", value: "42", badge: "+3 this week", badgeColor: "#168A48", sub: "Active panchayats & municipalities" },
          { label: "Total Orders",    value: "128", badge: "+12% vs avg", badgeColor: "#168A48", sub: "Dispatched from Chevella Depot" },
          { label: "Waiting for Confirmation", value: "07", badge: "Action req.", badgeColor: "#E8710A", sub: "Pending municipal sign-off" },
        ].map((kpi) => (
          <div key={kpi.label} className="card p-4">
            <div className="font-heading font-semibold uppercase text-xs tracking-widest mb-1" style={{ color: "#64748B" }}>
              {kpi.label}
            </div>
            <div className="flex items-baseline gap-3 mb-1">
              <span
                className="font-heading font-bold"
                style={{ fontSize: 40, lineHeight: 1, color: kpi.label === "Waiting for Confirmation" ? "#E8710A" : "#0B1B3A" }}
              >
                {kpi.value}
              </span>
              <span
                className="font-heading font-bold uppercase text-xs tracking-widest px-2 py-0.5 rounded-full"
                style={{ background: `${kpi.badgeColor}18`, color: kpi.badgeColor }}
              >
                {kpi.badge}
              </span>
            </div>
            <div className="font-body text-sm" style={{ color: "#64748B" }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Main 2-col */}
      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        {/* Ledger table */}
        <div className="card overflow-hidden">
          <div className="flex items-center justify-between p-4 pb-3" style={{ borderBottom: "1px solid #E2E8F0" }}>
            <div>
              <h2 className="font-heading font-bold uppercase text-base tracking-widest" style={{ color: "#0B1B3A" }}>
                Item-Wise Dispatch Ledger
              </h2>
              <div className="font-body text-xs" style={{ color: "#64748B" }}>
                Real-time aggregation of municipal indents
              </div>
            </div>
            <button
              className="btn-outline flex items-center gap-1.5 text-sm"
              style={{ minHeight: 36, fontSize: 12 }}
            >
              <Download size={13} />
              Export CSV
            </button>
          </div>

          {/* Table head */}
          <div
            className="grid px-4 py-2"
            style={{
              gridTemplateColumns: "1fr 1fr 100px 120px",
              borderBottom: "1px solid #E2E8F0",
              background: "#F8FAFC",
            }}
          >
            {["Item Name", "Grade / Standard", "Unique Customers", "Total Quantity"].map((h) => (
              <span key={h} className="font-heading font-semibold uppercase text-[11px] tracking-widest" style={{ color: "#64748B" }}>
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {salesItems.map((row, i) => (
            <div
              key={row.abbr}
              className="grid items-center px-4 py-3"
              style={{
                gridTemplateColumns: "1fr 1fr 100px 120px",
                borderBottom: i < salesItems.length - 1 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs text-white flex-shrink-0"
                  style={{ background: row.color, fontSize: 10 }}
                >
                  {row.abbr}
                </div>
                <span className="font-body text-sm font-medium" style={{ color: "#0F172A" }}>{row.name}</span>
              </div>
              <span className="font-body text-sm" style={{ color: "#64748B" }}>{row.grade}</span>
              <span className="font-heading font-bold text-sm text-center" style={{ color: "#0F172A" }}>{row.customers}</span>
              <span className="font-heading font-bold text-sm" style={{ color: "#0F172A" }}>{row.qty}</span>
            </div>
          ))}
        </div>

        {/* Volume share panel */}
        <div className="space-y-4">
          <div className="card p-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-heading font-bold uppercase text-sm tracking-widest" style={{ color: "#0B1B3A" }}>
                Volume Share
              </h3>
              <span className="font-heading font-semibold uppercase text-xs tracking-widest" style={{ color: "#64748B" }}>
                Top Items
              </span>
            </div>
            <p className="font-body text-xs mb-4" style={{ color: "#64748B" }}>
              Relative volume distribution across active indents.
            </p>

            <div className="space-y-3">
              {volumeShare.map((v) => (
                <div key={v.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-body text-sm" style={{ color: "#0F172A" }}>{v.label}</span>
                    <span className="font-heading font-bold text-sm" style={{ color: "#0B1B3A" }}>{v.pct}%</span>
                  </div>
                  <div
                    className="rounded-full overflow-hidden"
                    style={{ height: 8, background: "#EEF1F5" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${v.pct}%`, background: v.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hub status */}
          <div className="card p-4" style={{ borderLeft: "4px solid #168A48" }}>
            <div className="font-heading font-bold uppercase text-xs tracking-widest mb-1" style={{ color: "#168A48" }}>
              Chevella Hub Status
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} style={{ color: "#0B1B3A" }} />
              <span className="font-body text-sm" style={{ color: "#0F172A" }}>
                All primary stocks verified &amp; ready for dispatch.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

type AdminTab = "sales" | "customers";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("sales");
  const [period, setPeriod] = useState<TimePeriod>("Today");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGPs = gramPanchayats.filter(
    (gp) =>
      gp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gp.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gp.phone.includes(searchQuery)
  );

  const tabs: { id: AdminTab; label: string }[] = [
    { id: "sales",     label: "Sales by Item" },
    { id: "customers", label: "Customers & Orders" },
  ];

  return (
    <div style={{ background: "#EEF1F5", minHeight: "100vh" }}>
      {/* Admin top bar */}
      <div
        className="sticky top-0 z-40"
        style={{
          background: "#0B1B3A",
          boxShadow: "0 2px 8px rgba(11,27,58,0.3)",
        }}
      >
        <div className="container-app px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-xs"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
              >
                KNR
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  KNR Enterprises
                </div>
                <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  CHEVELLA DEPOT DISPATCH
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-end">
              <div className="hidden sm:flex gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="font-heading font-semibold uppercase text-xs tracking-widest px-3 py-1.5 rounded transition-colors"
                    style={{
                      background: activeTab === tab.id ? "#E8710A" : "rgba(255,255,255,0.1)",
                      color: "#FFFFFF",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <Link
                href="/"
                className="font-heading font-semibold uppercase text-xs tracking-widest px-3 py-1.5 rounded hidden sm:block"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
              >
                Switch to Customer View
              </Link>
              <span className="font-mono text-[10px] text-white hidden md:block">
                GSTIN: 36AAAAA0000A1Z5
              </span>
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.1)", color: "#FFFFFF" }}
                aria-label="Admin account"
              >
                <User size={16} />
              </button>
            </div>
          </div>

          {/* Mobile tabs */}
          <div className="flex sm:hidden gap-2 mt-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 font-heading font-semibold uppercase text-xs tracking-widest py-2 rounded transition-colors"
                style={{
                  background: activeTab === tab.id ? "#E8710A" : "rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-app py-4 px-4">
        {/* Page heading row */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-3">
            <h1 className="section-heading text-2xl">
              {activeTab === "sales" ? "Sales by Item" : "Customers & Orders Management"}
            </h1>
            {activeTab === "sales" && (
              <div className="hidden sm:flex gap-1">
                {(["Today", "7 Days", "30 Days"] as TimePeriod[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className="font-heading font-bold uppercase text-xs tracking-widest px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      background: period === p ? "#0B1B3A" : "#FFFFFF",
                      color: period === p ? "#FFFFFF" : "#0B1B3A",
                      border: "1px solid #E2E8F0",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn-outline flex items-center gap-1.5 text-sm"
              style={{ minHeight: 40, fontSize: 13 }}
            >
              <Filter size={14} />
              <span className="hidden sm:inline">Filter: All Depots</span>
            </button>
            <button
              className="btn-primary flex items-center gap-1.5 text-sm"
              style={{ minHeight: 40, fontSize: 13 }}
            >
              <Plus size={14} />
              <span className="hidden sm:inline">New Order Entry</span>
            </button>
          </div>
        </div>

        {activeTab === "sales" ? (
          <SalesByItemView />
        ) : (
          /* ─ Customers & Orders View ─ */
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* GP list */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="font-heading font-bold uppercase text-base tracking-widest" style={{ color: "#0B1B3A" }}>
                      Registered Gram Panchayats
                    </h2>
                    <div className="font-body text-sm" style={{ color: "#64748B" }}>
                      {gramPanchayats.length} Active
                    </div>
                  </div>
                </div>
                <div className="relative mb-3">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#64748B" }} />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search organization, mandal, or phone..."
                    className="input-field pl-10"
                  />
                </div>
                <div className="space-y-3">
                  {filteredGPs.map((gp) => (
                    <GpCard key={gp.id} gp={gp} />
                  ))}
                </div>
              </div>

              {/* Orders queue */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-heading font-bold uppercase text-base tracking-widest" style={{ color: "#0B1B3A" }}>
                    Active Orders Dispatch Queue
                  </h2>
                  <div
                    className="inline-flex items-center gap-1.5 font-heading font-bold uppercase text-xs tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(22,138,72,0.1)", color: "#168A48", border: "1px solid rgba(22,138,72,0.3)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: "#168A48" }} />
                    Live
                  </div>
                </div>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GSTIN footer */}
        <div className="mt-8 font-mono text-xs" style={{ color: "#64748B" }}>
          GSTIN: 36AAAAA0000A1Z5
        </div>
      </div>
    </div>
  );
}
