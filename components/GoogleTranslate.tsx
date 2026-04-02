"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

interface Props {
  isMobile?: boolean;
}

export default function GoogleTranslate({ isMobile }: Props) {
  useEffect(() => {
    // Evitar duplicidad del script
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // Añade aquí los idiomas que necesites (códigos ISO)
            includedLanguages: "en,es,pt,fr,de", 
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <div 
      className={`flex items-center gap-1 px-3 py-1 rounded-full shadow-sm transition-all group
        ${isMobile 
          ? "bg-white/10 border border-white/20" 
          : "bg-white border border-gray-200 hover:border-brand-orange"
        }`}
    >
      <Globe 
        size={14} 
        className={`${isMobile ? "text-white" : "text-brand-orange"} group-hover:rotate-12 transition-transform`} 
      />
      
      {/* Contenedor del widget */}
      <div id="google_translate_element" className="flex items-center min-h-[24px]"></div>
    </div>
  );
}