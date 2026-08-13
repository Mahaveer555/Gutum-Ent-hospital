import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Phone, ArrowRight, Calendar, Navigation as MapIcon, ChevronRight } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      background: '/images/clinic/clinic_exterior_primary.webp',
      objectPosition: 'object-top',
      label: 'WELCOME TO GAUTAM EAR NOSE THROAT CLINIC',
      headingLines: ['Advanced Care for', 'Ear, Nose & Throat'],
      description: 'Expert ENT consultation, modern examination facilities and compassionate treatment by Dr. Pragyanand Gautam.',
      cta: [
        { text: 'Book Appointment', href: getWhatsAppUrl(), primary: true, isExternal: true },
        { text: 'Call Now', href: `tel:${clinicData.rawPhone}`, primary: false, isExternal: false }
      ]
    },
    {
      background: '/images/clinic/clinic_exterior_primary.webp',
      objectPosition: 'object-top',
      label: 'SPECIALIZED ENT CARE',
      headingLines: ['Your Hearing and', 'Breathing Health Matters'],
      description: 'Comprehensive diagnosis and treatment for common and complex ENT conditions.',
      cta: [
        { text: 'Explore Services', to: '/services', primary: true, isLink: true },
        { text: 'Get Directions', href: clinicData.directionsUrl, primary: false, isExternal: true }
      ]
    },
    {
      background: '/images/clinic/ent_microscope.webp',
      objectPosition: 'object-center',
      label: 'MODERN DIAGNOSTIC FACILITIES',
      headingLines: ['Accurate Diagnosis', 'with Advanced Equipment'],
      description: 'Modern ENT examination equipment for reliable diagnosis and personalized care.',
      cta: [
        { text: 'View Facilities', to: '/gallery?category=Equipment', primary: true, isLink: true },
        { text: 'Call Clinic', href: `tel:${clinicData.rawPhone}`, primary: false, isExternal: false }
      ]
    }
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] } 
    }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.75, ease: 'easeOut' } 
    }
  };

  const btnVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] bg-[#102A43] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet-active'
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, slideIdx) => {
          const isActive = activeIndex === slideIdx;

          return (
            <SwiperSlide key={slideIdx} className="relative w-full h-full">
              {/* Background Image Container with Zoom effect on Active */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                  src={slide.background}
                  alt={slide.label}
                  initial={{ scale: 1 }}
                  animate={isActive ? { scale: 1.06 } : { scale: 1 }}
                  transition={{ duration: 6, ease: 'easeOut' }}
                  className={`w-full h-full object-cover select-none ${slide.objectPosition || 'object-center'}`}
                  priority={slideIdx === 0 ? "true" : "false"}
                />
                {/* Visual Overlay: Light Gradient from Left to Right for Text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Slide Content Container */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate={isActive ? "show" : "hidden"}
                      className="space-y-5 md:space-y-6"
                    >
                      {/* Small badge/label */}
                      <motion.div variants={labelVariants} className="inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C92032] animate-pulse" />
                        <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#F7FAFC] uppercase bg-[#C92032]/20 border border-[#C92032]/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                          {slide.label}
                        </span>
                      </motion.div>

                      {/* Main Heading reveals line-by-line */}
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
                        {slide.headingLines.map((line, idx) => (
                          <span key={idx} className="block overflow-hidden py-0.5">
                            <motion.span
                              variants={lineVariants}
                              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-200"
                            >
                              {line}
                            </motion.span>
                          </span>
                        ))}
                      </h1>

                      {/* Description */}
                      <motion.p
                        variants={descVariants}
                        className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                        variants={btnVariants}
                        className="flex flex-wrap items-center gap-4 pt-2"
                      >
                        {slide.cta.map((btn, btnIdx) => {
                          const ButtonIcon = btn.primary ? Calendar : Phone;
                          const classes = btn.primary
                            ? "inline-flex items-center gap-2 bg-[#C92032] hover:bg-[#8F1020] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-red-btn transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group"
                            : "inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 shadow-sm transition-all duration-300 backdrop-blur-sm";

                          if (btn.isLink) {
                            return (
                              <Link key={btnIdx} to={btn.to} className={classes}>
                                <span>{btn.text}</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            );
                          }

                          return (
                            <a
                              key={btnIdx}
                              href={btn.href}
                              target={btn.isExternal ? "_blank" : undefined}
                              rel={btn.isExternal ? "noopener noreferrer" : undefined}
                              className={classes}
                            >
                              {btn.primary ? (
                                <>
                                  <ButtonIcon className="w-4 h-4" />
                                  <span>{btn.text}</span>
                                </>
                              ) : (
                                <>
                                  <span>{btn.text}</span>
                                </>
                              )}
                            </a>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Custom Arrows */}
      <button 
        className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all opacity-0 md:opacity-100 hover:scale-105"
        aria-label="Previous Slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 hover:border-white/30 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all opacity-0 md:opacity-100 hover:scale-105"
        aria-label="Next Slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination Indicator Strip */}
      <div className="swiper-pagination-custom absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
    </section>
  );
};
