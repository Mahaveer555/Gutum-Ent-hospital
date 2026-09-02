import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className={`sticky top-0 z-40 bg-white border-t-4 border-medicalred transition-all duration-300 ${
        scrolled
          ? 'shadow-hospital py-2.5 bg-white/95 backdrop-blur-md'
          : 'py-4 border-b border-bordergrey'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            {/* Official ENT Clinic Logo */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border-2 border-medicalnavy/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0 p-0.5">
              <img
                src="/logo.png"
                alt="Gautam ENT Clinic Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-heading font-extrabold text-base md:text-lg text-medicalnavy tracking-tight block leading-tight">
                Gautam <span className="text-medicalred">Ear Nose Throat</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold block tracking-wider uppercase">
                Clinic • Kota
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
                      ? 'text-medicalred bg-rosebg'
                      : 'text-medicalnavy hover:text-medicalred'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-medicalred transition-all duration-300 ${
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
              className="inline-flex items-center gap-2 bg-medicalred hover:bg-medicalred-dark text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-red-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
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
              className="bg-medicalred text-white p-2 rounded-lg text-xs font-bold sm:hidden flex items-center gap-1.5 shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-medicalnavy hover:bg-rosebg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-medicalred" /> : <Menu className="w-6 h-6 text-medicalnavy" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Framer Motion slide-down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-x-0 top-[71px] bg-white border-b border-bordergrey shadow-xl py-5 px-6 z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                      isActive ? 'bg-rosebg text-medicalred border-l-4 border-medicalred' : 'text-medicalnavy hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-bordergrey">
                <a
                  href={getWhatsAppUrl("Hello Gautam Ear Nose Throat Clinic, I would like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-medicalred hover:bg-medicalred-dark text-white font-bold rounded-xl text-center shadow-red-btn"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
