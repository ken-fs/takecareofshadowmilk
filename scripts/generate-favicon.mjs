import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Purple gradient + milk drop icon SVG
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="256" height="256" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#g)"/>
  <!-- milk drop -->
  <g filter="url(#shadow)">
    <path fill="#fff" d="M32 12c-2 4-10 12-10 19a10 10 0 0 0 20 0c0-7-8-15-10-19z"/>
    <circle cx="32" cy="36" r="3" fill="#f8fafc" opacity="0.9"/>
  </g>
</svg>`;

async function main() {
  const sizes = [16, 32, 48, 64, 128, 256];
  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer())
  );

  const ico = await pngToIco(pngBuffers);

  const outPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  await fs.writeFile(outPath, ico);
  console.log(`Generated favicon: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

