"use client";
import GoogleTranslate from "./GoogleTranslate";

export default function FloatingTranslate() {
  return (
    <div className="fixed bottom-6 right-6 z-[2147483647] md:hidden animate-bounce-subtle pointer-events-auto">
      <div className="bg-white p-2 rounded-full shadow-2xl border border-gray-100">
        {/* Usamos el ID gt-floating que definimos en el CSS */}
        <GoogleTranslate containerId="gt-floating" isMobile={true} />
      </div>
    </div>
  );
}