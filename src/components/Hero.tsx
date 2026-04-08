import { motion } from 'framer-motion'

function AppStoreButtons() {
  return (
    <div
      id="download"
      className="flex flex-wrap items-center justify-center gap-3 pt-2"
    >
      <a
        href="#"
        className="inline-flex h-12 items-center gap-2.5 rounded-full bg-stone-900 px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <svg
          className="h-7 w-7 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-normal opacity-80">Download on the</span>
          <span className="text-[15px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="inline-flex h-12 items-center gap-2.5 rounded-full border border-stone-300 bg-white px-5 text-sm font-medium text-stone-900 transition-colors hover:border-stone-400"
      >
        <svg
          className="h-6 w-6 shrink-0"
          viewBox="0 0 512 512"
          fill="currentColor"
          aria-hidden
        >
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </svg>
        <span className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-normal text-stone-500">Get it on</span>
          <span className="text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-nutru)]"
        >
          Nutrition Intelligence
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-balance text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.08] md:text-[3.25rem]"
        >
          See what&apos;s really inside your food.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-stone-600 sm:text-lg"
        >
          Decode labels, contaminants, and composition in seconds—so every trip
          to the store ends with clarity, not guesswork.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AppStoreButtons />
        </motion.div>
      </div>
    </section>
  )
}
