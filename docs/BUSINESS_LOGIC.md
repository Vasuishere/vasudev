# Business Logic — VasuDev Chemicals Website

## Product Filtering Logic
- Products are stored in a JS array with a `category` field: `"industrial"` or `"specialty"`
- Filter tabs: "All Products" (shows all), "Industrial Chemicals" (category === 'industrial'), "Specialty Chemicals" (category === 'specialty')
- When a filter is clicked:
  1. Remove `active` class from all filter buttons
  2. Add `active` class to clicked button
  3. Clear product grid
  4. Re-render only matching products (or all if "all")
  5. Re-bind "Request Quote" click handlers on new cards

## Request Quote → Pre-fill Logic
- Each product card's "Request Quote" button stores the product name in `data-product`
- On click:
  1. Read `data-product` attribute
  2. Find matching `<option>` in the product `<select>` dropdown
  3. Set that option as selected
  4. Smooth-scroll to `#contact` section
  5. After 600ms delay, auto-focus the `fullName` input

## Form Validation Rules

| Field | Rule | Error Message |
|---|---|---|
| Full Name | Required, non-empty after trim | "Please enter your full name" |
| Company Name | Required, non-empty after trim | "Please enter your company name" |
| Country | Required, must select a value (not empty string) | "Please select your country" |
| Email | Required, must match pattern `^[^\s@]+@[^\s@]+\.[^\s@]+$` | "Please enter a valid email address" |
| Phone | Optional, no validation | — |
| Product | Optional, no validation | — |
| Quantity | Optional, no validation | — |
| Message | Optional, no validation | — |

### Validation Behavior
- Validation runs on form submit (`submit` event, `preventDefault()`)
- For each required field:
  - **Invalid**: Add `.error` class to input (red border), show `.error-msg` element
  - **Valid**: Remove `.error` class, hide `.error-msg` element
- If ALL required fields pass:
  - Hide the form (`display: none`)
  - Show `.form-success` div with thank-you message
- **Live clearing**: On `input` or `change` events for validated fields, error state is immediately cleared

## Scroll Spy (Active Nav Link)
- On scroll, iterate all `<section>` elements
- Check if current scroll position (+ 100px offset) falls within a section's `offsetTop` and `offsetTop + offsetHeight`
- If match: remove `.active` from all nav links, add `.active` to the matching `a[href="#sectionId"]`

## Navbar Behavior
- **Scroll > 50px**: Add `.scrolled` class (box shadow appears)
- **Scroll ≤ 50px**: Remove `.scrolled` class
- **Mobile hamburger**: Toggles `.active` on hamburger (animates bars to X) and `.open` on nav-links (slides menu down)

## Back to Top Button
- **Scroll > 400px**: Add `.visible` class (opacity 1, translate to position)
- **Scroll ≤ 400px**: Remove `.visible` class (hidden)
- **Click**: `window.scrollTo({ top: 0, behavior: 'smooth' })`

## HTML Escaping
- All product data rendered into the DOM is escaped via a helper function that creates a text node and reads `.innerHTML`
- This prevents XSS if product data ever comes from an external source

## Dropdown Population
- On page load (`init`):
  1. Country `<select>` is populated from the `countries` array (160+ entries)
  2. Product `<select>` is populated from the `products` array + an "Other" option appended at the end
  3. `renderProducts('all')` renders all product cards
  4. `checkReveal()` runs initial scroll reveal check

## Inquiry Lifecycle (Future Backend)
When a backend is implemented, inquiry status will follow:
1. **New** — Just submitted, awaiting team review
2. **Contacted** — Team has responded to the buyer
3. **Quoted** — Pricing/quote sent to buyer
4. **Closed** — Deal completed or buyer declined
