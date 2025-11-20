# Custom Domain Setup Guide

## Setting Up wisdom.greenelephant.org

Now that the application is configured to use **wisdom.greenelephant.org**, you'll need to set up the custom domain in Replit Deployments.

### Steps to Configure Your Domain:

1. **Publish Your App**
   - First, publish your Replit project using the Publish/Deploy feature
   - This makes your app available on a Replit subdomain (e.g., `your-project.replit.app`)

2. **Access Deployment Settings**
   - Navigate to the **Deployments** tab in your Replit project
   - Select the **Settings** tab
   - Click **Link a domain** or **Manually connect from another registrar**

3. **Add Your Custom Domain**
   - Enter your domain: `wisdom.greenelephant.org`
   - Replit will provide you with DNS configuration details

4. **Configure DNS with Your Domain Registrar**
   - Log into your domain registrar where you purchased greenelephant.org
   - Add a new **A record** for the subdomain:
     - **Host/Name**: `wisdom` (or `wisdom.greenelephant.org` depending on your registrar)
     - **Type**: A
     - **Value/Points to**: The IP address provided by Replit
     - **TTL**: Default (or 3600)

5. **Wait for DNS Propagation**
   - DNS changes can take up to 48 hours to propagate
   - Usually it's much faster (15 minutes to a few hours)
   - You can check propagation status using tools like https://dnschecker.org

6. **Verify Your Domain**
   - Once DNS has propagated, return to Replit Deployments
   - Replit will automatically verify your domain
   - TLS/SSL certificates will be automatically provisioned

7. **Test Your Domain**
   - Visit https://wisdom.greenelephant.org in your browser
   - Your Wisdom Council application should now be live!

## Current Configuration

The application is already configured with:
- Domain: `wisdom.greenelephant.org`
- Dynamic share links: `https://wisdom.greenelephant.org/share/[unique-code]`
- Social sharing buttons that use the new domain
- Updated metadata and Open Graph tags

## Notes

- Replit automatically provides HTTPS/TLS certificates for custom domains
- No additional configuration needed for SSL
- The domain will work for both the main site and share links
