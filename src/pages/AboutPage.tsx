import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AboutStorySection } from '../components/about/AboutStorySection'

const headline =
  'text-balance font-semibold tracking-tight text-stone-900 text-[1.65rem] leading-[1.2] sm:text-3xl sm:leading-[1.15] md:text-[2.125rem] md:leading-[1.12] lg:text-[2.375rem]'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">

      {/* 1 — alone */}
      <AboutStorySection>
        <p className={headline}>{t('about.s1')}</p>
      </AboutStorySection>

      {/* 2 — Clean / Clear / No guesswork */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s2a')}</p>
          <p className={headline}>{t('about.s2b')}</p>
          <p className={headline}>{t('about.s2c')}</p>
        </div>
      </AboutStorySection>

      {/* 3 — labels / interpret / hidden — all three together */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s3')}</p>
          <p className={headline}>{t('about.s4')}</p>
          <p className={headline}>{t('about.s5')}</p>
        </div>
      </AboutStorySection>

      {/* 4 — care / can't see — paired */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s6')}</p>
          <p className={headline}>{t('about.s7')}</p>
        </div>
      </AboutStorySection>

      {/* 5 — choices / habits — paired */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s8')}</p>
          <p className={headline}>{t('about.s9')}</p>
        </div>
      </AboutStorySection>

      {/* 6 — starting to change — alone */}
      <AboutStorySection>
        <p className={`${headline} text-stone-800`}>{t('about.s10')}</p>
      </AboutStorySection>

      {/* 7 — reading / questioning / looking — all three together */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s11')}</p>
          <p className={headline}>{t('about.s12')}</p>
          <p className={headline}>{t('about.s13')}</p>
        </div>
      </AboutStorySection>

      {/* 8 — invisible visible — alone */}
      <AboutStorySection>
        <p className={headline}>{t('about.s14')}</p>
      </AboutStorySection>

      {/* 9 — Ingredients / Contaminants / Quality signals — grouped */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s17a')}</p>
          <p className={headline}>{t('about.s17b')}</p>
          <p className={headline}>{t('about.s17c')}</p>
        </div>
      </AboutStorySection>

      {/* 10 — Explained in seconds — alone */}
      <AboutStorySection>
        <p className={headline}>{t('about.s18')}</p>
      </AboutStorySection>

      {/* 11 — No hype / No noise / Just clarity — grouped */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s19a')}</p>
          <p className={headline}>{t('about.s19b')}</p>
          <p className={headline}>{t('about.s19c')}</p>
        </div>
      </AboutStorySection>

      {/* 12 — shouldn't be hard / natural — paired */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s20')}</p>
          <p className={`${headline} font-normal text-stone-600`}>{t('about.s21')}</p>
        </div>
      </AboutStorySection>

      {/* 13 — Scan any product / See what's really inside — paired */}
      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>{t('about.s15')}</p>
          <p className={headline}>{t('about.s16')}</p>
        </div>
      </AboutStorySection>

      {/* 14 — CTA */}
      <AboutStorySection className="pb-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/#download"
            className="inline-flex rounded-full bg-stone-900 px-9 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('about.cta')}
          </Link>
        </motion.div>
      </AboutStorySection>

    </div>
  )
}
