import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Phone, MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Footer = () => {
  return (
    <footer className="bg-darkheading text-white pt-16 pb-24 sm:pb-12 border-t-4 border-medicalred">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Clinic Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medicalred to-medicalred-dark text-white flex items-center justify-center shadow-md">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight block">
                  Gautam <span className="text-medicalred-bright">ENT Clinic</span>
                </span>
                <span className="text-xs text-slate-400 font-medium block -mt-1 tracking-wider uppercase">
                  Otolaryngology • Kota
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Gautam ENT Clinic is an ear, nose and throat clinic located in Shreenath Puram, Kota. The clinic aims to provide clear consultation guidance and patient-focused evaluation for common ENT concerns affecting adults and children.
            </p>

            <div className="pt-2 text-xs text-rose-300 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-successgreen" />
              <span>Kota Local Healthcare Provider</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-medicalred/40 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-rose-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-rose-300 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-rose-300 transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-rose-300 transition-colors">Doctors</Link></li>
              <li><Link to="/gallery" className="hover:text-rose-300 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-rose-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-medicalred/40 pb-2 inline-block">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/services#ear-infection" className="hover:text-rose-300 transition-colors">Ear Infection &amp; Pain</Link></li>
              <li><Link to="/services#hearing-loss" className="hover:text-rose-300 transition-colors">Hearing Loss Evaluation</Link></li>
              <li><Link to="/services#sinusitis" className="hover:text-rose-300 transition-colors">Sinusitis &amp; Nasal Allergy</Link></li>
              <li><Link to="/services#throat-tonsil" className="hover:text-rose-300 transition-colors">Throat &amp; Tonsil Care</Link></li>
              <li><Link to="/services#pediatric-ent" className="hover:text-rose-300 transition-colors">Pediatric ENT Care</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-medicalred/40 pb-2 inline-block">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-medicalred-bright flex-shrink-0 mt-1" />
                <span>{clinicData.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-medicalred-bright flex-shrink-0" />
                <a href={`tel:${clinicData.rawPhone}`} className="hover:text-rose-300 font-semibold">
                  {clinicData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-lg inline-flex items-center gap-1 transition-all"
                >
                  WhatsApp Chat
                </a>
                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg inline-flex items-center gap-1 transition-all"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-amber-200">
                <strong>Clinic Availability:</strong><br />
                {clinicData.openingHoursNotice}
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimers */}
        <div className="py-6 text-xs text-slate-400 space-y-3 leading-relaxed border-b border-white/10">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for general awareness only and is not a substitute for professional medical advice, diagnosis or emergency treatment.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Gautam ENT Clinic, Kota, Rajasthan. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-rose-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
