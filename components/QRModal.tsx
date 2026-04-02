// components/QRModal.tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

type Account = { id: string; label: string; waLink: string; qrSrc: string };
type Props = { open: boolean; onClose: () => void; accounts: Account[] };

export default function QRModal({ open, onClose, accounts }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!mounted || !open) return null;

  // On téléporte le modal directement dans le body pour éviter les bugs de CSS parent
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop avec flou */}
      <div 
        className="absolute inset-0 bg-[#0b1c2c]/80 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative z-[10000] w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 overflow-hidden">
        
        {/* Close Button - Positionné absolument pour ne pas bouger */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-brand-navy z-20"
        >
          <X size={24} />
        </button>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-brand-navy">Contact via WhatsApp</h3>
          <p className="text-sm text-brand-navy/60 mb-8">Scan a QR or open the account directly.</p>

          {/* Grid robuste */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {accounts.map((acc) => (
              <div key={acc.id} className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
                  <Image
                    src={acc.qrSrc}
                    alt={acc.label}
                    width={160}
                    height={160}
                    className="rounded-lg"
                    priority
                  />
                </div>
                
                <p className="font-bold text-brand-navy mb-4">{acc.label}</p>
                
                <div className="flex flex-col w-full gap-2">
                  <a
                    href={acc.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center py-2.5 bg-brand-orange text-brand-navy font-bold rounded-full hover:scale-[1.02] transition-transform text-sm"
                  >
                    Open Chat
                  </a>
                  <a
                    href={acc.qrSrc}
                    download
                    className="flex justify-center items-center py-2.5 border border-gray-200 text-brand-navy font-medium rounded-full hover:bg-white transition-colors text-sm"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body // Cible de la téléportation
  );
}