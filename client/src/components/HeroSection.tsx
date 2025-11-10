import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Cozy_library_fireplace_hero_background_5001df1d.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
          Ancient Wisdom<br />Modern Minds
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
          Conversations with history's greatest minds
        </p>
        <Button 
          size="lg" 
          className="text-xl px-12 py-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
          data-testid="button-start-journey"
          onClick={() => {
            const element = document.getElementById('pathways');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Begin Your Journey
          <ArrowRight className="ml-3 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
