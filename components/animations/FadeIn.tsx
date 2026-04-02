// components/animations/FadeIn.tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string; // <--- Asegúrate de que esto esté aquí
}

export default function FadeIn({ children, delay = 0, direction, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === "up" ? 20 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className} // <--- ¡Esto es la clave!
    >
      {children}
    </motion.div>
  );
}