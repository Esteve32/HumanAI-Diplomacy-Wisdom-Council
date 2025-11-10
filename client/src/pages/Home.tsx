import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VotingSection from "@/components/VotingSection";
import PathwaysSection from "@/components/PathwaysSection";
import SharingSection from "@/components/SharingSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VotingSection />
      <PathwaysSection />
      <SharingSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
