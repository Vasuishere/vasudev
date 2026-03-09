# WIREFRAME — Chemical Manufacturer Website
### Gujarat, India | Export-Focused | Single-Page Site

---

## SITE MAP & NAVIGATION FLOW

```
┌─────────────────────────────────────────────────────────────┐
│                    SINGLE PAGE LAYOUT                       │
│                                                             │
│  [Navbar] ─── sticky, always visible                        │
│     │                                                       │
│     ├── #hero ──────── Hero Section                         │
│     ├── #products ──── Products Catalogue                   │
│     ├── #about ─────── About Us / Company                   │
│     ├── #export ────── Export & Shipping Info                │
│     ├── #certifications  Certificates & Compliance          │
│     ├── #contact ───── Contact & Inquiry Form               │
│     └── Footer ─────── Links, Legal, Social                 │
│                                                             │
│  CONVERSION FUNNELS (every path leads to inquiry):          │
│                                                             │
│  Hero CTA ──────────────────────────────► Contact Form      │
│  Product Card "Request Quote" ──────────► Contact Form      │
│  Export Section CTA ────────────────────► Contact Form      │
│  Certificates "Inquire" ────────────────► Contact Form      │
│  Floating WhatsApp Button ──────────────► WhatsApp Chat     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## SECTION 0: STICKY NAVBAR

### Desktop (≥ 1024px)
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  [LOGO + Company Name]     Home  Products  About  Export  Certs  Contact     │
│                                                                    [CTA BTN] │
│                              ← text nav links →               "Get Quote" ──►│
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Hierarchy:**
- Logo: LEFT — company name + optional tagline ("Chemical Excellence Since 2016")
- Nav Links: CENTER — smooth-scroll anchors
- CTA Button: RIGHT — accent-colored "Get a Quote" button → scrolls to #contact

### Mobile (< 768px)
```
┌──────────────────────────────────┐
│  [LOGO]              [☰ BURGER] │
└──────────────────────────────────┘
        │ (on tap)
        ▼
┌──────────────────────────────────┐
│  Home                            │
│  Products                        │
│  About Us                        │
│  Export Info                     │
│  Certifications                  │
│  Contact                         │
│  ┌────────────────────────────┐  │
│  │      GET A QUOTE  →        │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

**Behavior:**
- Sticky top: z-index 1000, slight drop shadow on scroll
- Hamburger menu slides down as overlay
- Active section highlighted in nav (scroll spy)
- Navbar background: semi-transparent blur on scroll

---

