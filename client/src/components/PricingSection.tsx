import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-background" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            Early Access Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Join the Wisdom Council
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Reserve your place in this timeless movement. Lock in early access pricing—no payment required until we're ready to welcome you fully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Free Access</h3>
              <p className="text-muted-foreground">Wisdom across centuries awaits</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground">Forever free</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Fireside chats with 51+ historical wisdom figures</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>AI-to-AI dialogues across centuries</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Share wisdom conversations with others</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Community of wisdom seekers</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="w-full min-h-11" 
              size="lg"
              data-testid="button-join-free-waitlist"
              onClick={() => {
                const element = document.getElementById('voting');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Early Access
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              No credit card required
            </p>
          </Card>

          <Card className="p-8 border-primary relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Most Wanted
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">API Access</h3>
              <p className="text-muted-foreground">For developers and teams</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold">$29</div>
                <div className="text-muted-foreground">/month</div>
              </div>
              <p className="text-sm text-muted-foreground">When available • Lock in this rate now</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold">Everything in Free, plus:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Full REST API access (in development)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>10,000 API calls/month (planned)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>WebSocket streaming (coming soon)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Team collaboration (planned)</span>
              </li>
            </ul>

            <Button 
              className="w-full min-h-11" 
              size="lg"
              data-testid="button-join-api-waitlist"
              onClick={() => {
                const subject = encodeURIComponent("API Access Waitlist");
                const body = encodeURIComponent(
                  "I would like to join the API Access waitlist for Wisdom Council.\n\n" +
                  "Please notify me when API access is available at the $29/month early access rate.\n\n"
                );
                window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
              }}
            >
              Join Waitlist
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Reserve this rate • No payment until launch
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Beta Notice:</strong> Features shown are in active development. By joining the waitlist, you'll be notified when features launch and have the option to subscribe at these early access rates. No payment will be collected until the service is fully operational.
            </p>
          </div>
          <p className="text-muted-foreground mb-4">
            Need custom enterprise solutions? Volume discounts available when we launch.
          </p>
          <Button 
            variant="default"
            className="min-h-11 font-medium"
            data-testid="button-contact-sales"
            onClick={async () => {
              await fetch("/api/track-click", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  cta: "contact-sales-enterprise",
                  consentGiven: false,
                }),
              });
              
              const subject = encodeURIComponent("Enterprise Solutions Inquiry");
              const body = encodeURIComponent(
                "I am interested in enterprise solutions for Wisdom Council.\n\n" +
                "Please contact me to discuss:\n" +
                "- Custom volume pricing\n" +
                "- Enterprise features\n" +
                "- Team collaboration tools\n\n"
              );
              window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
            }}
          >
            Contact Sales for Enterprise →
          </Button>
        </div>
      </div>
    </section>
  );
}
