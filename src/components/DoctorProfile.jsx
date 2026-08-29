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
    image: "/images/doctor-portrait.png",
    verified: true
  };

  return (
    <div className="bg-white rounded-card p-6 md:p-8 shadow-hospital border border-bordergrey relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Doctor Photo Column with double-frame */}
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-medicalnavy p-1 ring-4 ring-medicalred ring-offset-2 ring-offset-white bg-softblue">
            <img
              src="/images/doctor-portrait.png"
              alt={`${doc.name || 'Dr. Pragyanand Gautam'} - ENT Specialist Kota`}
              className="w-full h-full object-cover object-[center_20%] rounded-xl"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 bg-medicalnavy/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
              <ShieldCheck className="w-3.5 h-3.5 text-successgreen animate-pulse" /> Verified
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
            Gautam ENT Clinic • Kota
          </p>
        </div>

        {/* Doctor Details Column */}
        <div className="md:col-span-8 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-medicalred bg-rosebg border border-roseborder mb-2">
              <Stethoscope className="w-3.5 h-3.5" />
              {doc.title || 'ENT Specialist'}
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-medicalnavy">
              {doc.name || 'Dr. Pragyanand Gautam'}
            </h3>
            <p className="text-sm font-bold text-medicalred mt-0.5">
              {doc.specialty || 'Ear, Nose and Throat Specialist (Otolaryngologist)'}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base text-bodytext leading-relaxed font-normal">
            {doc.bio || "Dr. Pragyanand Gautam is an experienced Ear, Nose, and Throat (ENT) specialist in Kota. He provides expert medical consultations and specialized diagnostic evaluations for all common and complex ear, nose, and throat concerns with a patient-friendly and compassionate approach."}
          </p>

          {/* Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-bordergrey">
            {/* Qualification */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rosebg text-medicalred flex items-center justify-center flex-shrink-0 mt-0.5 border border-roseborder">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Qualification</span>
                <span className="text-sm font-extrabold text-medicalnavy">
                  {doc.qualification || 'MBBS, M.S. (ENT)'}
                </span>
              </div>
            </div>

            {/* Registration Number */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#102A43]/5 text-medicalnavy flex items-center justify-center flex-shrink-0 mt-0.5 border border-bordergrey">
                <FileCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Registration</span>
                <span className="text-sm font-extrabold text-medicalnavy">
                  {doc.registrationNumber || 'State Medical Council Registered'}
                </span>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-100">
                <Languages className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Languages Spoken</span>
                <span className="text-sm font-extrabold text-medicalnavy">
                  {doc.languages && doc.languages.length > 0 ? doc.languages.join(', ') : 'English, Hindi'}
                </span>
              </div>
            </div>

            {/* Clinical Focus */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-rosebg text-medicalred flex items-center justify-center flex-shrink-0 mt-0.5 border border-roseborder">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Clinical Experience</span>
                <span className="text-sm font-extrabold text-medicalnavy">
                  12+ Years ENT Practice
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
