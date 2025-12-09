// data/services.ts
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: 1,
    titleEn: "Proactive tracking & monitoring",
    titleEs: "Seguimiento proactivo de pedidos",
    descriptionEn:
      "Real-time visibility and control of your order and shipment pipeline.",
    descriptionEs:
      "Visibilidad y control en tiempo real del flujo de pedidos y envíos.",
    icon: "truck",
  },
  {
    id: 2,
    titleEn: "Reverse logistics & returns",
    titleEs: "Logística inversa y devoluciones",
    descriptionEn:
      "Efficient returns management that protects your margins and customer experience.",
    descriptionEs:
      "Gestión eficiente de devoluciones para proteger tus márgenes y clientes.",
    icon: "refresh",
  },
  {
    id: 3,
    titleEn: "Bilingual customer support",
    titleEs: "Atención al cliente bilingüe",
    descriptionEn:
      "Support teams aligned with U.S. business culture and service expectations.",
    descriptionEs:
      "Equipos alineados a la cultura de servicio de EE. UU.",
    icon: "headphones",
  },
  {
    id: 4,
    titleEn: "Data analysis & BI",
    titleEs: "Análisis de datos y BI",
    descriptionEn:
      "Insights and reporting to improve operational strategy and performance.",
    descriptionEs:
      "Reportes e insights para mejorar estrategia operativa y rendimiento.",
    icon: "chart",
  },
  {
    id: 5,
    titleEn: "TMS system & route optimization",
    titleEs: "Optimización de rutas y TMS",
    descriptionEn:
      "Tech-enabled routing to reduce transportation costs and delivery time.",
    descriptionEs:
      "Rutas optimizadas para reducir costos y tiempos de entrega.",
    icon: "settings",
  }
];
