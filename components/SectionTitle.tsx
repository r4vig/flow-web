// components/SectionTitle.tsx

"use client";

import { memo } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
};

const alignClasses: Record<NonNullable<Props["align"]>, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

function SectionTitleComponent({ title, subtitle, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-1 ${alignClasses[align]}`}
    >
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-orange">
        <span className="inline-block h-[2px] w-8 bg-brand-orange rounded-full" />
        <span>Flow</span>
      </div>

      {/* Title: orange, bold */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-brand-orange font-bold">
        {title}
      </h2>

      {/* Subtitle: blue, bold */}
      {subtitle && (
        <p className="text-sm sm:text-base text-brand-navy font-bold">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

const SectionTitle = memo(SectionTitleComponent);
export default SectionTitle;
