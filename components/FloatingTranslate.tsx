"use client";

import GoogleTranslate from "./GoogleTranslate";

export default function FloatingTranslate() {
  return (
    /* Usamos el z-index máximo para que esté POR ENCIMA de modales y banners */
    <div className="fixed bottom-24 right-6 z-[2147483647] md:hidden pointer-events-auto">
      <div className="bg-white p-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-200 flex items-center justify-center">
        <GoogleTranslate containerId="gt-floating" isMobile={true} />
      </div>
    </div>
  );
}