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
    "We recruit and manage bilingual junior talent for U.S. companies, combining modern processes, technology, and human expertise. Our model reduces costs, accelerates hiring, and ensures efficient integration with ongoing support.",
  descriptionEs:
    "Seleccionamos y gestionamos talento junior bilingüe para empresas en Estados Unidos, combinando procesos modernos, tecnología e inteligencia humana. Nuestro modelo reduce costos, acelera contrataciones y garantiza una integración eficiente con acompañamiento continuo.",
  subservices: [
    {
      id: "recruitment-junior-talent",
      titleEn: "Recruitment of Bilingual Junior Talent",
      titleEs: "Reclutamiento de Talento Junior Bilingüe",
      descriptionEn:
        "Identification and selection of high‑potential bilingual professionals across Latin America.",
    },
    {
      id: "recruitment-outsourcing",
      titleEn: "Remote Hiring & Outsourcing",
      titleEs: "Contratación Remota y Outsourcing",
      descriptionEn:
        "Flexible hiring models that reduce operational risk and accelerate team scalability.",
    },
    {
      id: "recruitment-assessments",
      titleEn: "Technical & Soft‑Skills Assessments",
      titleEs: "Evaluación Técnica y de Competencias Blandas",
      descriptionEn:
        "Comprehensive evaluations to ensure candidates meet both role requirements and cultural fit.",
    },
    {
      id: "recruitment-supervision",
      titleEn: "Supervision & Quality Control",
      titleEs: "Supervisión y Control de Calidad",
      descriptionEn:
        "Ongoing performance monitoring, structured workflows, and support for remote efficiency.",
    },
    {
      id: "recruitment-onboarding",
      titleEn: "Onboarding & Early‑Stage Support",
      titleEs: "Onboarding y Acompañamiento Inicial",
      descriptionEn:
        "Guided integration process to ensure smooth adaptation and long‑term retention.",
    },
    {
      id: "recruitment-roles",
      titleEn: "Administrative, Support & Sales Roles",
      titleEs: "Roles Administrativos, de Soporte y Ventas",
      descriptionEn:
        "Virtual assistants, customer support, sales assistants, marketing support, and more.",
    },
    {
      id: "recruitment-digital-tools",
      titleEn: "Junior Talent with Digital Tool Proficiency",
      titleEs: "Talento Junior con Manejo de Herramientas Digitales",
      descriptionEn:
        "Professionals trained in modern digital tools to support operational and commercial teams.",
    },
  ],
}
];
