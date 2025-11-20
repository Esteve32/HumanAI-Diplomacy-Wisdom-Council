import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      console.log(`Voted for ${name}`);
    }
  };

  const handleChat = () => {
    if (chatReady && chatUrl) {
      window.open(chatUrl, '_blank');
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={chatReady ? "default" : "outline"}
                  size="default"
                  onClick={handleChat}
                  disabled={!chatReady}
                  className="flex-1 min-h-11"
                  data-testid={`button-chat-${id}`}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{chatReady ? `Start a conversation with ${name}` : 'GPT not yet ready'}</p>
              </TooltipContent>
            </Tooltip>
          </div>
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
