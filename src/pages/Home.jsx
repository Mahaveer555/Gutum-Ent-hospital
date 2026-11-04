import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ArrowRight,
  UserCheck,
  Compass,
  MapPin,
  Activity,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Camera,
  Stethoscope,
  Sparkles,
  Award,
  Maximize2
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { GoogleMap } from '../components/GoogleMap';
import { FAQAccordion } from '../components/FAQAccordion';
import { ReviewCard } from '../components/ReviewCard';
import { Lightbox } from '../components/Lightbox';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { faqsData } from '../data/faqs';
import { galleryData } from '../data/gallery';

export const Home = () => {
  const doctor = doctorsData[0]; // Dr. Pragyanand Gautam

  // Featured ENT services
  const featuredServices = servicesData.slice(0, 8);

  const whyChooseUs = [
    { icon: UserCheck, title: 'Qualified M.S. ENT Specialist', desc: 'Dedicated consultations by Dr. Pragyanand Gautam, MBBS, M.S. (ENT).' },
    { icon: Compass, title: 'Precision Diagnostic Setup', desc: 'Equipped with specialized ENT diagnostic microscope and digital inspection systems.' },
    { icon: HeartPulse, title: 'Patient-First Ethical Care', desc: 'Patient and un-rushed evaluation focused on gentle, effective medical guidance.' },
    { icon: MapPin, title: 'Convenient Kota Location', desc: 'Situated at 58, Shrinathpuram-A, opposite Agnishaman Kendra / near Falodi Mart.' },
    { icon: ShieldCheck, title: 'Sanitized & Clean Environment', desc: 'Strict clinical hygiene protocols ensuring safety for every patient visit.' },
    { icon: Activity, title: 'In-House Pharmacy Counter', desc: 'On-site Vansh Medical counter providing easy access to prescribed medicines.' },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 6 Clinic Facilities & Achievements Photos (matching exact user screenshot)
  const featuredGallery = galleryData.slice(0, 6);
  const activeLightboxItem = lightboxIndex !== null ? featuredGallery[lightboxIndex] : null;

  const handleNextLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex < featuredGallery.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <>
      <SEOHead
        title="Best ENT Specialist in Kota | Best ENT Dr Near Me | Gautam ENT Clinic"
        description="Looking for the best ENT specialist in Kota or best ENT doctor near me? Visit Gautam ENT Clinic in Shrinathpuram-A Kota. Consult Dr. Pragyanand Gautam (MBBS, M.S. ENT) for ear, nose, throat & oral-dental related care. Call +91 70145 61171."
        keywords="best ent specialist in kota, best ent dentist in kota, best ent dr near me, best ent doctor in kota, ent clinic in kota, best ear doctor kota, ent hospital in kota, dr pragyanand gautam ent, ear nose throat clinic kota rajasthan"
        canonical="https://gautamentclinic.com/"
        faqItems={faqsData}
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
        ]}
      />

      <div className="space-y-12 md:space-y-16 pb-16 bg-[#faf9f7] text-[#404040] font-sans">
        
        {/* SECTION 1: Premium Hero Section */}
        <HeroSection />

        {/* SECTION 2: Quick Actions Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#171717] text-white rounded-2xl p-5 md:p-7 shadow-xl border border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Quick Action 1: Call Clinic */}
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ef2028] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-rose-300 uppercase">Call Directly</span>
                <h3 className="font-heading font-bold text-sm text-white">+91 70145 61171</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Quick voice consultation line</p>
              </div>
            </a>

            {/* Quick Action 2: WhatsApp Appointment */}
            <a
              href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">WhatsApp Book</span>
                <h3 className="font-heading font-bold text-sm text-white">Book Appointment</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Instant WhatsApp chat</p>
              </div>
            </a>

            {/* Quick Action 3: Google Directions */}
            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 shadow-md border border-white/15">
                <Navigation className="w-6 h-6 group-hover:scale-110 transition-transform text-[#ef2028]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-rose-300 uppercase">Location Map</span>
                <h3 className="font-heading font-bold text-sm text-white">Get Directions</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Shrinathpuram-A, Kota</p>
              </div>
            </a>

            {/* Quick Action 4: Clinic Timings */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 text-rose-300 flex items-center justify-center flex-shrink-0 shadow-md border border-white/10">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-rose-300 uppercase">Consultation Hours</span>
                <h3 className="font-heading font-bold text-sm text-white">Mon - Sat: 5 - 8 PM</h3>
                <p className="text-[11px] text-neutral-400 mt-0.5">Call to confirm availability</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: Doctor Spotlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Doctor Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-neutral-100 bg-[#171717] aspect-[3/4] sm:h-[480px]">
                <img
                  src="/images/dr-pragyanand-gautam.png"
                  alt="Dr. Pragyanand Gautam - ENT Specialist Kota"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#171717]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 text-white shadow-xl">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-sm">Dr. Pragyanand Gautam</h4>
                  <p className="text-xs text-rose-300 font-semibold mt-0.5">MBBS, M.S. (ENT)</p>
                  <p className="text-[11px] text-neutral-400 font-medium mt-0.5">State Medical Council Registered</p>
                </div>
              </div>
            </div>

            {/* Doctor Information & Credentials */}
            <div className="lg:col-span-7 space-y-6 text-neutral-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef2028]/10 border border-[#ef2028]/20 text-[#ef2028] text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-[#ef2028]" />
                <span>Best ENT Specialist in Kota</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#171717] tracking-tight">
                Dr. Pragyanand Gautam – Leading ENT Specialist &amp; Doctor in Kota
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed">
                Widely acknowledged among the <strong className="text-[#171717]">best ENT specialists in Kota</strong>, Dr. Pragyanand Gautam (MBBS, M.S. ENT) brings over 12 years of clinical excellence. He provides specialized evaluations for ear, nose, throat, voice, and oral cavity concerns using high-precision surgical microscopes and patient-friendly care.
              </p>

              <div className="bg-[#faf9f7] p-5 rounded-2xl border border-neutral-200 space-y-3">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#171717]">
                  Key Areas of ENT Consultation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
                  {doctor.areasOfConsultation.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to consult Dr. Pragyanand Gautam.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult Dr. Gautam on WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-[#ef2028]" />
                  <span>Call +91 70145 61171</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: ENT Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <SectionHeading
            badge="Specialized Services"
            title="Comprehensive Ear, Nose & Throat Services"
            subtitle="Professional diagnosis, clinical evaluation, and personalized guidelines for common and complex ENT conditions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 hover:border-[#ef2028]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#171717]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#ef2028] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {service.category} Care
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-[#171717] hover:text-[#ef2028] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#ef2028] hover:text-[#cf131b] flex items-center gap-1 group"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello Gautam ENT Clinic, I have a query regarding ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
                  >
                    Book Inquiry
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] hover:shadow-lg transition-all"
            >
              <span>View All ENT Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 5: Clinic Gallery & Facilities (Matching Exact User Screenshot) */}
        <section className="py-14 bg-white border-y border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            
            {/* Top Red Badge */}
            <div className="inline-block">
              <span className="px-3.5 py-1 rounded-full bg-[#ef2028]/10 text-[#ef2028] font-bold text-xs uppercase tracking-wider border border-[#ef2028]/20">
                CLINIC FACILITIES & EQUIPMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#171717] tracking-tight">
              Inside Gautam ENT Clinic
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Modern patient examination suites, surgical diagnostic microscope, on-site pharmacy, and clinical credentials at Shrinathpuram-A, Kota.
            </p>

            {/* Underline Red Divider Accent */}
            <div className="w-12 h-1 bg-[#ef2028] rounded-full mx-auto mt-4 mb-8" />

            {/* 3-Column Facilities Cards Grid (Matching Exact User Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-8">
              {featuredGallery.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative w-full aspect-[4/3] border border-neutral-100"
                >
                  <div className="relative w-full h-full overflow-hidden bg-neutral-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-[#171717] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5 text-[#ef2028]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button to View Full Gallery */}
            <div className="pt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Camera className="w-4 h-4 text-[#ef2028]" />
                <span>View Full Clinic Photo Gallery</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 6: Why Choose Gautam ENT Clinic */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <SectionHeading
            badge="Trust Pillars"
            title="Why Patients Trust Gautam ENT Clinic"
            subtitle="We prioritize patient comfort, accurate diagnostic evaluation, ethical guidance, and high hygiene standards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {whyChooseUs.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#ef2028]/40 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ef2028]/10 text-[#ef2028] flex items-center justify-center border border-[#ef2028]/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#171717]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: Local Authority - Best ENT Specialist, ENT-Dental Care & ENT Doctor Near Me */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gradient-to-br from-[#171717] via-[#242424] to-[#171717] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-neutral-800 space-y-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ef2028]/20 text-rose-300 border border-[#ef2028]/30 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#ef2028]" />
                Kota's Trusted ENT &amp; Oral Care Hub
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Best ENT Specialist in Kota &amp; Best ENT Doctor Near You
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Whether you need specialized treatment for ear pain, sinusitis, tonsillitis, or interconnected oral-dental and throat complications, Gautam ENT Clinic provides gold-standard medical consultations.
              </p>
            </div>

            {/* 3 Informational Authority Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Best ENT Specialist in Kota */}
              <div className="bg-[#1f1f1f] rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-[#ef2028]/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ef2028]/20 text-[#ef2028] flex items-center justify-center border border-[#ef2028]/30">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Best ENT Specialist in Kota
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Led by <strong className="text-white">Dr. Pragyanand Gautam (MBBS, M.S. ENT)</strong> with 12+ years of surgical experience. Equipped with advanced binocular ENT surgical microscopes for precise ear and nasal diagnostic evaluations.
                  </p>
                </div>
                <ul className="text-xs text-neutral-400 space-y-2 pt-2 border-t border-neutral-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>Microscopic Ear &amp; Tympanic Checkups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>Advanced Sinus &amp; Nasal Allergy Care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>Pediatric ENT &amp; Hearing Assessments</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Best ENT & Dental / Oral Health Care */}
              <div className="bg-[#1f1f1f] rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-[#ef2028]/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ef2028]/20 text-[#ef2028] flex items-center justify-center border border-[#ef2028]/30">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    ENT &amp; Dental / Oral Health Connection
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Searching for an <strong className="text-white">ENT Dentist or Oral &amp; ENT Specialist in Kota</strong>? Many ear, nose, and sinus conditions originate in the oral cavity and teeth. We provide specialized medical diagnosis for interconnected head-neck conditions.
                  </p>
                </div>
                <ul className="text-xs text-neutral-400 space-y-2 pt-2 border-t border-neutral-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>Odontogenic (Tooth-related) Sinusitis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>TMJ Jaw Pain radiating to Ears</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ef2028] flex-shrink-0" />
                    <span>Oral Ulcers, Tonsils &amp; Salivary Glands</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Best ENT Dr Near Me in Kota */}
              <div className="bg-[#1f1f1f] rounded-2xl p-6 border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-[#ef2028]/50 transition-colors">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20">
                    <MapPin className="w-6 h-6 text-[#ef2028]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Best ENT Doctor Near Me in Kota
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Located centrally at <strong className="text-white">58, Shrinathpuram-A</strong>, Gautam ENT Clinic is within 5–15 minutes of all prominent residential and coaching hubs across Kota, with easy roadside parking and in-house pharmacy.
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-800">
                  <span className="text-[11px] font-semibold text-rose-300 uppercase tracking-wider block mb-2">
                    Quick Access from Localities:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-300">
                    <span className="bg-white/10 px-2 py-0.5 rounded">Shrinathpuram</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Talwandi</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Dadabari</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Mahaveer Nagar</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Vigyan Nagar</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Jawahar Nagar</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded">Kunhari</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Consultation Bar */}
            <div className="bg-[#1a1a1a] rounded-2xl p-4 sm:p-6 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  Need an urgent consultation with Kota's top ENT specialist?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  Consultation timings: Mon–Sat 5:00 PM – 8:00 PM. Call before visiting to confirm doctor availability.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 70145 61171</span>
                </a>
                <a
                  href={getWhatsAppUrl("Hello Dr. Gautam, I am looking for the best ENT specialist in Kota for consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 8: Verified Google Patient Reviews */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SectionHeading
            badge="Verified Patient Feedback"
            title="What Patients Say About Gautam ENT Clinic"
            subtitle="Real experiences and verified feedback from patients treated in Kota, Rajasthan."
            centered={true}
          />

          <div className="mt-8">
            <ReviewCard />
          </div>
        </section>

        {/* SECTION 9: FAQ Section with FAQAccordion (Google FAQ Rich Snippets) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Best ENT Specialist &amp; Doctor in Kota – FAQs"
            subtitle="Common questions about ENT consultations, ear-nose-throat symptoms, oral health connections, and visiting hours in Kota."
          />

          <div className="mt-8">
            <FAQAccordion items={faqsData} />
          </div>
        </section>

        {/* SECTION 10: Contact, Location Map & Emergency Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6 text-neutral-700">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ef2028]/10 text-[#ef2028] border border-[#ef2028]/20 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ef2028]" />
                  Clinic Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#171717] tracking-tight">
                  Visit Gautam ENT Clinic
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf9f7] border border-neutral-200">
                  <MapPin className="w-5 h-5 text-[#ef2028] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171717] font-bold">Address</strong>
                    <p className="text-neutral-600 mt-0.5">
                      58, Shrinathpuram-A, Kota, Rajasthan 324010<br />
                      <span className="text-xs text-[#ef2028] font-semibold">(Opposite Agnishaman Kendra / Near Falodi Mart)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf9f7] border border-neutral-200">
                  <Phone className="w-5 h-5 text-[#ef2028] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171717] font-bold">Phone Number</strong>
                    <a href={`tel:${clinicData.rawPhone}`} className="text-[#ef2028] font-bold hover:underline">
                      +91 70145 61171
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf9f7] border border-neutral-200">
                  <Clock className="w-5 h-5 text-[#ef2028] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171717] font-bold">Consultation Hours</strong>
                    <p className="text-neutral-700">Mon - Sat: 5:00 PM - 8:00 PM</p>
                    <p className="text-xs text-rose-800 font-semibold mt-0.5">
                      Please call +91 70145 61171 to confirm today's doctor availability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4 text-rose-300" />
                  <span>Get Google Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-neutral-300 shadow-md relative">
              <GoogleMap height="100%" />
            </div>

          </div>
        </section>

      </div>

      {/* Full-Screen Lightbox Modal for Home Page Gallery */}
      {activeLightboxItem && (
        <Lightbox
          image={activeLightboxItem.src}
          title={activeLightboxItem.title}
          caption={activeLightboxItem.caption}
          category={activeLightboxItem.category}
          currentIndex={lightboxIndex}
          totalCount={featuredGallery.length}
          onClose={() => setLightboxIndex(null)}
          onNext={lightboxIndex < featuredGallery.length - 1 ? handleNextLightbox : null}
          onPrev={lightboxIndex > 0 ? handlePrevLightbox : null}
        />
      )}
    </>
  );
};
