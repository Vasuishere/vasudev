# Data Models — VasuDev Chemicals

## Current State
Data is currently hardcoded in JavaScript arrays inside `index.html`. No database or API exists yet. When a backend is added, these models define the schema.

---

## Products Table

| Field | Type | Required | Description |
|---|---|---|---|
| id | INTEGER (PK) | Yes | Auto-increment primary key |
| name | VARCHAR(100) | Yes | Product display name (e.g., "Sodium Sulphate") |
| cas_number | VARCHAR(20) | Yes | CAS Registry Number (e.g., "7757-82-6") |
| category | ENUM('industrial', 'specialty') | Yes | Product classification |
| description | TEXT | Yes | Product description for website display |
| applications | JSON / TEXT[] | Yes | Array of application tags (e.g., ["Detergents", "Glass", "Textiles"]) |
| is_active | BOOLEAN | Yes | Whether product is displayed on website (default: true) |
| created_at | TIMESTAMP | Yes | Record creation timestamp |
| updated_at | TIMESTAMP | Yes | Last updated timestamp |

### Sample Products (Currently in JS Array)

| # | Name | CAS | Category | Applications |
|---|---|---|---|---|
| 1 | Sodium Sulphate | 7757-82-6 | Industrial | Detergents, Glass, Textiles |
| 2 | Zinc Oxide | 1314-13-2 | Specialty | Rubber, Ceramics, Pharma |
| 3 | Titanium Dioxide | 13463-67-7 | Specialty | Paints, Coatings, Plastics |
| 4 | Calcium Carbonate | 471-34-1 | Industrial | Paper, Paint, Construction |
| 5 | Caustic Soda Flakes | 1310-73-2 | Industrial | Water Treatment, Soap, Chemical Processing |
| 6 | Soda Ash | 497-19-8 | Industrial | Glass, Detergents, Water Softening |
| 7 | Citric Acid | 77-92-9 | Specialty | Food & Beverage, Cleaning, Pharma |
| 8 | Stearic Acid | 57-11-4 | Specialty | Cosmetics, Rubber, Candles |
| 9 | Magnesium Oxide | 1309-48-4 | Industrial | Refractory, Agriculture, Environmental |
| 10 | Sodium Bicarbonate | 144-55-8 | Industrial | Food Processing, Pharma, Fire Safety |
| 11 | LABSA | 27176-87-0 | Industrial | Detergents, Cleaning Agents, Surfactants |
| 12 | Sodium Tripolyphosphate | 7758-29-4 | Specialty | Detergents, Ceramics, Water Treatment |
| 13 | Barium Sulphate | 7727-43-7 | Specialty | Paints, Oil Drilling, Plastics |
| 14 | Hydrated Lime | 1305-62-0 | Industrial | Water Treatment, Construction, Chemical Mfg |
| 15 | Potassium Carbonate | 584-08-7 | Specialty | Glass, Ceramics, Fertilizers |
| 16 | Sodium Metabisulphite | 7681-57-4 | Specialty | Food Preservation, Water Treatment, Textiles |

---

## Inquiries Table (Future — when backend is added)

| Field | Type | Required | Description |
|---|---|---|---|
| id | INTEGER (PK) | Yes | Auto-increment primary key |
| full_name | VARCHAR(100) | Yes | Submitter's full name |
| company_name | VARCHAR(150) | Yes | Submitter's company name |
| country | VARCHAR(80) | Yes | Submitter's country |
| email | VARCHAR(150) | Yes | Contact email |
| phone | VARCHAR(30) | No | Phone / WhatsApp number |
| product_interest | VARCHAR(100) | No | Product they're interested in |
| quantity | VARCHAR(50) | No | Quantity needed (free text, e.g., "5 MT") |
| message | TEXT | No | Additional requirements or message |
| source | VARCHAR(50) | No | How they found us (future field) |
| status | ENUM('new', 'contacted', 'quoted', 'closed') | Yes | Inquiry lifecycle status (default: 'new') |
| created_at | TIMESTAMP | Yes | When inquiry was submitted |

---

## Countries Table (Reference Data)

Currently a hardcoded array of 160+ country names used to populate the country dropdown in the inquiry form. No separate table needed unless backend is added.

---

## Relationships

```
Products (1) ←——→ (Many) Inquiries
  └── product_interest links to products.name
```

Each inquiry optionally references a product by name. Currently no strict foreign key since products are JS-only.
