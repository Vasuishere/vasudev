export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  thumbnail: string;
  thumbnailUrl?: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-sodium-sulphate-industrial-applications',
    title: 'Understanding Sodium Sulphate: Key Industrial Applications in 2026',
    excerpt:
      'Sodium sulphate remains one of the most widely used industrial chemicals globally. From detergent manufacturing to glass production, discover how this versatile compound powers modern industry.',
    category: 'Product Insights',
    date: '2026-03-01',
    thumbnail: '/images/company-logo.png',
    readTime: '5 min read',
  },
  {
    slug: 'chemical-export-documentation-guide',
    title: 'A Complete Guide to Chemical Export Documentation & Compliance',
    excerpt:
      'Navigating international chemical trade requires meticulous documentation. Learn about COA, MSDS, Bill of Lading, and customs requirements for smooth cross-border chemical shipments.',
    category: 'Export & Trade',
    date: '2026-02-18',
    thumbnail: '/images/company-logo.png',
    readTime: '7 min read',
  },
  {
    slug: 'iso-9001-quality-chemical-manufacturing',
    title: 'Why ISO 9001:2015 Matters for Chemical Manufacturing Quality',
    excerpt:
      'Quality management certification is more than a badge — it is a systematic approach to consistent production. Here is how ISO 9001 transforms chemical manufacturing operations.',
    category: 'Quality & Standards',
    date: '2026-02-05',
    thumbnail: '/images/company-logo.png',
    readTime: '4 min read',
  },
  {
    slug: 'gujarat-chemical-manufacturing-hub',
    title: 'Gujarat: India\'s Chemical Manufacturing Hub & Export Gateway',
    excerpt:
      'With proximity to major ports and a robust industrial ecosystem, Gujarat offers unmatched advantages for chemical manufacturing and international trade.',
    category: 'Industry News',
    date: '2026-01-20',
    thumbnail: '/images/company-logo.png',
    readTime: '6 min read',
  },
  {
    slug: 'reach-regulation-chemical-exporters',
    title: 'REACH Regulation: What Chemical Exporters Need to Know in 2026',
    excerpt:
      'The EU REACH regulation continues to evolve. Stay updated on compliance requirements, pre-registration deadlines, and documentation needed for exporting chemicals to Europe.',
    category: 'Export & Trade',
    date: '2026-01-10',
    thumbnail: '/images/company-logo.png',
    readTime: '8 min read',
  },
  {
    slug: 'titanium-dioxide-applications-coatings',
    title: 'Titanium Dioxide in Paints & Coatings: Performance & Sourcing',
    excerpt:
      'TiO₂ is the backbone of the coatings industry. Explore its role in opacity, durability, and UV resistance — plus sourcing considerations for bulk importers.',
    category: 'Product Insights',
    date: '2025-12-28',
    thumbnail: '/images/company-logo.png',
    readTime: '5 min read',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
