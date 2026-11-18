import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PropSuite — Dubai Real Estate Portal & Agent CRM",
  description:
    "Boutique Dubai property portal with signature villas and penthouses, plus a private agent CRM with pipeline, viewings and dashboard analytics. Frontend demo with demo data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`:root{--font-serif:'Cormorant Garamond',Georgia,serif;--font-sans:'Manrope',system-ui,sans-serif}`}</style>
      </head>
      <body className="bg-ink font-sans text-ivory antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
