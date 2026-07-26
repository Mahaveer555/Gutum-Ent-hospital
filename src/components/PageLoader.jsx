import React from 'react';
import { Stethoscope } from 'lucide-react';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="w-14 h-14 rounded-2xl bg-teal text-white flex items-center justify-center shadow-xl animate-bounce mb-4">
        <Stethoscope className="w-8 h-8" />
      </div>
      <h4 className="font-heading font-bold text-lg text-medical">Gautam ENT Clinic</h4>
      <p className="text-xs text-slate-500 mt-1">Loading ENT services...</p>
    </div>
  );
};
