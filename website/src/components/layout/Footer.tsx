import Link from 'next/link';
import Image from 'next/image';
import { company, navigation } from '@/data/company';
import { products } from '@/data/products';
import { driveUrl } from '@/lib/gdrive';

interface FooterProps {
  logo?: string;
  logoName?: string;
}

export default function Footer({ logo, logoName }: FooterProps) {
  const topProducts = products.slice(0, 6);

  const logoSrc = logo ? driveUrl(logo, 'thumb') : '/images/company-logo.png';
  const logoNameSrc = logoName ? driveUrl(logoName, 'small') : '/images/company-name.png';

  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={logoSrc}
                alt="Vasudev Chemo Pharma"
                width={36}
                height={36}
                className="h-9 w-auto brightness-0 invert"
                unoptimized={logoSrc.includes('drive.google.com') || logoSrc.includes('googleusercontent.com')}
              />
              <Image
                src={logoNameSrc}
                alt="Vasudev Chemo Pharma"
                width={160}
                height={36}
                className="h-7 w-auto brightness-0 invert"
                unoptimized={logoNameSrc.includes('drive.google.com') || logoNameSrc.includes('googleusercontent.com')}
              />
            </Link>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              {company.tagline}<br />{company.location}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12]">ISO 9001:2015</span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12]">Export Ready</span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12]">{company.productsCount} Products</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block text-sm text-white/60 hover:text-white transition-colors py-1">
                  {item.label}
                </Link>
              ))}
              <Link href="/faq" className="block text-sm text-white/60 hover:text-white transition-colors py-1">FAQ</Link>
            </div>
          </div>

          {/* Top Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Top Products</h4>
            <div className="space-y-2">
              {topProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="block text-sm text-white/60 hover:text-white transition-colors py-1">
                  {product.name}
                </Link>
              ))}
              <Link href="/products" className="block text-sm text-secondary-light hover:text-white transition-colors py-1 font-medium">
                View All →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Now</h4>
            <div className="space-y-3 text-sm text-white/60">
              <p>📧 {company.email}</p>
              <p>📞 {company.phone}</p>
              <p>📍 {company.location}</p>
              <p>🕐 {company.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
