import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Heart,
  Target,
  UserCheck,
  Building2,
  Phone,
  MessageCircle,
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
        title="About Gautam ENT Clinic | ENT Care Specialist in Kota"
        description="Gautam ENT Clinic is an ear, nose and throat clinic located in Shreenath Puram, Kota. Discover our patient-focused consultation approach, mission, and care philosophy."
        canonical="https://gautamentclinic.com/about"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'About', url: 'https://gautamentclinic.com/about' },
        ]}
      />

      <div className="space-y-16 pb-16">
        {/* About Hero Banner */}
        <section className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white py-14 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="About" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              About Gautam ENT Clinic
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Patient-focused otolaryngology consultation in Kota, Rajasthan.
            </p>
          </div>
        </section>

        {/* Clinic Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-medicalred bg-rosebg border border-roseborder">
                <Building2 className="w-3.5 h-3.5" />
                Clinic Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-darkheading">
                Patient-Focused ENT Consultation in Kota
              </h2>
              <p className="text-base text-bodytext leading-relaxed font-normal">
                Gautam ENT Clinic is an ear, nose and throat clinic located in Shreenath Puram, Kota. The clinic aims to provide clear consultation guidance and patient-focused evaluation for common ENT concerns affecting adults and children.
              </p>
              <p className="text-base text-bodytext leading-relaxed font-normal">
                Our care philosophy prioritizes patient comfort, detailed history taking, and thorough physical otoscopic inspection in a clean, quiet clinical setting.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-card shadow-hospital border border-roseborder border-t-4 border-t-medicalred space-y-4">
                <h3 className="font-heading font-bold text-lg text-darkheading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-medicalred" />
                  Our Core Commitments
                </h3>
                <ul className="space-y-3 text-sm text-bodytext">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-medicalred mt-2 flex-shrink-0" />
                    <span>No unverified medical claims or exaggerated statistics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-medicalred mt-2 flex-shrink-0" />
                    <span>Equal focus on adult and pediatric ear, nose, and throat concerns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-medicalred mt-2 flex-shrink-0" />
                    <span>Clean, organized clinical environment situated conveniently in Kota.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Mission & Values"
            title="Our Care Principles"
            subtitle="The core values guiding patient interaction at Gautam ENT Clinic."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-card p-6 shadow-hospital border border-roseborder space-y-2 hover:border-medicalred/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-rosebg text-medicalred flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-heading font-bold text-darkheading">{card.title}</h3>
                <p className="text-xs md:text-sm text-bodytext leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Doctor Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Medical Specialist"
            title="ENT Specialist Profile"
            subtitle="Doctor information placeholder."
          />
          <DoctorCard doctor={doctorsData[0]} />
        </section>

        {/* FAQ Section on About Page */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about visiting Gautam ENT Clinic in Kota."
            centered={true}
          />
          <FAQAccordion items={faqsData} />
        </section>

        {/* Appointment CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white rounded-card p-8 md:p-10 shadow-hospital-lg flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Need an ENT Consultation in Kota?
              </h3>
              <p className="text-sm text-rose-100 mt-1">
                Call {clinicData.phone} or send a message on WhatsApp to confirm today's availability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="bg-white text-medicalred hover:bg-rosebg font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 animate-ring" /> Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
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
