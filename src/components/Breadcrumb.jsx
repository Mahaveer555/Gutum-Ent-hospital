import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ current }) => {
  return (
    <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mb-3" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-teal-100 transition-colors">Home</Link>
      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
      <span className="text-white font-semibold">{current}</span>
    </nav>
  );
};
