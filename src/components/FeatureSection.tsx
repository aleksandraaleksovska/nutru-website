import { motion } from 'framer-motion'

const bullets = [
  {
    title: 'Scan any product',
    body: 'Point your camera at a label or barcode—Nutru reads ingredients and sourcing signals in one pass.',
  },
  {
    title: 'Get instant analysis',
    body: 'See how compounds stack up against trusted thresholds, with plain-language context you can act on.',
  },
  {
    title: 'Make smarter choices',
    body: 'Compare options side by side and build habits that match your health goals without the noise.',
  },
]

function FeaturePhone() {
  return (
    <div className="relative mx-auto w-[min(15rem,70vw)] sm:mx-0 sm:w-60">
      <div className="rounded-[2rem] border-[9px] border-stone-900 bg-stone-900 shadow-[0_28px_56px_-20px_rgba(0,0,0,0.3)]">
        <div className="overflow-hidden rounded-[1.45rem] bg-stone-100">
          <div className="flex justify-center pt-2.5 pb-2">
            <div className="h-1 w-12 rounded-full bg-stone-300" />
          </div>
          <div className="px-3.5 pb-6 pt-1">
            <div className="mx-auto mb-4 flex aspect-[4/3] items-center justify-center rounded-xl bg-white shadow-inner ring-1 ring-stone-200/80">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-nutru)]/15 text-[var(--color-nutru)]">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.725c.621 0 1.125.504 1.125 1.125v4.725c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 9.6V4.875ZM3.75 14.25c0-.621.504-1.125 1.125-1.125h4.725c.621 0 1.125.504 1.125 1.125v4.725c0 .621-.504 1.125-1.125 1.125H4.875a1.125 1.125 0 0 1-1.125-1.125v-4.725ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.725c.621 0 1.125.504 1.125 1.125v4.725c0 .621-.504 1.125-1.125 1.125h-4.725A1.125 1.125 0 0 1 13.5 9.6V4.875ZM13.5 14.25c0-.621.504-1.125 1.125-1.125h4.725c.621 0 1.125.504 1.125 1.125v4.725c0 .621-.504 1.125-1.125 1.125h-4.725a1.125 1.125 0 0 1-1.125-1.125v-4.725Z"
                    />
                  </svg>
                </div>
                <p className="text-[11px] font-medium text-stone-500">Align to frame</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-3/4 rounded-full bg-stone-200" />
              <div className="h-2.5 w-1/2 rounded-full bg-stone-200/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureSection() {
  return (
    <section className="border-t border-stone-200/80 bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          Scan before you buy
        </motion.h2>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <FeaturePhone />
          </motion.div>
          <ul className="space-y-10">
            {bullets.map((item, i) => (
              <motion.li
                key={item.title}
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
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 max-w-md text-pretty leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
