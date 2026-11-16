import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-hospital-lg transition-all duration-300 cursor-pointer group relative w-full aspect-[4/3] border border-border hover:border-primary/60"
    >
      <div className="relative w-full h-full overflow-hidden bg-bg-soft">
        <img
          src={item.src}
          alt={item.alt || item.title || "Gautam ENT Clinic"}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            item.objectPosition || 'object-center'
          }`}
          loading="lazy"
        />

        {/* Hover overlay with subtle zoom indicator (Kridha style) */}
        <div className="absolute inset-0 bg-[#0b2447]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
