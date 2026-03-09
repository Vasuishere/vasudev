/**
 * Unified data access layer.
 *
 * Fetches data from Payload CMS (database).
 * Falls back to static files when Payload is unavailable (e.g. build time without DB).
 */
import { getPayloadClient } from './payload';

// Static fallbacks
import { products as staticProducts, type Product, type ProductDocument } from '@/data/products';
import { certifications as staticCertifications, type Certification } from '@/data/certifications';
import { industries as staticIndustries, type Industry } from '@/data/industries';
import { blogPosts as staticBlogPosts, type BlogPost } from '@/data/blog';
import { clients as staticClients, type Client } from '@/data/clients';
import {
  company as staticCompany,
  faqs as staticFaqs,
  services as staticServices,
  navigation as staticNavigation,
} from '@/data/company';

// ─── Helper: extract array field values ───
function extractArray(arr: { value: string }[] | undefined): string[] {
  return arr?.map((item) => item.value) ?? [];
}

function extractSpecs(arr: { key: string; value: string }[] | undefined): Record<string, string> {
  if (!arr) return {};
  return Object.fromEntries(arr.map((item) => [item.key, item.value]));
}

function extractDocuments(arr: Record<string, unknown>[] | undefined): ProductDocument[] {
  if (!arr) return [];
  return arr.map((d) => ({
    docType: d.docType as ProductDocument['docType'],
    fileUrl: d.fileUrl as string,
    fileName: d.fileName as string | undefined,
    uploadedBy: d.uploadedBy as string | undefined,
    accessLevel: (d.accessLevel as ProductDocument['accessLevel']) ?? 'public',
  }));
}

function mapDocToProduct(doc: Record<string, unknown>): Product {
  return {
    slug: doc.slug as string,
    name: doc.name as string,
    sku: doc.sku as string | undefined,
    formula: doc.formula as string | undefined,
    cas: doc.cas as string | undefined,
    category: doc.category as Product['category'],
    subcategory: doc.subcategory as string | undefined,
    description: doc.description as string,
    applications: extractArray(doc.applications as { value: string }[]),
    industries: extractArray(doc.industries as { value: string }[]),
    grades: extractArray(doc.grades as { value: string }[]),
    packaging: extractArray(doc.packaging as { value: string }[]),
    specs: extractSpecs(doc.specs as { key: string; value: string }[]),
    tags: extractArray(doc.tags as { value: string }[]),
    imageUrl: doc.imageUrl as string | undefined,
    images: (doc.images as { url: string; caption: string }[] | undefined) ?? [],
    supplier: doc.supplier as string | undefined,
    originCountry: doc.originCountry as string | undefined,
    price: doc.price as number | undefined,
    currency: doc.currency as string | undefined,
    priceUnit: doc.priceUnit as string | undefined,
    unitOfMeasure: doc.unitOfMeasure as string | undefined,
    weight: doc.weight as string | undefined,
    dimensions: doc.dimensions as string | undefined,
    safetyClass: doc.safetyClass as string | undefined,
    documents: extractDocuments(doc.documents as Record<string, unknown>[] | undefined),
    status: (doc.status as Product['status']) ?? 'active',
  };
}

// ─── Products ───────────────────────────────────────────────
export async function getProducts(): Promise<Product[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'products',
      limit: 200,
      sort: 'name',
    });
    if (result.totalDocs === 0) return [...staticProducts];
    return result.docs.map((doc) => mapDocToProduct(doc as unknown as Record<string, unknown>));
  } catch {
    return [...staticProducts];
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'products',
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (result.totalDocs === 0) return staticProducts.find((p) => p.slug === slug);
    return mapDocToProduct(result.docs[0] as unknown as Record<string, unknown>);
  } catch {
    return staticProducts.find((p) => p.slug === slug);
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const all = await getProducts();
  if (category === 'all') return all;
  return all.filter((p) => p.category === category);
}

// ─── Certifications ─────────────────────────────────────────
export async function getCertifications(): Promise<Certification[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'certifications',
      limit: 50,
    });
    if (result.totalDocs === 0) return [...staticCertifications];
    return result.docs.map((doc) => ({
      slug: doc.slug,
      name: doc.name,
      shortName: doc.shortName,
      description: doc.description,
      body: doc.body,
      scope: doc.scope,
      scopeType: doc.scopeType,
      keyAreas: extractArray(doc.keyAreas as { value: string }[]),
      validUntil: doc.validUntil,
      importance: doc.importance,
      imageUrl: (doc as unknown as Record<string, unknown>).imageUrl as string | undefined,
    }));
  } catch {
    return [...staticCertifications];
  }
}

