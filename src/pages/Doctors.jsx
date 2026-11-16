import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Stethoscope, Clock, MapPin, Award } from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { DoctorCard } from '../components/DoctorCard';
import { doctorsData } from '../data/doctors';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Doctors = () => {
  const doctor = doctorsData[0];

  return (
    <>
      <SEOHead
        title="Best ENT Specialist in Kota | Dr. Pragyanand Gautam (M.S. ENT)"
        description="Consult Dr. Pragyanand Gautam (MBBS, M.S. ENT), recognized as the best ENT specialist and doctor in Kota with 12+ years of surgical experience. Book an appointment today."
        keywords="best ent specialist in kota, best ent doctor in kota, best ent dr near me, best ent dentist in kota, dr pragyanand gautam, ent clinic kota"
        canonical="https://gautamentclinic.com/doctors"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Doctors', url: 'https://gautamentclinic.com/doctors' },
        ]}
      />

      <div className="space-y-16 pb-16 bg-bg-soft min-h-screen text-text">
        {/* Doctors Hero with Kridha Gradient */}
        <section className="bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-white rounded-full filter blur-[120px] opacity-15" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Doctors" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mt-3">
              Best ENT Specialist Doctor in Kota
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
              Dr. Pragyanand Gautam (MBBS, M.S. ENT) – 12+ years of dedicated clinical expertise providing advanced ear, nose, throat, and oral care in Kota.
            </p>
          </div>
        </section>

        {/* Doctor Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DoctorCard doctor={doctor} />
        </section>

        {/* Consultation Process & Standards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clinical Standards"
            title="Our Consultation Protocol"
            subtitle="What patients can expect during a clinical examination at Gautam ENT Clinic."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-hospital border border-border hover:border-primary/50 hover:shadow-hospital-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                01
              </div>
              <h3 className="text-lg font-heading font-bold text-text">Detailed History Taking</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Listening to symptom onset, progression, prior treatments, and patient concerns in detail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-hospital border border-border hover:border-primary/50 hover:shadow-hospital-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                02
              </div>
              <h3 className="text-lg font-heading font-bold text-text">Otoscopic &amp; Clinical Inspection</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Direct examination using sanitized instruments for accurate ear canal, tympanic membrane, and throat assessment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-hospital border border-border hover:border-primary/50 hover:shadow-hospital-lg transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                03
              </div>
              <h3 className="text-lg font-heading font-bold text-text">Clear Patient Guidance</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Providing plain-language advice regarding condition severity, diagnostic testing, and health management.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Doctors;
