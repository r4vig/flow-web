// components/Services.tsx

"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import ServiceModal from "@/components/ServiceModal";
import { services, type Service } from "@/data/services";
import { Megaphone, Truck, Users } from "lucide-react";

const ICONS: Record<Service["key"], any> = {
  marketing: Megaphone,
  logistics: Truck,
  recruitment: Users,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-white to-brand-navy/5">
      <div className="pointer-events-none absolute inset-x-0 -top-36 -z-10 opacity-35">
        <div className="mx-auto h-52 max-w-5xl bg-[radial-gradient(circle_at_top,_#D17F3240,transparent_65%)]" />
      </div>

      <Container className="space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <SectionTitle
            titleEn="Our services"
            titleEs="Nuestros servicios"
            align="left"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
            FLOW for business growth & operations
          </p>

          <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">
            We offer integrated services to help companies grow digitally,
            optimize logistics, and recruit talent across Latin America. All
            services are delivered bilingually and tailored to your business
            stage.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = ICONS[service.key];

            return (
              <article
                key={service.key}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 transition"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="mt-3 space-y-1">
                  <h3 className="text-brand-navy font-semibold">
                    {service.titleEn}
                  </h3>
                  <p className="text-brand-orange text-sm font-semibold">
                    {service.titleEs}
                  </p>
                </div>

                <p className="text-brand-navy/80 text-sm leading-relaxed mt-2">
                  {service.descriptionEn}
                </p>

                <p className="mt-3 text-xs text-brand-orange font-semibold">
                  Click to see subservices
                </p>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-brand-navy text-white px-8 py-10 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Next step
            </p>
            <h3 className="text-xl md:text-2xl font-semibold">
              Let’s optimize your operations together.
            </h3>
            <p className="text-sm text-white/85">
              Tell us your needs and we’ll propose the right service mix.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-brand-orange text-brand-navy font-semibold px-7 py-3 shadow-lg hover:bg-[#e28a36] transition"
          >
            Contact our team
          </Link>
        </div>
      </Container>

      {/* Modal */}
      <ServiceModal
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}
