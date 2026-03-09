import type { GlobalConfig } from 'payload';

export const SiteImages: GlobalConfig = {
  slug: 'site-images',
  label: 'Site Images',
  admin: {
    description:
      'Manage all website images using Google Drive share URLs. Paste the Drive share link — the site auto-generates optimized sizes.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroBackground',
              type: 'text',
              admin: {
                description: 'Google Drive URL for the hero background image (1920×800 recommended)',
              },
            },
            {
              name: 'heroOverlay',
              type: 'text',
              admin: {
                description: 'Google Drive URL for the hero overlay/foreground image',
              },
            },
          ],
        },
        {
          label: 'About Section',
          fields: [
            {
              name: 'aboutMain',
              type: 'text',
              admin: {
                description: 'Main image for the About page (800×600 recommended)',
              },
            },
            {
              name: 'aboutFactory',
              type: 'text',
              admin: {
                description: 'Factory/facility image for About page',
              },
            },
            {
              name: 'aboutTeam',
              type: 'text',
              admin: {
                description: 'Team photo for About page',
              },
            },
          ],
        },
        {
          label: 'Logos',
          fields: [
            {
              name: 'logo',
              type: 'text',
              admin: {
                description: 'Company logo (Google Drive URL) — used in navbar and footer',
              },
            },
            {
              name: 'logoName',
              type: 'text',
              admin: {
                description: 'Company name logo / wordmark (Google Drive URL)',
              },
            },
            {
              name: 'logoWhite',
              type: 'text',
              admin: {
                description: 'White/inverted logo for dark backgrounds',
              },
            },
          ],
        },
        {
          label: 'Defaults',
          fields: [
            {
              name: 'defaultProduct',
              type: 'text',
              admin: {
                description: 'Default product image when a product has no image set',
              },
            },
            {
              name: 'defaultBlog',
              type: 'text',
              admin: {
                description: 'Default blog thumbnail when a post has no image set',
              },
            },
            {
              name: 'defaultCertification',
              type: 'text',
              admin: {
                description: 'Default certification badge image',
              },
            },
            {
              name: 'defaultIndustry',
              type: 'text',
              admin: {
                description: 'Default industry image',
              },
            },
          ],
        },
        {
          label: 'CTA & Banners',
          fields: [
            {
              name: 'ctaBackground',
              type: 'text',
              admin: {
                description: 'Background image for CTA / banner sections',
              },
            },
            {
              name: 'exportBanner',
              type: 'text',
              admin: {
                description: 'Banner image for the Export page',
              },
            },
            {
              name: 'qualityBanner',
              type: 'text',
              admin: {
                description: 'Banner image for the Quality page',
              },
            },
          ],
        },
        {
          label: 'Gallery',
          fields: [
            {
              name: 'gallery',
              type: 'array',
              admin: {
                description: 'General image gallery — facility photos, labs, warehouse, etc.',
              },
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  admin: { description: 'Google Drive share URL' },
                },
                {
                  name: 'altText',
                  type: 'text',
                  required: true,
                  admin: { description: 'Alt text for the image (required for accessibility)' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
