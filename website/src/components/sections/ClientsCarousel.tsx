'use client';

import DriveImage from '@/components/ui/DriveImage';
import { clients } from '@/data/clients';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ClientsCarousel() {
  if (clients.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-surface-alt overflow-hidden" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          id="clients-heading"
          label="Our Clients"
          title="Trusted by Industry Leaders Worldwide"
          description="We partner with businesses across 30+ countries, delivering reliable chemical supply at competitive pricing."
        />
      </div>

      {/* Infinite scroll track */}
      <div
        className="relative"
        role="marquee"
        aria-label="Scrolling gallery of client logos"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 motion-reduce:px-8">
          {/* First set */}
          {clients.map((client, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 mx-6 md:mx-10 w-[140px] h-[80px] bg-surface rounded-xl border border-border flex items-center justify-center p-4 hover:shadow-sm transition-shadow"
            >
              <DriveImage
                src={client.logoUrl || client.logo}
                alt={client.name}
                size="thumb"
                width={100}
                height={50}
                className="w-auto h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {clients.map((client, i) => (
            <div
              key={`b-${i}`}
              aria-hidden="true"
              className="flex-shrink-0 mx-6 md:mx-10 w-[140px] h-[80px] bg-surface rounded-xl border border-border flex items-center justify-center p-4 hover:shadow-sm transition-shadow"
            >
              <DriveImage
                src={client.logoUrl || client.logo}
                alt=""
                size="thumb"
                width={100}
                height={50}
                className="w-auto h-10 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
