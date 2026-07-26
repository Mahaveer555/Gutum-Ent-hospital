import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/clinic';

export const FloatingWhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:flex fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-slow-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current stroke-none" />
      <span className="absolute right-16 bg-darkheading text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};
