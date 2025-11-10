import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Copy, Check, Twitter, Linkedin, Facebook } from "lucide-react";

export default function SharingSection() {
  const [shareLink, setShareLink] = useState("https://wisdom.greenelephant.ai/share/abc123");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log('Link copied:', shareLink);
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pass It Forward
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Join the movement of people choosing personal growth over productivity hacks. 
            Share wisdom, not just content.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Your Personal Share Link</h3>
          <p className="text-muted-foreground text-center mb-6">
            When someone signs up through your link, you both get exclusive access to bonus wisdom sessions.
          </p>

          <div className="flex gap-3 mb-6">
            <Input
              value={shareLink}
              readOnly
              className="flex-1"
              data-testid="input-share-link"
            />
            <Button
              onClick={handleCopyLink}
              data-testid="button-copy-share-link"
              className="shrink-0"
            >
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => handleShare('twitter')}
              data-testid="button-share-twitter"
              className="flex-1 sm:flex-initial"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Share on Twitter
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare('linkedin')}
              data-testid="button-share-linkedin"
              className="flex-1 sm:flex-initial"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Share on LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare('facebook')}
              data-testid="button-share-facebook"
              className="flex-1 sm:flex-initial"
            >
              <Facebook className="mr-2 h-4 w-4" />
              Share on Facebook
            </Button>
          </div>
        </Card>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-2xl font-bold text-primary">12,847</span>
            <span className="text-muted-foreground">people have shared this mission</span>
          </div>
        </div>
      </div>
    </section>
  );
}
