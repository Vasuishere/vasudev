import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Vasudev Chemo Pharma website — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-text font-heading mt-0">Introduction</h2>
          <p className="text-text-light leading-relaxed">
            Vasudev Chemo Pharma (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with our services.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Information We Collect</h2>
          <p className="text-text-light leading-relaxed">We may collect the following types of information:</p>
          <ul className="text-text-light space-y-2">
            <li><strong className="text-text">Contact Information:</strong> Name, email address, phone number, and company name that you provide when submitting an inquiry form.</li>
            <li><strong className="text-text">Inquiry Details:</strong> Product interests, quantity requirements, and message content from your inquiry submissions.</li>
            <li><strong className="text-text">Usage Data:</strong> Anonymous website usage data such as pages visited, time spent on site, and referring URLs, collected via analytics tools.</li>
            <li><strong className="text-text">Technical Data:</strong> Browser type, device type, and IP address for security and site optimization purposes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text font-heading">How We Use Your Information</h2>
          <ul className="text-text-light space-y-2">
            <li>To respond to your product inquiries and provide quotations</li>
            <li>To communicate about orders, shipments, and technical documentation</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-text font-heading">Data Sharing</h2>
          <p className="text-text-light leading-relaxed">
            We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website (e.g., form processing via Web3Forms), subject to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Data Retention</h2>
          <p className="text-text-light leading-relaxed">
            We retain your contact information only as long as necessary to fulfill the purpose for which it was collected, typically for the duration of our business relationship. Inquiry data is retained for up to 3 years unless you request earlier deletion.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Cookies</h2>
          <p className="text-text-light leading-relaxed">
            Our website may use essential cookies for site functionality and analytics cookies (e.g., Google Analytics) to understand how visitors use our site. You can disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Your Rights</h2>
          <p className="text-text-light leading-relaxed">You have the right to:</p>
          <ul className="text-text-light space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent for data processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-text font-heading">Security</h2>
          <p className="text-text-light leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-text font-heading">Contact Us</h2>
          <p className="text-text-light leading-relaxed">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{' '}
            <a href="mailto:info@vasudevchemopharma.com" className="text-primary hover:underline">info@vasudevchemopharma.com</a>.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
