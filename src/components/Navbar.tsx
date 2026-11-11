"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Home, ShoppingBag, Phone as PhoneIcon, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/catalogue", label: "Products", icon: ShoppingBag },
  { href: "/contact", label: "Contact", icon: PhoneIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP & TABLET HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md hidden md:block">
        <div className="container-app">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Logo size="md" variant="light" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg"
                      : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:8886175855" 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <Phone size={16} />
                <span>8886175855</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-orange-50 hover:bg-orange-100"
              >
                {menuOpen ? <X size={20} className="text-orange-600" /> : <Menu size={20} className="text-orange-600" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <nav className="border-t border-gray-200 py-3 space-y-1 lg:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* MOBILE HEADER - Minimal */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 h-16">
          <Link href="/" className="flex items-center">
            <Logo size="sm" variant="light" />
          </Link>
          <a href="tel:8886175855" className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full">
            <Phone size={18} />
          </a>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex items-center justify-around h-20">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-4 flex-1 h-full transition-colors ${
                  isActive
                    ? "bg-orange-50 border-t-4 border-orange-500"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={24} className={isActive ? "text-orange-500" : "text-gray-600"} />
                <span className={`text-xs font-semibold ${isActive ? "text-orange-600" : "text-gray-600"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
