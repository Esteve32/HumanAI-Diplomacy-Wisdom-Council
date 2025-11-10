import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Cozy_library_fireplace_hero_background_5001df1d.png";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fireside Chats with History's Wisest Minds
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-serif leading-relaxed max-w-3xl mx-auto">
          Transform your personal growth journey with AI agents embodying the wisdom of Socrates, Marcus Aurelius, Rumi, and more. 
          Ethical AI for internal development, not just productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            data-testid="button-start-conversation"
            onClick={() => console.log('Start conversation clicked')}
          >
            Start Your First Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white/15"
            data-testid="button-explore-wisdom"
            onClick={() => console.log('Explore wisdom clicked')}
          >
            Explore Wisdom Library
          </Button>
        </div>
        <p className="mt-8 text-white/80 text-sm">
          Join 10,000+ people growing with AI mentorship
        </p>
      </div>
    </section>
  );
}
