import dynamic from "next/dynamic";

export const metadata = {
  title: "About us",
  description: "Conoce más sobre Flow, nuestro equipo y nuestra metodología.",
};

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-80 animate-pulse bg-gray-200 rounded-xl" />
  ),
});

export default function AboutPage() {
  return <AboutSection />;
}
