import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ear, Activity, HeartPulse, UserCheck, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinic';

const categoryIconMap = {
  Ear: Ear,
  Nose: Activity,
  Throat: HeartPulse,
  Pediatric: UserCheck,
  Other: ShieldCheck,
};

const categoryFallbackSvgMap = {
  Ear: '/images/ear-care.svg',
  Nose: '/images/sinus-care.svg',
  Throat: '/images/throat-care.svg',
  Pediatric: '/images/pediatric-ent.svg',
  Other: '/images/clinic-room.svg',
};

export const ServiceCard = ({ service }) => {
  const IconComponent = categoryIconMap[service.category] || Ear;
  const fallbackSvg = categoryFallbackSvgMap[service.category] || '/images/ear-care.svg';

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSvg;
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-hospital-lg border border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top Accent Gradient Border (Kridha Hospital Style) */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Service Image Container with Gradient Overlay */}
        <div className="relative rounded-xl overflow-hidden mb-5 aspect-video bg-bg-soft border border-border">
          <img
            src={service.image}
            alt={`${service.title} consultation at Gautam ENT Clinic Kota`}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/70 via-transparent to-transparent pointer-events-none" />
          
          <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-primary text-[11px] font-bold px-3 py-1 rounded-full border border-primary/20 shadow-sm">
            {service.category} Care
          </span>

          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <IconComponent className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-sm text-text-light line-clamp-2 leading-relaxed font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-border flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="text-xs font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1.5 transition-all group-hover:translate-x-0.5"
        >
          <span>Learn Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <a
          href={`tel:${clinicData.rawPhone}`}
          className="text-xs font-semibold text-text-light hover:text-primary transition-colors"
        >
          Call Desk
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
