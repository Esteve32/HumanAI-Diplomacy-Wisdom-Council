import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: November 20, 2025
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mt-0 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Your Privacy Matters
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-0">
              We're in beta testing and collect minimal data. We will never sell your personal information. This policy explains what we collect and why.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Information You Provide</h3>
          <ul>
            <li><strong>Email Address:</strong> When you join the waitlist or subscribe to our newsletter</li>
            <li><strong>Chat Messages:</strong> When you use our AI conversation features (if operational)</li>
            <li><strong>Voting Data:</strong> Your votes on wisdom figures (stored anonymously by session)</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <ul>
            <li><strong>Session Data:</strong> Temporary session identifiers to track votes and conversations</li>
            <li><strong>Usage Analytics:</strong> Pages visited, features clicked, time spent (via standard web analytics)</li>
            <li><strong>Device Information:</strong> Browser type, operating system, screen size (for optimization)</li>
            <li><strong>IP Address:</strong> For security and approximate location (country/region level only)</li>
          </ul>

          <h3>1.3 Third-Party Data</h3>
          <p>
            When you use external ChatGPT integrations, those conversations are governed by OpenAI's privacy policy. We do not receive or store those conversations.
          </p>

          <h2>2. How We Use Your Information</h2>
          
          <h3>2.1 Primary Uses</h3>
          <ul>
            <li><strong>Waitlist Management:</strong> To notify you when features launch</li>
            <li><strong>Service Delivery:</strong> To provide chat functionality and personalized experiences</li>
            <li><strong>Product Development:</strong> To understand which features users want</li>
            <li><strong>Communication:</strong> To send updates about the service (you can unsubscribe)</li>
          </ul>

          <h3>2.2 Analytics & Improvement</h3>
          <p>
            We analyze usage patterns to improve the service. This includes:
          </p>
          <ul>
            <li>Which wisdom figures are most popular</li>
            <li>What features users click on most</li>
            <li>Where users drop off or get confused</li>
            <li>Performance optimization opportunities</li>
          </ul>

          <h3>2.3 AI Model Training (Future)</h3>
          <p>
            If we develop our own AI models, we may use <strong>anonymized conversation data</strong> to improve responses. This means:
          </p>
          <ul>
            <li>All personally identifiable information is removed</li>
            <li>Individual messages cannot be traced back to you</li>
            <li>You can opt out of this by contacting us</li>
          </ul>

          <h2>3. Information Sharing</h2>
          
          <h3>3.1 We DO NOT Sell Your Data</h3>
          <p>
            We will never sell, rent, or trade your personal information to third parties for marketing purposes. Period.
          </p>

          <h3>3.2 Service Providers</h3>
          <p>
            We may share data with trusted service providers who help us operate:
          </p>
          <ul>
            <li><strong>Email Service:</strong> To send you waitlist notifications and newsletters</li>
            <li><strong>Analytics:</strong> To understand how users interact with our site</li>
            <li><strong>Hosting:</strong> To store data securely (Replit infrastructure)</li>
            <li><strong>Payment Processing:</strong> When we launch paid features (Stripe or similar)</li>
          </ul>
          <p>
            All service providers are bound by confidentiality agreements and can only use data for purposes we specify.
          </p>

          <h3>3.3 Legal Requirements</h3>
          <p>
            We may disclose information if required by law or to:
          </p>
          <ul>
            <li>Comply with legal processes (subpoenas, court orders)</li>
            <li>Protect our rights and property</li>
            <li>Prevent fraud or abuse</li>
            <li>Protect user safety</li>
          </ul>

          <h2>4. Data Storage & Security</h2>
          
          <h3>4.1 Current Storage (Beta)</h3>
          <p>
            During beta testing:
          </p>
          <ul>
            <li><strong>Session data:</strong> Stored in-memory, cleared when server restarts</li>
            <li><strong>Emails:</strong> May be stored in simple lists for waitlist management</li>
            <li><strong>No payment data:</strong> We don't collect payment information yet</li>
          </ul>

          <h3>4.2 Future Storage (When Operational)</h3>
          <p>
            When we launch:
          </p>
          <ul>
            <li>Data will be stored in encrypted databases</li>
            <li>Conversations will be associated with your account</li>
            <li>Payment info will be handled by PCI-compliant processors (Stripe)</li>
            <li>We'll implement industry-standard security measures</li>
          </ul>

          <h3>4.3 Data Retention</h3>
          <ul>
            <li><strong>Active accounts:</strong> Data retained while account is active</li>
            <li><strong>Closed accounts:</strong> Data deleted within 90 days of closure</li>
            <li><strong>Waitlist emails:</strong> Retained until you unsubscribe or service launches</li>
            <li><strong>Legal obligations:</strong> Some data may be retained longer if required by law</li>
          </ul>

          <h2>5. Your Rights</h2>
          
          <h3>5.1 Access & Control</h3>
          <p>
            You have the right to:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your data</li>
            <li><strong>Correction:</strong> Update inaccurate information</li>
            <li><strong>Deletion:</strong> Request we delete your data (with exceptions for legal obligations)</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
          </ul>

          <h3>5.2 California Privacy Rights (CCPA)</h3>
          <p>
            California residents have additional rights:
          </p>
          <ul>
            <li>Know what personal information is collected</li>
            <li>Know if personal information is sold or disclosed</li>
            <li>Opt out of the sale of personal information (we don't sell data)</li>
            <li>Request deletion of personal information</li>
            <li>Non-discrimination for exercising CCPA rights</li>
          </ul>

          <h3>5.3 European Privacy Rights (GDPR)</h3>
          <p>
            EU/EEA residents have rights under GDPR:
          </p>
          <ul>
            <li>Right to access, rectification, and erasure</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
            <li>Right to lodge complaints with supervisory authorities</li>
          </ul>

          <h2>6. Cookies & Tracking</h2>
          
          <h3>6.1 Essential Cookies</h3>
          <p>
            We use session cookies to:
          </p>
          <ul>
            <li>Remember your votes (so you can't vote twice)</li>
            <li>Maintain your login session (when feature is operational)</li>
            <li>Provide basic functionality</li>
          </ul>

          <h3>6.2 Analytics Cookies</h3>
          <p>
            We may use analytics tools (e.g., Google Analytics) to understand:
          </p>
          <ul>
            <li>How many people visit our site</li>
            <li>Which pages are most popular</li>
            <li>How users navigate through the site</li>
          </ul>
          <p>
            You can disable cookies in your browser settings, though some features may not work properly.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not knowingly collect information from children. If you believe we have collected data from a child, please contact us immediately.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Our servers are located in [Server Location]. If you access our service from outside this region, your data may be transferred internationally. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy as we develop new features. Significant changes will be communicated via:
          </p>
          <ul>
            <li>Email notification to waitlist members</li>
            <li>Prominent notice on our website</li>
            <li>Updated "Last Modified" date at the top</li>
          </ul>

          <h2>10. Contact Us</h2>
          <p>
            Questions or requests regarding your privacy?
          </p>
          <p>
            <strong>Email:</strong> privacy@greenelephant.com (placeholder)<br />
            <strong>Data Protection Officer:</strong> dpo@greenelephant.com (placeholder)<br />
            <strong>Mail:</strong> Green Elephant, [Address TBD]
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <p className="font-semibold mb-2">Summary for Humans:</p>
            <p className="mb-0">
              We collect your email if you sign up, and we track basic usage to improve the site. We don't sell your data to anyone. You can see, change, or delete your data anytime. We use standard security practices. We're based in [Location] but accessible globally. If you have questions, just email us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
