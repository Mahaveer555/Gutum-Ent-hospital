import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, ShieldCheck, Clock, Mail } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a1424] via-[#0b1623] to-[#0a1424] text-white pt-16 pb-24 sm:pb-12 border-t border-white/10 overflow-hidden">
      {/* Kridha Hospital Ambient Background Glows */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Logo & Clinic Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden border border-white/20">
                <img
                  src="/logo.png"
                  alt="Gautam Ear Nose Throat Clinic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-tight block">
                  Gautam <span className="text-secondary-light">Ear Nose Throat</span>
                </span>
                <span className="text-xs text-slate-300 font-medium block -mt-0.5 tracking-wider uppercase">
                  Shrinathpuram-A • Kota
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Gautam Ear Nose Throat Clinic is a specialized ear, nose, and throat clinic located in Shrinathpuram-A, Kota. The clinic provides expert diagnosis, clinical microscopic evaluations, and patient-first care by Dr. Pragyanand Gautam.
            </p>

            <div className="pt-2 text-xs text-secondary-light font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Kota Local Healthcare Provider • 12+ Years Experience</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-primary/40 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-secondary-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary-light transition-colors">ENT Services</Link></li>
              <li><Link to="/doctors" className="hover:text-secondary-light transition-colors">Doctor Profile</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary-light transition-colors">Clinic Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-light transition-colors">Contact &amp; Map</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-primary/40 pb-2 inline-block">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link to="/services#ear-infection" className="hover:text-secondary-light transition-colors">Ear Infection Treatment</Link></li>
              <li><Link to="/services#hearing-loss" className="hover:text-secondary-light transition-colors">Hearing Loss Evaluation</Link></li>
              <li><Link to="/services#sinusitis" className="hover:text-secondary-light transition-colors">Sinusitis Treatment</Link></li>
              <li><Link to="/services#tonsillitis" className="hover:text-secondary-light transition-colors">Tonsillitis Care</Link></li>
              <li><Link to="/services#pediatric-ent" className="hover:text-secondary-light transition-colors">Pediatric ENT Consultation</Link></li>
              <li><Link to="/services#general-consultation" className="hover:text-secondary-light transition-colors">General ENT Checkup</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white border-b border-primary/40 pb-2 inline-block">
              Contact &amp; Hours
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span>{clinicData.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href={`tel:${clinicData.rawPhone}`} className="hover:text-secondary-light font-semibold text-white">
                  {clinicData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-all shadow-sm font-semibold"
                >
                  WhatsApp Chat
                </a>
                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-all border border-white/15"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-secondary-light" />
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-1.5 text-secondary-light font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Consultation Hours:</span>
                </div>
                <p>{clinicData.openingHoursNotice}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Please call before visiting to confirm doctor availability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Legal Disclaimers */}
        <div className="py-6 text-xs text-slate-400 space-y-2 leading-relaxed border-b border-white/10">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for general health awareness only and is not a substitute for professional medical diagnosis or clinical evaluation.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Gautam Ear Nose Throat Clinic, Kota, Rajasthan. All Rights Reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-secondary-light transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <p className="text-slate-400 font-medium">
              Designed &amp; Developed by{' '}
              <a
                href="https://digiteeworld.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-light font-bold hover:text-white transition-colors"
              >
                Digitee World
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
