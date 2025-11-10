import { Card } from "@/components/ui/card";
import { Brain, Heart, TrendingUp, Users } from "lucide-react";

export default function ConceptSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI for Internal Growth, Not Just Productivity
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
            The world is changing faster than ever with AI. But true adaptation isn't just about 
            new tools—it's about growing as a person. Connect with timeless wisdom to navigate modern challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">The Challenge We Face</h3>
            <p className="text-lg text-muted-foreground font-serif leading-relaxed">
              Technology races ahead, but our inner development lags behind. We chase external productivity 
              while neglecting the wisdom needed to use it well. The answer isn't more tools—it's deeper understanding.
            </p>
            <p className="text-lg text-muted-foreground font-serif leading-relaxed">
              Imagine having a fireside chat with Socrates about your decisions, Marcus Aurelius about resilience, 
              or Rumi about finding meaning. That's what we've built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Deep Reflection</h4>
                  <p className="text-muted-foreground">
                    Go beyond surface-level advice. Engage in Socratic dialogue that challenges assumptions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ethical AI Use</h4>
                  <p className="text-muted-foreground">
                    AI as a tool for personal wisdom, not just task completion. Technology with humanity.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Timeless Wisdom</h4>
                  <p className="text-muted-foreground">
                    Ancient insights applied to modern problems. Principles that have stood the test of millennia.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pass It Forward</h4>
                  <p className="text-muted-foreground">
                    Join a movement of people choosing personal growth. Share wisdom, not just content.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
