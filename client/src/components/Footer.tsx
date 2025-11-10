import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail("");
  };

  return (
    <footer className="bg-card border-t py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-primary">Green Elephant</h3>
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
              Weekly wisdom insights and new figure announcements.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 Green Elephant. All rights reserved.
          </div>
          <div className="flex gap-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
