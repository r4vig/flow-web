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
];

function NavbarMobileComponent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="md:hidden flex flex-col gap-[6px] z-[60]"
      >
        <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-7 h-[3px] bg-brand-navy rounded" />
        <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-7 h-[3px] bg-brand-navy rounded" />
        <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-7 h-[3px] bg-brand-navy rounded" />
      </button>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              key="menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl z-50 p-10 flex flex-col items-center gap-10"
            >
              {/* LOGO */}
              <Image
                src="/logo.png"
                alt="Flow — Human Flow for Digital Growth"
                width={140}
                height={40}
                className="h-auto w-auto"
              />

              {/* LINKS */}
              <ul className="flex flex-col gap-6 text-lg font-semibold text-brand-navy items-center w-full">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.name} className="w-full flex justify-center">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`w-full text-center py-3 rounded-xl transition ${
                          active ? "bg-brand-navy text-white" : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* CTA CONTACT */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center py-3 bg-brand-orange text-brand-navy font-semibold rounded-full shadow-md hover:bg-[#e28a36] transition"
              >
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(NavbarMobileComponent);
