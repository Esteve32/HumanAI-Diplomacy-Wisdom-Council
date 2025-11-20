import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, ThumbsUp, Users, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function GettingStarted() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-display text-5xl font-bold">
              Getting Started with Wisdom Council
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start conversations with AI embodiments of history's wisest minds in just a few steps.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold mb-3">
                    Explore the Wisdom Library
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Browse through 51 AI wisdom personas representing philosophers, poets, activists, and leaders from throughout history. Each persona is designed to engage in thoughtful conversations based on their historical teachings and perspectives.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setLocation('/');
                      setTimeout(() => {
                        const element = document.getElementById('voting');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    data-testid="button-explore-library"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Explore All Personas
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold mb-3">
                    Vote for Your Favorites
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Help us prioritize which wisdom personas to develop next by voting for the figures you'd most like to talk to. Your votes directly influence our development roadmap and ensure the most requested personas are available first.
                  </p>
                  <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg">
                    <ThumbsUp className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Each vote counts! Top-voted personas get priority for full chat integration.
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold mb-3">
                    Start Conversations
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    For personas that are ready (marked with a Chat button), click to start a conversation. Ask questions, seek advice, or explore philosophical ideas. Each conversation is private and personalized to your journey.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">
                        <strong className="text-foreground">Currently available:</strong> Socrates, Simone de Beauvoir, Rosa Parks, Rumi, and Jesus of Nazareth
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Sparkles className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        More personas are being added regularly based on community votes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h2 className="font-display text-2xl font-bold mb-3">
                Tips for Meaningful Conversations
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ask open-ended questions that invite deeper reflection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Share your context and challenges to get personalized wisdom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Don't hesitate to question their perspectives or ask for clarification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Take your time - wisdom conversations are meant for contemplation, not speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Remember: These are AI personas inspired by historical figures, designed to help you think differently</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg"
              onClick={() => setLocation('/')}
              className="min-h-11"
              data-testid="button-start-exploring"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
