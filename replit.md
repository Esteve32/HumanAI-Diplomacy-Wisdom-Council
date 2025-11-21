# Wisdom Council

## Overview
**Wisdom Council** is a landing page application enabling AI-powered conversations with historical wisdom figures. It aims to position AI as a tool for internal growth and philosophical development, offering "fireside chats" with personalities like Socrates and Rumi. The platform is a full-stack TypeScript monorepo with a React frontend and Express backend, featuring ChatGPT integrations and API access. The project emphasizes clean typography and a "Wisdom Council" aesthetic with warm orange/amber gradients.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Updates (Nov 2025)
- **Content Moderation**: Integrated Google Perspective API (free, ML-powered) for ACX compliance
  - Screens all messages for toxicity, threats, hate speech, harmful content
  - Replaces interim keyword-based filtering
  - Production-ready (used by NYT, Reddit, WSJ)
  - GDPR-compliant with `doNotStore` flag
  - Requires `PERSPECTIVE_API_KEY` secret (see PERSPECTIVE_API_SETUP.md)
  - Fallback: permissive mode if API unavailable (logs warning)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, Vite.
- **UI**: shadcn/ui (Radix UI + Tailwind CSS) with a "new-york" style variant.
- **State Management**: TanStack Query (React Query).
- **Typography**: Inter font for headings, Lato for body text, with optimized loading.
- **Design**: Inspired by Product Hunt, Linear, Stripe, and Medium, focusing on clean design and a "fireside chat" theme.
- **Key Sections**: Hero, figure voting/leaderboard, engagement pathways (ChatGPT, Low-Code, API), social sharing, pricing, testimonials.
- **Chat UI**: Individual chat pages (`/chat/:figureId`) with real-time messaging and a multi-dimensional geometric "ThinkingAnimation" loading indicator.
- **AI-to-AI Dialogue UI**: Dedicated page (`/ai-dialogue`) for staging and viewing AI persona conversations.

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