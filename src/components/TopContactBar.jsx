import React from 'react';
import { Phone, MapPin, Navigation, Clock } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const TopContactBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white text-xs md:text-[13px] py-2 px-4 border-b border-white/10 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile View: Compact row showing Phone and Location */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <a
            href={`tel:${clinicData.rawPhone}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-secondary-light transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-secondary-light animate-ring" />
            <span>{clinicData.phone}</span>
          </a>
          
          <a
            href={clinicData.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-white/90 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-secondary-light" />
            <span>Shrinathpuram-A, Kota</span>
          </a>
        </div>

        {/* Desktop View: Full details */}
        <div className="hidden sm:flex flex-row justify-between items-center w-full">
          {/* Left: Tagline & Address */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 text-white">
              <MapPin className="w-3.5 h-3.5 text-secondary-light" />
              Specialized ENT Care in Kota
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/80 text-xs">
              {clinicData.address}
            </span>
          </div>

          {/* Right: Timings, Phone, Directions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-white/85">
              <Clock className="w-3.5 h-3.5 text-secondary-light" />
              <span>{clinicData.openingHoursNotice}</span>
            </div>

            <span className="hidden lg:inline text-white/30">|</span>

            <a
              href={`tel:${clinicData.rawPhone}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-secondary-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary-light animate-ring" />
              <span>{clinicData.phone}</span>
            </a>

            <span className="text-white/30">|</span>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs bg-white/15 hover:bg-white/25 text-white px-3 py-1 rounded-lg transition-all border border-white/15"
            >
              <Navigation className="w-3.5 h-3.5 text-secondary-light" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopContactBar;
