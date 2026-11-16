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
    { icon: UserCheck, title: 'Qualified M.S. ENT Specialist', desc: 'Dedicated consultations by Dr. Pragyanand Gautam, MBBS, M.S. (ENT) with 12+ years clinical experience.' },
    { icon: Compass, title: 'Precision Diagnostic Setup', desc: 'Equipped with specialized ENT diagnostic microscope and digital inspection systems for painless assessment.' },
    { icon: HeartPulse, title: 'Patient-First Ethical Care', desc: 'Patient and unhurried evaluation focused on clear explanations and gentle, evidence-based medical guidance.' },
    { icon: MapPin, title: 'Convenient Kota Location', desc: 'Situated at 58, Shrinathpuram-A, opposite Agnishaman Kendra / near Falodi Mart with easy parking.' },
    { icon: ShieldCheck, title: 'Sanitized & Clean Environment', desc: 'Strict clinical hygiene protocols and modern sterilization ensuring patient safety for every visit.' },
    { icon: Activity, title: 'In-House Pharmacy Counter', desc: 'On-site Vansh Medical counter providing convenient immediate access to prescribed ENT medications.' },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 6 Clinic Facilities & Achievements Photos (Matching Exact User Photo Grid)
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

      <div className="space-y-14 md:space-y-20 pb-16 bg-bg-soft text-text font-sans">
        
        {/* SECTION 1: Premium Hero Section (Kridha Hospital Visual Language) */}
        <HeroSection />

        {/* SECTION 2: Quick Actions Floating Strip (Kridha Hospital Cards Style) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-hospital-lg border border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Quick Action 1: Call Clinic */}
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-bg-soft border border-border hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 animate-ring" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-primary uppercase">Direct Call</span>
                <h3 className="font-heading font-bold text-sm text-text">{clinicData.phone}</h3>
                <p className="text-[11px] text-text-light mt-0.5">Quick voice consultation line</p>
              </div>
            </a>

            {/* Quick Action 2: WhatsApp Appointment */}
            <a
              href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-bg-soft border border-border hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-emerald-600 uppercase">WhatsApp Book</span>
                <h3 className="font-heading font-bold text-sm text-text">Book Appointment</h3>
                <p className="text-[11px] text-text-light mt-0.5">Instant WhatsApp chat</p>
              </div>
            </a>

            {/* Quick Action 3: Google Directions */}
            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-bg-soft border border-border hover:border-secondary/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-secondary uppercase">Location Map</span>
                <h3 className="font-heading font-bold text-sm text-text">Get Directions</h3>
                <p className="text-[11px] text-text-light mt-0.5">Shrinathpuram-A, Kota</p>
              </div>
            </a>

            {/* Quick Action 4: Clinic Timings */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-bg-soft border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b2447] to-primary-dark text-secondary-light flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-primary uppercase">Visiting Hours</span>
                <h3 className="font-heading font-bold text-sm text-text">Mon - Sat: 5 - 8 PM</h3>
                <p className="text-[11px] text-text-light mt-0.5">Call to confirm availability</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: Doctor Spotlight (Kridha Specialist Card Style) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-hospital border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 bg-gradient-to-b from-[#0b2447] to-[#0a1424] aspect-[3/4] sm:h-[480px]">
                <img
                  src="/images/dr-pragyanand-gautam.png"
                  alt="Dr. Pragyanand Gautam - ENT Specialist Kota"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1424] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0a1424]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/15 text-white shadow-xl">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white">Dr. Pragyanand Gautam</h4>
                  <p className="text-xs text-secondary-light font-semibold mt-0.5">MBBS, M.S. (ENT)</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">State Medical Council Registered</p>
                </div>
              </div>
            </div>

            {/* Doctor Information & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Best ENT Specialist in Kota</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-text tracking-tight">
                Dr. Pragyanand Gautam – Leading ENT Specialist &amp; Doctor in Kota
              </h2>

              <p className="text-base text-text-light leading-relaxed">
                Widely acknowledged among the <strong className="text-text font-semibold">best ENT specialists in Kota</strong>, Dr. Pragyanand Gautam (MBBS, M.S. ENT) brings over 12 years of clinical excellence. He provides specialized evaluations for ear, nose, throat, voice, and oral cavity concerns using high-precision surgical microscopes and patient-friendly care.
              </p>

              <div className="bg-bg-soft p-5 sm:p-6 rounded-2xl border border-border space-y-3">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-text">
                  Key Areas of ENT Consultation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-text">
                  {doctor.areasOfConsultation.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
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
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult Dr. Gautam on WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-6 py-3.5 rounded-xl shadow-blue-btn transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {clinicData.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: Comprehensive ENT Services Grid (Kridha Specialities Style) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <SectionHeading
            badge="Specialized Services"
            title="Comprehensive Ear, Nose &amp; Throat Care"
            subtitle="Professional diagnosis, clinical evaluation, and personalized treatment guidelines for common and complex ENT conditions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredServices.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary/50 hover:shadow-hospital-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-primary text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm border border-primary/20">
                      {service.category} Care
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-text group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-light leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-border mt-4 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 group/btn"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello Gautam ENT Clinic, I have a query regarding ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
                  >
                    Inquiry
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-8 py-3.5 rounded-xl shadow-blue-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>View All ENT Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 5: Clinic Facilities & Equipment Grid (Preserving Exact 3-Column Screenshot) */}
        <section className="py-16 bg-white border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            
            {/* Top Badge */}
            <div className="inline-block">
              <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20">
                CLINIC FACILITIES &amp; EQUIPMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text tracking-tight">
              Inside Gautam ENT Clinic
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-text-light font-normal max-w-2xl mx-auto leading-relaxed">
              Modern patient examination suites, surgical diagnostic microscope, on-site pharmacy, and clinical credentials at Shrinathpuram-A, Kota.
            </p>

            {/* Dual Gradient Underline Accent */}
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4 mb-8" />

            {/* 3-Column Facilities Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-8">
              {featuredGallery.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-hospital-lg transition-all duration-300 cursor-pointer group relative w-full aspect-[4/3] border border-border hover:border-primary/60"
                >
                  <div className="relative w-full h-full overflow-hidden bg-bg-soft">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0b2447]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md text-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5 text-primary" />
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
                className="inline-flex items-center gap-2 bg-[#0b2447] hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                <Camera className="w-4 h-4 text-secondary-light" />
                <span>View Full Clinic Photo Gallery</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>
        </section>

        {/* SECTION 6: Why Choose Gautam ENT Clinic (Trust Pillars) */}
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
                  className="bg-white p-7 rounded-2xl border border-border shadow-sm hover:shadow-hospital-lg hover:border-primary/50 transition-all space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: Local Authority - Best ENT Specialist, ENT-Dental Care & ENT Doctor Near Me (Kridha Dark Accent Block) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gradient-to-br from-[#0a1424] via-[#0b2447] to-[#0a1424] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/15 space-y-10 relative overflow-hidden">
            
            {/* Background Ambient Lights */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-secondary-light border border-white/20 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-secondary" />
                Kota's Trusted ENT &amp; Oral Care Hub
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
                Best ENT Specialist in Kota &amp; Best ENT Doctor Near You
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need specialized treatment for ear pain, sinusitis, tonsillitis, or interconnected oral-dental and throat complications, Gautam ENT Clinic provides gold-standard medical consultations.
              </p>
            </div>

            {/* 3 Informational Authority Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Card 1: Best ENT Specialist in Kota */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/15 flex flex-col justify-between space-y-4 hover:border-primary/60 transition-all backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-secondary-light flex items-center justify-center border border-primary/30">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Best ENT Specialist in Kota
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Led by <strong className="text-white">Dr. Pragyanand Gautam (MBBS, M.S. ENT)</strong> with 12+ years of surgical experience. Equipped with advanced binocular ENT surgical microscopes for precise ear and nasal diagnostic evaluations.
                  </p>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-white/15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>Microscopic Ear &amp; Tympanic Checkups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>Advanced Sinus &amp; Nasal Allergy Care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>Pediatric ENT &amp; Hearing Assessments</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Best ENT & Dental / Oral Health Care */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/15 flex flex-col justify-between space-y-4 hover:border-primary/60 transition-all backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-secondary-light flex items-center justify-center border border-primary/30">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    ENT &amp; Dental / Oral Health Connection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Searching for an <strong className="text-white">ENT Dentist or Oral &amp; ENT Specialist in Kota</strong>? Many ear, nose, and sinus conditions originate in the oral cavity and teeth. We provide specialized medical diagnosis for interconnected head-neck conditions.
                  </p>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 pt-3 border-t border-white/15">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>Odontogenic (Tooth-related) Sinusitis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>TMJ Jaw Pain radiating to Ears</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary-light flex-shrink-0" />
                    <span>Oral Ulcers, Tonsils &amp; Salivary Glands</span>
                  </li>
                </ul>
              </div>

              {/* Card 3: Best ENT Dr Near Me in Kota */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/15 flex flex-col justify-between space-y-4 hover:border-primary/60 transition-all backdrop-blur-md">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 text-white flex items-center justify-center border border-white/25">
                    <MapPin className="w-6 h-6 text-secondary-light" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Best ENT Doctor Near Me in Kota
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Located centrally at <strong className="text-white">58, Shrinathpuram-A</strong>, Gautam ENT Clinic is within 5–15 minutes of all prominent residential and coaching hubs across Kota, with easy roadside parking and in-house pharmacy.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/15">
                  <span className="text-[11px] font-semibold text-secondary-light uppercase tracking-wider block mb-2">
                    Quick Access from Localities:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-200">
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
            <div className="bg-white/10 rounded-2xl p-5 sm:p-6 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 backdrop-blur-md">
              <div className="text-center sm:text-left">
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  Need an urgent consultation with Kota's top ENT specialist?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Consultation timings: Mon–Sat 5:00 PM – 8:00 PM. Call before visiting to confirm doctor availability.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-blue-btn transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {clinicData.phone}</span>
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

        {/* SECTION 9: FAQ Section with FAQAccordion */}
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
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-hospital border border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6 text-text">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Clinic Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-text tracking-tight">
                  Visit Gautam ENT Clinic
                </h2>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-bg-soft border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Address</strong>
                    <p className="text-text-light mt-0.5">
                      58, Shrinathpuram-A, Kota, Rajasthan 324010<br />
                      <span className="text-xs text-primary font-semibold">(Opposite Agnishaman Kendra / Near Falodi Mart)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-bg-soft border border-border">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Phone Number</strong>
                    <a href={`tel:${clinicData.rawPhone}`} className="text-primary font-bold hover:underline">
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-bg-soft border border-border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Consultation Hours</strong>
                    <p className="text-text">{clinicData.openingHoursNotice}</p>
                    <p className="text-xs text-primary-dark font-semibold mt-0.5">
                      Please call {clinicData.phone} to confirm today's doctor availability.
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold px-5 py-3 rounded-xl shadow-blue-btn transition-all text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Google Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-border shadow-sm relative">
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

export default Home;
