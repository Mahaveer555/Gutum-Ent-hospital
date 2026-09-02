export const DEFAULT_CLINIC_DATA = {
  clinicName: "Gautam Ear Nose Throat Clinic",
  tagline: "Specialized Ear, Nose & Throat Care in Kota",
  phone: "+91 70145 61171",
  rawPhone: "+917014561171",
  whatsappNumber: "917014561171",
  email: "info@gautamentclinic.com",
  address: "58, Shrinathpuram-A, Kota, Rajasthan",
  landmark: "Shrinathpuram-A",
  city: "Kota",
  state: "Rajasthan",
  pincode: "324009",
  mapCoordinates: {
    lat: 25.1326822,
    lng: 75.829531
  },
  directionsUrl: "https://www.google.com/maps?q=25.1326822,75.829531",
  embedMapUrl: "https://www.google.com/maps?q=25.1326822,75.829531&output=embed",
  openingHoursNotice: "Mon–Sat: 5:00 PM–8:00 PM",
  googleRating: 4.8,
  googleRatingNotice: "Rating based on verified Google Business Profile. Rating may change.",
  doctorProfile: {
    name: "Dr. Pragyanand Gautam",
    title: "ENT Specialist",
    qualification: "MBBS, M.S. (ENT)",
    specialty: "Ear, Nose and Throat Specialist (Otolaryngologist)",
    registrationNumber: "State Medical Council Registered",
    experienceYears: 12,
    bio: "Dr. Pragyanand Gautam is an experienced Ear, Nose, and Throat (ENT) specialist in Kota. He provides expert medical consultations and specialized diagnostic evaluations for all common and complex ear, nose, and throat concerns with a patient-friendly and compassionate approach.",
    languages: ["English", "Hindi"],
    image: "/images/dr-pragyanand-gautam.png",
    verified: true
  },
  emergencyWarning: "This website does not provide emergency medical care. For breathing difficulty, severe bleeding, sudden hearing loss, serious injury or another urgent condition, contact local emergency services or visit the nearest hospital immediately."
};

