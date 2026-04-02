"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

interface Props {
  containerId: string;
  isMobile?: boolean;
}

export default function GoogleTranslate({ containerId, isMobile }: Props) {
  useEffect(() => {
    const initTranslate = () => {
      const container = document.getElementById(containerId);
      if (!container) return;

      // Limpiamos para evitar duplicados al navegar
      container.innerHTML = ""; 

      if ((window as any).google?.translate?.TranslateElement) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // Idiomas específicos
            includedLanguages: "en,es,fr,it,pt,de", 
            // HORIZONTAL es más fácil de limpiar con CSS que SIMPLE
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          containerId
        );
      }
    };

    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = initTranslate;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Delay para asegurar que el DOM cargó el nuevo ID
      setTimeout(initTranslate, 500);
    }
  }, [containerId]);

  return (
    <div 
      className={`flex items-center gap-2 px-3 py-1.5 transition-all pointer-events-auto relative z-[9999]
        ${isMobile 
          ? "bg-transparent" 
          : "bg-white border border-gray-100 rounded-full shadow-sm hover:border-brand-orange"
        }`}
    >
      <Globe 
        size={18} 
        className="text-brand-orange shrink-0 group-hover:rotate-12 transition-transform" 
      />
      
      {/* El contenedor donde Google inyecta el selector */}
      <div 
        id={containerId} 
        className="google-translate-container flex items-center justify-center min-w-[130px] min-h-[24px]"
      ></div>
    </div>
  );
}