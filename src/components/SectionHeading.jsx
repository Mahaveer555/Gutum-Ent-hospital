import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge = "",
  title,
  subtitle = "",
  centered = false,
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-medicalred bg-rosebg border border-roseborder mb-3"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-darkheading tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-base md:text-lg text-bodytext font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Red underline expands left to right */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-medicalred to-medicalred-bright rounded-full origin-left ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};