export const getWhatsAppLink = (number = DEFAULT_CLINIC_DATA.whatsappNumber, customText = "") => {
  const text = customText || "Hello Gautam ENT Clinic, I would like to book an appointment.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const SERVICES_LIST = [
  {
    id: "ear-infection",
    title: "Ear Infection & Ear Pain",
    category: "Ear",
    shortDescription: "Evaluation for ear ache, discharge, fullness, and middle or outer ear infections.",
    overview: "Ear infections can cause persistent pain, fluid discharge, pressure, or temporary reduced hearing. Professional ENT evaluation helps identify whether the infection affects the outer ear canal or middle ear cavity.",
    symptoms: ["Ear ache or throbbing pain", "Fluid discharge or moisture", "Fullness or blocked feeling", "Mild fever or irritation"],
    whenToSeek: "Seek evaluation if ear pain lasts more than 24–48 hours, if discharge is present, or if pain is accompanied by fever.",
    whatToExpect: "Visual examination using a clean otoscope to inspect the ear canal and eardrum, followed by clear clinical advice.",
    image: "/images/ear-care.svg",
    featured: true
  },
  {
    id: "hearing-loss",
    title: "Hearing Loss Evaluation",
    category: "Ear",
    shortDescription: "Assessment of gradual or sudden hearing changes in adults and children.",
    overview: "Hearing concerns can develop gradually with age or occur suddenly due to blockage, noise exposure, or middle ear conditions. Timely assessment helps determine the underlying cause.",
    symptoms: ["Difficulty hearing speech in noisy places", "Asking others to repeat frequently", "Muffled sounds or sensation of water in ear", "Sudden drop in hearing in one ear"],
    whenToSeek: "Sudden hearing loss requires urgent consultation. Gradual hearing changes should be evaluated for appropriate care.",
    whatToExpect: "Comprehensive history taking, physical otoscopic check, and guidance on further formal audiological testing if needed.",
    image: "/images/hearing-loss.svg",
    featured: true
  },
  {
    id: "tinnitus",
    title: "Tinnitus (Ringing in Ears)",
    category: "Ear",
    shortDescription: "Guidance and evaluation for ringing, buzzing, or whistling sounds in the ears.",
    overview: "Tinnitus is the perception of sound inside the ear without an external sound source. It can range from mild buzzing to persistent ringing that affects rest and concentration.",
    symptoms: ["Ringing, buzzing, or hissing sounds", "Intermittent or continuous noise", "Difficulty concentrating or sleeping"],
    whenToSeek: "Consult an ENT specialist if tinnitus occurs suddenly, is accompanied by hearing loss or dizziness, or affects only one ear.",
    whatToExpect: "Ear check to rule out wax impaction or eardrum issues, followed by personalized lifestyle and management advice.",
    image: "/images/hearing-loss.svg",
    featured: false
  },
  {
    id: "ear-wax",
    title: "Ear Wax & Blocked Ear",
    category: "Ear",
    shortDescription: "Safe clinical removal of impacted ear wax and alleviation of clogged ear sensations.",
    overview: "Cerumen (ear wax) protects the ear canal, but excessive accumulation can cause blockage, itchiness, and mild hearing reduction. Never insert sharp objects or cotton buds deeply.",
    symptoms: ["Ear fullness or plugging", "Mild hearing impairment", "Itchiness or discomfort"],
    whenToSeek: "Visit the clinic when ear wax causes pain, blockage, or reduced hearing instead of self-cleaning with unsafe tools.",
    whatToExpect: "Gentle, gentle clinical examination and safe removal methods by an experienced ENT doctor.",
    image: "/images/ear-wax.svg",
    featured: true
  },
  {
    id: "vertigo-balance",
    title: "Vertigo & Balance Problems",
    category: "Ear",
    shortDescription: "Clinical evaluation for spinning sensations, dizziness, and inner ear balance concerns.",
    overview: "The inner ear plays a critical role in balance. Conditions affecting inner ear fluid or nerve signals can trigger vertigo—a feeling that you or your surroundings are spinning.",
    symptoms: ["Spinning sensation (vertigo)", "Unsteadiness while walking", "Nausea accompanying dizziness", "Lightheadedness on positional changes"],
    whenToSeek: "Consult an ENT specialist when dizziness recurs, causes loss of balance, or is accompanied by ear symptoms.",
    whatToExpect: "Detailed balance examination, positional testing, and targeted guidance.",
    image: "/images/vertigo-care.svg",
    featured: true
  },
  {
    id: "sinusitis",
    title: "Sinusitis & Nasal Care",
    category: "Nose",
    shortDescription: "Evaluation for acute and chronic sinus congestion, facial pressure, and headache.",
    overview: "Sinusitis occurs when tissue lining the sinuses becomes inflamed or swollen. It can be triggered by infections, allergies, or anatomical variations.",
    symptoms: ["Facial pain or pressure around forehead and cheeks", "Nasal congestion and difficulty breathing", "Thick nasal discharge", "Reduced sense of smell"],
    whenToSeek: "If sinus congestion persists beyond 7–10 days or recurs frequently throughout the year.",
    whatToExpect: "Anterior rhinoscopy, evaluation of nasal airflow, and structured treatment planning.",
    image: "/images/sinus-care.svg",
    featured: true
  },
  {
    id: "nasal-allergy",
    title: "Nasal Allergy & Rhinitis",
    category: "Nose",
    shortDescription: "Consultation for persistent sneezing, watery discharge, and allergic rhinitis.",
    overview: "Allergic rhinitis is an allergic reaction to airborne particles like dust mites, pollen, or pet dander, causing inflammation of the nasal lining.",
    symptoms: ["Frequent sneezing bouts in the morning", "Itchy nose, eyes, or throat", "Watery nasal discharge", "Choked or stuffy nose"],
    whenToSeek: "Seek consultation if seasonal or perennial allergies interfere with daily work, sleep, or outdoor activity.",
    whatToExpect: "Allergy symptom assessment, guidance on allergen avoidance, and medical management options.",
    image: "/images/nasal-allergy.svg",
    featured: true
  },
  {
    id: "nasal-blockage",
    title: "Nasal Blockage & Deviated Septum",
    category: "Nose",
    shortDescription: "Evaluation for chronic nasal obstruction, snoring, and septum alignment issues.",
    overview: "A deviated nasal septum or enlarged nasal turbinates can physically obstruct airflow, making mouth breathing necessary.",
    symptoms: ["Difficulty breathing through one or both nostrils", "Frequent sinus infections", "Noisy breathing or snoring"],
    whenToSeek: "If nasal blockage is persistent and does not improve with simple cold remedies.",
    whatToExpect: "Physical examination of nasal passage structure and personalized medical guidance.",
    image: "/images/deviated-septum.svg",
    featured: false
  },
  {
    id: "nosebleed",
    title: "Nosebleed (Epistaxis)",
    category: "Nose",
    shortDescription: "Evaluation for recurring or unexplained nasal bleeding.",
    overview: "Nosebleeds are common due to dry air, allergy rubbing, high blood pressure, or delicate blood vessels in the front of the septum.",
    symptoms: ["Bleeding from one or both nostrils", "Frequent crusting inside the nose"],
    whenToSeek: "Recurrent nosebleeds require ENT evaluation. Heavy, non-stop bleeding is a emergency requiring immediate urgent care.",
    whatToExpect: "Inspection of Little's area in the nasal septum and advice on mucosal hydration and prevention.",
    image: "/images/nosebleed-care.svg",
    featured: false
  },
  {
    id: "throat-tonsil",
    title: "Throat & Tonsil Problems",
    category: "Throat",
    shortDescription: "Care for recurrent sore throat, painful swallowing, tonsillitis, and pharyngitis.",
    overview: "Tonsils and throat tissues can become inflamed due to viral or bacterial exposure, causing severe throat soreness and pain while swallowing.",
    symptoms: ["Pain or scratchiness in the throat", "Difficulty or discomfort swallowing", "Swollen tonsils or throat redness", "Tender neck lymph nodes"],
    whenToSeek: "Consult an ENT doctor if sore throat is severe, accompanied by high fever, or recurs multiple times a year.",
    whatToExpect: "Oral cavity and pharyngeal examination, tonsil grading, and targeted clinical advice.",
    image: "/images/throat-care.svg",
    featured: true
  },
  {
    id: "voice-swallowing",
    title: "Voice & Swallowing Concerns",
    category: "Throat",
    shortDescription: "Evaluation for persistent hoarseness, voice change, and throat tightness.",
    overview: "Hoarseness or voice changes lasting longer than two weeks require professional ENT evaluation to assess the vocal cords.",
    symptoms: ["Rough, breathy, or raspy voice", "Voice fatigue after speaking", "Sensation of a lump in the throat (globus)"],
    whenToSeek: "Any voice change lasting over 14 days without an obvious cold should be checked by an ENT specialist.",
    whatToExpect: "Gentle indirect laryngoscopy or mirror exam to inspect vocal cords.",
    image: "/images/voice-swallowing.svg",
    featured: false
  },
  {
    id: "snoring-sleep",
    title: "Snoring & Sleep ENT Concerns",
    category: "Throat",
    shortDescription: "Initial ENT assessment for loud snoring and upper airway obstruction.",
    overview: "Loud snoring can indicate partial airway obstruction during sleep due to nasal congestion, enlarged tonsils, or palate relaxation.",
    symptoms: ["Loud persistent snoring", "Dry mouth upon waking", "Restless sleep or daytime fatigue"],
    whenToSeek: "When snoring disrupts sleep quality or partner sleep, an upper airway ENT assessment is recommended.",
    whatToExpect: "Nasal, oral, and throat anatomical check to identify physical airway narrowings.",
    image: "/images/snoring-sleep.svg",
    featured: true
  },
  {
    id: "pediatric-ent",
    title: "Pediatric ENT Care",
    category: "Pediatric",
    shortDescription: "Gentle, child-friendly evaluation for pediatric ear infections, tonsils, and adenoids.",
    overview: "Children frequently experience middle ear fluid, enlarged tonsils/adenoids, or nasal allergy symptoms. Our consultation environment is calm and patient-focused.",
    symptoms: ["Frequent ear rubbing or earache in toddlers", "Mouth breathing while sleeping", "Recurrent throat infections"],
    whenToSeek: "When ear infections recur, or when mouth breathing and snoring affect a child's restful sleep.",
    whatToExpect: "Reassuring, non-frightening physical examination tailored to young children.",
    image: "/images/pediatric-ent.svg",
    featured: true
  },
  {
    id: "head-neck",
    title: "Head & Neck Concerns",
    category: "Other",
    shortDescription: "General evaluation for neck swellings, salivary gland issues, and lymph node assessment.",
    overview: "Persistent neck lumps, swollen salivary glands, or unexplained facial swelling warrant thorough clinical assessment by an Otolaryngologist.",
    symptoms: ["Visible or palpable neck lump", "Swelling near jaw or ears", "Painful swelling after eating"],
    whenToSeek: "Any new or growing lump in the neck lasting more than 2 weeks should be evaluated promptly.",
    whatToExpect: "Physical palpation of neck structures and recommendation for ultrasound or further imaging if necessary.",
    image: "/images/head-neck-care.svg",
    featured: false
  }
];

