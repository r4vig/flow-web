// components/PromoModal.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const targetRoutes = ["/", "/services"];

    if (targetRoutes.includes(pathname)) {
      // Un temporizador de 2 segundos para no ser tan bruscos
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop con desenfoque */}
      <div 
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" 
        onClick={() => setIsOpen(false)} 
      />

      {/* Tarjeta del Modal - Aumentamos max-w a 'xl' para dar más espacio horizontal */}
      <div className="relative bg-white rounded-[2rem] overflow-hidden max-w-xl w-full shadow-2xl animate-in fade-in zoom-in duration-500 max-h-[90vh] overflow-y-auto">
        
        {/* Botón Cerrar - Posición más limpia y alejada del texto */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 z-20 p-2.5 bg-white/90 hover:bg-white rounded-full text-brand-navy shadow-md transition-all active:scale-90"
        >
          <X size={20} />
        </button>

        {/* Imagen de los Paquetes (Sólo las monedas) - Quitamos la relación de aspecto fija */}
        <div className="relative w-full">
          <Image 
            src="/promo-packages.jpeg" 
            alt="Flow Digital Packages"
            width={700} // Aumentamos la resolución para que no se pixele
            height={900}
            className="w-full object-contain" // 'contain' para que se adapte perfectamente
            priority
          />
        </div>

        {/* Info Inferior Arreglada y Espaciada - Ahora es un contenedor flexible que crece */}
        <div className="p-8 md:p-12 text-center bg-white space-y-8">
          
          {/* Bloque de Consulta y Pregunta Overlapping (ahora arreglado con flexbox)
            <div className="space-y-4 px-10">
            <p className="text-base font-semibold text-brand-navy leading-tight">¿Ready to grow in the digital world?</p>
            <p className="text-sm text-brand-navy/70 leading-relaxed">Consult with Flow about our marketing packages.</p>
            <p className="text-sm font-semibold text-brand-orange leading-tight">¿Listo para crecer en el mundo digital?</p>
          </div> */}

          {/* Bloque de Texto y CTA Final con más espacio */}
          <div className="space-y-3 pt-6 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-brand-navy">Boost Your Growth</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">Discover our specialized bilingual & logistics plans.</p>
          </div>

          {/* Botón CTA con más espacio y sombra */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full sm:w-auto px-10 py-3.5 bg-brand-orange text-brand-navy font-bold rounded-full hover:bg-brand-orange/90 transition-all shadow-lg active:scale-95 text-base"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}