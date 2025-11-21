import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface WiseFigureCardProps {
  id: string;
  name: string;
  era: string;
  title: string;
  bio: string;
  votes: number;
  imageUrl: string;
  rank?: number;
  chatReady?: boolean;
  chatUrl?: string;
}

export default function WiseFigureCard({ 
  id, 
  name, 
  era, 
  title, 
  bio, 
  votes: initialVotes, 
  imageUrl,
  rank,
  chatReady = false,
  chatUrl
}: WiseFigureCardProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [, setLocation] = useLocation();

  const handleVote = async () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      
      // Send vote to backend (which triggers email notification)
      try {
        await fetch("/api/votes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ figureId: id }),
        });
        console.log(`✅ Voted for ${name} - Email notification sent`);
      } catch (error) {
        console.error(`❌ Error recording vote for ${name}:`, error);
      }
    }
  };

  const handleChat = () => {
    if (chatReady) {
      setLocation(`/chat/${id}`);
    }
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-wise-figure-${id}`}>
      <div className="relative">
        {rank && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
            #{rank}
          </Badge>
        )}
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-1" data-testid={`text-figure-name-${id}`}>{name}</h3>
          <p className="text-sm text-muted-foreground">{era}</p>
          <p className="text-base font-medium text-foreground/80 mt-1">{title}</p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 font-serif">
          {bio}
        </p>
        
        <div className="space-y-3 pt-2">
          {chatReady ? (
            <div className="flex items-center gap-2">
              <Button
                variant={hasVoted ? "secondary" : "default"}
                size="default"
                onClick={handleVote}
                disabled={hasVoted}
                className="flex-1 min-h-11"
                data-testid={`button-vote-${id}`}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {hasVoted ? 'Voted' : 'Vote'}
              </Button>
              <Button
                variant="default"
                size="default"
                onClick={handleChat}
                className="flex-1 min-h-11"
                data-testid={`button-chat-${id}`}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat
              </Button>
            </div>
          ) : (
            <Button
              variant={hasVoted ? "secondary" : "default"}
              size="default"
              onClick={handleVote}
              disabled={hasVoted}
              className="w-full min-h-11"
              data-testid={`button-vote-${id}`}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              {hasVoted ? 'Voted' : 'Vote'}
            </Button>
          )}
          <div className="flex items-center justify-center">
            <Badge variant="outline" className="px-3 py-1.5" data-testid={`text-votes-${id}`}>
              {votes.toLocaleString()} votes
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
