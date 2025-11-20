# Wisdom from the Past

## Overview

**Wisdom from the Past** is a landing page application that connects users with AI-powered conversations featuring historical wisdom figures. The platform enables "fireside chats" with personalities like Socrates, Marcus Aurelius, Rumi, and others, positioning AI as a tool for internal growth rather than just productivity.

The application is built as a full-stack TypeScript monorepo with a React frontend and Express backend, designed to showcase three engagement pathways: ChatGPT integrations, low-code workflow tools (n8n/MCP), and API access for developers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing (lightweight alternative to React Router).

**UI Component System**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling. The design system follows a "new-york" style variant with custom color tokens and spacing primitives defined in the Tailwind configuration.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration that includes credential-based API requests.

**Design Philosophy**: The landing page draws inspiration from Product Hunt (voting mechanics), Linear (clean typography), Stripe (technical documentation), and Medium (content-rich storytelling). Typography uses Inter for headings/UI and a serif font (Crimson Pro/Lora) for body text to create warmth.

**Key Sections**:
- Hero with full-screen background imagery
- Voting/leaderboard for wise figures (Product Hunt-style)
- Three pathway options (ChatGPT, Low-Code, API)
- Social sharing with referral links
- Pricing (free tier + API access tier)
- Testimonials from historical figures

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Mode**: Vite integration for HMR (Hot Module Replacement) in development, with middleware mode allowing Express to handle API routes while Vite serves the frontend.

**Production Build**: Client and server are bundled separately - Vite bundles the React app into `dist/public`, while esbuild bundles the Express server into `dist/index.js`.

**Storage Interface**: Abstract `IStorage` interface with an in-memory implementation (`MemStorage`) for managing wise figures and votes. The interface supports CRUD operations for wise figures and voting functionality tied to session IDs.

**API Design Pattern**: Routes are registered via a `registerRoutes` function that returns an HTTP server instance. The pattern expects all application routes to be prefixed with `/api`.

**Request Logging**: Custom middleware logs API requests with timing, method, path, status code, and truncated response bodies.

### Data Storage Solutions

**Database Schema** (via Drizzle ORM):
- **wise_figures table**: Stores historical figures with fields for id, name, era, title, bio, sample questions, ChatGPT links, vote counts, and image URLs
- **votes table**: Tracks user votes with figure_id and session_id for vote deduplication
- **conversations table**: Stores user-to-AI chat conversations with id, figureId (numeric 1-51), sessionId, and createdAt
- **messages table**: Stores individual user/AI messages with id, conversationId, role (user/assistant), content, and createdAt
- **aiDialogues table**: Stores AI-to-AI dialogue sessions with id, persona1Id, persona2Id, topic, sessionId, and createdAt
- **dialogueMessages table**: Stores AI-to-AI dialogue messages with id, dialogueId, personaId, content, and createdAt

**ORM**: Drizzle ORM configured for PostgreSQL with schema validation using Zod. The configuration expects a `DATABASE_URL` environment variable and outputs migrations to the `./migrations` directory.

**Current Implementation**: The application uses an in-memory storage adapter during development, but the schema and Drizzle configuration indicate the architecture is prepared for PostgreSQL in production.

**Session Management**: Uses `connect-pg-simple` for PostgreSQL-backed session storage (dependency present but not yet implemented in provided code).

**Chat System (Phase 2 - COMPLETED)**:
- **OpenAI Integration**: GPT-5 via Replit AI Integrations (no external API key required, billed to Replit credits)
- **Persona Database**: Backend maintains personaDatabase mapping figureId to PersonaContext (name, era, title, bio)
- **Dynamic Persona Responses**: Each wise figure generates AI responses in their unique voice and character
- **Conversation Flow**: Users create conversations, send messages, receive persona-specific AI responses with conversation history
- **Frontend Chat UI**: Individual chat pages per persona at /chat/:figureId with real-time messaging, avatars, and loading states
- **Thinking Animation**: Multi-dimensional geometric loading animation (ThinkingAnimation component) with spinning shapes, pulsing center, and rotating wisdom messages while AI generates responses
- **Current Personas**: Simone de Beauvoir (1), Socrates (2), Jesus Christ (3) - verified multi-persona functionality
- **Future Expansion**: 48 additional personas to be added to personaDatabase for complete 51-figure roster

