import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { getSiteImages } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vasudev Chemo Pharma — Industrial & Specialty Chemical Manufacturer | Gujarat, India",
    template: "%s | Vasudev Chemo Pharma",
  },
  description: "ISO-certified industrial and specialty chemical manufacturer based in Gujarat, India. Trusted global supplier of 16+ chemicals with export-ready packaging, competitive pricing, and consistent quality. Serving 30+ countries.",
  keywords: "chemical manufacturer Gujarat, industrial chemicals India, specialty chemicals exporter, sodium sulphate, zinc oxide, titanium dioxide, calcium carbonate, ISO certified chemicals, chemical supplier, bulk chemicals export",
  openGraph: {
    title: "Vasudev Chemo Pharma — Industrial & Specialty Chemical Manufacturer",
    description: "ISO-certified industrial and specialty chemical manufacturer based in Gujarat, India. Trusted global supplier of 16+ chemicals.",
    type: "website",
    locale: "en_US",
    siteName: "Vasudev Chemo Pharma",
  },
  twitter: {
    card: "summary",
    title: "Vasudev Chemo Pharma — Industrial & Specialty Chemical Manufacturer",
    description: "ISO-certified chemical manufacturer from Gujarat, India. 16+ products, 30+ countries.",
  },
  robots: { index: true, follow: true },
};

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteImages: { logo?: string; logoName?: string } = {};
  try {
    const data = await getSiteImages();
    siteImages = { logo: data.logo, logoName: data.logoName };
  } catch {
    // fallback to empty — Navbar/Footer handle undefined props gracefully
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar logo={siteImages?.logo} logoName={siteImages?.logoName} />
        <main className="pt-[72px]">
          {children}
        </main>
        <Footer logo={siteImages?.logo} logoName={siteImages?.logoName} />
        <FloatingButtons />
      </body>
    </html>
  );
}
