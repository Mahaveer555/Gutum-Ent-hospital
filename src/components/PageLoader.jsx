import React from 'react';
import { Stethoscope } from 'lucide-react';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-white border border-slate-200 p-1 flex items-center justify-center shadow-xl animate-bounce mb-4">
        <img src="/logo.png" alt="Gautam ENT Clinic" className="w-full h-full object-contain" />
      </div>
      <h4 className="font-heading font-bold text-lg text-medical">Gautam ENT Clinic</h4>
      <p className="text-xs text-slate-500 mt-1">Loading ENT services...</p>
    </div>
  );
};
