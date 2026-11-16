import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Lock } from 'lucide-react';
import { SEOHead } from '../utils/seo';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Gautam ENT Clinic Kota"
        description="Privacy policy and data protection guidance for Gautam ENT Clinic in Kota, Rajasthan."
        canonical="https://gautamentclinic.com/privacy"
      />

      <div className="space-y-12 pb-16 bg-bg-soft min-h-screen text-text">
        <section className="bg-gradient-to-br from-[#0b2447] via-[#1578c9] to-[#0b5ea8] text-white py-12 md:py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs md:text-sm text-white/80 mb-3">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              <span className="text-white font-semibold">Privacy Policy</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Patient Privacy Policy &amp; Data Protection
            </h1>
            <p className="text-sm text-white/80 mt-2">
              Last updated: 2026 • Gautam ENT Clinic, Kota
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-hospital border border-border space-y-6 text-sm text-text-muted leading-relaxed">
            <div className="flex items-center gap-2 text-primary font-bold text-base border-b border-border pb-3">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="text-text">Our Patient Privacy Commitment</span>
            </div>

            <p>
              At <strong className="text-text">Gautam ENT Clinic</strong>, we treat patient privacy and data protection with utmost confidentiality. This privacy notice outlines how information submitted through our website appointment request form and contact form is handled.
            </p>

            <h3 className="text-lg font-heading font-bold text-text pt-2">1. Information We Collect</h3>
            <p>
              When you request an appointment or send an inquiry through this website, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-text">
              <li>Patient full name</li>
              <li>Phone number (for appointment slot confirmation)</li>
              <li>Email address (optional)</li>
              <li>Age and patient type (Adult/Child)</li>
              <li>Selected ENT concern and preferred appointment date/time</li>
              <li>Optional brief description of symptoms provided voluntarily</li>
            </ul>

            <h3 className="text-lg font-heading font-bold text-text pt-2">2. How We Use Your Information</h3>
            <p>
              Your contact details are strictly used to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-text">
              <li>Contact you via telephone or SMS to confirm appointment slot availability.</li>
              <li>Send email confirmations if an email address was provided.</li>
              <li>Respond to general medical inquiries submitted via the contact form.</li>
            </ul>
            <p>
              We <strong>never sell, rent, or trade</strong> your personal information or contact number to third-party marketing companies.
            </p>

            <h3 className="text-lg font-heading font-bold text-text pt-2">3. Medical Records Confidentiality</h3>
            <p>
              Detailed medical diagnosis and physical examination records remain strictly private within clinical records and are handled in compliance with applicable Indian medical ethics guidelines.
            </p>

            <h3 className="text-lg font-heading font-bold text-text pt-2">4. Contact Us</h3>
            <p>
              For questions regarding our privacy practices, contact Gautam ENT Clinic at:
            </p>
            <div className="bg-bg-soft p-4 rounded-xl border border-border text-xs space-y-1 text-text">
              <p className="font-bold">Gautam ENT Clinic</p>
              <p>58, Shrinathpuram-A, Kota, Rajasthan 324010</p>
              <p>Phone: +91 70145 61171</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
