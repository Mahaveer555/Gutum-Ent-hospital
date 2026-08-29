import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const Lightbox = ({ image, title, caption, category, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Gallery image viewer"}
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-white z-10">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              {category || "Gallery Preview"}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Stage Container - Uses object-contain */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] overflow-hidden p-2">
          <img
            src={image}
            alt={title || 'Clinic photograph full view'}
            className="max-w-full max-h-[70vh] object-contain select-none transition-all duration-300"
          />

          {/* Previous Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption & Title Footer */}
        {(title || caption) && (
          <div className="p-4 bg-slate-900 text-slate-200 border-t border-slate-800 space-y-1 text-center">
            {title && <h3 className="font-heading font-bold text-base text-white">{title}</h3>}
            {caption && <p className="text-xs text-slate-400 max-w-3xl mx-auto">{caption}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
