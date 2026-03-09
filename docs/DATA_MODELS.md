# Data Models — VasuDev Chemicals

## Current State
Data is managed via Payload CMS (PostgreSQL) with static fallbacks. The schemas below reflect the full product catalog model.

---

## Products Table

| Field | Type | Required | Description |
|---|---|---|---|
| id | INTEGER (PK) | Yes | Auto-increment primary key |
| name | VARCHAR(200) | Yes | Product display name (e.g., "Sodium Sulphate") |
| slug | VARCHAR(200) | Yes | URL slug (unique) |
| sku | VARCHAR(50) | No | Stock Keeping Unit (unique, e.g. VCP-IND-0001) |
| formula | VARCHAR(200) | No | Chemical formula (e.g. Na₂SO₄) |
| cas_number | VARCHAR(30) | No | CAS Registry Number (e.g., "7757-82-6") |
| category | ENUM('industrial', 'specialty', 'pharmaceutical') | Yes | Product classification |
| subcategory | VARCHAR(100) | No | Freeform subcategory (e.g. Surfactants, Anthelmintics) |
| description | TEXT | Yes | Product description for website display |
| supplier | VARCHAR(200) | No | Primary supplier or manufacturer |
| origin_country | VARCHAR(100) | No | Country of origin |
| price | NUMERIC(12,2) | No | Base price (0 or blank = Price on Request) |
| currency | VARCHAR(10) | No | ISO 4217 currency code (default: USD) |
| price_unit | VARCHAR(30) | No | Price per unit (e.g. /kg, /MT) |
| unit_of_measure | VARCHAR(20) | No | Base UOM: kg, L, MT |
| weight | VARCHAR(50) | No | Net weight per unit |
| dimensions | VARCHAR(100) | No | Package dimensions |
| safety_class | VARCHAR(100) | No | GHS/UN hazard classification |
| image_url | TEXT | No | Primary image Google Drive URL |
| status | ENUM('active','inactive','discontinued') | Yes | Display status (default: active) |
| applications | JSON / TEXT[] | No | Array of application tags |
| industries | JSON / TEXT[] | No | Array of target industries |
| grades | JSON / TEXT[] | No | Array of available grades |
| packaging | JSON / TEXT[] | No | Array of packaging options |
| tags | JSON / TEXT[] | No | Searchable tags for filtering |
| specs | JSON | No | Key-value technical specifications |
| documents | JSON | No | Array of COA/TDS/MSDS document records |
| is_active | BOOLEAN | Yes | Whether product is displayed on website (default: true) |
| created_at | TIMESTAMP | Yes | Record creation timestamp |
| updated_at | TIMESTAMP | Yes | Last updated timestamp |

### Product Documents (embedded)
| Field | Type | Options |
|---|---|---|
| doc_type | ENUM | COA, TDS, MSDS, SDS, SPEC, OTHER |
| file_url | TEXT | Google Drive share URL |
| file_name | VARCHAR(200) | Display name |
| uploaded_by | VARCHAR(100) | Uploader identity |
| access_level | ENUM | public, on-request, internal |

### Sample Products (28 total in seed data)

| # | Name | CAS | Category | SKU |
|---|---|---|---|---|
| 1 | Sodium Sulphate | 7757-82-6 | Industrial | VCP-IND-0001 |
| 2 | Calcium Carbonate | 471-34-1 | Industrial | VCP-IND-0002 |
| 3 | Caustic Soda Flakes | 1310-73-2 | Industrial | VCP-IND-0003 |
| 4 | Soda Ash | 497-19-8 | Industrial | VCP-IND-0004 |
| 5 | Magnesium Oxide | 1309-48-4 | Industrial | VCP-IND-0005 |
| 6 | Sodium Bicarbonate | 144-55-8 | Industrial | VCP-IND-0006 |
| 7 | LABSA | 27176-87-0 | Industrial | VCP-IND-0007 |
| 8 | Hydrated Lime | 1305-62-0 | Industrial | VCP-IND-0008 |
| 9 | MEA Triazine 78% H2S Scavenger | 4719-04-4 | Industrial | VCP-IND-0009 |
| 10 | MMA TRIAZINE 40% | 108-74-7 | Industrial | VCP-IND-0010 |
| 11 | P-toluenesulfonic Acid | 104-15-4 | Industrial | VCP-IND-0011 |
| 12 | Copper Sulphate | 7758-99-8 | Industrial | VCP-IND-0012 |
| 13 | Manganese Sulphate | 10034-96-5 | Industrial | VCP-IND-0013 |
| 14 | Zinc Oxide | 1314-13-2 | Specialty | VCP-SPC-0001 |
| 15 | Titanium Dioxide | 13463-67-7 | Specialty | VCP-SPC-0002 |
| 16 | Citric Acid | 77-92-9 | Specialty | VCP-SPC-0003 |
| 17 | Stearic Acid | 57-11-4 | Specialty | VCP-SPC-0004 |
| 18 | Sodium Tripolyphosphate | 7758-29-4 | Specialty | VCP-SPC-0005 |
| 19 | Barium Sulphate | 7727-43-7 | Specialty | VCP-SPC-0006 |
| 20 | Potassium Carbonate | 584-08-7 | Specialty | VCP-SPC-0007 |
| 21 | Sodium Metabisulphite | 7681-57-4 | Specialty | VCP-SPC-0008 |
| 22 | Bis(2-chloroethyl)amine HCl | 821-48-7 | Specialty | VCP-SPC-0009 |
| 23 | Di Ethyl Amino Ethyl Chloride HCl | 869-24-9 | Specialty | VCP-SPC-0010 |
| 24 | 2-Amino-5-methylthiazole | 7305-71-7 | Specialty | VCP-SPC-0011 |
| 25 | 2-Chloroethylamine HCl | 870-24-6 | Specialty | VCP-SPC-0012 |
| 26 | Albendazole | 54965-21-8 | Pharmaceutical | VCP-PHR-0001 |
| 27 | Ketoconazole | 65277-42-1 | Pharmaceutical | VCP-PHR-0002 |
| 28 | Pregabalin | 148553-50-8 | Pharmaceutical | VCP-PHR-0003 |

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
