import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directoryPath = path.resolve('public/images/clinic');

if (!fs.existsSync(directoryPath)) {
  console.error('Directory does not exist:', directoryPath);
  process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }
  
  files.forEach((file) => {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputFilePath = path.join(directoryPath, file);
      const outputFileName = file.replace(/\.(jpg|jpeg)$/i, '.webp');
      const outputFilePath = path.join(directoryPath, outputFileName);
      
      let pipeline = sharp(inputFilePath).rotate();
      
      // Resize wide/hero images to 1600px width and portrait to 1000px
      if (file.includes('primary') || file.includes('wide') || file.includes('examination') || file.includes('microscope') || file.includes('entrance') || file.includes('availability')) {
        pipeline = pipeline.resize(1600, null, { fit: 'inside', withoutEnlargement: true });
      } else if (file.includes('vertical')) {
        pipeline = pipeline.resize(1000, null, { fit: 'inside', withoutEnlargement: true });
      } else if (file.includes('certificate')) {
        pipeline = pipeline.resize(1200, null, { fit: 'inside', withoutEnlargement: true });
      } else {
        pipeline = pipeline.resize(1200, null, { fit: 'inside', withoutEnlargement: true });
      }
      
      // Gentle detail enhancement without harsh pixelation/halos, saving at high quality 85%
      pipeline
        .sharpen({ sigma: 0.5 }) // Subtly crispen text and lines
        .webp({ quality: 85, effort: 6 }) // Premium quality compression
        .toFile(outputFilePath)
        .then(() => {
          console.log(`Optimized & Enhanced (HQ): ${file} -> ${outputFileName}`);
        })
        .catch((err) => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});
