import type { CollectionConfig } from 'payload';

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Client logo image (upload)' },
    },
    {
      name: 'logoUrl',
      type: 'text',
      admin: {
        description: 'Google Drive share URL for client logo (preferred over upload)',
      },
    },
  ],
};
