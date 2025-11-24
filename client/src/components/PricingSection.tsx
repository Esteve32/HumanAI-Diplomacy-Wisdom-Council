import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PricingSection() {
  const { toast } = useToast();
  return (
    <section className="py-20 px-6 bg-background" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            Early Access
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Ways to Participate
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Whether you're an individual learner or representing an organization, there's a way to help us build better AI systems. Reserve your spot—no payment until we're fully ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Free Access</h3>
              <p className="text-muted-foreground">For individuals and explorers</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground">No cost to participate</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Engage with 51+ historical thinkers</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Explore AI-to-AI conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Learn from this laboratory</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Contribute to ethical AI development</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="w-full min-h-11" 
              size="lg"
              data-testid="button-join-free-waitlist"
              onClick={async () => {
                try {
                  await fetch("/api/track-click", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      cta: "join-free-waitlist",
                      consentGiven: false,
                    }),
                  });
                  
                  toast({
                    title: "Thanks for your interest!",
                    description: "Opening your email client to complete your Free Early Access waitlist request.",
                  });
                } catch (error) {
                  console.error("Error tracking free waitlist:", error);
                  toast({
                    title: "Request Tracked",
                    description: "Opening your email client to complete your waitlist request.",
                  });
                }
                
                const subject = encodeURIComponent("Free Early Access Waitlist");
                const body = encodeURIComponent(
                  "I would like to join the Free Early Access waitlist for Wisdom Council.\n\n" +
                  "Please notify me when the platform launches.\n\n"
                );
                window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
              }}
            >
              Get Early Access
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Thoughtful use encouraged—each conversation costs us money to run
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
              <h3 className="text-2xl font-semibold mb-2">Developer Access</h3>
              <p className="text-muted-foreground">For teams building with AI</p>
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
                <span>Full API access (in development)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>10,000 API calls/month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Build this into your own systems</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Team collaboration tools</span>
              </li>
            </ul>

            <Button 
              className="w-full min-h-11" 
              size="lg"
              data-testid="button-join-api-waitlist"
              onClick={async () => {
                try {
                  await fetch("/api/track-click", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      cta: "join-api-waitlist",
                      consentGiven: false,
                    }),
                  });
                  
                  toast({
                    title: "Thanks for your interest!",
                    description: "Opening your email client to complete your API Access waitlist request.",
                  });
                } catch (error) {
                  console.error("Error tracking API waitlist:", error);
                  toast({
                    title: "Request Tracked",
                    description: "Opening your email client to complete your waitlist request.",
                  });
                }
                
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
              <strong className="text-foreground">Development Notice:</strong> We're actively building these features. Join the waitlist to be notified when they're ready. No payment until everything works as promised.
            </p>
          </div>
          <p className="text-muted-foreground mb-4">
            Representing a company, university, or government organization interested in partnering?
          </p>
          <Button 
            variant="default"
            className="min-h-11 font-medium"
            data-testid="button-contact-partnership"
            onClick={async () => {
              try {
                await fetch("/api/track-click", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    cta: "contact-partnership",
                    consentGiven: false,
                  }),
                });
                
                toast({
                  title: "Thanks for your interest!",
                  description: "Opening your email client to discuss partnership opportunities.",
                });
              } catch (error) {
                console.error("Error tracking partnership inquiry:", error);
                toast({
                  title: "Partnership Inquiry",
                  description: "Opening your email client to discuss partnership opportunities.",
                });
              }
              
              const subject = encodeURIComponent("Partnership Inquiry - AI-Human Diplomacy");
              const body = encodeURIComponent(
                "I am interested in partnering with Green Elephant on AI-human diplomacy initiatives.\n\n" +
                "Organization: [Your organization name]\n" +
                "Interest area:\n" +
                "- Ethical AI development\n" +
                "- Research collaboration\n" +
                "- Policy development\n" +
                "- Other: [Please specify]\n\n"
              );
              window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
            }}
          >
            Discuss Partnership Opportunities →
          </Button>
        </div>
      </div>
    </section>
  );
}
