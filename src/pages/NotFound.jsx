import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../utils/seo';

export const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Gautam ENT Clinic Kota"
        description="The requested page could not be found. Return to Gautam ENT Clinic home page."
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-4">
          <Stethoscope className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-heading font-extrabold text-medical">404 - Page Not Found</h1>
        <p className="text-sm text-slate-600 mt-2 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-teal hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </>
  );
};
