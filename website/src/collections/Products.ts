import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sku', 'formula', 'cas', 'category', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    // ── Core Identity ───────────────────────────────────────
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'sku',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Stock Keeping Unit (e.g. VCP-IND-0001)',
      },
    },
    {
      name: 'formula',
      type: 'text',
      admin: { description: 'Chemical formula, e.g. Na₂SO₄' },
    },
    {
      name: 'cas',
      type: 'text',
      admin: { description: 'CAS Registry Number' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      required: true,
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Discontinued', value: 'discontinued' },
      ],
      admin: { position: 'sidebar' },
    },

    // ── Classification ──────────────────────────────────────
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Industrial Chemicals', value: 'industrial' },
        { label: 'Specialty Chemicals', value: 'specialty' },
        { label: 'Pharmaceutical API Intermediates', value: 'pharmaceutical' },
      ],
    },
    {
      name: 'subcategory',
      type: 'text',
      admin: { description: 'e.g. Surfactants, Solvents, Anti-fungal APIs' },
    },
    {
      name: 'tags',
      type: 'array',
      admin: { description: 'Searchable tags for filtering' },
      fields: [
        { name: 'value', type: 'text', required: true },
      ],
    },

    // ── Description ─────────────────────────────────────────
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },

    // ── Supply Chain ────────────────────────────────────────
    {
      name: 'supplier',
      type: 'text',
      admin: { description: 'Primary supplier or manufacturer name' },
    },
    {
      name: 'originCountry',
      type: 'text',
      admin: { description: 'Country of origin (e.g. India, China, Germany)' },
    },

    // ── Pricing ─────────────────────────────────────────────
    {
      name: 'price',
      type: 'number',
      admin: { description: 'Base price (0 or blank = price on request)' },
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: 'USD',
      admin: { description: 'ISO 4217 currency code' },
    },
    {
      name: 'priceUnit',
      type: 'text',
      admin: { description: 'Price per unit, e.g. /kg, /MT, /drum' },
    },

    // ── Physical Properties ─────────────────────────────────
    {
      name: 'unitOfMeasure',
      type: 'text',
      admin: { description: 'Base UOM: kg, L, MT, etc.' },
    },
    {
      name: 'weight',
      type: 'text',
      admin: { description: 'Net weight per unit, e.g. 25 kg' },
    },
    {
      name: 'dimensions',
      type: 'text',
      admin: { description: 'Package dimensions, e.g. 60×40×30 cm' },
    },

    // ── Safety & Compliance ─────────────────────────────────
    {
      name: 'safetyClass',
      type: 'text',
      admin: { description: 'GHS / UN hazard class, e.g. Class 8 Corrosive' },
    },

    // ── Array Fields ────────────────────────────────────────
    {
      name: 'applications',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'industries',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'grades',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'packaging',
      type: 'array',
      fields: [
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'specs',
      type: 'array',
      admin: { description: 'Technical specifications as key-value pairs' },
      fields: [
        { name: 'key', type: 'text', required: true, admin: { description: 'e.g. Purity, Moisture, pH' } },
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. ≥ 99.0%' } },
      ],
    },

    // ── Images ──────────────────────────────────────────────
    {
      name: 'imageUrl',
      type: 'text',
      admin: { description: 'Google Drive share URL for the primary product image.' },
    },
    {
      name: 'images',
      type: 'array',
      admin: { description: 'Additional product images (Google Drive URLs)' },
      fields: [
        { name: 'url', type: 'text', required: true, admin: { description: 'Google Drive share URL' } },
        { name: 'caption', type: 'text', admin: { description: 'Image caption / alt text' } },
      ],
    },

    // ── Documents (COA, TDS, MSDS) ──────────────────────────
    {
      name: 'documents',
      type: 'array',
      admin: { description: 'Regulatory & compliance documents (COA, TDS, MSDS, SDS)' },
      fields: [
        {
          name: 'docType',
          type: 'select',
          required: true,
          options: [
            { label: 'Certificate of Analysis (COA)', value: 'COA' },
            { label: 'Technical Data Sheet (TDS)', value: 'TDS' },
            { label: 'Material Safety Data Sheet (MSDS)', value: 'MSDS' },
            { label: 'Safety Data Sheet (SDS)', value: 'SDS' },
            { label: 'Product Specification', value: 'SPEC' },
            { label: 'Other', value: 'OTHER' },
          ],
        },
        {
          name: 'fileUrl',
          type: 'text',
          required: true,
          admin: { description: 'Google Drive share URL for the document' },
        },
        {
          name: 'fileName',
          type: 'text',
          admin: { description: 'Display name for the document' },
        },
        {
          name: 'uploadedBy',
          type: 'text',
          admin: { description: 'Who uploaded this document' },
        },
        {
          name: 'accessLevel',
          type: 'select',
          defaultValue: 'public',
          options: [
            { label: 'Public', value: 'public' },
            { label: 'On Request', value: 'on-request' },
            { label: 'Internal Only', value: 'internal' },
          ],
        },
      ],
    },
  ],
};
