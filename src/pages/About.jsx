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
  Calendar
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { SectionHeading } from '../components/SectionHeading';
import { Breadcrumb } from '../components/Breadcrumb';
import { DoctorCard } from '../components/DoctorCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { doctorsData } from '../data/doctors';
import { faqsData } from '../data/faqs';

export const About = () => {
  const missionCards = [
    {
      title: "Patient Comfort",
      desc: "Creating a reassuring, non-frightening environment for adults and children during ear, nose, and throat evaluation."
    },
    {
      title: "Clear Communication",
      desc: "Explaining medical terms, symptoms, and care plans clearly without confusing technical jargon."
    },
    {
      title: "Responsible Medical Guidance",
      desc: "Providing honest otolaryngology advice focused strictly on evidence-based patient consultation."
    },
    {
      title: "Accessible ENT Care",
      desc: "Situated conveniently in Shreenath Puram A, Kota with straightforward road access and parking."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Gautam Ear Nose Throat Clinic | ENT Care Specialist in Kota"
        description="Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota. Discover our patient-focused consultation approach, mission, and care philosophy by Dr. Pragyanand Gautam."
        canonical="https://gautamentclinic.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'About', url: 'https://gautamentclinic.com/about' },
        ]}
      />

      <div className="space-y-16 pb-16">
        {/* About Hero Banner */}
        <section className="bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#8F1020] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="aboutHeroPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="#FFFFFF" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#aboutHeroPattern)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="About" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mt-2">
              About Our Clinic
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Dedicated Ear, Nose &amp; Throat otolaryngology consultation in Kota, Rajasthan.
            </p>
          </div>
        </section>

        {/* Clinic Introduction (Split Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image: Vertical Exterior */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C92032]/10 to-transparent rounded-2xl blur-xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-hospital border-4 border-white bg-white">
                <img
                  src="/images/clinic/clinic_exterior_vertical.webp"
                  alt="Gautam Ear Nose Throat Clinic Exterior Vertical view"
                  className="w-full h-auto object-cover max-h-[580px] rounded-xl"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#C92032] bg-[#C92032]/5 border border-[#C92032]/10">
                <Building2 className="w-3.5 h-3.5" />
                Clinic Overview
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-[#102A43] leading-tight">
                Patient-Focused ENT Consultation in Kota
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Gautam Ear Nose Throat Clinic is a dedicated ENT clinic located in Shrinathpuram-A, Kota. The clinic aims to provide clear consultation guidance and patient-focused evaluation for common ENT concerns affecting adults and children.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our care philosophy prioritizes patient comfort, detailed history taking, and thorough physical examination using high-precision microscopes and diagnostic cameras in a clean, quiet clinical setting.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-hospital border border-[#E7EDF3] border-l-4 border-l-[#C92032] space-y-4">
                <h3 className="font-heading font-bold text-lg text-[#102A43] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C92032]" />
                  Our Core Commitments
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-[#C92032] mt-2 flex-shrink-0" />
                    <span>No unverified medical claims or exaggerated clinical statistics.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-[#C92032] mt-2 flex-shrink-0" />
                    <span>Equal focus on adult and pediatric ear, nose, and throat concerns.</span>
                  </li>
                  <li className="flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-[#C92032] mt-2 flex-shrink-0" />
                    <span>Clean, organized clinical environment situated conveniently in Kota.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Principles Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Mission & Values"
            title="Our Care Principles"
            subtitle="The core values guiding patient interaction at Gautam Ear Nose Throat Clinic."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {missionCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-hospital border border-[#E7EDF3] space-y-2 hover:border-[#C92032]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C92032]/5 text-[#C92032] flex items-center justify-center font-extrabold text-sm group-hover:bg-[#C92032] group-hover:text-white transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#102A43] group-hover:text-[#C92032] transition-colors">{card.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Doctor profile card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Medical Specialist"
            title="ENT Specialist Profile"
            subtitle="Dr. Pragyanand Gautam, leading specialized ear, nose, and throat consultations."
          />
          <div className="mt-8">
            <DoctorCard doctor={doctorsData[0]} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about visiting Gautam Ear Nose Throat Clinic in Kota."
            centered={true}
          />
          <div className="mt-8 max-w-4xl mx-auto">
            <FAQAccordion items={faqsData} />
          </div>
        </section>

        {/* Appointment CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#8F1020] text-white rounded-3xl p-8 md:p-10 shadow-hospital-lg flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Need an ENT Consultation in Kota?
              </h3>
              <p className="text-sm text-slate-200 mt-1">
                Call {clinicData.phone} or send a message on WhatsApp to confirm today's availability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="bg-white text-[#102A43] hover:bg-slate-50 font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 animate-ring text-[#C92032]" /> Call Now
              </a>
              <a
                href={getWhatsAppUrl("Hello, I would like to book an ENT appointment slot.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
