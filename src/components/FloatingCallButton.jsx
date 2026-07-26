import React from 'react';
import { Phone } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const FloatingCallButton = () => {
  return (
    <a
      href={`tel:${clinicData.rawPhone}`}
      className="hidden sm:flex fixed bottom-24 right-6 z-30 w-14 h-14 rounded-full bg-gradient-to-r from-medicalred to-medicalred-dark text-white items-center justify-center shadow-red-btn hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Call Gautam ENT Clinic"
    >
      <Phone className="w-6 h-6 animate-ring" />
      <span className="absolute right-16 bg-darkheading text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none">
        Call Clinic ({clinicData.phone})
      </span>
    </a>
  );
};
