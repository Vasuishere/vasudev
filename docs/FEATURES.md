# Features — VasuDev Chemicals Website

## MVP Features (Currently Implemented)

### 1. Sticky Navigation Bar
- **Description**: Fixed top navbar with logo, section links, and "Get a Quote" CTA
- **Acceptance Criteria**:
  - ✅ Stays fixed on scroll with blur backdrop
  - ✅ Adds shadow on scroll (past 50px)
  - ✅ Active section highlighted via scroll spy
  - ✅ "Get a Quote" CTA scrolls to #contact
  - ✅ Hamburger menu on mobile (< 768px) with slide-down overlay
  - ✅ Menu closes on link tap
- **Priority**: MVP
- **Dependencies**: None

### 2. Hero Section
- **Description**: Full-width hero with headline, subtitle, dual CTAs, and trust badges
- **Acceptance Criteria**:
  - ✅ Gradient background with subtle SVG texture overlay
  - ✅ H1 headline with accent-colored keyword
  - ✅ "View Our Products" (secondary) + "Send an Inquiry" (primary outline) CTAs
  - ✅ 4 trust badges: ISO 9001, 8+ Years, 15+ Products, Global Exports
  - ✅ Responsive: CTAs stack on mobile, badges go 2×2 grid
- **Priority**: MVP
- **Dependencies**: None

### 3. Product Catalogue with Filtering
- **Description**: Grid of 16 product cards with category filter tabs
- **Acceptance Criteria**:
  - ✅ 3 filter tabs: All Products, Industrial, Specialty
  - ✅ Clicking a filter re-renders only matching products
  - ✅ Each card shows: icon, name, CAS number, description, application tags, "Request Quote" button
  - ✅ "Request Quote" scrolls to #contact with product dropdown pre-selected
  - ✅ Cards: 1-col mobile, 2-col tablet, 3-4 col desktop
  - ✅ Hover: card lifts with shadow increase
- **Priority**: MVP
- **Dependencies**: Product data (JS array)

### 4. About Us Section
- **Description**: Company story, 4 strength highlights, and stats panel
- **Acceptance Criteria**:
  - ✅ Two-column layout: text left, stats visual right (stacks on mobile)
  - ✅ 4 strength items: ISO Certified, Quality Control, Export Expertise, Responsive Communication
  - ✅ Stats panel: 15+ Products, 8+ Years, 30+ Countries, ISO certified
  - ✅ Gradient card with SVG texture for stats
- **Priority**: MVP
- **Dependencies**: None

### 5. Export & Shipping Section
- **Description**: 4 info cards covering regions, shipping, documentation, and incoterms
- **Acceptance Criteria**:
  - ✅ 2×2 grid of export cards (stacks to 1-col on mobile)
  - ✅ Regions: USA, Middle East, Southeast Asia, Europe, Far East, Latin America
  - ✅ Shipping: Sea Freight, Air Freight, FCL, LCL
  - ✅ Documentation: COA, MSDS, Packing List, Invoice, Bill of Lading
  - ✅ Incoterms: FOB, CIF, EXW, CFR, DDP (pill badges)
  - ✅ Hover: subtle lift effect on cards
- **Priority**: MVP
- **Dependencies**: None

### 6. Certifications & Compliance Section
- **Description**: 3 certification cards showing ISO, REACH, and lab testing credentials
- **Acceptance Criteria**:
  - ✅ 3-column grid (stacks on mobile)
  - ✅ Cards: ISO 9001:2015, REACH Readiness, Lab Testing & Traceability
  - ✅ Each card has icon, title, and description
  - ✅ Centered layout with section subtitle
- **Priority**: MVP
- **Dependencies**: None

### 7. Contact & Inquiry Form
- **Description**: Full inquiry form with inline validation + contact info sidebar
- **Acceptance Criteria**:
  - ✅ Form fields: Full Name*, Company Name*, Country* (dropdown), Email*, Phone, Product (dropdown), Quantity, Message
  - ✅ Country dropdown populated with 160+ countries
  - ✅ Product dropdown populated from product data array
  - ✅ Inline validation: red border + error message for invalid required fields
  - ✅ On valid submit: form hides, success message shown
  - ✅ Contact sidebar: email, WhatsApp, location
  - ✅ WhatsApp button with pre-filled message link
  - ✅ Two-column layout on desktop, stacked on mobile
- **Priority**: MVP
- **Dependencies**: Product data, Country list

### 8. Footer
- **Description**: Dark-themed footer with company info, quick links, and top products
- **Acceptance Criteria**:
  - ✅ Company name + tagline
  - ✅ Quick links to all sections
  - ✅ Top products links (scroll to contact)
  - ✅ Badge pills: ISO, Export Ready, 15+ Products
  - ✅ Copyright line
- **Priority**: MVP
- **Dependencies**: None

### 9. Back to Top Button
- **Description**: Circular button that appears after scrolling, returns to top
- **Acceptance Criteria**:
  - ✅ Appears after scrolling 400px
  - ✅ Fixed bottom-right position
  - ✅ Smooth scroll to top on click
  - ✅ Fade in/out transition
- **Priority**: MVP
- **Dependencies**: None

### 10. Scroll Reveal Animations
- **Description**: Elements fade-in-up as they enter viewport
- **Acceptance Criteria**:
  - ✅ `.reveal` class on section content blocks
  - ✅ Intersection-based: becomes visible when element enters viewport
  - ✅ CSS transition: opacity 0→1, translateY 24px→0
- **Priority**: MVP
- **Dependencies**: None

### 11. Responsive Design
- **Description**: Mobile-first responsive layout across all breakpoints
- **Acceptance Criteria**:
  - ✅ 4 breakpoints: <480px, 480-767px, 768-1023px, ≥1024px
  - ✅ Min 16px body font, 1.5+ line height
  - ✅ Min 48×48px tap targets
  - ✅ No horizontal scroll
  - ✅ Full-width form fields on mobile
  - ✅ Native `<select>` for dropdowns
- **Priority**: MVP
- **Dependencies**: None

---

## Post-MVP Features (Future)

### 12. Backend Form Submission
- **Description**: Connect inquiry form to a real backend/database
- **Acceptance Criteria**:
  - Form data sent to server API endpoint
  - Stored in PostgreSQL inquiries table
  - Email notification sent to VasuDev team
  - Auto-reply email sent to submitter
- **Priority**: Post-MVP
- **Dependencies**: Backend setup, database

### 13. Admin Dashboard
- **Description**: Admin panel to manage products and view inquiries
- **Acceptance Criteria**:
  - Add/edit/deactivate products
  - View and manage inquiry submissions
  - Mark inquiry status (new → contacted → quoted → closed)
- **Priority**: Post-MVP
- **Dependencies**: Backend, auth system

### 14. Product Detail Pages
- **Description**: Dedicated pages per product with specs, COA downloads, related products
- **Priority**: Post-MVP
- **Dependencies**: Backend, routing

### 15. Multi-language Support
- **Description**: Arabic and other language versions for Gulf market
- **Priority**: Post-MVP
- **Dependencies**: i18n framework, translations

### 16. SEO & Analytics
- **Description**: Google Analytics, Search Console, structured data markup
- **Priority**: Post-MVP
- **Dependencies**: Google account, domain
