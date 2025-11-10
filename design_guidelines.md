# Design Guidelines: Wisdom from the Past Landing Page

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Product Hunt**: Interactive voting mechanics and leaderboard presentation
- **Linear**: Clean typography and modern card layouts
- **Stripe**: Clear technical documentation sections
- **Medium**: Content-rich storytelling and reading experience

**Core Principle**: Create a warm, inviting atmosphere that balances viral engagement with thoughtful personal development messaging.

---

## Typography System

**Font Families**:
- Primary: Inter (headings, UI elements)
- Secondary: Crimson Pro or Lora (body text, quotes - adds warmth and wisdom)

**Hierarchy**:
- Hero Headline: text-6xl to text-7xl, font-bold
- Section Headers: text-4xl to text-5xl, font-semibold
- Card Titles: text-2xl, font-semibold
- Body Text: text-lg, font-normal
- Captions/Metadata: text-sm, text-base

---

## Layout & Spacing System

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl
- Reading content: max-w-4xl

**Spacing Primitives** (Tailwind units):
- Micro spacing: 2, 3, 4 (gaps, padding within components)
- Component spacing: 6, 8, 12 (card padding, button spacing)
- Section spacing: py-16, py-20, py-24 (desktop), py-12, py-16 (mobile)
- Large gaps: 16, 20, 24 (between major sections)

---

## Page Structure & Sections

### 1. Hero Section (80vh)
- Large background image showing warm, intimate fireside setting or library atmosphere
- Centered headline with compelling value proposition
- Subheadline explaining the concept: "Have fireside chats with history's wisest minds"
- Primary CTA button with blurred background overlay
- Trust indicator: "Join 10,000+ people growing with AI mentorship"

### 2. Interactive Voting Section
- Sticky top bar (or prominent section) with current voting tally
- Grid of 9 wise figure cards (grid-cols-1 md:grid-cols-3 lg:grid-cols-3)
- Each card features: portrait illustration/photo, name, era, one-line bio, vote count, "Vote" button
- Real-time vote counter with smooth animations
- "See Full List" expandable section below top 9

### 3. Concept Explanation Section
- Two-column layout (lg:grid-cols-2)
- Left: Large quote-style text explaining the personal growth angle
- Right: Supporting image showing person in conversation with AI
- Key messaging: "AI for internal growth, not just external productivity"

### 4. Featured Wise Figures Gallery
- Masonry or staggered grid layout (Pinterest-style)
- 6-12 featured profiles with rich cards including:
  - Portrait
  - Name, era, key achievements
  - Sample conversation starter
  - "Start Conversation" CTA
- Hover effects revealing more details

### 5. Integration Guides (Three Audiences)
- Tabbed interface or three distinct columns
- **Beginners**: Large "Try Now" buttons with direct ChatGPT links, visual step-by-step guide
- **Low-Code Devs**: MCP workflow template cards with copy-paste snippets
- **Full-Stack Devs**: API documentation preview with code examples, links to full docs
- Each section has clear iconography and supporting imagery

### 6. Viral Sharing Mechanics
- Prominent "Pass It Forward" section with warm, community-focused messaging
- Pre-populated share templates for Twitter, LinkedIn, email
- Personalized share link generator
- Social proof: "12,847 people have shared this mission"
- Visual representation of sharing impact (network graph or ripple effect)

### 7. Micro-SaaS Pricing
- Clean, centered pricing card with single tier
- Clear feature list for API access
- Stripe payment integration button
- Trust badges and guarantee messaging
- Comparison: Free vs. Premium features

### 8. Social Proof & Testimonials
- 2-3 column grid of user testimonials
- Include user photos, names, roles
- Mix of quotes about personal growth impact
- Featured case study: "How [Person] used [Figure] to solve [Modern Problem]"

### 9. Footer
- Multi-column layout (grid-cols-1 md:grid-cols-4)
- Newsletter signup with growth-focused messaging
- Quick links to GPT library, API docs, about
- Social media links
- Green Elephant branding

---

## Component Library

### Cards
- **Wise Figure Card**: Elevated shadow, rounded-xl, hover lift effect, portrait + info + action
- **Feature Card**: Bordered, p-6, icon + title + description
- **Pricing Card**: Highlighted border, p-8, feature checklist
- **Testimonial Card**: Soft shadow, rounded-lg, quote + attribution

### Buttons
- **Primary CTA**: Large (px-8 py-4), rounded-full, bold text
- **Secondary**: Outlined, rounded-lg, medium (px-6 py-3)
- **Vote Button**: Compact, rounded-md, with vote count badge
- **Share Button**: Icon + text, social platform colors

### Navigation
- Sticky header with logo, main links, "Get Started" CTA
- Mobile: Hamburger menu with full-screen overlay

### Interactive Elements
- Vote counter with animated increment
- Share link copy-to-clipboard with success feedback
- Tab navigation for integration guides
- Expandable FAQ or "Learn More" sections

---

## Images

**Hero Image**: 
- Warm, atmospheric photo of a cozy library or fireside setting
- Soft lighting, inviting ambiance
- Serves as backdrop for hero content

**Section Images**:
- Portrait illustrations or historical photos of wise figures (stylized, consistent treatment)
- Concept visualization showing AI conversation interface
- Developer workflow diagrams for integration sections
- Community/network imagery for viral sharing section

**Image Treatment**:
- Consistent rounded corners (rounded-lg to rounded-xl)
- Subtle shadows and depth
- Warm color grading where applicable

---

## Animations & Interactions

**Minimal, Purposeful Animation**:
- Smooth scroll reveals for sections (fade-in-up)
- Vote button press animation with count increment
- Card hover lifts (translate-y-1)
- Share link copy success pulse
- NO auto-playing carousels or distracting motion

---

## Key UX Considerations

- **Zero-friction voting**: No sign-in required, instant gratification
- **Clear audience pathways**: Beginners see simple buttons, developers see code
- **Viral optimization**: Every section encourages sharing with clear CTAs
- **Trust building**: Consistent use of social proof, testimonials, guarantees
- **Mobile-first**: All interactions optimized for thumb-friendly tapping
- **Progressive disclosure**: Show enough to intrigue, expand for those who want depth