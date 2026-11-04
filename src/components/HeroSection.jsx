import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Navigation, ShieldCheck, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#171717] via-[#1f1f1f] to-[#171717] text-white overflow-hidden pt-6 pb-16 md:py-24">
      {/* Background Decorative Mesh & Glow in Aarogyam Red */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ef2028] rounded-full filter blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cf131b] rounded-full filter blur-[140px]" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-rose-200">
              <ShieldCheck className="w-4 h-4 text-[#ef2028]" />
              <span>Top Rated ENT Care in Kota • Best ENT Doctor Near You</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Best ENT Specialist in Kota <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-rose-100">
                Ear, Nose, Throat &amp; Oral Care
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Looking for the <strong className="text-white font-semibold">best ENT specialist in Kota</strong> or <strong className="text-white font-semibold">best ENT doctor near me</strong>? Visit Gautam ENT Clinic for specialized clinical diagnosis by <strong className="text-white font-semibold">Dr. Pragyanand Gautam (MBBS, M.S. ENT)</strong>.
            </p>

            {/* Action Buttons: WhatsApp, Call, Directions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment with Dr. Pragyanand Gautam.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/30 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${clinicData.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
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
                <Navigation className="w-4 h-4 text-rose-300" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Clinic Quick Highlights */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                <span>M.S. (ENT) Specialist</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                <span>Diagnostic Microscope</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
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
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ef2028] to-[#b5121b] opacity-30 blur-lg" />

              {/* Main Card Container */}
              <div className="relative bg-[#1f1f1f] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
                  <img
                    src="/images/clinic/clinic_exterior_primary.webp"
                    alt="Gautam ENT Clinic storefront and medical building in Kota"
                    className="w-full h-full object-contain object-center"
                    loading="eager"
                    fetchpriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/40 to-transparent" />
                  
                  {/* Badge on Image */}
                  <div className="absolute top-4 left-4 bg-[#171717]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ef2028]" />
                    <span>Shrinathpuram-A, Kota</span>
                  </div>
                </div>

                {/* Doctor & Quick Info Strip on Hero Visual */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ef2028] flex-shrink-0 bg-neutral-800">
                      <img 
                        src="/images/dr-pragyanand-gautam.png" 
                        alt="Dr. Pragyanand Gautam - Best ENT Specialist in Kota" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">Dr. Pragyanand Gautam</h3>
                      <p className="text-xs text-rose-300 font-medium">MBBS, M.S. (ENT)</p>
                      <p className="text-[11px] text-neutral-400">Best ENT Specialist in Kota</p>
                    </div>
                  </div>

                  <div className="bg-[#141414] p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#ef2028]" />
                      <span>Mon - Sat: 5:00 PM - 8:00 PM</span>
                    </div>
                    <span className="text-[10px] bg-[#ef2028]/20 text-rose-300 px-2 py-0.5 rounded border border-[#ef2028]/30 font-semibold">
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
