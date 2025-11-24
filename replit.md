# Wisdom Council

## Overview
**Wisdom Council** is a demonstration platform for AI-human diplomacy principles. It's a laboratory (not entertainment) where users engage with AI versions of historical thinkers to explore how humans and AI systems can work together better. The platform showcases conversations "around time" (not just "across time"), positioning itself as a proof-of-concept for responsible AI development. Built as a full-stack TypeScript monorepo with React frontend and Express backend, it serves a deeper agenda: federating ethically-minded companies, universities, governments, and organizations worldwide around nurturing clarity in AI-human relationships.

## User Preferences
- Preferred communication style: Simple, everyday language ("grandmother test")
- All copy must be jargon-free and accessible
- Platform costs money to run—encourage thoughtful use, not entertainment

## Recent Updates (Nov 2025)
- **Messaging Pivot (Nov 24, 2025)**: Complete reframing to "AI-human diplomacy"
  - **New About Page** (`/about`): Clear explanation of why platform exists, what AI-human diplomacy means, laboratory vs entertainment distinction, and federation agenda
  - **Header Navigation**: Added "About" link; changed "Get Started" to "Book a Call" (links to Calendly)
  - **Hero Section**: Reframed from "Conversations Across Time" to "AI-Human Diplomacy" with partnership CTA
  - **All Copy Updated**: "Grandmother test" language throughout—no jargon, simple explanations
  - **Key Messaging Shifts**:
    - "Around time" not "across time" (philosophical shift)
    - Laboratory for learning, not entertainment
    - Public conversation emphasis (not just individual use)
    - Federation agenda: bringing together ethical organizations worldwide
    - Partnership focus: companies, universities, governments
  - **Calendly Integration**: https://calendly.com/greenelephant/discovery-call-with-esteve
  - **Green Elephant Prominence**: Platform positioned as Green Elephant demonstration/initiative

- **Content Moderation**: Production-ready Tier 2-only system for ACX compliance
  - **ACX Framework**: Based on Arbora Partners' AI-Human Experience (ACX) framework
    - Link: https://arbora.partners/nest
    - 99/100 compliance score across 10 categories
    - Framework emphasizes human experience with AI systems
  - **Tier 2 (Active)**: 41-pattern deterministic keyword filter
    - Categories: Hate speech (8), Violence (11), Sexual exploitation (6), Self-harm (16)
    - Text normalization (case, Unicode, punctuation) for pattern matching
    - Screens all inbound/outbound messages + dialogue history
    - Crisis resources: Finland Mental Health Crisis Line (09 2525 0111)
    - E2E tested: 100% harmful blocked, 100% safe therapeutic language passed
  - **Tier 1 (Intentionally Disabled)**: Google Perspective API (ML-powered)
    - **Disabled Nov 24, 2025** after user testing revealed false positives
    - Therapists reported legitimate questions about emotions were incorrectly blocked
    - ML-based moderation too aggressive for therapeutic/philosophical platform
    - Decision: Tier 2 keyword filter provides better user experience
  - **Status**: Production-ready with 99/100 ACX compliance
  - See PERSPECTIVE_API_SETUP.md for historical context (Tier 1 not recommended)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, Vite.
- **UI**: shadcn/ui (Radix UI + Tailwind CSS) with a "new-york" style variant.
- **State Management**: TanStack Query (React Query).
- **Typography**: Inter font for headings, Lato for body text, with optimized loading.
- **Design**: Inspired by Product Hunt, Linear, Stripe, and Medium, focusing on clean design and a "fireside chat" theme.
- **Key Pages**: 
  - **Home** (`/`): Hero (AI-human diplomacy framing), voting, engagement pathways, sharing, pricing, testimonials
  - **About** (`/about`): Mission statement, laboratory explanation, federation agenda, partnership invitation
  - **Chat** (`/chat/:figureId`): One-on-one conversations with historical thinkers
  - **AI Dialogue** (`/ai-dialogue`): AI-to-AI conversations between personas
- **Navigation**: Header includes About, Conversations, Pricing, "Book a Call" (Calendly link)
- **Messaging**: All copy passes "grandmother test"—simple, jargon-free language
- **CTAs**: Partnership-focused, emphasizing collaboration over individual use

### Backend Architecture
- **Server**: Express.js with Node.js and TypeScript.
- **Development**: Vite for HMR; Express for API, Vite for frontend.
- **Production**: Separate bundling for client and server.
- **Storage Interface**: Abstract `IStorage` with in-memory implementation, prepared for PostgreSQL.
- **API**: Routes registered via `registerRoutes`, prefixed with `/api`.
- **Chat System**: Integrates OpenAI GPT-5 via Replit AI Integrations, using a `personaDatabase` for dynamic, persona-specific AI responses. Supports user-to-AI and AI-to-AI dialogues.

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL, with Zod for schema validation.
- **Schema**: Includes `wise_figures`, `votes`, `conversations`, `messages`, `aiDialogues`, `dialogueMessages`, and `activityLogs` tables.
- **Session Management**: `express-session` with MemoryStore, secured by `SESSION_SECRET`.
- **Current Storage**: In-memory adapter, with Drizzle configured for PostgreSQL in production.

### System Design Choices
- **Persona Data**: Backend maintains `personaDatabase` for dynamic AI responses.
- **AI-to-AI Dialogue**: Backend API orchestrates multi-exchange conversations between AI personas.
- **Legal & Compliance**: Implemented Terms of Service and Privacy Policy (`/terms`, `/privacy`) with beta disclaimers, aiming for GDPR/CCPA compliance.

## External Dependencies

### UI Libraries
- Radix UI
- Tailwind CSS
- Lucide React
- shadcn/ui

### Payment Processing
- Stripe (`@stripe/stripe-js`, `@stripe/react-stripe-js`) for future API access tier.

### Database
- PostgreSQL via Neon serverless (`@neondatabase/serverless`)
- Drizzle ORM
- Drizzle Kit

### Form Handling
- React Hook Form with Zod resolvers.

### AI Integration
- OpenAI GPT-5 via Replit AI Integrations.
- Placeholder links for ChatGPT custom GPTs.
- Future integration pathways: n8n, MCP.

### Asset Management
- Static assets in `attached_assets` for wise figure portraits.