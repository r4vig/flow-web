"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

export default function GoogleTranslate({ containerId, isMobile }: { containerId: string, isMobile?: boolean }) {
  useEffect(() => {
    // Parche anti-crash para Next.js
    const originalRemoveChild = Node.prototype.removeChild;
    (Node.prototype as any).removeChild = function (child: any) {
      if (child.parentNode !== this) return child;
      return originalRemoveChild.apply(this, [child]);
    };

    const initTranslate = () => {
      const container = document.getElementById(containerId);
      
      // Evita que Google intente dibujar dos veces en el mismo contenedor
      if (container && container.innerHTML.includes("goog-te-combo")) return;

      if (container && (window as any).google?.translate?.TranslateElement) {
        container.innerHTML = "";
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          containerId
        );
      }
    };

    // EL TRUCO MÁGICO: Cola de inicialización para múltiples traductores
    if (!(window as any).gtCallbacks) {
      (window as any).gtCallbacks = [];
      
      (window as any).googleTranslateElementInit = () => {
        // Ejecuta todos los traductores registrados (Desktop y Mobile)
        (window as any).gtCallbacks.forEach((cb: () => void) => cb());
      };
      
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // Añadimos este contenedor específico a la cola
    (window as any).gtCallbacks.push(initTranslate);

    // Si el script ya había cargado antes (ej. al cambiar de página), lo forzamos a dibujar
    if ((window as any).google?.translate?.TranslateElement) {
      setTimeout(initTranslate, 300);
    }

  }, [containerId]);

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 pointer-events-auto relative z-[999] ${
      isMobile ? "bg-transparent" : "bg-white rounded-full border border-gray-100 shadow-sm"
    }`}>
      <Globe size={18} className="text-brand-orange shrink-0" />
      <div 
        id={containerId} 
        className="google-translate-container notranslate" 
        style={{ minWidth: '130px', minHeight: '24px' }}
      ></div>
    </div>
  );
}