## SECTION 1: HERO

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                     [ SUBTLE TEXTURE BACKGROUND ]                      │ │
│  │                     [ OR INDUSTRIAL PHOTO OVERLAY ]                    │ │
│  │                                                                        │ │
│  │                                                                        │ │
│  │          TRUSTED CHEMICAL MANUFACTURER                                │ │
│  │          FROM GUJARAT, INDIA                                          │ │
│  │          ───────────────────────                                      │ │
│  │          (H1 — large, bold, display font)                             │ │
│  │                                                                        │ │
│  │          Supplying 15+ industrial & specialty chemicals               │ │
│  │          to 30+ countries with ISO-certified quality                   │ │
│  │          (Subheadline — lighter weight, readable font)                │ │
│  │                                                                        │ │
│  │          ┌──────────────────┐   ┌──────────────────────┐              │ │
│  │          │  VIEW PRODUCTS → │   │  REQUEST A QUOTE  →  │              │ │
│  │          │  (secondary)     │   │  (primary / accent)   │              │ │
│  │          └──────────────────┘   └──────────────────────────┘           │ │
│  │                                                                        │ │
│  │   ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐    │ │
│  │   │  ISO 9001  │  │  30+       │  │  15+       │  │  10+ Years │    │ │
│  │   │  Certified │  │  Countries │  │  Products  │  │  Experience│    │ │
│  │   │  [badge]   │  │  [icon]    │  │  [icon]    │  │  [icon]    │    │ │
│  │   └────────────┘  └────────────┘  └────────────┘  └────────────┘    │ │
│  │         ← TRUST BADGES ROW — 4 items, evenly spaced →                │ │
│  │                                                                        │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│                                  │
│   TRUSTED CHEMICAL               │
│   MANUFACTURER FROM              │
│   GUJARAT, INDIA                 │
│   (H1 — stacked, centered)      │
│                                  │
│   Supplying 15+ industrial       │
│   & specialty chemicals to       │
│   30+ countries...               │
│   (Subheadline — centered)       │
│                                  │
│   ┌────────────────────────────┐ │
│   │    REQUEST A QUOTE    →    │ │
│   └────────────────────────────┘ │
│   ┌────────────────────────────┐ │
│   │    VIEW PRODUCTS      →    │ │
│   └────────────────────────────┘ │
│   (CTAs stacked, full width)     │
│                                  │
│   ┌──────────┐  ┌──────────┐    │
│   │ ISO 9001 │  │ 30+      │    │
│   │ Certified│  │ Countries│    │
│   └──────────┘  └──────────┘    │
│   ┌──────────┐  ┌──────────┐    │
│   │ 15+      │  │ 10+ Yrs  │    │
│   │ Products │  │ Exp.     │    │
│   └──────────┘  └──────────┘    │
│   (Trust badges: 2×2 grid)      │
│                                  │
└──────────────────────────────────┘
```

**Content Blocks:**
- H1 Headline: "Trusted Chemical Manufacturer from Gujarat, India"
- Subheadline: Value prop with numbers (countries, products, certifications)
- Primary CTA: "Request a Quote" → scrolls to #contact
- Secondary CTA: "View Products" → scrolls to #products
- Trust Badges: ISO 9001, 30+ Countries, 15+ Products, 10+ Years Experience
- Background: Subtle industrial texture or darkened factory photo with text overlay

**Animation:**
- Headline: fade-in-up on load (0.3s)
- Subheadline: fade-in-up (0.4s delay)
- CTAs: fade-in-up (0.5s delay)
- Trust badges: fade-in (0.6s delay)

---

## SECTION 2: PRODUCTS CATALOGUE

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                        OUR PRODUCTS                                          │
│                        ────────────                                          │
│                   (Section heading — centered)                               │
│                                                                              │
│          Industrial & Specialty Chemicals for Global Markets                 │
│          (Section subheading — centered, lighter)                            │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐    │
│   │  [All] [Acids] [Solvents] [Specialty] [Industrial] [Inorganic]    │    │
│   │                     ← Filter Tabs →                                │    │
│   └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│   │ ┌──────────────┐ │  │ ┌──────────────┐ │  │ ┌──────────────┐ │         │
│   │ │              │ │  │ │              │ │  │ │              │ │         │
│   │ │  [Chemical   │ │  │ │  [Chemical   │ │  │ │  [Chemical   │ │         │
│   │ │   Image /    │ │  │ │   Image /    │ │  │ │   Image /    │ │         │
│   │ │   Icon]      │ │  │ │   Icon]      │ │  │ │   Icon]      │ │         │
│   │ │              │ │  │ │              │ │  │ │              │ │         │
│   │ └──────────────┘ │  │ └──────────────┘ │  │ └──────────────┘ │         │
│   │                  │  │                  │  │                  │         │
│   │  Hydrochloric    │  │  Caustic Soda    │  │  Sulfuric        │         │
│   │  Acid (HCl)      │  │  Flakes (NaOH)  │  │  Acid (H2SO4)   │         │
│   │  ─────────────   │  │  ─────────────   │  │  ─────────────   │         │
│   │  CAS: 7647-01-0  │  │  CAS: 1310-73-2 │  │  CAS: 7664-93-9 │         │
│   │  Grade: Tech/LR  │  │  Grade: Tech     │  │  Grade: CP/LR   │         │
│   │  Packing: Drums  │  │  Packing: Bags   │  │  Packing: Tanker│         │
│   │                  │  │                  │  │                  │         │
│   │  [REQUEST QUOTE] │  │  [REQUEST QUOTE] │  │  [REQUEST QUOTE] │         │
│   │  (accent button) │  │  (accent button) │  │  (accent button) │         │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                              │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│   │  (Card 4)        │  │  (Card 5)        │  │  (Card 6)        │         │
│   │  Methanol        │  │  Toluene         │  │  Acetic Acid     │         │
│   │  ...             │  │  ...             │  │  ...             │         │
│   │  [REQUEST QUOTE] │  │  [REQUEST QUOTE] │  │  [REQUEST QUOTE] │         │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                              │
│   (... rows continue for all 15+ products, 3–4 per row)                     │
│                                                                              │
│              ┌───────────────────────────────┐                               │
│              │  CAN'T FIND WHAT YOU NEED?    │                               │
│              │  CONTACT US FOR CUSTOM ORDERS │                               │
│              │       [INQUIRE NOW →]         │                               │
│              └───────────────────────────────┘                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Product Card Structure (Single Card Detail)
```
┌──────────────────────────┐
│ ┌──────────────────────┐ │
│ │                      │ │  ← Image/icon area (16:10 ratio)
│ │    [Product Visual]  │ │     background: light accent tint
│ │                      │ │
│ └──────────────────────┘ │
│  [CATEGORY TAG]          │  ← Small pill badge ("Acid" / "Solvent")
│                          │
│  Product Name            │  ← H3, bold
│  ──────────────          │
│  CAS Number: XXXXX       │  ← Key specs, small text
│  Grade: Technical / LR   │
│  Packing: Drums / Bags   │
│  Application: 1-line     │
│                          │
│  ┌──────────────────────┐│
│  │   REQUEST QUOTE  →   ││  ← Full-width accent button
│  └──────────────────────┘│     scrolls to #contact with product pre-filled
│                          │
└──────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────────────────────────┐
│                                  │
│       OUR PRODUCTS               │
│                                  │
│  ┌────────────────────────────┐  │
│  │ [All] [Acids] [Solvents]▸ │  │
│  │  ← horizontally scrollable │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │  [Image]                   │  │
│  │  Hydrochloric Acid (HCl)  │  │
│  │  CAS: 7647-01-0           │  │
│  │  Grade: Tech/LR           │  │
│  │  [REQUEST QUOTE]          │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │  (Next card, full width)   │  │
│  └────────────────────────────┘  │
│                                  │
│  (1 card per row on mobile)      │
│                                  │
└──────────────────────────────────┘
```

### Tablet (768px – 1023px)
```
┌──────────────────────────────────────────────┐
│                                              │
│  ┌───────────────────┐  ┌─────────────────┐  │
│  │  Product Card 1   │  │  Product Card 2 │  │
│  └───────────────────┘  └─────────────────┘  │
│  ┌───────────────────┐  ┌─────────────────┐  │
│  │  Product Card 3   │  │  Product Card 4 │  │
│  └───────────────────┘  └─────────────────┘  │
│                                              │
│  (2 cards per row on tablet)                 │
│                                              │
└──────────────────────────────────────────────┘
```

**Content Blocks:**
- Section Title: "Our Products"
- Section Subtitle: "Industrial & Specialty Chemicals for Global Markets"
- Filter Tabs: All, Acids, Solvents, Specialty, Industrial, Inorganic
- 15+ Product Cards (see list below)
- Bottom CTA: "Can't find what you need? Contact us."

**Product List (15+ realistic):**
1. Hydrochloric Acid (HCl)
2. Caustic Soda Flakes (NaOH)
3. Sulfuric Acid (H₂SO₄)
4. Methanol (CH₃OH)
5. Toluene (C₇H₈)
6. Acetic Acid (CH₃COOH)
7. Ethanol (C₂H₅OH)
8. Isopropyl Alcohol (IPA)
9. Sodium Hypochlorite (NaOCl)
10. Calcium Carbonate (CaCO₃)
11. Citric Acid (C₆H₈O₇)
12. Formic Acid (HCOOH)
13. Phosphoric Acid (H₃PO₄)
14. Benzene (C₆H₆)
15. Xylene (C₈H₁₀)
16. Acetone (C₃H₆O)

**Animation:**
- Cards: staggered fade-in-up on scroll (50ms delay between each)
- Filter tabs: instant re-filter with fade transition
- Hover: card lifts with subtle box-shadow increase

---

## SECTION 3: ABOUT US / COMPANY

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                         ABOUT OUR COMPANY                                    │
│                         ─────────────────                                    │
│                                                                              │
│   ┌───────────────────────────────┐  ┌─────────────────────────────────┐    │
│   │                               │  │                                 │    │
│   │                               │  │  Who We Are                     │    │
│   │    [COMPANY / FACTORY         │  │  ─────────                      │    │
│   │     PHOTO PLACEHOLDER]        │  │                                 │    │
│   │                               │  │  Founded in Gujarat — India's   │    │
│   │    (Industrial setting,       │  │  largest chemical manufacturing │    │
│   │     lab, or warehouse)        │  │  hub — we have spent a decade   │    │
│   │                               │  │  building a reputation for      │    │
│   │                               │  │  quality, reliability, and      │    │
│   │                               │  │  global service excellence.     │    │
│   │                               │  │                                 │    │
│   │                               │  │  Our ISO-certified facility     │    │
│   │                               │  │  produces 15+ chemicals with    │    │
│   │                               │  │  consistent quality standards   │    │
│   │                               │  │  trusted by buyers in 30+      │    │
│   │                               │  │  countries.                     │    │
│   │                               │  │                                 │    │
│   └───────────────────────────────┘  └─────────────────────────────────┘    │
│                                                                              │
│   ┌──── WHY CHOOSE US ─── 4 STRENGTH CARDS ──────────────────────────┐      │
│   │                                                                   │      │
│   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────┐ │      │
│   │  │  [icon]      │ │  [icon]      │ │  [icon]      │ │ [icon]  │ │      │
│   │  │  ISO         │ │  Export      │ │  Competitive │ │ Custom  │ │      │
│   │  │  Certified   │ │  Ready       │ │  Pricing     │ │ Packing │ │      │
│   │  │  Quality     │ │  Supply      │ │  Guaranteed  │ │ Options │ │      │
│   │  │             │ │  Chain       │ │              │ │         │ │      │
│   │  │  Brief text  │ │  Brief text  │ │  Brief text  │ │ Brief   │ │      │
│   │  │  about this  │ │  about this  │ │  about this  │ │ text    │ │      │
│   │  └──────────────┘ └──────────────┘ └──────────────┘ └─────────┘ │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ┌──── STATS ROW ─── Numbers that build trust ──────────────────────┐      │
│   │                                                                   │      │
│   │     10+              30+              15+             5000+       │      │
│   │     Years of         Countries        Products        Metric Tons│      │
│   │     Experience       Served           Available       Monthly    │      │
│   │                                                                   │      │
│   │  (Large numbers — animated count-up on scroll into view)          │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│                                  │
│     ABOUT OUR COMPANY            │
│                                  │
│  ┌────────────────────────────┐  │
│  │  [Company Photo]           │  │
│  │  (full width)              │  │
│  └────────────────────────────┘  │
│                                  │
│  Who We Are                      │
│  ─────────                       │
│  Founded in Gujarat...           │
│  (paragraph text)                │
│                                  │
│  ┌────────────────────────────┐  │
│  │ [icon] ISO Certified      │  │
│  │ Brief desc...             │  │
│  └────────────────────────────┘  │
│  ┌────────────────────────────┐  │
│  │ [icon] Export Ready       │  │
│  │ Brief desc...             │  │
│  └────────────────────────────┘  │
│  (Strength cards: 1 col stack)   │
│                                  │
│   ┌──────────┐  ┌──────────┐    │
│   │  10+     │  │  30+     │    │
│   │  Years   │  │  Countries│    │
│   └──────────┘  └──────────┘    │
│   ┌──────────┐  ┌──────────┐    │
│   │  15+     │  │  5000+   │    │
│   │ Products │  │  MT/mo   │    │
│   └──────────┘  └──────────┘    │
│   (Stats: 2×2 grid)             │
│                                  │
└──────────────────────────────────┘
```

