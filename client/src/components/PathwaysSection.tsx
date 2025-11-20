import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Blocks, Cloud, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function PathwaysSection() {
  const [copiedWorkflow, setCopiedWorkflow] = useState(false);
  const [copiedAPI, setCopiedAPI] = useState(false);

  const handleCopy = (text: string, type: 'workflow' | 'api') => {
    navigator.clipboard.writeText(text);
    if (type === 'workflow') {
      setCopiedWorkflow(true);
      setTimeout(() => setCopiedWorkflow(false), 2000);
    } else {
      setCopiedAPI(true);
      setTimeout(() => setCopiedAPI(false), 2000);
    }
  };

  const n8nWorkflow = `{
  "nodes": [{
    "type": "wisdom-chat",
    "figure": "socrates",
    "input": "{{$json.question}}"
  }]
}`;

  const apiCode = `const wisdom = new WisdomAPI({
  apiKey: process.env.WISDOM_KEY
});

const chat = await wisdom.chat({
  figure: 'socrates',
  message: 'Your question here'
});`;

  return (
    <section className="py-32 px-6" id="pathways">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Choose Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three ways to bring ancient wisdom into your modern life
          </p>
        </div>

        <div className="space-y-32">
          {/* Pathway 1: Basic Users */}
          <div className="flex flex-col items-center text-center" id="pathway-basic">
            <div className="bg-primary/10 p-6 rounded-full mb-8">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Free Windows to Wisdom
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Start conversations with AI embodiments of history's wisest minds. 
              No setup, no cost—just click and explore.
            </p>
            
            <Card className="p-8 w-full max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-6 text-left"
                  data-testid="button-chat-socrates"
                  onClick={() => window.open('https://chatgpt.com/g/g-1vf04chMP-jesus-acim', '_blank')}
                >
                  <div className="flex items-center gap-3 w-full">
                    <ExternalLink className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">Socrates</div>
                      <div className="text-sm text-muted-foreground">Question everything</div>
                    </div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-6 text-left"
                  data-testid="button-chat-marcus"
                  onClick={() => console.log('Open Marcus Aurelius')}
                >
                  <div className="flex items-center gap-3 w-full">
                    <ExternalLink className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">Marcus Aurelius</div>
                      <div className="text-sm text-muted-foreground">Build resilience</div>
                    </div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-6 text-left"
                  data-testid="button-chat-rumi"
                  onClick={() => console.log('Open Rumi')}
                >
                  <div className="flex items-center gap-3 w-full">
                    <ExternalLink className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">Rumi</div>
                      <div className="text-sm text-muted-foreground">Find meaning</div>
                    </div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-6 text-left"
                  data-testid="button-chat-all"
                  onClick={() => console.log('View all')}
                >
                  <div className="flex items-center gap-3 w-full">
                    <ExternalLink className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">+ 50 More</div>
                      <div className="text-sm text-muted-foreground">Explore all figures</div>
                    </div>
                  </div>
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg text-left">
                <p className="text-sm text-muted-foreground">
                  <strong>Always free.</strong> Perfect for personal growth, journaling, decision-making, and philosophical exploration.
                </p>
              </div>
            </Card>
          </div>

          {/* Pathway 2: Workflow Builders */}
          <div className="flex flex-col items-center text-center" id="pathway-workflow">
            <div className="bg-primary/10 p-6 rounded-full mb-8">
              <Blocks className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Workflow Lego Builders
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Snap wisdom into your automation workflows with n8n, Zapier, Make, and other no-code platforms.
            </p>
            
            <Card className="p-8 w-full max-w-2xl text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Compatible Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['n8n', 'Zapier', 'Make', 'Integrately', 'Pabbly'].map((platform) => (
                      <div 
                        key={platform}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card-foreground/5 p-4 rounded-lg relative">
                  <div className="text-xs text-muted-foreground mb-2">Example: n8n Node</div>
                  <pre className="text-sm overflow-x-auto">
                    <code>{n8nWorkflow}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => handleCopy(n8nWorkflow, 'workflow')}
                    data-testid="button-copy-workflow"
                  >
                    {copiedWorkflow ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 px-3 py-1 rounded-md font-bold text-sm">1</div>
                    <div>
                      <div className="font-medium">Install our workflow node</div>
                      <div className="text-sm text-muted-foreground">Available in platform marketplaces</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 px-3 py-1 rounded-md font-bold text-sm">2</div>
                    <div>
                      <div className="font-medium">Drag & drop into your workflow</div>
                      <div className="text-sm text-muted-foreground">Connect triggers and actions</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-primary/10 px-3 py-1 rounded-md font-bold text-sm">3</div>
                    <div>
                      <div className="font-medium">Automate wisdom</div>
                      <div className="text-sm text-muted-foreground">Daily reflections, team insights, automated journaling</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full min-h-11" data-testid="button-workflow-templates">
                  Download Workflow Templates
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Pathway 3: Developers */}
          <div className="flex flex-col items-center text-center" id="pathway-dev">
            <div className="bg-primary/10 p-6 rounded-full mb-8">
              <Cloud className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Developer Access
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Native API, MCP integration, and cloud deployment. Build wisdom into your applications.
            </p>
            
            <Card className="p-8 w-full max-w-2xl text-left">
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary mb-1">REST API</div>
                    <div className="text-xs text-muted-foreground">Full access</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary mb-1">MCP</div>
                    <div className="text-xs text-muted-foreground">Native support</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary mb-1">Cloud</div>
                    <div className="text-xs text-muted-foreground">Scalable</div>
                  </div>
                </div>

                <div className="bg-card-foreground/5 p-4 rounded-lg relative">
                  <div className="text-xs text-muted-foreground mb-2">Quick Start</div>
                  <pre className="text-sm overflow-x-auto">
                    <code>{apiCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => handleCopy(apiCode, 'api')}
                    data-testid="button-copy-api"
                  >
                    {copiedAPI ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Features</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ WebSocket streaming</li>
                      <li>✓ Context persistence</li>
                      <li>✓ Rate limiting</li>
                      <li>✓ 99.9% uptime SLA</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold mb-2">SDKs</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ JavaScript/TypeScript</li>
                      <li>✓ Python</li>
                      <li>✓ Go</li>
                      <li>✓ Community libraries</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 min-h-11" data-testid="button-api-docs">
                    View Documentation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1 min-h-11" data-testid="button-get-api-key">
                    Get API Key
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
