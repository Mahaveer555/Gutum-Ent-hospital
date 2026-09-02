import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  // Determine aspect ratio class
  const aspectClass = item.aspectClass || item.frame || (
    item.aspectType === 'ultra-wide' ? 'aspect-[21/9]' :
    item.aspectType === 'portrait' ? 'aspect-[3/4]' :
    item.aspectType === 'square' ? 'aspect-[4/5]' : 'aspect-[4/3]'
  );

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group relative w-full h-full"
    >
      <div className={`relative overflow-hidden bg-slate-900 ${aspectClass} w-full`}>
        <img
          src={item.src}
          alt={item.alt || item.title || "Gautam ENT Clinic"}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            item.objectPosition || 'object-center'
          }`}
          loading="lazy"
        />

        {/* Pure image - subtle zoom icon on hover only, no text */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
