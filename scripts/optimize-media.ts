import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const webpJobs: Array<{ input: string; output: string; width?: number }> = [
  { input: 'src/assets/blog-micro.jpg', output: 'src/assets/blog-micro.webp', width: 1200 },
  { input: 'src/assets/blog-additives.jpg', output: 'src/assets/blog-additives.webp', width: 1200 },
  { input: 'src/assets/blog-snacks.jpg', output: 'src/assets/blog-snacks.webp', width: 1200 },
  { input: 'src/assets/blog-micro-wide.jpg', output: 'src/assets/blog-micro-wide.webp', width: 1400 },
  { input: 'src/assets/blog-snacks-wide.jpg', output: 'src/assets/blog-snacks-wide.webp', width: 1400 },
  { input: 'src/assets/web-mockup.png', output: 'src/assets/web-mockup.webp', width: 900 },
  { input: 'src/assets/nutru-scan-poster.jpg', output: 'src/assets/nutru-scan-poster.webp', width: 480 },
]

const ogJobs: Array<{ input: string; output: string }> = [
  { input: 'src/assets/web-mockup.png', output: 'public/og.jpg' },
  { input: 'src/assets/blog-micro-wide.jpg', output: 'public/og-microplastics.jpg' },
  { input: 'src/assets/blog-additives-wide.jpg', output: 'public/og-additives.jpg' },
  { input: 'src/assets/blog-snacks-wide.jpg', output: 'public/og-snacks.jpg' },
]

function isFresh(input: string, output: string) {
  if (!fs.existsSync(output)) return false
  return fs.statSync(output).mtimeMs >= fs.statSync(input).mtimeMs
}

for (const job of webpJobs) {
  const input = path.join(root, job.input)
  const output = path.join(root, job.output)
  if (isFresh(input, output)) continue
  await sharp(input)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(output)
  console.log(`webp ${job.output}`)
}

for (const job of ogJobs) {
  const input = path.join(root, job.input)
  const output = path.join(root, job.output)
  if (isFresh(input, output)) continue

  if (job.output.endsWith('/og.jpg')) {
    const phone = await sharp(input)
      .rotate()
      .resize({ height: 560, fit: 'inside' })
      .png()
      .toBuffer()
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: '#f5f5f4',
      },
    })
      .composite([{ input: phone, gravity: 'centre' }])
      .jpeg({ quality: 82 })
      .toFile(output)
  } else {
    await sharp(input)
      .rotate()
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 80 })
      .toFile(output)
  }
  console.log(`og ${job.output}`)
}
