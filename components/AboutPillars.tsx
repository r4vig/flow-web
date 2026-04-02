// components/AboutPillars.tsx
"use client";

import { Lightbulb, Users, Rocket, Workflow } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const pillars = [
  {
    icon: Lightbulb,
    titleEn: "Operational Excellence",
    descriptionEn: "Structured processes and continuous improvement across logistics, workflows, and execution.",
  },
  {
    icon: Users,
    titleEn: "Bilingual Nearshore Talent",
    descriptionEn: "Professionals across LATAM aligned with U.S. business culture and communication standards.",
  },
  {
    icon: Rocket,
    titleEn: "Digital Growth & Marketing",
    descriptionEn: "Strategies that strengthen brand presence, communication, and demand generation.",
  },
  {
    icon: Workflow,
    titleEn: "Logistics & Process Optimization",
    descriptionEn: "Integrated support for coordination, tracking, and operational efficiency.",
  },
];

export default function AboutPillars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          /* IMPORTANTE: La div con h-full envuelve el FadeIn para que 
            la columna de la grid siempre tenga la altura máxima.
          */
          <div key={i} className="h-full">
            <FadeIn delay={0.1 + i * 0.1}>
              <div className="flex flex-col h-full bg-white shadow-lg border border-gray-100 rounded-2xl p-6 text-center hover:-translate-y-1 transition group min-h-[250px]">
                {/* Icono centrado */}
                <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Título en Inglés */}
                <h4 className="text-brand-navy font-bold text-lg mb-4">
                  {pillar.titleEn}
                </h4>

                {/* Descripción en Inglés con flex-grow para rellenar el espacio vertical */}
                <p className="text-sm text-brand-navy/80 leading-relaxed flex-grow">
                  {pillar.descriptionEn}
                </p>
              </div>
            </FadeIn>
          </div>
        );
      })}
    </div>
  );
}