import React from 'react';
import { Helmet } from 'react-helmet-async';
import { clinicData } from '../data/clinic';
import { doctorsData } from '../data/doctors';

export const SEOHead = ({
  title = "Gautam Ear Nose Throat Clinic Kota | ENT Specialist Doctor",
  description = "Contact Gautam Ear Nose Throat Clinic in Shrinathpuram-A, Kota for consultation regarding ear, nose and throat concerns. Call +91 70145 61171.",
  canonical = "https://gautamentclinic.com/",
  faqItems = [],
  breadcrumbs = [],
}) => {
  const doctor = doctorsData[0];

  // Verified MedicalClinic JSON-LD Schema
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": clinicData.name,
    "image": "https://gautamentclinic.com/images/clinic/clinic_exterior_primary.webp",
    "telephone": clinicData.rawPhone,
    "url": "https://gautamentclinic.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.address,
      "addressLocality": clinicData.city,
      "addressRegion": clinicData.state,
      "postalCode": clinicData.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": clinicData.mapCoordinates.lat,
      "longitude": clinicData.mapCoordinates.lng
    },
    "hasMap": clinicData.directionsUrl,
    "openingHours": "Mo-Sa 17:00-20:00",
    "medicalSpecialty": "Otolaryngology",
    "priceRange": "$$",
    "description": "Specialized clinic for ear, nose, throat, sinusitis, hearing loss, audiometry, and pediatric ENT concerns in Kota, Rajasthan."
  };

  // Physician JSON-LD Schema for the Doctor
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "image": "https://gautamentclinic.com" + doctor.image,
    "telephone": clinicData.rawPhone,
    "url": "https://gautamentclinic.com/doctors",
    "medicalSpecialty": "Otolaryngology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.address,
      "addressLocality": clinicData.city,
      "addressRegion": clinicData.state,
      "postalCode": clinicData.pincode,
      "addressCountry": "IN"
    },
    "memberOf": {
      "@type": "MedicalOrganization",
      "name": clinicData.name,
      "url": "https://gautamentclinic.com/"
    }
  };

  // Breadcrumb JSON-LD Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.url
      }))
    };
  }

  // FAQ JSON-LD Schema
  let faqSchema = null;
  if (faqItems && faqItems.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://gautamentclinic.com/images/clinic/clinic_exterior_primary.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://gautamentclinic.com/images/clinic/clinic_exterior_primary.webp" />

      {/* Microdata Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(medicalClinicSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </script>

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
export default SEOHead;
