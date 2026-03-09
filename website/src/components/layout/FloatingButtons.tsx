'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { company } from '@/data/company';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setPulse(true);
      timeoutId = setTimeout(() => setPulse(false), 1000);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello, I am interested in your chemical products. Please share details.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-24 right-6 z-[998] w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:scale-105 transition-all ${pulse ? 'animate-[waPulse_1s_ease]' : ''}`}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[500] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary-light hover:-translate-y-0.5 transition-all ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
