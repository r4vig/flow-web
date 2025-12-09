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

  // Disable scrolling
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col gap-[6px] z-[999]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[3px] bg-brand-navy rounded"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Full-screen background */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-[998]"
              onClick={() => setOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="fixed top-0 right-0 w-full h-full z-[999] flex flex-col items-center gap-10 py-16 bg-white"
            >
              {/* LOGO */}
              <Image
                src="/logo.png"
                alt="FLOW Logo"
                width={180}
                height={80}
                className="mb-2"
              />

              {/* MENU ITEMS */}
              <ul className="flex flex-col items-center gap-8 text-xl font-semibold text-brand-navy">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block px-6 py-3 rounded-xl ${
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

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="mt-auto text-brand-navy font-medium text-sm underline"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(NavbarMobileComponent);
