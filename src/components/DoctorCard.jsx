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
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,48,57,0.12)]"
    >
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative min-h-[420px] overflow-hidden bg-slate-900 p-6 sm:p-8">
          <img src="/images/dr-pragyanand-gautam.png" alt="Dr. Pragyanand Gautam - ENT Specialist Kota" className="absolute inset-0 h-full w-full object-cover object-top opacity-95" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md"><Stethoscope className="h-3.5 w-3.5 text-[#86ddd0]" />Gautam ENT Clinic</span>
            <div>
              <p className="mb-3 max-w-xs text-sm leading-relaxed text-slate-200">A calm, well-equipped setting for thoughtful ENT consultations in Kota.</p>
              <div className="border-t border-white/20 pt-4 text-white"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9eddd3]">Clinic location</p><p className="mt-1 text-sm font-semibold">58, Shrinathpuram-A, Kota</p></div>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3"><span className="inline-flex items-center gap-2 rounded-full bg-[#e5f6f3] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#087b70]">Doctor spotlight</span><span className="h-px w-10 bg-[#b9d9d4]" /><span className="text-xs font-semibold text-slate-500">Specialist ENT consultation</span></div>
          <h2 className="max-w-xl font-heading text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl">Dr. Pragyanand Gautam</h2>
          <p className="mt-2 text-sm font-bold text-[#087b70]">MBBS, M.S. (ENT)</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">Dedicated ear, nose and throat consultation with a clear, patient-first approach. Every visit is focused on understanding symptoms, careful clinical evaluation and practical next steps.</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f7fbfa] p-5 sm:p-6">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.13em] text-[#174a56]">Key areas of ENT consultation</p>
            <div className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {focusAreas.map((focus) => <div key={focus} className="flex items-start gap-2.5 text-sm font-medium leading-5 text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#16a58c]" /><span>{focus}</span></div>)}
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={getWhatsAppUrl('Hello Gautam ENT Clinic, I would like to book an appointment.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b8b78] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(11,139,120,0.22)] transition hover:-translate-y-0.5 hover:bg-[#087568]"><MessageCircle className="h-4 w-4" />Book on WhatsApp<ArrowUpRight className="h-4 w-4" /></a>
            <a href={`tel:${clinicData.rawPhone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#102a43] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#163c5d]"><Phone className="h-4 w-4" />Call {clinicData.phone}</a>
            <a href={clinicData.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to Gautam ENT Clinic" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 text-[#174a56] transition hover:border-[#64b9ab] hover:bg-[#f4fbf9]"><MapPin className="h-5 w-5" /></a>
          </div>
          <p className="mt-4 text-xs font-medium text-slate-400">Please call to confirm today’s consultation availability.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default DoctorCard;
