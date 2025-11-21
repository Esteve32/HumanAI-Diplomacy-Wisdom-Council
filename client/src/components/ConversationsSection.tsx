import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Blocks, Cloud, MessageSquare, ExternalLink, Copy, Check, ChevronDown, ChevronUp, Mail } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useLocation } from "wouter";

export default function ConversationsSection() {
  const [, setLocation] = useLocation();
  const [copiedWorkflow, setCopiedWorkflow] = useState(false);
  const [copiedAPI, setCopiedAPI] = useState(false);
  const [workflowSectionOpen, setWorkflowSectionOpen] = useState(false);
  const [devSectionOpen, setDevSectionOpen] = useState(false);

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
    <section className="py-32 px-6" id="conversations">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Three Pathways to Timeless Wisdom
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engage in fireside chats with historical masters. Have one-on-one conversations, stage dialogues between epochs, or integrate wisdom into your workflows.
          </p>
        </div>

        <div className="space-y-32">
          {/* Pathway 1: Basic Users */}
          <div className="flex flex-col items-center text-center" id="pathway-basic">
            <div className="bg-primary/10 p-6 rounded-full mb-8">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Free Conversations
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Have immediate fireside chats with history's wisest minds. One-on-one conversations or dialogues between figures from different eras. No setup, no cost—just connect across centuries.
            </p>
            
            <Card className="p-8 w-full max-w-2xl">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold mb-3 text-center">
                Suggest a New Wisdom Persona
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Have an idea for a wise historical figure we should add? We'd love to hear your suggestion.
              </p>
              <Button 
                size="lg"
                className="w-full min-h-11"
                data-testid="button-suggest-persona"
                onClick={() => {
                  const subject = encodeURIComponent("New Wisdom Persona Suggestion");
                  const body = encodeURIComponent(
                    "I would love to suggest a new wisdom persona:\n\n" +
                    "Name: [Please add the name here]\n\n" +
                    "Why this person would be valuable:\n[Please explain why you think this person should be included]\n\n" +
                    "What topics they could help with:\n[Optional: What areas of wisdom or questions would they be good for?]\n\n"
                  );
                  window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Suggest a Persona
              </Button>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg text-left">
                <p className="text-sm text-muted-foreground">
                  <strong>Always free.</strong> Perfect for personal growth, philosophical exploration, creative dialogues, and learning from history's wisest minds.
                </p>
              </div>
            </Card>
          </div>

          {/* Pathway 2: Workflow Builders (Collapsible) */}
          <Collapsible open={workflowSectionOpen} onOpenChange={setWorkflowSectionOpen}>
            <div className="flex flex-col items-center text-center" id="pathway-workflow">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="mb-6 min-h-11"
                  data-testid="button-toggle-workflow-section"
                >
                  <Blocks className="mr-2 h-5 w-5" />
                  Workflow Integration
                  {workflowSectionOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="w-full">
                <div className="flex flex-col items-center text-center pt-6">
                  <div className="bg-primary/10 p-6 rounded-full mb-8">
                    <Blocks className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">
                    Workflow Integration
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-xl mb-8">
                    Weave conversations across time into your workflows. Automate wisdom into daily practices with n8n, Zapier, Make, and other no-code platforms.
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
        </CollapsibleContent>
      </div>
    </Collapsible>

          {/* Pathway 3: Developers (Collapsible) */}
          <Collapsible open={devSectionOpen} onOpenChange={setDevSectionOpen}>
            <div className="flex flex-col items-center text-center" id="pathway-dev">
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="mb-6 min-h-11"
                  data-testid="button-toggle-dev-section"
                >
                  <Cloud className="mr-2 h-5 w-5" />
                  Developer Access
                  {devSectionOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="w-full">
                <div className="flex flex-col items-center text-center pt-6">
                  <div className="bg-primary/10 p-6 rounded-full mb-8">
                    <Cloud className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">
                    Developer Access
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-xl mb-8">
                    Native API, MCP integration, and cloud deployment. Build timeless wisdom conversations directly into your applications and systems.
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
              </CollapsibleContent>
            </div>
          </Collapsible>
        </div>

        {/* Bottom CTA - Clear about famous historical personas */}
        <div className="mt-32 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-muted/30 rounded-lg">
            <h3 className="font-display text-3xl font-bold mb-4">
              Explore Conversations with Famous Wise Historical Personas
            </h3>
            <p className="text-lg text-muted-foreground mb-6">From ancient philosophers like Socrates and Confucius to modern thinkers like Simone de Beauvoir and bell hooks—engage with 51 of history's most influential minds through AI.</p>
            <Button 
              size="lg" 
              className="min-h-11"
              data-testid="button-explore-personas"
              onClick={() => {
                const element = document.getElementById('voting');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore All 51 Personas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
