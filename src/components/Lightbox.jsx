import React from 'react';
import { X } from 'lucide-react';

export const Lightbox = ({ image, title, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={image}
            alt={title || 'Clinic gallery photograph'}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {title && (
          <div className="p-4 text-center bg-slate-900 text-slate-200 text-sm font-semibold border-t border-slate-800">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
