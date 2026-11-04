import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative w-full aspect-[4/3] border border-neutral-100"
    >
      <div className="relative w-full h-full overflow-hidden bg-neutral-100">
        <img
          src={item.src}
          alt={item.alt || item.title || "Gautam ENT Clinic"}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            item.objectPosition || 'object-center'
          }`}
          loading="lazy"
        />

        {/* Hover overlay with subtle zoom indicator */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 pointer-events-none">
          <div className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-[#171717] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-5 h-5 text-[#ef2028]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
