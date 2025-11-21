import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Users, AlertTriangle, Phone, Download, Trash, Lock, Scale, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResponsibleAi() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-display">
              Responsible AI Governance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building trustworthy AI experiences through transparent practices, safety measures, and user empowerment
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                ACX Framework Compliance
              </CardTitle>
              <CardDescription>
                Our commitment to responsible AI development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Wisdom Council aligns with the ACX (AI Conformity Assessment) Framework, ensuring ethical and safe AI deployment across nine critical categories:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">1. Risk Assessment & Categorization</h4>
                  <p className="text-xs text-muted-foreground">Low-risk educational AI application with transparent purpose and scope</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">2. Data Governance</h4>
                  <p className="text-xs text-muted-foreground">Minimal data collection, full user control, GDPR-compliant practices</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">3. Transparency & Explainability</h4>
                  <p className="text-xs text-muted-foreground">Clear AI disclaimers, visible system limitations, documented behavior</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">4. Human Oversight</h4>
                  <p className="text-xs text-muted-foreground">Admin monitoring, feedback mechanisms, manual review capabilities</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">5. Safety & Security</h4>
                  <p className="text-xs text-muted-foreground">Rate limiting, content moderation, crisis resource integration</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">6. Accountability</h4>
                  <p className="text-xs text-muted-foreground">Activity logging, audit trails, clear responsibility structures</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">7. Fairness & Non-Discrimination</h4>
                  <p className="text-xs text-muted-foreground">Diverse historical perspectives, inclusive representation, bias awareness</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">8. Privacy Protection</h4>
                  <p className="text-xs text-muted-foreground">Session-based tracking, no PII required, user data export rights</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">9. Continuous Monitoring</h4>
                  <p className="text-xs text-muted-foreground">Analytics dashboard, feedback tracking, iterative improvements</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Safety Features
              </CardTitle>
              <CardDescription>
                Protecting users through proactive measures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Rate Limiting</h4>
                    <p className="text-xs text-muted-foreground">
                      Message sending is limited to 10 requests per minute per session to prevent abuse and ensure fair resource allocation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Content Safety</h4>
                    <p className="text-xs text-muted-foreground">
                      Hybrid moderation: Google Perspective API (ML-powered, production-grade) for toxicity detection when available, with deterministic keyword filter fallback. Screens all inbound/outbound messages for harmful content before processing. Combined with GPT-5 safety and crisis resources
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Age Verification</h4>
                    <p className="text-xs text-muted-foreground">
                      All users must confirm they are 13 years or older and accept Terms of Service before accessing conversations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Sensitive Content Detection</h4>
                    <p className="text-xs text-muted-foreground">
                      Automatic alerts for discussions involving self-harm, suicide, or crisis topics with immediate crisis resource information
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                User Rights & Control
              </CardTitle>
              <CardDescription>
                Your data, your choices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Download className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Data Export</h4>
                    <p className="text-xs text-muted-foreground">
                      Download all your conversation history, messages, and activity logs at any time in JSON format
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trash className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Conversation Deletion</h4>
                    <p className="text-xs text-muted-foreground">
                      Permanently delete any conversation with a single click. Deletion is immediate and irreversible
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Transparent Terms</h4>
                    <p className="text-xs text-muted-foreground">
                      Clear Terms of Service and Privacy Policy available at all times. No hidden data collection or unexpected usage
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-blue-50/30 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Crisis Resources
              </CardTitle>
              <CardDescription>
                Immediate help when you need it most
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 bg-background rounded-lg border">
                  <p className="font-semibold mb-2">Finland Mental Health Crisis Line</p>
                  <p className="text-2xl font-bold text-primary mb-1">09 2525 0111</p>
                  <p className="text-xs text-muted-foreground">Available 24/7 for immediate mental health support</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  If you or someone you know is experiencing a mental health crisis, please reach out immediately. 
                  Our AI conversations are educational only and never a substitute for professional mental health care.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Known Limitations
              </CardTitle>
              <CardDescription>
                Understanding what Wisdom Council can and cannot do
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Beta Status</h4>
                <p className="text-xs text-muted-foreground">
                  Wisdom Council is in active development. Features may change, and occasional errors or unexpected behavior may occur. 
                  We appreciate your patience and feedback as we improve the experience.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Not Professional Advice</h4>
                <p className="text-xs text-muted-foreground">
                  AI-generated responses are for educational and inspirational purposes only. They should not be considered as 
                  professional medical, legal, financial, or therapeutic advice. Always consult qualified professionals for serious concerns.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Historical Accuracy</h4>
                <p className="text-xs text-muted-foreground">
                  While we strive for historically informed responses, AI personas may occasionally produce anachronisms or 
                  simplifications. These conversations are interpretive dialogues, not definitive historical accounts.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">AI Hallucinations</h4>
                <p className="text-xs text-muted-foreground">
                  Language models can sometimes generate plausible-sounding but factually incorrect information. 
                  We recommend cross-referencing important claims with authoritative sources.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Contact & Feedback
              </CardTitle>
              <CardDescription>
                We welcome your questions and concerns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                For questions about our AI governance practices, data handling, or to report concerns about 
                harmful content or system behavior, please reach out:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button variant="default">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline">
                    Privacy Policy
                  </Button>
                </Link>
                <Link href="/terms">
                  <Button variant="outline">
                    Terms of Service
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              Last updated: November 21, 2025
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Wisdom Council is committed to evolving our responsible AI practices as technology, regulations, 
              and best practices advance. This page will be updated to reflect our ongoing improvements.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
