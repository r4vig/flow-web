"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

interface Props {
  isMobile?: boolean;
}

export default function GoogleTranslate({ isMobile }: Props) {
  useEffect(() => {
    // Definir la función global antes de cargar el script
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,pt,fr,de", 
          autoDisplay: false,
          // El diseño "SIMPLE" es el que mejor funciona en móvil
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Evitar duplicidad del script
    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    } else if ((window as any).google && (window as any).google.translate) {
      // Si el script ya existe, reinicializar manualmente
      (window as any).googleTranslateElementInit();
    }
  }, []);

  return (
    <div 
      className={`flex items-center gap-2 px-3 py-1.5 transition-all group pointer-events-auto
        ${isMobile 
          ? "bg-transparent" // El fondo blanco ya lo pone el NavbarMobile
          : "bg-white border border-gray-100 rounded-full shadow-sm hover:border-brand-orange"
        }`}
    >
      <Globe 
        size={16} 
        className={`${isMobile ? "text-brand-orange" : "text-brand-orange"} group-hover:rotate-12 transition-transform`} 
      />
      
      {/* Contenedor del widget real de Google */}
      <div 
        id="google_translate_element" 
        className="flex items-center justify-center min-h-[24px] min-w-[100px]"
      ></div>
    </div>
  );
}