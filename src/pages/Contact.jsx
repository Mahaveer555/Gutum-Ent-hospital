import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
  Send,
  Plus,
} from 'lucide-react';
import { SEOHead } from '../utils/seo';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { clinicData, getWhatsAppUrl } from '../data/clinic';
import { servicesData } from '../data/services';

export const Contact = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientName: '',
      phone: '',
      concern: servicesData[0].title,
      preferredDate: todayStr,
      message: '',
    },
  });

  const onSubmitWhatsApp = (data) => {
    const formattedText = `Hello Gautam ENT Clinic,
My name is ${data.patientName}.
Mobile number: ${data.phone}
Concern: ${data.concern}
Preferred date: ${data.preferredDate}
Message: ${data.message || 'N/A'}
I would like to request an appointment.`;

    const waUrl = getWhatsAppUrl(formattedText);
    window.open(waUrl, '_blank');
  };

  return (
    <>
      <SEOHead
        title="Best ENT Doctor Near Me in Kota | Contact Gautam ENT Clinic"
        description="Contact Gautam ENT Clinic in Shrinathpuram-A, Kota. Consult Dr. Pragyanand Gautam, the best ENT doctor near you. Call +91 70145 61171 or book via WhatsApp."
        keywords="best ent dr near me, best ent doctor near me, best ent specialist in kota, best ent clinic in kota, contact gautam ent clinic, ent clinic shrinathpuram kota"
        canonical="https://gautamentclinic.com/contact"
        breadcrumbs={[
          { name: 'Home', url: 'https://gautamentclinic.com/' },
          { name: 'Contact', url: 'https://gautamentclinic.com/contact' },
        ]}
      />

      <div className="space-y-16 pb-16 bg-[#faf9f7] min-h-screen text-[#404040]">
        {/* Contact Hero Banner */}
        <section className="bg-gradient-to-r from-[#171717] via-[#262626] to-[#171717] text-white py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#ef2028] rounded-full filter blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumb current="Contact" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Contact Gautam ENT Clinic
            </h1>
            <p className="mt-3 text-base md:text-lg text-rose-100 max-w-2xl font-normal leading-relaxed">
              Call or send a WhatsApp message to enquire about clinic availability in Kota.
            </p>
          </div>
        </section>

        {/* Quick Contact Info Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:border-[#ef2028]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#ef2028]/10 text-[#ef2028] flex items-center justify-center border border-[#ef2028]/20">
                <Phone className="w-6 h-6 animate-ring" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#171717]">Call Desk</h3>
              <p className="text-sm font-semibold text-[#171717]">{clinicData.phone}</p>
              <a
                href={`tel:${clinicData.rawPhone}`}
                className="text-xs font-bold text-[#ef2028] hover:underline inline-block"
              >
                Call Now →
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:border-[#ef2028]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center border border-emerald-200">
                <MessageCircle className="w-6 h-6 animate-slow-pulse" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#171717]">WhatsApp Chat</h3>
              <p className="text-sm text-neutral-600">Fast appointment message</p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:underline inline-block"
              >
                Open WhatsApp →
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:border-[#ef2028]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#ef2028]/10 text-[#ef2028] flex items-center justify-center border border-[#ef2028]/20">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#171717]">Clinic Address</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{clinicData.address}</p>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#ef2028] hover:underline inline-block"
              >
                Get Directions →
              </a>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:border-[#ef2028]/40 hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-[#171717]">Clinic Timings</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{clinicData.openingHoursNotice}</p>
              <span className="text-xs font-semibold text-amber-700 block">Call to confirm today</span>
            </div>
          </div>
        </section>

        {/* Form & Map Main Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Frontend-only WhatsApp Form (6 Cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-[#171717]">
                  Request Appointment via WhatsApp
                </h3>
                <p className="text-xs md:text-sm text-neutral-600 mt-1">
                  Fill in your details below. Submitting this form will generate a formatted message and open WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmitWhatsApp)} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
                    Full Name <span className="text-[#ef2028]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    {...register('patientName', {
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                    className={`w-full text-sm rounded-xl px-4 py-3 border ${
                      errors.patientName ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.patientName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.patientName.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-darkheading uppercase mb-1">
                    Mobile Number <span className="text-medicalred">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    {...register('phone', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^(\+91[\-\s]?)?[6789]\d{9}$/,
                        message: 'Enter a valid 10-digit Indian phone number',
                      },
                    })}
                    className={`w-full text-sm rounded-xl px-4 py-3 border ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-roseborder focus:border-medicalred'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Select ENT Concern */}
                <div>
                  <label className="block text-xs font-bold text-darkheading uppercase mb-1">
                    Select ENT Concern <span className="text-medicalred">*</span>
                  </label>
                  <select
                    {...register('concern')}
                    className="w-full text-sm rounded-xl px-4 py-3 border border-roseborder focus:border-medicalred focus:outline-none bg-white cursor-pointer"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.category} Care)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-darkheading uppercase mb-1">
                    Preferred Date <span className="text-medicalred">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    {...register('preferredDate', { required: 'Preferred date is required' })}
                    className={`w-full text-sm rounded-xl px-4 py-3 border ${
                      errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-roseborder focus:border-medicalred'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-darkheading uppercase mb-1">
                    Message / Symptoms <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly describe your symptoms or ear, nose, or throat concern..."
                    {...register('message')}
                    className="w-full text-sm rounded-xl px-4 py-3 border border-roseborder focus:border-medicalred focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* WhatsApp Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Appointment Request via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-bodytext pt-1 leading-relaxed">
                  Submitting this form will open WhatsApp. Appointment is confirmed only after the clinic responds.
                </p>
              </form>
            </div>

            {/* Google Map & Directions Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-darkheading mb-2">
                  Google Map Location
                </h3>
                <p className="text-sm text-bodytext">
                  Gautam ENT Clinic is located at Shreenath Puram A, Shrinath Puram, Kota, Rajasthan 324010.
                </p>
              </div>

              {/* Embedded Google Map inside Rounded Red-Bordered Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 relative">
                <div className="bg-[#171717] text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#ef2028]" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">Gautam ENT Clinic Location</h4>
                      <p className="text-xs text-neutral-400">Shreenath Puram, Kota</p>
                    </div>
                  </div>

                  <a
                    href={clinicData.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#ef2028] text-white hover:bg-[#cf131b] font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-[0_8px_25px_rgba(239,32,40,0.35)]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative w-full h-80 sm:h-96 bg-slate-100">
                  <iframe
                    title="Gautam ENT Clinic Kota Location Map"
                    src={clinicData.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact CTA Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${clinicData.rawPhone}`}
                  className="bg-[#ef2028] hover:bg-[#cf131b] text-white p-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all"
                >
                  <Phone className="w-4 h-4 animate-ring" /> Call Now
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow hover:bg-[#20bd5a] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp Now
                </a>

                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-neutral-800 border border-neutral-300 p-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:border-[#ef2028] hover:text-[#ef2028] transition-all"
                >
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQs"
            title="Location &amp; Appointment FAQs"
            subtitle="Quick answers regarding your visit to Gautam ENT Clinic in Kota."
            centered={true}
          />
          <FAQAccordion />
        </section>
      </div>
    </>
  );
};
