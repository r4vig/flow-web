// components/AboutSection.tsx

"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/animations/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { Lightbulb, Users, Rocket, Workflow } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Lightbulb,
      titleEn: "Business Process Optimization",
      titleEs: "Optimización de Procesos Empresariales",
      descriptionEn:
        "Structured processes and continuous improvement across logistics, workflows, and execution.",
      descriptionEs:
        "Procesos estructurados y mejora continua en logística, flujos de trabajo y ejecución.",
    },
    {
      icon: Users,
      titleEn: "Bilingual Nearshore Talent",
      titleEs: "Talento Nearshore Bilingüe",
      descriptionEn:
        "Professionals across LATAM aligned with U.S. business culture and communication standards.",
      descriptionEs:
        "Profesionales en LATAM alineados con la cultura empresarial y estándares de comunicación de EE.UU.",
    },
    {
      icon: Rocket,
      titleEn: "Digital Strategy & Brand Growth",
      titleEs: "Estrategia Digital y Crecimiento de Marca",
      descriptionEn:
        "Strategies that strengthen brand presence, communication, and demand generation.",
      descriptionEs:
        "Estrategias que fortalecen la presencia de marca, la comunicación y la generación de demanda.",
    },
    {
      icon: Workflow,
      titleEn: "Smart Logistics & Remote Operations",
      titleEs: "Logística Inteligente y Operaciones Remotas",
      descriptionEn:
        "Integrated support for coordination, tracking, and operational efficiency.",
      descriptionEs:
        "Soporte integral para coordinación, seguimiento y eficiencia operativa.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container className="space-y-20">
        {/* Header */}
        <SectionTitle
          titleEn="About us"
          titleEs="Acerca de nosotros"
          align="center"
        />

        {/* VALUE PILLARS */}
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

        {/* Who we are */}
        <FadeIn delay={0.1}>
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-brand-navy">
              Who we are
            </h3>
            <p className="text-brand-navy text-base leading-relaxed">
              FLOW LLC is a strategic services company that drives growth for
              U.S. businesses by integrating operational excellence, specialized
              talent, and digital management. With strong expertise in supply
              chain management, logistics, and strategic marketing, FLOW
              delivers integrated solutions that strengthen both internal
              operations and market positioning.
            </p>
            <p className="text-brand-orange text-base leading-relaxed">
              FLOW LLC es una empresa de servicios estratégicos que impulsa el
              crecimiento de compañías en Estados Unidos mediante la integración
              de excelencia operativa, talento especializado y gestión digital.
              Con una sólida experiencia en gestión de la cadena de suministros,
              logística y marketing estratégico, FLOW ofrece soluciones
              integrales que fortalecen tanto las operaciones internas como el
              posicionamiento en el mercado.
            </p>
          </div>
        </FadeIn>

        {/* What we offer */}
        <FadeIn delay={0.2}>
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-brand-navy">
              What we offer
            </h3>
            <p className="text-brand-navy text-base leading-relaxed">
              We connect organizations with highly skilled, bilingual
              professionals across Latin America, building nearshore teams that
              support critical business functions—from process optimization and
              logistics coordination to digital communication, brand
              positioning, and demand generation. FLOW also provides entry-level
              executive recruiting services, identifying and placing
              high-potential professionals and emerging leadership profiles.
            </p>
            <p className="text-brand-orange text-base leading-relaxed">
              Conectamos a las organizaciones con profesionales altamente
              calificados y bilingües en América Latina, conformando equipos
              nearshore que apoyan funciones clave del negocio. También
              brindamos servicios de reclutamiento ejecutivo de nivel inicial,
              vinculando talento profesional y perfiles de liderazgo emergente.
            </p>
          </div>
        </FadeIn>

        {/* How we work */}
        <FadeIn delay={0.3}>
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-brand-navy">
              How we work
            </h3>
            <p className="text-brand-navy text-base leading-relaxed">
              Our model combines technology, structured processes, and a deep
              understanding of U.S. business culture to ensure seamless talent
              integration, efficient execution, and ongoing collaboration across
              operational, commercial, and digital teams.
            </p>
            <p className="text-brand-orange text-base leading-relaxed">
              Nuestro modelo combina tecnología, procesos estructurados y un
              profundo entendimiento de la cultura empresarial estadounidense
              para garantizar una integración fluida del talento, una ejecución
              eficiente y una colaboración continua entre equipos operativos,
              comerciales y digitales.
            </p>
          </div>
        </FadeIn>

        {/* Impact statement */}
        <FadeIn delay={0.4}>
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <p className="text-brand-navy text-base leading-relaxed">
              By aligning operational intelligence, data-driven marketing, and
              strategic talent acquisition, FLOW enables companies to optimize
              resources, improve efficiency, and scale sustainably across the
              entire value chain. We act as long-term strategic partners,
              delivering measurable impact and supporting informed
              decision-making.
            </p>
            <p className="text-brand-orange text-base leading-relaxed">
              Al integrar inteligencia operativa, marketing basado en datos y
              selección estratégica de talento, FLOW permite a las empresas
              optimizar recursos, mejorar la eficiencia y escalar de manera
              sostenible. Actuamos como socios estratégicos, generando impacto
              medible y apoyando una toma de decisiones sólida.
            </p>
          </div>
        </FadeIn>

        {/* Visual + CTA */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center space-y-8">
            <Image
              src="/au.png"
              alt="Flow expansion map"
              width={900}
              height={700}
              className="rounded-2xl shadow-xl border border-gray-100 object-cover"
              priority={false}
            />

            <Link
              href="/contact"
              className="rounded-full bg-brand-orange text-brand-navy font-semibold px-7 py-3 shadow-lg hover:bg-[#e28a36] transition"
            >
              Let’s build your growth strategy together
            </Link>
          </div>
        </FadeIn>
      </Container>
      <div className="flex justify-center mt-10 gap-4">
        <div className="flex gap-6">
      
          <a href="https://www.facebook.com/profile.php?id=61585015283978" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/facebook.jpeg"
              alt="Facebook"
              width={60}
              height={60}
              className="hover:opacity-80 transition"
            />
          </a>
      
          <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/whatsapp.jpeg"
              alt="WhatsApp"
              width={60}
              height={60}
              className="hover:opacity-80 transition"
            />
          </a>
      
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/instagram.jpeg"
              alt="Instagram"
              width={60}
              height={60}
              className="hover:opacity-80 transition"
            />
          </a>
      
          <a href="https://www.linkedin.com/company/flowi-dg/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin.jpeg"
              alt="LinkedIn"
              width={60}
              height={60}
              className="hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
