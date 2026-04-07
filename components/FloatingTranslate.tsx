"use client";
import GoogleTranslate from "./GoogleTranslate";

export default function FloatingTranslate() {
  return (
    <div className="fixed bottom-6 right-6 z-[2147483647] md:hidden animate-bounce-subtle pointer-events-auto">
      <div className="bg-white pl-2 pr-1 py-1.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-gray-100 flex items-center justify-center">
        {/* Usamos el ID gt-floating que definimos en el CSS */}
        <GoogleTranslate containerId="gt-floating" isMobile={true} />
      </div>
    </div>
  );
}