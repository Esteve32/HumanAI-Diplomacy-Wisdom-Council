import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Lightbulb, ArrowRight, Shield, ExternalLink } from "lucide-react";
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
                      <span>
                        <a 
                          href="https://en.wikipedia.org/wiki/Teal_organisation" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                          data-testid="link-teal-organizations"
                        >
                          TEAL organizations
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        {" "}and other groups already thinking ahead about ethical business structures, culture, and human relationships
                      </span>
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

            <Card className="p-8 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Safety First: How We Built This System</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Because this platform involves AI conversations, we've built comprehensive safety systems to protect everyone who uses it. Here's exactly what we did and why it matters.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Content Safety Through the ACX Framework</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        We developed our safety system using the{" "}
                        <a 
                          href="https://arbora.partners/nest" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline font-semibold"
                          data-testid="link-arbora-acx"
                        >
                          ACX (AI-Human Experience) Framework
                        </a>
                        {" "}from{" "}
                        <a 
                          href="https://arbora.partners" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline"
                          data-testid="link-arbora-partners"
                        >
                          Arbora Partners
                        </a>
                        , which covers 10 different areas of responsible AI. Think of it as a checklist that makes sure we're doing AI the right way—protecting users, being transparent, and following regulations.
                      </p>
                      
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-semibold mb-2">Our Compliance Score:</p>
                        <p className="text-2xl font-bold text-primary mb-1">99/100</p>
                        <p className="text-sm text-muted-foreground">Across all 10 ACX framework categories (Arbora Partners standard)</p>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        We monitor every conversation for harmful content in four specific categories. Each category has carefully chosen patterns that we watch for:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Hate Speech</p>
                          <p className="text-sm text-muted-foreground">8 patterns monitoring for slurs and discriminatory language</p>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Violence</p>
                          <p className="text-sm text-muted-foreground">11 patterns watching for threats and violent content</p>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Sexual Exploitation</p>
                          <p className="text-sm text-muted-foreground">6 patterns protecting against harmful sexual content</p>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Self-Harm</p>
                          <p className="text-sm text-muted-foreground">16 patterns detecting discussions of suicide and self-harm</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">How We Learned What Works</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        We tested two different approaches to content moderation:
                      </p>
                      <ul className="space-y-3 text-lg text-muted-foreground mb-4">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1 shrink-0">1.</span>
                          <div>
                            <span className="font-semibold">Machine Learning Approach (Google Perspective API)</span>
                            <span className="block text-base mt-1">
                              This AI-powered system was supposed to catch harmful content automatically. But when we tested it with real users—including therapists having philosophical conversations—it blocked too many legitimate discussions. Questions about emotions and difficult life topics were incorrectly flagged as harmful.
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1 shrink-0">2.</span>
                          <div>
                            <span className="font-semibold">Pattern-Based Approach (Our Current System, Active Since Nov 2024)</span>
                            <span className="block text-base mt-1">
                              Instead, we built a system with 41 specific patterns that we know are harmful. This is more precise—it catches actual problems without blocking thoughtful conversations about difficult topics. We tested this with both harmful content (which was blocked) and legitimate therapeutic discussions (which were allowed through). See our{" "}
                              <Link href="/responsible-ai">
                                <a className="text-primary hover:underline" data-testid="link-testing-results">
                                  compliance documentation
                                </a>
                              </Link>
                              {" "}for more details, or contact us at esteve@greenelephant.org for specific questions about our moderation approach.
                            </span>
                          </div>
                        </li>
                      </ul>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        This learning process is exactly what AI-human diplomacy looks like in practice: trying different approaches, listening to feedback, and choosing what actually works for real people.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Why You See Crisis Resources</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        When our system detects someone might be in distress, you'll see contact information for mental health crisis support. This isn't just us being careful—it's required by the{" "}
                        <a 
                          href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1"
                          data-testid="link-eu-ai-act"
                        >
                          European Union's AI Act
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        , which sets rules for how AI systems should work.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        The EU AI Act says that when AI systems interact with humans on sensitive topics, they must provide appropriate support resources. We include the Finland Mental Health Crisis Line (09 2525 0111) because we're based in Finland and follow EU regulations.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        This is one of those places where regulation actually helps: it ensures platforms don't just filter content, but also connect people with real human support when they need it.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Complete Transparency</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Every decision we made about safety, privacy, and compliance is documented. We're not hiding how this works:
                      </p>
                      <ul className="space-y-2 text-lg text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            You can see our{" "}
                            <Link href="/responsible-ai">
                              <a className="text-primary hover:underline inline-flex items-center gap-1" data-testid="link-responsible-ai">
                                full compliance documentation
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Link>
                            {" "}with detailed ACX framework scorecard
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>All conversation data stays private—we never sell it or share it</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>You can download your data anytime (required by GDPR)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>We follow EU privacy laws because we believe in strong data protection</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Why This Matters:</span> AI-human diplomacy isn't just about making AI that's nice to talk to. It's about building AI systems that respect human dignity, follow clear rules, and can be trusted. Every safety feature here demonstrates that it's possible to build AI responsibly—if you're willing to do the work.
                      </p>
                    </div>
                  </div>
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
