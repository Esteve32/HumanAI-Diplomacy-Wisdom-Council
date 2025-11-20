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
          Conversations Across Time
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
          Step into a fireside chat with history's greatest minds. Bridge centuries of wisdom through genuine dialogue, from ancient philosophers to modern visionaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-start-journey"
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
          <Link href="/ai-dialogue">
            <Button 
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 bg-primary/10 backdrop-blur-md border-primary/30 text-white hover:bg-primary/20"
              data-testid="button-watch-dialogue"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              Watch AI Dialogue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
