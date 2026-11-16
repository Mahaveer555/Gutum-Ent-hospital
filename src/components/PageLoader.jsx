import React from 'react';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center">
      <div className="relative w-20 h-20 flex items-center justify-center mb-4">
        {/* Dual Rotating Rings (Kridha Loader Style) */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary animate-spin" />
        <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-b-secondary border-l-secondary animate-spin [animation-direction:reverse]" />
        
        {/* Center Logo */}
        <div className="w-12 h-12 rounded-full bg-white border border-border p-1.5 shadow-sm overflow-hidden">
          <img src="/logo.png" alt="Gautam ENT Clinic" className="w-full h-full object-contain" />
        </div>
      </div>
      <h4 className="font-heading font-bold text-base text-text">Gautam ENT Clinic</h4>
      <p className="text-xs text-text-light mt-0.5">Kota, Rajasthan</p>
    </div>
  );
};

export default PageLoader;