export async function getCertificationBySlug(slug: string): Promise<Certification | undefined> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'certifications',
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (result.totalDocs === 0) return staticCertifications.find((c) => c.slug === slug);
    const doc = result.docs[0];
    return {
      slug: doc.slug,
      name: doc.name,
      shortName: doc.shortName,
      description: doc.description,
      body: doc.body,
      scope: doc.scope,
      scopeType: doc.scopeType,
      keyAreas: extractArray(doc.keyAreas as { value: string }[]),
      validUntil: doc.validUntil,
      importance: doc.importance,
      imageUrl: (doc as unknown as Record<string, unknown>).imageUrl as string | undefined,
    };
  } catch {
    return staticCertifications.find((c) => c.slug === slug);
  }
}

// ─── Industries ─────────────────────────────────────────────
export async function getIndustries(): Promise<Industry[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'industries',
      limit: 50,
      sort: 'name',
    });
    if (result.totalDocs === 0) return [...staticIndustries];
    return result.docs.map((doc) => ({
      slug: doc.slug,
      name: doc.name,
      description: doc.description,
      longDescription: doc.longDescription,
      icon: doc.icon,
      image: (doc as unknown as Record<string, unknown>).imageUrl as string || (typeof doc.image === 'object' && doc.image?.url ? doc.image.url : '/images/company-logo.png'),
      keywords: extractArray(doc.keywords as { value: string }[]),
      challenges: extractArray(doc.challenges as { value: string }[]),
      solutions: extractArray(doc.solutions as { value: string }[]),
      chemicalsUsed: extractArray(doc.chemicalsUsed as { value: string }[]),
      whyChooseUs: doc.whyChooseUs,
    }));
  } catch {
    return [...staticIndustries];
  }
}

export async function getIndustryBySlug(slug: string): Promise<Industry | undefined> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'industries',
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (result.totalDocs === 0) return staticIndustries.find((i) => i.slug === slug);
    const doc = result.docs[0];
    return {
      slug: doc.slug,
      name: doc.name,
      description: doc.description,
      longDescription: doc.longDescription,
      icon: doc.icon,
      image: (doc as unknown as Record<string, unknown>).imageUrl as string || (typeof doc.image === 'object' && doc.image?.url ? doc.image.url : '/images/company-logo.png'),
      keywords: extractArray(doc.keywords as { value: string }[]),
      challenges: extractArray(doc.challenges as { value: string }[]),
      solutions: extractArray(doc.solutions as { value: string }[]),
      chemicalsUsed: extractArray(doc.chemicalsUsed as { value: string }[]),
      whyChooseUs: doc.whyChooseUs,
    };
  } catch {
    return staticIndustries.find((i) => i.slug === slug);
  }
}

// ─── Blog Posts ─────────────────────────────────────────────
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'blog-posts',
      limit: 50,
      sort: '-date',
    });
    if (result.totalDocs === 0) return [...staticBlogPosts];
    return result.docs.map((doc) => ({
      slug: doc.slug,
      title: doc.title,
      excerpt: doc.excerpt,
      category: doc.category,
      date: typeof doc.date === 'string' ? doc.date.split('T')[0] : doc.date,
      thumbnail: typeof doc.thumbnail === 'object' && doc.thumbnail?.url ? doc.thumbnail.url : '/images/company-logo.png',
      thumbnailUrl: (doc as unknown as Record<string, unknown>).thumbnailUrl as string | undefined,
      readTime: doc.readTime,
    }));
  } catch {
    return [...staticBlogPosts];
  }
}

export async function getLatestBlogPosts(count: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.slice(0, count);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (result.totalDocs === 0) return staticBlogPosts.find((p) => p.slug === slug);
    const doc = result.docs[0];
    return {
      slug: doc.slug,
      title: doc.title,
      excerpt: doc.excerpt,
      category: doc.category,
      date: typeof doc.date === 'string' ? doc.date.split('T')[0] : doc.date,
      thumbnail: typeof doc.thumbnail === 'object' && doc.thumbnail?.url ? doc.thumbnail.url : '/images/company-logo.png',
      thumbnailUrl: (doc as unknown as Record<string, unknown>).thumbnailUrl as string | undefined,
      readTime: doc.readTime,
    };
  } catch {
    return staticBlogPosts.find((p) => p.slug === slug);
  }
}

