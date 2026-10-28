import React from 'react';
import { Helmet } from 'react-helmet-async';
import { clinicData } from '../data/clinic';
import { doctorsData } from '../data/doctors';

export const SEOHead = ({
  title = "Gautam ENT Clinic | Best ENT Specialist in Kota | Best ENT Dr Near Me",
  description = "Consult Dr. Pragyanand Gautam (MBBS, M.S. ENT), recognized as the best ENT specialist in Kota & top ENT doctor near you. Specialized care for ear infections, hearing loss, sinusitis, tonsillitis & oral-throat concerns. Call +91 70145 61171.",
  keywords = "best ent specialist in kota, best ent dentist in kota, best ent dr near me, best ent doctor in kota, ent clinic in kota, best ear doctor kota, ent hospital in kota, dr pragyanand gautam ent, ear nose throat clinic kota rajasthan",
  canonical = "https://gautamentclinic.com/",
  faqItems = [],
  breadcrumbs = [],
}) => {
  const doctor = doctorsData[0];

  // Enhanced MedicalClinic & LocalBusiness Schema for Google Local Pack & Knowledge Graph
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness", "MedicalOrganization"],
    "name": "Gautam Ear Nose Throat Clinic",
    "alternateName": [
      "Gautam ENT Clinic Kota",
      "Best ENT Specialist in Kota",
      "Best ENT Dr Near Me Kota",
      "Dr Pragyanand Gautam ENT Clinic"
    ],
    "image": "https://gautamentclinic.com/images/clinic/clinic_exterior_primary.webp",
    "telephone": clinicData.rawPhone,
    "url": canonical,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Debit Card, Credit Card",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "Otolaryngology",
      "PediatricOtolaryngology",
      "HeadAndNeckSurgery"
    ],
    "areaServed": [
      { "@type": "City", "name": "Kota" },
      { "@type": "AdministrativeArea", "name": "Shrinathpuram" },
      { "@type": "AdministrativeArea", "name": "Talwandi" },
      { "@type": "AdministrativeArea", "name": "Dadabari" },
      { "@type": "AdministrativeArea", "name": "Mahaveer Nagar" },
      { "@type": "AdministrativeArea", "name": "Vigyan Nagar" },
      { "@type": "AdministrativeArea", "name": "Jawahar Nagar" },
      { "@type": "AdministrativeArea", "name": "Kunhari" },
      { "@type": "AdministrativeArea", "name": "Gumanpura" },
      { "@type": "AdministrativeArea", "name": "Rajasthan" }
    ],
    "description": "Premier ENT clinic in Kota, Rajasthan providing specialized diagnosis and treatment for ear, nose, throat, sinusitis, hearing loss, tonsillitis, and oral-throat care by M.S. ENT specialist Dr. Pragyanand Gautam.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "52",
      "reviewCount": "52"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ENT & Head-Neck Healthcare Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Ear Infection & Pain Evaluation" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Hearing Loss Assessment & Audiometry" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Sinusitis Treatment & Nasal Endoscopy" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Throat, Tonsillitis & Oral Cavity Care" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Snoring & Sleep Apnea Evaluation" } },
        { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Pediatric ENT Consultations" } }
      ]
    }
  };

  // Physician JSON-LD Schema for Dr. Pragyanand Gautam
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doctor.name,
    "honorificPrefix": "Dr.",
    "jobTitle": "Best ENT Specialist & Consultant Otolaryngologist in Kota",
    "image": "https://gautamentclinic.com" + doctor.image,
    "telephone": clinicData.rawPhone,
    "url": "https://gautamentclinic.com/doctors",
    "medicalSpecialty": "Otolaryngology",
    "knowsAbout": [
      "Otolaryngology",
      "Ear Infections & Microscopic Diagnostics",
      "Sinusitis & Nasal Polyps",
      "Hearing Loss & Audiometry",
      "Tonsillitis & Throat Disorders",
      "Oral Cavity & Head-Neck Healthcare",
      "Pediatric ENT Care"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.address,
      "addressLocality": clinicData.city,
      "addressRegion": clinicData.state,
      "postalCode": clinicData.pincode,
      "addressCountry": "IN"
    },
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Gautam Ear Nose Throat Clinic",
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

  // FAQ JSON-LD Schema (Enables Rich Snippet Accordion directly on Google Search)
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
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Local & Geographic Meta Tags for Kota, Rajasthan */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Kota" />
      <meta name="geo.position" content="25.132682;75.829531" />
      <meta name="ICBM" content="25.132682, 75.829531" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://gautamentclinic.com/images/clinic/clinic_exterior_primary.webp" />
      <meta property="og:site_name" content="Gautam ENT Clinic" />
      <meta property="og:locale" content="en_IN" />

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

