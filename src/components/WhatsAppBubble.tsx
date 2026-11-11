"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises%2C%20I%27m%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-8 right-4 z-40 group animate-bounce"
    >
      <div className="relative">
        {/* Animated ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-110">
          <MessageCircle size={28} className="text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
