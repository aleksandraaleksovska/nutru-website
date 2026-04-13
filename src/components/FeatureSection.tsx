import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import nutruScanVideo from '../assets/nutru-scan-video.mp4'

const bullets = [
  {
    titleKey: 'feature.bullets.0.title',
    bodyKey: 'feature.bullets.0.body',
  },
  {
    titleKey: 'feature.bullets.1.title',
    bodyKey: 'feature.bullets.1.body',
  },
  {
    titleKey: 'feature.bullets.2.title',
    bodyKey: 'feature.bullets.2.body',
  },
]

function FeaturePhone() {
  return (
    <div className="relative mx-auto w-[min(15rem,70vw)] sm:mx-0 sm:w-72">
      <video
        src={nutruScanVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto rounded-[2rem] shadow-[0_28px_56px_-20px_rgba(0,0,0,0.3)]"
      />
    </div>
  )
}

export function FeatureSection() {
  const { t } = useTranslation()
  return (
    <section className="border-t border-stone-200/80 bg-[var(--color-surface)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          {t('feature.heading')}
        </motion.h2>
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <FeaturePhone />
          </motion.div>
          <ul className="space-y-10">
            {bullets.map((item, i) => (
              <motion.li
                key={item.titleKey}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-stone-100 pb-10 last:border-0 last:pb-0"
              >
                <h3 className="text-lg font-semibold text-stone-900">{t(item.titleKey)}</h3>
                <p className="mt-2 max-w-md text-pretty leading-relaxed text-stone-600">
                  {t(item.bodyKey)}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
