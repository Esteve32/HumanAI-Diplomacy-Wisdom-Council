import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/GE logo 512 512 black BG 2023_1762735898630.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log('Subscribe:', email);
    setEmail("");
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
                className="h-10 w-10 rounded-full invert"
              />
              <div>
                <div className="font-bold">Wisdom AI</div>
                <div className="text-xs text-muted-foreground">by Green Elephant</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Wisdom from the past for growth in the future.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-linkedin"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-github"
                onClick={() => console.log('GitHub clicked')}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Wisdom Library</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-all-figures">
                  All Figures
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-philosophers">
                  Philosophers
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-poets">
                  Poets & Artists
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-leaders">
                  Leaders & Activists
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-api-docs-footer">
                  API Documentation
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-mcp-templates">
                  MCP Templates
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-guide">
                  Getting Started Guide
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly wisdom insights in your inbox
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter-email"
                className="flex-1"
              />
              <Button 
                onClick={handleSubscribe}
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
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
