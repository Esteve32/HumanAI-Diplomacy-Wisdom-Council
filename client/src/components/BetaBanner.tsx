import { Info } from "lucide-react";

export default function BetaBanner() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-2 text-sm text-amber-900 dark:text-amber-100">
          <Info className="h-4 w-4 shrink-0" />
          <p className="text-center">
            <strong>Beta Concept Test:</strong> Features in active development. Joining the waitlist does not require payment.
          </p>
        </div>
      </div>
    </div>
  );
}
