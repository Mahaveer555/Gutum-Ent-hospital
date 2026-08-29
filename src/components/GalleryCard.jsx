import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Camera, Tag } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  // Determine aspect ratio class
  const aspectClass = item.aspectClass || item.frame || (
    item.aspectType === 'ultra-wide' ? 'aspect-[21/9]' :
    item.aspectType === 'portrait' ? 'aspect-[3/4]' :
    item.aspectType === 'square' ? 'aspect-[4/5]' : 'aspect-[4/3]'
  );

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-cyan-600/40 transition-all duration-300 cursor-pointer group relative flex flex-col h-full"
    >
      <div className={`relative overflow-hidden bg-slate-900 ${aspectClass} w-full`}>
        <img
          src={item.src}
          alt={item.alt || item.title}
          className={`w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ${
            item.objectPosition || 'object-center'
          }`}
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
          <div className="flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1 text-white">
            <span className="inline-block text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30 uppercase tracking-wider">
              {item.category}
            </span>
            <h4 className="font-heading font-bold text-sm text-white line-clamp-1">
              {item.title}
            </h4>
            {item.caption && (
              <p className="text-[11px] text-slate-300 line-clamp-2 leading-tight">
                {item.caption}
              </p>
            )}
          </div>
        </div>

        {/* Small Subtle Top Badge (Default view - non-distracting) */}
        <div className="absolute top-3 left-3 bg-slate-900/60 backdrop-blur-md text-slate-200 text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-white/10 opacity-90 group-hover:opacity-0 transition-opacity">
          {item.category === "Original Clinic Photos" ? "Original Photo" : item.category}
        </div>
      </div>

      {/* Compact Minimal Below-Card Footer (Visible by default) */}
      <div className="p-3.5 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between group-hover:bg-slate-50/80 transition-colors">
        <div>
          <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 group-hover:text-cyan-800 transition-colors line-clamp-1">
            {item.title}
          </h4>
          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
            {item.caption || item.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
