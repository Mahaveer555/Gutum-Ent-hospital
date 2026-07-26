import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '../data/faqs';

export const FAQAccordion = ({ items = faqsData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-medicalred/40 shadow-md'
                : 'bg-white/90 border-roseborder/60 hover:bg-white'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-base md:text-lg text-darkheading flex items-start gap-3">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isOpen ? 'text-medicalred' : 'text-bodytext'}`} />
                <span>{item.question}</span>
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-medicalred text-white rotate-180' : 'bg-rosebg text-medicalred'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-bodytext leading-relaxed border-t border-roseborder/40 ml-8">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
