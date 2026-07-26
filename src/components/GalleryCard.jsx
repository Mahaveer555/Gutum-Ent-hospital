import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';

export const GalleryCard = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-card overflow-hidden shadow-hospital border border-roseborder hover:border-medicalred/50 transition-all duration-300 cursor-pointer group relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-rosebg">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-darkheading/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="w-12 h-12 rounded-full bg-medicalred text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Maximize2 className="w-6 h-6" />
          </div>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-medicalred text-[11px] font-bold px-2.5 py-1 rounded-full border border-roseborder shadow-sm flex items-center gap-1">
          <Tag className="w-3 h-3 text-medicalred" />
          <span>{item.category}</span>
        </div>
      </div>

      <div className="p-4 bg-white">
        <h4 className="font-heading font-bold text-sm text-darkheading group-hover:text-medicalred transition-colors line-clamp-1">
          {item.title}
        </h4>
        <p className="text-xs text-bodytext mt-1 line-clamp-2 leading-relaxed">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
};
