import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ArrowRight,
  UserCheck,
  Compass,
  Ear,
  MapPin,
  Calendar,
  Plus,
  Activity,
  HeartPulse,
  Award,
  Shield,
  Search,
  CheckCircle2,
  ChevronRight,
  Play
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCard } from '../components/DoctorCard';
import { GalleryCard } from '../components/GalleryCard';
import { Lightbox } from '../components/Lightbox';
import { EmergencyNotice } from '../components/EmergencyNotice';
import { GoogleMap } from '../components/GoogleMap';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { galleryData, galleryCategories } from '../data/gallery';

// Counter component for animated statistics
const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    // Parse numeric parts and string suffix
    const numPart = parseInt(value) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    
    let start = 0;
    const duration = 2; // seconds
    const frames = 60 * duration;
    const increment = numPart / frames;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numPart) {
        setCount(numPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-heading font-extrabold text-[#102A43]">
      {count}{value.replace(/[0-9]/g, '')}
    </span>
  );
};

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // 12 services
  const featuredServices = servicesData.slice(0, 8); // featured on home page
  const allServices = servicesData;

  // Filter gallery preview for Home Page
  const filteredGallery = activeCategory === 'All' 
    ? galleryData.slice(0, 6) 
    : galleryData.filter(item => item.category === activeCategory).slice(0, 6);

  const openLightbox = (imgSrc, title) => {
    setLightboxImage(imgSrc);
    setLightboxTitle(title);
  };

  const whyChooseUs = [
    { icon: UserCheck, title: 'Qualified ENT Specialist', desc: 'Expert consultation and dedicated patient care by Dr. Pragyanand Gautam (MBBS, M.S. ENT).' },
    { icon: Compass, title: 'Advanced Equipment', desc: 'Equipped with modern ENT diagnostic microscope and digital examination systems.' },
    { icon: Ear, title: 'Accurate Diagnosis', desc: 'Thorough clinical evaluations and physical inspections for reliable medical guidance.' },
    { icon: Shield, title: 'Personalized Care', desc: 'Dedicated un-rushed time for understanding symptoms and designing custom treatment plans.' },
    { icon: MapPin, title: 'Convenient Location', desc: 'Situated at 58, Shrinathpuram-A, Kota with easy access and street-level parking.' },
    { icon: Activity, title: 'Patient-Friendly Environment', desc: 'Clean, sanitized, quiet clinical atmosphere prioritizing comfort and safety.' },
  ];

  // Animation variants
  const faderUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Gautam Ear Nose Throat Clinic | ENT Specialist in Kota"
        description="Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota. Expert ENT care by Dr. Pragyanand Gautam, MBBS, M.S. ENT. Call +91 70145 61171."
        canonical="https://gautamentclinic.com/"
      />

      <div className="space-y-20 md:space-y-28 pb-16">
        
        {/* 1. Hero Slider Section */}
        <HeroSection />

        {/* 2. Quick Services Strip (Ear, Nose, Throat, Hearing) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#102A43] text-white rounded-2xl p-6 md:p-8 shadow-hospital-lg border border-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C92032] text-white flex items-center justify-center flex-shrink-0">
                <Ear className="w-6 h-6 animate-slow-pulse" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white">Ear Care</h3>
                <p className="text-xs text-slate-300 mt-1">Infections, wax removal, and hearing assessments.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C92032] text-white flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white">Nose &amp; Sinus</h3>
                <p className="text-xs text-slate-300 mt-1">Sinusitis, nasal allergy, and septum evaluation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C92032] text-white flex items-center justify-center flex-shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white">Throat Care</h3>
                <p className="text-xs text-slate-300 mt-1">Tonsillitis, voice hoarseness, and snoring evaluation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C92032] text-white flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white">Hearing Care</h3>
                <p className="text-xs text-slate-300 mt-1">Detailed audiometry and hearing loss consultations.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Notice strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyNotice />
        </div>

        {/* 3. About Clinic Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C92032]/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-hospital-lg border-4 border-white bg-white aspect-[3/2]">
                <img
                  src="/images/clinic/ent_diagram.webp"
                  alt="Ear Nose Throat Medical Scope"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Right details */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#C92032] bg-[#C92032]/5 border border-[#C92032]/10">
                PATIENT-FIRST MEDICAL PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#102A43] leading-tight">
                Welcome to Gautam Ear Nose Throat Clinic
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Gautam Ear Nose Throat Clinic is a premier medical establishment in Kota, Rajasthan. Under the expert leadership of Dr. Pragyanand Gautam, we provide detailed, patient-focused medical checkups and otolaryngology guidance.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our core commitments are rooted in patient comfort, honest medical opinions, and clinical transparency. We employ modern diagnostic tools to ensure accurate assessment and personalized treatment paths.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#102A43]">Experienced ENT Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#102A43]">Modern Diagnostic Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#102A43]">Personalized Treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#102A43]">Patient-Friendly Care</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#C92032] hover:bg-[#8F1020] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-red-btn transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#102A43] font-bold text-sm px-6 py-3.5 rounded-xl border border-[#E7EDF3] shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 animate-ring text-[#C92032]" />
                  <span>Call {clinicData.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Doctor Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Medical Specialist"
            title="Our ENT Specialist"
            subtitle="Providing dedicated, high-quality, and ethical healthcare solutions in Kota."
            centered={true}
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-8"
          >
            <DoctorCard doctor={doctorsData[0]} />
          </motion.div>
        </section>

        {/* 5. ENT Services Section (12 Services Cards) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Otolaryngology Focus"
              title="Ear, Nose &amp; Throat Services"
              subtitle="Expert medical consultations tailored to evaluate and resolve common ENT symptoms."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C92032] hover:text-[#8F1020] bg-white px-5 py-3 rounded-xl shadow border border-[#E7EDF3] self-start md:self-auto hover:bg-[#F7FAFC] transition-all"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredServices.map((service) => (
              <motion.div key={service.id} variants={faderUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Full-width storefront banner in the center of the page */}
        <section className="relative h-[280px] sm:h-[380px] overflow-hidden my-6">
          <div className="absolute inset-0">
            <img
              src="/images/clinic/clinic_exterior_primary.webp"
              alt="Gautam Ear Nose Throat Clinic Front Facade"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#FF9F43] bg-white/10 border border-white/20 w-fit backdrop-blur-sm">
              CLINIC storefront FACADE
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold max-w-xl leading-tight">
              Gautam Ear Nose Throat Clinic &amp; Vansh Medical
            </h2>
            <p className="text-sm sm:text-base text-slate-200 font-normal max-w-lg leading-relaxed">
              Visit our clean, modern diagnostic center located at 58, Shrinathpuram-A, Kota, Rajasthan for comprehensive ENT checkups.
            </p>
            <div className="pt-2">
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-[#FF512F] to-[#F09819] hover:from-[#FF512F]/95 hover:to-[#F09819]/95 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2 hover:scale-105"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. Advanced Facilities Section (Uploaded real photographs) */}
        <section className="bg-[#F7FAFC] py-16 md:py-24 border-y border-[#E7EDF3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Modern Clinic Space"
              title="Advanced Medical Facilities"
              subtitle="Inside our modern, clean, and patient-first clinical facility in Shrinathpuram-A, Kota."
              centered={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Facility Card 1 */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-hospital border border-[#E7EDF3] group cursor-pointer"
                onClick={() => openLightbox('/images/clinic/examination_room.webp', 'Advanced ENT Examination Room')}
              >
                <div className="relative aspect-video overflow-hidden bg-rosebg">
                  <img
                    src="/images/clinic/examination_room.webp"
                    alt="Advanced ENT Examination Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-lg">
                    Advanced ENT Examination Room
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Modern diagnostic chamber featuring patient examination chairs, medical cameras, and digital screens for clear visual assessments.
                  </p>
                </div>
              </motion.div>

              {/* Facility Card 2 */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-hospital border border-[#E7EDF3] group cursor-pointer"
                onClick={() => openLightbox('/images/clinic/ent_microscope.webp', 'Advanced ENT Microscope')}
              >
                <div className="relative aspect-video overflow-hidden bg-rosebg">
                  <img
                    src="/images/clinic/ent_microscope.webp"
                    alt="Advanced ENT Microscope"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-lg">
                    ENT Microscope Facility
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    High-precision medical microscope for detailed ear examinations, micro-inspections, and non-invasive outpatient diagnostics.
                  </p>
                </div>
              </motion.div>

              {/* Facility Card 3 */}
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-hospital border border-[#E7EDF3] group cursor-pointer"
                onClick={() => openLightbox('/images/clinic/medicine_availability.webp', 'Medicine Availability')}
              >
                <div className="relative aspect-video overflow-hidden bg-rosebg">
                  <img
                    src="/images/clinic/medicine_availability.webp"
                    alt="Pharmacy and Medicine Counter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-white font-heading font-bold text-lg">
                    Vansh Medicine Availability
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Quick pharmacy access right at the clinic entrance to ensure patients can easily get their prescribed medications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Awards & Recognition Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ACHIEVEMENTS"
            title="Awards &amp; Recognition"
            subtitle="Verified credentials reflecting dedicated clinical and professional standards."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Award 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-hospital border border-[#E7EDF3] flex flex-col justify-between cursor-pointer group"
              onClick={() => openLightbox('/images/clinic/certificate_ent_live.webp', 'ENT Live Certificate of Appreciation')}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C92032]/5 text-[#C92032] flex items-center justify-center group-hover:bg-[#C92032] group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#E7EDF3] bg-slate-50 relative">
                  <img
                    src="/images/clinic/certificate_ent_live.webp"
                    alt="ENT Live Certificate"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-[#102A43] text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-[#102A43] text-lg mt-2">
                  ENT Live Certificate
                </h3>
                <p className="text-xs text-slate-500">Rhinology &amp; Skull Base Conference</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Awarded to Dr. Pragyanand Gautam as the E-Poster Contest Winner at Mumbai.
                </p>
              </div>
            </motion.div>

            {/* Award 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-hospital border border-[#E7EDF3] flex flex-col justify-between cursor-pointer group"
              onClick={() => openLightbox('/images/clinic/certificate_asia_book.webp', 'Asia Book of Records Achievement')}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C92032]/5 text-[#C92032] flex items-center justify-center group-hover:bg-[#C92032] group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#E7EDF3] bg-slate-50 relative">
                  <img
                    src="/images/clinic/certificate_asia_book.webp"
                    alt="Asia Book of Records Certificate"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-[#102A43] text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-[#102A43] text-lg mt-2">
                  Asia Book of Records
                </h3>
                <p className="text-xs text-slate-500">National Healthcare Record Participant</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Certificate of Appreciation awarded to Dr. Pragyanand Gautam for participating in a record healthcare campaign.
                </p>
              </div>
            </motion.div>

            {/* Award 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-hospital border border-[#E7EDF3] flex flex-col justify-between cursor-pointer group"
              onClick={() => openLightbox('/images/clinic/awards_display.webp', 'Awards Display Shelf')}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C92032]/5 text-[#C92032] flex items-center justify-center group-hover:bg-[#C92032] group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#E7EDF3] bg-slate-50 relative">
                  <img
                    src="/images/clinic/awards_display.webp"
                    alt="Clinic Awards Display Shelf"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm text-[#102A43] text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View Display
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-[#102A43] text-lg mt-2">
                  Clinical Registrations
                </h3>
                <p className="text-xs text-slate-500">Professional Verification &amp; Plaques</p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Verification certificates and medical society plaque displayed inside Dr. Gautam's consulting chamber.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. Animated Statistics / Clinical Standards */}
        <section className="bg-gradient-to-b from-[#102A43]/5 via-white to-white py-12 border-t border-[#E7EDF3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-6 bg-white rounded-2xl shadow-hospital border border-[#E7EDF3] text-center">
              <div className="space-y-2">
                <Counter value="12+" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Years Experience</p>
              </div>
              <div className="space-y-2">
                <Counter value="1" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">ENT Specialist</p>
              </div>
              <div className="space-y-2">
                <Counter value="100%" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Ethical Consultation</p>
              </div>
              <div className="space-y-2">
                <Counter value="2+" />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Modern Diagnostic Rooms</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Gallery Preview (Masonry grid with filter, lightbox, swipe) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading
              badge="Visual Tour"
              title="Gallery Preview"
              subtitle="Clean, professional, and well-equipped otolaryngology clinic."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C92032] hover:text-[#8F1020] bg-white px-5 py-3 rounded-xl shadow border border-[#E7EDF3] self-start md:self-auto hover:bg-[#F7FAFC] transition-all"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 border-b border-[#E7EDF3] scrollbar-none mb-8">
            {galleryCategories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#C92032] text-white shadow-md'
                    : 'bg-white text-[#102A43] hover:bg-slate-50 border border-[#E7EDF3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                >
                  <GalleryCard 
                    item={item} 
                    onClick={() => openLightbox(item.src, item.title)} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 10. Why Choose Us (6 cards) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="BENEFITS"
            title="Why Choose Gautam ENT Clinic"
            subtitle="We prioritize patient comfort, precise microscopic diagnosis, and un-rushed medical sessions."
            centered={true}
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {whyChooseUs.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={faderUp}
                  className="bg-white rounded-2xl p-6 shadow-hospital border border-[#E7EDF3] transition-all hover:border-[#C92032]/40 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C92032]/5 text-[#C92032] flex items-center justify-center mb-4 group-hover:bg-[#C92032] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#102A43] group-hover:text-[#C92032] transition-colors">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 11. Appointment CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#102A43] to-[#8F1020] text-white rounded-3xl p-8 md:p-12 shadow-hospital-lg text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#ctaGrid)" />
              </svg>
            </div>
            
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                PROMPT ASSISTANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-snug">
                Need Expert ENT Consultation?
              </h2>
              <p className="text-sm md:text-base text-slate-200 font-normal leading-relaxed">
                Connect with our clinic team today to book your ear, nose, or throat consultation with Dr. Pragyanand Gautam in Kota.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="bg-white text-[#102A43] hover:bg-[#F7FAFC] font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#C92032] animate-ring" /> 
                  <span>Call {clinicData.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to request an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" /> 
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#102A43] hover:bg-[#102A43]/80 border border-slate-600 text-white font-extrabold text-base px-8 py-3.5 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5 text-rose-300" /> 
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Contact Preview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Details */}
            <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-hospital border border-[#E7EDF3] flex flex-col justify-between space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#C92032] bg-[#C92032]/5 border border-[#C92032]/10 mb-4">
                  VISIT CLINIC
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-[#102A43]">
                  Contact &amp; Timings
                </h2>
                <p className="text-sm text-slate-500 mt-1">Visit our ENT facility in Kota, Rajasthan.</p>
              </div>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C92032] flex items-center justify-center flex-shrink-0 border border-[#E7EDF3]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43]">Address</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      {clinicData.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#C92032] flex items-center justify-center flex-shrink-0 border border-[#E7EDF3]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43]">Primary Phone</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      {clinicData.phone}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-amber-500 flex items-center justify-center flex-shrink-0 border border-[#E7EDF3]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A43]">Clinic Timings</h4>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-bold">
                      {clinicData.openingHoursNotice}
                    </p>
                    <p className="text-xs text-slate-400 font-normal">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7EDF3] flex items-center gap-4">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="flex-1 py-3 bg-[#C92032] hover:bg-[#8F1020] text-white text-center font-bold rounded-xl shadow-red-btn transition-colors text-sm"
                >
                  Call Desk
                </a>
                <a
                  href={getWhatsAppUrl("Hello, I would like to inquire about today's ENT doctor availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-center font-bold rounded-xl shadow transition-colors text-sm flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Box: Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-hospital border border-[#E7EDF3] bg-white h-[350px] lg:h-auto min-h-[300px]">
              <GoogleMap />
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            title={lightboxTitle}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
