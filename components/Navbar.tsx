"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-[1000] bg-white/90 backdrop-blur-md shadow-sm">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* LOGO NUEVO */}
        <Link href="/" prefetch={true} className="flex items-center gap-3">
          <Image
            src="/logooo.png"
            alt="Flow — Human Flow for Digital Growth"
            width={130}
            height={30}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <NavbarDesktop />
        <NavbarMobile />
      </nav>
    </header>
  );
}
