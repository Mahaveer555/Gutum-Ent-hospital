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
      className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-[#171717] p-6 sm:p-8">
          <img src="/images/dr-pragyanand-gautam.png" alt="Dr. Pragyanand Gautam - ENT Specialist Kota" className="absolute inset-0 h-full w-full object-cover object-top opacity-95" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#171717]/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              <Stethoscope className="h-3.5 w-3.5 text-[#ef2028]" />
              Gautam ENT Clinic
            </span>
            <div>
              <p className="mb-3 max-w-xs text-sm leading-relaxed text-neutral-300">A calm, well-equipped setting for thoughtful ENT consultations in Kota.</p>
              <div className="border-t border-white/15 pt-4 text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-300">Clinic location</p>
                <p className="mt-1 text-sm font-semibold">58, Shrinathpuram-A, Kota</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12 bg-white">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ef2028]/10 border border-[#ef2028]/20 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#ef2028]">
              Doctor spotlight
            </span>
            <span className="h-px w-10 bg-neutral-200" />
            <span className="text-xs font-semibold text-neutral-500">Specialist ENT consultation</span>
          </div>
          <h2 className="max-w-xl font-heading text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl">Dr. Pragyanand Gautam</h2>
          <p className="mt-2 text-sm font-bold text-[#ef2028]">MBBS, M.S. (ENT)</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600 sm:text-base">Dedicated ear, nose and throat consultation with a clear, patient-first approach. Every visit is focused on understanding symptoms, careful clinical evaluation and practical next steps.</p>
          
          <div className="mt-8 rounded-2xl border border-neutral-200 bg-[#faf9f7] p-5 sm:p-6">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.13em] text-[#171717]">Key areas of ENT consultation</p>
            <div className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {focusAreas.map((focus) => (
                <div key={focus} className="flex items-start gap-2.5 text-sm font-medium leading-5 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ef2028]" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a 
              href={getWhatsAppUrl('Hello Gautam ENT Clinic, I would like to book an appointment with Dr. Gautam.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ef2028] px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#cf131b]"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a 
              href={`tel:${clinicData.rawPhone}`} 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#262626]"
            >
              <Phone className="h-4 w-4 text-rose-300" />
              Call {clinicData.phone}
            </a>
            <a 
              href={clinicData.directionsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Get directions to Gautam ENT Clinic" 
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 text-neutral-700 transition hover:border-[#ef2028] hover:text-[#ef2028] hover:bg-[#faf9f7]"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-xs font-medium text-neutral-400">Please call to confirm today’s consultation availability.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default DoctorCard;
