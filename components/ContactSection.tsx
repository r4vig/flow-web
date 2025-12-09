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
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const servicesOptions = [
  "Proactive tracking and monitoring of orders and shipments",
  "Reverse logistics, returns, and claims management",
  "Customer support in English and Spanish",
  "Logistics data analysis and operational strategy improvement",
  "Logistics system management and TMS route optimization",
  "Other",
];

const SOCIALS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/15551234567",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
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
      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-16 items-start">

        {/* LEFT */}
        <div className="space-y-10">
          <SectionTitle titleEn="Contact" titleEs="Get in touch" align="left" />

          <FadeIn delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Flow — Human Flow for Digital Growth
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-brand-navy/80 text-base leading-relaxed max-w-xl">
              Tell us about your logistics, nearshore, or bilingual support needs.
              Our team typically responds in under{" "}
              <span className="font-semibold text-brand-navy">24 hours</span>.
            </p>
          </FadeIn>

          {/* CONTACT BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[ 
              {icon: Mail, title:"Email", text:"flowidg@hotmail.com", link:"mailto:flowidg@hotmail.com"},
              {icon: Phone, title:"Phone", text:"+1 (000) 000-0000"},
              {icon: MapPin, title:"Operations", text:"Worldwide"},
            ].map((item,i)=>(
              <FadeIn delay={0.2 + i * 0.05} key={i}>
                <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase text-brand-navy/70">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a href={item.link} className="text-sm font-semibold text-brand-navy hover:text-brand-orange">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-brand-navy">{item.text}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* MAP */}
          <FadeIn delay={0.35}>
            <div className="relative mt-4 w-full h-[500px] md:h-[600px]">
              <Image
                src="/americaa.png"
                alt="Map"
                fill
                className="object-contain rounded-2xl shadow-xl"
              />
            </div>
          </FadeIn>

        </div>

        {/* RIGHT - FORM */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_20px_55px_rgba(17,39,57,0.12)] p-8 sm:p-10 relative">

            <h3 className="text-2xl font-bold text-brand-navy mb-3">Tell us about your project</h3>
            <p className="text-sm text-brand-navy/70 mb-6 leading-relaxed">
              Fill out the form and one of our specialists will contact you shortly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-base" noValidate>

              {/* NAME */}
              <div className="space-y-1">
                <label className="block font-semibold text-brand-navy">
                  Name <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full h-12 px-3 border rounded-lg text-brand-navy border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>

              {/* EMAIL */}
              <div className="space-y-1">
                <label className="block font-semibold text-brand-navy">
                  Email <span className="text-brand-orange">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full h-12 px-3 border rounded-lg text-brand-navy border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
              </div>

              {/* COMPANY + PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Company (optional)"
                  {...register("company")}
                  className="w-full h-12 px-3 border rounded-lg text-brand-navy border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
                <input
                  placeholder="Phone (optional)"
                  {...register("phone")}
                  className="w-full h-12 px-3 border rounded-lg text-brand-navy border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
              </div>

              {/* SERVICE SELECT FIXED */}
              <div className="space-y-1">
                <label className="block font-semibold text-brand-navy">
                  Service of interest <span className="text-brand-orange">*</span>
                </label>
                <div className="relative">
                  <select
  {...register("service")}
  defaultValue=""
  className="
    w-full h-12 px-3 pr-10
    border border-gray-300 rounded-lg
    bg-white text-brand-navy
    text-base               /* 👈 AUMENTA EL TAMAÑO DEL TEXTO */
    appearance-none cursor-pointer
    focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30
  "
>

                    <option disabled value="">Select an option</option>
                    {servicesOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy pointer-events-none">
                    ▼
                  </div>
                </div>
                {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
              </div>

              {/* MESSAGE */}
              <div className="space-y-1">
                <label className="block font-semibold text-brand-navy">
                  Message <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="w-full px-3 py-3 border rounded-lg text-brand-navy border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30 resize-none"
                  placeholder="Tell us about your goals, logistics needs, volume, and countries involved."
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              {/* CHECKBOX */}
              <label className="flex items-start gap-2 text-xs text-brand-navy/80 cursor-pointer">
                <input type="checkbox" {...register("accept")} className="h-4 w-4 rounded border-gray-300 text-brand-orange" />
                I agree that FLOW may use my information to contact me and share service details.
              </label>
              {errors.accept && <p className="text-xs text-red-500">{errors.accept.message}</p>}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-orange text-brand-navy font-semibold shadow-md hover:bg-[#e28a36] transition disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              {status === "sent" && <p className="text-xs text-emerald-600">✔ Message successfully sent!</p>}
              {status === "error" && <p className="text-xs text-red-600">⚠ Try again later.</p>}
            </form>
                      
          </div>
{/* SOCIAL ICONS OUTSIDE THE FORM */}
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
        </FadeIn>


        
      </Container>
    </section>
  );
}
