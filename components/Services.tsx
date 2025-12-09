import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

export default function Services() {
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
            Flow for logistics & nearshore operations
          </p>

          <p className="text-brand-navy/80 text-sm sm:text-base leading-relaxed">
            We combine supply chain expertise, bilingual teams and technology
            to give U.S. companies a reliable nearshore partner in Latin America.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
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
    </section>
  );
}
