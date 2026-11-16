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

  // 4 Clinical Philosophy Cards
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

  // 4 Facilities Cards
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
        title="About Gautam ENT Clinic | Best ENT Specialist in Kota"
        description="Learn about Gautam ENT Clinic in Shrinathpuram-A, Kota. Led by Dr. Pragyanand Gautam (MBBS, M.S. ENT), recognized as the best ENT specialist in Kota for compassionate, evidence-based care."
        keywords="best ent specialist in kota, best ent clinic in kota, best ent doctor in kota, dr pragyanand gautam ent, about gautam ent clinic kota"
        canonical="https://gautamentclinic.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'About', url: 'https://gautamentclinic.com/about' },
        ]}
      />

      <div className="space-y-12 md:space-y-16 pb-16 bg-bg-soft text-text font-sans">
        
        {/* SECTION 1: Kridha Hospital Style Hero */}
        <section className="relative w-full bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white py-14 md:py-20 overflow-hidden">
          {/* Ambient glow effects */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[140px]" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-white rounded-full filter blur-[130px] opacity-15" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="About" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-white">
                  <Building2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Established ENT Care • Kota, Rajasthan</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  Thoughtful ENT Care, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-teal-200">
                    Built Around You.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-normal">
                  Gautam Ear Nose Throat Clinic provides specialized medical consultations and thorough diagnostic evaluations for ear, nose, throat, voice, and sinus health in Shrinathpuram-A, Kota.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={getWhatsAppUrl("Hello Gautam ENT Clinic, I would like to book a consultation appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${clinicData.rawPhone}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>Call +91 70145 61171</span>
                  </a>
                </div>
              </div>

              {/* Clinic Storefront Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white/10 backdrop-blur-md aspect-[16/9] w-full flex items-center justify-center">
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
              <div className="rounded-2xl overflow-hidden shadow-hospital border border-border bg-white p-2">
                <img
                  src="/images/original-gallery/IMG_20260811_115827.jpg.jpeg"
                  alt="Gautam ENT Clinic reception counter and patient waiting lounge"
                  className="w-full h-auto max-h-[30rem] object-contain object-center rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 space-y-5 text-text">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                <span>Our Story &amp; Setting</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-text tracking-tight leading-tight">
                Dedicated ENT Consultations for Patients in Kota
              </h2>

              <p className="text-base text-text-muted leading-relaxed font-normal">
                Gautam Ear Nose Throat Clinic was founded to provide reliable, patient-centered ENT consultations in Kota, Rajasthan. Located at Shrinathpuram-A (opposite Agnishaman Kendra), the clinic offers specialized checkups for common earaches, hearing changes, sinus congestion, allergies, throat infections, and voice concerns.
              </p>

              <p className="text-base text-text-muted leading-relaxed font-normal">
                Our approach emphasizes detailed patient history, thorough physical examination, and objective diagnostic guidance using modern clinical instruments in a clean and organized clinical environment.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-border shadow-hospital space-y-3">
                <h4 className="font-heading font-bold text-sm text-text flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>Ethical Medical Guidelines</span>
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
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
                  className="bg-white rounded-2xl p-6 border border-border shadow-hospital hover:shadow-hospital-lg hover:border-primary/50 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text">
                      {card.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-primary pt-2 border-t border-border block">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: Modern Facilities */}
        <section className="bg-gradient-to-br from-[#0b2447] via-[#0f3460] to-[#0b2447] text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-secondary border border-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                Infrastructure &amp; Setup
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
                Modern Diagnostic Facilities
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Take a look at the actual clinical equipment, diagnostic tools, and facility spaces available at Gautam ENT Clinic Kota.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {facilitiesCards.map((fac) => (
                <div 
                  key={fac.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 shadow-xl group hover:border-secondary/60 hover:bg-white/15 transition-all duration-300 flex flex-col"
                >
                  <div className={`relative ${fac.aspectClass} w-full overflow-hidden bg-black/40`}>
                    <img 
                      src={fac.src} 
                      alt={fac.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#0b2447]/90 text-sky-200 text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1 backdrop-blur-sm">
                      <Camera className="w-3 h-3 text-secondary" />
                      <span>{fac.category}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-white group-hover:text-secondary transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">
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
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-hospital border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual: Doctor Office Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-hospital-lg border-4 border-white bg-gradient-to-br from-[#0b2447] to-[#1578c9] aspect-[3/4] sm:h-[480px]">
                <img
                  src="/images/dr-pragyanand-gautam.png"
                  alt="Dr. Pragyanand Gautam consultation and office"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-border text-text shadow-xl">
                  <h4 className="font-heading font-bold text-base sm:text-lg text-text">Dr. Pragyanand Gautam</h4>
                  <p className="text-xs text-primary font-bold mt-0.5">MBBS, M.S. (ENT)</p>
                  <p className="text-[11px] text-text-muted font-medium mt-0.5">State Medical Council Registered</p>
                </div>
              </div>
            </div>

            {/* Specialist Info */}
            <div className="lg:col-span-7 space-y-5 text-text">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-primary" />
                <span>Specialist Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-text tracking-tight">
                Dr. Pragyanand Gautam — MBBS, M.S. (ENT)
              </h2>

              <p className="text-base text-text-muted leading-relaxed font-normal">
                Dr. Pragyanand Gautam holds professional medical qualifications in Otolaryngology (MBBS, M.S. ENT) and is registered with the State Medical Council. He delivers dedicated clinical evaluations for common and persistent ear, nose, and throat concerns.
              </p>

              <div className="bg-bg-soft p-5 rounded-2xl border border-border space-y-3">
                <h4 className="font-heading font-bold text-sm text-text uppercase tracking-wider">
                  Areas of ENT Consultation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-text">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Ear Pain &amp; Infection Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Hearing Assessment &amp; Tinnitus Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Sinusitis &amp; Nasal Allergy Care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Throat, Tonsil &amp; Voice Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Pediatric ENT Concerns</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl("Hello, I would like to book a consultation with Dr. Pragyanand Gautam.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm"
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
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-hospital border border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-5 space-y-6 text-text">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Clinic Address &amp; Directions
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-text tracking-tight">
                  Visit Gautam ENT Clinic
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-bg-soft border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Address</strong>
                    <p className="text-text-muted mt-0.5">
                      58, Shrinathpuram-A, Kota, Rajasthan 324010<br />
                      <span className="text-xs text-primary font-semibold">(Opposite Agnishaman Kendra / Near Falodi Mart)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-bg-soft border border-border">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Phone Number</strong>
                    <a href={`tel:${clinicData.rawPhone}`} className="text-primary font-bold hover:underline">
                      +91 70145 61171
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-bg-soft border border-border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-text font-bold">Consultation Timings</strong>
                    <p className="text-text">Mon - Sat: 5:00 PM - 8:00 PM</p>
                    <p className="text-xs text-primary font-semibold mt-0.5">
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
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-5 py-3 rounded-xl shadow-blue-btn transition-all text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span>Get Google Directions</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-80 lg:h-auto min-h-[320px] rounded-2xl overflow-hidden border border-border shadow-md relative">
              <GoogleMap height="100%" />
            </div>

          </div>
        </section>

        {/* SECTION 7: Urgent Medical Notice (styled cleanly like user screenshot) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-heading font-bold text-red-700 text-base">
                  Urgent Medical Notice
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  This website does not provide emergency medical care. For breathing difficulty, severe bleeding, sudden hearing loss, serious injury or another urgent medical condition, visit the nearest hospital or contact emergency services.
                </p>
                <p className="text-xs font-semibold text-red-700 flex items-center gap-1.5 pt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>For routine consultation booking, call clinic directly at <a href={`tel:${clinicData.rawPhone}`} className="underline font-bold">+91 70145 61171</a>.</span>
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
