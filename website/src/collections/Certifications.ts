import type { CollectionConfig } from 'payload';

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'shortName', 'body', 'validUntil'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'e.g. ISO 9001:2015' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'shortName',
      type: 'text',
      required: true,
      admin: { description: 'e.g. ISO 9001' },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      admin: { description: 'e.g. Quality Management System' },
    },
    {
      name: 'body',
      type: 'text',
      required: true,
      admin: { description: 'Certifying body, e.g. Bureau Veritas' },
    },
    {
      name: 'scope',
      type: 'textarea',
      required: true,
    },
    {
      name: 'scopeType',
      type: 'text',
      required: true,
      admin: { description: 'e.g. Manufacturing & Supply' },
    },
    {
      name: 'keyAreas',
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
        description: 'Google Drive share URL for the certification badge/image',
      },
    },
    {
      name: 'validUntil',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 2027 or Ongoing' },
    },
    {
      name: 'importance',
      type: 'textarea',
      required: true,
    },
  ],
};