**Content Blocks:**
- Section Title: "About Our Company"
- Image: Company/factory photo placeholder (left on desktop)
- Text Block: Company story, founding, mission (right on desktop)
- 4 Strength Cards: ISO Certified, Export Ready, Competitive Pricing, Custom Packing
- Stats Row: 10+ Years, 30+ Countries, 15+ Products, 5000+ MT/month

**Animation:**
- Image: fade-in-left
- Text: fade-in-right
- Strength cards: staggered fade-in-up
- Stats numbers: count-up animation triggered on scroll

---

## SECTION 4: EXPORT & SHIPPING INFO

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                    GLOBAL EXPORT & SHIPPING                                  │
│                    ────────────────────────                                  │
│          Reliable supply chain from Gujarat to the world                     │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐    │
│   │                                                                     │    │
│   │                    [ WORLD MAP ILLUSTRATION ]                       │    │
│   │                    (showing Gujarat → export routes)                │    │
│   │                    (dots on USA, Middle East, SE Asia)              │    │
│   │                    (or a styled illustration placeholder)           │    │
│   │                                                                     │    │
│   └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│   ┌─────────── GUJARAT ADVANTAGE ────────────────────────────────────┐      │
│   │                                                                   │      │
│   │  Strategically located near Kandla, Mundra, and Hazira ports     │      │
│   │  — Gujarat handles 40% of India's chemical exports.              │      │
│   │                                                                   │      │
│   │  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │      │
│   │  │ [icon]   │  │ [icon]   │  │ [icon]   │                       │      │
│   │  │ Kandla   │  │ Mundra   │  │ Hazira   │                       │      │
│   │  │ Port     │  │ Port     │  │ Port     │                       │      │
│   │  │ ~120 km  │  │ ~180 km  │  │ ~250 km  │                       │      │
│   │  └──────────┘  └──────────┘  └──────────┘                       │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ┌─────────── PACKAGING OPTIONS ────────────────────────────────────┐      │
│   │                                                                   │      │
│   │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────┐ │      │
│   │  │  [icon]      │ │  [icon]      │ │  [icon]      │ │ [icon]  │ │      │
│   │  │  HDPE Drums  │ │  PP Bags     │ │  IBC Tanks   │ │ Tanker  │ │      │
│   │  │  50–250 kg   │ │  25–50 kg    │ │  1000 L      │ │ Bulk    │ │      │
│   │  │  UN Rated    │ │  Lined       │ │  Reusable    │ │ Custom  │ │      │
│   │  └──────────────┘ └──────────────┘ └──────────────┘ └─────────┘ │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ┌─────────── SHIPPING MODES ───────────────────────────────────────┐      │
│   │                                                                   │      │
│   │  ┌─────────────────────┐  ┌─────────────────────┐               │      │
│   │  │  🚢 Sea Freight     │  │  ✈️  Air Freight     │               │      │
│   │  │  FCL & LCL          │  │  Urgent / samples   │               │      │
│   │  │  20ft / 40ft        │  │  Express delivery    │               │      │
│   │  │  containers         │  │                      │               │      │
│   │  └─────────────────────┘  └─────────────────────┘               │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ┌─────────── INCOTERMS SUPPORTED ──────────────────────────────────┐      │
│   │                                                                   │      │
│   │    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐       │      │
│   │    │ FOB │  │ CIF │  │ CFR │  │ EXW │  │ DDP │  │ DAP │       │      │
│   │    └─────┘  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘       │      │
│   │    (pill/tag badges, accent-outlined)                            │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│              ┌─────────────────────────────────────┐                         │
│              │    GET A SHIPPING QUOTE  →          │                         │
│              │    (accent CTA button)              │                         │
│              └─────────────────────────────────────┘                         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│                                  │
│   GLOBAL EXPORT & SHIPPING       │
│                                  │
│  ┌────────────────────────────┐  │
│  │  [Map illustration]       │  │
│  │  (simplified for mobile)  │  │
│  └────────────────────────────┘  │
│                                  │
│  Gujarat Advantage               │
│  Near Kandla, Mundra, Hazira     │
│  ports...                        │
│                                  │
│  ┌──────────┐  ┌──────────┐     │
│  │ HDPE     │  │ PP Bags  │     │
│  │ Drums    │  │ 25-50kg  │     │
│  └──────────┘  └──────────┘     │
│  ┌──────────┐  ┌──────────┐     │
│  │ IBC Tank │  │ Tanker   │     │
│  │ 1000 L   │  │ Bulk     │     │
│  └──────────┘  └──────────┘     │
│  (Packaging: 2×2 grid)          │
│                                  │
│  🚢 Sea Freight                  │
│  FCL & LCL, 20ft/40ft           │
│                                  │
│  ✈️ Air Freight                   │
│  Urgent / samples                │
│  (Shipping: stacked)             │
│                                  │
│  [FOB] [CIF] [CFR]              │
│  [EXW] [DDP] [DAP]              │
│  (Incoterms: pill wrap)          │
│                                  │
│  ┌────────────────────────────┐  │
│  │  GET A SHIPPING QUOTE  →  │  │
│  └────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘
```

**Content Blocks:**
- Section Title: "Global Export & Shipping"
- Subtitle: "Reliable supply chain from Gujarat to the world"
- Map/Illustration: World map or stylized route graphic
- Gujarat Advantage: Text + 3 nearby port cards
- Packaging: 4 options (HDPE Drums, PP Bags, IBC Tanks, Tanker/Bulk)
- Shipping Modes: Sea Freight (FCL/LCL), Air Freight
- Incoterms: FOB, CIF, CFR, EXW, DDP, DAP (pill badges)
- CTA: "Get a Shipping Quote" → #contact

**Animation:**
- Map: fade-in on scroll
- Port cards: staggered fade-in
- Packaging cards: staggered fade-in-up
- Incoterms pills: slide-in from left

---

## SECTION 5: CERTIFICATES & COMPLIANCE

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                  CERTIFICATIONS & COMPLIANCE                                 │
│                  ───────────────────────────                                 │
│               Quality you can verify. Standards you can trust.               │
│                                                                              │
│   ┌───────────────────────────────────────────────────────────────────┐      │
│   │                                                                   │      │
│   │  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐  │      │
│   │  │                  │  │                  │  │                │  │      │
│   │  │  ┌────────────┐  │  │  ┌────────────┐  │  │ ┌────────────┐│  │      │
│   │  │  │            │  │  │  │            │  │  │ │            ││  │      │
│   │  │  │  ISO 9001  │  │  │  │  ISO 14001 │  │  │ │  REACH     ││  │      │
│   │  │  │  BADGE /   │  │  │  │  BADGE /   │  │  │ │  READY     ││  │      │
│   │  │  │  SEAL IMG  │  │  │  │  SEAL IMG  │  │  │ │  BADGE     ││  │      │
│   │  │  │            │  │  │  │            │  │  │ │            ││  │      │
│   │  │  └────────────┘  │  │  └────────────┘  │  │ └────────────┘│  │      │
│   │  │                  │  │                  │  │                │  │      │
│   │  │  ISO 9001:2015   │  │  ISO 14001:2015  │  │ REACH Ready   │  │      │
│   │  │  Quality Mgmt    │  │  Environmental   │  │ EU Compliant  │  │      │
│   │  │  System          │  │  Mgmt System     │  │ Registration  │  │      │
│   │  │                  │  │                  │  │                │  │      │
│   │  │  Certified by    │  │  Certified by    │  │ Documentation │  │      │
│   │  │  [Cert Body]     │  │  [Cert Body]     │  │ Available     │  │      │
│   │  │                  │  │                  │  │                │  │      │
│   │  └──────────────────┘  └──────────────────┘  └────────────────┘  │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ┌───────────────────────────────────────────────────────────────────┐      │
│   │                  QUALITY TESTING                                  │      │
│   │                  ───────────────                                  │      │
│   │                                                                   │      │
│   │  Every batch is tested for:                                      │      │
│   │                                                                   │      │
│   │  ✓ Purity Analysis         ✓ Heavy Metal Testing                │      │
│   │  ✓ pH & Density            ✓ Moisture Content                   │      │
│   │  ✓ Color & Appearance      ✓ Packaging Integrity                │      │
│   │                                                                   │      │
│   │  ┌─────────────────────────────────────────────────────────┐     │      │
│   │  │  Certificate of Analysis (COA) provided with every      │     │      │
│   │  │  shipment. MSDS / SDS available on request.             │     │      │
│   │  └─────────────────────────────────────────────────────────┘     │      │
│   │              (info box — subtle accent border)                    │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│              ┌─────────────────────────────────────┐                         │
│              │  REQUEST COA / MSDS DOCUMENTS  →    │                         │
│              │  (accent CTA → #contact)            │                         │
│              └─────────────────────────────────────┘                         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│                                  │
│  CERTIFICATIONS & COMPLIANCE     │
│                                  │
│  ┌────────────────────────────┐  │
│  │  [ISO 9001 Badge]         │  │
│  │  ISO 9001:2015            │  │
│  │  Quality Management       │  │
│  └────────────────────────────┘  │
│  ┌────────────────────────────┐  │
│  │  [ISO 14001 Badge]        │  │
│  │  ISO 14001:2015           │  │
│  │  Environmental Mgmt       │  │
│  └────────────────────────────┘  │
│  ┌────────────────────────────┐  │
│  │  [REACH Badge]            │  │
│  │  REACH Ready              │  │
│  │  EU Compliant             │  │
│  └────────────────────────────┘  │
│  (Cert cards: stacked)           │
│                                  │
│  Quality Testing                 │
│  ✓ Purity Analysis              │
│  ✓ pH & Density                 │
│  ✓ Color & Appearance           │
│  ✓ Heavy Metal Testing          │
│  ✓ Moisture Content             │
│  ✓ Packaging Integrity          │
│                                  │
│  COA provided with every         │
│  shipment. MSDS available.       │
│                                  │
│  ┌────────────────────────────┐  │
│  │  REQUEST COA / MSDS    →  │  │
│  └────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘
```

