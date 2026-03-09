import type { CollectionConfig } from 'payload';

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'description'],
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
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'longDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: { description: 'Lucide icon name, e.g. Pill, Shirt, Paintbrush' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Industry image (upload)' },
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'Google Drive share URL for industry image (preferred over upload)',
      },
    },
    {
      name: 'keywords',
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
      name: 'challenges',
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
      name: 'solutions',
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
      name: 'chemicalsUsed',
      type: 'array',
      admin: {
        description: 'Names of chemicals used in this industry',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'whyChooseUs',
      type: 'textarea',
      required: true,
    },
  ],
};
