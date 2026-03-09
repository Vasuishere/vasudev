import Link from 'next/link';
import { ArrowRight, Shield, BadgeCheck, Globe, MessageSquare, FlaskConical, Truck, ClipboardCheck, Factory } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import CTABanner from '@/components/sections/CTABanner';
import CertificationsPreview from '@/components/sections/CertificationsPreview';
import BlogsPreview from '@/components/sections/BlogsPreview';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { getProducts, getIndustries, getCompanyInfo } from '@/lib/data';

export default async function Home() {
  const [products, allIndustries, company] = await Promise.all([
    getProducts(),
    getIndustries(),
    getCompanyInfo(),
  ]);
  const featuredProducts = products.slice(0, 8);
  const featuredIndustries = allIndustries.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Products"
            title="Industrial & Specialty Chemical Catalogue"
            description="We manufacture and supply 16+ industrial and specialty chemicals, each produced under strict ISO-certified quality controls."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Vasudev Chemo Pharma"
            title="Built in Gujarat. Engineered for Global Standards."
            description="A decade of reliable chemical manufacturing, quality assurance, and export excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'ISO 9001:2015 Certified', desc: 'Every batch meets international quality benchmarks with full traceability.' },
              { icon: Globe, title: 'Export Expertise', desc: 'Seamless documentation, packaging, and logistics for international shipments.' },
              { icon: BadgeCheck, title: 'Competitive Pricing', desc: 'Gujarat manufacturing advantage with direct-from-source pricing.' },
              { icon: MessageSquare, title: '24hr Response Time', desc: 'Dedicated support team — inquiry responses within 24 hours.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: company?.productsCount ?? '-', label: 'Chemical Products' },
              { number: company?.experience ?? '-', label: 'Years Experience' },
              { number: company?.countriesServed ?? '-', label: 'Countries Served' },
              { number: company?.monthlyCapacity ?? '-', label: 'Monthly Capacity' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2 font-heading">{number}</div>
                <div className="text-sm text-white/80 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Industries We Serve"
            title="Chemicals for Every Industry"
            description="Our products power manufacturing across diverse sectors worldwide."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIndustries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="bg-surface rounded-xl border border-border p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group block">
                <h3 className="font-bold text-text mb-2 font-heading group-hover:text-primary transition-colors">{industry.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{industry.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="End-to-End Chemical Solutions"
            description="From manufacturing to delivery — we handle the entire value chain."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: 'Manufacturing', desc: 'ISO-certified production of 16+ chemicals with 5000+ MT monthly capacity.' },
              { icon: FlaskConical, title: 'Custom Formulation', desc: 'Tailored blends and specifications to match your exact requirements.' },
              { icon: ClipboardCheck, title: 'Quality Assurance', desc: 'In-house lab testing, COA, and full batch traceability.' },
              { icon: Truck, title: 'Export & Logistics', desc: 'Complete export documentation and shipping to 30+ countries.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn More About Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <CertificationsPreview />

      {/* Blog Preview */}
      <BlogsPreview />

      {/* Clients Carousel */}
      <ClientsCarousel />

      <CTABanner
        title="Ready to Get Started?"
        description="Tell us what you need — our team will respond within 24 hours with pricing, availability, and shipping details."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
