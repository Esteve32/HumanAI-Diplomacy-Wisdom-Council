import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please confirm that you consent to receive email communications.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Consent to communications: Yes (explicitly provided)\n\n` +
      `Message:\n${message}\n\n` +
      `---\n` +
      `This contact form submission includes explicit consent to receive email communications about Wisdom Council.`
    );
    
    window.location.href = `mailto:esteve@greenelephant.org?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Your message is ready to send. Please confirm in your email application.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-display text-5xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Questions, feedback, or partnership inquiries? We'd love to hear from you.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  data-testid="input-contact-name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-contact-email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                  data-testid="textarea-contact-message"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  data-testid="checkbox-contact-consent"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  I consent to receive email communications from Wisdom Council regarding my inquiry and future updates. You can unsubscribe at any time. View our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full min-h-11"
                disabled={!consent}
                data-testid="button-contact-submit"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              You can also email us directly at{" "}
              <a href="mailto:esteve@greenelephant.org" className="text-primary hover:underline">
                esteve@greenelephant.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
