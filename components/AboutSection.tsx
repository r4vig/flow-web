"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn from "@/components/animations/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

export default function AboutSection() {
  const stats = [
    { value: 120, labelEn: "Projects delivered", labelEs: "Proyectos entregados" },
    { value: 35, labelEn: "Active clients", labelEs: "Clientes activos" },
    { value: 6, labelEn: "Countries", labelEs: "Países con presencia" },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT TEXT */}
        <div className="space-y-10">
          <SectionTitle
            titleEn="About us"
            titleEs="Acerca de nosotros"
            align="left"
          />

          <FadeIn delay={0.1}>
            <>
              <p className="text-lg font-semibold text-brand-navy leading-relaxed">
                FLOW LLC is a company with extensive experience in supply chain
                management and logistics, now driving its expansion into North America.
              </p>
              <p className="text-lg font-semibold text-brand-orange leading-relaxed">
                FLOW LLC es una compañía con amplia experiencia en gestión y administración
                de la cadena de suministros, especializada en Logística y Distribución,
                impulsando hoy su expansión hacia Norteamérica.
              </p>
            </>
          </FadeIn>

          <FadeIn delay={0.2}>
            <>
              <p className="text-brand-navy text-base leading-relaxed">
                At FLOW, we connect U.S. companies with highly skilled professionals
                across Latin America, offering bilingual teams, optimized processes,
                and seamless remote support without sacrificing quality.
              </p>
              <p className="text-brand-orange text-base leading-relaxed">
                En FLOW, conectamos a empresas de Estados Unidos con talento altamente
                capacitado en América Latina, ofreciendo equipos bilingües, soporte
                remoto integral y procesos optimizados sin sacrificar calidad.
              </p>
            </>
          </FadeIn>

          <FadeIn delay={0.3}>
            <>
              <p className="text-brand-navy text-base leading-relaxed">
                Our nearshore model combines technology, communication and a
                deep understanding of U.S. business culture, ensuring smooth,
                efficient operations.
              </p>
              <p className="text-brand-orange text-base leading-relaxed">
                Nuestro modelo nearshore combina tecnología, comunicación fluida
                y una comprensión profunda de la cultura empresarial estadounidense,
                para que tu operación funcione como si tu equipo estuviera a tu lado.
              </p>
            </>
          </FadeIn>

          <FadeIn delay={0.4}>
            <>
              <p className="text-brand-navy text-base leading-relaxed">
                FLOW helps you scale strategically, optimize resources and deliver
                industry-leading service.
              </p>
              <p className="text-brand-orange text-base leading-relaxed">
                FLOW te ayuda a escalar con estrategia, optimizar tus recursos y
                ofrecer un servicio de excelencia a tus clientes.
              </p>
            </>
          </FadeIn>
        </div>

        {/* RIGHT IMAGE + COUNTERS */}
        <FadeIn delay={0.2}>
          <div className="relative w-full">
            <Image
              src="/au.png"
              alt="Flow expansion map"
              width={900}
              height={700}
              className="rounded-2xl shadow-xl border border-gray-100 object-cover"
              priority={false}
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-100"
                >
                  <h3 className="text-4xl font-bold text-brand-navy">
                    <Counter end={stat.value} />
                  </h3>
                  <p className="text-sm font-medium text-brand-navy">
                    {stat.labelEn}
                  </p>
                  <p className="text-xs text-brand-orange">
                    {stat.labelEs}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
