import { Resend } from "resend";

let resendClient: Resend | null = null;
let fromEmail: string | null = null;

async function getResendClient() {
  if (resendClient && fromEmail) {
    return { client: resendClient, fromEmail };
  }

  try {
    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const xReplitToken = process.env.REPL_IDENTITY
      ? "repl " + process.env.REPL_IDENTITY
      : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

    if (!hostname || !xReplitToken) {
      console.warn("⚠️  Resend connector not available - email notifications disabled");
      return null;
    }

    const response = await fetch(
      "https://" + hostname + "/api/v2/connection?include_secrets=true&connector_names=resend",
      {
        headers: {
          Accept: "application/json",
          X_REPLIT_TOKEN: xReplitToken,
        },
      }
    );

    const data = await response.json();
    const connectionSettings = data.items?.[0];

    if (!connectionSettings?.settings?.api_key) {
      console.warn("⚠️  Resend API key not configured - email notifications disabled");
      return null;
    }

    resendClient = new Resend(connectionSettings.settings.api_key);
    fromEmail = connectionSettings.settings.from_email || "noreply@wisdomcouncil.org";

    return { client: resendClient, fromEmail };
  } catch (error) {
    console.error("❌ Error initializing Resend:", error);
    return null;
  }
}

export async function sendActivityNotification(
  activityType: string,
  userEmail: string | null,
  metadata: Record<string, any> = {}
) {
  try {
    const resendConfig = await getResendClient();
    if (!resendConfig) {
      console.log("📧 Email notification skipped - Resend not configured");
      return;
    }

    const { client, fromEmail: sender } = resendConfig;

    const activityLabels: Record<string, string> = {
      "vote-figure": "Figure Vote",
      "newsletter-signup": "Newsletter Signup",
      "chat-created": "Chat Conversation Started",
      "ai-dialogue-created": "AI Dialogue Created",
      "join-free-waitlist": "Free Tier Waitlist",
      "join-api-waitlist": "API Access Waitlist",
      "contact-sales-enterprise": "Enterprise Inquiry",
    };

    const label = activityLabels[activityType] || activityType;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d3748;">🎯 Wisdom Council Activity</h2>
        
        <div style="background: #f7fafc; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p style="margin: 0 0 8px 0;"><strong>Activity Type:</strong> ${label}</p>
          ${userEmail ? `<p style="margin: 0 0 8px 0;"><strong>User Email:</strong> ${userEmail}</p>` : ""}
          <p style="margin: 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        </div>

        ${
          Object.keys(metadata).length > 0
            ? `
          <div style="background: #edf2f7; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0 0 8px 0; font-weight: bold;">Additional Details:</p>
            ${Object.entries(metadata)
              .map(([key, value]) => `<p style="margin: 4px 0;"><strong>${key}:</strong> ${value}</p>`)
              .join("")}
          </div>
        `
            : ""
        }

        <p style="color: #718096; font-size: 12px; margin-top: 24px;">
          This is an automated notification from Wisdom Council. View your admin dashboard for full activity logs.
        </p>
      </div>
    `;

    await client.emails.send({
      from: sender,
      to: "esteve@greenelephant.org",
      subject: `📊 [${label}] Wisdom Council Activity`,
      html: htmlContent,
    });

    console.log(`✅ Email sent to esteve@greenelephant.org for: ${label}`);
  } catch (error) {
    console.error("❌ Error sending email notification:", error);
    // Don't throw - email failures shouldn't break the user experience
  }
}
