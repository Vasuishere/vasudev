import { Globe, Ship, Package, FileText, MapPin, Anchor, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { company } from '@/data/company';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Export & Shipping',
    description: `Vasudev Chemo Pharma exports industrial & specialty chemicals to ${company.countriesServed}+ countries. Learn about our export capabilities, packaging, shipping, and documentation.`,
  };
}

export default function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Export & Shipping</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Global Chemical Supply</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Shipping to {company.countriesServed}+ countries with complete export documentation, regulatory compliance, and reliable logistics.
          </p>
        </div>
      </section>

      {/* Export Stats */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: `${company.countriesServed}+`, label: 'Countries Served' },
              { number: '500+', label: 'Shipments/Year' },
              { number: '3', label: 'Major Ports Nearby' },
              { number: '100%', label: 'Documentation Support' },
            ].map(({ number, label }) => (
              <div key={label} className="bg-surface rounded-xl border border-border p-6 text-center">
                <div className="text-3xl font-extrabold text-primary font-heading">{number}</div>
                <div className="text-sm text-text-light mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gujarat Port Advantage */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Strategic Advantage</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">Port Proximity & Logistics</h2>
              <p className="text-text-light leading-relaxed mb-8">
                Our Gujarat manufacturing facility is strategically located near India&apos;s largest ports, enabling fast and cost-effective shipment to global destinations. We work with experienced freight forwarders to ensure timely delivery.
              </p>
              <div className="space-y-4">
                {[
                  { port: 'Mundra Port', distance: '~250 km', detail: 'India\'s largest private port — handles major chemical exports to Middle East, Africa, Europe.' },
                  { port: 'Kandla Port', distance: '~280 km', detail: 'One of India\'s oldest and busiest ports, ideal for bulk chemical shipments.' },
                  { port: 'Nhava Sheva (JNPT)', distance: '~350 km', detail: 'India\'s largest container port — extensive global shipping routes.' },
                ].map(({ port, distance, detail }) => (
                  <div key={port} className="flex items-start gap-4 bg-surface-alt rounded-lg p-4 border border-border">
                    <Anchor className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-text">{port}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{distance}</span>
                      </div>
                      <p className="text-sm text-text-light mt-1">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-lg text-text font-heading mb-4">Key Export Markets</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Southeast Asia', 'Middle East', 'East Africa', 'North Africa',
                    'South America', 'Europe (EU)', 'Central Asia', 'South Asia',
                  ].map((market) => (
                    <div key={market} className="flex items-center gap-2 text-sm text-text-light">
                      <Globe className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {market}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-lg text-text font-heading mb-4">Shipping Modes</h3>
                <div className="space-y-3">
                  {[
                    { mode: 'FCL (Full Container Load)', desc: '20ft & 40ft containers for bulk orders' },
                    { mode: 'LCL (Less than Container)', desc: 'Consolidated shipments for smaller quantities' },
                    { mode: 'Flexi Bags', desc: 'Liquid chemicals in ISO-approved flexi tanks' },
                    { mode: 'Air Freight', desc: 'Urgent / sample shipments via air cargo' },
                  ].map(({ mode, desc }) => (
                    <div key={mode} className="flex items-start gap-3">
                      <Ship className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-text text-sm">{mode}</span>
                        <p className="text-xs text-text-light">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Standards */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Packaging"
            title="Export-Grade Packaging"
            description="All products are packed in UN-approved, IMDG-compliant packaging for safe international transport."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: 'HDPE Drums', desc: '25 kg, 50 kg — ideal for powders, granules, and smaller liquid quantities.' },
              { icon: Package, title: 'HDPE Bags', desc: '25 kg, 50 kg woven/laminated bags for bulk solid chemicals.' },
              { icon: Package, title: 'IBC Tanks', desc: '1000 L intermediate bulk containers for liquid chemicals.' },
              { icon: Package, title: 'ISO Tankers', desc: 'Bulk liquid transport in ISO tank containers for large volumes.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-6 hover:shadow-md transition-all">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Documentation"
            title="Complete Export Documentation"
            description="We handle all paperwork so you receive a hassle-free import experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Certificate of Analysis (COA)',
              'Material Safety Data Sheet (MSDS/SDS)',
              'Certificate of Origin',
              'Packing List & Commercial Invoice',
              'Bill of Lading / Airway Bill',
              'Phytosanitary Certificate (if required)',
              'Fumigation Certificate',
              'Insurance Certificate',
              'REACH Compliance Documentation',
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 bg-surface rounded-lg border border-border p-4">
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-text font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Trade Terms"
            title="Supported Incoterms"
            description="We offer flexible trade terms to suit your procurement process."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { term: 'EXW', full: 'Ex Works' },
              { term: 'FOB', full: 'Free on Board' },
              { term: 'CFR', full: 'Cost & Freight' },
              { term: 'CIF', full: 'Cost, Insurance & Freight' },
              { term: 'DAP', full: 'Delivered at Place' },
              { term: 'DDP', full: 'Delivered Duty Paid' },
            ].map(({ term, full }) => (
              <div key={term} className="bg-surface rounded-xl border border-border p-5 text-center hover:shadow-md transition-all">
                <div className="text-2xl font-extrabold text-primary font-heading">{term}</div>
                <div className="text-xs text-text-light mt-1">{full}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Import?"
        description="Request a quote with your destination port, required quantity, and preferred incoterm. We'll handle the rest."
        buttonText="Get Export Quote"
        buttonHref="/contact"
      />
    </>
  );
}
