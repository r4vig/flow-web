// data/services.ts

export type Subservice = {
  id: string;
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
};

export type Service = {
  key: "marketing" | "logistics" | "recruitment";
  titleEn: string;
  titleEs: string;
  descriptionEn: string;
  descriptionEs?: string;
  subservices: Subservice[];
};

export const services: Service[] = [
  {
    key: "marketing",
    titleEn: "Marketing & Digital Management Services",
    titleEs: "Servicios de Marketing y Gestión Digital",
    descriptionEn:
      "We design comprehensive marketing solutions to strengthen digital presence, optimize communication, and drive sustainable growth across all channels.",
    descriptionEs:
      "En Flow diseñamos soluciones integrales de marketing orientadas a fortalecer la presencia digital, optimizar la comunicación y generar un crecimiento sostenible en todos los canales digitales.",
    subservices: [
      {
        id: "marketing-social-media",
        titleEn: "Strategic Social Media Management",
        titleEs: "Gestión Estratégica de Redes Sociales",
        descriptionEn:
          "End-to-end social media management: content planning, visual design, copywriting, scheduling, monitoring, and community management.",
      },
      {
        id: "marketing-digital-strategy",
        titleEn: "Digital Strategy Development",
        titleEs: "Desarrollo de Estrategia Digital",
        descriptionEn:
          "In-depth audits, audience definition, competitor analysis, and results-driven strategies with clear guidelines and measurable objectives.",
      },
      {
        id: "marketing-paid-media",
        titleEn: "Digital Advertising (Paid Media)",
        titleEs: "Publicidad Digital (Medios Pagos)",
        descriptionEn:
          "Creation, management, and optimization of campaigns across Meta Ads and other platforms with advanced targeting and reporting.",
      },
      {
        id: "marketing-branding",
        titleEn: "Branding & Visual Identity",
        titleEs: "Identidad Visual y Branding",
        descriptionEn:
          "Professional visual identities including logos, brand guidelines, color palettes, typography, and corporate templates.",
      },
      {
        id: "marketing-multimedia",
        titleEn: "Multimedia Content Production",
        titleEs: "Producción de Contenido Multimedia",
        descriptionEn:
          "High-quality audiovisual content for products, services, and brand storytelling, including short-form videos and campaign assets.",
      },
      {
        id: "marketing-web",
        titleEn: "Web Development & Digital Presence",
        titleEs: "Desarrollo Web y Presencia Digital",
        descriptionEn:
          "Modern, responsive websites, landing pages, basic SEO setup, and conversion-focused contact tools.",
      },
      {
        id: "marketing-email",
        titleEn: "Email Marketing & Automation",
        titleEs: "Email Marketing y Automatización",
        descriptionEn:
          "Retention and conversion-focused email campaigns with newsletters, segmentation, and automated workflows.",
      },
      {
        id: "marketing-consulting",
        titleEn: "Digital Consulting & Ongoing Support",
        titleEs: "Consultoría Digital y Soporte Continuo",
        descriptionEn:
          "Strategic consulting, training, digital presence assessments, and ongoing support for entrepreneurs and marketing teams.",
      },
      {
        id: "marketing-packages",
        titleEn: "FLOW Integrated Packages",
        titleEs: "Paquetes Integrados FLOW",
        descriptionEn:
          "Tailored plans combining social media, content, advertising, and consulting for different business stages.",
      },
    ],
  },
  {
    key: "logistics",
    titleEn: "Logistics Services",
    titleEs: "Servicios de Logística",
    descriptionEn:
      "Bilingual logistics solutions for tracking, returns, customer support, data analysis, and route optimization.",
    descriptionEs:
      "Soluciones logísticas bilingües para seguimiento, devoluciones, atención al cliente, análisis de datos y optimización de rutas.",
    subservices: [
      {
        id: "logistics-tracking",
        titleEn: "Proactive tracking & monitoring",
        titleEs: "Seguimiento proactivo de pedidos",
        descriptionEn:
          "Real-time visibility and control of your order and shipment pipeline.",
      },
      {
        id: "logistics-returns",
        titleEn: "Reverse logistics & returns",
        titleEs: "Logística inversa y devoluciones",
        descriptionEn:
          "Efficient returns management that protects your margins and customer experience.",
      },
      {
        id: "logistics-support",
        titleEn: "Bilingual customer support",
        titleEs: "Atención al cliente bilingüe",
        descriptionEn:
          "Support teams aligned with U.S. business culture and service expectations.",
      },
      {
        id: "logistics-bi",
        titleEn: "Data analysis & BI",
        titleEs: "Análisis de datos y BI",
        descriptionEn:
          "Insights and reporting to improve operational strategy and performance.",
      },
      {
        id: "logistics-tms",
        titleEn: "TMS system & route optimization",
        titleEs: "Optimización de rutas y TMS",
        descriptionEn:
          "Tech-enabled routing to reduce transportation costs and delivery time.",
      },
    ],
  },
  {
    key: "recruitment",
    titleEn: "Entry-Level Executive Recruitment",
    titleEs: "Reclutamiento Ejecutivo Junior",
    descriptionEn:
      "Coming soon: talent acquisition services for bilingual junior executives across Latin America.",
    descriptionEs:
      "Próximamente: servicios de reclutamiento de talento ejecutivo junior bilingüe en América Latina.",
    subservices: [
      // Aquí podrás agregar los subservicios cuando el cliente te los envíe
    ],
  },
];
