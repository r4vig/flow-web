"use client";

import {
  Truck,
  Headphones,
  RefreshCcw,
  LineChart,
  Cog,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types/service";
import FadeIn from "@/components/animations/FadeIn";

const ICON_MAP: Record<string, LucideIcon> = {
  truck: Truck,
  headphones: Headphones,
  refresh: RefreshCcw,
  chart: LineChart,
  settings: Cog,
};

type Props = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: Props) {
  const Icon = ICON_MAP[service.icon] ?? Truck;

  return (
    <FadeIn delay={0.1 + index * 0.06}>
      <article className="rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 transition">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange">
          <Icon className="w-5 h-5" />
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="text-brand-navy font-semibold">{service.titleEn}</h3>
          <p className="text-brand-orange text-sm font-semibold">{service.titleEs}</p>
        </div>

        <p className="text-brand-navy/80 text-sm leading-relaxed mt-2">
          {service.descriptionEn}
        </p>
      </article>
    </FadeIn>
  );
}
