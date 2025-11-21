# Wisdom Council

## Overview
**Wisdom Council** (formerly "Wisdom from the Past") is a landing page application offering AI-powered conversations with historical wisdom figures. It aims to position AI as a tool for internal growth, providing "fireside chats" with personalities like Socrates and Rumi. The platform is a full-stack TypeScript monorepo with a React frontend and Express backend, showcasing ChatGPT integrations, low-code workflow tools (n8n/MCP), and API access for developers. The project's ambition is to create a unique engagement model for AI, focusing on philosophical and personal development rather than just productivity.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, Vite.
- **Routing**: Wouter for client-side routing.
- **UI Components**: shadcn/ui built on Radix UI with Tailwind CSS, using a "new-york" style variant and custom design tokens.
- **State Management**: TanStack Query (React Query) for server state.
- **Typography**: Inter font (bold sans-serif) for all headings with Georgia fallback; Lato (sans-serif) for body text with system font fallbacks. Font loading optimized with preload tags, font-display: swap, and custom CSS overrides for Tailwind Typography prose containers.
- **Design Philosophy**: Inspired by Product Hunt, Linear, Stripe, and Medium, emphasizing clean typography and a cohesive "Wisdom Council" aesthetic with warm orange/amber gradients and fireside chat theme.
- **Domain**: wisdom.greenelephant.org (custom subdomain for Green Elephant organization)
- **Key Sections**: Hero, voting/leaderboard for figures, three engagement pathway options (ChatGPT, Low-Code, API), social sharing, pricing (free tier + API access), and testimonials.
- **Chat UI**: Individual chat pages (`/chat/:figureId`) with real-time messaging, avatars, and a multi-dimensional geometric "ThinkingAnimation" loading indicator.
- **AI-to-AI Dialogue UI**: A dedicated page (`/ai-dialogue`) for staging and viewing conversations between two AI personas.

### Backend Architecture
- **Server Framework**: Express.js with Node.js and TypeScript.
- **Development**: Vite integration for HMR; Express handles API routes while Vite serves the frontend.
- **Production**: Client and server bundled separately by Vite and esbuild, respectively.
- **Storage Interface**: Abstract `IStorage` interface with in-memory implementation (`MemStorage`) for wise figures and votes, prepared for PostgreSQL.
- **API Design**: Routes registered via `registerRoutes`, prefixed with `/api`.
- **Request Logging**: Custom middleware for API request logging.
- **Chat System**: Integrates OpenAI GPT-5 via Replit AI Integrations, with a backend `personaDatabase` mapping figure IDs to `PersonaContext` for dynamic, persona-specific AI responses. Supports user-to-AI conversations and AI-to-AI dialogues.

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL, with schema validation using Zod.
- **Schema**:
    - `wise_figures`: id, name, era, title, bio, sample questions, ChatGPT links, vote counts, image URLs.
    - `votes`: Tracks user votes (`figure_id`, `session_id`).
    - `conversations`: Stores user-to-AI chats (`id`, `figureId`, `sessionId`, `createdAt`).
    - `messages`: Individual chat messages (`id`, `conversationId`, `role`, `content`, `createdAt`).
    - `aiDialogues`: AI-to-AI dialogue sessions (`id`, `persona1Id`, `persona2Id`, `topic`, `sessionId`, `createdAt`).
    - `dialogueMessages`: Individual AI-to-AI dialogue messages (`id`, `dialogueId`, `personaId`, `content`, `createdAt`).
    - `activityLogs`: Comprehensive tracking of all user actions (`id`, `activityType`, `email`, `data`, `sessionId`, `createdAt`).
- **Session Management**: express-session with MemoryStore, secured with required SESSION_SECRET environment variable.
- **Current Storage**: In-memory adapter used during development, with Drizzle configured for PostgreSQL in production.

### System Design Choices
- **Persona Data**: Backend maintains a `personaDatabase` for dynamic AI responses.
- **AI-to-AI Dialogue**: Backend API orchestrates multi-exchange conversations between selected AI personas.
- **Legal & Compliance**: Implemented Terms of Service (`/terms`) and Privacy Policy (`/privacy`) with beta disclaimers and waitlist model, aiming for GDPR/CCPA compliance.

## External Dependencies

### UI Libraries
- Radix UI component primitives
- Tailwind CSS
- Lucide React (icons)
- shadcn/ui

