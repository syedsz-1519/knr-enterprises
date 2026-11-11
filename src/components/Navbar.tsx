"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container-app">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo size="md" variant="light" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="tel:8886175855" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              style={{ minHeight: 40, fontSize: 13 }}
            >
              <Phone size={14} />
              <span className="hidden md:inline">8886175855</span>
            </a>
            <a 
              href="tel:8886175855" 
              className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Phone size={16} />
            </a>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
