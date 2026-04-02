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
    // Bloquea el scroll para que el usuario no se mueva del menú
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* BOTÓN HAMBURGUESA */}
      <button 
        onClick={() => setOpen(true)} 
        className="md:hidden z-[1000] flex flex-col gap-[6px] p-2"
        aria-label="Open Menu"
      >
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-navy text-white flex flex-col items-center justify-start pt-20 gap-12 z-[2000000] h-screen w-screen overflow-y-auto"
          >
            {/* BOTÓN CERRAR */}
            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-6 right-8 text-5xl font-light hover:text-brand-orange transition"
            >
              ×
            </button>

            {/* LOGO SUPERIOR */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image src="/isotipoo.png" alt="Flow" width={70} height={70} priority />
            </motion.div>

            {/* CONTENEDOR DEL TRADUCTOR */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl px-2 py-1 shadow-xl flex items-center justify-center min-w-[180px] pointer-events-auto"
            >
               <GoogleTranslate containerId="gt-mobile" isMobile={true} />
            </motion.div>

            {/* LINKS DE NAVEGACIÓN */}
            <nav className="w-full">
              <ul className="flex flex-col items-center gap-8">
                {links.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setOpen(false)}
                      className={`text-3xl font-bold transition-colors ${
                        pathname === link.href ? "text-brand-orange" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}