# AZM Nexus Limited — Corporate Website

**Project:** Corporate website for AZM Nexus Limited, a diversified Nigerian holding company.  
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React Icons  
**Purpose:** Public-facing brand presence showcasing the company's portfolio, operations, team, and contact channels.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Architecture & Design Decisions](#architecture--design-decisions)
5. [Configuration Files](#configuration-files)
6. [Content Management (content.config.ts)](#content-management-contentconfigts)
7. [Components](#components)
   - [ErrorBoundary](#errorboundary)
   - [NavBar](#navbar)
   - [HeroSection](#herosection)
   - [PortfolioSection](#portfoliosection)
   - [OperationsSection](#operationssection)
   - [TickerSection](#tickersection)
   - [TeamSection](#teamsection)
   - [ContactSection](#contactsection)
   - [Footer](#footer)
8. [Styling & Theming](#styling--theming)
9. [Routing](#routing)
10. [Performance Considerations](#performance-considerations)
11. [Deployment](#deployment)
12. [Future Improvements](#future-improvements)

---

## Project Overview

AZM Nexus Limited is a diversified holding company headquartered in Lagos, Nigeria. The website serves as a digital storefront that communicates the company's brand identity — **Diversified. Execution-Driven. National.** — and provides information on its six core business sectors:

| Sector | Description |
|---|---|
| Technology Services | Digital infrastructure and enterprise solutions |
| Digital Health | Healthcare delivery via digital platforms |
| Agriculture & Agribusiness | Sustainable farming and agricultural processing |
| General Trade & Household Retail | Retail operations and household goods distribution |
| Bulk Agricultural Trade | Large-scale agricultural commodity logistics |
| P2P Digital Asset Trading | Peer-to-peer digital asset exchange platforms |

The site is a single-page application with anchor-based navigation, built with modern React and Next.js conventions.

---

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd azmnexus

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with hot module replacement (HMR).

### Build

```bash
npm run build
```

Produces an optimized production build in `.next/`.

### Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

Uses Next.js ESLint configuration (`next/core-web-vitals`, `next/typescript`).

---

## Project Structure

```
azmnexus/
├── app/
│   ├── favicon.ico             # Browser tab icon
│   ├── globals.css             # Global styles / Tailwind directives
│   ├── layout.tsx              # Root layout (metadata, fonts, ErrorBoundary)
│   └── page.tsx                # Home page (composes all sections)
├── components/
│   ├── ContactSection.tsx      # Contact form + contact details
│   ├── ErrorBoundary.tsx       # React error boundary (class component)
│   ├── Footer.tsx              # Site footer with links
│   ├── HeroSection.tsx         # Hero banner with stats
│   ├── NavBar.tsx              # Top navigation bar
│   ├── OperationsSection.tsx   # Operational progress cards
│   ├── PortfolioSection.tsx    # Business portfolio cards
│   ├── TeamSection.tsx         # Team member cards
│   └── TickerSection.tsx       # Infinite scrolling ticker
├── content/
│   └── content.config.ts       # All site content as typed constants
├── public/
│   └── images/
│       ├── azm-logo.png
│       ├── Agriculture_and_Agribusiness.jpeg
│       ├── Bulk_Agricultural_Trade.jpeg
│       ├── Digital_Health.jpeg
│       ├── General_Trade_and_Household_Retail.jpeg
│       ├── Hero_Image.jpeg
│       ├── P2P_Digital_Asset_Trading.jpeg
│       └── Technology_Services.jpeg
├── scripts/                    # (empty / reserved for build scripts)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration (Tailwind)
├── tailwind.config.ts          # Tailwind CSS theme customization
└── tsconfig.json               # TypeScript configuration
```

---

## Architecture & Design Decisions

### 1. Single-Page Application (SPA) with Anchor Navigation
All sections are rendered on a single `/` route. Navigation links use `#about`, `#portfolio`, etc. to scroll to the corresponding section `id`. This was chosen over multi-page routing because the site is a compact brand landing page.

### 2. Client-Side Rendering for Interactive Components
All components are marked `"use client"` because they use:
- `useState` / `useEffect` hooks (NavBar mobile menu, ContactSection form state)
- `motion` from Framer Motion (scroll-triggered animations)
- `onError` handlers on `<Image>` (fallback for broken images)

The root `layout.tsx` remains a server component and handles metadata, fonts, and the error boundary wrapper.

### 3. Centralized Content Configuration
All text, copy, stats, and configuration live in `content/content.config.ts`. This decouples content from components, making it easy to update text without touching UI code. The file exports typed interfaces (`PortfolioCard`, `TeamMember`, etc.) and named constant objects (`HERO_CONTENT`, `PORTFOLIO_CONTENT`, `CONTACT_CONTENT`).

### 4. Graceful Image Fallbacks
Every `<Image>` component uses an `onError` callback and a `useState` flag (`imgError`). When an image fails to load, a solid fallback color (`#1D4A52`, the brand primary) is displayed. This ensures the layout never breaks due to missing assets.

### 5. Accessible Error Handling
The `ContactSection` form submission uses Formspree as a serverless form backend. On success, a confirmation UI replaces the form. On error, a message is displayed. All form fields include inline validation with error messages.

### 6. Animation Strategy
Framer Motion drives all scroll-triggered animations:
- Elements fade up (`opacity: 0, y: 40 → opacity: 1, y: 0`) on entering the viewport.
- Delays are staggered (`index * 0.1s`) for grid items.
- The ticker uses `animate={{ x: ["0%", "-50%"] }}` with infinite repeat for a seamless marquee effect.
- Navigation CTA buttons use `whileHover={{ scale: 1.02 }}` for subtle hover feedback.

---

## Configuration Files

### `next.config.mjs`
```js
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
```
Allows loading images from Unsplash (reserved for future profile photos). Local images in `/public` are served directly.

### `tailwind.config.ts`
Defines the project's design tokens:
- **Font:** `Plus Jakarta Sans` (via CSS variable `--font-plus-jakarta-sans`)
- **Colors:** `primary (#1D4A52)`, `accent (#2EB8A6)`, `text-primary`, `text-secondary`, `section-alt`, `border`
- **Border radius:** `card (10px)`, `btn (6px)`
- **Shadows:** `card`, `contact`, `operations`
- **Padding:** `section (80px)`

### `tsconfig.json`
Standard Next.js TypeScript configuration with:
- Path alias `@/*` mapping to project root
- Bundler module resolution
- Strict mode enabled
- Next.js plugin for type-aware linting

### `postcss.config.mjs`
Minimal PostCSS config loading only the `tailwindcss` plugin.

### `.eslintrc.json`
Extends `next/core-web-vitals` and `next/typescript`.

---

## Content Management (`content/content.config.ts`)

This file is the single source of truth for all copy on the site.

### Exported Interfaces

| Interface | Fields | Purpose |
|---|---|---|
| `StatBlock` | `value`, `label` | Hero statistics |
| `PortfolioCard` | `title`, `description`, `imageUrl`, `badge`, `iconName` | Portfolio grid cards |
| `OperationsCard` | `title`, `description`, `status` | Operations progress cards |
| `TeamMember` | `name`, `role`, `bio`, `imageUrl` | Team member cards |
| `ContactDetail` | `icon`, `label`, `value`, `href?` | Contact information entries |

### Exported Content Objects

| Constant | Type | Used By |
|---|---|---|
| `COMMON_CONTENT` | `{wordmark, copyright}` | Footer, NavBar |
| `NAV_CONTENT` | `{ctaText, links[]}` | NavBar |
| `HERO_CONTENT` | `{label, headline, subtext, ctaPrimary, ctaSecondary, stats[], backgroundImage}` | HeroSection |
| `PORTFOLIO_CONTENT` | `{label, title, subtext, cards[]}` | PortfolioSection |
| `OPERATIONS_CONTENT` | `{label, title, subtext, legend, cards[]}` | OperationsSection |
| `TICKER_CONTENT` | `string[]` | TickerSection |
| `TEAM_CONTENT` | `{label, title, subtext, members[], footerText}` | TeamSection |
| `CONTACT_CONTENT` | `{title, subtext, details[], form}` | ContactSection |
| `FOOTER_LINKS` | `{label, href}[]` | Footer |

**To update site content**, edit only `content/content.config.ts`. No component code changes are necessary.

---

## Components

### ErrorBoundary

- **Type:** Class component (`React.Component<Props, State>`)
- **Location:** `components/ErrorBoundary.tsx`
- **Purpose:** Catches uncaught JavaScript errors anywhere in the component tree below the layout. Displays a branded fallback UI with a "Refresh Page" button.
- **Key detail:** Implemented as a class component because React error boundaries require `getDerivedStateFromError()` / `componentDidCatch()` lifecycle methods, which are not available in functional components.

### NavBar

- **Type:** Client component
- **Location:** `components/NavBar.tsx`
- **Features:**
  - Fixed top navigation with white background and bottom border
  - Desktop: horizontal links + CTA button
  - Mobile: hamburger menu → full-screen drawer with backdrop overlay
  - Close on Escape key
  - Close on backdrop click
  - Logo image linking to `#`
  - Hover underline animation on nav links
  - Smooth scroll CTA button with `whileHover` scale

### HeroSection

- **Type:** Client component
- **Location:** `components/HeroSection.tsx`
- **Features:**
  - Full-viewport-height banner with background image
  - Dark overlay (`opacity 78%` of primary color)
  - Animated entry (staggered: label → headline → subtext → buttons → stats)
  - Two CTAs: "Explore Our Portfolio" (accent) and "Contact Our Team" (outline)
  - Three stats: 6 sectors, national footprint, active status
  - Responsive layout: stacks vertically on mobile
  - Image error fallback to solid `#1D4A52`

### PortfolioSection

- **Type:** Client component
- **Location:** `components/PortfolioSection.tsx`
- **Features:**
  - 3-column grid (responsive: 1→2→3 columns)
  - 6 portfolio cards, each with:
    - Background image with dark overlay
    - Lucide icon (dynamically resolved from `iconName`)
    - Title, description, badge
  - Hover effect: overlay darkens
  - Scroll-triggered animation with stagger delay
  - Image error fallback per card

### OperationsSection

- **Type:** Client component
- **Location:** `components/OperationsSection.tsx`
- **Features:**
  - 2-column grid of operational progress cards
  - Left accent border (border-l-4)
  - Status badge: "Active" (green/accent) or "In Progress" (primary/dark)
  - Legend explaining statuses
  - Hover lift effect (`-translate-y-1`)
  - Scroll-triggered animation with stagger delay

### TickerSection

- **Type:** Client component
- **Location:** `components/TickerSection.tsx`
- **Features:**
  - Full-width horizontal bar with primary background
  - Infinite scrolling text using Framer Motion `animate`
  - Content duplicated to ensure seamless loop
  - Diamond separator between items
  - 25-second full cycle duration
  - Low height (52px) as a visual divider between sections

### TeamSection

- **Type:** Client component
- **Location:** `components/TeamSection.tsx`
- **Features:**
  - 4-column grid (responsive: 1→2→4 columns)
  - Circular avatar with three states:
    1. Image loaded → displays photo
    2. Image URL present but broken → solid fallback
    3. No image URL → `User` icon placeholder
  - Name, role (accent color), and bio displayed below avatar
  - Footer italic text for "more coming soon"
  - Scroll-triggered animation with stagger delay

### ContactSection

- **Type:** Client component
- **Location:** `components/ContactSection.tsx`
- **Features:**
  - Split layout: contact info (left) + form (right)
  - Contact info: title, subtitle, details (MapPin, Mail, Phone icons) with clickable links
  - Contact form with 5 fields: Full Name, Email, Company, Inquiry Type (dropdown), Message
  - Client-side validation with per-field error messages
  - Formspree backend submission (`POST` to `https://formspree.io/f/mgobkzgy`)
  - Success state: `CheckCircle` icon, confirmation message, "Send Another Inquiry" button
  - Loading state: button text changes to "Sending...", interaction disabled
  - Error state: error message displayed above submit button
  - All fields clear errors on edit
  - Fully responsive

### Footer

- **Type:** Client component
- **Location:** `components/Footer.tsx`
- **Features:**
  - Three-column layout: logo (left), copyright (center), nav links (right)
  - Responsive: stacks vertically on mobile
  - Logo links to `#`
  - Links: About, Portfolio, Contact
  - Border-top separator

---

## Styling & Theming

### Design Tokens (Tailwind)

| Token | Value | Usage |
|---|---|---|
| `primary` | `#1D4A52` | Dark teal — backgrounds, overlays, buttons |
| `accent` | `#2EB8A6` | Mint/teal — CTAs, highlights, badges |
| `text-primary` | `#0D1F22` | Nearly black — headings, body |
| `text-secondary` | `#4A6670` | Muted gray-teal — subtext, descriptions |
| `section-alt` | `#F4F8F8` | Light off-white — alternate section backgrounds |
| `border` | `#E0EEEE` | Light teal-gray — borders, dividers |
| `font-sans` | `Plus Jakarta Sans` | Variable font from Google Fonts |
| `rounded-card` | `10px` | Card border radius |
| `rounded-btn` | `6px` | Button border radius |
| `shadow-card` | `0 4px 16px rgba(0,0,0,0.07)` | Subtle card shadow |
| `shadow-contact` | `0 8px 32px rgba(0,0,0,0.12)` | Contact card shadow |
| `shadow-operations` | `0 4px 16px rgba(0,0,0,0.06)` | Operations card shadow |
| `py-section` | `80px` | Section vertical padding |

### Global CSS (`globals.css`)
- Tailwind base/components/utilities directives
- CSS custom properties for foreground and background RGB values
- Smooth scrolling on `html`
- Font family set via CSS variable injected in layout

### Loading Strategy
- **Plus Jakarta Sans:** Loaded via Next.js `next/font/google` with `400, 500, 600, 700` weights and `latin` subset. The `variable` font strategy enables Tailwind integration via `var(--font-plus-jakarta-sans)`.
- **Lucide Icons:** Tree-shaken by import — only used icons are included in the bundle.
- **Framer Motion:** Included as a runtime dependency for animations; tree-shaking is limited (Framer Motion is largely side-effectful but is pruned by Next.js Webpack).

---

## Routing

The application uses a single route:

| Path | File | Content |
|---|---|---|
| `/` | `app/page.tsx` | All sections: NavBar, Hero, Portfolio, Operations, Ticker, Team, Contact, Footer |

### Anchor Navigation
Sections are identified by `id` attributes:
- `#about` → `HeroSection`
- `#portfolio` → `PortfolioSection`
- `#operations` → `OperationsSection`
- `#team` → `TeamSection`
- `#contact` → `ContactSection`

The root `html` element has `scroll-behavior: smooth`, enabling native smooth scrolling when clicking anchor links.

---

## Performance Considerations

1. **Image Optimization:** Next.js `<Image>` component provides automatic optimization, lazy loading (except `priority` on hero), and responsive sizing.
2. **Priority Loading:** Hero section background image uses `priority` for immediate LCP (Largest Contentful Paint) rendering.
3. **Animation Performance:** Framer Motion uses GPU-accelerated CSS transforms (`opacity`, `transform: translate`) rather than layout-triggering properties.
4. **Bundle Size:** Only used Lucide icons are imported. Framer Motion is the largest dependency (~32 KB gzipped) and is shared across all components that use it.
5. **TypeScript Strict Mode:** Enabled in `tsconfig.json` to catch type errors at build time.
6. **Error Resilience:** ErrorBoundary prevents full-page crashes; image error fallbacks prevent layout shifts.

---

## Deployment

### Build Command
```bash
npm run build
```

### Deploy Targets
The project is ready for deployment to any platform that supports Next.js:

- **Vercel** (recommended — zero-config)
- **Netlify** (with Next.js plugin)
- **Self-hosted Node.js** (via `npm start` after build)

### Environment Variables
No environment variables are currently required. The Formspree endpoint for the contact form is hardcoded. For production, consider:
- Moving the Formspree ID to an environment variable (`NEXT_PUBLIC_FORMSPREE_ID`)
- Adding analytics (e.g., `NEXT_PUBLIC_GA_ID`)

---

## Future Improvements

1. **Replace placeholder team member data** with actual names, bios, and profile photos.
2. **Move Formspree endpoint** to an environment variable for configurable deployments.
3. **Add a blog/news section** (separate route) for company announcements.
4. **Implement i18n** for expanding to other Nigerian languages (Hausa, Yoruba, Igbo).
5. **Add automated tests** (Jest + React Testing Library for components, Playwright for E2E).
6. **Integrate analytics** (Google Analytics 4 or Plausible) for visitor tracking.
7. **Add SEO enhancements** — structured data (JSON-LD), sitemap.xml, robots.txt, Open Graph images.
8. **Implement theme toggle** (light/dark mode) if brand guidelines evolve.
9. **Optimize images further** — convert to WebP/AVIF and add blur placeholder previews.
10. **Accessibility audit** — ensure WCAG 2.1 AA compliance (keyboard navigation, ARIA labels, color contrast).

---

*Documentation generated for AZM Nexus Limited corporate website — Next.js 14 App Router stack.*