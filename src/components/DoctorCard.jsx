import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Phone, AlertCircle } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const DoctorCard = ({ doctor }) => {
  const focusAreas = doctor?.areasOfFocus || doctor?.areasOfConsultation || [
    'Ear Pain & Infection Evaluation',
    'Hearing Assessment & Tinnitus Guidance',
    'Sinusitis & Nasal Allergy Care',
    'Throat, Tonsil & Voice Evaluation',
    'Pediatric ENT Concerns',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-card p-6 md:p-8 shadow-hospital border border-roseborder border-l-4 border-l-medicalred hover:shadow-hospital-lg transition-all duration-300 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Doctor Photo Container */}
        <div className="md:col-span-5 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-medicalred/20 to-rose-200/40 rounded-2xl blur-lg pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden shadow-md bg-rosebg aspect-[4/5]">
            <img
              src={doctor?.image || '/images/doctor-placeholder.svg'}
              alt={`${doctor?.name || 'ENT Specialist'} - Gautam ENT Clinic Kota`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {(!doctor?.verified || doctor?.unverifiedNotice) && (
              <div className="absolute bottom-0 inset-x-0 bg-darkheading/85 backdrop-blur-md text-white text-[11px] font-medium p-2 text-center">
                Doctor information will be updated after clinic verification
              </div>
            )}
          </div>
        </div>

        {/* Doctor Info Details */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-medicalred bg-rosebg border border-roseborder">
              <Stethoscope className="w-3.5 h-3.5" />
              {doctor?.specialty || doctor?.designation || 'ENT Specialist'}
            </span>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-darkheading mt-2">
              {doctor?.name || 'Doctor details to be updated'}
            </h3>

            <p className="text-sm font-semibold text-bodytext mt-1">
              {doctor?.qualification || 'Will be updated after clinic verification'}
            </p>
          </div>

          <p className="text-sm text-bodytext leading-relaxed font-normal">
            {doctor?.description || doctor?.aboutText || 'Complete doctor profile, qualifications and consultation information will be added after verification from the clinic.'}
          </p>

          {/* Area of Focus Chips */}
          <div>
            <h4 className="text-xs font-bold text-darkheading uppercase tracking-wider mb-2">
              Areas of Focus:
            </h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((focus, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-medicalred-dark bg-rosebg px-3 py-1.5 rounded-lg border border-roseborder"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Unverified Verification Alert */}
          {(!doctor?.verified || doctor?.unverifiedNotice) && (
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                Doctor details, qualifications, experience and exact clinic timings are pending verification. Please call the clinic desk to confirm today's availability.
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="w-full sm:w-auto bg-gradient-to-r from-medicalred to-medicalred-dark hover:from-medicalred-dark hover:to-medicalred-900 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-red-btn transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 animate-ring" />
              <span>Call Clinic ({clinicData.phone})</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
