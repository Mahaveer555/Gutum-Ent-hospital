import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle2, Ear, Activity, HeartPulse, Plus } from 'lucide-react';
import { clinicData } from '../data/clinic';

export const HeroSection = () => {
  const trustPoints = [
    'Ear, Nose and Throat Care',
    'Adult and Child ENT Concerns',
    'Convenient Kota Location',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/50 to-rosebg py-12 md:py-20 border-b border-roseborder/40">
      
      {/* Background Subtle ECG & Red Medical Cross Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="medicalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D62828" strokeWidth="0.8" opacity="0.3" />
            <circle cx="30" cy="30" r="1.5" fill="#D62828" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#medicalGrid)" />
        </svg>
      </div>

      {/* Floating Low-Opacity Medical Cross Background Badges */}
      <div className="absolute top-10 right-10 text-medicalred/5 pointer-events-none animate-rotate-slow">
        <Plus className="w-48 h-48 stroke-[1.5]" />
      </div>
      <div className="absolute bottom-10 left-6 text-medicalred/5 pointer-events-none">
        <Plus className="w-36 h-36 stroke-[1.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Red Pill Label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rosebg border border-roseborder shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-medicalred animate-pulse" />
              <span className="text-xs md:text-sm font-extrabold text-medicalred tracking-wide uppercase">
                Specialized Ear, Nose &amp; Throat Care in Kota
              </span>
            </motion.div>

            {/* Main Heading with Red Highlights */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-darkheading tracking-tight leading-[1.15]"
            >
              Complete ENT Care for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medicalred to-medicalred-dark">
                Better Hearing
              </span>
              , Breathing and Speaking
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-bodytext leading-relaxed font-normal max-w-2xl"
            >
              Gautam ENT Clinic provides patient-focused consultation for common ear, nose and throat concerns in Kota. Contact the clinic for professional evaluation and personalized medical guidance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-medicalred via-medicalred to-medicalred-dark hover:from-medicalred-dark hover:to-medicalred-900 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-red-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
              >
                <Phone className="w-5 h-5 animate-ring" />
                <span>Call for Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rosebg text-medicalred font-bold text-base px-6 py-3.5 rounded-xl border-2 border-medicalred/40 hover:border-medicalred shadow-sm transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 border-t border-roseborder/60 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-xs md:text-sm font-semibold text-darkheading">
                  <CheckCircle2 className="w-4 h-4 text-successgreen flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Image with Red Frame & Floating Cards */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Soft Red Radial Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/40 to-medicalred/20 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-hospital-lg border-4 border-white bg-white">
              <img
                src="/images/hero-ent.png"
                alt="ENT Specialist consultation at Gautam ENT Clinic Kota"
                className="w-full h-auto object-cover rounded-xl"
                width="800"
                height="600"
              />

              {/* Floating Card 1: Ear Care */}
              <motion.div
                className="absolute top-6 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-roseborder flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-9 h-9 rounded-lg bg-rosebg text-medicalred flex items-center justify-center">
                  <Ear className="w-5 h-5 animate-slow-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkheading">Ear Care</h4>
                  <p className="text-[11px] text-bodytext">Infections &amp; Hearing</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Sinus Care */}
              <motion.div
                className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-roseborder flex items-center gap-3"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="w-9 h-9 rounded-lg bg-rosebg text-medicalred flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkheading">Sinus Care</h4>
                  <p className="text-[11px] text-bodytext">Allergy &amp; Congestion</p>
                </div>
              </motion.div>

              {/* Floating Card 3: Throat Care */}
              <motion.div
                className="absolute bottom-4 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-roseborder flex items-center gap-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-9 h-9 rounded-lg bg-rosebg text-medicalred flex items-center justify-center">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darkheading">Throat Care</h4>
                  <p className="text-[11px] text-bodytext">Tonsils &amp; Voice</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