### External Dependencies

**UI Libraries**:
- Radix UI component primitives (accordion, dialog, dropdown, tooltip, etc.)
- Tailwind CSS with custom design tokens
- Lucide React for icons
- shadcn/ui component system

**Payment Processing**: Stripe integration with `@stripe/stripe-js` and `@stripe/react-stripe-js` for handling API access tier payments.

**Database**:
- PostgreSQL via Neon serverless (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries
- Drizzle Kit for schema migrations

**Form Handling**: React Hook Form with Zod resolvers for validation.

**Development Tools**:
- Replit-specific plugins for dev banner, cartographer, and runtime error overlay
- TypeScript with strict mode enabled
- ESBuild for server bundling

**AI Integration**: 
- **Phase 2 (Complete)**: Internal chat system using OpenAI GPT-5 via Replit AI Integrations
- **Future Integration Pathways**: 
  - ChatGPT custom GPTs (external links)
  - n8n low-code workflow automation
  - MCP (Model Context Protocol) workflows
  - Developer API access for custom integrations

**Asset Management**: Static assets stored in `attached_assets` directory with generated images for each wise figure portrait.

## Recent Changes (November 20, 2025)

### Visual Harmonization (COMPLETE - Latest)
- ✅ Applied consistent vintage/sepia treatment to all 51 wise figure portraits using ImageMagick
- ✅ Processing includes: 40% saturation reduction, 15% warm sepia overlay (#C89858), subtle vignette
- ✅ Creates cohesive "Wisdom from the Past" aesthetic while preserving individual character
- ✅ Documented reproduction workflow in PORTRAIT_HARMONIZATION.md
- ✅ Maintains original unprocessed portraits in `attached_assets/generated_images_original/`
- ✅ Harmonized portraits served from `attached_assets/generated_images/`

### AI-to-AI Dialogue Feature (COMPLETE - Latest)
- ✅ Extended schema with aiDialogues and dialogueMessages tables
- ✅ Implemented backend API to orchestrate conversations between two AI personas
- ✅ POST /api/ai-dialogues generates 5-exchange conversation between selected personas
- ✅ GET /api/ai-dialogues/:id/messages retrieves full conversation history
- ✅ Created frontend page (/ai-dialogue) with persona selection dropdowns and topic input
- ✅ Added "Watch AI Dialogue" CTA button in hero section for easy discovery
- ✅ Generates substantive philosophical exchanges using OpenAI GPT-5 (90-second generation time)
- ✅ Displays alternating messages with persona avatars, names, eras, and content
- ✅ "New Dialogue" button resets form for staging additional conversations
- ✅ End-to-end testing passed: navigation, selection, generation, display, reset
- ✅ Currently supports 3 personas: Simone de Beauvoir (1), Socrates (2), Jesus Christ (3)
- ⚠️ Known limitation: Persona metadata duplicated (frontend availablePersonas vs backend personaDatabase)

### Phase 2: Chat System Implementation (COMPLETE)
- ✅ Integrated OpenAI GPT-5 via Replit AI Integrations for persona-specific conversations
- ✅ Extended data model with conversations and messages tables
- ✅ Implemented full REST API for chat operations (create conversation, send messages, retrieve history)
- ✅ Built frontend chat UI with persona headers, message bubbles, avatars, and loading states
- ✅ Added dynamic persona selection - each figure responds in their unique voice
- ✅ Verified multi-persona functionality (Simone de Beauvoir, Socrates, Jesus Christ)
- ✅ Integrated chat navigation from landing page WiseFigureCard components
- ✅ End-to-end testing passed for complete chat flow

### UX & Messaging Improvements (COMPLETE)
- ✅ Renamed navigation "Pathways" → "Conversations" for clarity
- ✅ Updated hero section to emphasize "AI embodiments of famous wise historical figures"
- ✅ Changed hero CTA from "Begin Your Journey" → "Start a Conversation"
- ✅ Renamed PathwaysSection → ConversationsSection with updated messaging
- ✅ Made Developer Access section collapsible (hidden by default, expandable for technical users)
- ✅ Updated all CTAs to emphasize conversations, staging dialogues, and observing interactions
- ✅ Added prominent bottom CTA clarifying "famous wise historical personas" with specific examples
- ✅ Improved non-technical user discoverability while maintaining developer resources

### Legal Protection & Waitlist Model (COMPLETE)
- ✅ Created comprehensive Terms of Service page (/terms) with beta/concept test disclaimers
- ✅ Created Privacy Policy page (/privacy) with GDPR/CCPA compliance language
- ✅ Converted pricing model from "purchase" to "waitlist/early access" throughout site
- ✅ Added beta banner to homepage warning about concept test status
- ✅ Updated all CTAs from "Buy"/"Upgrade" to "Join Waitlist"/"Get Early Access"
- ✅ Added "Early Access Pricing" badges and disclaimers in pricing section
- ✅ Updated footer with working links to Terms and Privacy pages (fixed nested anchor tags)
- ✅ Updated copyright year to 2025
- ✅ Connected Jesus Christ persona to ACIM ChatGPT URL (https://chatgpt.com/g/g-1vf04chMP-jesus-acim)
- ✅ Created LEGAL_REVIEW.md comprehensive analysis of legal exposure and fixes
- ✅ Replaced emojis with icon components (AlertTriangle, Shield) in legal pages
- ✅ End-to-end testing verified all legal pages, waitlist messaging, and Jesus ACIM integration

### UX Enhancements: Chat Loading Animation (COMPLETE)
- ✅ Created ThinkingAnimation component with multi-dimensional geometric design
- ✅ Features multiple spinning SVG circles and polygons at different rotation speeds
- ✅ Pulsing center dot with radiating rings for organic feel
- ✅ Rotating wisdom messages ("Contemplating wisdom...", "Channeling ancient knowledge...", "Formulating thoughtful response...")
- ✅ Three animated dots indicator at bottom
- ✅ Integrated into Chat component to replace simple spinner
- ✅ End-to-end testing confirmed animation shows during AI response generation
- ✅ Verified chat functionality works correctly with Jesus persona generating meaningful responses

### Architecture Notes
- Persona metadata currently duplicated between frontend (personasMap) and backend (personaDatabase)
- Future improvement: Consolidate persona definitions into shared module to prevent drift
- In-memory storage suitable for MVP; consider PostgreSQL for production with conversation persistence
- Developer section uses Shadcn Collapsible component for progressive disclosure

### Legal & Compliance Status
- **Model**: Waitlist/concept test model (no immediate payments accepted)
- **Protection**: Terms of Service explicitly states beta status, no feature guarantees, no payment until operational
- **Privacy**: GDPR/CCPA compliant privacy policy with data handling disclosures
- **Messaging**: All site CTAs clarify waitlist/early access model (not immediate purchase)
- **Disclaimers**: Beta warnings at top of homepage and throughout pricing section
- **Next Steps**: User should manually verify Jesus ACIM ChatGPT URL functions correctly in production
- **Risk Level**: LOW - Substantially reduced legal exposure from original purchase-ready model

### Routes
- `/` - Homepage with all sections
- `/chat/:figureId` - Individual user-to-AI chat pages for personas
- `/ai-dialogue` - AI-to-AI dialogue staging and viewing page
- `/terms` - Terms of Service (with beta disclaimers)
- `/privacy` - Privacy Policy (with GDPR/CCPA compliance)

### Future Improvements (from Architect Review)
- Centralize persona metadata to eliminate frontend/backend duplication and ID drift
- Enhance AI dialogue UX with progress indicators and better error handling for long-running generations
- Expand persona roster from 3 to all 51 figures in personaDatabase
- Consider PostgreSQL migration for production persistence