-- ============================================================
-- Vasudev Chemo Pharma — Product Catalog Schema (PostgreSQL)
-- Reference DDL — Payload CMS manages the actual migrations.
-- ============================================================

-- 1. Products table
CREATE TABLE IF NOT EXISTS products (
  id              SERIAL PRIMARY KEY,
  name            VARCHAR(200) NOT NULL,
  slug            VARCHAR(200) NOT NULL UNIQUE,
  sku             VARCHAR(50)  UNIQUE,
  formula         VARCHAR(200),
  cas             VARCHAR(30),
  category        VARCHAR(30)  NOT NULL CHECK (category IN ('industrial', 'specialty', 'pharmaceutical')),
  subcategory     VARCHAR(100),
  description     TEXT NOT NULL,
  supplier        VARCHAR(200),
  origin_country  VARCHAR(100),
  price           NUMERIC(12,2),
  currency        VARCHAR(10) DEFAULT 'USD',
  price_unit      VARCHAR(30),
  unit_of_measure VARCHAR(20),
  weight          VARCHAR(50),
  dimensions      VARCHAR(100),
  safety_class    VARCHAR(100),
  image_url       TEXT,
  status          VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'discontinued')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Product specifications (key-value pairs)
CREATE TABLE IF NOT EXISTS product_specs (
  id          SERIAL PRIMARY KEY,
  product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  key         VARCHAR(100) NOT NULL,
  value       VARCHAR(200) NOT NULL,
  sort_order  INTEGER DEFAULT 0
);

-- 3. Product array fields (applications, industries, grades, packaging, tags)
CREATE TABLE IF NOT EXISTS product_array_fields (
  id          SERIAL PRIMARY KEY,
  product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  field_type  VARCHAR(30) NOT NULL CHECK (field_type IN ('application', 'industry', 'grade', 'packaging', 'tag')),
  value       VARCHAR(200) NOT NULL
);

-- 4. Product documents (COA, TDS, MSDS, SDS)
CREATE TABLE IF NOT EXISTS product_documents (
  id            SERIAL PRIMARY KEY,
  product_id    INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  doc_type      VARCHAR(10) NOT NULL CHECK (doc_type IN ('COA', 'TDS', 'MSDS', 'SDS', 'SPEC', 'OTHER')),
  file_url      TEXT NOT NULL,
  file_name     VARCHAR(200),
  uploaded_by   VARCHAR(100),
  access_level  VARCHAR(20) DEFAULT 'public' CHECK (access_level IN ('public', 'on-request', 'internal')),
  uploaded_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Product images
CREATE TABLE IF NOT EXISTS product_images (
  id          SERIAL PRIMARY KEY,
  product_id  INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  image_url   TEXT NOT NULL,
  alt_text    VARCHAR(200),
  caption     VARCHAR(200),
  sort_order  INTEGER DEFAULT 0
);

-- ── Indexes ─────────────────────────────────────────────────
CREATE INDEX idx_products_slug        ON products(slug);
CREATE INDEX idx_products_sku         ON products(sku);
CREATE INDEX idx_products_category    ON products(category);
CREATE INDEX idx_products_status      ON products(status);
CREATE INDEX idx_products_cas         ON products(cas);
CREATE INDEX idx_product_specs_pid    ON product_specs(product_id);
CREATE INDEX idx_product_arrays_pid   ON product_array_fields(product_id);
CREATE INDEX idx_product_docs_pid     ON product_documents(product_id);
CREATE INDEX idx_product_docs_type    ON product_documents(doc_type);
CREATE INDEX idx_product_images_pid   ON product_images(product_id);

-- ── Updated-at trigger ──────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
