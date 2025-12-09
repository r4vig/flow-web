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

  // Disable scrolling when menu is open
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
            {/* FULL WHITE BACKGROUND */}
            <motion.div
              key="full-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-white z-40"
            />

            {/* Slider Menu */}
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-full bg-white z-50 p-10 flex flex-col gap-10"
            >
              {/* Logo */}
              <div className="flex justify-center w-full">
                <Image
                  src="/logo.png"
                  alt="FLOW Logo"
                  width={150}
                  height={65}
                  className="h-auto w-auto"
                />
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 text-xl font-semibold text-brand-navy text-center">
                {links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          active
                            ? "bg-brand-orange text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="text-brand-navy font-semibold mt-auto text-sm underline"
              >
                CLOSE
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(NavbarMobileComponent);
