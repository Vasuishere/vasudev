'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/company';
import { driveUrl } from '@/lib/gdrive';

interface NavbarProps {
  logo?: string;
  logoName?: string;
}

export default function Navbar({ logo, logoName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logoSrc = logo ? driveUrl(logo, 'thumb') : '/images/company-logo.png';
  const logoNameSrc = logoName ? driveUrl(logoName, 'small') : '/images/company-name.png';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image
              src={logoSrc}
              alt="Vasudev Chemo Pharma"
              width={40}
              height={40}
              className="h-10 w-auto"
              unoptimized={logoSrc.includes('drive.google.com') || logoSrc.includes('googleusercontent.com')}
            />
            <Image
              src={logoNameSrc}
              alt="Vasudev Chemo Pharma"
              width={180}
              height={40}
              className="h-8 w-auto hidden sm:block"
              unoptimized={logoNameSrc.includes('drive.google.com') || logoNameSrc.includes('googleusercontent.com')}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-light hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-border shadow-lg transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex px-4 py-3 text-sm font-medium text-text-light hover:text-primary hover:bg-surface-alt rounded-lg transition-colors min-h-[48px] items-center"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mx-4 mt-4 mb-2 bg-primary text-white text-center px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
