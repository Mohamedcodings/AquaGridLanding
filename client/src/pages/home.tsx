import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import SolutionSection from "@/components/solution-section";
import ImpactSection from "@/components/impact-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SolutionSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