export const CARE_CATEGORIES = [
  {
    title: "Ear Care",
    category: "Ear",
    description: "Diagnosis and care for ear pain, infection, ear wax, tinnitus, and balance disorders.",
    image: "/images/ear-care.svg",
    count: "5 Specializations"
  },
  {
    title: "Nose & Sinus Care",
    category: "Nose",
    description: "Treatment guidance for sinusitis, nasal allergies, deviated septum, and nasal blockages.",
    image: "/images/sinus-care.svg",
    count: "4 Specializations"
  },
  {
    title: "Throat & Voice Care",
    category: "Throat",
    description: "Comprehensive evaluation for sore throat, tonsil issues, voice hoarseness, and snoring.",
    image: "/images/throat-care.svg",
    count: "4 Specializations"
  }
];

export const FAQ_ITEMS = [
  {
    question: "When should I visit an ENT specialist?",
    answer: "You should visit an ENT specialist if you experience persistent ear pain, hearing changes, recurring sinus congestion lasting more than 10 days, long-standing sore throat, voice hoarseness exceeding 2 weeks, or vertigo and dizziness."
  },
  {
    question: "Do you treat children at Gautam ENT Clinic?",
    answer: "Yes, we provide patient-focused pediatric ENT evaluation for common childhood concerns such as ear pain, middle ear fluid, tonsillitis, and nasal allergies in a gentle, reassuring environment."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can submit an appointment request through our online form, call us directly at +91 70145 61171, or send a message on WhatsApp. Our staff will confirm availability."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring any previous medical records, ear/nose scan reports (if available), list of current medications, and a valid photo ID."
  },
  {
    question: "Can I call before visiting?",
    answer: "Yes! We strongly recommend calling +91 70145 61171 before visiting to confirm today's doctor availability and consultation timings."
  },
  {
    question: "Where is Gautam ENT Clinic located in Kota?",
    answer: "We are located at 58, Near Falodi Mart, Shreenath Puram A, Shrinath Puram, Kota, Rajasthan 324010. You can easily find us on Google Maps."
  }
];

export const PATIENT_JOURNEY = [
  {
    step: "01",
    title: "Submit Appointment Request",
    description: "Fill out our quick online request form or call our clinic phone directly."
  },
  {
    step: "02",
    title: "Clinic Confirms Availability",
    description: "Our team reviews your preferred date and contacts you to confirm the exact time slot."
  },
  {
    step: "03",
    title: "Visit for Consultation",
    description: "Arrive at our Shreenath Puram clinic in Kota for a comfortable physical evaluation."
  },
  {
    step: "04",
    title: "Receive Personalized Guidance",
    description: "Get clear explanations, clinical advice, and a personalized care path forward."
  }
];
