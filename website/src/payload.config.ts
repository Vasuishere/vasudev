import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';

import { Users } from './collections/Users.ts';
import { Products } from './collections/Products.ts';
import { Certifications } from './collections/Certifications.ts';
import { Industries } from './collections/Industries.ts';
import { BlogPosts } from './collections/BlogPosts.ts';
import { Clients } from './collections/Clients.ts';
import { Faqs } from './collections/Faqs.ts';
import { Services } from './collections/Services.ts';
import { Media } from './collections/Media.ts';
import { CompanyInfo } from './globals/CompanyInfo.ts';
import { SiteImages } from './globals/SiteImages.ts';

const __dirname = import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url));

const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET;
if (!PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET environment variable is required');
}

const DATABASE_URI = process.env.DATABASE_URI;
if (!DATABASE_URI) {
  throw new Error('DATABASE_URI environment variable is required');
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(__dirname),
    },
  },
  collections: [
    Users,
    Products,
    Certifications,
    Industries,
    BlogPosts,
    Clients,
    Faqs,
    Services,
    Media,
  ],
  globals: [CompanyInfo, SiteImages],
  editor: lexicalEditor(),
  secret: PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URI,
    },
  }),
  sharp,
});
