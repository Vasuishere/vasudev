/**
 * Seed script — populates Payload CMS with existing static data.
 *
 * Run with:  npx tsx src/seed.ts
 */
import 'dotenv/config';
import { getPayload } from 'payload';
import configPromise from './payload.config.ts';

// Static data imports
import { products } from './data/products.ts';
import { certifications } from './data/certifications.ts';
import { industries } from './data/industries.ts';
import { blogPosts } from './data/blog.ts';
import { clients } from './data/clients.ts';
import { company, faqs, services } from './data/company.ts';

async function seed() {
  const payload = await getPayload({ config: configPromise });

  let failureCount = 0;
  console.log('🌱 Starting database seed...\n');

  // ── 1. Create admin user ──────────────────────────────────
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required for seeding');
  }
  try {
    const existingUsers = await payload.find({ collection: 'users', where: { email: { equals: adminEmail } }, limit: 1 });
    if (existingUsers.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
          name: 'Admin',
        },
      });
      console.log('✅ Admin user created');
    } else {
      console.log('⏭️  Admin user already exists, skipping.');
    }
  } catch (e) {
    console.error('❌ Error creating admin user:', e);
    failureCount++;
  }

  // ── 2. Seed Products ──────────────────────────────────────
  console.log('\n📦 Seeding Products...');
  for (const product of products) {
    try {
      const existing = await payload.find({
        collection: 'products',
        where: { slug: { equals: product.slug } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${product.name} already exists`);
        continue;
      }
      await payload.create({
        collection: 'products',
        data: {
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          formula: product.formula,
          cas: product.cas,
          category: product.category,
          subcategory: product.subcategory,
          description: product.description,
          supplier: product.supplier,
          originCountry: product.originCountry,
          price: product.price,
          currency: product.currency,
          priceUnit: product.priceUnit,
          unitOfMeasure: product.unitOfMeasure,
          weight: product.weight,
          dimensions: product.dimensions,
          safetyClass: product.safetyClass,
          status: product.status ?? 'active',
          applications: (product.applications ?? []).map((a) => ({ value: a })),
          industries: (product.industries ?? []).map((i) => ({ value: i })),
          grades: (product.grades ?? []).map((g) => ({ value: g })),
          packaging: (product.packaging ?? []).map((p) => ({ value: p })),
          tags: (product.tags ?? []).map((t) => ({ value: t })),
          specs: Object.entries(product.specs ?? {}).map(([key, value]) => ({ key, value })),
          documents: (product.documents ?? []).map((d) => ({
            docType: d.docType,
            fileUrl: d.fileUrl,
            fileName: d.fileName,
            uploadedBy: d.uploadedBy,
            accessLevel: d.accessLevel ?? 'public',
          })),
        },
      });
      console.log(`  ✅ ${product.name}`);
    } catch (e) {
      console.error(`  ❌ ${product.name}:`, e);
      failureCount++;
    }
  }

  // ── 3. Seed Certifications ────────────────────────────────
  console.log('\n🏅 Seeding Certifications...');
  for (const cert of certifications) {
    try {
      const existing = await payload.find({
        collection: 'certifications',
        where: { slug: { equals: cert.slug } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${cert.name} already exists`);
        continue;
      }
      await payload.create({
        collection: 'certifications',
        data: {
          name: cert.name,
          slug: cert.slug,
          shortName: cert.shortName,
          description: cert.description,
          body: cert.body,
          scope: cert.scope,
          scopeType: cert.scopeType,
          keyAreas: (cert.keyAreas ?? []).map((a) => ({ value: a })),
          validUntil: cert.validUntil,
          importance: cert.importance,
        },
      });
      console.log(`  ✅ ${cert.name}`);
    } catch (e) {
      console.error(`  ❌ ${cert.name}:`, e);
      failureCount++;
    }
  }

  // ── 4. Seed Industries ────────────────────────────────────
  console.log('\n🏭 Seeding Industries...');
  for (const ind of industries) {
    try {
      const existing = await payload.find({
        collection: 'industries',
        where: { slug: { equals: ind.slug } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${ind.name} already exists`);
        continue;
      }
      await payload.create({
        collection: 'industries',
        data: {
          name: ind.name,
          slug: ind.slug,
          description: ind.description,
          longDescription: ind.longDescription,
          icon: ind.icon,
          keywords: (ind.keywords ?? []).map((k) => ({ value: k })),
          challenges: (ind.challenges ?? []).map((c) => ({ value: c })),
          solutions: (ind.solutions ?? []).map((s) => ({ value: s })),
          chemicalsUsed: (ind.chemicalsUsed ?? []).map((c) => ({ value: c })),
          whyChooseUs: ind.whyChooseUs,
        },
      });
      console.log(`  ✅ ${ind.name}`);
    } catch (e) {
      console.error(`  ❌ ${ind.name}:`, e);
      failureCount++;
    }
  }

  // ── 5. Seed Blog Posts ────────────────────────────────────
  console.log('\n📝 Seeding Blog Posts...');
  for (const post of blogPosts) {
    try {
      const existing = await payload.find({
        collection: 'blog-posts',
        where: { slug: { equals: post.slug } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${post.title} already exists`);
        continue;
      }
      await payload.create({
        collection: 'blog-posts',
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          category: post.category,
          date: post.date,
          readTime: post.readTime,
        },
      });
      console.log(`  ✅ ${post.title}`);
    } catch (e) {
      console.error(`  ❌ ${post.title}:`, e);
      failureCount++;
    }
  }

  // ── 6. Seed Clients ──────────────────────────────────────
  console.log('\n🤝 Seeding Clients...');
  for (const client of clients) {
    try {
      const existing = await payload.find({
        collection: 'clients',
        where: { name: { equals: client.name } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${client.name} already exists`);
        continue;
      }
      await payload.create({
        collection: 'clients',
        data: {
          name: client.name,
        },
      });
      console.log(`  ✅ ${client.name}`);
    } catch (e) {
      console.error(`  ❌ ${client.name}:`, e);
      failureCount++;
    }
  }

  // ── 7. Seed FAQs ─────────────────────────────────────────
  console.log('\n❓ Seeding FAQs...');
  for (let i = 0; i < faqs.length; i++) {
    const faq = faqs[i];
    try {
      const existing = await payload.find({
        collection: 'faqs',
        where: { question: { equals: faq.question } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  FAQ ${i + 1} already exists`);
        continue;
      }
      await payload.create({
        collection: 'faqs',
        data: {
          question: faq.question,
          answer: faq.answer,
          order: i + 1,
        },
      });
      console.log(`  ✅ FAQ ${i + 1}: ${faq.question.slice(0, 50)}...`);
    } catch (e) {
      console.error(`  ❌ FAQ ${i + 1}:`, e);
      failureCount++;
    }
  }

  // ── 8. Seed Services ──────────────────────────────────────
  console.log('\n🔧 Seeding Services...');
  for (let i = 0; i < services.length; i++) {
    const service = services[i];
    try {
      const existing = await payload.find({
        collection: 'services',
        where: { title: { equals: service.title } },
        limit: 1,
      });
      if (existing.totalDocs > 0) {
        console.log(`  ⏭️  ${service.title} already exists`);
        continue;
      }
      await payload.create({
        collection: 'services',
        data: {
          title: service.title,
          description: service.description,
          features: (service.features ?? []).map((f) => ({ value: f })),
          order: i + 1,
        },
      });
      console.log(`  ✅ ${service.title}`);
    } catch (e) {
      console.error(`  ❌ ${service.title}:`, e);
      failureCount++;
    }
  }

  // ── 9. Seed Company Info (Global) ─────────────────────────
  console.log('\n🏢 Seeding Company Info...');
  try {
    await payload.updateGlobal({
      slug: 'company-info',
      data: {
        name: company.name,
        tagline: company.tagline,
        location: company.location,
        founded: company.founded,
        experience: company.experience,
        productsCount: company.productsCount,
        countriesServed: company.countriesServed,
        monthlyCapacity: company.monthlyCapacity,
        email: company.email,
        phone: company.phone,
        whatsapp: company.whatsapp,
        address: company.address,
        hours: company.hours,
        website: company.website,
        navigation: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Products', href: '/products' },
          { label: 'Services', href: '/services' },
          { label: 'Certifications', href: '/certifications' },
          { label: 'Export', href: '/export' },
          { label: 'Quality', href: '/quality' },
          { label: 'Industries', href: '/industries' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    });
    console.log('  ✅ Company info saved');
  } catch (e) {
    console.error('  ❌ Company info:', e);
    failureCount++;
  }

  // ── 10. Seed Site Images (Global) ─────────────────────────
  // Sample VCP logo — replace these with your actual Google Drive share URLs from the admin panel.
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const SAMPLE_LOGO = ''; // Paste your Google Drive logo URL here
  console.log('\n🖼️  Seeding Site Images...');
  try {
    await payload.updateGlobal({
      slug: 'site-images',
      data: {
        heroBackground: '',
        heroOverlay: SAMPLE_LOGO,
        aboutMain: '',
        aboutFactory: '',
        aboutTeam: '',
        logo: SAMPLE_LOGO,
        logoName: '',
        logoWhite: '',
        defaultProduct: SAMPLE_LOGO,
        defaultBlog: '',
        defaultCertification: '',
        defaultIndustry: '',
        ctaBackground: '',
        exportBanner: '',
        qualityBanner: '',
        gallery: [],
      },
    });
    console.log('  ✅ Site images saved (update URLs from admin panel)');
  } catch (e) {
    console.error('  ❌ Site images:', e);
    failureCount++;
  }

  console.log('\n🎉 Seed complete!\n');
  process.exit(failureCount > 0 ? 1 : 0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
