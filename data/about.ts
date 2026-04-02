// data/about.ts

export type AboutFeature = {
  id: string;
  icon?: string;
  title: string;
  description: string;
};

export const aboutIntro = {

  title: "About us",
  subtitle: "FLOW for business growth & operations",
  body:
    "FLOW LLC is a strategic services company that drives growth for U.S. businesses by integrating operational excellence, specialized talent, and digital management. We combine human talent, modern processes and technology to help companies scale efficiently.",
};

export const aboutFeatures: AboutFeature[] = [
  {
    id: "bpo",
    icon: "settings",
    title: "Business Process Optimization",
    description:
      "Structured processes and continuous improvement across logistics, workflows, and execution.",
  },
  {
    id: "nearshore",
    icon: "headphones",
    title: "Bilingual Nearshore Talent",
    description:
      "Professionals across LATAM aligned with U.S. business culture and communication standards.",
  },
  {
    id: "digital",
    icon: "chart",
    title: "Digital Strategy & Brand Growth",
    description:
      "Strategies that strengthen brand presence, communication, and demand generation.",
  },
  {
    id: "logistics",
    icon: "truck",
    title: "Smart Logistics & Remote Operations",
    description:
      "Integrated support for coordination, tracking, and operational efficiency.",
  },
];
