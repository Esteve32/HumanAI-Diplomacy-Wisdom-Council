# Wisdom Council

A laboratory for AI-human diplomacy — pull up a chair and start a conversation with history's great thinkers.

---

## 🚀 Live Experience

Visit the live platform at: **https://wisdom.greenelephant.org**

Want to explore a partnership or book a call?  
👉 [Book a discovery call](https://calendly.com/greenelephant/discovery-call-with-esteve)

---

## 📝 About

**Wisdom Council** is a demonstration platform for AI-human diplomacy — a laboratory (not entertainment) where you engage with AI personas of historical thinkers to explore how humans and AI systems can work together better.

Conversations here happen "around time" rather than just "across time." Each dialogue is a genuine learning opportunity: it teaches us what kinds of questions people ask, how AI responds, and where communication breaks down or flows beautifully.

The platform is built and maintained by [Green Elephant](https://greenelephant.org) as a proof-of-concept for responsible AI development, and as an invitation to partner with ethically-minded companies, universities, governments, and organisations worldwide.

All copy passes the **"grandmother test"** — jargon-free and accessible to anyone.

> **ACX Compliance:** 99/100 across all 10 categories of the [Arbora Partners AI-Human Experience (ACX) framework](https://arbora.partners/nest).

---

## 🎯 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Esteve32/HumanAI-Diplomacy-Wisdom-Council.git
cd HumanAI-Diplomacy-Wisdom-Council
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Neon serverless recommended) |
| `SESSION_SECRET` | Secure random string for session management |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key (for future API access tier) |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `PERSPECTIVE_API_KEY` | Google Perspective API key (optional — Tier 1 currently disabled; see `PERSPECTIVE_API_SETUP.md`) |
| `AI_INTEGRATIONS_OPENAI_API_KEY` | Auto-set by Replit AI Integrations |
| `AI_INTEGRATIONS_OPENAI_BASE_URL` | Auto-set by Replit AI Integrations |

### 4. Push the database schema

```bash
npm run db:push
```

### 5. Run locally

```bash
npm run dev
```

The app is served at `http://localhost:5000` with full hot module reload.

### 6. Build for production

```bash
npm run build
npm start
```

---

## ➕ Adding New Wise Figures

To add a new historical thinker to the Council:

1. **Add persona data** — Add a new entry to the `personaDatabase` object in `server/routes.ts`:
   ```ts
   9: {
     name: "Your Thinker",
     era: "YYYY–YYYY CE",
     title: "Short title or role",
     bio: "Brief bio — ideally opening with a famous quote.",
   },
   ```

2. **Add a portrait** — Place the portrait image in `attached_assets/` and reference its path from the front-end figure card.

3. **Update the schema / seed data** — If you are using the PostgreSQL-backed `wise_figures` table rather than the in-memory store, insert a matching row and push the schema with `npm run db:push`.

4. **Commit and deploy** — The new figure will automatically appear in the home page gallery and become conversable at `/chat/:figureId`.

See `server/routes.ts` and `client/src/components/WiseFigureCard.tsx` for the data shape expected by the front end.

---

## 🏗️ Repository Structure

```
HumanAI-Diplomacy-Wisdom-Council/
├── client/                         # React front-end (Vite)
│   ├── index.html                  # HTML entry point
│   └── src/
│       ├── App.tsx                 # Router and layout shell
│       ├── main.tsx                # React entry point
│       ├── index.css               # Global styles
│       ├── pages/                  # One file per route
│       │   ├── Home.tsx            # Hero, voting, sharing, pricing, testimonials
│       │   ├── About.tsx           # Mission, laboratory explanation, federation agenda
│       │   ├── Chat.tsx            # One-on-one chat with a historical thinker
│       │   ├── AiDialogue.tsx      # AI-to-AI conversation between two personas
│       │   ├── AdminDashboard.tsx  # Activity logs and analytics (protected)
│       │   ├── AdminLogin.tsx      # Admin authentication
│       │   ├── ApiDocs.tsx         # API documentation page
│       │   ├── GettingStarted.tsx  # Onboarding guide
│       │   ├── McpTemplates.tsx    # MCP integration templates
│       │   ├── ResponsibleAi.tsx   # Responsible AI policy page
│       │   ├── Contact.tsx         # Contact form
│       │   ├── Terms.tsx           # Terms of Service
│       │   ├── Privacy.tsx         # Privacy Policy
│       │   └── not-found.tsx       # 404 page
│       ├── components/             # Reusable UI components
│       │   ├── Header.tsx          # Navigation (About, Conversations, Pricing, Book a Call)
│       │   ├── Footer.tsx
│       │   ├── HeroSection.tsx     # AI-human diplomacy framing
│       │   ├── WiseFigureCard.tsx  # Figure card with vote button
│       │   ├── VotingSection.tsx
│       │   ├── ConversationsSection.tsx
│       │   ├── PathwaysSection.tsx
│       │   ├── SharingSection.tsx
│       │   ├── PricingSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   ├── ConceptSection.tsx
│       │   ├── BetaBanner.tsx
│       │   ├── TosModal.tsx
│       │   ├── ThinkingAnimation.tsx
│       │   ├── IntegrationGuides.tsx
│       │   ├── examples/           # Example conversation snippets
│       │   └── ui/                 # shadcn/ui primitive components
│       ├── hooks/                  # Custom React hooks
│       └── lib/                    # Utility helpers
├── server/                         # Express back-end
│   ├── index.ts                    # Server entry point
│   ├── routes.ts                   # All API routes + persona database
│   ├── openai.ts                   # OpenAI persona & dialogue generation
│   ├── perspective.ts              # Content moderation (Tier 1 – currently disabled)
│   ├── storage.ts                  # Abstract storage interface (in-memory + Drizzle)
│   ├── email.ts                    # Activity notification emails (Resend)
│   ├── vite.ts                     # Vite dev-server integration
│   └── middleware/
│       └── rateLimiter.ts          # Per-session rate limiting for chat/dialogue
├── shared/
│   └── schema.ts                   # Drizzle ORM schema + Zod types (shared by client & server)
├── public/                         # Static assets served at root
├── attached_assets/                # Wise figure portraits and project images
├── .env.example                    # Environment variable template
├── .gitignore
├── .replit                         # Replit configuration
├── drizzle.config.ts               # Drizzle Kit configuration
├── vite.config.ts                  # Vite build configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js
├── tsconfig.json
├── components.json                 # shadcn/ui component configuration
├── package.json
├── ACX_DETAILED_REPORT.md          # Full ACX framework compliance report
├── ACX_SCORECARD.md                # ACX compliance scorecard
├── DOMAIN_SETUP.md                 # Custom domain setup (wisdom.greenelephant.org)
├── PERSPECTIVE_API_SETUP.md        # Google Perspective API integration notes
├── GPT_URL_PLACEHOLDERS.md         # ChatGPT custom GPT URL reference
├── LEGAL_REVIEW.md                 # Legal review notes
├── PORTRAIT_HARMONIZATION.md       # Visual identity guidelines for portraits
├── design_guidelines.md            # UI/UX design principles
├── replit.md                       # Architecture overview and recent change log
└── README.md                       # This file
```

---

## 🎨 Features

- **Conversations with historical thinkers** — Chat one-on-one with AI personas of Socrates, Simone de Beauvoir, Rumi, Rosa Parks, Mary Wollstonecraft, Maria Montessori, bell hooks, Jesus of Nazareth, and more
- **AI-to-AI dialogue** — Watch two historical personas debate a topic you choose; 5-exchange fully orchestrated conversations
- **Voting** — Community upvotes surface the most-requested thinkers
- **Sharing** — Unique share links (`/share/[code]`) with Open Graph preview support
- **Content moderation** — Two-tier system: deterministic keyword filter (41 patterns across 4 categories) with optional Google Perspective API (Tier 1)
- **Pricing tiers** — Stripe-backed subscription gateway for future API-access tiers
- **Admin dashboard** — Protected activity logs, daily digest, analytics, and stats
- **GDPR / data export** — Full user-data export endpoint at `/api/user-data/export`
- **Rate limiting** — Per-session request throttling on all AI-powered endpoints
- **Terms of Service & Privacy Policy** — Beta-aware legal pages at `/terms` and `/privacy`
- **Responsive design** — Works on desktop and mobile devices
- **Fireside-chat visual identity** — Sage green palette, warm typography, fireplace-inspired imagery

---

## 🔧 Technical Details

| Layer | Technology |
|---|---|
| **Frontend framework** | React 18 with TypeScript, Vite |
| **UI components** | shadcn/ui (Radix UI + Tailwind CSS, "new-york" style) |
| **State / data fetching** | TanStack Query (React Query v5) |
| **Routing** | Wouter |
| **Animations** | Framer Motion |
| **Backend** | Express.js + Node.js (TypeScript, ESM) |
| **ORM** | Drizzle ORM |
| **Database** | PostgreSQL via Neon serverless (`@neondatabase/serverless`) |
| **Sessions** | `express-session` with MemoryStore → `SESSION_SECRET` |
| **AI** | OpenAI GPT-5 via Replit AI Integrations |
| **Payments** | Stripe (`@stripe/stripe-js`, `@stripe/react-stripe-js`) |
| **Email** | Resend (`resend`) for activity notifications |
| **Content moderation** | 41-pattern deterministic keyword filter (Tier 2); Google Perspective API optional (Tier 1) |
| **Hosting** | Replit Deployments with custom domain support |
| **Type checking** | TypeScript 5.6 (`npm run check`) |
| **Build tool** | Vite (client) + esbuild (server) |

### Database schema

The `shared/schema.ts` file defines the following PostgreSQL tables (Drizzle ORM):

- `wise_figures` — thinker profiles, vote counts, portrait URLs
- `votes` — per-session vote records
- `conversations` — conversation sessions linked to a figure
- `messages` — individual chat messages (user + assistant roles)
- `ai_dialogues` — AI-to-AI dialogue sessions
- `dialogue_messages` — individual exchanges within an AI dialogue
- `activity_logs` — platform-wide activity tracking
- `message_feedback` — thumbs up/down feedback per message
- `rate_limits` — per-session rate-limit windows

### API routes

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/conversations` | Start a new conversation with a figure |
| `GET` | `/api/conversations` | List conversations for the current session |
| `GET` | `/api/conversations/:id/messages` | Fetch message history |
| `POST` | `/api/conversations/:id/messages` | Send a message (rate-limited) |
| `DELETE` | `/api/conversations/:id` | Delete a conversation |
| `POST` | `/api/ai-dialogues` | Create an AI-to-AI dialogue (rate-limited) |
| `GET` | `/api/ai-dialogues/:id/messages` | Fetch dialogue exchanges |
| `POST` | `/api/votes` | Vote for a wise figure |
| `POST` | `/api/feedback` | Submit message feedback |
| `GET` | `/api/user-data/export` | Export all data for the current session (GDPR) |
| `GET` | `/api/admin/*` | Admin-only analytics and activity log endpoints |

### Content moderation

The platform uses a two-tier moderation approach:

- **Tier 2 (active):** 41-pattern deterministic keyword filter covering hate speech, explicit violence, sexual exploitation, and self-harm. All text is normalised (case, Unicode, punctuation) before matching. Category-specific crisis resources are shown when content is blocked (Finland Mental Health Crisis Line: 09 2525 0111).
- **Tier 1 (optional):** Google Perspective API. Disabled by default after user testing found false positives on therapeutic language. Can be re-enabled by setting `PERSPECTIVE_API_KEY`. See `PERSPECTIVE_API_SETUP.md` for full setup instructions.

### Custom domain

The application is configured for deployment at `wisdom.greenelephant.org`. See `DOMAIN_SETUP.md` for DNS and Replit Deployments setup steps.

---

## 🤝 Contributing

Contributions are welcome, especially if they are:

- ethics-aware and clearly documented
- design-rigorous and aligned with the "grandmother test" copy standard
- focused and reviewable (one concern per pull request)

When contributing:

1. Open an issue describing the idea or concern
2. Explain the ethical and design rationale behind your change
3. Include before/after context for any interaction or copy experiments
4. Reference the ACX framework and design guidelines where applicable

---

*Wisdom Council is a [Green Elephant](https://greenelephant.org) initiative — part of a broader effort to federate ethical organisations around nurturing clarity in AI-human relationships.*
