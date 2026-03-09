# User Flows — VasuDev Chemicals Website

## Flow 1: New Visitor → Submits Inquiry via Hero CTA

1. **Entry**: Visitor lands on homepage (organic search, direct link, ad)
2. Sees **Hero section** — headline, trust badges (ISO, 8+ years, 15+ products, global exports)
3. Clicks **"Send an Inquiry"** CTA button
4. Page smooth-scrolls to **#contact** section
5. **Inquiry form** is displayed with fields:
   - Full Name* → Company Name* → Country* → Email* → Phone → Product → Quantity → Message
6. Fills out form fields
7. Clicks **"Submit Inquiry"**
8. **Validation runs**:
   - ✅ All required fields valid → Form hides, success message shown ("Thank you! We'll respond within 24 hours")
   - ❌ Missing/invalid fields → Inline red error messages appear below each invalid field
9. **End**: Inquiry submitted (currently client-side only — no backend)

---

## Flow 2: Visitor → Browses Products → Requests Quote for Specific Product

1. **Entry**: Visitor arrives on site
2. Scrolls to **Products section** OR clicks "View Our Products" hero CTA OR clicks "Products" in navbar
3. Sees **16 product cards** with filter tabs (All, Industrial, Specialty)
4. (Optional) Clicks a **filter tab** → products re-render showing only that category
5. Finds a product of interest → reads name, CAS number, description, application tags
6. Clicks **"Request Quote"** button on that product card
7. Page smooth-scrolls to **#contact** section
8. **Product dropdown is pre-selected** with the chosen product name
9. `fullName` input is auto-focused
10. Fills out remaining form fields
11. Submits inquiry (same as Flow 1, steps 7–9)

---

## Flow 3: Visitor → WhatsApp Contact

1. **Entry**: Visitor on any section of the page
2. Sees **WhatsApp button** in contact info sidebar OR floating WhatsApp link
3. Clicks the WhatsApp button/link
4. **Opens WhatsApp** (web or app) with pre-filled message:
   - "Hello, I am interested in your chemical products. Please share details."
   - Phone: +91 98765 43210
5. **End**: Visitor is now in a WhatsApp conversation with VasuDev team

---

## Flow 4: Visitor → Reads About / Checks Credentials → Inquires

1. **Entry**: Visitor arrives, wants to verify credibility before inquiring
2. Scrolls to **About section** — reads company story, strengths (ISO, quality control, export expertise, responsive communication)
3. Sees **stats panel** — 15+ products, 8+ years, 30+ countries, ISO certified
4. Scrolls to **Certificates section** — sees ISO 9001:2015, REACH Readiness, Lab Testing & Traceability cards
5. Now **trusts the company** → scrolls to contact or clicks navbar "Get a Quote"
6. Fills out inquiry form (Flow 1, steps 5–9)

---

## Flow 5: Visitor → Checks Export/Shipping → Inquires

1. **Entry**: International buyer wants shipping details before committing
2. Scrolls to **Export & Shipping section** OR clicks "Export" in navbar
3. Reads:
   - **Regions served**: USA, Middle East, Southeast Asia, Europe, Latin America
   - **Shipping modes**: Sea Freight (FCL/LCL), Air Freight
   - **Documentation**: COA, MSDS/SDS, Packing List, Commercial Invoice, Bill of Lading
   - **Incoterms**: FOB, CIF, EXW, CFR, DDP
4. Confident about shipping logistics → scrolls to **#contact**
5. Submits inquiry (Flow 1, steps 5–9)

---

## Flow 6: Mobile Navigation

1. **Entry**: Visitor on mobile device (< 768px)
2. Sees **sticky navbar** with logo + hamburger icon
3. Taps **hamburger (☰)** → menu slides down as overlay
4. Sees nav links: Home, Products, About, Export, Certificates, Contact + "Get a Quote" CTA
5. Taps a section link → menu closes, page smooth-scrolls to that section
6. OR taps **"Get a Quote"** → menu closes, scrolls to #contact

---

## Flow 7: Back to Top

1. Visitor scrolls down past 400px
2. **Back-to-top button** appears (bottom-right, circular, navy background)
3. Clicks **↑ button**
4. Page smooth-scrolls to top
5. Button fades out when at top

---

## Conversion Funnel Summary

Every path on the site leads to the inquiry form:

| Entry Point | CTA Text | Destination |
|---|---|---|
| Hero section | "Send an Inquiry" | #contact form |
| Hero section | "View Our Products" | #products → card "Request Quote" → #contact |
| Product card | "Request Quote" | #contact (product pre-selected) |
| Navbar | "Get a Quote" | #contact form |
| Export section | (scroll to contact) | #contact form |
| Certificates section | (scroll to contact) | #contact form |
| Contact sidebar | "Send on WhatsApp" | WhatsApp chat |
| Footer | Quick links to all sections | Various → #contact |
