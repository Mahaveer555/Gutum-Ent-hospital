import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Filter,
  CheckCircle2,
  Phone,
  MessageCircle,
  AlertCircle,
  HelpCircle,
  Info,
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { EmergencyNotice } from '../components/EmergencyNotice';
import { servicesData } from '../data/services';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Services = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam && ['Ear', 'Nose', 'Throat', 'Pediatric', 'Other'].includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, [location.search]);

  const categories = ['All Services', 'Ear', 'Nose', 'Throat', 'Pediatric', 'Other'];

  const filteredServices =
    selectedCategory === 'All Services' || selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="ENT Services in Kota | Ear, Nose & Throat Consultation"
        description="Comprehensive ENT services at Gautam ENT Clinic Kota: Ear infection care, hearing loss assessment, sinusitis treatment, nasal allergy, tonsillitis, vertigo, and pediatric ENT."
        canonical="https://gautamentclinic.com/services"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Services', url: 'https://gautamentclinic.com/services' },
        ]}
      />

      <div className="space-y-12 pb-16">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-medicalred-dark via-medicalred to-medicalred-dark text-white py-14 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Services" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Specialized ENT Services &amp; Consultations
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Explore our clinical consultation offerings for ear, nose, throat, voice, and pediatric otolaryngology concerns in Kota.
            </p>
          </div>
        </section>

        {/* Emergency Notice */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmergencyNotice />
        </div>

        {/* Category Filters with Red Fill */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none border-b border-roseborder/60">
            <span className="text-xs font-bold text-darkheading uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-medicalred" /> Filter:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat || (cat === 'All Services' && selectedCategory === 'All')
                    ? 'bg-gradient-to-r from-medicalred to-medicalred-dark text-white shadow-red-btn'
                    : 'bg-white text-darkheading hover:bg-rosebg border border-roseborder'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-card p-6 md:p-8 shadow-hospital border border-roseborder hover:border-medicalred/40 transition-all scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-rosebg">
                      <img
                        src={service.image}
                        alt={`${service.title} consultation at Gautam ENT Clinic Kota`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-medicalred text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        {service.category} Category
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Complete Details & CTA Buttons */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-darkheading">
                        {service.title}
                      </h2>
                      <p className="text-base text-bodytext mt-2 leading-relaxed font-normal">
                        {service.overview}
                      </p>
                    </div>

                    {/* Common Symptoms */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-medicalred mb-2 flex items-center gap-1.5">
                        <Info className="w-4 h-4" /> Common Symptoms Evaluated:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.symptoms.map((symptom, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-darkheading bg-rosebg p-2.5 rounded-lg border border-roseborder">
                            <CheckCircle2 className="w-4 h-4 text-successgreen flex-shrink-0" />
                            <span>{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* When to Seek */}
                    <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                      <h4 className="text-xs font-bold uppercase text-amber-900 mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> When to Consult an ENT Specialist:
                      </h4>
                      <p className="text-xs md:text-sm text-amber-900 leading-relaxed">
                        {service.whenToSeek}
                      </p>
                    </div>

                    {/* Call Now & WhatsApp Enquiry Buttons */}
                    <div className="pt-3 border-t border-roseborder/60 flex flex-col sm:flex-row items-center justify-end gap-3">
                      <a
                        href={`tel:${clinicData.rawPhone}`}
                        className="w-full sm:w-auto bg-gradient-to-r from-medicalred to-medicalred-dark text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-red-btn transition-all inline-flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4 animate-ring" /> Call Now ({clinicData.phone})
                      </a>

                      <a
                        href={getWhatsAppUrl(`Hello Gautam ENT Clinic, I would like to enquire about ${service.title} consultation.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow transition-all inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Enquiry
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
