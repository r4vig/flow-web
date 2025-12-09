import { Suspense } from "react";
import ServicesSection from "@/components/Services";

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ServicesSection />
    </Suspense>
  );
}
