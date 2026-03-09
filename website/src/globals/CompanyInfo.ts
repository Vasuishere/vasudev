import type { GlobalConfig } from 'payload';

export const CompanyInfo: GlobalConfig = {
  slug: 'company-info',
  label: 'Company Information',
  admin: {
    description: 'Manage company details — name, contact, address, and stats displayed across the website.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              defaultValue: 'Vasudev Chemo Pharma',
            },
            {
              name: 'tagline',
              type: 'text',
              required: true,
            },
            {
              name: 'location',
              type: 'text',
            },
            {
              name: 'founded',
              type: 'text',
            },
            {
              name: 'experience',
              type: 'text',
              admin: { description: 'e.g. 10+' },
            },
            {
              name: 'productsCount',
              type: 'text',
              admin: { description: 'e.g. 16+' },
            },
            {
              name: 'countriesServed',
              type: 'text',
              admin: { description: 'e.g. 30+' },
            },
            {
              name: 'monthlyCapacity',
              type: 'text',
              admin: { description: 'e.g. 5000+ MT' },
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'email',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
              required: true,
            },
            {
              name: 'whatsapp',
              type: 'text',
              required: true,
              admin: { description: 'Without + prefix, e.g. 919876543210' },
            },
            {
              name: 'address',
              type: 'textarea',
            },
            {
              name: 'hours',
              type: 'text',
              admin: { description: 'Business hours, e.g. Mon–Sat: 9:00 AM – 6:00 PM IST' },
            },
            {
              name: 'website',
              type: 'text',
            },
          ],
        },
        {
          label: 'Navigation',
          fields: [
            {
              name: 'navigation',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
