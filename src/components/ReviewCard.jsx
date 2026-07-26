import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const ReviewCard = () => {
  const { clinicData } = useClinic();

  return (
    <div className="bg-white rounded-card p-8 md:p-10 shadow-medical border border-slate-100 text-center max-w-3xl mx-auto">
      {/* Verified Rating Badge Header */}
      <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 px-4 py-2 rounded-full mb-6">
        <div className="flex items-center text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
          ))}
        </div>
        <span className="font-bold text-sm">
          {clinicData.googleRating} / 5.0 Google Listing
        </span>
      </div>

      {/* Verified Empty State Component */}
      <div className="bg-soft p-6 md:p-8 rounded-2xl border border-slate-200/70 mb-6">
        <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-3">
          <MessageSquareQuote className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-heading font-bold text-medical">
          Patient Reviews Verification
        </h4>
        <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed font-medium">
          Patient reviews will appear here after verification.
        </p>
        <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-success" />
          {clinicData.googleRatingNotice}
        </p>
      </div>

      {/* External Google Business Link */}
      <div>
        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-medical hover:bg-medical-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <span>View Google Business Profile</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
