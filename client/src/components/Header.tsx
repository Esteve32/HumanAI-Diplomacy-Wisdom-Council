import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">Green Elephant</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('voting')}
              data-testid="nav-vote"
            >
              Vote
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('integrate')}
              data-testid="nav-integrate"
            >
              Integrate
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('pricing')}
              data-testid="nav-pricing"
            >
              Pricing
            </Button>
            <Button 
              variant="default"
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
              className="w-full justify-start"
              onClick={() => scrollToSection('voting')}
              data-testid="nav-mobile-vote"
            >
              Vote
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => scrollToSection('integrate')}
              data-testid="nav-mobile-integrate"
            >
              Integrate
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => scrollToSection('pricing')}
              data-testid="nav-mobile-pricing"
            >
              Pricing
            </Button>
            <Button 
              variant="default"
              className="w-full"
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
