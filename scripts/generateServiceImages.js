import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('public/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const services = [
  { file: 'ear-care.svg', title: 'Ear Care & Infection Evaluation', color1: '#0B3C5D', color2: '#087F8C', icon: 'ear' },
  { file: 'hearing-loss.svg', title: 'Hearing Loss & Audiology Assessment', color1: '#087F8C', color2: '#20A779', icon: 'hearing' },
  { file: 'ear-wax.svg', title: 'Ear Wax & Blocked Ear Care', color1: '#0B3C5D', color2: '#1B527A', icon: 'clean' },
  { file: 'sinus-care.svg', title: 'Sinusitis & Nasal Care', color1: '#066570', color2: '#0B3C5D', icon: 'sinus' },
  { file: 'nasal-allergy.svg', title: 'Nasal Allergy & Congestion', color1: '#087F8C', color2: '#0B3C5D', icon: 'allergy' },
  { file: 'throat-care.svg', title: 'Throat & Tonsil Care', color1: '#0B3C5D', color2: '#087F8C', icon: 'throat' },
  { file: 'vertigo-care.svg', title: 'Vertigo & Balance Assessment', color1: '#1B527A', color2: '#087F8C', icon: 'balance' },
  { file: 'pediatric-ent.svg', title: 'Child-Friendly Pediatric ENT', color1: '#087F8C', color2: '#20A779', icon: 'child' },
  { file: 'snoring-sleep.svg', title: 'Snoring & Sleep ENT Assessment', color1: '#0B3C5D', color2: '#066570', icon: 'sleep' },
  { file: 'nosebleed-care.svg', title: 'Nosebleed & Nasal Care', color1: '#066570', color2: '#0B3C5D', icon: 'nosebleed' },
  { file: 'voice-swallowing.svg', title: 'Voice & Swallowing Evaluation', color1: '#0B3C5D', color2: '#1B527A', icon: 'voice' },
  { file: 'deviated-septum.svg', title: 'Nasal Blockage & Septum Care', color1: '#087F8C', color2: '#0B3C5D', icon: 'septum' },
  { file: 'head-neck-care.svg', title: 'Head & Neck Evaluation', color1: '#0B3C5D', color2: '#20A779', icon: 'neck' },
  { file: 'clinic-room.svg', title: 'Clean Modern ENT Consultation Room', color1: '#087F8C', color2: '#0B3C5D', icon: 'room' },
];

const generateSvg = (service) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="grad-${service.file}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${service.color1}" />
      <stop offset="100%" stop-color="${service.color2}" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#grad-${service.file})" rx="20" />
  
  <circle cx="500" cy="80" r="120" fill="#FFFFFF" fill-opacity="0.06" />
  <circle cx="100" cy="320" r="100" fill="#FFFFFF" fill-opacity="0.06" />
  
  <g transform="translate(250, 120)" fill="none" stroke="#EAF9FA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="50" fill="#FFFFFF" fill-opacity="0.1" stroke="#20A779" stroke-width="4"/>
    <path d="M 30 50 L 50 70 L 85 35" stroke="#F26B5B" stroke-width="6"/>
  </g>

  <!-- Overlay Text Card -->
  <rect x="30" y="290" width="540" height="80" rx="14" fill="#0B3C5D" fill-opacity="0.9" stroke="#EAF9FA" stroke-opacity="0.15" />
  <text x="50" y="328" font-family="Inter, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">${service.title}</text>
  <text x="50" y="352" font-family="Inter, sans-serif" font-size="13" fill="#D5F3F5">Gautam ENT Clinic • Kota, Rajasthan</text>
</svg>
`;

services.forEach((s) => {
  const filePath = path.join(outputDir, s.file);
  fs.writeFileSync(filePath, generateSvg(s).trim());
  console.log(`Created: ${s.file}`);
});