// ─── Clients ────────────────────────────────────────────────
export async function getClients(): Promise<Client[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'clients',
      limit: 50,
    });
    if (result.totalDocs === 0) return [...staticClients];
    return result.docs.map((doc) => ({
      name: doc.name,
      logo: typeof doc.logo === 'object' && doc.logo?.url ? doc.logo.url : '/images/company-logo.png',
      logoUrl: (doc as unknown as Record<string, unknown>).logoUrl as string | undefined,
    }));
  } catch {
    return [...staticClients];
  }
}

// ─── FAQs ───────────────────────────────────────────────────
type FAQ = { question: string; answer: string };
export async function getFaqs(): Promise<FAQ[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'faqs',
      limit: 50,
      sort: 'order',
    });
    if (result.totalDocs === 0) return [...staticFaqs];
    return result.docs.map((doc) => ({
      question: doc.question,
      answer: doc.answer,
    }));
  } catch {
    return [...staticFaqs];
  }
}

// ─── Services ───────────────────────────────────────────────
type Service = { title: string; description: string; features: string[] };
export async function getServices(): Promise<Service[]> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'services',
      limit: 20,
      sort: 'order',
    });
    if (result.totalDocs === 0) return [...staticServices].map((s) => ({ ...s, features: [...s.features] }));
    return result.docs.map((doc) => ({
      title: doc.title,
      description: doc.description,
      features: extractArray(doc.features as { value: string }[]),
    }));
  } catch {
    return [...staticServices].map((s) => ({ ...s, features: [...s.features] }));
  }
}

// ─── Company Info ───────────────────────────────────────────
type CompanyData = typeof staticCompany;
export async function getCompanyInfo(): Promise<CompanyData> {
  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({ slug: 'company-info' });
    return {
      name: doc.name ?? staticCompany.name,
      tagline: doc.tagline ?? staticCompany.tagline,
      location: doc.location ?? staticCompany.location,
      founded: doc.founded ?? staticCompany.founded,
      experience: doc.experience ?? staticCompany.experience,
      productsCount: doc.productsCount ?? staticCompany.productsCount,
      countriesServed: doc.countriesServed ?? staticCompany.countriesServed,
      monthlyCapacity: doc.monthlyCapacity ?? staticCompany.monthlyCapacity,
      email: doc.email ?? staticCompany.email,
      phone: doc.phone ?? staticCompany.phone,
      whatsapp: doc.whatsapp ?? staticCompany.whatsapp,
      address: doc.address ?? staticCompany.address,
      hours: doc.hours ?? staticCompany.hours,
      website: doc.website ?? staticCompany.website,
    } as CompanyData;
  } catch {
    return staticCompany;
  }
}

type NavItem = { label: string; href: string };
export async function getNavigation(): Promise<readonly NavItem[]> {
  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({ slug: 'company-info' });
    if (doc.navigation && doc.navigation.length > 0) {
      return doc.navigation.map((item: { label: string; href: string }) => ({
        label: item.label,
        href: item.href,
      }));
    }
    return staticNavigation;
  } catch {
    return staticNavigation;
  }
}

// ─── Site Images ────────────────────────────────────────────
export interface SiteImagesData {
  heroBackground?: string;
  heroOverlay?: string;
  aboutMain?: string;
  aboutFactory?: string;
  aboutTeam?: string;
  logo?: string;
  logoName?: string;
  logoWhite?: string;
  defaultProduct?: string;
  defaultBlog?: string;
  defaultCertification?: string;
  defaultIndustry?: string;
  ctaBackground?: string;
  exportBanner?: string;
  qualityBanner?: string;
  gallery?: { url: string; altText?: string }[];
}

const defaultSiteImages: SiteImagesData = {};

export async function getSiteImages(): Promise<SiteImagesData> {
  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({ slug: 'site-images' });
    const d = doc as unknown as Record<string, unknown>;
    return {
      heroBackground: d.heroBackground as string | undefined,
      heroOverlay: d.heroOverlay as string | undefined,
      aboutMain: d.aboutMain as string | undefined,
      aboutFactory: d.aboutFactory as string | undefined,
      aboutTeam: d.aboutTeam as string | undefined,
      logo: d.logo as string | undefined,
      logoName: d.logoName as string | undefined,
      logoWhite: d.logoWhite as string | undefined,
      defaultProduct: d.defaultProduct as string | undefined,
      defaultBlog: d.defaultBlog as string | undefined,
      defaultCertification: d.defaultCertification as string | undefined,
      defaultIndustry: d.defaultIndustry as string | undefined,
      ctaBackground: d.ctaBackground as string | undefined,
      exportBanner: d.exportBanner as string | undefined,
      qualityBanner: d.qualityBanner as string | undefined,
      gallery: d.gallery as { url: string; altText?: string }[] | undefined,
    };
  } catch {
    return defaultSiteImages;
  }
}
