"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function NavbarMobileComponent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="md:hidden flex flex-col gap-[6px] z-[60]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
        <motion.span
          animate={
            open
              ? { opacity: 0 }
              : { opacity: 1, transition: { delay: 0.1 } }
          }
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide panel */}
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white shadow-xl z-50 p-8 flex flex-col gap-8"
              role="dialog"
              aria-modal="true"
            >
              {/* LOGO ACTUALIZADO */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Flow — Human Flow for Digital Growth"
                  width={130}
                  height={45}
                  className="h-auto w-auto"
                  priority={false}
                />
              </div>

              {/* MENÚ */}
              <ul className="flex flex-col gap-6 text-lg font-medium text-brand-navy">
                {links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block px-3 py-2 rounded-lg transition-all ${
                          active
                            ? "bg-brand-navy text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(NavbarMobileComponent);
