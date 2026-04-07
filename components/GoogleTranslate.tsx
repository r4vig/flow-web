"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function GoogleTranslate({ isMobile }: { isMobile?: boolean; containerId?: string }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // 1. Parche crítico para evitar que React explote al navegar entre páginas
    const originalRemoveChild = Node.prototype.removeChild;
    (Node.prototype as any).removeChild = function (child: any) {
      if (child.parentNode !== this) return child;
      return originalRemoveChild.apply(this, [child]);
    };

    // 2. Función para inicializar Google Translate en un div oculto
    const initTranslate = () => {
      if ((window as any).google?.translate?.TranslateElement) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // IMPORTANTE: Asegúrate de que 'fr' esté aquí para que funcione el francés
            includedLanguages: "en,es,fr,de,it,pt", 
            autoDisplay: false,
          },
          "google-translate-hidden-div"
        );
      }
    };

    // 3. Inyectar el div invisible y el script de Google (solo una vez)
    if (!document.getElementById("google-translate-script")) {
      const hiddenDiv = document.createElement("div");
      hiddenDiv.id = "google-translate-hidden-div";
      hiddenDiv.style.display = "none";
      document.body.appendChild(hiddenDiv);

      (window as any).googleTranslateElementInit = initTranslate;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 4. Función para cambiar el idioma (Sincroniza nuestro select con Google)
  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    const gtCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    
    if (gtCombo) {
      gtCombo.value = newLang;
      gtCombo.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Reintento rápido por si el script de Google tarda en despertar
      setTimeout(() => {
        const retryCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (retryCombo) {
          retryCombo.value = newLang;
          retryCombo.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 300);
    }
  };

  return (
    <div className={`notranslate flex items-center gap-2 px-3 py-1.5 pointer-events-auto relative z-[9999] ${
      isMobile ? "bg-transparent" : "bg-white rounded-full border border-gray-100 shadow-sm"
    }`}>
      <Globe size={18} className="text-brand-orange shrink-0" />
      <select
        value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent text-brand-navy font-bold text-[14px] uppercase border-none outline-none cursor-pointer min-w-[100px] appearance-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}