**Content Blocks:**
- Section Title: "Certifications & Compliance"
- Subtitle: "Quality you can verify. Standards you can trust."
- 3 Certification Cards: ISO 9001, ISO 14001, REACH Ready
- Quality Testing Checklist: 6 items
- Info Box: COA + MSDS statement
- CTA: "Request COA / MSDS Documents" → #contact

**Animation:**
- Cert badges: scale-in (0 → 1) on scroll
- Checklist items: staggered fade-in with checkmark animation
- Info box: fade-in-up

---

## SECTION 6: CONTACT & INQUIRY FORM

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                    GET IN TOUCH                                               │
│                    ────────────                                               │
│          Ready to place an order? Have questions? We respond within 24 hrs.  │
│                                                                              │
│   ┌────────────────────────────────┐  ┌──────────────────────────────────┐   │
│   │                                │  │                                  │   │
│   │        INQUIRY FORM            │  │      CONTACT DETAILS             │   │
│   │        ────────────            │  │      ───────────────             │   │
│   │                                │  │                                  │   │
│   │  Full Name *                   │  │  📧 Email                        │   │
│   │  ┌──────────────────────────┐  │  │  export@chemcompany.com         │   │
│   │  │                          │  │  │                                  │   │
│   │  └──────────────────────────┘  │  │  📞 Phone                       │   │
│   │                                │  │  +91 98765 43210                 │   │
│   │  Email Address *               │  │                                  │   │
│   │  ┌──────────────────────────┐  │  │  💬 WhatsApp                    │   │
│   │  │                          │  │  │  +91 98765 43210                 │   │
│   │  └──────────────────────────┘  │  │  (Click to chat)                │   │
│   │                                │  │                                  │   │
│   │  Phone Number *                │  │  📍 Address                      │   │
│   │  ┌──────────────────────────┐  │  │  GIDC Industrial Estate,        │   │
│   │  │  +[country] [number]     │  │  │  Ahmedabad, Gujarat,            │   │
│   │  └──────────────────────────┘  │  │  India - 382XXX                 │   │
│   │                                │  │                                  │   │
│   │  Company Name                  │  │  🕐 Business Hours              │   │
│   │  ┌──────────────────────────┐  │  │  Mon–Sat: 9:00 AM – 6:00 PM   │   │
│   │  │                          │  │  │  (IST, GMT+5:30)               │   │
│   │  └──────────────────────────┘  │  │                                  │   │
│   │                                │  │  ──────────────────────          │   │
│   │  Country *                     │  │                                  │   │
│   │  ┌──────────────────────────┐  │  │  ┌────────────────────────┐     │   │
│   │  │  Select your country  ▼  │  │  │  │                        │     │   │
│   │  └──────────────────────────┘  │  │  │   [GOOGLE MAP EMBED    │     │   │
│   │                                │  │  │    OR STATIC MAP        │     │   │
│   │  Product of Interest *         │  │  │    IMAGE]               │     │   │
│   │  ┌──────────────────────────┐  │  │  │                        │     │   │
│   │  │  Select product       ▼  │  │  │  └────────────────────────┘     │   │
│   │  └──────────────────────────┘  │  │                                  │   │
│   │                                │  │                                  │   │
│   │  Quantity Required             │  │                                  │   │
│   │  ┌──────────────────────────┐  │  │                                  │   │
│   │  │  e.g. 5 MT, 10 drums    │  │  │                                  │   │
│   │  └──────────────────────────┘  │  │                                  │   │
│   │                                │  │                                  │   │
│   │  Message *                     │  │                                  │   │
│   │  ┌──────────────────────────┐  │  │                                  │   │
│   │  │                          │  │  │                                  │   │
│   │  │                          │  │  │                                  │   │
│   │  │  (textarea, 4 rows)     │  │  │                                  │   │
│   │  │                          │  │  │                                  │   │
│   │  └──────────────────────────┘  │  │                                  │   │
│   │                                │  │                                  │   │
│   │  ┌──────────────────────────┐  │  │                                  │   │
│   │  │   SUBMIT INQUIRY    →   │  │  │                                  │   │
│   │  │   (full-width accent)   │  │  │                                  │   │
│   │  └──────────────────────────┘  │  │                                  │   │
│   │                                │  │                                  │   │
│   │  (inline validation errors     │  │                                  │   │
│   │   shown below each field)      │  │                                  │   │
│   │                                │  │                                  │   │
│   └────────────────────────────────┘  └──────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Inline Validation Pattern
```
  Full Name *
  ┌──────────────────────────┐
  │                          │  ← default: neutral border
  └──────────────────────────┘

  Full Name *
  ┌──────────────────────────┐
  │                          │  ← error: red border
  └──────────────────────────┘
  ⚠ Please enter your full name    ← inline error message (red text, below field)

  Full Name *
  ┌──────────────────────────┐
  │  John Smith              │  ← valid: green border / checkmark
  └──────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│                                  │
│     GET IN TOUCH                 │
│                                  │
│  CONTACT DETAILS                 │
│  📧 export@chemcompany.com       │
│  📞 +91 98765 43210              │
│  💬 WhatsApp: Click to chat      │
│  📍 GIDC, Ahmedabad, Gujarat     │
│  (Details shown FIRST on mobile) │
│                                  │
│  ──────────────────────          │
│                                  │
│  INQUIRY FORM                    │
│                                  │
│  Full Name *                     │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  Email Address *                 │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  Phone Number *                  │
│  ┌────────────────────────────┐  │
│  │  +[code] [number]         │  │
│  └────────────────────────────┘  │
│                                  │
│  Company Name                    │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  Country *                       │
│  ┌────────────────────────────┐  │
│  │  Select your country    ▼ │  │
│  └────────────────────────────┘  │
│  (native <select> on mobile)     │
│                                  │
│  Product of Interest *           │
│  ┌────────────────────────────┐  │
│  │  Select product         ▼ │  │
│  └────────────────────────────┘  │
│                                  │
│  Quantity Required               │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  Message *                       │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │  (textarea)               │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │    SUBMIT INQUIRY     →   │  │
│  └────────────────────────────┘  │
│  (full-width, min 48px height)   │
│                                  │
└──────────────────────────────────┘
```

