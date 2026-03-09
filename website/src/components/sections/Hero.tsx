import Link from 'next/link';
import { ArrowRight, Shield, FlaskConical, Globe, Clock } from 'lucide-react';
import DriveImage from '@/components/ui/DriveImage';
import { company } from '@/data/company';
import { getSiteImages } from '@/lib/data';

export default async function Hero() {
  const siteImages = await getSiteImages();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary-light text-white">
      {/* Background image from Google Drive (if set) */}
      {siteImages.heroBackground && (
        <div className="absolute inset-0 z-0">
          <DriveImage
            src={siteImages.heroBackground}
            alt=""
            size="hero"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-primary-light/80" />
        </div>
      )}

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }} />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              Industrial & Specialty{' '}
              <span className="text-accent">Chemicals</span>{' '}
              — Manufactured in Gujarat, Delivered Worldwide
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
              ISO-certified chemical manufacturing with export-ready packaging, competitive pricing,
              and consistent quality — trusted by manufacturers, distributors, and importers across{' '}
              {company.countriesServed} countries.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                View Our Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 hover:border-white transition-all hover:-translate-y-0.5">
                Send an Inquiry
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Shield, text: 'ISO 9001 Certified' },
                { icon: Clock, text: `${company.experience} Years Experience` },
                { icon: FlaskConical, text: `${company.productsCount} Chemical Products` },
                { icon: Globe, text: 'Global Exports' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/15">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          {siteImages.heroOverlay && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <DriveImage
                  src={siteImages.heroOverlay}
                  alt="Vasudev Chemo Pharma"
                  size="large"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
