import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LETTERS_DIR = path.join(__dirname, '../public/letters');
const MAX_SIZE = 100; // 2x the display size for retina support

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(MAX_SIZE, MAX_SIZE, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (item.endsWith('.png')) {
      const outputPath = fullPath.replace('.png', '.webp');
      await optimizeImage(fullPath, outputPath);
    }
  }
}

async function main() {
  try {
    await processDirectory(LETTERS_DIR);
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

main(); 