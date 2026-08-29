import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\6e72de98-50f7-4f2d-a254-751f331314b8';
const destDir = 'c:\\Users\\Lenovo\\Documents\\Gautam Ent clinic\\gautam-ent-clinic\\client\\public\\images\\ai-services';

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

const imagesToProcess = [
  {
    src: path.join(brainDir, 'consultation_env_1786800554119.jpg'),
    destName: 'consultation-env.webp',
    width: 1920,
    height: 1080,
  },
  {
    src: path.join(brainDir, 'microscope_tech_1786800618295.jpg'),
    destName: 'microscope-tech.webp',
    width: 1920,
    height: 1080,
  },
  {
    src: path.join(brainDir, 'ear_care_1786800689901.jpg'),
    destName: 'ear-care.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'hearing_audiometry_1786801252937.jpg'),
    destName: 'hearing-audiometry.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'sinus_care_1786801520189.jpg'),
    destName: 'sinus-care.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'throat_care_1786801639599.jpg'),
    destName: 'throat-care.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'breathing_snoring_1786801830331.jpg'),
    destName: 'breathing-snoring.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'pediatric_ent_1786806688431.jpg'),
    destName: 'pediatric-ent.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'hearing_loss_aid_1786807711730.jpg'),
    destName: 'hearing-loss-aid.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'ear_wax_removal_1786807806741.jpg'),
    destName: 'ear-wax-removal.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'tinnitus_therapy_1786807994334.jpg'),
    destName: 'tinnitus-therapy.webp',
    width: 1600,
    height: 1200,
  },
  {
    src: path.join(brainDir, 'nasal_allergy_1786808030410.jpg'),
    destName: 'nasal-allergy-treatment.webp',
    width: 1600,
    height: 1200,
  }
];

async function run() {
  for (const img of imagesToProcess) {
    if (!fs.existsSync(img.src)) {
      console.error(`Source file does not exist: ${img.src}`);
      continue;
    }
    const destPath = path.join(destDir, img.destName);
    console.log(`Processing ${img.src} -> ${destPath} (${img.width}x${img.height})...`);
    try {
      await sharp(img.src)
        .resize(img.width, img.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`Successfully written: ${img.destName}`);
    } catch (err) {
      console.error(`Failed to process ${img.destName}:`, err);
    }
  }
  console.log('All image processing complete.');
}

run();