**Form Fields:**
| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | text | Yes | Min 2 chars |
| Email | email | Yes | Email format |
| Phone | tel | Yes | Min 7 digits |
| Company | text | No | — |
| Country | select | Yes | Must select |
| Product | select | Yes | Must select |
| Quantity | text | No | — |
| Message | textarea | Yes | Min 10 chars |

**Contact Details:**
- Email: export@chemcompany.com
- Phone: +91 98765 43210
- WhatsApp: Same number, click-to-chat link
- Address: GIDC Industrial Estate, Ahmedabad, Gujarat
- Hours: Mon–Sat 9 AM – 6 PM IST

**Animation:**
- Form fields: subtle fade-in on scroll
- Submit button: hover state (slight scale + shadow)
- Success state: form replaced with "Thank you" message + fade transition

---

## SECTION 7: FOOTER

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────────┐
│  (dark background — deep navy or charcoal)                                   │
│                                                                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│   │              │  │              │  │              │  │              │   │
│   │  COMPANY     │  │  QUICK LINKS │  │  PRODUCTS    │  │  NEWSLETTER  │   │
│   │  ─────────   │  │  ───────────  │  │  ─────────   │  │  ──────────  │   │
│   │              │  │              │  │              │  │              │   │
│   │  [Logo]      │  │  Home        │  │  HCl         │  │  Stay updated│   │
│   │              │  │  Products    │  │  NaOH        │  │  on new      │   │
│   │  Short       │  │  About Us   │  │  H2SO4       │  │  products &  │   │
│   │  company     │  │  Export Info │  │  Methanol    │  │  offers.     │   │
│   │  tagline.    │  │  Certs      │  │  Toluene     │  │              │   │
│   │              │  │  Contact    │  │  Acetic Acid │  │  ┌────────┐  │   │
│   │  ┌────────┐  │  │              │  │  View All → │  │  │ Email  │  │   │
│   │  │ [in]   │  │  │              │  │              │  │  └────────┘  │   │
│   │  │ [tw]   │  │  │              │  │              │  │  [SUBSCRIBE] │   │
│   │  │ [fb]   │  │  │              │  │              │  │              │   │
│   │  └────────┘  │  │              │  │              │  │              │   │
│   │  (social)    │  │              │  │              │  │              │   │
│   │              │  │              │  │              │  │              │   │
│   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│   ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│   © 2024 [Company Name]. All rights reserved.     Privacy Policy | Terms    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│  (dark background)               │
│                                  │
│  [Logo]                          │
│  Short company tagline.          │
│  [LinkedIn] [Twitter] [Facebook] │
│                                  │
│  QUICK LINKS                     │
│  Home · Products · About ·       │
│  Export · Certs · Contact        │
│                                  │
│  NEWSLETTER                      │
│  ┌────────────────────────────┐  │
│  │  Enter your email          │  │
│  └────────────────────────────┘  │
│  [SUBSCRIBE]                     │
│                                  │
│  ───────────────────────         │
│  © 2024 Company Name.           │
│  Privacy Policy | Terms          │
│                                  │
└──────────────────────────────────┘
```

**Content Blocks:**
- 4 Columns (desktop): Company Info, Quick Links, Products, Newsletter
- Social Links: LinkedIn, Twitter/X, Facebook
- Legal: Copyright, Privacy Policy, Terms of Service
- Newsletter: Email input + Subscribe button

---

## FLOATING ELEMENTS

### WhatsApp Floating Button (all pages)
```
                                                    ┌──────────┐
                                                    │          │
  (Fixed bottom-right,                              │  [WA]    │
   z-index 999,                                     │  icon    │
   always visible,                                  │  48×48   │
   green branded color)                             │          │
                                                    └──────────┘
                                                        ▲
                                                        │
                                              bottom: 24px
                                              right: 24px
