import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({
  title = "Gautam ENT Clinic Kota | Ear, Nose & Throat Specialist",
  description = "Contact Gautam ENT Clinic in Shreenath Puram, Kota for consultation regarding ear, nose and throat concerns. Call +91 70145 61171 to request an appointment.",
  canonical = "https://gautamentclinic.com/",
  faqItems = [],
  breadcrumbs = [],
}) => {
  // Verified JSON-LD Schema
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": "Gautam ENT Clinic",
    "image": "https://gautamentclinic.com/images/hero-ent.svg",
    "telephone": "+917014561171",
    "url": "https://gautamentclinic.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "58, Near Falodi Mart, Shreenath Puram A, Shrinath Puram",
      "addressLocality": "Kota",
      "addressRegion": "Rajasthan",
      "postalCode": "324010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1326822,
      "longitude": 75.829531
    },
    "hasMap": "https://www.google.com/maps?q=25.1326822,75.829531",
    "medicalSpecialty": "Otolaryngology",
    "description": "Specialized consultation for ear, nose, throat, sinusitis, hearing loss, and pediatric ENT concerns in Kota, Rajasthan."
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
      <meta property="og:image" content="https://gautamentclinic.com/images/hero-ent.svg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://gautamentclinic.com/images/hero-ent.svg" />

      {/* Microdata Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(medicalClinicSchema)}
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
