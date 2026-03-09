import { Shield, Award, Globe, Users, MapPin, FlaskConical, Target, Eye, Heart } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import DriveImage from '@/components/ui/DriveImage';
import { company, certifications } from '@/data/company';
import { getSiteImages } from '@/lib/data';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vasudev Chemo Pharma — a Gujarat-based ISO 9001:2015 certified manufacturer and exporter of industrial & specialty chemicals since 2014.',
};

export default async function AboutPage() {
  const siteImages = await getSiteImages();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">About Vasudev Chemo Pharma</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Built in Gujarat. Trusted Globally.</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Over a decade of excellence in chemical manufacturing, quality assurance, and global export services.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">From Gujarat to the World</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Founded in 2014, Vasudev Chemo Pharma began as a small chemical manufacturing unit in Gujarat — India&apos;s largest chemical manufacturing hub. With a vision to supply high-purity chemicals to the global market, we invested early in quality systems, lab infrastructure, and export documentation capabilities.
                </p>
                <p>
                  Today, we operate a state-of-the-art manufacturing facility with a monthly production capacity exceeding 5,000 metric tonnes. Our product portfolio spans 16+ industrial and specialty chemicals, serving clients across 30+ countries in industries ranging from pharmaceuticals to textiles, paints to water treatment.
                </p>
                <p>
                  Our Gujarat location provides us with strategic advantages — proximity to Kandla, Mundra, and Nhava Sheva ports, access to raw material corridors, and a competitive cost structure that we pass on to our customers.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {/* Company Image */}
              {siteImages.aboutMain ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <DriveImage
                    src={siteImages.aboutMain}
                    alt="Vasudev Chemo Pharma Facility"
                    size="large"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10 border border-border">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: company.experience, label: 'Years Experience', icon: Award },
                      { number: `${company.productsCount}+`, label: 'Products', icon: FlaskConical },
                      { number: `${company.countriesServed}+`, label: 'Countries Served', icon: Globe },
                      { number: company.monthlyCapacity, label: 'Monthly Capacity', icon: Shield },
                    ].map(({ number, label, icon: Icon }) => (
                      <div key={label} className="text-center">
                        <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-2xl font-extrabold text-text font-heading">{number}</div>
                        <div className="text-sm text-text-light">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats Grid (always shown below image) */}
              {siteImages.aboutMain && (
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: company.experience, label: 'Years Experience', icon: Award },
                      { number: `${company.productsCount}+`, label: 'Products', icon: FlaskConical },
                      { number: `${company.countriesServed}+`, label: 'Countries Served', icon: Globe },
                      { number: company.monthlyCapacity, label: 'Monthly Capacity', icon: Shield },
                    ].map(({ number, label, icon: Icon }) => (
                      <div key={label} className="text-center">
                        <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-extrabold text-text font-heading">{number}</div>
                        <div className="text-xs text-text-light">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Foundation"
            title="Mission, Vision & Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To be a trusted global supplier of high-quality industrial and specialty chemicals, delivering consistent purity, competitive pricing, and reliable supply chain solutions to manufacturers worldwide.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become one of India\'s leading chemical exporters, recognized for innovation, sustainability, and customer-centric service — making Gujarat\'s chemical expertise accessible to the world.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Quality without compromise. Transparency in every transaction. Environmental responsibility in manufacturing. Long-term relationships built on trust and consistent delivery.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text font-heading mb-3">{title}</h3>
                <p className="text-text-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Key Milestones"
            description="A decade of steady growth and expanding global reach."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {[
                { year: '2014', event: 'Founded Vasudev Chemo Pharma in Gujarat, India', detail: 'Started operations with a focus on basic industrial chemicals.' },
                { year: '2016', event: 'Achieved ISO 9001:2015 Certification', detail: 'Implemented robust quality management system across all operations.' },
                { year: '2018', event: 'Expanded to 10+ product lines', detail: 'Added specialty chemicals to our portfolio, serving new industries.' },
                { year: '2019', event: 'First international export shipment', detail: 'Began exporting to Southeast Asian and Middle Eastern markets.' },
                { year: '2021', event: 'Reached 20+ countries served', detail: 'Expanded global footprint with dedicated export documentation team.' },
                { year: '2023', event: 'Crossed 5,000 MT monthly capacity', detail: 'Major facility expansion to meet growing domestic and export demand.' },
                { year: '2024', event: 'ISO 14001 & REACH Ready', detail: 'Adopted environmental management standards and EU REACH compliance readiness.' },
              ].map(({ year, event, detail }, index) => (
                <div key={year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {year.slice(2)}
                    </div>
                    {index < 6 && <div className="w-0.5 h-full bg-primary/20 mt-0" />}
                  </div>
                  <div className="pb-10">
                    <p className="text-xs text-primary font-semibold mb-1">{year}</p>
                    <h3 className="font-bold text-text mb-1">{event}</h3>
                    <p className="text-sm text-text-light">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Certifications"
            title="Quality & Compliance"
            description="Our certifications reflect our commitment to international quality and environmental standards."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-surface rounded-xl border border-border p-8 text-center hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-text text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-text-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Strategic Location</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">The Gujarat Advantage</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Gujarat accounts for over 35% of India&apos;s chemical production. Our manufacturing facility is strategically located in this industrial heartland, giving us unmatched advantages in raw material access, logistics, and cost efficiency.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, text: 'Proximity to Kandla, Mundra & Nhava Sheva ports' },
                  { icon: Users, text: 'Access to skilled chemical engineering workforce' },
                  { icon: Globe, text: 'Established export corridors to 30+ countries' },
                  { icon: Shield, text: 'Government-supported industrial infrastructure' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10 border border-border">
              <h3 className="font-bold text-text text-xl font-heading mb-6">Gujarat, India</h3>
              <p className="text-text-light mb-6 leading-relaxed">
                India&apos;s largest chemical manufacturing hub, contributing over ₹1.5 lakh crore to the nation&apos;s chemical industry. Home to GIDC industrial estates, dedicated chemical corridors, and world-class port infrastructure.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-text-light">Nearest Major Port</span>
                  <span className="text-text font-medium">Mundra / Kandla</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-text-light">Chemical Share of India</span>
                  <span className="text-text font-medium">35%+</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-text-light">Annual Export Value</span>
                  <span className="text-text font-medium">$15B+ from Gujarat</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-text-light">Industrial Zones</span>
                  <span className="text-text font-medium">200+ GIDC estates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with Us"
        description="Looking for a reliable chemical supplier? Get in touch with our team for pricing, samples, and technical documentation."
        buttonText="Contact Our Team"
        buttonHref="/contact"
      />
    </>
  );
}
