-- ============================================================
-- Vasudev Chemo Pharma — Seed Data (PostgreSQL)
-- Insert 5 representative products with full field coverage.
-- ============================================================

-- ── Industrial Chemical ─────────────────────────────────────
INSERT INTO products (name, slug, sku, formula, cas, category, subcategory, description, supplier, origin_country, currency, price_unit, unit_of_measure, weight, safety_class, status)
VALUES (
  'Sodium Sulphate', 'sodium-sulphate', 'VCP-IND-0001', 'Na₂SO₄', '7757-82-6',
  'industrial', 'Inorganic Salts',
  'Anhydrous grade widely used in detergent manufacturing, glass production, and textile dyeing processes.',
  'Nirma Ltd.', 'India', 'USD', '/MT', 'MT', '50 kg', 'Non-hazardous', 'active'
);

INSERT INTO product_specs (product_id, key, value, sort_order) VALUES
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'Purity', '≥ 99.0%', 1),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'Moisture', '≤ 0.5%', 2),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'pH (5% solution)', '6.0 – 8.0', 3),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'Appearance', 'White crystalline powder', 4);

INSERT INTO product_array_fields (product_id, field_type, value) VALUES
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'application', 'Detergent manufacturing'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'application', 'Glass production'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'industry', 'Detergents'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'industry', 'Glass'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'grade', 'Technical'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'grade', 'Pure'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'packaging', '50 kg HDPE bags'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'packaging', '1000 kg jumbo bags'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'tag', 'sodium'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'tag', 'detergent-grade');

INSERT INTO product_documents (product_id, doc_type, file_url, file_name, uploaded_by, access_level) VALUES
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'COA', 'https://drive.google.com/file/d/PLACEHOLDER_COA_SS/view', 'Sodium_Sulphate_COA.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'TDS', 'https://drive.google.com/file/d/PLACEHOLDER_TDS_SS/view', 'Sodium_Sulphate_TDS.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'sodium-sulphate'), 'MSDS', 'https://drive.google.com/file/d/PLACEHOLDER_MSDS_SS/view', 'Sodium_Sulphate_MSDS.pdf', 'Admin', 'public');

-- ── Specialty Chemical ──────────────────────────────────────
INSERT INTO products (name, slug, sku, formula, cas, category, subcategory, description, supplier, origin_country, currency, price_unit, unit_of_measure, weight, safety_class, status)
VALUES (
  'Zinc Oxide', 'zinc-oxide', 'VCP-SPC-0001', 'ZnO', '1314-13-2',
  'specialty', 'Metal Oxides',
  'High-purity zinc oxide for rubber, ceramics, pharmaceuticals, and cosmetic formulations.',
  'Rubamin Ltd.', 'India', 'USD', '/MT', 'MT', '25 kg', 'Class 9 — Environmentally hazardous', 'active'
);

INSERT INTO product_documents (product_id, doc_type, file_url, file_name, uploaded_by, access_level) VALUES
  ((SELECT id FROM products WHERE slug = 'zinc-oxide'), 'COA', 'https://drive.google.com/file/d/PLACEHOLDER_COA_ZO/view', 'Zinc_Oxide_COA.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'zinc-oxide'), 'TDS', 'https://drive.google.com/file/d/PLACEHOLDER_TDS_ZO/view', 'Zinc_Oxide_TDS.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'zinc-oxide'), 'MSDS', 'https://drive.google.com/file/d/PLACEHOLDER_MSDS_ZO/view', 'Zinc_Oxide_MSDS.pdf', 'Admin', 'public');

-- ── Oil & Gas Chemical ──────────────────────────────────────
INSERT INTO products (name, slug, sku, formula, cas, category, subcategory, description, supplier, origin_country, currency, price_unit, unit_of_measure, weight, safety_class, status)
VALUES (
  'MEA Triazine 78% H2S Scavenger', 'mea-triazine-78-h2s-scavenger', 'VCP-IND-0009', 'C₃H₉N₃O₃', '4719-04-4',
  'industrial', 'Oil & Gas Chemicals',
  'Monoethanolamine triazine-based hydrogen sulfide scavenger at 78% concentration.',
  'Baker Hughes', 'India', 'USD', '/MT', 'MT', '200 L', 'Class 8 — Corrosive', 'active'
);

-- ── Pharmaceutical API ──────────────────────────────────────
INSERT INTO products (name, slug, sku, formula, cas, category, subcategory, description, supplier, origin_country, currency, price_unit, unit_of_measure, weight, safety_class, status)
VALUES (
  'Albendazole', 'albendazole', 'VCP-PHR-0001', 'C₁₂H₁₅N₃O₂S', '54965-21-8',
  'pharmaceutical', 'Anthelmintics',
  'Broad-spectrum benzimidazole anthelmintic API intermediate for human and veterinary applications.',
  'Sequent Scientific', 'India', 'USD', '/kg', 'kg', '25 kg', 'Non-hazardous', 'active'
);

INSERT INTO product_documents (product_id, doc_type, file_url, file_name, uploaded_by, access_level) VALUES
  ((SELECT id FROM products WHERE slug = 'albendazole'), 'COA', 'https://drive.google.com/file/d/PLACEHOLDER_COA_ALB/view', 'Albendazole_COA.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'albendazole'), 'TDS', 'https://drive.google.com/file/d/PLACEHOLDER_TDS_ALB/view', 'Albendazole_TDS.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'albendazole'), 'MSDS', 'https://drive.google.com/file/d/PLACEHOLDER_MSDS_ALB/view', 'Albendazole_MSDS.pdf', 'Admin', 'on-request');

-- ── Pharma API — Ketoconazole ───────────────────────────────
INSERT INTO products (name, slug, sku, formula, cas, category, subcategory, description, supplier, origin_country, currency, price_unit, unit_of_measure, weight, safety_class, status)
VALUES (
  'Ketoconazole', 'ketoconazole', 'VCP-PHR-0002', 'C₂₆H₂₈Cl₂N₄O₄', '65277-42-1',
  'pharmaceutical', 'Anti-fungal Agents',
  'Imidazole antifungal API intermediate for topical and oral formulations.',
  'Dishman Carbogen Amcis', 'India', 'USD', '/kg', 'kg', '25 kg', 'Non-hazardous', 'active'
);

INSERT INTO product_documents (product_id, doc_type, file_url, file_name, uploaded_by, access_level) VALUES
  ((SELECT id FROM products WHERE slug = 'ketoconazole'), 'COA', 'https://drive.google.com/file/d/PLACEHOLDER_COA_KTZ/view', 'Ketoconazole_COA.pdf', 'Admin', 'public'),
  ((SELECT id FROM products WHERE slug = 'ketoconazole'), 'TDS', 'https://drive.google.com/file/d/PLACEHOLDER_TDS_KTZ/view', 'Ketoconazole_TDS.pdf', 'Admin', 'public');
