import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Chat from "@/pages/Chat";
import AiDialogue from "@/pages/AiDialogue";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Contact from "@/pages/Contact";
import ApiDocs from "@/pages/ApiDocs";
import McpTemplates from "@/pages/McpTemplates";
import GettingStarted from "@/pages/GettingStarted";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chat/:figureId" component={Chat} />
      <Route path="/ai-dialogue" component={AiDialogue} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/contact" component={Contact} />
      <Route path="/api-docs" component={ApiDocs} />
      <Route path="/mcp-templates" component={McpTemplates} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
