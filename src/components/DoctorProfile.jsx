import React from 'react';
import { Award, GraduationCap, Languages, ShieldCheck, FileCheck, Stethoscope } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const DoctorProfile = () => {
  const { clinicData } = useClinic();
  const doc = clinicData.doctorProfile || {
    name: "Dr. Pragyanand Gautam",
    title: "ENT Specialist",
    qualification: "MBBS, M.S. (ENT)",
    specialty: "Ear, Nose and Throat Specialist (Otolaryngologist)",
    registrationNumber: "State Medical Council Registered",
    experienceYears: 12,
    bio: "Dr. Pragyanand Gautam is an experienced Ear, Nose, and Throat (ENT) specialist in Kota. He provides expert medical consultations and specialized diagnostic evaluations for all common and complex ear, nose, and throat concerns with a patient-friendly and compassionate approach.",
    languages: ["English", "Hindi"],
    image: "/images/dr-pragyanand-gautam.png",
    verified: true
  };

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-hospital border border-border relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Doctor Photo Column */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative w-52 h-64 md:w-60 md:h-76 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/30 p-1 bg-gradient-to-br from-primary-dark via-[#0b2447] to-primary">
            <img
              src="/images/dr-pragyanand-gautam.png"
              alt={`${doc.name || 'Dr. Pragyanand Gautam'} - ENT Specialist Kota`}
              className="w-full h-full object-cover object-top rounded-xl"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 bg-[#0b2447]/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-light" /> Verified
            </span>
          </div>
          <p className="mt-3 text-xs text-text-light font-bold uppercase tracking-wider">
            Gautam ENT Clinic • Kota
          </p>
        </div>

        {/* Doctor Details Column */}
        <div className="md:col-span-8 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-2">
              <Stethoscope className="w-3.5 h-3.5" />
              {doc.title || 'ENT Specialist'}
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-text">
              {doc.name || 'Dr. Pragyanand Gautam'}
            </h3>
            <p className="text-sm font-bold text-primary mt-0.5">
              {doc.specialty || 'Ear, Nose and Throat Specialist (Otolaryngologist)'}
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm md:text-base text-text-light leading-relaxed font-normal">
            {doc.bio || "Dr. Pragyanand Gautam is an experienced Ear, Nose, and Throat (ENT) specialist in Kota. He provides expert medical consultations and specialized diagnostic evaluations for all common and complex ear, nose, and throat concerns with a patient-friendly and compassionate approach."}
          </p>

          {/* Information Grid (Kridha Hospital Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-border">
            {/* Qualification */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft border border-border">
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block">Qualification</span>
                <span className="text-sm font-extrabold text-text">
                  {doc.qualification || 'MBBS, M.S. (ENT)'}
                </span>
              </div>
            </div>

            {/* Registration Number */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft border border-border">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/20">
                <FileCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block">Registration</span>
                <span className="text-sm font-extrabold text-text">
                  {doc.registrationNumber || 'State Medical Council Registered'}
                </span>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft border border-border">
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                <Languages className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block">Languages Spoken</span>
                <span className="text-sm font-extrabold text-text">
                  {doc.languages && doc.languages.length > 0 ? doc.languages.join(', ') : 'English, Hindi'}
                </span>
              </div>
            </div>

            {/* Clinical Experience */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft border border-border">
              <div className="w-9 h-9 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/30">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-wider block">Clinical Experience</span>
                <span className="text-sm font-extrabold text-text">
                  12+ Years Practice
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
