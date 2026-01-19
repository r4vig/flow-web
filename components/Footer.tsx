"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    items: [
      { name: "About us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Marketing & Digital Management Services", href: "/services" },
      { name: "Logistics Services", href: "/services" },
      { name: "Entry-Level Executive Recruitment", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* LOGO + DESC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Image
              src="/logooooo.png"
              alt="Flow — Human Flow for Digital Growth"
              width={150}
              height={50}
              className="w-auto h-auto"
              priority
            />


         <p className= "text-brand-navy/70 text-sm leading-relaxed max-w-xs">
             {/* FLOW LLC helps U.S. companies scale by combining operational excellence, bilingual nearshore talent, 
             and data‑driven digital strategy. We support logistics, marketing, and executive recruitment with integrated 
             solutions that strengthen operations and accelerate growth.. */}
            </p>
          </motion.div>

          {/* LINKS DINÁMICOS */}
          {footerLinks.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
            >
              <h3 className="text-brand-navy font-semibold mb-4 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-navy/70 hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CONTACT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-brand-navy font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-navy/70">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:flowidg@hotmail.com"
                  className="text-brand-orange font-medium hover:underline"
                  aria-label="Email contact"
                >
                  flowidg@hotmail.com
                </a>
              </li>
              <li>📍 Worldwide </li>
              <li>⏱ Response time: under 24h</li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-brand-navy/60 gap-4">
          <p>© {new Date().getFullYear()} FLOW LLC. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-brand-orange">
              Terms of Service
            </Link>
            <Link href="/legal/cookies-policy" className="hover:text-brand-orange">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
