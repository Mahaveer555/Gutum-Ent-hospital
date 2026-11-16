import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { GalleryCard } from '../components/GalleryCard';
import { Lightbox } from '../components/Lightbox';
import { galleryData, galleryCategories } from '../data/gallery';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <>
      <SEOHead
        title="Clinic Photo Gallery | Best ENT Clinic in Kota"
        description="Take a photo tour of Gautam ENT Clinic in Shrinathpuram-A Kota. View our precision ENT surgical microscope, patient examination suites, and modern facilities."
        keywords="best ent clinic in kota, best ent specialist in kota, best ent dr near me, ent equipment kota, gautam ent clinic photos"
        canonical="https://gautamentclinic.com/gallery"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Gallery', url: 'https://gautamentclinic.com/gallery' },
        ]}
      />

      <div className="space-y-12 pb-16 bg-bg-soft min-h-screen text-text">
        {/* Gallery Hero Banner with Kridha Gradient */}
        <section className="bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-white rounded-full filter blur-[120px] opacity-15" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Gallery" />
            <div className="mt-4 space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Clinic Gallery
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
                Explore the clinic facilities, diagnostic equipment, certificates, and interior spaces of our Kota clinic.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none border-b border-border">
            <span className="text-xs font-bold text-text uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-primary" /> Filter:
            </span>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-blue-btn'
                    : 'bg-white text-text border border-border shadow-sm hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Photos Grid */}
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
                  className=""
                >
                  <GalleryCard
                    item={item}
                    onClick={() => setLightboxIndex(idx)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Full-Screen Lightbox Modal */}
        {activeItem && (
          <Lightbox
            image={activeItem.src}
            title={activeItem.title}
            caption={activeItem.caption}
            category={activeItem.category}
            onClose={() => setLightboxIndex(null)}
            onPrev={lightboxIndex > 0 ? handlePrev : null}
            onNext={lightboxIndex < filteredItems.length - 1 ? handleNext : null}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
