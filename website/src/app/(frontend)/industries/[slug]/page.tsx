import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronRight, CheckCircle, AlertTriangle, ArrowRight, Factory } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import CTABanner from '@/components/sections/CTABanner';
import { getIndustries, getIndustryBySlug, getProducts } from '@/lib/data';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.name} — Chemical Solutions | Vasudev Chemo Pharma`,
    description: `${industry.description} Discover how Vasudev Chemo Pharma serves the ${industry.name.toLowerCase()} industry with certified industrial & specialty chemicals.`,
    keywords: (industry.keywords ?? []).join(', '),
    openGraph: {
      title: `${industry.name} — Chemical Solutions | Vasudev Chemo Pharma`,
      description: industry.description,
      type: 'website',
      images: [{ url: industry.image?.startsWith?.('http') ? industry.image : industry.image ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vasudevchemopharma.com'}${industry.image}` : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vasudevchemopharma.com'}/images/company-logo.png`, alt: industry.name }],
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Find actual product objects matching the industry's chemicalsUsed list
  const products = await getProducts();
  const relatedProducts = products.filter((p) =>
    (Array.isArray(industry.chemicalsUsed) ? industry.chemicalsUsed : []).some((name) => p.name.trim().toLowerCase() === name.trim().toLowerCase())
  );

  // Related industries (other than current)
  const industries = await getIndustries();
  const relatedIndustries = industries
    .filter((ind) => ind.slug !== industry.slug)
    .slice(0, 4);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.3\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <span className="text-white font-medium" aria-current="page">{industry.name}</span>
              </li>
            </ol>
          </nav>

          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Industry Solutions</p>
          <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white mb-4">
            {industry.name}
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">{industry.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content (2/3) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-text mb-4">Industry Overview</h2>
                <p className="text-text-light leading-relaxed text-[15px]">{industry.longDescription}</p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h2 className="text-xl font-bold font-heading text-text mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Industry Challenges
                  </h2>
                  <div className="space-y-3">
                    {(industry.challenges ?? []).map((challenge, i) => (
                      <div key={`challenge-${i}`} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <span className="text-amber-500 font-bold text-sm mt-0.5">!</span>
                        <p className="text-sm text-text-light leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h2 className="text-xl font-bold font-heading text-text mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    Our Solutions
                  </h2>
                  <div className="space-y-3">
                    {(industry.solutions ?? []).map((solution, i) => (
                      <div key={`solution-${i}`} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <p className="text-sm text-text-light leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products for this Industry */}
              {relatedProducts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold font-heading text-text mb-6">
                    Products for {industry.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProducts.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="group flex items-start gap-4 p-5 bg-surface rounded-xl border border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center shrink-0">
                          <Factory className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-text group-hover:text-primary transition-colors text-[15px]">
                            {product.name}
                          </h3>
                          <p className="text-xs text-text-muted font-mono mt-0.5">{product.formula} · CAS {product.cas}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {(product.grades ?? []).slice(0, 2).map((grade) => (
                              <span key={grade} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/5 text-primary font-medium">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Us */}
              <div className="bg-surface-alt rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-bold font-heading text-text mb-4">
                  Why Choose Vasudev Chemo Pharma for {industry.name}?
                </h2>
                <p className="text-text-light leading-relaxed">{industry.whyChooseUs}</p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm"
                  >
                    Discuss Your Requirements <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Industry Image Placeholder */}
                <div className="bg-surface rounded-xl border border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-surface-alt relative overflow-hidden">
                    {industry.image ? (
                      <DriveImage
                        src={industry.image}
                        alt={industry.name}
                        size="medium"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-text-muted">
                        <Factory className="w-16 h-16 opacity-20" />
                      </div>
                    )}
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-text font-heading">{industry.name}</h3>
                    <p className="text-sm text-text-muted mt-1">{industry.description}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-surface rounded-xl border border-border p-6">
                  <h3 className="font-bold text-text mb-4 font-heading text-sm uppercase tracking-wider">Quick Facts</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Products Available</dt>
                      <dd className="text-text font-semibold">{relatedProducts.length}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Grades Offered</dt>
                      <dd className="text-text font-semibold">
                        {new Set(relatedProducts.flatMap((p) => p.grades ?? [])).size}+
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Export Markets</dt>
                      <dd className="text-text font-semibold">30+ Countries</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Certifications</dt>
                      <dd className="text-text font-semibold">ISO · GMP · REACH</dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white text-center">
                  <h3 className="font-bold mb-2 font-heading">Need Chemicals for {industry.name}?</h3>
                  <p className="text-sm text-white/80 mb-4">Get a quote with pricing, COA, and delivery timeline.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Related Industries */}
                <div className="bg-surface rounded-xl border border-border p-6">
                  <h3 className="font-bold text-text mb-4 font-heading text-sm uppercase tracking-wider">Other Industries</h3>
                  <div className="space-y-2">
                    {relatedIndustries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-alt transition-colors group text-sm"
                      >
                        <span className="text-text-light group-hover:text-primary transition-colors">{ind.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="block text-center text-sm text-primary font-semibold mt-3 hover:underline"
                    >
                      View All Industries →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Partner for ${industry.name} Chemical Supply`}
        description="Tell us your product requirements, specifications, and quantity — our team will respond within 24 hours."
        buttonText="Send Inquiry"
        buttonHref="/contact"
      />
    </>
  );
}
