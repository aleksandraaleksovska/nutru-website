import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import blogAdditives from '../assets/blog-additives.webp'
import { ArticleByline, ArticleSources, type ArticleSource } from '../components/ArticleExtras'
import { LocaleLink } from '../components/LocaleLink'

export function AdditivesPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const content = t('articles.additives', { returnObjects: true }) as {
    imageAlt: string
    title: string
    paragraphs: string[]
    classificationTitle: string
    classification: string[]
    tableTitle: string
    tableGreenTitle: string
    tableGreenRows: { code: string; name: string; type: string; note: string }[]
    tableYellowTitle: string
    tableYellowRows: { code: string; name: string; type: string; note: string }[]
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
            src={blogAdditives}
            alt={content.imageAlt}
            className="h-56 w-full object-cover sm:h-72"
          />
        </motion.div>

        {/* Body paragraphs */}
        <div className="mt-8 space-y-6">
          {content.paragraphs.map((para, i) => (
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

        {/* E-number classification list */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold text-stone-900">{content.classificationTitle}</h2>
          <ul className="mt-4 space-y-1.5">
            {content.classification.map((line, i) => (
              <li key={i} className="text-base leading-relaxed text-stone-600">{line}</li>
            ))}
          </ul>
        </motion.div>

        {/* Reference table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold text-stone-900">{content.tableTitle}</h2>

          {/* Green rows */}
          <p className="mt-5 mb-2 text-sm font-semibold text-[#9FC113] uppercase tracking-wide">
            🟢 {content.tableGreenTitle}
          </p>
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-stone-100">
                {content.tableGreenRows.map((row, i) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-800 whitespace-nowrap">{row.code}</td>
                    <td className="px-4 py-3 text-stone-700">{row.name}</td>
                    <td className="hidden px-4 py-3 text-stone-500 sm:table-cell">{row.type}</td>
                    <td className="px-4 py-3 text-stone-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Yellow rows */}
          <p className="mt-6 mb-2 text-sm font-semibold text-amber-500 uppercase tracking-wide">
            🟡 {content.tableYellowTitle}
          </p>
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-stone-100">
                {content.tableYellowRows.map((row, i) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-800 whitespace-nowrap">{row.code}</td>
                    <td className="px-4 py-3 text-stone-700">{row.name}</td>
                    <td className="hidden px-4 py-3 text-stone-500 sm:table-cell">{row.type}</td>
                    <td className="px-4 py-3 text-stone-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <ArticleSources title={content.sourcesTitle} sources={content.sources} />

      </div>
    </article>
  )
}
