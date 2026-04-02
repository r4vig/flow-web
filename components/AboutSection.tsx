// components/AboutSection.tsx

"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/animations/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import {
  Truck,
  Headphones,
  LineChart,
  Cog,
  type LucideIcon,
} from "lucide-react";
import { aboutIntro, aboutFeatures, type AboutFeature } from "@/data/about";

const ICON_MAP: Record<string, LucideIcon> = {
  truck: Truck,
  headphones: Headphones,
  chart: LineChart,
  settings: Cog,
};

function FeatureCard({ feature }: { feature: AboutFeature }) {
  const Icon = ICON_MAP[feature.icon ?? "settings"] ?? Cog;

  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg hover:-translate-y-1 transition">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange">
        <Icon className="w-5 h-5" aria-hidden />
      </div>

      <div className="mt-3">
        {/* Subtitle: blue bold */}
        <h4 className="text-brand-navy font-bold text-lg">{feature.title}</h4>

        {/* Text: blue normal */}
        <p className="text-brand-navy text-sm leading-relaxed mt-2">
          {feature.description}
        </p>
      </div>
    </article>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="pointer-events-none absolute inset-x-0 -top-36 -z-10 opacity-35">
        <div className="mx-auto h-52 max-w-5xl bg-[radial-gradient(circle_at_top,_#D17F3240,transparent_65%)]" />
      </div>

      <Container className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <SectionTitle
            title={aboutIntro.title}
      
            align="left"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
            {aboutIntro.subtitle}
          </p>

          <p className="text-brand-navy text-sm sm:text-base leading-relaxed">
            {aboutIntro.body}
          </p>
        </div>

        {/* Feature grid aligned like Services (left) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutFeatures.map((feature, i) => (
            <div key={feature.id}>
              <FadeIn delay={0.08 + i * 0.06}>
                <FeatureCard feature={feature} />
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Left-aligned content blocks (Who we are / What we offer / How we work) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-brand-orange font-bold text-xl">Who we are</h3>
            <p className="text-brand-navy text-base leading-relaxed">
              FLOW LLC is a strategic services company that drives growth for
              U.S. businesses by integrating operational excellence, specialized
              talent, and digital management. With strong expertise in supply
              chain management, logistics, and strategic marketing, FLOW
              delivers integrated solutions that strengthen both internal
              operations and customer engagement.
            </p>

            <h3 className="text-brand-orange font-bold text-xl">What we offer</h3>
            <p className="text-brand-navy text-base leading-relaxed">
              We connect organizations with highly skilled, bilingual
              professionals across Latin America, building nearshore teams that
              support critical business functions—from process optimization and
              logistics coordination to digital communication and brand growth.
            </p>

            <h3 className="text-brand-orange font-bold text-xl">How we work</h3>
            <p className="text-brand-navy text-base leading-relaxed">
              Our model combines technology, structured processes, and a deep
              understanding of U.S. business culture to ensure seamless talent
              integration, efficient execution, and ongoing collaboration.
            </p>
          </div>

          {/* Right column: image + CTA (mirrors Services CTA placement) */}
          <div className="flex flex-col items-start justify-center gap-6">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/mapaflow.png"
                alt="Flow expansion map"
                width={900}
                height={700}
                className="object-cover w-full h-full"
                priority={false}
              />
            </div>

            <div className="rounded-2xl bg-brand-navy text-white px-6 py-6 shadow-xl w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                Next step
              </p>
              <h3 className="text-brand-orange font-bold text-xl mt-2">
                Let’s build your growth plan.
              </h3>
              <p className="text-sm text-white/85 mt-2">
                Tell us your priorities and we’ll propose a tailored mix of
                services.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-4 rounded-full bg-brand-orange text-brand-navy font-semibold px-6 py-3 shadow-lg hover:bg-[#e28a36] transition"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </Container>


      {/* Social icons */}
 {/* Social icons */}
<div className="flex justify-center mt-10 gap-4">
  <div className="flex gap-6">
    {/* Facebook */}
    <a 
      href="https://www.facebook.com/profile.php?id=61585015283978" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/facebook.jpeg"
        alt="Facebook"
        width={60}
        height={60}
        className="hover:opacity-80 transition hover:scale-110"
      />
    </a>

    {/* WhatsApp - Aquí puedes usar un link directo o llamar a la función que abre tu modal */}
    <a 
      href="https://wa.me/59176678178" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/whatsapp.jpeg"
        alt="WhatsApp"
        width={60}
        height={60}
        className="hover:opacity-80 transition hover:scale-110"
      />
    </a>

    {/* Instagram */}
    <a 
      href="https://www.instagram.com/flowidg?igsh=MWRqMDE2aWpjcHczbQ%3D%3D" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/instagram.jpeg"
        alt="Instagram"
        width={60}
        height={60}
        className="hover:opacity-80 transition hover:scale-110"
      />
    </a>

    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/company/flowi-dg/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/linkedin.jpeg"
        alt="LinkedIn"
        width={60}
        height={60}
        className="hover:opacity-80 transition hover:scale-110"
      />
    </a>
  </div>
</div>
    </section>
  );
}
