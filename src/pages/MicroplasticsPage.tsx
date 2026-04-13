import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import blogMicroWide from '../assets/blog-micro-wide.jpg'

export function MicroplasticsPage() {
  const { t } = useTranslation()
  const paragraphs = t('articles.microplastics.paragraphs', { returnObjects: true }) as string[]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-2xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32 sm:pb-28">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('articles.back')}
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: '#9FC113' }}
        >
          {t('research.eyebrow')}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl"
        >
          {t('articles.microplastics.title')}
        </motion.h1>

        {/* Image — contained, rounded, modest height */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-2xl"
        >
          <img
            src={blogMicroWide}
            alt={t('articles.microplastics.imageAlt')}
            className="h-56 w-full object-cover sm:h-72"
          />
        </motion.div>

        {/* Body paragraphs */}
        <div className="mt-8 space-y-6">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]"
            >
              {para}
            </motion.p>
          ))}
        </div>

      </div>
    </article>
  )
}
