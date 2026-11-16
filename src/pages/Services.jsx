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

      <div className="space-y-12 pb-16 bg-bg-soft min-h-screen text-text">
        {/* Hero Banner with Kridha Gradient */}
        <section className="bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-white rounded-full filter blur-[120px] opacity-15" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <Breadcrumb current="Services" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mt-3">
                  Best ENT &amp; Oral Health Services in Kota
                </h1>
                <p className="mt-3 text-base md:text-lg text-white/90 max-w-2xl font-normal leading-relaxed">
                  Expert clinical consultations and treatments for ear, nose, throat, oral cavity, voice, and pediatric otolaryngology conditions by Kota's leading ENT specialist.
                </p>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl max-w-[280px] mx-auto overflow-hidden">
                  <img
                    src="/images/clinic/ent_diagram.webp"
                    alt="Ear, Nose, and Throat Core Diagnosis"
                    className="w-full h-auto rounded-xl object-contain bg-white/90 p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none border-b border-border">
            <span className="text-xs font-bold text-text uppercase tracking-wider flex items-center gap-1.5 mr-2 flex-shrink-0">
              <Filter className="w-4 h-4 text-primary" /> Filter:
            </span>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat || (cat === 'All Services' && selectedCategory === 'All')
                    ? 'bg-primary text-white shadow-blue-btn'
                    : 'bg-white text-text hover:border-primary hover:text-primary border border-border shadow-sm'
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
                className="bg-white rounded-2xl p-6 md:p-8 shadow-hospital border border-border hover:border-primary/50 hover:shadow-hospital-lg transition-all scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-video bg-bg-soft border border-border">
                      <img
                        src={service.image}
                        alt={`${service.title} consultation at Gautam ENT Clinic Kota`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {service.category} Category
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Complete Details & CTA Buttons */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-text">
                        {service.title}
                      </h2>
                      <p className="text-base text-text-muted mt-2 leading-relaxed font-normal">
                        {service.overview}
                      </p>
                    </div>

                    {/* Common Symptoms */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                        <Info className="w-4 h-4" /> Common Symptoms Evaluated:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.symptoms.map((symptom, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs md:text-sm font-medium text-text bg-bg-soft p-2.5 rounded-lg border border-border">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* When to Seek */}
                    <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200/80">
                      <h4 className="text-xs font-bold uppercase text-amber-900 mb-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> When to Consult an ENT Specialist:
                      </h4>
                      <p className="text-xs md:text-sm text-amber-900 leading-relaxed">
                        {service.whenToSeek}
                      </p>
                    </div>

                    {/* Call Now & WhatsApp Enquiry Buttons */}
                    <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-center justify-end gap-3">
                      <a
                        href={`tel:${clinicData.rawPhone}`}
                        className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-blue-btn transition-all inline-flex items-center justify-center gap-2"
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

export default Services;
