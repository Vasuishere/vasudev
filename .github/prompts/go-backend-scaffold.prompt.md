---
description: "Scaffold a production-ready Go backend for VasuDev Chemicals — Google Drive image handling, CRUD APIs, JWT auth, PostgreSQL, and full test suite"
agent: "agent"
---

# Go Backend Scaffold — VasuDev Chemicals

Generate a complete, production-ready Go backend project for the VasuDev Chemicals website. The backend manages product images stored as Google Drive URLs, serves content APIs for the Next.js frontend, and provides an admin interface for managing site data.

## Project Context

Reference these workspace docs for domain knowledge:

- [PROJECT_OVERVIEW.md](../../docs/PROJECT_OVERVIEW.md) — company context, target markets, value proposition
- [DATA_MODELS.md](../../docs/DATA_MODELS.md) — products, inquiries, countries schemas
- [FEATURES.md](../../docs/FEATURES.md) — MVP feature set and acceptance criteria
- [BUSINESS_LOGIC.md](../../docs/BUSINESS_LOGIC.md) — filtering, validation, inquiry lifecycle

The frontend is a Next.js 14 app (see [TECH_STACK.md](../../docs/TECH_STACK.md)). The Go backend replaces the current static data layer with a proper API.

## Stack (Fixed Defaults)

| Component        | Choice                                      |
| ---------------- | ------------------------------------------- |
| Language         | Go 1.22+                                    |
| HTTP Router      | chi (go-chi/chi/v5)                         |
| Database         | PostgreSQL 16                               |
| ORM / Query      | sqlc for type-safe queries                  |
| Migrations       | golang-migrate/migrate                      |
| Auth             | JWT (golang-jwt/jwt/v5), bcrypt for hashing |
| Validation       | go-playground/validator/v10                 |
| Config           | envconfig or viper for env vars             |
| Testing          | stdlib testing + testify                    |
| Image Handling   | Google Drive URL validation & CDN proxying  |
| Containerization | Docker + docker-compose                     |

## Directory Layout

Generate this structure inside a new `backend/` folder at the workspace root:

```
backend/
├── cmd/
│   └── server/
│       └── main.go              # Entry point, wires everything
├── internal/
│   ├── config/
│   │   └── config.go            # Env-based configuration struct
│   ├── database/
│   │   ├── migrations/          # SQL migration files (up/down)
│   │   ├── queries/             # sqlc query files (.sql)
│   │   ├── sqlc.yaml            # sqlc configuration
│   │   └── db.go                # Connection pool setup
│   ├── handler/
│   │   ├── product.go           # Product CRUD handlers
│   │   ├── inquiry.go           # Inquiry submission + admin list
│   │   ├── image.go             # Google Drive image URL endpoints
│   │   ├── content.go           # Hero, about, certifications sections
│   │   ├── auth.go              # Login, register, refresh token
│   │   └── health.go            # Health check
│   ├── middleware/
│   │   ├── auth.go              # JWT extraction & role validation
│   │   ├── cors.go              # CORS for Next.js frontend
│   │   ├── logging.go           # Structured request logging
│   │   └── ratelimit.go         # Rate limiting
│   ├── model/
│   │   ├── product.go           # Product struct + DB model
│   │   ├── inquiry.go           # Inquiry struct + lifecycle statuses
│   │   ├── image.go             # ImageURL struct + variants
│   │   ├── user.go              # User struct + roles (admin/viewer)
│   │   └── content.go           # Content section models
│   ├── service/
│   │   ├── product.go           # Product business logic
│   │   ├── inquiry.go           # Inquiry lifecycle management
│   │   ├── image.go             # Google Drive URL validation + variant generation
│   │   ├── content.go           # Content section service
│   │   └── auth.go              # Auth service (JWT sign/verify, password hashing)
│   └── validation/
│       └── rules.go             # Custom validators (CAS number, Drive URL format)
├── pkg/
│   └── gdrive/
│       └── url.go               # Google Drive URL parsing, canonical form, size variants
├── test/
│   ├── integration/             # API-level integration tests
│   └── testutil/                # Test helpers, fixtures, DB setup
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── go.mod
├── go.sum
├── Makefile
└── README.md
```

## API Endpoints

Implement these endpoints:

### Public

| Method | Path                             | Purpose                            |
| ------ | -------------------------------- | ---------------------------------- |
| GET    | /api/v1/health                   | Health check                       |
| GET    | /api/v1/products                 | List products (filter by category) |
| GET    | /api/v1/products/{slug}          | Product detail                     |
| GET    | /api/v1/products/{id}/images     | Product image URLs with variants   |
| POST   | /api/v1/inquiries                | Submit inquiry (public form)       |
| GET    | /api/v1/content/{section}        | Get content section (hero, about, certifications, services) |
| GET    | /api/v1/faqs                     | List FAQs                          |
| GET    | /api/v1/industries               | List industries served             |
| GET    | /api/v1/certifications           | List certifications                |

### Authenticated (JWT required)

| Method | Path                             | Purpose                            |
| ------ | -------------------------------- | ---------------------------------- |
| POST   | /api/v1/auth/login               | Login, returns JWT                 |
| POST   | /api/v1/auth/refresh             | Refresh JWT                        |

