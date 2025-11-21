import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/DashboardVersionOfficialLogo_LargeBlack@2x_1763744013740.png";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSubscribe = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!newsletterConsent) {
      toast({
        title: "Consent Required",
        description: "Please confirm that you consent to receive our newsletter.",
        variant: "destructive",
      });
      return;
    }

    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          cta: "newsletter-subscribe",
          consentGiven: true,
        }),
      });

      const subject = encodeURIComponent("Newsletter Subscription");
      const body = encodeURIComponent(
        `I would like to subscribe to the Wisdom Council newsletter.\n\n` +
        `Email: ${email}\n` +
        `Consent: Yes (explicitly provided)\n\n` +
        `I consent to receive weekly wisdom insights and updates about Wisdom Council.`
      );
      
      window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
      
      toast({
        title: "Newsletter Subscription",
        description: "Opening your email client to complete subscription.",
      });
      
      setEmail("");
      setNewsletterConsent(false);
    } catch (error) {
      console.error("Error tracking subscription:", error);
      toast({
        title: "Error",
        description: "There was an issue processing your subscription.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Green Elephant" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-bold">Wisdom AI</div>
                <div className="text-xs text-muted-foreground">by Green Elephant</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bridging centuries of wisdom through intimate dialogue.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-x"
                onClick={() => window.open('https://x.com/GreenElephantOy', '_blank')}
              >
                <span className="text-sm font-bold">𝕏</span>
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-linkedin"
                onClick={() => window.open('https://fi.linkedin.com/company/greenelephant-org', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-facebook"
                onClick={() => window.open('https://www.facebook.com/GreenElephant.org/', '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-instagram"
                onClick={() => window.open('https://www.instagram.com/greenelephantorg/', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-youtube"
                onClick={() => window.open('https://www.youtube.com/channel/UCXvLX3yhS8y_8vv4ltRClIg', '_blank')}
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Wisdom Library</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      const element = document.getElementById('voting');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-all-figures"
                >
                  All Figures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      const element = document.getElementById('voting');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-philosophers"
                >
                  Philosophers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      const element = document.getElementById('voting');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-poets"
                >
                  Poets & Artists
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setLocation('/');
                    setTimeout(() => {
                      const element = document.getElementById('voting');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-leaders"
                >
                  Leaders & Activists
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/api-docs" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-api-docs-footer">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/mcp-templates" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-mcp-templates">
                  MCP Templates
                </Link>
              </li>
              <li>
                <Link href="/getting-started" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-guide">
                  Getting Started Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receive weekly wisdom conversations and insights across time
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter-email"
              />
              <div className="flex items-start gap-2">
                <Checkbox
                  id="newsletter-consent"
                  checked={newsletterConsent}
                  onCheckedChange={(checked) => setNewsletterConsent(checked as boolean)}
                  data-testid="checkbox-newsletter-consent"
                  className="mt-0.5"
                />
                <label
                  htmlFor="newsletter-consent"
                  className="text-xs text-muted-foreground cursor-pointer leading-relaxed"
                >
                  I consent to receive emails with wisdom insights and conversations across time
                </label>
              </div>
              <Button 
                onClick={handleSubscribe}
                disabled={!newsletterConsent || !email}
                className="w-full"
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2025 Green Elephant. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
