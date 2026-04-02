"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";

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
    // Bloquea el scroll cuando el menú está abierto
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <button 
        onClick={() => setOpen(true)} 
        className="md:hidden z-[1000000] flex flex-col gap-[6px] p-2"
        aria-label="Open Menu"
      >
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} // Animación lateral más natural
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-navy text-white flex flex-col items-center justify-center gap-10 z-[2000000] h-screen w-screen"
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-6 right-6 text-5xl font-light hover:text-brand-orange transition"
            >
              ×
            </button>

            {/* LOGO */}
            <div className="mb-4">
              <Image src="/isotipoo.png" alt="Flow" width={80} height={80} priority />
            </div>

            {/* GOOGLE TRANSLATE CONTAINER - Ajustado para visibilidad */}
            <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-lg border-2 border-brand-orange/20 pointer-events-auto">
               <GoogleTranslate />
            </div>

            {/* NAV LINKS */}
            <ul className="flex flex-col gap-8 text-3xl font-bold text-center">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    onClick={() => setOpen(false)}
                    className={`${
                      pathname === link.href 
                        ? "text-brand-orange" 
                        : "text-white hover:text-brand-orange/80"
                    } transition-colors duration-300`}
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