import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Calendar, CheckCircle, Loader2, Phone, AlertCircle, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST } from '../config/clinicData';
import { useClinic } from '../context/ClinicContext';
import api from '../services/api';

export const AppointmentForm = ({ prefilledData = null }) => {
  const { clinicData } = useClinic();
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientName: prefilledData?.patientName || '',
      phone: prefilledData?.phone || '',
      email: '',
      age: '',
      patientType: 'Adult',
      concern: prefilledData?.concern || SERVICES_LIST[0].title,
      preferredDate: prefilledData?.preferredDate || todayStr,
      preferredTime: 'Morning',
      visitType: 'First Visit',
      message: '',
      consent: true,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessData(null);
    try {
      const payload = {
        ...data,
        age: data.age ? Number(data.age) : undefined,
      };

      const response = await api.post('/appointments', payload);

      if (response.data && response.data.success) {
        setSuccessData(response.data.data);
        toast.success('Appointment request submitted successfully!');
        reset();
      } else {
        toast.error(response.data.message || 'Failed to submit appointment request.');
      }
    } catch (error) {
      const errMsg =
        error.response?.data?.message || 'Failed to submit request. Please call clinic directly.';
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h3 className="text-2xl font-heading font-extrabold text-[#171717]">Request Submitted</h3>
        <p className="text-sm font-semibold text-[#ef2028] mt-1">
          Request ID: <span className="font-mono bg-[#ef2028]/10 text-[#ef2028] px-2 py-0.5 rounded border border-[#ef2028]/20">{successData.requestId}</span>
        </p>

        <div className="bg-[#faf9f7] border-l-4 border-[#ef2028] p-4 rounded-r-xl text-left my-6 space-y-2 text-sm text-neutral-700">
          <p><strong>Patient Name:</strong> {successData.patientName}</p>
          <p><strong>Phone:</strong> {successData.phone}</p>
          <p><strong>Preferred Date:</strong> {successData.preferredDate}</p>
          <p><strong>Status:</strong> <span className="text-amber-600 font-semibold">{successData.status}</span></p>
        </div>

        <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
          Your appointment request has been submitted. The clinic staff will contact you shortly to confirm exact time availability.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setSuccessData(null)}
            className="bg-neutral-100 hover:bg-neutral-200 text-[#171717] font-bold text-sm px-6 py-3 rounded-xl transition-all"
          >
            Submit Another Request
          </button>

          <a
            href={`tel:${clinicData.rawPhone}`}
            className="bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Clinic Now</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-extrabold text-[#171717]">
          Book an Appointment Consultation
        </h3>
        <p className="text-sm text-neutral-600 mt-1">
          Complete the form below to request your preferred consultation date at Gautam ENT Clinic in Kota.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        
        {/* Patient Name */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Full Patient Name <span className="text-[#ef2028]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rajesh Sharma"
            {...register('patientName', {
              required: 'Patient name is required',
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

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Phone Number <span className="text-[#ef2028]">*</span>
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^(\+91[\-\s]?)?[6789]\d{9}$/,
                  message: 'Enter a valid 10-digit Indian phone number',
                },
              })}
              className={`w-full text-sm rounded-xl px-4 py-3 border ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
              } focus:outline-none transition-colors`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Patient Type & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Patient Type
            </label>
            <select
              {...register('patientType')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none bg-white cursor-pointer"
            >
              <option value="Adult">Adult Patient</option>
              <option value="Child">Child Patient (Pediatric)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Age <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="number"
              min="0"
              max="120"
              placeholder="e.g. 35"
              {...register('age')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ENT Concern Selection */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Primary ENT Concern <span className="text-[#ef2028]">*</span>
          </label>
          <select
            {...register('concern', { required: 'Please select your ENT concern' })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.concern ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
            } focus:outline-none bg-white cursor-pointer`}
          >
            {SERVICES_LIST.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title} ({service.category} Care)
              </option>
            ))}
          </select>
          {errors.concern && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.concern.message}
            </p>
          )}
        </div>

        {/* Preferred Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Preferred Date <span className="text-[#ef2028]">*</span>
            </label>
            <input
              type="date"
              min={todayStr}
              {...register('preferredDate', { required: 'Preferred date is required' })}
              className={`w-full text-sm rounded-xl px-4 py-3 border ${
                errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
              } focus:outline-none transition-colors`}
            />
            {errors.preferredDate && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Preferred Time Slot
            </label>
            <select
              {...register('preferredTime')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none bg-white cursor-pointer"
            >
              <option value="Evening (5:00 PM - 6:00 PM)">Evening (5:00 PM - 6:00 PM)</option>
              <option value="Evening (6:00 PM - 7:00 PM)">Evening (6:00 PM - 7:00 PM)</option>
              <option value="Evening (7:00 PM - 8:00 PM)">Evening (7:00 PM - 8:00 PM)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Visit Type
            </label>
            <select
              {...register('visitType')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none bg-white cursor-pointer"
            >
              <option value="First Visit">First Consultation</option>
              <option value="Follow-up">Follow-up Visit</option>
            </select>
          </div>
        </div>

        {/* Short Message */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Short Description of Symptoms <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows="3"
            placeholder="Briefly describe your symptoms or ear, nose, or throat concern..."
            {...register('message')}
            className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('consent', {
                required: 'You must consent to be contacted regarding your request',
              })}
              className="mt-1 w-4 h-4 rounded text-[#ef2028] focus:ring-[#ef2028] border-neutral-300"
            />
            <span className="text-xs text-neutral-600 leading-relaxed">
              I consent to Gautam ENT Clinic contacting me via phone or SMS regarding this appointment enquiry. My details are handled in accordance with the clinic's privacy policy.
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit CTA Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ef2028] hover:bg-[#cf131b] disabled:bg-neutral-400 text-white font-bold text-base py-4 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                <span>Submit Appointment Request</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-center text-neutral-500 pt-2 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Your patient privacy is strictly respected. Request subject to clinic slot confirmation.
        </p>
      </form>
    </div>
  );
};
