import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { AppointmentForm } from '../components/AppointmentForm';
import { EmergencyNotice } from '../components/EmergencyNotice';
import { useClinic } from '../context/ClinicContext';

export const Appointment = () => {
  const { clinicData } = useClinic();
  const location = useLocation();
  const prefilled = location.state?.prefilled || null;

  return (
    <>
      <SEOHead
        title="Book Appointment | Gautam ENT Clinic Kota"
        description="Book an ENT consultation appointment at Gautam ENT Clinic in Shreenath Puram, Kota. Call +91 70145 61171 or submit your online request form."
        canonical="https://gautamentclinic.com/appointment"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Book Appointment', url: 'https://gautamentclinic.com/appointment' },
        ]}
      />

      <div className="space-y-12 pb-16">
        {/* Banner Header */}
        <section className="bg-gradient-to-r from-medical via-medical-dark to-medical text-white py-12 md:py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mb-3">
              <Link to="/" className="hover:text-teal-100 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              <span className="text-white font-semibold">Book Appointment</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Request an Appointment
            </h1>
            <p className="mt-2 text-base md:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed">
              Fill out your details below to request a consultation slot at Gautam ENT Clinic in Kota.
            </p>
          </div>
        </section>

        {/* Main Content Grid: Two Column Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (5 Cols): Benefits, Location, What to Bring, Call Option */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Urgent Booking Call Action */}
              <div className="bg-gradient-to-br from-teal to-medical text-white rounded-card p-6 shadow-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">Prefer to Book by Phone?</h3>
                    <p className="text-xs text-slate-200">Instant availability check over phone</p>
                  </div>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Call our clinic desk directly to confirm today's consultation slot.
                </p>
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="w-full bg-coral hover:bg-coral/90 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {clinicData.phone}</span>
                </a>
              </div>

              {/* Appointment Benefits */}
              <div className="bg-white rounded-card p-6 shadow-medical border border-slate-100 space-y-4">
                <h3 className="font-heading font-bold text-lg text-medical flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-teal" />
                  Consultation Benefits
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Patient-focused evaluation without rushed appointments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Care for both adult and pediatric ear, nose &amp; throat concerns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Convenient Kota location with clear driving directions.</span>
                  </li>
                </ul>
              </div>

              {/* What to Bring */}
              <div className="bg-white rounded-card p-6 shadow-medical border border-slate-100 space-y-3">
                <h3 className="font-heading font-bold text-base text-medical flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal" />
                  What to Bring to Your Visit
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-slate-600 list-disc list-inside">
                  <li>Any past ear/nose medical prescriptions or scan reports.</li>
                  <li>List of current medications you are taking.</li>
                  <li>Photo ID for patient record registration.</li>
                </ul>
              </div>

              {/* Location & Timings */}
              <div className="bg-soft p-5 rounded-card border border-slate-200 space-y-3 text-xs md:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Clinic Address:</strong><br />
                    {clinicData.address}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-teal flex-shrink-0 mt-1" />
                  <div>
                    <strong>Clinic Availability:</strong><br />
                    {clinicData.openingHoursNotice}
                  </div>
                </div>
              </div>

              {/* Emergency Warning */}
              <EmergencyNotice />
            </div>

            {/* Right Column (7 Cols): Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm prefilledData={prefilled} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
