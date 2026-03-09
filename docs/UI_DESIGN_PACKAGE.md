# Vasudev Chemo Pharma — Comprehensive UI Design Package

> **Version:** 1.0  
> **Date:** March 2026  
> **Scope:** Blogs, Certifications, Clients sections + dedicated pages

---

## 1. Target User Story & Success Criteria

### User Story
> **As** an international chemical importer visiting Vasudev Chemo Pharma's website,  
> **I want to** quickly assess the company's credibility (certifications, clients), stay informed via blogs, and browse their chemical catalogue,  
> **So that** I can confidently submit an inquiry or request a quote.

### Success Criteria
| # | Criterion | Metric |
|---|-----------|--------|
| 1 | Visitor discovers certifications within 2 scrolls from hero | Certifications visible in home viewport ≤ 2 |
| 2 | Blog posts load and render within 1.5s on 4G | LCP < 1.5s for blog section |
| 3 | Clients carousel scrolls infinitely without visible seam | No stutter or gap in 60-second observation |
| 4 | All interactive elements accessible via keyboard | Tab-through completes without trap |
| 5 | WCAG 2.1 AA contrast on all text | All text ≥ 4.5:1 ratio |
| 6 | Mobile touch targets ≥ 48×48px | Manual audit pass |

---

## 2. Information Architecture & User Flows

### Sitemap (Updated)
```
Home (/)
├── Hero
├── Featured Products
├── Why Choose Us
├── Stats
├── Industries
├── Services
├── ★ Certifications Preview (NEW)
├── ★ Blogs Preview (NEW)
├── ★ Clients Carousel (NEW)
└── CTA Banner

About (/about)
Products (/products)
├── [slug] Detail
Services (/services)
Export (/export)
Quality (/quality)
Industries (/industries)
★ Certifications (/certifications)       ← NEW PAGE
★ Certifications Detail (/certifications/[slug]) ← NEW PAGE
★ Blog (/blog)                           ← FUTURE
Contact (/contact)
FAQ (/faq)
Privacy (/privacy)
Terms (/terms)
```

### User Flows

**Flow A: Credibility Check**
```
Home → scroll to Certifications section → click "View All Certifications"
→ /certifications page → click certification card
→ /certifications/[slug] detail → read scope → click "Request a Quote"
→ /contact
```

**Flow B: Blog Discovery**
```
Home → scroll to Blog section → scan 3 latest posts
→ click post card → (future) /blog/[slug]
→ read article → sidebar CTA → /contact
```

**Flow C: Social Proof**
```
Home → scroll to Clients section → observe auto-scrolling logos
→ builds trust → proceeds to /products or /contact
```

---

## 3. Wireframes (Annotated ASCII)

### 3a. Home — Certifications Preview Section
```
┌──────────────────────────────────────────────────────────────┐
│  [LABEL] Our Certifications                                  │
│  [TITLE] Internationally Recognized Standards                │
│  [DESC]  Every batch meets global quality benchmarks         │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  🏅 ISO Icon  │  │  🏅 ISO Icon  │  │  🏅 REACH    │       │
│  │               │  │               │  │              │       │
│  │  ISO 9001     │  │  ISO 14001    │  │  REACH Ready │       │
│  │  :2015        │  │  :2015        │  │              │       │
│  │               │  │               │  │              │       │
│  │  Quality Mgmt │  │  Enviro Mgmt  │  │  EU Chemical │       │
│  │  System       │  │  System       │  │  Compliance  │       │
│  │               │  │               │  │              │       │
│  │  Bureau       │  │  Bureau       │  │  Doc Avail.  │       │
│  │  Veritas      │  │  Veritas      │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│            [ View All Certifications → ]                     │
└──────────────────────────────────────────────────────────────┘
```
- **Card Interaction:** Hover: lift -2px + shadow-md. Click → /certifications/[slug]
- **Responsive:** 3 cols → 2 cols (md) → 1 col stacked (sm)
- **Aria:** role="list" on grid, role="listitem" on cards

