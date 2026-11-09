"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/my-orders", label: "My Orders" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 1px 3px rgba(11,27,58,0.06)",
        }}
      >
        <div className="container-app">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMenuOpen(false)}>
              <div
                className="flex items-center justify-center rounded-lg font-heading font-bold text-white shrink-0"
                style={{ width: 38, height: 38, background: "#0B1B3A", fontSize: 13, letterSpacing: "0.04em" }}
              >
                KNR
              </div>
              <div className="hidden xs:block">
                <div className="font-heading font-bold uppercase tracking-wider leading-none"
                  style={{ color: "#0B1B3A", fontSize: 15 }}>
                  KNR Enterprises
                </div>
                <div className="font-body text-[11px] leading-tight mt-0.5" style={{ color: "#64748B" }}>
                  Sanitation &amp; Civic Supplies · Chevella
                </div>
              </div>
              {/* Tiny fallback for very small screens */}
              <div className="xs:hidden font-heading font-bold uppercase tracking-wider"
                style={{ color: "#0B1B3A", fontSize: 14 }}>
                KNR Enterprises
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 font-heading font-semibold uppercase text-sm tracking-wider rounded transition-colors"
                    style={
                      active
                        ? { background: "#0B1B3A", color: "#FFFFFF" }
                        : { color: "#0B1B3A" }
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop right ── */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="tel:8886175855"
                className="flex items-center gap-1.5 font-mono text-xs"
                style={{ color: "#0B1B3A" }}
              >
                <Phone size={13} style={{ color: "#E8710A" }} />
                88861 75855
              </a>
              <a
                href="https://wa.me/918886175855"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm"
                style={{ minHeight: 36, fontSize: 13, padding: "0 12px" }}
              >
                <MessageSquare size={14} /> WhatsApp
              </a>
            </div>

            {/* ── Mobile right icons ── */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:8886175855"
                className="flex items-center justify-center rounded-lg"
                style={{ width: 36, height: 36, background: "#E8710A", color: "#FFFFFF" }}
                aria-label="Call"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://wa.me/918886175855"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg"
                style={{ width: 36, height: 36, background: "#168A48", color: "#FFFFFF" }}
                aria-label="WhatsApp"
              >
                <MessageSquare size={15} />
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center justify-center rounded-lg"
                style={{ width: 36, height: 36, background: "#EEF1F5", color: "#0B1B3A", border: "none", cursor: "pointer" }}
                aria-label="Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile slide-down menu ── */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}
          >
            <nav className="container-app py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl font-heading font-bold uppercase text-sm tracking-wider transition-colors"
                    style={
                      active
                        ? { background: "#0B1B3A", color: "#FFFFFF" }
                        : { color: "#0B1B3A", background: "#F8FAFC" }
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* ── Mobile bottom nav ── */}
      <MobileBottomNav pathname={pathname} />
    </>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around"
      style={{
        height: 60,
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        boxShadow: "0 -2px 8px rgba(11,27,58,0.08)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center justify-center gap-0.5"
            style={{ flex: 1, height: "100%" }}
          >
            <NavIcon href={link.href} isActive={isActive} />
            <span
              className="font-heading font-bold uppercase"
              style={{
                fontSize: 9,
                letterSpacing: "0.06em",
                color: isActive ? "#0B1B3A" : "#94a3b8",
                lineHeight: 1,
              }}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

function NavIcon({ href, isActive }: { href: string; isActive: boolean }) {
  const c = isActive ? "#E8710A" : "#94a3b8";
  const s = 20;
  if (href === "/") return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={isActive ? "#E8710A" : "none"} stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
  if (href === "/catalogue") return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/>
      <rect x="15" y="14" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
  if (href === "/my-orders") return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="2"/>
      <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  );
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.29a2 2 0 0 1 1.95-2.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
