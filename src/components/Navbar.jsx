import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicData, getWhatsAppUrl } from '../data/clinic';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'shadow-md py-2.5 border-b border-border'
          : 'py-3.5 border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white border border-border p-1 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-primary/40 transition-all overflow-hidden flex-shrink-0">
              <img
                src="/logo.png"
                alt="Gautam ENT Clinic Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-extrabold text-base md:text-lg text-text tracking-tight block leading-tight">
                Gautam <span className="text-primary">Ear Nose Throat</span>
              </span>
              <span className="text-[11px] text-text-light font-semibold block tracking-wider uppercase">
                Specialized Clinic • Kota
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Kridha Hospital Navigation Style) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary/10 font-bold'
                      : 'text-text hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="text-xs font-bold text-text hover:text-primary flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:border-primary/40 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Call Clinic</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-blue-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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
              className="bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text hover:bg-primary/10 hover:text-primary transition-colors focus:outline-none border border-border"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Matching Kridha Hospital Slide-Out Drawer Style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Slide-out drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col p-6 z-50 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 p-1 flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-sm text-text block">Gautam ENT</span>
                    <span className="text-[10px] text-text-light font-medium uppercase">Clinic • Kota</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-text-light hover:text-text hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col gap-1.5 flex-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                        isActive
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'text-text hover:bg-slate-50 hover:text-primary'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                ))}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-border text-text font-bold text-sm hover:border-primary/40 hover:text-primary transition-all"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call {clinicData.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl text-center shadow-blue-btn text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
