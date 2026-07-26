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
  Ear,
  MapPin,
  Calendar,
  Lock,
  Stethoscope,
  Activity,
  HeartPulse,
  Plus,
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { HeroSection } from '../components/HeroSection';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { DoctorCard } from '../components/DoctorCard';
import { GalleryCard } from '../components/GalleryCard';
import { EmergencyNotice } from '../components/EmergencyNotice';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { servicesData } from '../data/services';
import { doctorsData } from '../data/doctors';
import { galleryData } from '../data/gallery';

export const Home = () => {
  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 8);
  const previewGallery = galleryData.slice(0, 6);

  const whyChooseUs = [
    { icon: UserCheck, title: 'Patient-Focused Approach', desc: 'Attentive, un-rushed consultation giving adequate time to explain health concerns clearly.' },
    { icon: Compass, title: 'Clear Consultation Guidance', desc: 'Transparent explanations regarding symptoms, diagnostic evaluation, and care options.' },
    { icon: Ear, title: 'Adult ENT Care', desc: 'Comprehensive consultation for ear infection, sinus congestion, tinnitus, and throat complaints in adults.' },
    { icon: UserCheck, title: 'Pediatric ENT Concerns', desc: 'Gentle, child-friendly evaluation for pediatric ear aches, tonsils, and nasal allergies.' },
    { icon: Calendar, title: 'Easy Phone Appointment', desc: 'Direct phone and WhatsApp availability check with quick clinic response.' },
    { icon: MapPin, title: 'Convenient Location in Kota', desc: 'Situated at Shreenath Puram A in Kota with straightforward parking and access.' },
  ];

  const patientJourneySteps = [
    { step: '1', title: 'Call or WhatsApp', desc: 'Reach out to our clinic desk via phone or formatted WhatsApp enquiry.' },
    { step: '2', title: 'Confirm Availability', desc: 'Our clinic staff confirms today\'s doctor availability and consultation timing.' },
    { step: '3', title: 'Visit the Clinic', desc: 'Arrive at Shreenath Puram A in Kota for your physical consultation.' },
    { step: '4', title: 'Receive Medical Guidance', desc: 'Get clear clinical evaluation and personalized health path forward.' },
  ];

  return (
    <>
      <SEOHead
        title="Gautam ENT Clinic Kota | Ear, Nose & Throat Care"
        description="Contact Gautam ENT Clinic in Shreenath Puram, Kota for consultation regarding ear, nose and throat concerns. Call +91 70145 61171."
        canonical="https://gautamentclinic.com/"
      />

      <div className="space-y-16 md:space-y-24 pb-12">
        
        {/* 1 & 2. Hero Section */}
        <HeroSection />

        {/* 3. Quick Contact Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white rounded-card p-6 md:p-8 shadow-hospital-lg border border-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-xl flex items-center gap-3 transition-colors border border-white/10 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white text-medicalred flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 animate-ring" />
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-100 block">Call the Clinic</span>
                <span className="text-sm font-bold text-white">{clinicData.phone}</span>
              </div>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/20 hover:bg-[#25D366]/30 p-4 rounded-xl flex items-center gap-3 transition-colors border border-[#25D366]/30 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-100 block">WhatsApp Enquiry</span>
                <span className="text-sm font-bold text-white">Chat on WhatsApp</span>
              </div>
            </a>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-xl flex items-center gap-3 transition-colors border border-white/10 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white text-medicalred flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-rose-100 block">Get Directions</span>
                <span className="text-sm font-bold text-white">Shreenath Puram, Kota</span>
              </div>
            </a>

            <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-amber-400 text-darkheading flex items-center justify-center flex-shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-200 block">Clinic Timings</span>
                <span className="text-xs text-white font-medium">Call to confirm today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyNotice />
        </div>

        {/* 4. Main Services (8 cards) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Specialized Consultation"
              title="Ear, Nose & Throat Services"
              subtitle="Explore our patient consultations for common ear, nose, and throat concerns in Kota."
            />

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-medicalred hover:text-medicalred-dark bg-white px-5 py-3 rounded-xl shadow border border-roseborder self-start md:self-auto hover:bg-rosebg transition-all"
            >
              <span>View All 14 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* 5. Ear, Nose and Throat Categories */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Care Categories"
            title="Comprehensive Otolaryngology Focus"
            subtitle="Structured consultation categories tailored to your specific symptoms."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-card p-8 shadow-hospital border border-roseborder space-y-4 hover:border-medicalred/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rosebg text-medicalred flex items-center justify-center group-hover:scale-110 transition-transform">
                <Ear className="w-6 h-6 animate-slow-pulse" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-darkheading group-hover:text-medicalred transition-colors">Ear Care</h3>
              <p className="text-sm text-bodytext leading-relaxed font-normal">
                Evaluation of ear pain, blocked ears, hearing concerns, tinnitus and balance problems.
              </p>
              <Link to="/services?category=Ear" className="inline-flex items-center gap-1.5 text-xs font-bold text-medicalred hover:underline pt-2">
                <span>Explore Ear Care</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-card p-8 shadow-hospital border border-roseborder space-y-4 hover:border-medicalred/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rosebg text-medicalred flex items-center justify-center group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-darkheading group-hover:text-medicalred transition-colors">Nose &amp; Sinus Care</h3>
              <p className="text-sm text-bodytext leading-relaxed font-normal">
                Consultation for nasal allergy, congestion, recurring sinus problems and nosebleeds.
              </p>
              <Link to="/services?category=Nose" className="inline-flex items-center gap-1.5 text-xs font-bold text-medicalred hover:underline pt-2">
                <span>Explore Nasal Care</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-card p-8 shadow-hospital border border-roseborder space-y-4 hover:border-medicalred/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rosebg text-medicalred flex items-center justify-center group-hover:scale-110 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-darkheading group-hover:text-medicalred transition-colors">Throat Care</h3>
              <p className="text-sm text-bodytext leading-relaxed font-normal">
                Evaluation of throat pain, tonsil concerns, hoarseness and swallowing difficulties.
              </p>
              <Link to="/services?category=Throat" className="inline-flex items-center gap-1.5 text-xs font-bold text-medicalred hover:underline pt-2">
                <span>Explore Throat Care</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. About Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white rounded-card p-8 md:p-12 shadow-hospital-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/15 border border-white/20">
                  About Gautam ENT Clinic
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                  Patient-Focused ENT Care in Kota
                </h2>
                <p className="text-sm sm:text-base text-rose-100 leading-relaxed font-normal">
                  Gautam ENT Clinic is an ear, nose and throat clinic located in Shreenath Puram, Kota. The clinic aims to provide clear consultation guidance and patient-focused evaluation for common ENT concerns affecting adults and children.
                </p>
                <div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-white text-medicalred hover:bg-rosebg font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                  >
                    <span>About Clinic</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
                  <img
                    src="/images/clinic-room.png"
                    alt="Clean ENT Consultation Room at Gautam ENT Clinic Kota"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Doctor Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Medical Specialist"
            title="Our ENT Specialist"
            subtitle="Editable doctor profile placeholder."
          />
          <DoctorCard doctor={doctorsData[0]} />
          <div className="mt-6 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 bg-white text-medicalred font-bold text-sm px-6 py-3 rounded-xl border border-roseborder shadow-sm hover:bg-rosebg transition-all"
            >
              <span>View Doctor Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 8. Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="Patient-First ENT Care"
            subtitle="We prioritize clear communication, patient comfort, and reliable otolaryngology guidance."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-card p-6 shadow-hospital border border-roseborder transition-all hover:border-medicalred/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-rosebg text-medicalred flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-darkheading">{card.title}</h3>
                  <p className="mt-2 text-sm text-bodytext leading-relaxed font-normal">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Patient Journey */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple Steps"
            title="Patient Consultation Journey"
            subtitle="How to request and complete your ENT visit at our Kota clinic."
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientJourneySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card p-6 shadow-hospital border border-roseborder relative group"
              >
                <div className="text-3xl font-heading font-extrabold text-medicalred/30 group-hover:text-medicalred transition-colors mb-3">
                  0{step.step}
                </div>
                <h4 className="text-lg font-heading font-bold text-darkheading">{step.title}</h4>
                <p className="mt-2 text-xs md:text-sm text-bodytext leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Gallery Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Clinic Space"
              title="Gallery Preview"
              subtitle="Clean, comfortable, and reassuring clinical environment."
            />

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-medicalred hover:text-medicalred-dark bg-white px-5 py-3 rounded-xl shadow border border-roseborder self-start md:self-auto hover:bg-rosebg transition-all"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={() => {}} />
            ))}
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white rounded-card p-8 md:p-12 shadow-hospital-lg text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white">
              Facing an Ear, Nose or Throat Concern?
            </h2>
            <p className="text-sm md:text-base text-rose-100 max-w-2xl mx-auto leading-relaxed">
              Do not ignore persistent symptoms. Reach out to Gautam ENT Clinic in Kota today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="bg-white text-medicalred hover:bg-rosebg font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 animate-ring" /> Call {clinicData.phone}
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> Send WhatsApp Message
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
