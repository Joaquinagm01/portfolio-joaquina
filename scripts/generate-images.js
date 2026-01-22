/* eslint-env node */
/* global process */
/*
  Genera variantes JPG/WEBP/AVIF a 300/600/1200 px a partir de public/profile.jpg
  Requisitos: npm i -D sharp
*/
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const input = path.join(publicDir, 'profile.jpg');
const sizes = [180, 300, 360, 600, 720, 1200];

async function ensureInput() {
  try {
    await fs.access(input);
  } catch {
    console.error('No se encontró public/profile.jpg. Coloca la imagen base allí.');
    process.exit(1);
  }
}

async function generate() {
  await ensureInput();
  for (const width of sizes) {
    const base = path.join(publicDir, `profile-${width}`);
    await sharp(input).resize({ width }).jpeg({ quality: 82 }).toFile(`${base}.jpg`);
    await sharp(input).resize({ width }).webp({ quality: 82 }).toFile(`${base}.webp`);
    await sharp(input).resize({ width }).avif({ quality: 50 }).toFile(`${base}.avif`);
    console.log(`✓ Generado profile-${width}.{jpg,webp,avif}`);
  }
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});
