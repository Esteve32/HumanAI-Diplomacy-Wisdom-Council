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

**ORM**: Drizzle ORM configured for PostgreSQL with schema validation using Zod. The configuration expects a `DATABASE_URL` environment variable and outputs migrations to the `./migrations` directory.

**Current Implementation**: The application uses an in-memory storage adapter during development, but the schema and Drizzle configuration indicate the architecture is prepared for PostgreSQL in production.

**Session Management**: Uses `connect-pg-simple` for PostgreSQL-backed session storage (dependency present but not yet implemented in provided code).

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

**AI Integration Targets**: The application is designed to integrate with:
- ChatGPT (via custom GPT links)
- n8n (low-code workflow automation)
- MCP (Model Context Protocol) workflows
- Custom API access for developers

**Asset Management**: Static assets stored in `attached_assets` directory with generated images for each wise figure portrait.