import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";

export default function TosModal() {
  const [open, setOpen] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const [tosAccepted, setTosAccepted] = useState(false);

  useEffect(() => {
    const tosAcceptedStorage = localStorage.getItem("tosAccepted");
    if (!tosAcceptedStorage) {
      setOpen(true);
    }
  }, []);

  const handleAccept = async () => {
    if (!ageVerified || !tosAccepted) {
      return;
    }

    localStorage.setItem("tosAccepted", "true");
    
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: null,
          cta: "tos-accepted",
          consentGiven: true,
        }),
      });
    } catch (error) {
      console.error("Error logging ToS acceptance:", error);
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Welcome to Wisdom Council</DialogTitle>
          <DialogDescription>
            Before you begin your journey through time, please review and accept our terms.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="age-verify"
              checked={ageVerified}
              onCheckedChange={(checked) => setAgeVerified(checked as boolean)}
              data-testid="checkbox-age-verify"
              className="mt-0.5"
            />
            <label
              htmlFor="age-verify"
              className="text-sm leading-relaxed cursor-pointer"
            >
              I confirm that I am 13 years of age or older
            </label>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="tos-accept"
              checked={tosAccepted}
              onCheckedChange={(checked) => setTosAccepted(checked as boolean)}
              data-testid="checkbox-tos-accept"
              className="mt-0.5"
            />
            <label
              htmlFor="tos-accept"
              className="text-sm leading-relaxed cursor-pointer"
            >
              I have read and accept the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleAccept}
            disabled={!ageVerified || !tosAccepted}
            data-testid="button-tos-submit"
            className="w-full"
          >
            Accept & Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
