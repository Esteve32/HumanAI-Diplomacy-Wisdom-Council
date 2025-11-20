import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Copy, Check, Linkedin, Facebook } from "lucide-react";
import { SiX } from "react-icons/si";

function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export default function SharingSection() {
  const [referralCode, setReferralCode] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let storedCode = localStorage.getItem('referralCode');
    if (!storedCode) {
      storedCode = generateReferralCode();
      localStorage.setItem('referralCode', storedCode);
    }
    setReferralCode(storedCode);
    setShareLink(`https://wisdom.greenelephant.org/share/${storedCode}`);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    console.log('Link copied:', shareLink);
  };

  const handleShare = (platform: string) => {
    const text = encodeURIComponent("Join the Wisdom Council - Have conversations with AI embodiments of history's wisest minds");
    const url = encodeURIComponent(shareLink);
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bridge the Centuries
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Bring others into timeless conversations. Share the wisdom voices that transcend eras and connect us across centuries.
          </p>
        </div>

        <Card className="p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Your Personal Share Link</h3>
          <p className="text-muted-foreground text-center mb-6">
            Share your unique link to invite others into conversations across time. When they join, you both unlock exclusive bonus dialogues and wisdom sessions.
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
              <SiX className="mr-2 h-4 w-4" />
              Share on X
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
