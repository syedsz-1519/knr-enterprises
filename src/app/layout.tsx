import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "KNR Enterprises | Municipal & Civic Supply Depot – Chevella, Telangana",
  description:
    "Institutional sanitation chemicals, pest control, civic equipment & infrastructure supplies. GST-compliant bulk procurement for gram panchayats, municipalities & contractors across all 33 Telangana districts.",
  metadataBase: new URL("https://knrenterprises.vercel.app"),
  keywords: ["bleaching powder", "pest control", "sanitation", "civic supplies", "Telangana", "bulk orders"],
  openGraph: {
    title: "KNR Enterprises | Municipal Supply Partner",
    description: "Institutional procurement partner for gram panchayats, municipalities & contractors",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <WhatsAppBubble />
        <TopBar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