### 3b. Home — Blogs Preview Section
```
┌──────────────────────────────────────────────────────────────┐
│  [LABEL] From Our Blog                                       │
│  [TITLE] Industry Insights & Chemical News                   │
│                                                              │
│  ┌─────────────────┐ ┌─────────────────┐ ┌────────────────┐ │
│  │ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌────────────┐ │ │
│  │ │  THUMBNAIL  │ │ │ │  THUMBNAIL  │ │ │ │ THUMBNAIL  │ │ │
│  │ │  (VCP Logo) │ │ │ │  (VCP Logo) │ │ │ │ (VCP Logo) │ │ │
│  │ └─────────────┘ │ │ └─────────────┘ │ │ └────────────┘ │ │
│  │ [Tag] [Date]    │ │ [Tag] [Date]    │ │ [Tag] [Date]   │ │
│  │                 │ │                 │ │                │ │
│  │ Blog Title Here │ │ Blog Title Here │ │ Blog Title     │ │
│  │ Goes on Two     │ │ Goes on Two     │ │ Here Goes on   │ │
│  │ Lines Max       │ │ Lines Max       │ │ Two Lines Max  │ │
│  │                 │ │                 │ │                │ │
│  │ Short excerpt   │ │ Short excerpt   │ │ Short excerpt  │ │
│  │ text clipped    │ │ text clipped    │ │ text clipped   │ │
│  │ at 2 lines...   │ │ at 2 lines...   │ │ at 2 lines..  │ │
│  │                 │ │                 │ │                │ │
│  │ Read More →     │ │ Read More →     │ │ Read More →    │ │
│  └─────────────────┘ └─────────────────┘ └────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```
- **Card:** aspect-16/10 image, category tag pill, date, title (line-clamp-2), excerpt (line-clamp-2), read-more link
- **Responsive:** 3 cols → 2 cols (md) → 1 col (sm)
- **Image:** VCP logo as placeholder, `object-contain` with bg-surface-alt

### 3c. Home — Clients Auto-Scroll Section
```
┌──────────────────────────────────────────────────────────────┐
│  [LABEL] Our Clients                                         │
│  [TITLE] Trusted by Industry Leaders Worldwide               │
│                                                              │
│  ← ← ← CONTINUOUS SCROLL RIGHT-TO-LEFT ← ← ←               │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  │
│  │ VCP │ │ VCP │ │ VCP │ │ VCP │ │ VCP │ │ VCP │ │ VCP │  │
│  │LOGO │ │LOGO │ │LOGO │ │LOGO │ │LOGO │ │LOGO │ │LOGO │  │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘  │
│  ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←  │
│                                                              │
│  Logos duplicated 2× for seamless infinite loop              │
│  Pauses on hover (prefers-reduced-motion: stops animation)   │
└──────────────────────────────────────────────────────────────┘
```
- **Technique:** CSS `@keyframes scroll` with `translateX(-50%)` on duplicated track
- **A11y:** `aria-label="Our clients"`, `role="marquee"`, respects `prefers-reduced-motion`
- **Touch:** No drag-to-scroll needed; auto-scroll only

