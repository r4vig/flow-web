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
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden z-[1000000] flex flex-col gap-[6px]"
      >
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
        <span className="w-7 h-[3px] bg-brand-navy rounded" />
      </button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 
              bg-brand-navy 
              text-white 
              flex flex-col 
              items-center 
              justify-center
              gap-10
              z-[2000000]
              h-[100vh]
              w-[100vw]
            "
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-4xl font-bold"
            >
              ×
            </button>

            {/* Logo */}
            <Image
              src="/isotipoo.png"
              alt="Flow"
              width={130}
              height={30}
              priority
            />

            <ul className="flex flex-col gap-8 text-3xl font-semibold text-center">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`${
                        active
                          ? "text-brand-orange"
                          : "hover:text-brand-orange/80"
                      } transition`}
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
