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
import { servicesData } from '../data/services';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Services = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam && ['Ear', 'Nose', 'Throat', 'Other'].includes(catParam)) {
      setSelectedCategory(catParam);
    }
  }, [location.search]);

  const categories = ['All Services', 'Ear', 'Nose', 'Throat', 'Other'];

  const filteredServices =
    selectedCategory === 'All Services' || selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Best ENT Services in Kota | Ear, Nose, Throat & Oral Care"
        description="Comprehensive ENT & oral healthcare services at Gautam ENT Clinic Kota: ear infection, hearing loss, sinusitis, tonsillitis, vertigo, TMJ jaw pain & pediatric ENT by Dr. Pragyanand Gautam."
        keywords="best ent specialist in kota, best ent doctor in kota, best ent dentist in kota, best ent dr near me, ent services kota, ear infection treatment kota, sinusitis treatment kota"
        canonical="https://gautamentclinic.com/services"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Services', url: 'https://gautamentclinic.com/services' },
        ]}
      />

      <div className="space-y-12 pb-16 bg-[#faf9f7] min-h-screen text-[#404040]">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#171717] via-[#262626] to-[#171717] text-white py-10 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ef2028] rounded-full filter blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <Breadcrumb current="Services" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mt-2">
                  Best ENT &amp; Oral Health Services in Kota
                </h1>
                <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
                  Expert clinical consultations and treatments for ear, nose, throat, oral cavity, voice, and pediatric otolaryngology conditions by Kota's leading ENT specialist.
                </p>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 p-2 rounded-2xl border border-white/20 backdrop-blur-sm shadow-lg max-w-[280px] mx-auto overflow-hidden">
                  <img
                    src="/images/clinic/ent_diagram.webp"
                    alt="Ear, Nose, and Throat Core Diagnosis"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters with Red Fill */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none border-b border-neutral-200">
            <span className="text-xs font-bold text-[#171717] uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-[#ef2028]" /> Filter:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat || (cat === 'All Services' && selectedCategory === 'All')
                    ? 'bg-[#ef2028] text-white shadow-[0_8px_25px_rgba(239,32,40,0.35)]'
                    : 'bg-white text-neutral-700 hover:border-[#ef2028] hover:text-[#ef2028] border border-neutral-300'
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
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 hover:border-[#ef2028]/40 hover:shadow-md transition-all scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-video bg-[#faf9f7] border border-neutral-200">
                      <img
                        src={service.image}
                        alt={`${service.title} consultation at Gautam ENT Clinic Kota`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#ef2028] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                        {service.category} Category
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Complete Details & CTA Buttons */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#171717]">
                        {service.title}
                      </h2>
                      <p className="text-base text-neutral-600 mt-2 leading-relaxed font-normal">
                        {service.overview}
                      </p>
                    </div>

                    {/* Common Symptoms */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#ef2028] mb-2 flex items-center gap-1.5">
                        <Info className="w-4 h-4" /> Common Symptoms Evaluated:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.symptoms.map((symptom, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#171717] bg-[#faf9f7] p-2.5 rounded-lg border border-neutral-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
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
                    <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                      <a
                        href={`tel:${clinicData.rawPhone}`}
                        className="w-full sm:w-auto bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all inline-flex items-center justify-center gap-2"
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
