import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Navigation, ShieldCheck, Award, Clock, CheckCircle2 } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Background Decorative Mesh & Ambient Glow (Matching Kridha Hospital Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-dark/40 rounded-full filter blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-white/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-white shadow-sm">
              <ShieldCheck className="w-4 h-4 text-secondary-light" />
              <span>Top Rated ENT Care in Kota • Best ENT Doctor Near You</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.14]">
              Best ENT Specialist in Kota <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-secondary-light">
                Ear, Nose, Throat &amp; Oral Care
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Looking for the <strong className="text-white font-semibold">best ENT specialist in Kota</strong> or <strong className="text-white font-semibold">best ENT doctor near me</strong>? Visit Gautam ENT Clinic for specialized clinical diagnosis by <strong className="text-white font-semibold">Dr. Pragyanand Gautam (MBBS, M.S. ENT)</strong>.
            </p>

            {/* Action Buttons: WhatsApp, Call, Directions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment with Dr. Pragyanand Gautam.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${clinicData.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white text-primary-dark hover:bg-sky-50 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>Call Now</span>
              </a>

              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-white/25 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                <Navigation className="w-4 h-4 text-secondary-light" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Clinic Quick Highlights */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                <span>M.S. (ENT) Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                <span>Diagnostic Microscope</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                <span>In-House Pharmacy</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-secondary to-primary-light opacity-30 blur-xl" />

              {/* Main Card Container */}
              <div className="relative bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/images/clinic/clinic_exterior_primary.webp"
                    alt="Gautam ENT Clinic storefront and medical building in Kota"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447] via-[#0b2447]/30 to-transparent" />
                  
                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4 bg-[#0b2447]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5 text-secondary-light" />
                    <span>Shrinathpuram-A, Kota</span>
                  </div>
                </div>

                {/* Doctor & Quick Info Strip on Hero Visual */}
                <div className="p-5 space-y-4 bg-[#0b2447]/90 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary flex-shrink-0 bg-slate-800 shadow-md">
                      <img 
                        src="/images/dr-pragyanand-gautam.png" 
                        alt="Dr. Pragyanand Gautam - Best ENT Specialist in Kota" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">Dr. Pragyanand Gautam</h3>
                      <p className="text-xs text-secondary-light font-semibold">MBBS, M.S. (ENT)</p>
                      <p className="text-[11px] text-white/70">12+ Years Clinical Excellence</p>
                    </div>
                  </div>

                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary-light" />
                      <span>Mon - Sat: 5:00 PM - 8:00 PM</span>
                    </div>
                    <span className="text-[10px] bg-secondary/20 text-secondary-light px-2.5 py-0.5 rounded-full border border-secondary/30 font-semibold">
                      Open Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