### Admin (admin role required)

| Method | Path                             | Purpose                            |
| ------ | -------------------------------- | ---------------------------------- |
| POST   | /api/v1/admin/products           | Create product                     |
| PUT    | /api/v1/admin/products/{id}      | Update product                     |
| DELETE | /api/v1/admin/products/{id}      | Soft-delete product                |
| POST   | /api/v1/admin/products/{id}/images | Add image URL to product         |
| DELETE | /api/v1/admin/images/{id}        | Remove image URL                   |
| GET    | /api/v1/admin/inquiries          | List inquiries (with status filter)|
| PATCH  | /api/v1/admin/inquiries/{id}     | Update inquiry status              |
| PUT    | /api/v1/admin/content/{section}  | Update content section             |

## Google Drive Image URL Handling

This is a core feature. Implement thoroughly:

1. **Acceptance**: Accept Google Drive share links in these formats:
   - `https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing`
   - `https://drive.google.com/open?id={FILE_ID}`
   - `https://drive.google.com/uc?id={FILE_ID}&export=download`

2. **Validation**: Extract the file ID via regex, reject malformed URLs. Only allow `drive.google.com` host — no open redirects.

3. **Canonical Storage**: Store the extracted file ID, not the full URL. Reconstruct URLs on read.

4. **Size Variants**: Generate CDN-friendly URLs for multiple sizes:
   - Thumbnail: `https://drive.google.com/thumbnail?id={FILE_ID}&sz=w200`
   - Medium: `https://drive.google.com/thumbnail?id={FILE_ID}&sz=w600`
   - Large: `https://drive.google.com/thumbnail?id={FILE_ID}&sz=w1200`
   - Original: `https://drive.google.com/uc?id={FILE_ID}&export=view`

5. **Response Format**: Return image objects with all variant URLs:
   ```json
   {
     "id": 1,
     "file_id": "1aBcDeFgHiJkLmNoPqRsT",
     "alt_text": "Sodium Sulphate powder",
     "variants": {
       "thumbnail": "https://drive.google.com/thumbnail?id=1aBcDeFgHiJkLmNoPqRsT&sz=w200",
       "medium": "https://drive.google.com/thumbnail?id=1aBcDeFgHiJkLmNoPqRsT&sz=w600",
       "large": "https://drive.google.com/thumbnail?id=1aBcDeFgHiJkLmNoPqRsT&sz=w1200",
       "original": "https://drive.google.com/uc?id=1aBcDeFgHiJkLmNoPqRsT&export=view"
     }
   }
   ```

## Security Requirements

- Parameterized queries only (sqlc enforces this)
- Sanitize all user inputs with go-playground/validator
- JWT tokens with short expiry (15 min access, 7 day refresh)
- Bcrypt password hashing with cost ≥ 12
- CORS restricted to frontend origin(s)
- Rate limiting on auth and inquiry endpoints
- Secrets via environment variables, never in code
- URL whitelisting: only `drive.google.com` for image URLs
- No user-supplied URLs used in server-side HTTP requests (prevent SSRF)

## Database Migrations

Generate initial migration files for:
- `users` table (id, email, password_hash, name, role, timestamps)
- `products` table (matching DATA_MODELS.md schema + slug, image fields)
- `product_images` table (id, product_id FK, drive_file_id, alt_text, sort_order, timestamps)
- `inquiries` table (matching DATA_MODELS.md schema)
- `content_sections` table (id, section_key unique, title, body JSON, timestamps)
- `faqs` table (id, question, answer, sort_order, is_active, timestamps)
- `industries` table (id, name, slug, description, icon, is_active, timestamps)
- `certifications` table (id, name, slug, description, issuer, timestamps)

Seed the products table with the 16 products from DATA_MODELS.md.

## Testing

Write tests for:
- `pkg/gdrive/url.go` — URL parsing, file ID extraction, variant generation, rejection of invalid URLs
- `internal/service/image.go` — image CRUD, variant URL construction
- `internal/service/product.go` — product listing, filtering, slug lookup
- `internal/service/auth.go` — JWT signing/verification, password hashing
- `internal/validation/rules.go` — CAS number format, Drive URL format
- `test/integration/` — at least one integration test per endpoint group (products, inquiries, images, auth)

Target ≥ 80% coverage on service and pkg layers.

## Documentation

Generate a `backend/README.md` covering:
- Prerequisites (Go, PostgreSQL, Docker)
- Environment variables (.env.example)
- Local setup: `make migrate-up`, `make seed`, `make run`
- Running tests: `make test`, `make test-coverage`
- Docker: `docker-compose up`
- API reference summary with curl examples
- How to add new image variants
- How to integrate with the Next.js frontend

## Output Instructions

1. Create every file listed in the directory layout with working, idiomatic Go code.
2. All code must compile. Use proper imports and error handling.
3. Follow Go conventions: short variable names, table-driven tests, error wrapping with `%w`.
4. Include the Makefile with targets: `build`, `run`, `test`, `test-coverage`, `migrate-up`, `migrate-down`, `seed`, `docker-up`.
5. Do NOT generate placeholder or stub code — every function should have a real implementation.