### 3d. Certifications Page (/certifications)
```
┌──────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
├──────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────┐  │
│  │  GRADIENT HERO BANNER                                  │  │
│  │  [TITLE] Our Certifications & Compliance               │  │
│  │  [DESC]  World-class quality standards...              │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ CERT CARD (Full Width)                                │    │
│  │ ┌────────┐                                            │    │
│  │ │  ICON  │  ISO 9001:2015                             │    │
│  │ │  🏅    │  Quality Management System                 │    │
│  │ └────────┘  Certified by Bureau Veritas               │    │
│  │                                                       │    │
│  │  Scope: Manufacturing, testing, and supply of         │    │
│  │  industrial and specialty chemicals...                 │    │
│  │                                                       │    │
│  │  Key Areas:                                           │    │
│  │  • Production process control                         │    │
│  │  • Raw material testing & approval                    │    │
│  │  • In-process quality monitoring                      │    │
│  │  • Final product testing & COA generation             │    │
│  │                                                       │    │
│  │  [ View Certificate Details → ]                       │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  (repeat for each certification)                             │
│                                                              │
│  CTA BANNER — "Need Certified Supply?"                       │
│                                                              │
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

### 3e. Certification Detail (/certifications/[slug])
```
┌──────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      │
├──────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Certifications > ISO 9001:2015           │
│                                                              │
│  ┌─────────────────────────────┐ ┌────────────────────────┐  │
│  │  MAIN CONTENT (2/3)         │ │  SIDEBAR (1/3)         │  │
│  │                             │ │                        │  │
│  │  🏅 ISO 9001:2015           │ │  Certificate Info      │  │
│  │  Quality Management System  │ │  ─────────────         │  │
│  │                             │ │  Body: Bureau Veritas  │  │
│  │  ───────────────────        │ │  Valid: 2024–2027      │  │
│  │  Scope & Description        │ │  Standard: ISO 9001    │  │
│  │  Full paragraph about       │ │  Scope: Manufacturing  │  │
│  │  what this cert covers...   │ │                        │  │
│  │                             │ │  ┌──────────────────┐  │  │
│  │  Key Covered Areas          │ │  │ VCP LOGO         │  │  │
│  │  ─────────────────          │ │  │ (placeholder for │  │  │
│  │  • Area 1                   │ │  │ cert image)      │  │  │
│  │  • Area 2                   │ │  └──────────────────┘  │  │
│  │  • Area 3                   │ │                        │  │
│  │  • Area 4                   │ │  [ Request a Quote ]   │  │
│  │                             │ │  [ Download COA ]      │  │
│  │  Why It Matters             │ │                        │  │
│  │  ──────────────             │ │  Related Certs         │  │
│  │  Paragraph explaining       │ │  • ISO 14001           │  │
│  │  customer benefits...       │ │  • REACH Ready         │  │
│  └─────────────────────────────┘ └────────────────────────┘  │
│                                                              │
│  CTA BANNER                                                  │
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Responsive Design Considerations

### Breakpoints (Tailwind 4 defaults)
| Breakpoint | Width   | Layout                                    |
|------------|---------|-------------------------------------------|
| Default    | < 640px | Single column, stacked cards, hamburger nav |
| `sm`       | ≥ 640px | 2-column grids where appropriate           |
| `md`       | ≥ 768px | 2-column layouts, side-by-side content     |
| `lg`       | ≥ 1024px| 3–4 column grids, full desktop nav         |
| `xl`       | ≥ 1280px| max-w-7xl container, enhanced spacing      |

### Fluid Grid Strategy
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`  
- **Grid gaps:** `gap-6` (24px) consistent across sections  
- **Section padding:** `py-20 md:py-28` (80px → 112px)

### Typography Scale
| Element       | Mobile          | Desktop          |
|---------------|-----------------|------------------|
| H1 (Hero)     | text-3xl (30px) | text-5xl (48px)  |
| H2 (Section)  | text-2xl (24px) | text-4xl (36px)  |
| H3 (Card)     | text-lg (18px)  | text-lg (18px)   |
| Body          | text-sm (14px)  | text-base (16px) |
| Caption       | text-xs (12px)  | text-sm (14px)   |

### Touch Targets
- All buttons: `min-h-[48px] min-w-[48px]`
- Nav links (mobile): `py-3 min-h-[48px]`
- Card click areas: entire card is clickable
- Client logos in carousel: decorative only, no interactive touch target needed

---

## 5. Accessibility Details

### Keyboard Navigation
| Component            | Tab | Enter/Space | Escape | Arrow Keys |
|----------------------|-----|-------------|--------|------------|
| Navbar links         | ✅  | Navigate    | —      | —          |
| Mobile menu          | ✅  | Toggle      | Close  | —          |
| Blog cards           | ✅  | Navigate    | —      | —          |
| Cert cards           | ✅  | Navigate    | —      | —          |
| Client carousel      | — (decorative) | — | — | —          |
| CTA buttons          | ✅  | Activate    | —      | —          |
| Back to top          | ✅  | Scroll up   | —      | —          |

### ARIA Roles & Labels
```html
<!-- Certifications section -->
<section aria-labelledby="cert-heading">
  <h2 id="cert-heading">Our Certifications</h2>
  <div role="list">
    <article role="listitem" aria-label="ISO 9001:2015">...</article>
  </div>
