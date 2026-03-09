import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FlaskConical, Package, Layers, ClipboardCheck, MessageCircle } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import { getProducts, getProductBySlug } from '@/lib/data';
import { company } from '@/data/company';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.formula} | Vasudev Chemo Pharma`,
    description: `Buy ${product.name} (${product.cas}) from Vasudev Chemo Pharma. ${product.description}`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const products = await getProducts();
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading mb-2">{product.name}</h1>
          <p className="text-xl text-accent font-mono font-semibold">{product.formula}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Product Image */}
              {product.imageUrl && (
                <div className="rounded-2xl overflow-hidden border border-border bg-surface-alt">
                  <div className="relative aspect-[16/9]">
                    <DriveImage
                      src={product.imageUrl}
                      alt={product.name}
                      size="large"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Additional Product Images */}
              {product.images && product.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.images.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-border bg-surface-alt">
                      <DriveImage
                        src={img.url}
                        alt={img.caption || `${product.name} - Image ${i + 1}`}
                        size="small"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-text mb-4">Product Overview</h2>
                <p className="text-text-light leading-relaxed text-lg">{product.description}</p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <span className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                    <FlaskConical className="w-4 h-4" /> CAS: {product.cas}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-secondary/5 text-secondary px-4 py-2 rounded-lg text-sm font-medium">
                    <Layers className="w-4 h-4" /> {product.category === 'industrial' ? 'Industrial Chemical' : 'Specialty Chemical'}
                  </span>
                </div>
              </div>

              {/* Specifications */}
              {product.specs && (
                <div>
                  <h2 className="text-2xl font-bold font-heading text-text mb-4">Technical Specifications</h2>
                  <div className="bg-surface-alt rounded-xl border border-border overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specs).map(([key, value]: [string, unknown], i) => (
                          <tr key={key} className={i % 2 === 0 ? 'bg-surface-alt' : 'bg-surface'}>
                            <td className="px-6 py-3.5 text-sm font-medium text-text capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                            <td className="px-6 py-3.5 text-sm text-text-light">{typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' ? String(value) : Array.isArray(value) ? value.map(String).join(', ') : value == null ? '' : JSON.stringify(value)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-text mb-4">Applications</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, index) => (
                    <li key={`${app}-${index}`} className="flex items-start gap-3 text-text-light">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-text mb-4">Industries Served</h2>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span key={ind} className="bg-surface-alt border border-border text-text-light px-4 py-2 rounded-full text-sm">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="bg-surface rounded-xl border border-border p-6 sticky top-28">
                <h3 className="font-bold text-text font-heading text-lg mb-5">Product Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-light">Chemical Formula</span>
                    <span className="font-mono font-semibold text-text">{product.formula}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">CAS Number</span>
                    <span className="font-mono text-text">{product.cas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-light">Category</span>
                    <span className="text-text capitalize">{product.category}</span>
                  </div>
                  {product.grades && (
                    <div>
                      <span className="text-text-light block mb-2">Available Grades</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.grades.map((grade) => (
                          <span key={grade} className="bg-primary/5 text-primary px-2.5 py-1 rounded text-xs font-medium">{grade}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.packaging && (
                    <div>
                      <span className="text-text-light block mb-2">Packaging</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.packaging.map((pkg) => (
                          <span key={pkg} className="bg-surface-alt border border-border px-2.5 py-1 rounded text-xs">{pkg}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <hr className="my-6 border-border" />

                <div className="space-y-3">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all text-sm"
                  >
                    <ClipboardCheck className="w-4 h-4" /> Request Quote
                  </Link>
                  <a
                    href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I need a quote for ${product.name} (${product.cas}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20bd5a] transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
                  </a>
                </div>

                <p className="text-xs text-text-light mt-4 text-center">COA / MSDS / TDS available on request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-text mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="bg-surface rounded-xl border border-border p-6 hover:shadow-md hover:-translate-y-1 transition-all">
                  <p className="text-xs text-primary font-mono mb-1">{p.formula}</p>
                  <h3 className="font-bold text-text mb-2">{p.name}</h3>
                  <p className="text-xs text-text-light">CAS: {p.cas}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </Link>
      </div>
    </>
  );
}
