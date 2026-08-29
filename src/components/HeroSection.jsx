import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Navigation, ShieldCheck, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 via-medicalnavy to-slate-900 text-white overflow-hidden pt-6 pb-16 md:py-24">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-medicalred rounded-full filter blur-[128px]" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-cyan-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trusted ENT Medical Clinic • Shrinathpuram-A, Kota</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Advanced Care for Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-200">
                Ear, Nose &amp; Throat Health
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized clinical diagnosis and compassionate ear, nose, throat, voice, and sinus care by{' '}
              <strong className="text-white font-semibold">Dr. Pragyanand Gautam (MBBS, M.S. ENT)</strong>.
            </p>

            {/* Action Buttons: WhatsApp, Call, Directions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment with Dr. Pragyanand Gautam.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${clinicData.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-medicalred hover:bg-red-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                <Navigation className="w-4 h-4 text-cyan-300" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Clinic Quick Highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>M.S. (ENT) Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Diagnostic Microscope</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-medicalred opacity-30 blur-lg" />

              {/* Main Card Container */}
              <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src="/images/clinic/clinic_exterior_primary.webp"
                    alt="Gautam ENT Clinic storefront and medical building in Kota"
                    className="w-full h-full object-contain object-center"
                    loading="eager"
                    fetchpriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Shrinathpuram-A, Kota</span>
                  </div>
                </div>

                {/* Doctor & Quick Info Strip on Hero Visual */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/80 flex-shrink-0 bg-slate-700">
                      <img 
                        src="/images/doctor-portrait.png" 
                        alt="Dr. Pragyanand Gautam" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">Dr. Pragyanand Gautam</h3>
                      <p className="text-xs text-cyan-300 font-medium">MBBS, M.S. (ENT)</p>
                      <p className="text-[11px] text-slate-400">Ear, Nose &amp; Throat Specialist</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/70 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>Mon - Sat: 5:00 PM - 8:00 PM</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                      Call to Confirm
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
