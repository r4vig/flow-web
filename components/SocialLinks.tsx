"use client";

import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/15551234567",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex gap-6">
        {SOCIALS.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center 
                      rounded-full shadow-lg border border-gray-200
                      text-brand-navy bg-white
                      hover:bg-brand-orange hover:text-white hover:shadow-xl
                      transition-all duration-200"
            aria-label={name}
          >
            <Icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
}
