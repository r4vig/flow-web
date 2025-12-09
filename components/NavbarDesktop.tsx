"use client";

import Link from "next/link";
import { memo } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function NavbarDesktopComponent() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              prefetch={true}
              aria-current={active ? "page" : undefined}
              className={`relative px-3 py-1 transition-all 
                ${
                  active
                    ? "text-brand-navy font-semibold"
                    : "text-brand-navy/80 hover:text-brand-orange"
                }
              `}
            >
              {link.name}

              {/* Línea animada debajo del link */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-brand-orange transition-all duration-300 
                  ${active ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100"}
                `}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(NavbarDesktopComponent);
