import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden sm:flex fixed bottom-24 right-6 z-30 w-10 h-10 rounded-full bg-medical/90 hover:bg-medical text-white items-center justify-center shadow-lg transition-all transform hover:scale-105"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
