import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/GE logo 512 512 black BG 2023_1762735898630.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Green Elephant" 
              className="h-8 w-8 rounded-full invert"
              data-testid="logo-greenelephant"
            />
            <span className="text-xs text-muted-foreground">powered by Green Elephant</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Button 
              variant="ghost"
              className="min-h-11"
              onClick={() => scrollToSection('conversations')}
              data-testid="nav-conversations"
            >
              Conversations
            </Button>
            <Button 
              variant="ghost"
              className="min-h-11"
              onClick={() => scrollToSection('pricing')}
              data-testid="nav-pricing"
            >
              Pricing
            </Button>
            <Button 
              variant="default"
              className="min-h-11"
              data-testid="button-get-started"
              onClick={() => console.log('Get started clicked')}
            >
              Get Started
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start min-h-11"
              onClick={() => scrollToSection('conversations')}
              data-testid="nav-mobile-conversations"
            >
              Conversations
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start min-h-11"
              onClick={() => scrollToSection('pricing')}
              data-testid="nav-mobile-pricing"
            >
              Pricing
            </Button>
            <Button 
              variant="default"
              className="w-full min-h-11"
              data-testid="button-mobile-get-started"
              onClick={() => console.log('Get started clicked')}
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
