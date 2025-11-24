import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Lightbulb, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Why This Exists
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A simple idea with big implications: helping humans and AI systems understand each other better.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">This Is a Laboratory, Not Entertainment</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Every conversation here costs real money to run. We're not building a game or a toy. We're building a testing ground for something more important: figuring out how humans and AI systems can work together in ways that benefit everyone.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When you talk with historical wisdom figures here, you're helping us learn what works and what doesn't when AI systems try to have meaningful conversations with humans. Your thoughtful use helps us build better systems for everyone.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">AI-Human Diplomacy</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Think of "diplomacy" the way countries use it: finding ways to understand each other, communicate clearly, and work together despite differences. That's what we're doing with AI.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    AI systems are complex. Most people don't understand how they work or what they can do. This creates confusion and mistrust. We're using conversations with historical thinkers to make AI more approachable and understandable, while also learning how to build AI that truly serves human needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Conversations Around Time, Not Across It</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    We're not pretending to bring the dead back to life. Instead, we're creating a space where ideas from different eras can meet and talk to each other. Socrates meeting bell hooks. Rumi discussing ideas with Simone de Beauvoir.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This isn't about accuracy—it's about exploring ideas in new ways. The AI doesn't replace these thinkers. It creates a way to engage with their ideas that feels personal and immediate, helping us think more deeply about the challenges we face today.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">A Bigger Vision: Bringing Ethical Organizations Together</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    This platform is a demonstration of principles we believe should guide how AI is built and used everywhere. We want to bring together:
                  </p>
                  <ul className="space-y-2 text-lg text-muted-foreground mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Companies that care about doing AI responsibly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Universities researching better AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Countries and governments setting AI policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Organizations working to make AI benefit everyone</span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our goal is to create a worldwide conversation about making AI work for humanity, not against it. We call this "federation"—different groups working together toward shared values.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you're part of a company, university, government, or organization working on ethical AI, we'd love to talk. Green Elephant is building partnerships with groups worldwide who share our vision for responsible AI development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  data-testid="button-book-discovery-call"
                  onClick={() => window.open('https://calendly.com/greenelephant/discovery-call-with-esteve', '_blank')}
                >
                  Book a Discovery Call with Esteve
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  data-testid="button-visit-greenelephant"
                  onClick={() => window.open('https://greenelephant.org', '_blank')}
                >
                  Visit Green Elephant
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to try the platform yourself?
            </p>
            <Link href="/">
              <Button variant="outline" size="lg" data-testid="button-back-home">
                Explore Conversations
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
