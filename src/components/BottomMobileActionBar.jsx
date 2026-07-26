import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const BottomMobileActionBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-medicalred shadow-2xl p-2.5 sm:hidden block">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${clinicData.rawPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-medicalred to-medicalred-dark text-white font-bold text-xs gap-1 active:scale-95 transition-transform shadow-red-btn"
        >
          <Phone className="w-4 h-4 animate-ring" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-bold text-xs gap-1 active:scale-95 transition-transform shadow"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Get Directions */}
        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-rosebg border border-roseborder text-medicalred font-bold text-xs gap-1 active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