### Payment Processing
- Stripe (`@stripe/stripe-js`, `@stripe/react-stripe-js`) for future API access tier payments (currently waitlist model).

### Database
- PostgreSQL via Neon serverless (`@neondatabase/serverless`)
- Drizzle ORM
- Drizzle Kit

### Form Handling
- React Hook Form with Zod resolvers.

### AI Integration
- OpenAI GPT-5 via Replit AI Integrations (for internal chat system and AI-to-AI dialogues).
- Placeholder links for ChatGPT custom GPTs.
- Future integration pathways: n8n, MCP.

### Asset Management
- Static assets in `attached_assets` for wise figure portraits.

## Recent Changes (November 21, 2025)

### UI/UX Refinements & Filtering System (COMPLETE - Latest)
- ✅ **Font Change**: Replaced Archive with Inter font for all headings
  - Updated Google Fonts link to load Inter (400, 600, 700, 800, 900)
  - Modified --font-display CSS variable to use Inter with Georgia fallback
  - Matches estevepannetier.com aesthetic for brand consistency
- ✅ **Logo Update**: Switched from white to black Green Elephant logo
  - Header: Uses DashboardVersionOfficialLogo_LargeBlack@2x_1763744013740.png
  - Footer: Same black logo for consistency
  - Better visibility on light backgrounds
- ✅ **Pricing CTA Fixes**:
  - Contact Sales: Changed from ghost to primary/orange variant for better visibility
  - Free Tier "Get Early Access": Now tracks click + opens mailto (previously only scrolled)
  - API Tier "Join Waitlist": Added click tracking before mailto
  - All buttons use async/await pattern: track → mailto with error handling
- ✅ **Wisdom Library Filtering System**:
  - Added `category` field to all 56 wise figures (philosopher/poet/leader)
  - Categories: Philosophers (16), Poets & Artists (11), Leaders & Activists (29)
  - Hash-based navigation: #filter-philosophers, #filter-poets, #filter-leaders, #filter-all
  - Filter buttons display at top of voting section
  - Footer Wisdom Library links update URL hash and scroll to voting
  - Works alongside existing "Show All / Show Top 9" toggle
- ✅ **E2E Testing**: All features verified via Playwright
- 📝 **Impact**: Improved brand consistency, better CTA conversion tracking, shareable filtered URLs

### Admin System & Activity Tracking (COMPLETE - Latest)
- ✅ **Activity Logging Database**: Created `activityLogs` table to track all user actions
  - Tracks: newsletter subscriptions, contact form submissions, chat creation, click events
  - Stores: activityType, email, data (JSON), sessionId, timestamp
  - GDPR-compliant: only stores emails when explicit consent given
- ✅ **Secure Admin Authentication**:
  - Password-based login using ADMIN_PASSWORD secret
  - SESSION_SECRET required (no fallback) to prevent session forgery
  - Session configuration: httpOnly, sameSite: strict, 7-day expiry
  - saveUninitialized: false for GDPR compliance
- ✅ **Admin Dashboard** (`/admin`):
  - Real-time stats: Total Activities, Unique Emails, Conversations, Total Votes
  - Recent Activity tab: Last 100 events with timestamp, email, consent status
  - Daily Digest tab: Activity grouped by day with 1/7/30-day filters
  - Protected routes with middleware: redirects to login if not authenticated
- ✅ **Admin Login Page** (`/admin/login`):
  - Clean form with password input and submit button
  - Proper session initialization: regenerate() → set isAdmin → save()
  - Error handling for invalid credentials
- ✅ **E2E Testing**: All admin flows verified including:
  - Activity tracking from newsletter signups
  - Login/logout with session persistence
  - Dashboard stats and activity display
  - Protected route authorization
- 📝 **Security**: All admin routes require SESSION_SECRET env var (fails fast if missing)

