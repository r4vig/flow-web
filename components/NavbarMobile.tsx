"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden flex flex-col gap-[6px] z-[60]"
      >
        <span className="w-6 h-[3px] bg-brand-navy rounded"></span>
        <span className="w-6 h-[3px] bg-brand-navy rounded"></span>
        <span className="w-6 h-[3px] bg-brand-navy rounded"></span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy z-[9999] text-white flex flex-col p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ×
            </button>

            {/* Logo */}
            <div className="flex justify-center mt-10 mb-10">
              <Image
                src="/logo.png"
                alt="Flow"
                width={160}
                height={60}
                className="brightness-200"
              />
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-8 text-center text-2xl font-semibold">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`transition ${
                        active
                          ? "text-brand-orange"
                          : "hover:text-brand-orange/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
