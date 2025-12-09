import dynamic from "next/dynamic";
import Container from "@/components/Container";

// Hero → carga inmediata (import normal)
import HeroRotator from "@/components/HeroRotator";

// Services → lazy load (import dinámico)
const Services = dynamic(() => import("@/components/Services"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-64 animate-pulse bg-gray-200 rounded-xl mt-16" />
  ),
});

export default function HomePage() {
  return (
    <Container>
      <HeroRotator />
      <Services />
    </Container>
  );
}
