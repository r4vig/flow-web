"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate"; // <--- Importamos

const links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavbarMobile() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="md:hidden z-[1000000] flex flex-col gap-[6px]">
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy text-white flex flex-col items-center justify-center gap-8 z-[2000000] h-[100vh] w-[100vw]"
          >
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-4xl font-bold">×</button>

            <Image src="/isotipoo.png" alt="Flow" width={80} height={80} priority />

            {/* Traductor en móvil - Con un estilo que resalte en el fondo oscuro */}
            <div className="bg-white rounded-full px-2 py-1">
               <GoogleTranslate />
            </div>

            <ul className="flex flex-col gap-6 text-2xl font-semibold text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => setOpen(false)}
                    className={`${pathname === link.href ? "text-brand-orange" : "hover:text-brand-orange/80"} transition`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}