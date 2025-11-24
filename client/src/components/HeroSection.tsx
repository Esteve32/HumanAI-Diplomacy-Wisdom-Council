import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
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
          AI-Human Diplomacy
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
          Pull up a chair by the fire. Have deep conversations with wisdom from throughout history. Each dialogue helps us understand how AI and humans can communicate better—building a future where technology truly serves humanity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-start-conversation"
            onClick={() => {
              const element = document.getElementById('conversations');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start a Conversation
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-xl px-12 py-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-partner-with-us"
            onClick={() => window.open('https://calendly.com/greenelephant/discovery-call-with-esteve', '_blank')}
          >
            <Sparkles className="mr-3 h-6 w-6" />
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
}
