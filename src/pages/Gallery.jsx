import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { galleryData, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    touchEndX.current = e.changedTouches[0].clientX; // initialize
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 60) {
      // Swiped left, show next
      handleNext();
    } else if (deltaX < -60) {
      // Swiped right, show prev
      handlePrev();
    }
  };

  return (
    <>
      <SEOHead
        title="Clinic Gallery | Gautam Ear Nose Throat Clinic Kota Facilities"
        description="Explore the photo gallery of Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota. See our advanced diagnostic facilities, microscope, and interior."
        canonical="https://gautamentclinic.com/gallery"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Gallery', url: 'https://gautamentclinic.com/gallery' },
        ]}
      />

      <div className="space-y-12 pb-16">
        {/* Gallery Hero Banner */}
        <section className="bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#8F1020] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="galleryHeroPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="#FFFFFF" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#galleryHeroPattern)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Gallery" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mt-2">
              Clinic Gallery
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Explore the advanced equipment, diagnostic examination facilities, certificates, and interior spaces of our Kota clinic.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 border-b border-[#E7EDF3] scrollbar-none">
            <span className="text-xs font-bold text-[#102A43] uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-[#C92032]" /> Filter:
            </span>

            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#C92032] text-white shadow-md'
                    : 'bg-white text-[#102A43] hover:bg-slate-50 border border-[#E7EDF3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Photo Grid with Animations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-hospital border border-[#E7EDF3] group cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-bold bg-[#C92032] px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="font-heading font-bold text-[#102A43] text-base group-hover:text-[#C92032] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Full-Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#102A43]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-[#E7EDF3]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Control Strip */}
                <div className="bg-[#102A43] text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-rose-200" />
                    <span className="font-heading font-bold text-sm text-white">
                      Image {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>

                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Image Frame with Swipe Support */}
                <div 
                  className="relative bg-slate-950 aspect-[16/10] flex items-center justify-center overflow-hidden touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-[60vh] max-w-full object-contain select-none"
                  />

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#C92032] flex items-center justify-center shadow-lg transition-all"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#C92032] flex items-center justify-center shadow-lg transition-all"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Caption Footer */}
                <div className="p-5 bg-white space-y-1 border-t border-[#E7EDF3]">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-heading font-bold text-lg text-[#102A43]">
                      {activeItem.title}
                    </h3>
                    <span className="text-xs font-bold text-[#C92032] bg-[#C92032]/5 px-2.5 py-1 rounded-full border border-[#C92032]/10">
                      {activeItem.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {activeItem.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Gallery;
