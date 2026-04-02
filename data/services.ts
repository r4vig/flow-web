// data/services.ts

export type Subservice = {
  id: string;
  title: string;
  description: string;
};

export type Service = {
  key: "marketing" | "logistics" | "recruitment";
  title: string;
  description: string;
  icon: string;
  subservices: Subservice[];
};

export const services: Service[] = [
  {
    key: "marketing",
    icon: "chart",
    title: "Marketing & Digital Management Services",
    description:
      "We design comprehensive marketing solutions to strengthen digital presence, optimize communication, and drive sustainable growth across all channels.",
    subservices: [
      {
        id: "marketing-social-media",
        title: "Strategic Social Media Management",
        description:
          "End-to-end social media management: content planning, visual design, copywriting, scheduling, monitoring, and community management.",
      },
      {
        id: "marketing-digital-strategy",
        title: "Digital Strategy Development",
        description:
          "In-depth audits, audience definition, competitor analysis, and results-driven strategies with clear guidelines and measurable objectives.",
      },
      {
        id: "marketing-paid-media",
        title: "Digital Advertising (Paid Media)",
        description:
          "Creation, management, and optimization of campaigns across Meta Ads and other platforms with advanced targeting and reporting.",
      },
      {
        id: "marketing-branding",
        title: "Branding & Visual Identity",
        description:
          "Professional visual identities including logos, brand guidelines, color palettes, typography, and corporate templates.",
      },
      {
        id: "marketing-multimedia",
        title: "Multimedia Content Production",
        description:
          "High-quality audiovisual content for products, services, and brand storytelling, including short-form videos and campaign assets.",
      },
      {
        id: "marketing-web",
        title: "Web Development & Digital Presence",
        description:
          "Modern, responsive websites, landing pages, basic SEO setup, and conversion-focused contact tools.",
      },
      {
        id: "marketing-email",
        title: "Email Marketing & Automation",
        description:
          "Retention and conversion-focused email campaigns with newsletters, segmentation, and automated workflows.",
      },
      {
        id: "marketing-consulting",
        title: "Digital Consulting & Ongoing Support",
        description:
          "Strategic consulting, training, digital presence assessments, and ongoing support for entrepreneurs and marketing teams.",
      },
      {
        id: "marketing-packages",
        title: "FLOW Integrated Packages",
        description:
          "Tailored plans combining social media, content, advertising, and consulting for different business stages.",
      },
    ],
  },

  {
    key: "logistics",
    icon: "truck",
    title: "Logistics Services",
    description:
      "Bilingual logistics solutions for tracking, returns, customer support, data analysis, and route optimization.",
    subservices: [
      {
        id: "logistics-tracking",
        title: "Proactive Tracking & Monitoring",
        description:
          "Real-time visibility and control of your order and shipment pipeline.",
      },
      {
        id: "logistics-returns",
        title: "Reverse Logistics & Returns",
        description:
          "Efficient returns management that protects your margins and customer experience.",
      },
      {
        id: "logistics-support",
        title: "Bilingual Customer Support",
        description:
          "Support teams aligned with U.S. business culture and service expectations.",
      },
      {
        id: "logistics-bi",
        title: "Data Analysis & BI",
        description:
          "Insights and reporting to improve operational strategy and performance.",
      },
      {
        id: "logistics-tms",
        title: "TMS System & Route Optimization",
        description:
          "Tech-enabled routing to reduce transportation costs and delivery time.",
      },
    ],
  },

  {
    key: "recruitment",
    icon: "users",
    title: "Entry-Level Executive Recruitment",
    description:
      "We recruit and manage bilingual junior talent for U.S. companies, combining modern processes, technology, and human expertise. Our model reduces costs, accelerates hiring, and ensures efficient integration with ongoing support.",
    subservices: [
      {
        id: "recruitment-junior-talent",
        title: "Recruitment of Bilingual Junior Talent",
        description:
          "Identification and selection of high‑potential bilingual professionals across Latin America.",
      },
      {
        id: "recruitment-outsourcing",
        title: "Remote Hiring & Outsourcing",
        description:
          "Flexible hiring models that reduce operational risk and accelerate team scalability.",
      },
      {
        id: "recruitment-assessments",
        title: "Technical & Soft‑Skills Assessments",
        description:
          "Comprehensive evaluations to ensure candidates meet both role requirements and cultural fit.",
      },
      {
        id: "recruitment-supervision",
        title: "Supervision & Quality Control",
        description:
          "Ongoing performance monitoring, structured workflows, and support for remote efficiency.",
      },
      {
        id: "recruitment-onboarding",
        title: "Onboarding & Early‑Stage Support",
        description:
          "Guided integration process to ensure smooth adaptation and long‑term retention.",
      },
      {
        id: "recruitment-roles",
        title: "Administrative, Support & Sales Roles",
        description:
          "Virtual assistants, customer support, sales assistants, marketing support, and more.",
      },
      {
        id: "recruitment-digital-tools",
        title: "Junior Talent with Digital Tool Proficiency",
        description:
          "Professionals trained in modern digital tools to support operational and commercial teams.",
      },
    ],
  },
];
