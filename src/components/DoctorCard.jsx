import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const DoctorCard = ({ doctor }) => {
  const focusAreas = doctor?.areasOfFocus || doctor?.areasOfConsultation || [
    'Ear Pain & Infection Evaluation',
    'Hearing Assessment & Tinnitus Guidance',
    'Sinusitis & Nasal Allergy Care',
    'Throat, Tonsil & Voice Evaluation',
    'Pediatric ENT Concerns',
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65 }}
      className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-white shadow-hospital-lg"
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: Doctor Visual & Background */}
        <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-b from-[#0b2447] to-[#0a1424] p-6 sm:p-8">
          <img 
            src="/images/dr-pragyanand-gautam.png" 
            alt="Dr. Pragyanand Gautam - ENT Specialist Kota" 
            className="absolute inset-0 h-full w-full object-cover object-top opacity-95" 
            loading="lazy" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424] via-[#0b2447]/40 to-transparent" />
          
          <div className="relative flex h-full flex-col justify-between z-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              <Stethoscope className="h-3.5 w-3.5 text-secondary-light" />
              Gautam ENT Clinic
            </span>
            <div>
              <p className="mb-3 max-w-xs text-sm leading-relaxed text-white/80">
                A calm, modern, and well-equipped clinical setting for patient-first ENT consultations in Kota.
              </p>
              <div className="border-t border-white/15 pt-4 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wider text-secondary-light">Clinic Location</p>
                <p className="mt-1 text-sm font-semibold">58, Shrinathpuram-A, Kota</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Doctor Information */}
        <div className="p-7 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Doctor Spotlight
              </span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold text-text-light">Specialist ENT Consultation</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
              Dr. Pragyanand Gautam
            </h2>
            <p className="mt-1 text-sm font-bold text-primary">MBBS, M.S. (ENT)</p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-light">
              Dedicated ear, nose, and throat consultation with a clear, patient-first approach. Every visit is focused on understanding symptoms, careful clinical evaluation with advanced surgical microscopes, and practical next steps.
            </p>
            
            <div className="mt-6 rounded-2xl border border-border bg-bg-soft p-5 sm:p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-text">
                Key Areas of ENT Consultation
              </p>
              <div className="grid gap-x-5 gap-y-2.5 sm:grid-cols-2">
                {focusAreas.map((focus) => (
                  <div key={focus} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-text">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a 
                href={getWhatsAppUrl('Hello Gautam ENT Clinic, I would like to book an appointment with Dr. Gautam.')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a 
                href={`tel:${clinicData.rawPhone}`} 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary px-5 py-3 text-sm font-bold text-white shadow-blue-btn transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                <span>Call {clinicData.phone}</span>
              </a>

              <a 
                href={clinicData.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Get directions to Gautam ENT Clinic" 
                className="inline-flex items-center justify-center rounded-xl border border-border p-3 text-text transition hover:border-primary hover:text-primary hover:bg-bg-soft"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-3 text-xs font-medium text-text-light">
              Consultation timings: Mon - Sat: 5:00 PM - 8:00 PM. Please call to confirm today's availability.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DoctorCard;
