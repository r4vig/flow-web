"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import {
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

const servicesOptions = [
  "Marketing & Digital Management Services",
  "Logistics Services",
  "Entry-Level Executive Recruitment",
  "Other",
];

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service of interest."),
  message: z.string().min(10, "Tell us a bit more about your project."),
  accept: z
    .boolean()
    .refine((v) => v === true, "You must accept the data processing agreement."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const whatsappAccounts = [
  {
    id: "Luis",
    label: "Luis Fernando Ayala",
    waLink: "https://wa.me/59176678178",
    qrSrc: "/qrs/qr-luis.png",
  },
  {
    id: "Diego",
    label: "Diego Quiroga",
    waLink: "https://wa.me/59160771400",
    qrSrc: "/qrs/qr-diego.png",
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr, 1.1fr] gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <SectionTitle title="Contact" align="left" />

          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Flow - Human Flow for Digital Growth
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-brand-navy/80 text-base leading-relaxed max-w-xl">
              Tell us about your logistics, nearshore, or bilingual support needs.
              Our team typically responds in under{" "}
              <span className="font-semibold text-brand-navy">24 hours</span>.
            </p>
          </FadeIn>

          {/* CONTACT INFO BAR - CORRECCIÓN DE ALINEACIÓN */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
            {[
              {
                id: "email",
                icon: Mail,
                title: "Email",
                text: "flowidg@pm.me",
                link: "mailto:flowidg@pm.me",
              },
              {
                id: "phone",
                icon: MessageCircle,
                title: "WhatsApp",
                text: "Direct Chat",
              },
              {
                id: "ops",
                icon: MapPin,
                title: "Operations",
                text: "Worldwide",
              },
            ].map((item, i) => (
              <FadeIn delay={0.2 + i * 0.05} key={item.id}>
                {/* Agregado items-center para asegurar alineación vertical */}
                <div className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col min-w-0 justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/40 leading-none mb-1">
                      {item.title}
                    </span>
                    {item.id === "phone" ? (
                      <div className="flex items-center">
                        <WhatsAppButton accounts={whatsappAccounts} />
                      </div>
                    ) : item.link ? (
                      <a href={item.link} className="text-[14px] font-bold text-brand-navy hover:text-brand-orange transition-colors truncate leading-tight">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-[14px] font-bold text-brand-navy truncate leading-tight">
                        {item.text}
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MAP */}
          <FadeIn delay={0.35}>
            <div className="relative w-full h-[350px] md:h-[450px]">
              <Image
                src="/mapaflow.png"
                alt="Map"
                fill
                className="object-contain rounded-2xl drop-shadow-sm"
              />
            </div>
          </FadeIn>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <FadeIn delay={0.2}>
          <div className="rounded-3xl border border-gray-100 bg-white shadow-[0_20px_55px_rgba(17,39,57,0.1)] p-8 sm:p-10 relative">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              Tell us about your project
            </h3>
            <p className="text-sm text-brand-navy/70 mb-8 leading-relaxed">
              Fill out the form and one of our specialists will contact you shortly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-base" noValidate>
              {/* ... (campos del formulario se mantienen iguales) ... */}
              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-brand-navy">
                  Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full h-11 px-4 border rounded-xl text-brand-navy border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                />
                {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-brand-navy">
                  Email <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full h-11 px-4 border rounded-xl text-brand-navy border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-brand-navy">Company</label>
                  <input
                    placeholder="Optional"
                    {...register("company")}
                    className="w-full h-11 px-4 border rounded-xl text-brand-navy border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-brand-navy">Phone</label>
                  <input
                    placeholder="Optional"
                    {...register("phone")}
                    className="w-full h-11 px-4 border rounded-xl text-brand-navy border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-brand-navy">
                  Service of interest <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <select
                    {...register("service")}
                    defaultValue=""
                    className="w-full h-11 px-4 pr-10 border border-gray-200 rounded-xl bg-white text-brand-navy text-sm appearance-none cursor-pointer focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all"
                  >
                    <option disabled value="">Select an option</option>
                    {servicesOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/30 pointer-events-none text-[10px]">
                    ▼
                  </div>
                </div>
                {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-semibold text-brand-navy">
                  Message <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 border rounded-xl text-brand-navy border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 resize-none outline-none transition-all"
                  placeholder="Tell us more about your project..."
                />
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
              </div>

              <label className="flex items-start gap-3 text-xs text-brand-navy/60 cursor-pointer hover:text-brand-navy transition-colors">
                <input type="checkbox" {...register("accept")} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                <span className="leading-tight">I agree that FLOW may use my information to contact me and share service details.</span>
              </label>
              {errors.accept && <p className="text-xs text-red-500 font-medium">{errors.accept.message}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-10 py-3.5 rounded-full bg-brand-orange text-brand-navy font-bold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
              >
                {status === "sending" ? "Sending..." : "Submit Project"}
              </button>
            </form>
          </div>

          {/* SOCIAL ICONS - RESTAURADOS A 60px */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-6">
              {[
                { href: "https://www.facebook.com/share/1CH8ToTJZW/", src: "/icons/facebook.jpeg", alt: "Facebook" },
                { type: "wa" },
                { href: "https://www.instagram.com/flowidg?igsh=MWRqMDE2aWpjcHczbQ%3D%3D", src: "/icons/instagram.jpeg", alt: "Instagram" },
                { href: "https://www.linkedin.com/company/flowi-dg/", src: "/icons/linkedin.jpeg", alt: "Linkedin" }
              ].map((social, idx) => (
                social.type === "wa" ? (
                  <div key="wa-social" className="transition-transform hover:scale-110 active:scale-95">
                    <WhatsAppButton accounts={whatsappAccounts} />
                  </div>
                ) : (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95">
                    <Image src={social.src!} alt={social.alt!} width={60} height={60} className="rounded-full shadow-sm" />
                  </a>
                )
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}