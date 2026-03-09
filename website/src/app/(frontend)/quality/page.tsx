import { Shield, Award, FlaskConical, ClipboardCheck, FileCheck, Eye, CheckCircle } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/data/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Certifications',
  description: 'Learn about Vasudev Chemo Pharma\'s ISO 9001:2015 certified quality management system, in-house lab testing, COA generation, and REACH compliance.',
};

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">Quality Assurance</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Quality Without Compromise</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Every batch we produce undergoes rigorous quality checks — from raw material inspection to final dispatch.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Certifications"
            title="International Standards & Compliance"
            description="Our certifications validate our commitment to quality, safety, and environmental responsibility."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-surface rounded-xl border border-border p-8 text-center hover:shadow-lg transition-all">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text font-heading mb-3">{cert.name}</h3>
                <p className="text-text-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QMS Overview */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Quality Management</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-6">ISO 9001:2015 Quality System</h2>
              <p className="text-text-light leading-relaxed mb-8">
                Our Quality Management System (QMS) follows ISO 9001:2015 standards across all operations — from procurement and production to testing and dispatch. Every process is documented, monitored, and continuously improved.
              </p>
              <div className="space-y-3">
                {[
                  'Documented SOPs for every manufacturing process',
                  'Incoming raw material inspection & testing',
                  'In-process quality monitoring at every stage',
                  'Final product testing before batch release',
                  'Traceability from raw materials to finished product',
                  'Regular internal audits and management reviews',
                  'Corrective and preventive action (CAPA) system',
                  'Continuous improvement programs',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10 border border-border">
              <h3 className="font-bold text-xl text-text font-heading mb-6">Quality Control Flow</h3>
              <div className="space-y-0">
                {[
                  { step: '1', title: 'Raw Material Inspection', desc: 'All incoming materials tested against specifications before acceptance.' },
                  { step: '2', title: 'In-Process Monitoring', desc: 'Continuous checks during manufacturing for purity, pH, concentration, etc.' },
                  { step: '3', title: 'Final Product Testing', desc: 'Comprehensive lab analysis before batch approval.' },
                  { step: '4', title: 'COA Generation', desc: 'Certificate of Analysis prepared for every approved batch.' },
                  { step: '5', title: 'Packaging Verification', desc: 'Label accuracy, seal integrity, and weight verification before dispatch.' },
                ].map(({ step, title, desc }, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {step}
                      </div>
                      {index < 4 && <div className="w-0.5 h-full bg-primary/20" />}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-text mb-1">{title}</h4>
                      <p className="text-sm text-text-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Testing */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Laboratory"
            title="In-House Laboratory Testing"
            description="Our fully equipped analytical lab ensures every batch meets the exact specifications our customers require."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FlaskConical, title: 'Purity Analysis', desc: 'Titration, spectrophotometry, and chromatography methods.' },
              { icon: Eye, title: 'Physical Testing', desc: 'pH, density, viscosity, melting/boiling point measurements.' },
              { icon: ClipboardCheck, title: 'Heavy Metal Analysis', desc: 'ICP/AAS testing for trace metal contamination levels.' },
              { icon: Shield, title: 'Moisture Content', desc: 'Karl Fischer titration for precise moisture determination.' },
              { icon: FileCheck, title: 'Particle Size', desc: 'Sieve analysis and laser diffraction for granular products.' },
              { icon: Award, title: 'Stability Testing', desc: 'Accelerated stability studies for shelf life validation.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-text mb-2">{title}</h3>
                <p className="text-sm text-text-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Documentation"
            title="Quality Documentation"
            description="Complete analytical and safety documentation provided with every shipment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Certificate of Analysis (COA)',
                desc: 'Detailed batch-specific analysis report covering all specified parameters, test methods, and results.',
                items: ['Purity / Assay', 'Physical parameters', 'Heavy metals', 'Batch number & date'],
              },
              {
                title: 'Safety Data Sheet (SDS/MSDS)',
                desc: 'GHS-compliant 16-section safety data sheets for every product.',
                items: ['Hazard identification', 'Handling & storage', 'First aid measures', 'Regulatory information'],
              },
              {
                title: 'Technical Data Sheet (TDS)',
                desc: 'Product specification sheets with typical properties, applications, and storage guidelines.',
                items: ['Product specifications', 'Application guidelines', 'Storage conditions', 'Packaging details'],
              },
            ].map(({ title, desc, items }) => (
              <div key={title} className="bg-surface rounded-xl border border-border p-8">
                <FileCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-text text-lg mb-3">{title}</h3>
                <p className="text-sm text-text-light mb-4">{desc}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-light">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Product Documentation?"
        description="Request COA, MSDS, or TDS for any of our products. We'll send it within 24 hours."
        buttonText="Request Documentation"
        buttonHref="/contact"
        variant="secondary"
      />
    </>
  );
}
