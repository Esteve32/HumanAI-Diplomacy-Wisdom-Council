import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";
import ThinkingAnimation from "@/components/ThinkingAnimation";
import type { DialogueMessage } from "@shared/schema";

interface Persona {
  id: number;
  name: string;
  era: string;
  title: string;
}

const availablePersonas: Persona[] = [
  { id: 1, name: "Simone de Beauvoir", era: "1908-1986 CE", title: "Existentialist Feminist" },
  { id: 2, name: "Socrates", era: "469-399 BCE", title: "Father of Western Philosophy" },
  { id: 3, name: "Jesus Christ", era: "1st Century CE", title: "Teacher of Compassion" },
];

export default function AiDialogue() {
  const [persona1Id, setPersona1Id] = useState<number | null>(null);
  const [persona2Id, setPersona2Id] = useState<number | null>(null);
  const [topic, setTopic] = useState("");
  const [dialogueId, setDialogueId] = useState<string | null>(null);

  const { data: messages = [], isLoading: isLoadingMessages } = useQuery<DialogueMessage[]>({
    queryKey: ["/api/ai-dialogues", dialogueId, "messages"],
    enabled: !!dialogueId,
  });

  const { mutate: createDialogue, isPending: isCreatingDialogue } = useMutation({
    mutationFn: async () => {
      if (!persona1Id || !persona2Id || !topic.trim()) {
        throw new Error("Please select both personas and enter a topic");
      }
      
      const response = await fetch("/api/ai-dialogues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          persona1Id,
          persona2Id,
          topic: topic.trim(),
        }),
      });
      
      if (!response.ok) throw new Error("Failed to create dialogue");
      return await response.json();
    },
    onSuccess: (data: any) => {
      setDialogueId(data.id);
    },
  });

  const handleStartDialogue = () => {
    if (persona1Id && persona2Id && topic.trim()) {
      createDialogue();
    }
  };

  const persona1 = availablePersonas.find(p => p.id === persona1Id);
  const persona2 = availablePersonas.find(p => p.id === persona2Id);

  const getPersonaById = (id: number) => availablePersonas.find(p => p.id === id);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" data-testid="button-back-home">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold font-heading flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              AI Dialogue
            </h1>
            <p className="text-sm text-muted-foreground">
              Watch two wise figures converse
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {!dialogueId ? (
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 font-heading">Stage a Conversation</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="persona1">First Wise Figure</Label>
                <Select onValueChange={(value) => setPersona1Id(parseInt(value))}>
                  <SelectTrigger id="persona1" data-testid="select-persona1">
                    <SelectValue placeholder="Select a wise figure..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePersonas
                      .filter(p => p.id !== persona2Id)
                      .map(persona => (
                        <SelectItem key={persona.id} value={persona.id.toString()}>
                          {persona.name} - {persona.title}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="persona2">Second Wise Figure</Label>
                <Select onValueChange={(value) => setPersona2Id(parseInt(value))}>
                  <SelectTrigger id="persona2" data-testid="select-persona2">
                    <SelectValue placeholder="Select a wise figure..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePersonas
                      .filter(p => p.id !== persona1Id)
                      .map(persona => (
                        <SelectItem key={persona.id} value={persona.id.toString()}>
                          {persona.name} - {persona.title}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="topic">Conversation Topic</Label>
                <Input
                  id="topic"
                  placeholder="What should they discuss? (e.g., The nature of freedom, Love vs. justice)"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  data-testid="input-topic"
                />
              </div>

              <Button
                onClick={handleStartDialogue}
                disabled={!persona1Id || !persona2Id || !topic.trim() || isCreatingDialogue}
                className="w-full"
                size="lg"
                data-testid="button-start-dialogue"
              >
                {isCreatingDialogue ? "Generating Conversation..." : "Start Conversation"}
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold font-heading">
                  {persona1?.name} & {persona2?.name}
                </h2>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDialogueId(null);
                    setTopic("");
                  }}
                  data-testid="button-new-dialogue"
                >
                  New Dialogue
                </Button>
              </div>
              <p className="text-muted-foreground">Discussing: {topic}</p>
            </Card>

            {isLoadingMessages || isCreatingDialogue ? (
              <Card className="p-12">
                <ThinkingAnimation />
                <p className="text-center text-muted-foreground mt-4">
                  Generating a profound conversation between {persona1?.name} and {persona2?.name}...
                  <br />
                  <span className="text-sm">(This may take 30-60 seconds)</span>
                </p>
              </Card>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => {
                  const speaker = getPersonaById(message.personaId);
                  if (!speaker) return null;

                  return (
                    <Card key={message.id} className="p-6" data-testid={`dialogue-message-${index}`}>
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 flex-shrink-0">
                          <AvatarFallback className="text-lg">
                            {speaker.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2 mb-2">
                            <h3 className="font-bold font-heading">{speaker.name}</h3>
                            <span className="text-xs text-muted-foreground">{speaker.era}</span>
                          </div>
                          <p className="text-foreground whitespace-pre-wrap font-serif leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
