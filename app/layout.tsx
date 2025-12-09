import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// ------------------------------------
// SEO GLOBAL
// ------------------------------------
export const metadata = {
  metadataBase: new URL("https://flow-idg.com"), // ⬅ Cambia al dominio real

  title: {
    default: "FLOW – Human Flow for Digital Growth",
    template: "%s | FLOW",
  },

  description:
    "FLOW LLC impulsa la expansión de compañías en Estados Unidos mediante equipos nearshore, procesos optimizados y soporte bilingüe continuo.",

  keywords: [
    "Nearshore",
    "Logistics Support",
    "Customer Service",
    "Tracking",
    "Bilingual Operations",
    "Flow LLC",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flow-idg.com",
    title: "FLOW – Human Flow for Digital Growth",
    description:
      "Operational support, logistics optimization and bilingual customer service for U.S. companies.",
    siteName: "FLOW LLC",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "FLOW digital operations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FLOW – Human Flow for Digital Growth",
    description:
      "Operational growth and nearshore support for North American businesses.",
    images: ["/og-image.jpeg"],
  },
};

// ------------------------------------
// FONTS
// ------------------------------------
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

// ------------------------------------
// ROOT LAYOUT
// ------------------------------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white text-brand-navy antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="pt-24">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent */}
        <CookieBanner />
      </body>
    </html>
  );
}
