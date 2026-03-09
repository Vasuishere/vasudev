import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Award, ArrowLeft, ChevronRight, CheckCircle, ExternalLink } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';
import { getCertifications, getCertificationBySlug } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const certifications = await getCertifications();
  return certifications.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);
  if (!cert) return { title: 'Certification Not Found' };

  return {
    title: `${cert.name} — ${cert.description} | Vasudev Chemo Pharma`,
    description: cert.scope,
  };
}

export default async function CertificationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);

  if (!cert) {
    notFound();
  }

  const certifications = await getCertifications();
  const relatedCerts = certifications.filter((c) => c.slug !== cert.slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <Link href="/certifications" className="hover:text-primary transition-colors">Certifications</Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li>
                <span className="text-text font-medium" aria-current="page">{cert.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Certifications
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-text mb-2">{cert.name}</h1>
                  <p className="text-lg text-primary font-medium">{cert.description}</p>
                </div>
              </div>

              {/* Scope */}
              <div className="mb-10">
                <h2 className="text-xl font-bold font-heading text-text mb-4">Scope & Coverage</h2>
                <p className="text-text-light leading-relaxed">{cert.scope}</p>
              </div>

              {/* Key Areas */}
              <div className="mb-10">
                <h2 className="text-xl font-bold font-heading text-text mb-4">Key Covered Areas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cert.keyAreas.map((area, i) => (
                    <div key={`${area}-${i}`} className="flex items-start gap-3 p-4 bg-surface-alt rounded-lg">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-text-light">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Importance */}
              <div className="mb-10">
                <h2 className="text-xl font-bold font-heading text-text mb-4">Why It Matters</h2>
                <p className="text-text-light leading-relaxed">{cert.importance}</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Certificate Info Card */}
                <div className="bg-surface rounded-xl border border-border p-6">
                  <h3 className="font-bold text-text mb-4 font-heading">Certificate Information</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Standard</dt>
                      <dd className="text-text font-medium">{cert.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Certifying Body</dt>
                      <dd className="text-text font-medium">{cert.body}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Valid Until</dt>
                      <dd className="text-text font-medium">{cert.validUntil}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-muted">Scope</dt>
                      <dd className="text-text font-medium">{cert.scopeType}</dd>
                    </div>
                  </dl>
                </div>

                {/* Certificate Image Placeholder */}
                <div className="bg-surface rounded-xl border border-border p-6 flex flex-col items-center justify-center">
                  <div className="w-full aspect-[3/4] bg-surface-alt rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src="/images/company-logo.png"
                      alt={`${cert.name} certificate`}
                      width={120}
                      height={120}
                      className="opacity-20"
                    />
                  </div>
                  <p className="text-xs text-text-muted text-center">Certificate image placeholder</p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/quality"
                    className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary px-6 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Quality Page
                  </Link>
                </div>

                {/* Related Certifications */}
                <div className="bg-surface rounded-xl border border-border p-6">
                  <h3 className="font-bold text-text mb-4 font-heading">Other Certifications</h3>
                  <div className="space-y-3">
                    {relatedCerts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/certifications/${related.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-alt transition-colors group"
                      >
                        <Award className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-text group-hover:text-primary transition-colors">{related.name}</div>
                          <div className="text-xs text-text-muted">{related.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Certified Chemical Supply?"
        description="All our products come with COA, MSDS, and full traceability documentation."
        buttonText="Send Inquiry"
        buttonHref="/contact"
      />
    </>
  );
}
