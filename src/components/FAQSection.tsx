import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  const { t } = useTranslation()
  const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section className="border-t border-stone-200/80 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          {t('faq.heading')}
        </motion.h2>
        <div className="mt-12 divide-y divide-stone-200/90">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-stone-700"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-stone-900">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-500"
                    aria-hidden
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>
                <div className={isOpen ? 'grid grid-rows-[1fr]' : 'grid grid-rows-[0fr]'}>
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-stone-600">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
