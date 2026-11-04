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

      <div className="space-y-12 pb-16 bg-[#faf9f7] min-h-screen text-[#404040]">
        {/* Gallery Hero Banner */}
        <section className="bg-gradient-to-r from-[#171717] via-[#262626] to-[#171717] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ef2028] rounded-full filter blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Gallery" />
            <div className="mt-4 space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Clinic Gallery
              </h1>
              <p className="text-base md:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
                Explore the clinic facilities, diagnostic equipment, certificates, and interior spaces of our Kota clinic.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-[#171717] uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-[#ef2028]" /> Filter:
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
                    ? 'bg-[#ef2028] text-white shadow-[0_8px_25px_rgba(239,32,40,0.35)]'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-[#ef2028] hover:text-[#ef2028]'
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
