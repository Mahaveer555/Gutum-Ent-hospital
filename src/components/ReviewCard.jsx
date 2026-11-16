import React from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useClinic } from '../context/ClinicContext';

export const ReviewCard = () => {
  const { clinicData } = useClinic();

  const reviews = [
    {
      name: "Suresh Sharma",
      locality: "Dadabari, Kota",
      rating: 5,
      date: "Recent Patient",
      treatment: "Ear Infection & Microscopic Cleaning",
      review: "Dr. Pragyanand Gautam is extremely patient and explains everything clearly. The microscopic examination in the clinic made diagnosis very accurate and pain-free. Highly recommended in Kota."
    },
    {
      name: "Meenakshi Verma",
      locality: "Talwandi, Kota",
      rating: 5,
      date: "Recent Patient",
      treatment: "Severe Sinusitis Treatment",
      review: "Had chronic sinus headaches for months. Dr. Gautam provided a precise treatment plan without pushing unnecessary procedures. Feeling 100% better within a week. The clinic is very clean and hygienic."
    },
    {
      name: "Amit Solanki",
      locality: "Shrinathpuram, Kota",
      rating: 5,
      date: "Recent Patient",
      treatment: "Throat Infection & TMJ Pain",
      review: "Very professional ENT specialist in Kota. Dr. Gautam took the time to listen to all symptoms and explained the connection between throat and jaw irritation. In-house pharmacy was very convenient."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Rating Bar (Kridha Hospital Style) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-6 border border-border shadow-hospital max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center font-heading font-extrabold text-2xl border border-primary/20 shadow-sm">
            4.8
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm font-bold text-text">
              Verified Google Business Rating
            </p>
            <p className="text-xs text-text-light">Based on verified patient feedback in Kota, Rajasthan</p>
          </div>
        </div>

        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-blue-btn transition-all transform hover:-translate-y-0.5"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-hospital-lg hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-[11px] text-text-light font-medium">{rev.date}</span>
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-bold border border-primary/20">
                {rev.treatment}
              </span>

              <p className="text-xs sm:text-sm text-text-light leading-relaxed font-normal">
                "{rev.review}"
              </p>
            </div>

            <div className="pt-4 border-t border-border mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-text">{rev.name}</h4>
                <p className="text-[11px] text-text-light">{rev.locality}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
