import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Vasudev Chemo Pharma website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Terms of Service</h1>
          <p className="text-white/80">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-text font-heading mt-0">Acceptance of Terms</h2>
          <p className="text-text-light leading-relaxed">
            By accessing and using the Vasudev Chemo Pharma website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Use of Website</h2>
          <p className="text-text-light leading-relaxed">
            This website is intended to provide information about Vasudev Chemo Pharma&apos;s products and services and to facilitate business inquiries. You agree to use the website only for lawful purposes and in a way that does not infringe on others&apos; rights.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Product Information</h2>
          <p className="text-text-light leading-relaxed">
            Product specifications, descriptions, and pricing displayed on this website are for informational purposes only and may be subject to change without notice. While we strive for accuracy, we do not warrant that all product information is complete, current, or error-free. For confirmed specifications and pricing, please contact our sales team directly.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Quotations & Orders</h2>
          <ul className="text-text-light space-y-2">
            <li>Quotations provided through this website or via email are valid for 7 days unless stated otherwise.</li>
            <li>All orders are subject to product availability and our acceptance.</li>
            <li>Prices are subject to change based on raw material costs and market conditions.</li>
            <li>Payment terms are as agreed in the purchase order or proforma invoice.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text font-heading">Intellectual Property</h2>
          <p className="text-text-light leading-relaxed">
            All content on this website — including text, design, logos, and graphics — is the property of Vasudev Chemo Pharma and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Limitation of Liability</h2>
          <p className="text-text-light leading-relaxed">
            Vasudev Chemo Pharma shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein. Chemical products must be used in accordance with their respective Safety Data Sheets (SDS) and applicable regulations.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Third-Party Links</h2>
          <p className="text-text-light leading-relaxed">
            Our website may contain links to third-party websites. We do not control or endorse the content of these sites and are not responsible for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Governing Law</h2>
          <p className="text-text-light leading-relaxed">
            These Terms of Service are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Changes to Terms</h2>
          <p className="text-text-light leading-relaxed">
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Contact</h2>
          <p className="text-text-light leading-relaxed">
            For questions about these terms, contact us at{' '}
            <a href="mailto:info@vasudevchemopharma.com" className="text-primary hover:underline">info@vasudevchemopharma.com</a>.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
