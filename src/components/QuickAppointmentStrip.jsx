import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, Stethoscope, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../config/clinicData';

export const QuickAppointmentStrip = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    preferredDate: '',
    concern: SERVICES_LIST[0].title,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to appointment page with pre-filled state
    navigate('/appointment', { state: { prefilled: formData } });
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="bg-medical text-white rounded-2xl p-6 md:p-8 shadow-xl border border-medical-light/30">
        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-100" />
            Quick Appointment Request
          </h3>
          <p className="text-xs md:text-sm text-slate-300">
            Select your preferred details to request a consultation slot in Kota.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Patient Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">Patient Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full bg-slate-900/60 text-white placeholder-slate-400 text-sm rounded-xl pl-9 pr-3 py-2.5 border border-slate-700 focus:outline-none focus:border-teal"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900/60 text-white placeholder-slate-400 text-sm rounded-xl pl-9 pr-3 py-2.5 border border-slate-700 focus:outline-none focus:border-teal"
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">Preferred Date</label>
            <input
              type="date"
              required
              min={todayStr}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-slate-900/60 text-white text-sm rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-teal"
            />
          </div>

          {/* Concern */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">Primary Concern</label>
            <div className="relative">
              <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <select
                value={formData.concern}
                onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                className="w-full bg-slate-900/60 text-white text-sm rounded-xl pl-9 pr-3 py-2.5 border border-slate-700 focus:outline-none focus:border-teal appearance-none cursor-pointer"
              >
                {SERVICES_LIST.map((service) => (
                  <option key={service.id} value={service.title} className="bg-medical text-white">
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-teal hover:bg-teal-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <span>Continue Booking</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
