import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import blogSnacksWide from '../assets/blog-snacks-wide.webp'
import { ArticleByline, ArticleSources, type ArticleSource } from '../components/ArticleExtras'
import { LocaleLink } from '../components/LocaleLink'

export function SnacksPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const content = t('articles.snacks', { returnObjects: true }) as {
    imageAlt: string
    title: string
    intro: string[]
    sections: { heading: string; paragraphs: string[] }[]
    hiddenTitle: string
    hiddenParagraphs: string[]
    howTitle: string
    howItems: string[]
    howNote: string
    takeaway: string
    author: string
    date: string
    dateLabel: string
    sourcesTitle: string
    sources: ArticleSource[]
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-2xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32 sm:pb-28">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <LocaleLink
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t('articles.back')}
          </LocaleLink>
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
          {content.title}
        </motion.h1>
        <ArticleByline author={content.author} date={content.date} dateLabel={content.dateLabel} />

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 overflow-hidden rounded-2xl"
        >
          <img
            src={blogSnacksWide}
            alt={content.imageAlt}
            className="h-56 w-full object-cover sm:h-72"
          />
        </motion.div>

        {/* Intro paragraphs */}
        <div className="mt-8 space-y-5">
          {content.intro.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Numbered sections */}
        <div className="mt-10 space-y-8">
          {content.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-lg font-semibold text-stone-900">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hidden problem section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <h2 className="text-lg font-semibold text-stone-900">{content.hiddenTitle}</h2>
          <div className="mt-3 space-y-3">
            {content.hiddenParagraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]">{para}</p>
            ))}
          </div>
        </motion.div>

        {/* How to choose section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <h2 className="text-lg font-semibold text-stone-900">{content.howTitle}</h2>
          <ul className="mt-4 space-y-2">
            {content.howItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9FC113]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-[1.0625rem]">{content.howNote}</p>
        </motion.div>

        {/* Takeaway */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-2xl bg-stone-100 px-6 py-5 text-base font-medium leading-relaxed text-stone-700 sm:text-[1.0625rem]"
        >
          {content.takeaway}
        </motion.p>
        <ArticleSources title={content.sourcesTitle} sources={content.sources} />

      </div>
    </article>
  )
}
