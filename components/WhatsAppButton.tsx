// components/WhatsAppButton.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import QRModal from "./QRModal";

type Account = { id: string; label: string; waLink: string; qrSrc: string };

export default function WhatsAppButton({ accounts }: { accounts: Account[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        aria-label="Contact us on WhatsApp"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Image
          src="/icons/whatsapp.jpeg"
          alt="WhatsApp"
          width={60} // Réduit légèrement pour l'élégance
          height={60}
          className="rounded-full shadow-sm hover:shadow-md transition-shadow"
        />
      </button>

      <QRModal open={open} onClose={() => setOpen(false)} accounts={accounts} />
    </>
  );
}