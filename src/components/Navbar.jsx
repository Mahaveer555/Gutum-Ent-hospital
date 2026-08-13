import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctor', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white border-t-4 border-[#C92032] transition-all duration-300 ${
        scrolled
          ? 'shadow-hospital-lg py-2.5 bg-white/95 backdrop-blur-md'
          : 'py-4 border-b border-[#E7EDF3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            {/* Custom SVG ENT Profile Clinic Logo */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#F7FAFC] border-2 border-[#C92032] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
              <svg className="w-8 h-8 text-[#C92032]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Face profile & Ear outline */}
                <path d="M30 35C30 35 42 22 55 30C65 36 62 48 58 52C55 55 52 58 54 65C56 72 45 78 40 70" stroke="#102A43" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M48 44C45 42 42 45 42 49C42 53 46 54 48 57C50 60 48 64 45 62" stroke="#C92032" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="50" cy="50" r="3" fill="#C92032" />
              </svg>
            </div>
            <div>
              <span className="font-heading font-extrabold text-base md:text-lg text-[#102A43] tracking-tight block leading-tight">
                Gautam <span className="text-[#C92032]">Ear Nose Throat</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold block tracking-wider uppercase">
                Clinic • Shrinathpuram, Kota
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 group ${
                    isActive
                      ? 'text-[#C92032] bg-[#C92032]/5'
                      : 'text-[#102A43] hover:text-[#C92032]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#C92032] transition-all duration-300 ${
                        isActive ? 'w-auto' : 'w-0 group-hover:w-auto'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Red CTA Button: Book Appointment */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C92032] hover:bg-[#8F1020] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-red-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Action/Hamburger Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C92032] text-white p-2 rounded-lg text-xs font-bold sm:hidden flex items-center gap-1.5 shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#102A43] hover:bg-[#C92032]/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C92032]" /> : <Menu className="w-6 h-6 text-[#102A43]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[71px] bg-white border-b border-[#E7EDF3] shadow-xl py-5 px-6 animate-fadeIn z-50">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                    isActive ? 'bg-[#C92032]/5 text-[#C92032] border-l-4 border-[#C92032]' : 'text-[#102A43] hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100">
              <a
                href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#C92032] hover:bg-[#8F1020] text-white font-bold rounded-xl text-center shadow-red-btn"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
