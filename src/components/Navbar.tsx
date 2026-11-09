"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/my-orders", label: "My Orders" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px 0 rgba(11,27,58,0.05)",
      }}
    >
      <div className="container-app">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-white text-sm"
              style={{ background: "#0B1B3A" }}
            >
              KNR
            </div>
            <div>
              <div
                className="font-heading font-bold text-base uppercase tracking-wider leading-none"
                style={{ color: "#0B1B3A" }}
              >
                KNR Enterprises
              </div>
              <div className="font-body text-xs mt-0.5" style={{ color: "#64748B" }}>
                Sanitation, Drainage &amp; Civic Supplies Depot · Chevella
              </div>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 font-heading font-semibold uppercase text-sm tracking-wider rounded transition-colors",
                  pathname === link.href
                    ? "text-white"
                    : "hover:bg-gray-100"
                )}
                style={
                  pathname === link.href
                    ? { background: "#0B1B3A", color: "#FFFFFF" }
                    : { color: "#0B1B3A" }
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-heading font-semibold text-xs uppercase tracking-widest" style={{ color: "#64748B" }}>
                Depot Heads
              </div>
              <div className="font-body text-sm font-medium" style={{ color: "#0B1B3A" }}>
                K. Narendar / G. Siva
              </div>
            </div>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "#0B1B3A", color: "#FFFFFF" }}
              aria-label="Account"
            >
              <User size={18} />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-heading font-bold text-white text-xs"
              style={{ background: "#0B1B3A" }}
            >
              KNR
            </div>
            <div>
              <div
                className="font-heading font-bold text-sm uppercase tracking-wider leading-none"
                style={{ color: "#0B1B3A" }}
              >
                KNR Enterprises
              </div>
              <div className="font-body text-[10px]" style={{ color: "#64748B" }}>
                Sanitation &amp; Civic Supplies
              </div>
            </div>
          </Link>

          {/* Mobile right icons */}
          <div className="flex items-center gap-2">
            <a
              href="tel:8886175855"
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "#E8710A", color: "#FFFFFF" }}
              aria-label="Call"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://wa.me/918886175855"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "#168A48", color: "#FFFFFF" }}
              aria-label="WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "#0B1B3A", color: "#FFFFFF" }}
              aria-label="Account"
            >
              <User size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <MobileBottomNav pathname={pathname} />
    </header>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-16"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        boxShadow: "0 -4px 6px -1px rgba(11,27,58,0.08)",
      }}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center justify-center gap-0.5 min-w-[60px] h-full"
          >
            <NavIcon href={link.href} isActive={isActive} />
            <span
              className="font-heading font-semibold uppercase text-[10px] tracking-wider"
              style={{ color: isActive ? "#0B1B3A" : "#64748B" }}
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
  const color = isActive ? "#0B1B3A" : "#64748B";
  const size = 20;

  if (href === "/") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
  if (href === "/catalogue") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/>
      <rect x="15" y="14" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/>
    </svg>
  );
  if (href === "/my-orders") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect x="9" y="3" width="6" height="4" rx="2"/>
      <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
    </svg>
  );
  // Contact
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={isActive ? color : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.29a2 2 0 0 1 1.95-2.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
