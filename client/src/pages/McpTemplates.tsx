import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, GitBranch, Workflow } from "lucide-react";
import { Link } from "wouter";

export default function McpTemplates() {
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
              MCP Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Model Context Protocol templates for integrating Wisdom Council into AI assistants like Claude.
            </p>
          </div>

          <Card className="p-8 bg-muted/30">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 p-6 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">
                MCP Templates Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We're developing Model Context Protocol templates to enable seamless integration with AI assistants. Upcoming features include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Claude Desktop Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready-to-use MCP server for Claude Desktop app
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Custom Servers</h3>
                    <p className="text-sm text-muted-foreground">
                      Build your own MCP server with our templates
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <GitBranch className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Tool Definitions</h3>
                    <p className="text-sm text-muted-foreground">
                      Pre-configured tools for wisdom conversations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Context Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize conversation context with historical wisdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border">
              <h3 className="font-semibold mb-3">About MCP</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The Model Context Protocol is an open standard that allows AI assistants to securely access external tools and data sources. Our MCP templates will enable you to bring wisdom conversations directly into your AI workflow.
              </p>
              <Button 
                variant="outline"
                className="min-h-11"
                data-testid="button-notify-mcp"
                onClick={() => {
                  const subject = encodeURIComponent("MCP Templates Interest");
                  const body = encodeURIComponent(
                    "I'm interested in the Wisdom Council MCP templates.\n\n" +
                    "AI assistant I use:\n[e.g., Claude Desktop, other]\n\n" +
                    "How I plan to use it:\n[Please describe your use case]\n\n"
                  );
                  window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
                }}
              >
                Notify Me When Ready
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