```

### Back to Top Button (appears after scrolling 300px)
```
                                                    ┌──────────┐
                                        (above WA)  │    ↑     │
                                                    │  Back to │
                                                    │   Top    │
                                                    └──────────┘
                                                    ┌──────────┐
                                                    │   [WA]   │
                                                    └──────────┘
```

---

## RESPONSIVE BREAKPOINTS SUMMARY

| Breakpoint | Layout | Nav | Products Grid | Stats | Forms |
|---|---|---|---|---|---|
| < 480px | Single col | Hamburger | 1 col | 2×2 | Full width |
| 480–767px | Single col+ | Hamburger | 1 col | 2×2 | Full width |
| 768–1023px | Two col | Hamburger | 2 col | 4 inline | Full width |
| 1024–1279px | Multi col | Horizontal | 3 col | 4 inline | 2-col layout |
| ≥ 1280px | Multi col | Horizontal | 4 col | 4 inline | 2-col layout |

---

## VISUAL DESIGN TOKENS (Reference for Build Phase)

| Token | Value | Usage |
|---|---|---|
| Accent Color | Deep Navy (#1a365d) or Steel Blue (#2c5282) | CTAs, links, borders, highlights |
| Accent Hover | Lighter shade | Button hover states |
| Background | Off-white (#f7f8fa) | Page base |
| Surface | White (#ffffff) | Cards, form containers |
| Text Primary | Dark charcoal (#1a202c) | Headlines, body |
| Text Secondary | Medium gray (#4a5568) | Subtitles, labels |
| Text Muted | Light gray (#a0aec0) | Placeholders, captions |
| Error | Red (#e53e3e) | Form validation |
| Success | Green (#38a169) | Form validation |
| Border | Light gray (#e2e8f0) | Card borders, dividers |
| Shadow SM | 0 1px 3px rgba(0,0,0,0.1) | Cards resting |
| Shadow MD | 0 4px 6px rgba(0,0,0,0.1) | Cards hover |
| Shadow LG | 0 10px 15px rgba(0,0,0,0.1) | Navbar, modals |
| Border Radius | 8px | Cards, buttons |
| Font – Display | "DM Serif Display" or "Playfair Display" | H1, H2 headings |
| Font – Body | "Plus Jakarta Sans" or "Source Sans 3" | Body, labels, nav |
| Spacing Unit | 8px base | Multiples: 8, 16, 24, 32, 48, 64 |

---

## SCROLL & ANIMATION MAP

| Element | Trigger | Animation | Duration | Delay |
|---|---|---|---|---|
| Hero headline | Page load | fade-in-up | 0.6s | 0s |
| Hero subtitle | Page load | fade-in-up | 0.6s | 0.15s |
| Hero CTAs | Page load | fade-in-up | 0.6s | 0.3s |
| Trust badges | Page load | fade-in | 0.6s | 0.45s |
| Product cards | Scroll into view | fade-in-up | 0.5s | stagger 50ms |
| Filter tab click | Click | instant filter + fade | 0.3s | 0s |
| About image | Scroll into view | fade-in-left | 0.6s | 0s |
| About text | Scroll into view | fade-in-right | 0.6s | 0.1s |
| Stats numbers | Scroll into view | count-up | 2s | 0s |
| Strength cards | Scroll into view | fade-in-up | 0.5s | stagger 100ms |
| Export map | Scroll into view | fade-in | 0.8s | 0s |
| Cert badges | Scroll into view | scale-in | 0.5s | stagger 150ms |
| Form fields | Scroll into view | fade-in | 0.4s | stagger 50ms |
| Navbar | Scroll > 50px | Background opacity + shadow | 0.3s | 0s |
| WhatsApp btn | Always | Pulse every 5s | 0.5s | — |
| Back to top | Scroll > 300px | fade-in | 0.3s | 0s |

---

## CONVERSION TOUCHPOINTS (Every Path → Inquiry)

```
User's Journey:
                                                                        
  ARRIVES AT SITE                                                       
       │                                                                
       ├── Sees Hero ──────────── "Request a Quote" CTA ──────────┐    
       │                                                           │    
       ├── Browses Products ───── "Request Quote" on card ────────┤    
       │                                                           │    
       ├── Reads About Us ─────── "Contact Us" link ──────────────┤    
       │                                                           │    
       ├── Checks Export Info ─── "Get Shipping Quote" CTA ───────┤    
       │                                                           │    
       ├── Views Certificates ─── "Request COA/MSDS" CTA ────────┤    
       │                                                           │    
       ├── Clicks WhatsApp ─────── Direct WhatsApp chat ──────────┤    
       │                                                           │    
       └── Scrolls to Footer ──── Email / Phone / Social ─────────┤    
                                                                   │    
                                                                   ▼    
                                                          ┌──────────────┐
                                                          │   INQUIRY    │
                                                          │   SUBMITTED  │
                                                          └──────────────┘
```

---

## CHECKLIST BEFORE CODING

- [x] All 6 sections wireframed (Hero, Products, About, Export, Certs, Contact)
- [x] Footer wireframed
- [x] Navigation (desktop + mobile hamburger) wireframed
- [x] Floating elements (WhatsApp, Back-to-top) defined
- [x] Every section has a CTA leading to inquiry form
- [x] Mobile layouts defined for every section
- [x] Tablet breakpoint considered
- [x] Form fields and validation rules defined
- [x] 15+ products listed with categories
- [x] Animation behavior documented
- [x] Color tokens and font choices defined
- [x] Responsive breakpoints summarized
- [x] Conversion flow mapped

---

*Wireframe complete. Ready for Step 2: Implementation.*
