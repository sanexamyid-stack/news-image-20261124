// Entry program for the make.fun "news-image-20261124" bounty.
//
// The entry itself is the artwork in entry.png, which sits next to this
// file. All this program has to do is deliver those exact bytes to the
// grader: it copies entry.png into the output directory and then reads
// the copy back to confirm the PNG header survived the trip and that the
// byte count matches the original.
//
// Run it the way the grader does (Node 22, no dependencies):
//   MAKEFUN_OUTPUT_DIR=/output node main.ts
// Locally, point MAKEFUN_OUTPUT_DIR at any scratch folder instead.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
const destPath = join(outDir, 'entry.png');

copyFileSync(sourcePath, destPath);

// Verify the copy before declaring success. Despite the .png name, the
// artwork's bytes are a JPEG — the bounty gate accepts a whole PNG or
// JPEG — so recognise either format by its magic bytes: PNG files start
// with 89 50 4E 47 0D 0A 1A 0A, JPEG files with FF D8 FF. The copy must
// also be exactly as long as the source.
const head = readFileSync(destPath).subarray(0, 8);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = PNG_SIGNATURE.every((byte, i) => head[i] === byte);
const isJpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
const format = isPng ? 'PNG' : isJpeg ? 'JPEG' : null;

const sourceBytes = statSync(sourcePath).size;
const copiedBytes = statSync(destPath).size;

if (format === null) {
  throw new Error(`copied file at ${destPath} starts with neither a PNG nor a JPEG signature`);
}
if (copiedBytes !== sourceBytes) {
  throw new Error(`size mismatch: source is ${sourceBytes} bytes, copy is ${copiedBytes} bytes`);
}

console.log(`entry.png delivered to ${destPath} (${copiedBytes} bytes, ${format} signature OK)`);
