import type { CollectionConfig } from 'payload';

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'formula', 'cas', 'category'],
  },
  access: {
    read: () => true,
  },
  fields: [
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'formula',
      type: 'text',
      required: true,
      admin: {
        description: 'Chemical formula, e.g. Na₂SO₄',
      },
    },
    {
      name: 'cas',
      type: 'text',
      required: true,
      admin: {
        description: 'CAS Registry Number',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Industrial', value: 'industrial' },
        { label: 'Specialty', value: 'specialty' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'applications',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'industries',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'grades',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'packaging',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'Google Drive share URL for the product image. Paste the Drive link here.',
      },
    },
    {
      name: 'images',
      type: 'array',
      admin: {
        description: 'Additional product images (Google Drive URLs)',
      },
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: { description: 'Google Drive share URL' },
        },
        {
          name: 'caption',
          type: 'text',
          admin: { description: 'Image caption' },
        },
      ],
    },
    {
      name: 'specs',
      type: 'array',
      admin: {
        description: 'Product specifications as key-value pairs',
      },
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
          admin: { description: 'e.g. Purity, Moisture, pH' },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. ≥ 99.0%' },
        },
      ],
    },
  ],
};