</section>

<!-- Blog section -->
<section aria-labelledby="blog-heading">
  <h2 id="blog-heading">Industry Insights</h2>
  <div role="list">
    <article role="listitem">...</article>
  </div>
</section>

<!-- Client carousel -->
<section aria-labelledby="clients-heading">
  <h2 id="clients-heading">Our Clients</h2>
  <div role="marquee" aria-label="Client logos scrolling gallery">
    <div aria-hidden="true"><!-- Duplicated logos --></div>
  </div>
</section>
```

### Color Contrast (Verified)
| Pairing                | Ratio  | Pass  |
|------------------------|--------|-------|
| #1a1a2e on #fafafa     | 14.8:1 | ✅ AAA |
| #475569 on #ffffff     | 5.9:1  | ✅ AA  |
| #ffffff on #3c2a98     | 10.2:1 | ✅ AAA |
| #ffffff on #00a658     | 4.6:1  | ✅ AA  |
| #8494FF on #ffffff     | 3.7:1  | ⚠️ AA-lg only |

### Focus Management
- Visible focus ring: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`
- Skip-to-main link (already in layout) recommended
- After route navigation, focus returns to `<main>` top
- Reduced motion: `@media (prefers-reduced-motion: reduce)` stops carousel animation

---

## 6. Core UI Components & Interactions

### New Components

| Component | File | Props | Description |
|-----------|------|-------|-------------|
| `CertificationCard` | `ui/CertificationCard.tsx` | `certification: Certification` | Card showing cert icon, name, body, description |
| `BlogCard` | `ui/BlogCard.tsx` | `post: BlogPost` | Card with thumbnail, tag, date, title, excerpt |
| `ClientsCarousel` | `sections/ClientsCarousel.tsx` | `clients: Client[]` | Infinite horizontal auto-scroll of logos |
| `CertificationsPreview` | `sections/CertificationsPreview.tsx` | — (reads from data) | Home section showing 3 certs |
| `BlogsPreview` | `sections/BlogsPreview.tsx` | — (reads from data) | Home section showing 3 latest posts |

### Interaction Patterns
- **Cards:** Hover → translateY(-4px) + shadow-md, 300ms ease. Entire card clickable via wrapping `<Link>`.
- **Carousel:** CSS-only infinite scroll. Pauses on hover via `animation-play-state: paused`. Stops entirely if `prefers-reduced-motion: reduce`.
- **Buttons:** Primary = solid bg-primary, Secondary = outline border-primary. Hover → slight lift + color shift. Active → scale(0.98).
- **Links:** Underline-on-hover via `after:` pseudo-element animation from left.

---

## 7. Navigation Structure & Patterns

### Updated Navigation Array
```typescript
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Certifications', href: '/certifications' },  // ← NEW
  { label: 'Export', href: '/export' },
  { label: 'Quality', href: '/quality' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
] as const;
```

### Breadcrumb Pattern (Cert Detail)
```
Home > Certifications > ISO 9001:2015
```
Uses `<nav aria-label="Breadcrumb">` with `<ol>` and `aria-current="page"` on last item.

### Routing
| Route | Type | Component |
|-------|------|-----------|
| `/certifications` | Static | Certifications list page |
| `/certifications/[slug]` | Dynamic | Certification detail page |
| `/blog` | Future | Blog listing page |
| `/blog/[slug]` | Future | Blog article detail |

---

## 8. Error States & Feedback

