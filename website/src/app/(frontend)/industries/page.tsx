import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { getIndustries, getProducts } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries Served',
  description: 'Vasudev Chemo Pharma supplies industrial & specialty chemicals to pharmaceuticals, textiles, paints, water treatment, food processing, and more.',
};

export default async function IndustriesPage() {
  const [industries, products] = await Promise.all([getIndustries(), getProducts()]);
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Industries We Serve</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Chemicals for Every Industry</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Our products are trusted by manufacturers across {industries.length > 0 ? `${industries.length} industries` : 'multiple industries'} worldwide.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              // Find products used in this industry
              const relatedProducts = products.filter((p) =>
                industry.chemicalsUsed.some((name) => p.name.trim().toLowerCase() === name.trim().toLowerCase())
              ).slice(0, 3);

              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="bg-surface rounded-xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block"
                >
                  <h3 className="text-xl font-bold text-text font-heading mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                  <p className="text-text-light leading-relaxed mb-5">{industry.description}</p>
                  {relatedProducts.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-text-light uppercase tracking-wider mb-2">Key Products</p>
                      <div className="flex flex-wrap gap-1.5">
                        {relatedProducts.map((p) => (
                          <span
                            key={p.slug}
                            className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded"
                          >
                            {p.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold mt-5 group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industries Trust Us */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Us"
            title="Why Industries Choose Vasudev Chemo Pharma"
            description="We understand the unique requirements of each industry and deliver chemicals that meet exact specifications."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Industry-Specific Grades', desc: 'We supply chemicals in grades tailored for your industry — pharmaceutical, food, technical, or analytical grade.' },
              { title: 'Regulatory Compliance', desc: 'Our products meet industry-specific regulatory requirements including REACH, FDA guidelines, and local standards.' },
              { title: 'Technical Support', desc: 'Our team includes chemical engineers who understand your process and can recommend the right product and grade.' },
              { title: 'Consistent Quality', desc: 'ISO 9001:2015 certified processes ensure batch-to-batch consistency that your production line demands.' },
              { title: 'Flexible Quantities', desc: 'From 25 kg sample orders to multi-MT bulk contracts — we handle orders of all sizes.' },
              { title: 'Reliable Supply Chain', desc: 'Strategic inventory management and Gujarat\'s raw material corridor ensure uninterrupted supply.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-6 hover:shadow-md transition-all">
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Which Chemical Do You Need?"
        description="Tell us your industry and application — we'll recommend the right product, grade, and packaging."
        buttonText="Discuss Your Requirements"
        buttonHref="/contact"
      />
    </>
  );
}
