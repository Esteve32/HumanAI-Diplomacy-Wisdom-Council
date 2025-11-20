import { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Send, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
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
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const personasMap: Record<string, Persona> = {
    "simone-de-beauvoir": {
      id: 1,
      name: "Simone de Beauvoir",
      era: "1908-1986 CE",
      title: "Existentialist Feminist",
      description: "One is not born, but rather becomes, a woman. Groundbreaking philosopher who challenged gender roles."
    },
    "socrates": {
      id: 2,
      name: "Socrates",
      era: "469-399 BCE",
      title: "Father of Western Philosophy",
      description: "The unexamined life is not worth living. Known for the Socratic method of questioning."
    },
    "jesus-christ": {
      id: 3,
      name: "Jesus Christ",
      era: "1st Century CE",
      title: "Central Figure of Christianity",
      description: "Teacher of love, compassion, and spiritual transformation. Preached the Kingdom of God."
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
      sendMessage(messageInput.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
    <div className="flex flex-col h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-heading" data-testid="text-persona-name">
              {persona.name}
            </h1>
            <p className="text-sm text-muted-foreground" data-testid="text-persona-title">
              {persona.title} • {persona.era}
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-4 h-full py-6">
          <Card className="h-full flex flex-col">
            <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
              {isLoadingMessages ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="text-3xl">
                      {persona.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mb-2 font-heading">
                    Welcome to your fireside chat
                  </h2>
                  <p className="text-muted-foreground max-w-md">
                    Ask {persona.name} anything about {persona.description.toLowerCase()}
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
                  {isSendingMessage && (
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarFallback>
                          {persona.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="rounded-lg px-4 py-3 bg-muted">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
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
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim() || isSendingMessage}
                  size="icon"
                  className="h-[60px] w-[60px]"
                  data-testid="button-send-message"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
