export const clinicData = {
  name: "Gautam ENT Clinic",
  tagline: "Specialized Ear, Nose & Throat Care in Kota",
  category: "ENT Specialist / Otolaryngology Clinic",
  phone: "+91 70145 61171",
  rawPhone: "+917014561171",
  whatsappNumber: "917014561171",
  email: "info@gautamentclinic.com",
  address: "58, Near Falodi Mart, Shreenath Puram A, Shrinath Puram, Kota, Rajasthan 324010",
  landmark: "Near Falodi Mart, Shreenath Puram A",
  city: "Kota",
  state: "Rajasthan",
  pincode: "324010",
  mapCoordinates: {
    lat: 25.1326822,
    lng: 75.829531
  },
  directionsUrl: "https://www.google.com/maps?q=25.1326822,75.829531",
  embedMapUrl: "https://www.google.com/maps?q=25.1326822,75.829531&output=embed",
  openingHoursNotice: "Clinic timings: Please call to confirm today's availability.",
  googleRating: 4.8,
  googleRatingNotice: "Rating based on verified Google Business Profile. Rating may change.",
  emergencyWarning: "This website does not provide emergency medical care. For breathing difficulty, severe bleeding, sudden hearing loss, serious injury or another urgent medical condition, visit the nearest hospital or contact emergency services."
};

export const getWhatsAppUrl = (customText = "") => {
  const defaultText = "Hello Gautam ENT Clinic, I would like to book an appointment.";
  const text = customText || defaultText;
  return `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
