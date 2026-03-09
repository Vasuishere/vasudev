import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Products } from './collections/Products';
import { Certifications } from './collections/Certifications';
import { Industries } from './collections/Industries';
import { BlogPosts } from './collections/BlogPosts';
import { Clients } from './collections/Clients';
import { Faqs } from './collections/Faqs';
import { Services } from './collections/Services';
import { Media } from './collections/Media';
import { CompanyInfo } from './globals/CompanyInfo';
import { SiteImages } from './globals/SiteImages';

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
