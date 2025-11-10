import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Workflow, Sparkles, Copy, Check, ExternalLink } from "lucide-react";

export default function IntegrationGuides() {
  const [copiedBeginner, setCopiedBeginner] = useState(false);
  const [copiedLowCode, setCopiedLowCode] = useState(false);
  const [copiedFullStack, setCopiedFullStack] = useState(false);

  const handleCopy = (text: string, type: 'beginner' | 'lowcode' | 'fullstack') => {
    navigator.clipboard.writeText(text);
    if (type === 'beginner') {
      setCopiedBeginner(true);
      setTimeout(() => setCopiedBeginner(false), 2000);
    } else if (type === 'lowcode') {
      setCopiedLowCode(true);
      setTimeout(() => setCopiedLowCode(false), 2000);
    } else {
      setCopiedFullStack(true);
      setTimeout(() => setCopiedFullStack(false), 2000);
    }
    console.log('Copied:', text);
  };

  const mcpWorkflowTemplate = `{
  "name": "wisdom-consultation",
  "trigger": "manual",
  "steps": [
    {
      "type": "ai-chat",
      "agent": "socrates",
      "context": "user-question"
    }
  ]
}`;

  const apiExample = `// Initialize the Wisdom API
const wisdom = new WisdomAPI({
  apiKey: process.env.WISDOM_API_KEY
});

// Start a conversation
const response = await wisdom.chat({
  figure: 'socrates',
  message: 'How should I approach this decision?',
  context: 'career-choice'
});

console.log(response.wisdom);`;

  return (
    <section className="py-20 px-6 bg-background" id="integrate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Easy Integration for Everyone
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
            Whether you're new to AI or a seasoned developer, start your wisdom journey in minutes.
          </p>
        </div>

        <Tabs defaultValue="beginners" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-integration">
            <TabsTrigger value="beginners" data-testid="tab-beginners">
              <Sparkles className="mr-2 h-4 w-4" />
              Beginners
            </TabsTrigger>
            <TabsTrigger value="lowcode" data-testid="tab-lowcode">
              <Workflow className="mr-2 h-4 w-4" />
              Low-Code Devs
            </TabsTrigger>
            <TabsTrigger value="fullstack" data-testid="tab-fullstack">
              <Code className="mr-2 h-4 w-4" />
              Full-Stack Devs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="beginners" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Start with ChatGPT</h3>
              <p className="text-muted-foreground mb-6 font-serif">
                Click any link below to instantly start a conversation with your chosen wisdom figure. 
                No setup required—just click and chat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-4"
                  data-testid="button-chatgpt-socrates"
                  onClick={() => window.open('https://chatgpt.com/g/g-1vf04chMP-jesus-acim', '_blank')}
                >
                  <ExternalLink className="mr-3 h-5 w-5 shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Chat with Socrates</div>
                    <div className="text-sm text-muted-foreground">Question everything</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-4"
                  data-testid="button-chatgpt-marcus"
                  onClick={() => console.log('Open Marcus Aurelius GPT')}
                >
                  <ExternalLink className="mr-3 h-5 w-5 shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Chat with Marcus Aurelius</div>
                    <div className="text-sm text-muted-foreground">Build resilience</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-4"
                  data-testid="button-chatgpt-rumi"
                  onClick={() => console.log('Open Rumi GPT')}
                >
                  <ExternalLink className="mr-3 h-5 w-5 shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">Chat with Rumi</div>
                    <div className="text-sm text-muted-foreground">Find meaning</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="justify-start h-auto py-4"
                  data-testid="button-chatgpt-all"
                  onClick={() => console.log('View all GPTs')}
                >
                  <ExternalLink className="mr-3 h-5 w-5 shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold">View All GPTs</div>
                    <div className="text-sm text-muted-foreground">50+ wisdom guides</div>
                  </div>
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Pro tip:</strong> Start with a specific problem or question. 
                  The more context you provide, the more tailored the wisdom.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="lowcode" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">MCP Workflow Templates</h3>
              <p className="text-muted-foreground mb-6 font-serif">
                Plug these wisdom agents into your MCP workflows with pre-built templates. 
                Perfect for automation and team collaboration.
              </p>

              <div className="bg-card-foreground/5 p-4 rounded-lg mb-4 relative">
                <pre className="text-sm overflow-x-auto">
                  <code>{mcpWorkflowTemplate}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => handleCopy(mcpWorkflowTemplate, 'lowcode')}
                  data-testid="button-copy-mcp"
                >
                  {copiedLowCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Download Template</h4>
                    <p className="text-sm text-muted-foreground">
                      Copy the JSON template above or download our complete workflow library.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Import to Your MCP Tool</h4>
                    <p className="text-sm text-muted-foreground">
                      Works with Make, Zapier, n8n, and other MCP-compatible platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Connect & Automate</h4>
                    <p className="text-sm text-muted-foreground">
                      Trigger wisdom consultations based on your team's needs and workflows.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fullstack" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">API Documentation</h3>
              <p className="text-muted-foreground mb-6 font-serif">
                Full REST API access for custom integrations. Build wisdom into your applications with a few lines of code.
              </p>

              <div className="bg-card-foreground/5 p-4 rounded-lg mb-4 relative">
                <pre className="text-sm overflow-x-auto">
                  <code>{apiExample}</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => handleCopy(apiExample, 'fullstack')}
                  data-testid="button-copy-api"
                >
                  {copiedFullStack ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ RESTful API endpoints</li>
                    <li>✓ WebSocket support for streaming</li>
                    <li>✓ Context-aware conversations</li>
                    <li>✓ 50+ wisdom figures available</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <div className="space-y-2 text-sm">
                    <button className="text-primary hover:underline text-left" data-testid="link-api-docs">
                      → Full API Documentation
                    </button>
                    <button className="text-primary hover:underline text-left" data-testid="link-code-examples">
                      → Code Examples (GitHub)
                    </button>
                    <button className="text-primary hover:underline text-left" data-testid="link-sdk">
                      → JavaScript/Python SDK
                    </button>
                  </div>
                </Card>
              </div>

              <Button variant="default" className="w-full" data-testid="button-get-api-key">
                Get Your API Key
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
