# Product Catalog — Admin Workflow & API Contract

## 1. Data Model Summary

### Products Table (Payload CMS Collection: `products`)
| Field | Type | Required | Description |
|---|---|---|---|
| name | text | ✅ | Product display name |
| slug | text | ✅ | URL slug (unique) |
| sku | text | — | Stock Keeping Unit (unique, e.g. `VCP-IND-0001`) |
| formula | text | — | Chemical formula |
| cas | text | — | CAS Registry Number |
| category | select | ✅ | `industrial` / `specialty` / `pharmaceutical` |
| subcategory | text | — | Freeform subcategory |
| description | textarea | ✅ | Product description |
| supplier | text | — | Primary supplier |
| originCountry | text | — | Country of origin |
| price | number | — | Base price (0 or blank = POA) |
| currency | text | — | ISO 4217 code (default: USD) |
| priceUnit | text | — | e.g. `/kg`, `/MT`, `/drum` |
| unitOfMeasure | text | — | Base UOM: `kg`, `L`, `MT` |
| weight | text | — | Net weight per unit |
| dimensions | text | — | Package dimensions |
| safetyClass | text | — | GHS/UN hazard class |
| status | select | ✅ | `active` / `inactive` / `discontinued` |
| applications | array[text] | — | Application use cases |
| industries | array[text] | — | Target industries |
| grades | array[text] | — | Available grades |
| packaging | array[text] | — | Packaging options |
| tags | array[text] | — | Searchable tags |
| specs | array[{key,value}] | — | Technical specifications |
| imageUrl | text | — | Primary image (Google Drive URL) |
| images | array[{url,caption}] | — | Additional images |
| documents | array[doc] | — | COA/TDS/MSDS documents (see below) |

### Product Documents (embedded array)
| Field | Type | Options |
|---|---|---|
| docType | select | `COA`, `TDS`, `MSDS`, `SDS`, `SPEC`, `OTHER` |
| fileUrl | text | Google Drive share URL |
| fileName | text | Display name |
| uploadedBy | text | Uploader identity |
| accessLevel | select | `public`, `on-request`, `internal` |

---

## 2. Admin Upload Workflow for Google Drive Documents

### Step-by-step process:
1. **Upload document to Google Drive** (shared company folder)
2. **Set sharing to "Anyone with the link"** (for public docs) or restrict as needed
3. **Copy the share link** — format: `https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing`
4. **Open Payload Admin** → Products → Select product
5. **Scroll to Documents section** → Click "Add Document"
6. **Fill fields:**
   - **Doc Type**: Select COA, TDS, MSDS, etc.
   - **File URL**: Paste the Google Drive link
   - **File Name**: Human-readable name (e.g. `Sodium_Sulphate_COA_Batch2024.pdf`)
   - **Uploaded By**: Your name
   - **Access Level**: `public` (shown directly), `on-request` (shown but not clickable), `internal` (hidden from frontend)

### Validation rules:
- **Link format**: Must be a valid Google Drive URL or file ID (validated by `extractFileId()` in `lib/gdrive.ts`)
- **Required documents by category**:
  - **Industrial**: COA recommended, MSDS required for Class 6+ safety
  - **Pharmaceutical**: COA + TDS + MSDS all required
  - **Specialty**: COA or TDS recommended

### Supported Google Drive URL formats:
```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
https://drive.google.com/open?id=FILE_ID
https://drive.google.com/uc?id=FILE_ID&export=view
https://lh3.googleusercontent.com/d/FILE_ID
Raw file ID string (10+ characters)
```

---

## 3. Frontend Conditional Rendering Rules

Every optional field follows this pattern:
```tsx
{product.fieldName && <Component>{product.fieldName}</Component>}
```

| Condition | Behavior |
|---|---|
| Field is `null`, `undefined`, `""` | **Hidden** — no placeholder, no empty space |
| Field is `0` (number) | **Hidden** for price (shows "Price on Request") |
| Array is `[]` (empty) | **Section hidden entirely** |
| `accessLevel === 'internal'` | **Document hidden** from frontend |
| `accessLevel === 'on-request'` | **Document shown** but not linked (with "Available on request" label) |

---

## 4. API Contract (Payload CMS REST API)

### List Products
```
GET /api/products?limit=100&sort=name
GET /api/products?where[category][equals]=pharmaceutical
GET /api/products?where[status][equals]=active
```

### Get Single Product
```
GET /api/products?where[slug][equals]=sodium-sulphate&limit=1
```

### Create Product (admin auth required)
```
POST /api/products
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "name": "New Product",
  "slug": "new-product",
  "sku": "VCP-IND-0099",
  "category": "industrial",
  "description": "...",
  "documents": [
    {
      "docType": "COA",
      "fileUrl": "https://drive.google.com/file/d/xxx/view",
      "fileName": "New_Product_COA.pdf",
      "uploadedBy": "Admin",
      "accessLevel": "public"
    }
  ]
}
```

### Update Product Documents
```
PATCH /api/products/{id}
Content-Type: application/json
Authorization: Bearer {JWT_TOKEN}

{
  "documents": [
    { "docType": "COA", "fileUrl": "...", "accessLevel": "public" },
    { "docType": "TDS", "fileUrl": "...", "accessLevel": "public" },
    { "docType": "MSDS", "fileUrl": "...", "accessLevel": "on-request" }
  ]
}
```

---

## 5. Running Seeds

### Local Development
```bash
cd website

# Ensure .env has DATABASE_URI, PAYLOAD_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npx tsx src/seed.ts
```

### Production
```bash
# Option A: Run seed script directly (requires DB access)
DATABASE_URI=postgresql://... PAYLOAD_SECRET=... ADMIN_EMAIL=... ADMIN_PASSWORD=... npx tsx src/seed.ts

# Option B: Use Payload Admin UI
# Navigate to /admin → Products → Create/Import
```

### Re-seeding (safe)
The seed script is **idempotent** — it checks for existing records by slug before creating. Running it again will skip existing products and only add new ones.

---

## 6. Migration Plan

Payload CMS auto-generates PostgreSQL migrations via:
```bash
npx payload migrate:create
npx payload migrate
```

For the schema expansion (new fields added to Products collection):
1. The new fields are added to `src/collections/Products.ts`
2. Run `npx payload migrate:create` to auto-diff and generate SQL
3. Run `npx payload migrate` to apply
4. Run `npx tsx src/seed.ts` to populate new field data

### Recommended indexes (already handled by Payload):
- `slug` (unique)
- `sku` (unique)
- `category`
- `status`
- `cas`

### Data integrity constraints:
- `slug` and `sku` are UNIQUE
- `category` is restricted to enum values
- `status` defaults to `active`
- `currency` defaults to `USD`
- `accessLevel` defaults to `public`
- All array fields cascade-delete with parent product
