// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import PromoModal from "@/components/PromoModal";
import FloatingTranslate from "@/components/FloatingTranslate"; // <--- Importamos el nuevo traductor flotante

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body className="relative bg-white text-brand-navy antialiased">
        {/* Navbar ALWAYS as top layer */}
        <Navbar />

        {/* Wrapper to push content below navbar */}
        <div className="pt-24 relative z-0">
          {children}
        </div>

        <Footer />
        
        {/* Banners y Modales Globales */}
        <CookieBanner />
        <PromoModal />
        
        {/* --- TRADUCTOR FLOTANTE PARA MÓVIL --- */}
        {/* Se renderiza aquí para evitar conflictos con el overflow del Navbar */}
        <FloatingTranslate /> 
        
      </body>
    </html>
  );
}