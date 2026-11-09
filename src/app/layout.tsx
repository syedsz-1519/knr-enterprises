import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KNR Enterprises | Civic & Municipal Supply Depot – Chevella",
  description:
    "Official procurement portal for KNR Enterprises. Sanitation, drainage, and civic supplies for gram panchayats, municipalities and civil contractors across Ranga Reddy District, Telangana.",
  metadataBase: new URL("https://knrenterprises.in"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen flex flex-col"
        style={{ background: "#EEF1F5" }}
      >
        <TopBar />
        <Navbar />
        <main className="flex-1 pb-[60px] md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
