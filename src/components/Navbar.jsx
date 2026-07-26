import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Plus, Menu, X, Phone } from 'lucide-react';
import { clinicData } from '../data/clinic';

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
    { name: 'Doctors', path: '/doctors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white border-t-4 border-medicalred transition-all duration-300 ${
        scrolled
          ? 'shadow-md py-3 bg-white/95 backdrop-blur-md'
          : 'py-4 border-b border-roseborder/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-medicalred to-medicalred-dark text-white flex items-center justify-center shadow-red-btn group-hover:scale-105 transition-transform">
              <Plus className="w-6 h-6 stroke-[3] animate-slow-pulse" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg md:text-xl text-darkheading tracking-tight block">
                Gautam <span className="text-medicalred">ENT Clinic</span>
              </span>
              <span className="text-[11px] text-bodytext font-medium block -mt-1 tracking-wider uppercase">
                Otolaryngology • Kota
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with animated red underline */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 group ${
                    isActive
                      ? 'text-medicalred bg-rosebg'
                      : 'text-darkheading hover:text-medicalred'
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

          {/* Right Red CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-medicalred to-medicalred-dark hover:from-medicalred-dark hover:to-medicalred-900 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-red-btn hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
            >
              <Phone className="w-4 h-4 animate-ring" />
              <span>Call Now ({clinicData.phone})</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${clinicData.rawPhone}`}
              className="bg-medicalred text-white p-2 rounded-lg text-xs font-bold sm:hidden flex items-center gap-1 shadow"
            >
              <Phone className="w-3.5 h-3.5 animate-ring" />
              Call
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-darkheading hover:bg-rosebg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-medicalred" /> : <Menu className="w-6 h-6 text-darkheading" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[69px] bg-white border-b border-roseborder shadow-xl py-5 px-6 animate-fadeIn z-50">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                    isActive ? 'bg-rosebg text-medicalred border-l-4 border-medicalred' : 'text-darkheading hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-medicalred to-medicalred-dark text-white font-bold rounded-xl text-center shadow-red-btn"
              >
                <Phone className="w-4 h-4 animate-ring" />
                Call Now ({clinicData.phone})
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
