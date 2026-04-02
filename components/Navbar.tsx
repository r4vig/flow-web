"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import GoogleTranslate from "./GoogleTranslate"; // <--- Importamos el traductor

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-[1000] bg-white/90 backdrop-blur-md shadow-sm">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" prefetch={true} className="flex items-center gap-3">
          <Image
            src="/logooooo.png"
            alt="Flow"
            width={160}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* En Desktop lo ponemos a la derecha de los links */}
        <div className="flex items-center gap-8">
          <NavbarDesktop />
          <div className="hidden md:block">
            <GoogleTranslate />
          </div>
        </div>

        <NavbarMobile />
      </nav>
    </header>
  );
}