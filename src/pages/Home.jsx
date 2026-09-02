import React from 'react';
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
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { EmergencyNotice } from '../components/EmergencyNotice';
import { GoogleMap } from '../components/GoogleMap';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';

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

  // 3 Advanced Medical Facilities Cards (matching exact user screenshot)
  const advancedFacilities = [
    {
      title: "Advanced ENT Examination Room",
      src: "/images/clinic/examination_room.webp",
      desc: "Modern diagnostic chamber featuring patient examination chairs, medical cameras, and digital screens for clear visual assessments."
    },
    {
      title: "ENT Microscope Facility",
      src: "/images/clinic/ent_microscope.webp",
      desc: "High-precision medical microscope for detailed ear examinations, micro-inspections, and non-invasive outpatient diagnostics."
    },
    {
      title: "Vansh Medicine Availability",
      src: "/images/clinic/medicine_availability.webp",
      desc: "Quick pharmacy access right at the clinic entrance to ensure patients can easily get their prescribed medications."
    }
  ];

  return (
    <>
      <SEOHead
        title="Gautam ENT Clinic | Best ENT Clinic in Kota"
        description="Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota, Rajasthan. Expert ENT consultation by Dr. Pragyanand Gautam. Call +91 70145 61171 for appointments."
        canonical="https://gautamentclinickota.com/"
      />

      <div className="space-y-12 md:space-y-16 pb-16 bg-slate-50 text-slate-800 font-sans">
        
        {/* SECTION 1: Premium Hero Section */}
        <HeroSection />

        {/* SECTION 2: Quick Actions Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-14 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 text-white rounded-2xl p-5 md:p-7 shadow-xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Quick Action 1: Call Clinic */}
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-medicalred text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-red-400 uppercase">Call Directly</span>
                <h3 className="font-heading font-bold text-sm text-white">+91 70145 61171</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Quick voice consultation line</p>
              </div>
            </a>

            {/* Quick Action 2: WhatsApp Appointment */}
            <a
              href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">WhatsApp Book</span>
                <h3 className="font-heading font-bold text-sm text-white">Book Appointment</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Instant WhatsApp chat</p>
              </div>
            </a>

            {/* Quick Action 3: Google Directions */}
            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Navigation className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">Location Map</span>
                <h3 className="font-heading font-bold text-sm text-white">Get Directions</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Shrinathpuram-A, Kota</p>
              </div>
            </a>

            {/* Quick Action 4: Clinic Timings */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase">Consultation Hours</span>
                <h3 className="font-heading font-bold text-sm text-white">Mon - Sat: 5 - 8 PM</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Call to confirm availability</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Notice Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyNotice />
        </div>

        {/* SECTION 3: Doctor Spotlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Doctor Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 aspect-[3/4] sm:h-[480px]">
                <img
                  src="/images/doctor-portrait.png"
                  alt="Dr. Pragyanand Gautam - ENT Specialist Kota"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/20 text-white shadow-xl">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white drop-shadow-sm">Dr. Pragyanand Gautam</h4>
                  <p className="text-xs text-cyan-300 font-semibold mt-0.5">MBBS, M.S. (ENT)</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">State Medical Council Registered</p>
                </div>
              </div>
            </div>

            {/* Doctor Information & Credentials */}
            <div className="lg:col-span-7 space-y-6 text-slate-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
                <span>Doctor Spotlight</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Expert &amp; Compassionate ENT Care in Kota
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                {doctor.description}
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider text-cyan-900">
                  Key Areas of ENT Consultation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {doctor.areasOfConsultation.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult Dr. Gautam on WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-red-400" />
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
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-cyan-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                      {service.category} Care
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading font-bold text-lg text-slate-900 hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 group"
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
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>View All ENT Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 5: Advanced Medical Facilities (Matching Exact User Screenshot) */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            
            {/* Top Red Badge */}
            <div className="inline-block">
              <span className="px-3.5 py-1 rounded-full bg-rose-100 text-red-600 font-bold text-xs uppercase tracking-wider border border-rose-200">
                MODERN CLINIC SPACE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
              Advanced Medical Facilities
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Inside our modern, clean, and patient-first clinical facility in Shrinathpuram-A, Kota.
            </p>

            {/* Underline Red Divider Accent */}
            <div className="w-12 h-1 bg-red-600 rounded-full mx-auto mt-4 mb-10" />

            {/* 3-Column Facilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
              {advancedFacilities.map((fac, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Image with Dark Gradient & Overlay Title */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={fac.src} 
                      alt={fac.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    
                    {/* Overlay Title at Bottom of Image */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white drop-shadow-md">
                        {fac.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description Below Image */}
                  <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              ))}
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
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: Contact, Location Map & Emergency Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6 text-slate-700">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  Clinic Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                  Visit Gautam ENT Clinic
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Address</strong>
                    <p className="text-slate-600 mt-0.5">
                      58, Shrinathpuram-A, Kota, Rajasthan 324010<br />
                      <span className="text-xs text-cyan-800 font-semibold">(Opposite Agnishaman Kendra / Near Falodi Mart)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone Number</strong>
                    <a href={`tel:${clinicData.rawPhone}`} className="text-red-600 font-bold hover:underline">
                      +91 70145 61171
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Consultation Hours</strong>
                    <p className="text-slate-700">Mon - Sat: 5:00 PM - 8:00 PM</p>
                    <p className="text-xs text-amber-800 font-semibold mt-0.5">
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
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Google Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-slate-300 shadow-md relative">
              <GoogleMap height="100%" />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
