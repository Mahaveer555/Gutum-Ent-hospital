import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { GalleryCard } from '../components/GalleryCard';
import { Lightbox } from '../components/Lightbox';
import { galleryData } from '../data/galleryLegacy';

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const activeItem = lightboxIndex !== null ? galleryData[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < galleryData.length - 1) {
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

      <div className="space-y-12 pb-16 bg-white min-h-screen text-slate-800">
        {/* Gallery Hero Banner */}
        <section className="bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#8F1020] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Gallery" />
            <div className="mt-4 space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Clinic Gallery
              </h1>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Explore the clinic facilities, diagnostic equipment, certificates, and interior spaces of our Kota clinic.
              </p>
            </div>
          </div>
        </section>

        {/* Photos Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryData.map((item, idx) => (
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
            onNext={lightboxIndex < galleryData.length - 1 ? handleNext : null}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
