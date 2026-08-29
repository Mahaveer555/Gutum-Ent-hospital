import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const FloatingWhatsAppButton = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Breathing pulse animation for floating actions
  const actionPulse = {
    animate: {
      scale: [1, 1.06, 1],
      boxShadow: [
        '0 0 10px rgba(37, 211, 102, 0.4)',
        '0 0 20px rgba(37, 211, 102, 0.7)',
        '0 0 10px rgba(37, 211, 102, 0.4)'
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const phonePulse = {
    animate: {
      scale: [1, 1.06, 1],
      boxShadow: [
        '0 0 10px rgba(201, 32, 50, 0.3)',
        '0 0 20px rgba(201, 32, 50, 0.6)',
        '0 0 10px rgba(201, 32, 50, 0.3)'
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">
      
      {/* 1. Phone Call Floating Button with red pulsing border */}
      <motion.a
        href={`tel:${clinicData.rawPhone}`}
        variants={phonePulse}
        animate="animate"
        whileHover={{ scale: 1.15, rotate: 10 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-medicalred text-white flex items-center justify-center hover:scale-110 transition-all duration-300 group relative"
        aria-label="Call Clinic"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        <span className="absolute right-14 sm:right-16 bg-medicalnavy text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none border border-slate-700">
          Call: {clinicData.phone}
        </span>
      </motion.a>

      {/* 2. WhatsApp Floating Button with green pulsing border */}
      <motion.a
        href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        variants={actionPulse}
        animate="animate"
        whileHover={{ scale: 1.15, rotate: -10 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.289 3.505 8.492-.005 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 1.977 14.03 .953 11.427.953c-5.414 0-9.819 4.357-9.824 9.783 0 1.638.433 3.242 1.258 4.693L1.81 21.025l5.837-1.871z" />
          <path d="M15.485 12.28c-.205-.102-1.213-.6-1.401-.667-.188-.069-.325-.102-.461.102-.137.204-.53.667-.649.802-.119.137-.238.154-.443.051-.205-.102-.865-.32-1.647-1.018-.609-.544-1.02-1.215-1.14-1.419-.119-.205-.013-.316.089-.417.092-.091.205-.238.307-.358.102-.119.137-.204.205-.34.068-.137.034-.256-.017-.358-.051-.102-.461-1.11-.632-1.52-.167-.402-.35-.348-.48-.355-.123-.007-.265-.008-.407-.008s-.373.053-.568.265c-.195.213-.746.729-.746 1.778 0 1.05.763 2.062.869 2.204.106.142 1.5 2.292 3.634 3.214.507.219.903.35 1.213.448.51.162.973.139 1.339.085.409-.061 1.213-.495 1.383-.974.17-.478.17-.887.119-.974-.05-.088-.188-.137-.393-.24z" />
        </svg>
        <span className="absolute right-14 sm:right-16 bg-medicalnavy text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none border border-slate-700">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* 3. Scroll to Top Floating Button */}
      <AnimatePresence>
        {scrollVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -2 }}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-medicalred-dark to-medicalred text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-medicalred/30"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            <span className="absolute right-14 sm:right-16 bg-medicalnavy text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none border border-slate-700">
              Scroll to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
export default FloatingWhatsAppButton;