### Font Loading Optimization (COMPLETE)
- ✅ **Font Preloading**: Added preload tags for Archive and Lato fonts in index.html for faster initial render
- ✅ **Font Display Strategy**: Google Fonts URL includes `display=swap` parameter for immediate fallback text visibility
- ✅ **Enhanced Fallbacks**: Improved font stacks with Georgia for Archive, system-ui for Lato
- ✅ **Class Name Fix**: Corrected all instances of `font-heading` to `font-display` in Chat.tsx and AiDialogue.tsx
- ✅ **Prose Typography Override**: Added CSS rule to apply Archive font to all Tailwind Typography `.prose` headings (h1-h6), fixing legal pages
- ✅ **E2E Testing**: Verified all fonts load correctly across homepage, chat pages, legal pages, and AI dialogue
- 📝 **Impact**: Eliminates Font Flash of Unstyled Text (FOUT), ensures consistent Archive display font on all headings including Privacy/Terms pages

### GDPR Compliance & Site Expansion (COMPLETE - November 20, 2025)
- ✅ **Ready Personas Gating**: Updated VotingSection to show Chat button ONLY for ready personas (5 of 51):
  - rosa-parks, socrates, simone-de-beauvoir, jesus-christ, rumi have `chatReady: true`
  - All other 46 personas display only Vote button (chatReady: false)
- ✅ **GDPR Email Consent System**: Implemented explicit consent tracking for all email collection:
  - Newsletter signup (Footer): Requires checkbox consent before submission
  - Contact form: Requires checkbox consent before sending
  - Both forms include consent confirmation in mailto body to esteve@greenelephant.org
  - Submit buttons disabled until consent provided (better UX than toast errors)
- ✅ **New Information Pages** created with proper routing:
  - `/api-docs` - WIP page for API Documentation with early access request
  - `/mcp-templates` - WIP page for MCP Templates with notification signup
  - `/getting-started` - Comprehensive guide with 3-step onboarding process
  - `/contact` - GDPR-compliant contact form with explicit consent
- ✅ **Footer Redesign**: 
  - Removed Blog link (not needed for beta)
  - All links properly wired: Wisdom Library scrolls to voting, Resources link to new pages
  - Newsletter signup with GDPR consent checkbox and validation
- ✅ **Legal Pages Updated**:
  - Privacy Policy: Updated contact to esteve@greenelephant.org, GDPR/CCPA compliant
  - Terms of Service: Updated branding to "Wisdom Council", beta disclaimers, proper contact info
- ✅ **E2E Testing**: All features verified via Playwright including:
  - Navigation to all pages, GDPR consent enforcement, chat button gating, mailto flows

### UI Reorganization & Collapsible Sections (COMPLETE)
- ✅ Moved "Suggest a New Wisdom Persona" into the Free Conversations section
- ✅ Replaced the 4 figure buttons (Socrates, Marcus Aurelius, Rumi, + 50 More) with suggest persona form
- ✅ Made "Workflow Integration" section collapsible to reduce visual clutter
- ✅ Both Workflow Integration and Developer Access now use expandable/collapsible pattern
- ✅ Email form opens pre-filled message to esteve@greenelephant.org with suggestion template
- ✅ Cleaner, less busy visual layout for the Conversations section

### Domain & Branding Update (COMPLETE)
- ✅ Updated domain from wisdom.greenelephant.ai to **wisdom.greenelephant.org**
- ✅ Renamed project from "Wisdom from the Past" to **"Wisdom Council"**
- ✅ Implemented dynamic share link generation:
  - Each visitor gets a unique 8-character referral code stored in localStorage
  - Share links format: `https://wisdom.greenelephant.org/share/[unique-code]`
  - Actual social sharing buttons now functional (Twitter, LinkedIn, Facebook)
- ✅ Updated HTML metadata and Open Graph tags for new branding
- 📝 **Next step**: Configure DNS for wisdom.greenelephant.org in Replit Deployments after publishing

### Navigation & Ordering Improvements (COMPLETE)
- ✅ Reverted vintage/sepia image treatment - restored original portrait images
- ✅ Fixed ConversationsSection buttons to link to internal pages instead of external ChatGPT URLs
- ✅ Socrates button navigates to /chat/2 (working internal chat)
- ✅ Rumi and Marcus Aurelius buttons scroll to voting section (backend support pending)
- ✅ "+ 50 More" button scrolls to voting section
- ✅ Reordered voting section to prioritize running GPTs at top:
  1. Rosa Parks
  2. Socrates
  3. Maria Montessori
  4. Mary Wollstonecraft
  5. Bell Hooks
  6. Simone de Beauvoir
  7. Jesus Christ
  8. Rumi
- 📝 Note: Changed ExternalLink icons to MessageSquare for internal navigation buttons
```