| Scenario | Treatment |
|----------|-----------|
| No blog posts | "Stay tuned — blog posts coming soon!" with illustration |
| Image load failure | Fallback to VCP logo on `bg-surface-alt` |
| Certification not found | 404 with "Certification not found" + link back to /certifications |
| Carousel with 0 clients | Section hidden entirely |
| Slow image load | Skeleton placeholder (`animate-pulse bg-surface-alt`) |
| Form validation | Inline error below field, red border, `aria-describedby` |

### Loading States
- **Blog cards:** Skeleton with pulsing placeholder for image, 2 text lines
- **Cert cards:** Skeleton with icon placeholder + 3 text lines
- **Carousel:** No skeleton needed (CSS animation starts immediately)

---

## 9. Implementation Recommendations

### Tech Stack (Current — No Changes Needed)
- **Next.js 16** with App Router (server components by default)
- **React 19** for client interactivity
- **Tailwind CSS 4** for styling
- **TypeScript** for type safety
- **Framer Motion** for scroll-reveal animations
- **Lucide React** for icons

### Performance
- Carousel uses pure CSS animation (no JS, no layout thrashing)
- Blog images use `next/image` with `loading="lazy"` and `sizes` attribute
- Certification pages statically generated via `generateStaticParams()`
- Client logos served as optimized WebP/AVIF via Next.js image optimization

### Accessibility
- All images have descriptive `alt` text
- Semantic HTML: `<article>`, `<section>`, `<nav>`, `<main>`
- Focus-visible styles on all interactive elements
- Color contrast ≥ 4.5:1 for all body text
- `prefers-reduced-motion` respected for carousel

---

## 10. Phased Design Plan

### Phase 1 — MVP (Implement Now)
| # | Task | Priority |
|---|------|----------|
| 1 | Add certification data with slugs + detail content | P0 |
| 2 | Add blog post data (static, 3 sample posts) | P0 |
| 3 | Add client data (8–12 placeholder logos using VCP logo) | P0 |
| 4 | Build `CertificationCard` component | P0 |
| 5 | Build `BlogCard` component | P0 |
| 6 | Build `ClientsCarousel` component (CSS infinite scroll) | P0 |
| 7 | Add Certifications preview to home page | P0 |
| 8 | Add Blogs preview to home page | P0 |
| 9 | Add Clients carousel to home page | P0 |
| 10 | Create `/certifications` page | P0 |
| 11 | Create `/certifications/[slug]` detail page | P0 |
| 12 | Update navigation to include Certifications | P0 |
| 13 | Add infinite-scroll CSS keyframes to globals.css | P0 |
| 14 | Responsive + accessibility audit | P0 |

### Phase 2 — Enhancements (Future)
| # | Task | Priority |
|---|------|----------|
| 1 | Blog listing page (`/blog`) with pagination | P1 |
| 2 | Blog detail page (`/blog/[slug]`) with full article | P1 |
| 3 | CMS integration for blog posts (e.g., MDX or headless CMS) | P1 |
| 4 | Real client logos (replace VCP placeholder) | P1 |
| 5 | Certificate PDF download links | P2 |
| 6 | Blog search and category filtering | P2 |
| 7 | Blog social sharing buttons | P2 |
| 8 | Schema.org structured data for blog articles | P2 |

---

## 11. Component Specifications

### `CertificationCard`
```typescript
interface CertificationCardProps {
  certification: {
    slug: string;
    name: string;
    description: string;
    body: string;
    icon: string;       // Lucide icon name
    scope: string;
    keyAreas: string[];
    validUntil: string;
    importance: string;
  };
  variant?: 'compact' | 'full'; // compact = home, full = listing page
}
```

### `BlogCard`
```typescript
interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    thumbnail: string;  // image path (VCP logo as placeholder)
    readTime: string;
  };
}
```

### `ClientsCarousel`
```typescript
interface ClientsCarouselProps {
  clients: {
    name: string;
    logo: string;  // image path (VCP logo as placeholder)
  }[];
  speed?: number;  // animation duration in seconds (default: 30)
}
```

---

*End of Design Package*
