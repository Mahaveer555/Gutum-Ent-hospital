import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronLeft, ChevronRight, Tag, Camera } from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { GalleryCard } from '../components/GalleryCard';
import { galleryData, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

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

  return (
    <>
      <SEOHead
        title="Clinic Gallery | Gautam ENT Clinic Kota Facilities & Photos"
        description="Explore the photo gallery of Gautam ENT Clinic in Shreenath Puram, Kota. Photos of clinic exterior, reception, ENT consultation room, and care facilities."
        canonical="https://gautamentclinic.com/gallery"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Gallery', url: 'https://gautamentclinic.com/gallery' },
        ]}
      />

      <div className="space-y-12 pb-16">
        {/* Gallery Hero Banner */}
        <section className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white py-14 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Gallery" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Clinic Photo Gallery
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Take a visual tour of Gautam ENT Clinic in Kota, featuring our reception, consultation spaces, and patient care environment.
            </p>
          </div>
        </section>

        {/* Category Filters with Red Fill */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none border-b border-roseborder/60">
            <span className="text-xs font-bold text-darkheading uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-medicalred" /> Filter:
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
                    ? 'bg-gradient-to-r from-medicalred to-medicalred-dark text-white shadow-red-btn'
                    : 'bg-white text-darkheading hover:bg-rosebg border border-roseborder'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Photo Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setLightboxIndex(idx)}
              />
            ))}
          </div>
        </section>

        {/* Full-Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-darkheading/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-roseborder"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Control Strip */}
                <div className="bg-medicalred-dark text-white p-4 flex items-center justify-between">
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

                {/* Main Image Frame */}
                <div className="relative bg-slate-950 aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-full max-w-full object-contain"
                  />

                  {/* Previous Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-medicalred flex items-center justify-center shadow-lg transition-all"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-medicalred flex items-center justify-center shadow-lg transition-all"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Caption Footer */}
                <div className="p-5 bg-white space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-darkheading">
                      {activeItem.title}
                    </h3>
                    <span className="text-xs font-bold text-medicalred bg-rosebg px-2.5 py-1 rounded-full border border-roseborder">
                      {activeItem.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-bodytext leading-relaxed">
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
