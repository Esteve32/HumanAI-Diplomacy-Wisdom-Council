import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-background" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Start free, upgrade when you need API access for your team or applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Free Access</h3>
              <p className="text-muted-foreground">Perfect for personal growth</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground">Forever free</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Access to all 50+ wisdom figures via ChatGPT</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Unlimited personal conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>MCP workflow templates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Community support</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              data-testid="button-start-free"
              onClick={() => console.log('Start free clicked')}
            >
              Get Started Free
            </Button>
          </Card>

          <Card className="p-8 border-primary relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Popular
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">API Access</h3>
              <p className="text-muted-foreground">For developers and teams</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">$29</div>
              <p className="text-muted-foreground">per month</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold">Everything in Free, plus:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Full REST API access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>10,000 API calls per month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>WebSocket streaming support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Team collaboration features</span>
              </li>
            </ul>

            <Button 
              className="w-full" 
              size="lg"
              data-testid="button-upgrade-api"
              onClick={() => console.log('Upgrade to API clicked')}
            >
              Upgrade to API Access
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              30-day money-back guarantee
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need custom enterprise solutions? Volume discounts available.
          </p>
          <button 
            className="text-primary hover:underline font-medium"
            data-testid="button-contact-sales"
            onClick={() => console.log('Contact sales clicked')}
          >
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
}
