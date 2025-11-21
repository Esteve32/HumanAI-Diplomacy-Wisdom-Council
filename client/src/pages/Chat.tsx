import { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import ThinkingAnimation from "@/components/ThinkingAnimation";
import type { Message } from "@shared/schema";

interface Persona {
  id: number;
  name: string;
  era: string;
  title: string;
  description: string;
}

export default function Chat() {
  const [, params] = useRoute("/chat/:figureId");
  const figureId = params?.figureId || null;
  
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [optimisticMessage, setOptimisticMessage] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const personasMap: Record<string, Persona> = {
    "rosa-parks": {
      id: 4,
      name: "Rosa Parks",
      era: "1913-2005 CE",
      title: "Mother of the Civil Rights Movement",
      description: "Ask about courage, civil rights, freedom, and what it means to stand firm in your convictions."
    },
    "socrates": {
      id: 2,
      name: "Socrates",
      era: "469-399 BCE",
      title: "Father of Western Philosophy",
      description: "Ask about wisdom, the examined life, philosophy, and the power of questioning."
    },
    "maria-montessori": {
      id: 6,
      name: "Maria Montessori",
      era: "1870-1952 CE",
      title: "Revolutionary Educator",
      description: "Ask about education, childhood development, learning, and the potential within every child."
    },
    "bell-hooks": {
      id: 7,
      name: "bell hooks",
      era: "1952-2021 CE",
      title: "Intersectional Feminist (Ask me why I don't capitalize my name)",
      description: "Ask about love as practice, feminism, identity, and transformative engagement with the world."
    },
    "simone-de-beauvoir": {
      id: 1,
      name: "Simone de Beauvoir",
      era: "1908-1986 CE",
      title: "Existentialist Feminist",
      description: "Ask about freedom, becoming, existence, and the philosophy of what it means to be human."
    },
    "jesus-christ": {
      id: 3,
      name: "Jesus of Nazareth",
      era: "c. 4 BCE - 30 CE",
      title: "Teacher of Compassion",
      description: "Ask about love, compassion, forgiveness, faith, and spiritual transformation."
    },
    "rumi": {
      id: 5,
      name: "Rumi",
      era: "1207-1273 CE",
      title: "Sufi Mystic & Poet",
      description: "Ask about love, spirituality, unity, poetry, and the mystical path of the soul."
    }
  };

  const persona = figureId ? personasMap[figureId] : null;

  const { mutate: createConversation, isPending: isCreatingConversation } = useMutation({
    mutationFn: async () => {
      if (!figureId || !persona) throw new Error("No figure selected");
      const response = await fetch("/api/conversations", {
        method: "POST",
        body: JSON.stringify({ figureId: persona.id }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to create conversation");
      return await response.json();
    },
    onSuccess: (data: any) => {
      setConversationId(data.id);
      queryClient.invalidateQueries({ queryKey: ["/api/conversations"] });
    },
  });

  const { data: messages = [], isLoading: isLoadingMessages } = useQuery<Message[]>({
    queryKey: ["/api/conversations", conversationId, "messages"],
    enabled: !!conversationId,
  });

  const { mutate: sendMessage, isPending: isSendingMessage } = useMutation({
    mutationFn: async (content: string) => {
      if (!conversationId) throw new Error("No conversation");
      const response = await fetch(`/api/conversations/${conversationId}/messages`, {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to send message");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["/api/conversations", conversationId, "messages"] 
      });
      setMessageInput("");
      setOptimisticMessage(null);
    },
    onError: (error: any) => {
      setOptimisticMessage(null);
    },
  });

  useEffect(() => {
    if (figureId && !conversationId && !isCreatingConversation) {
      createConversation();
    }
  }, [figureId, conversationId, isCreatingConversation]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim() && !isSendingMessage) {
      const message = messageInput.trim();
      setOptimisticMessage(message);
      setMessageInput("");
      sendMessage(message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
    // Escape key to cancel optimistic message
    if (e.key === "Escape" && optimisticMessage) {
      e.preventDefault();
      setOptimisticMessage(null);
    }
  };

  if (!persona) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Card className="p-8 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Persona Not Found</h2>
          <p className="text-muted-foreground mb-4">
            This persona is not yet available for chat.
          </p>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-background relative">
      {/* Fireplace background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 80%, rgba(255, 140, 0, 0.3) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 20%, rgba(255, 69, 0, 0.2) 0%, transparent 50%)`,
      }} />
      
      <header className="border-b bg-card/95 backdrop-blur relative z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-display" data-testid="text-persona-name">
              {persona.name}
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-persona-title">
              {persona.title} • {persona.era}
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-hidden relative z-20">
        {isCreatingConversation || !conversationId ? (
          <div className="flex items-center justify-center h-full">
            <div className="space-y-6 flex flex-col items-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary opacity-60 animate-spin" />
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-primary opacity-40 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}} />
                <div className="absolute inset-4 rounded-full border-3 border-transparent border-l-amber-500 opacity-30 animate-spin" style={{animationDuration: '2s'}} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl opacity-30 animate-pulse">🕰️</div>
                </div>
              </div>
              <div className="text-center max-w-md">
                <p className="text-base font-medium text-foreground mb-2">
                  Kindling the conversation...
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  Preparing your fireside chat with {persona.name}
                </p>
                <p className="text-xs text-muted-foreground italic">
                  ✨ Bridging across centuries takes a moment—your patience transcends time!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 h-full py-6">
            <Card className="h-full flex flex-col shadow-lg">
              <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
                {isLoadingMessages ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="space-y-6 flex flex-col items-center">
                      <div className="relative w-32 h-32">
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary opacity-60 animate-spin" />
                        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-primary opacity-40 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}} />
                        <div className="absolute inset-4 rounded-full border-3 border-transparent border-l-amber-500 opacity-30 animate-spin" style={{animationDuration: '2s'}} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-5xl opacity-30 animate-pulse">🕰️</div>
                        </div>
                      </div>
                      <div className="text-center max-w-md">
                        <p className="text-base font-medium text-foreground mb-2">
                          Temporal bridge warming...
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          Preparing your fireside conversation with {persona.name}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          ✨ This grand leap across time deserves patience. Wisdom awaits...
                        </p>
                      </div>
                    </div>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center px-4">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="text-3xl">
                        {persona.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold mb-2 font-display">
                      A Fireside Chat with {persona.name}
                    </h2>
                    <p className="text-muted-foreground max-w-md">
                      {persona.description}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-4 ${message.role === "user" ? "justify-end" : ""}`}
                        data-testid={`message-${message.role}-${message.id}`}
                      >
                        {message.role === "assistant" && (
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarFallback>
                              {persona.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`rounded-lg px-4 py-3 max-w-[80%] ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                        {message.role === "user" && (
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                    {optimisticMessage && (
                      <div className="flex gap-4 justify-end" data-testid="message-optimistic">
                        <div className="rounded-lg px-4 py-3 max-w-[80%] bg-primary text-primary-foreground opacity-80 animate-pulse">
                          <p className="whitespace-pre-wrap leading-relaxed">
                            {optimisticMessage}
                          </p>
                        </div>
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      </div>
                    )}
                    {(isSendingMessage || optimisticMessage) && (
                      <div className="flex justify-center w-full">
                        <ThinkingAnimation />
                      </div>
                    )}
                  </div>
                )}
              </ScrollArea>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder={`Ask ${persona.name} anything...`}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="resize-none min-h-[60px]"
                    disabled={isSendingMessage}
                    data-testid="input-message"
                    aria-label={`Message input for ${persona.name}`}
                    title="Press Enter to send, Shift+Enter for new line"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim() || isSendingMessage}
                    size="icon"
                    className="h-[60px] w-[60px]"
                    data-testid="button-send-message"
                    aria-label={isSendingMessage ? "Sending message..." : "Send message"}
                    title="Send message (Enter key)"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
