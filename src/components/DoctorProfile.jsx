import React from 'react';
import { Award, GraduationCap, Languages, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const DoctorProfile = () => {
  const { clinicData } = useClinic();
  const doc = clinicData.doctorProfile || {};

  return (
    <div className="bg-white rounded-card p-6 md:p-8 shadow-medical border border-slate-100 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Doctor Photo Column */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
            <img
              src={doc.image || '/images/doctor-placeholder.svg'}
              alt={doc.name ? `${doc.name} - ENT Specialist Kota` : 'ENT Specialist Doctor Gautam ENT Clinic Kota'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {doc.verified && (
              <span className="absolute top-3 right-3 bg-success text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>
            )}
          </div>
          <p className="mt-3 text-xs text-slate-500 font-medium">
            Gautam ENT Clinic • Shreenath Puram, Kota
          </p>
        </div>

        {/* Doctor Details Column */}
        <div className="md:col-span-8 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-teal bg-aqua border border-teal/20 mb-2">
              <Stethoscope className="w-3.5 h-3.5" />
              {doc.title || 'ENT Specialist'}
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-medical">
              {doc.name ? doc.name : 'ENT Specialist (Otolaryngology)'}
            </h3>
            <p className="text-sm font-semibold text-teal mt-0.5">
              {doc.specialty || 'Otolaryngology / Ear, Nose & Throat Care'}
            </p>
          </div>

          {/* Verification Banner Notice when not yet verified */}
          {!doc.name && (
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3.5 rounded-r-xl text-amber-800 text-xs md:text-sm font-medium">
              ENT Specialist profile details will be updated after clinic verification.
            </div>
          )}

          {/* Bio */}
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {doc.bio}
          </p>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
            {/* Qualification */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">Qualification</span>
                <span className="text-xs md:text-sm font-semibold text-medical">
                  {doc.qualification ? doc.qualification : 'Will be updated upon verification'}
                </span>
              </div>
            </div>

            {/* Registration Number */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-medical/10 text-medical flex items-center justify-center flex-shrink-0 mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">Registration</span>
                <span className="text-xs md:text-sm font-semibold text-medical">
                  {doc.registrationNumber ? doc.registrationNumber : 'State Medical Council Reg. Pending'}
                </span>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center flex-shrink-0 mt-0.5">
                <Languages className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">Languages Spoken</span>
                <span className="text-xs md:text-sm font-semibold text-medical">
                  {doc.languages && doc.languages.length > 0 ? doc.languages.join(', ') : 'English, Hindi'}
                </span>
              </div>
            </div>

            {/* Clinical Focus */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-coral/10 text-coral flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">Clinical Focus</span>
                <span className="text-xs md:text-sm font-semibold text-medical">
                  Ear, Nose, Throat &amp; Sinus Consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
