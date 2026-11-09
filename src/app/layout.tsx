import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KNR Enterprises | Leading Industrial & Commercial Solutions",
  description: "Official website for KNR Enterprises. Discover our product catalog and business solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

