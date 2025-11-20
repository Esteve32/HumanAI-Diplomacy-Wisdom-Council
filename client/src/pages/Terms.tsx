import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Terms of Service
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: November 20, 2025
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mt-0 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Beta Concept Test - Important Notice
            </h3>
            <p className="text-amber-800 dark:text-amber-200 mb-0">
              This service is currently in <strong>beta/concept testing phase</strong>. Many features shown on our website are <strong>planned but not yet operational</strong>. By signing up, you are joining our waitlist for early access notification when features become available. No payment will be processed until services are fully operational and you explicitly opt in to a paid plan.
            </p>
          </div>

          <h2>1. Service Description</h2>
          <p>
            Wisdom from the Past ("we", "our", or "us") is developing an AI-powered platform that enables conversations with historical wisdom figures. This service is currently in active development and beta testing.
          </p>

          <h3>1.1 Current Status</h3>
          <ul>
            <li><strong>Operational</strong>: Limited chat functionality with select personas via external ChatGPT integrations</li>
            <li><strong>In Development</strong>: Full REST API, WebSocket streaming, team features, workflow integrations</li>
            <li><strong>Planned</strong>: Enterprise features, custom implementations, advanced analytics</li>
          </ul>

          <h2>2. Waitlist & Early Access</h2>
          <p>
            By clicking "Join Waitlist", "Get Early Access", or similar buttons, you are:
          </p>
          <ul>
            <li>Expressing interest in our service</li>
            <li>Agreeing to be notified when features launch</li>
            <li>NOT making a purchase or entering a binding contract</li>
            <li>NOT guaranteed access to any specific features or timelines</li>
          </ul>

          <h2>3. Pricing & Payment</h2>
          <h3>3.1 No Immediate Charges</h3>
          <p>
            Pricing displayed on our website represents <strong>planned early access pricing</strong>. No payment will be collected until:
          </p>
          <ul>
            <li>The service is operational and able to deliver promised features</li>
            <li>You explicitly opt in to a paid plan</li>
            <li>You complete a separate checkout process with full pricing disclosure</li>
          </ul>

          <h3>3.2 Pricing Changes</h3>
          <p>
            We reserve the right to change pricing before official launch. Waitlist members will be notified of final pricing before any payment is requested.
          </p>

          <h3>3.3 Refund Policy (When Service Launches)</h3>
          <p>
            Once the service is operational and payments begin, we will offer a 30-day money-back guarantee for paid plans. This guarantee will apply only to future purchases after the service launches.
          </p>

          <h2>4. User Responsibilities</h2>
          <h3>4.1 Accurate Information</h3>
          <p>
            You agree to provide accurate contact information when signing up for the waitlist or accessing beta features.
          </p>

          <h3>4.2 Acceptable Use</h3>
          <p>
            When using any operational features, you agree not to:
          </p>
          <ul>
            <li>Use the service for illegal purposes</li>
            <li>Attempt to access unauthorized areas or data</li>
            <li>Spam, harass, or abuse other users or our systems</li>
            <li>Reverse engineer or extract training data from AI responses</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            AI-generated conversations and content remain your property. However, we retain the right to use anonymized conversation data to improve our AI models. You retain ownership of any original input you provide.
          </p>

          <h2>6. Disclaimers</h2>
          <h3>6.1 Beta Service Disclaimer</h3>
          <p>
            This is a beta service provided "as is" without warranties of any kind. Features may change, be delayed, or be cancelled without notice.
          </p>

          <h3>6.2 AI-Generated Content</h3>
          <p>
            AI responses are generated by language models and do not represent actual views of historical figures. Content may be inaccurate, incomplete, or inappropriate. We are not responsible for:
          </p>
          <ul>
            <li>Accuracy of AI-generated responses</li>
            <li>Decisions made based on AI advice</li>
            <li>Offenses caused by AI-generated content</li>
          </ul>

          <h3>6.3 External Links</h3>
          <p>
            Some features link to external services (ChatGPT). We are not responsible for the content, privacy practices, or availability of external services.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
          </p>
          <ul>
            <li>Use or inability to use the service</li>
            <li>AI-generated content or advice</li>
            <li>Service delays, interruptions, or errors</li>
            <li>Data loss or security breaches</li>
          </ul>

          <h2>8. Data & Privacy</h2>
          <p>
            Your use of this service is also governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. By using this service, you consent to our data collection and usage practices as described therein.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Significant changes will be communicated to waitlist members via email. Continued use of the service after changes constitutes acceptance of new terms.
          </p>

          <h2>10. Termination</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Discontinue the beta program at any time</li>
            <li>Remove users from the waitlist for any reason</li>
            <li>Terminate access to any operational features for violations of these terms</li>
          </ul>

          <h2>11. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these terms? Contact us at:
          </p>
          <p>
            <strong>Email:</strong> legal@greenelephant.com (placeholder)<br />
            <strong>Support:</strong> support@wisdomfromthepast.com (placeholder)
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="font-semibold mb-2">Summary for Non-Lawyers:</p>
            <p className="mb-0">
              This is a beta test. Features you see aren't all ready yet. Signing up is just joining a waitlist, not buying anything. We'll ask for payment only when we can actually deliver the service. We're not responsible if the AI says something weird. We can change or cancel things. Use common sense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
