"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

type Props = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-semibold text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white px-6 py-3 shadow-soft hover:bg-brand-orange/90 disabled:opacity-60",
  ghost:
    "bg-transparent text-brand-navy px-4 py-2 hover:text-brand-orange",
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.03 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
