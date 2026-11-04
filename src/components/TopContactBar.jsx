import React from 'react';
import { Phone, MapPin, Navigation } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const TopContactBar = () => {
  return (
    <div className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white text-xs md:text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile View: Compact row showing only Phone and Location */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <a
            href={`tel:${clinicData.rawPhone}`}
            className="flex items-center gap-1.5 font-extrabold text-white"
          >
            <Phone className="w-3.5 h-3.5 text-rose-200 animate-ring" />
            <span>{clinicData.phone}</span>
          </a>
          
          <a
            href={clinicData.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-bold text-white"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-200" />
            <span>Shrinathpuram-A, Kota</span>
          </a>
        </div>

        {/* Desktop View: Full details */}
        <div className="hidden sm:flex flex-row justify-between items-center w-full">
          {/* Left: Tagline & Location */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-rose-200" />
              Specialized ENT Care in Kota
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-200 text-xs">
              {clinicData.address}
            </span>
          </div>

          {/* Right: Phone, Directions & Emergency Link */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-rose-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-200 animate-ring" />
              <span>{clinicData.phone}</span>
            </a>

            <span className="text-white/30">|</span>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs bg-white/15 hover:bg-white/25 text-white px-2.5 py-1 rounded-md transition-all border border-white/10"
            >
              <Navigation className="w-3.5 h-3.5 text-rose-200" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
export default TopContactBar;
