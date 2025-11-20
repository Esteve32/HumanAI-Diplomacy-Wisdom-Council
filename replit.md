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
- **Design Philosophy**: Inspired by Product Hunt, Linear, Stripe, and Medium, emphasizing clean typography (Inter for UI, serif for body) and a cohesive "Wisdom Council" aesthetic.
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
- **Session Management**: `connect-pg-simple` for PostgreSQL-backed sessions (planned).
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

## Recent Changes (November 20, 2025)

### UI Reorganization & Collapsible Sections (COMPLETE - Latest)
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