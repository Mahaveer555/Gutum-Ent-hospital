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
      <div className="bg-white rounded-card p-6 md:p-8 shadow-medical border border-teal/30 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h3 className="text-2xl font-heading font-extrabold text-medical">Request Submitted</h3>
        <p className="text-sm font-semibold text-teal mt-1">
          Request ID: <span className="font-mono bg-aqua px-2 py-0.5 rounded border border-teal/20">{successData.requestId}</span>
        </p>

        <div className="bg-slate-50 border-l-4 border-teal p-4 rounded-r-xl text-left my-6 space-y-2 text-sm text-slate-700">
          <p><strong>Patient Name:</strong> {successData.patientName}</p>
          <p><strong>Phone:</strong> {successData.phone}</p>
          <p><strong>Preferred Date:</strong> {successData.preferredDate}</p>
          <p><strong>Status:</strong> <span className="text-amber-600 font-semibold">{successData.status}</span></p>
        </div>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Your appointment request has been submitted. The clinic staff will contact you shortly to confirm exact time availability.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setSuccessData(null)}
            className="bg-slate-100 hover:bg-slate-200 text-medical font-bold text-sm px-6 py-3 rounded-xl transition-all"
          >
            Submit Another Request
          </button>

          <a
            href={`tel:${clinicData.rawPhone}`}
            className="bg-teal hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Clinic Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card p-6 md:p-8 shadow-medical border border-slate-100">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-extrabold text-medical">
          Book an Appointment Consultation
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Complete the form below to request your preferred consultation date at Gautam ENT Clinic in Kota.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        
        {/* Patient Name */}
        <div>
          <label className="block text-xs font-bold text-medical uppercase mb-1">
            Full Patient Name <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rajesh Sharma"
            {...register('patientName', {
              required: 'Patient name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.patientName ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-teal'
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
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Phone Number <span className="text-coral">*</span>
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
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-teal'
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
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
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
              className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none transition-colors"
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
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Patient Type
            </label>
            <select
              {...register('patientType')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none bg-white cursor-pointer"
            >
              <option value="Adult">Adult Patient</option>
              <option value="Child">Child Patient (Pediatric)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Age <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="number"
              min="0"
              max="120"
              placeholder="e.g. 35"
              {...register('age')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ENT Concern Selection */}
        <div>
          <label className="block text-xs font-bold text-medical uppercase mb-1">
            Primary ENT Concern <span className="text-coral">*</span>
          </label>
          <select
            {...register('concern', { required: 'Please select your ENT concern' })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.concern ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-teal'
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
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Preferred Date <span className="text-coral">*</span>
            </label>
            <input
              type="date"
              min={todayStr}
              {...register('preferredDate', { required: 'Preferred date is required' })}
              className={`w-full text-sm rounded-xl px-4 py-3 border ${
                errors.preferredDate ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-teal'
              } focus:outline-none transition-colors`}
            />
            {errors.preferredDate && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Preferred Time Slot
            </label>
            <select
              {...register('preferredTime')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none bg-white cursor-pointer"
            >
              <option value="Morning">Morning Slot</option>
              <option value="Afternoon">Afternoon Slot</option>
              <option value="Evening">Evening Slot</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-medical uppercase mb-1">
              Visit Type
            </label>
            <select
              {...register('visitType')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none bg-white cursor-pointer"
            >
              <option value="First Visit">First Consultation</option>
              <option value="Follow-up">Follow-up Visit</option>
            </select>
          </div>
        </div>

        {/* Short Message */}
        <div>
          <label className="block text-xs font-bold text-medical uppercase mb-1">
            Short Description of Symptoms <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows="3"
            placeholder="Briefly describe your symptoms or ear, nose, or throat concern..."
            {...register('message')}
            className="w-full text-sm rounded-xl px-4 py-3 border border-slate-200 focus:border-teal focus:outline-none transition-colors resize-none"
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
              className="mt-1 w-4 h-4 rounded text-teal focus:ring-teal border-slate-300"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
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
            className="w-full bg-teal hover:bg-teal-700 disabled:bg-slate-400 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
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

        <p className="text-xs text-center text-slate-500 pt-2 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-success" />
          Your patient privacy is strictly respected. Request subject to clinic slot confirmation.
        </p>
      </form>
    </div>
  );
};
