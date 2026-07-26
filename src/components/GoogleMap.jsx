import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const GoogleMap = () => {
  const { clinicData } = useClinic();

  return (
    <div className="bg-white rounded-card overflow-hidden shadow-medical border border-slate-100 relative">
      {/* Location Bar Header */}
      <div className="bg-medical text-white p-4 md:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal text-white flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base text-white">Gautam ENT Clinic Location</h4>
            <p className="text-xs text-slate-300">Shreenath Puram, Kota, Rajasthan 324010</p>
          </div>
        </div>

        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-teal hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Driving Directions</span>
          <ExternalLink className="w-3 h-3 opacity-70" />
        </a>
      </div>

      {/* Embedded Map Frame */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <iframe
          title="Gautam ENT Clinic Kota Location Map"
          src={clinicData.embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
