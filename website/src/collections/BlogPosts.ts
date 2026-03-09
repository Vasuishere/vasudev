import type { CollectionConfig } from 'payload';

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', 'readTime'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
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
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      admin: {
        description: 'Google Drive share URL for blog thumbnail (preferred over upload)',
      },
      validate: (value: string | null | undefined, { siblingData }: { siblingData: Record<string, unknown> }) => {
        if (!value && !siblingData?.thumbnail) {
          return 'Either a thumbnail upload or a thumbnail URL is required';
        }
        return true;
      },
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
      admin: { description: 'e.g. 5 min read' },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Full blog post content (optional, for future use)',
      },
    },
  ],
};
