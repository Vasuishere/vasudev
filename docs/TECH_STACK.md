# Tech Stack — VasuDev Chemicals Website

## Architecture
- **Multi-page website** — 12+ pages with file-based routing
- **Framework**: Next.js 14 (App Router) — React-based, SSG/SSR hybrid
- **Language**: TypeScript — type safety across components and data
- **Styling**: Tailwind CSS 3.4 — utility-first, responsive, design-system friendly

## Pages
| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, featured products, trust signals, CTA |
| About | `/about` | Company story, mission, team, milestones |
| Products | `/products` | Full catalogue with category filtering |
| Product Detail | `/products/[slug]` | Individual product specs, CAS, applications, CTA |
| Services | `/services` | Manufacturing, custom synthesis, blending, R&D |
| Export & Logistics | `/export` | Shipping modes, ports, incoterms, packaging |
| Quality & Certifications | `/quality` | ISO, REACH, lab testing, COA/MSDS |
| Industries Served | `/industries` | Pharma, textile, paint, food, agriculture, etc. |
| Contact | `/contact` | Inquiry form, WhatsApp, email, map, hours |
| FAQ | `/faq` | Common buyer questions (ordering, MOQ, lead time) |
| Privacy Policy | `/privacy` | GDPR/legal compliance |
| Terms of Service | `/terms` | Legal terms for global trade |

## Frontend
- **Next.js 14** — App Router with Server Components by default
  - File-based routing (`src/app/` directory)
  - Built-in image optimization (`next/image`)
  - Metadata API for per-page SEO
  - Static Site Generation (SSG) for product pages
  - Server Components for zero-JS sections
- **React 18** — Component-based UI
- **Tailwind CSS 3.4** — Utility-first styling
  - Custom color palette via `tailwind.config.ts`
  - Responsive breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280)
  - Custom animations for scroll reveals and hover states
- **Lucide React** — Consistent SVG icon library
- **Framer Motion** — Smooth scroll-triggered animations

## Fonts
- **Inter** (body text) — via `next/font/google` (self-hosted, no layout shift)
- **Playfair Display** (headings) — via `next/font/google`
- Automatic font optimization by Next.js

## Design System
- **Color Palette**:
  - Primary: Deep Navy `#0f3460`
  - Primary Light: `#1a4f8b`
  - Secondary: Teal `#16697a`
  - Background: `#fafafa`
  - Surface: `#ffffff`
  - Text: `#1a1a2e`
  - Text Muted: `#64748b`
  - Border: `#e2e8f0`
  - Error: `#dc2626`
  - Success: `#16a34a`
  - WhatsApp: `#25d366`
- **Border Radius**: 8px (standard), 12px (cards), 16px (sections)
- **Shadows**: 3-tier system (sm, md, lg)
- **Spacing**: Tailwind default (4px base, 8px scale)

## Backend / Integrations
- **Web3Forms** — Contact form submissions (free, no server needed)
- **Google Analytics 4** — Traffic and conversion tracking
- **WhatsApp Business API** — Click-to-chat for direct inquiries
- **Future**: PostgreSQL + Prisma for product catalog CMS

## Dev Tooling
- **TypeScript** — Static type checking
- **ESLint** — Code quality
- **PostCSS** — Tailwind CSS processing
- **next/font** — Self-hosted Google Fonts (no external requests)

## Project Structure
```
vasudev/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── page.tsx            # Home
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx        # Product catalogue
│   │   │   └── [slug]/page.tsx # Product detail
│   │   ├── services/page.tsx
│   │   ├── export/page.tsx
│   │   ├── quality/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, WhatsAppFloat
│   │   ├── ui/                 # Button, SectionHeading, Cards
│   │   └── sections/           # Hero, Stats, CTA, Testimonials
│   └── data/                   # Product data, navigation, company info
├── public/                     # Static assets
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Hosting
- **Vercel** (recommended) — Zero-config Next.js deployment
- **Netlify** — Alternative with `@netlify/plugin-nextjs`
- **Self-hosted** — Node.js server or Docker container

## SEO
- Per-page `metadata` objects via Next.js Metadata API
- Open Graph + Twitter Card tags on every page
- JSON-LD structured data (Organization, Product, FAQPage)
- Auto-generated sitemap via `next-sitemap`
- Semantic HTML with proper heading hierarchy
- Canonical URLs on all pages
- Image alt text on all images
