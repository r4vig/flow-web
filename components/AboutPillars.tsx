"use client";

import { Lightbulb, Users, Rocket, Workflow } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const pillars = [
  {
    icon: Lightbulb,
    titleEn: "Operational Excellence",
    titleEs: "Excelencia Operativa",
    descriptionEn: "Structured processes and continuous improvement across logistics, workflows, and execution.",
    descriptionEs: "Procesos estructurados y mejora continua en logística, flujos de trabajo y ejecución.",
  },
  {
    icon: Users,
    titleEn: "Bilingual Nearshore Talent",
    titleEs: "Talento Nearshore Bilingüe",
    descriptionEn: "Professionals across LATAM aligned with U.S. business culture and communication standards.",
    descriptionEs: "Profesionales en LATAM alineados con la cultura empresarial y estándares de comunicación de EE.UU.",
  },
  {
    icon: Rocket,
    titleEn: "Digital Growth & Marketing",
    titleEs: "Crecimiento Digital y Marketing",
    descriptionEn: "Strategies that strengthen brand presence, communication, and demand generation.",
    descriptionEs: "Estrategias que fortalecen la presencia de marca, la comunicación y la generación de demanda.",
  },
  {
    icon: Workflow,
    titleEn: "Logistics & Process Optimization",
    titleEs: "Optimización Logística y de Procesos",
    descriptionEn: "Integrated support for coordination, tracking, and operational efficiency.",
    descriptionEs: "Soporte integral para coordinación, seguimiento y eficiencia operativa.",
  },
];

export default function AboutPillars() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <div className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 text-center hover:-translate-y-1 transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                <Icon className="w-6 h-6" />
              </div>

              <h4 className="text-brand-navy font-semibold text-lg">
                {pillar.titleEn}
              </h4>
              <p className="text-brand-orange text-sm font-semibold mb-2">
                {pillar.titleEs}
              </p>

              <p className="text-sm text-brand-navy/80 leading-relaxed">
                {pillar.descriptionEn}
              </p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
