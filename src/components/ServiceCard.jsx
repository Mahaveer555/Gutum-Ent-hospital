import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Ear, Activity, HeartPulse, UserCheck, ShieldCheck } from 'lucide-react';

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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-card p-6 shadow-hospital hover:shadow-hospital-lg border border-roseborder/60 hover:border-medicalred/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Decorative Red Corner Accent Line */}
      <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-medicalred to-transparent group-hover:w-full transition-all duration-500" />

      <div>
        {/* Service Image Container with Gradient Overlay */}
        <div className="relative rounded-xl overflow-hidden mb-5 aspect-video bg-rosebg">
          <img
            src={service.image}
            alt={`${service.title} consultation at Gautam ENT Clinic Kota`}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkheading/70 via-transparent to-transparent pointer-events-none" />
          
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-medicalred text-[11px] font-bold px-2.5 py-1 rounded-full border border-roseborder shadow-sm">
            {service.category} Care
          </span>

          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-medicalred text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-darkheading group-hover:text-medicalred transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="mt-2.5 text-sm text-bodytext line-clamp-2 leading-relaxed font-normal">
          {service.shortDescription}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-roseborder/40 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="text-xs font-extrabold text-medicalred group-hover:text-medicalred-dark inline-flex items-center gap-1.5 transition-all"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <a
          href={`tel:+917014561171`}
          className="text-xs font-semibold text-bodytext hover:text-medicalred transition-colors"
        >
          Call Desk
        </a>
      </div>
    </motion.div>
  );
};
