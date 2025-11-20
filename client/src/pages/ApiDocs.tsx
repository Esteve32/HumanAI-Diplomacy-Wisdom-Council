import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Terminal, Zap } from "lucide-react";
import { Link } from "wouter";

export default function ApiDocs() {
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
            <Badge variant="outline" className="text-sm px-4 py-2">
              Work in Progress
            </Badge>
            <h1 className="font-display text-5xl font-bold">
              API Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access the Wisdom Council programmatically through our REST API. Native integration for your applications.
            </p>
          </div>

          <Card className="p-8 bg-muted/30">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 p-6 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Terminal className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">
                API Documentation Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We're currently building comprehensive API documentation. This will include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">RESTful Endpoints</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete API reference for all wisdom conversation endpoints
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Secure API key management and OAuth2 integration
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Terminal className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Code Examples</h3>
                    <p className="text-sm text-muted-foreground">
                      Sample code in Python, JavaScript, Go, and more
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">SDKs & Libraries</h3>
                    <p className="text-sm text-muted-foreground">
                      Official client libraries for rapid integration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-3">Early Access</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in early API access? Join our developer waitlist and we'll notify you when documentation is ready.
              </p>
              <Button 
                className="min-h-11"
                data-testid="button-join-waitlist"
                onClick={() => {
                  const subject = encodeURIComponent("API Early Access Request");
                  const body = encodeURIComponent(
                    "I'm interested in early access to the Wisdom Council API.\n\n" +
                    "Use case:\n[Please describe how you plan to use the API]\n\n" +
                    "Expected usage:\n[Estimated API calls per month]\n\n"
                  );
                  window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
                }}
              >
                Request Early Access
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
