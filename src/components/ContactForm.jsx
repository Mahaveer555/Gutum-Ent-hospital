import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../services/api';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post('/contact', data);
      if (response.data && response.data.success) {
        setSubmitted(true);
        toast.success('Your message has been sent successfully!');
        reset();
      } else {
        toast.error(response.data.message || 'Failed to send message.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please call us directly at +91 70145 61171.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200 text-center animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-heading font-extrabold text-[#171717]">Message Sent</h3>
        <p className="text-sm text-neutral-600 my-3 leading-relaxed">
          Thank you for contacting Gautam ENT Clinic, Kota. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-[#ef2028] hover:bg-[#cf131b] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200">
      <h3 className="text-2xl font-heading font-extrabold text-[#171717] mb-1">
        Send Us a Message
      </h3>
      <p className="text-sm text-neutral-600 mb-6">
        Have a question or general enquiry regarding ENT services in Kota?
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Your Name <span className="text-[#ef2028]">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
            } focus:outline-none transition-colors`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
              Email Address <span className="text-neutral-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              {...register('email')}
              className="w-full text-sm rounded-xl px-4 py-3 border border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Subject <span className="text-[#ef2028]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Ear consultation inquiry"
            {...register('subject', { required: 'Subject is required' })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.subject ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
            } focus:outline-none transition-colors`}
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-[#171717] uppercase mb-1">
            Message <span className="text-[#ef2028]">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Type your message or query here..."
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 5, message: 'Message must be at least 5 characters' },
            })}
            className={`w-full text-sm rounded-xl px-4 py-3 border ${
              errors.message ? 'border-red-500 bg-red-50/20' : 'border-neutral-300 focus:border-[#ef2028] focus:ring-1 focus:ring-[#ef2028]'
            } focus:outline-none transition-colors resize-none`}
          ></textarea>
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ef2028] hover:bg-[#cf131b] disabled:bg-neutral-400 text-white font-bold text-sm py-3.5 rounded-xl shadow-[0_8px_25px_rgba(239,32,40,0.35)] transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
