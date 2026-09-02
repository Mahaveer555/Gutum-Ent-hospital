import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  Award,
  CheckCircle2,
  Calendar,
  Navigation,
  Clock,
  MapPin,
  Camera,
  Stethoscope,
  HeartPulse,
  Compass,
  UserCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { SectionHeading } from '../components/SectionHeading';
import { Breadcrumb } from '../components/Breadcrumb';
import { GoogleMap } from '../components/GoogleMap';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { doctorsData } from '../data/doctors';

export const About = () => {
  const doctor = doctorsData[0]; // Dr. Pragyanand Gautam (MBBS, M.S. ENT)

  // 4 Clinical Philosophy Cards (No unsupported claims)
  const philosophyCards = [
    {
      title: "Clear Consultation",
      desc: "Providing straightforward medical explanations of ear, nose, and throat symptoms without confusing jargon.",
      icon: MessageCircle
    },
    {
      title: "Careful Evaluation",
      desc: "Thorough physical otoscopy, rhinoscopy, and throat evaluation designed for accurate diagnostic assessment.",
      icon: Compass
    },
    {
      title: "Modern Diagnostic Support",
      desc: "Utilizing precision binocular ENT microscopes and digital inspection equipment for clear clinical insight.",
      icon: Stethoscope
    },
    {
      title: "Patient Comfort",
      desc: "Maintaining a clean, calm, and reassuring environment for adult and pediatric consultations alike.",
      icon: HeartPulse
    }
  ];

  // 4 Unique Facilities Cards
  const facilitiesCards = [
    {
      id: "fac-1",
      title: "Advanced ENT Examination Area",
      desc: "Specialized examination chair with focused clinical light sources for detailed evaluation.",
      src: "/images/clinic/examination_room.webp",
      aspectClass: "aspect-[4/3]",
      category: "Clinic Facilities"
    },
    {
      id: "fac-2",
      title: "Precision Binocular ENT Microscope",
      desc: "High-magnification surgical microscope for precise eardrum and nasal cavity inspection.",
      src: "/images/clinic/ent_microscope.webp",
      aspectClass: "aspect-[4/3]",
      category: "Clinic Facilities"
    },
    {
      id: "fac-3",
      title: "In-Clinic Pharmacy Counter",
      desc: "Vansh Medical counter providing convenient on-site prescription medicine availability.",
      src: "/images/clinic/medicine_availability.webp",
      aspectClass: "aspect-[4/3]",
      category: "Clinic Facilities"
    },
    {
      id: "fac-4",
      title: "Doctor Office Desk & Credentials",
      desc: "Dr. Pragyanand Gautam's consultation room and academic achievement shelf.",
      src: "/images/original-gallery/IMG_20260811_115945.jpg.jpeg",
      aspectClass: "aspect-[4/3]",
      category: "Clinic Facilities"
    }
  ];

  return (
    <>
      <SEOHead
        title="About Gautam ENT Clinic Kota | Dr. Pragyanand Gautam MBBS M.S. ENT"
        description="Learn about Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota, Rajasthan. Dedicated ENT medical care by Dr. Pragyanand Gautam, MBBS, M.S. (ENT)."
        canonical="https://gautamentclinickota.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinickota.com/' },
          { name: 'About', url: 'https://gautamentclinickota.com/about' },
        ]}
      />

      <div className="space-y-12 md:space-y-16 pb-16 bg-slate-50 text-slate-800 font-sans">
        
        {/* SECTION 1: Premium About Hero */}
        <section className="relative w-full bg-gradient-to-b from-slate-900 via-medicalnavy to-slate-900 text-white py-14 md:py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="About" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-cyan-300">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Established ENT Care • Kota, Rajasthan</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Thoughtful ENT Care, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-200">
                    Built Around You.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Gautam Ear Nose Throat Clinic provides specialized medical consultations and thorough diagnostic evaluations for ear, nose, throat, voice, and sinus health in Shrinathpuram-A, Kota.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book a consultation appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Appointment on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${clinicData.rawPhone}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-300" />
                    <span>Call +91 70145 61171</span>
                  </a>
                </div>
              </div>

              {/* Unique Hero Visual: Official Clinic Storefront */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950 aspect-[16/9] w-full flex items-center justify-center">
                  <img
                    src="/images/clinic/clinic_storefront_main.jpg"
                    alt="Gautam Ear Nose Throat Clinic storefront and main entrance at Shrinathpuram-A, Kota"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Clinic Story */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story Image: Reception & Waiting Room */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <img
                  src="/images/original-gallery/IMG_20260811_115827.jpg.jpeg"
                  alt="Gautam ENT Clinic reception counter and patient waiting lounge"
                  className="w-full h-auto max-h-[30rem] object-contain object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 space-y-5 text-slate-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Our Story &amp; Setting</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
                Dedicated ENT Consultations for Patients in Kota
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Gautam Ear Nose Throat Clinic was founded to provide reliable, patient-centered ENT consultations in Kota, Rajasthan. Located at Shrinathpuram-A (opposite Agnishaman Kendra), the clinic offers specialized checkups for common earaches, hearing changes, sinus congestion, allergies, throat infections, and voice concerns.
              </p>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our approach emphasizes detailed patient history, thorough physical examination, and objective diagnostic guidance using modern clinical instruments in a clean and organized clinical environment.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Ethical Medical Guidelines</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain strict transparency in medical advice, ensuring every patient receives objective medical assessment without unnecessary procedures or exaggerated claims.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: Clinical Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SectionHeading
            badge="Care Principles"
            title="Our Clinical Philosophy"
            subtitle="Four core pillars guiding every doctor consultation and patient interaction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {philosophyCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100 block">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: Modern Facilities */}
        <section className="bg-slate-900 text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Infrastructure &amp; Setup
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
                Modern Diagnostic Facilities
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Take a look at the actual clinical equipment, diagnostic tools, and facility spaces available at Gautam ENT Clinic Kota.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {facilitiesCards.map((fac) => (
                <div 
                  key={fac.id}
                  className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
                >
                  <div className={`relative ${fac.aspectClass} w-full overflow-hidden bg-black`}>
                    <img 
                      src={fac.src} 
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-950/90 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1">
                      <Camera className="w-3 h-3 text-emerald-400" />
                      <span>{fac.category}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {fac.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Specialist Focus */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual: Real Doctor Office Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 aspect-[3/4] sm:h-[480px]">
                <img
                  src="/images/dr-pragyanand-gautam.png"
                  alt="Dr. Pragyanand Gautam consultation and office"
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

            {/* Specialist Info */}
            <div className="lg:col-span-7 space-y-5 text-slate-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
                <span>Specialist Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                Dr. Pragyanand Gautam — MBBS, M.S. (ENT)
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Dr. Pragyanand Gautam holds professional medical qualifications in Otolaryngology (MBBS, M.S. ENT) and is registered with the State Medical Council. He delivers dedicated clinical evaluations for common and persistent ear, nose, and throat concerns.
              </p>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider text-cyan-900">
                  Areas of ENT Consultation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Ear Pain &amp; Infection Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Hearing Assessment &amp; Tinnitus Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Sinusitis &amp; Nasal Allergy Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Throat, Tonsil &amp; Voice Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Pediatric ENT Concerns</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl("Hello, I would like to book a consultation with Dr. Pragyanand Gautam.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: Visit the Clinic & Location Map */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-5 space-y-6 text-slate-700">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  Clinic Address &amp; Directions
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
                    <strong className="block text-slate-900 font-bold">Consultation Timings</strong>
                    <p className="text-slate-700">Mon - Sat: 5:00 PM - 8:00 PM</p>
                    <p className="text-xs text-amber-800 font-semibold mt-0.5">
                      Please call +91 70145 61171 to confirm today's doctor consultation availability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book a consultation slot.")}
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

            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-slate-300 shadow-md relative">
              <GoogleMap height="100%" />
            </div>

          </div>
        </section>

        {/* SECTION 7: Medical Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-amber-900 text-base">
                  Medical Emergency Disclaimer
                </h4>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  This website does not provide emergency medical care. For breathing difficulty, severe bleeding, sudden hearing loss, serious injury or another urgent medical condition, visit the nearest hospital or contact emergency services.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
