import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '../lib/cn'
import webMockup from '../assets/web-mockup.webp'

type CardTone = 'warning' | 'safe' | 'neutral'
/** Layout side: drives horizontal convergence — right cards move left, left cards move right */
type CardSide = 'left' | 'right'

const cardsMeta: Array<{
  labelKey: string
  detailKey: string
  tone: CardTone
  position: string
  parallax: number
  side: CardSide
}> = [
  {
    labelKey: 'phoneShowcase.cards.additives',
    detailKey: 'phoneShowcase.cards.additives_detail',
    tone: 'safe',
    position:
      'left-[0%] top-[5%] md:left-[5%] md:top-[12%] lg:left-[8%] lg:top-[15%]',
    parallax: 1.12,
    side: 'left',
  },
  {
    labelKey: 'phoneShowcase.cards.ingredients',
    detailKey: 'phoneShowcase.cards.ingredients_detail',
    tone: 'neutral',
    position:
      'right-[0%] top-[7%] md:right-[5%] md:top-[14%] lg:right-[9%] lg:top-[17%]',
    parallax: 1.02,
    side: 'right',
  },
  {
    labelKey: 'phoneShowcase.cards.sugar',
    detailKey: 'phoneShowcase.cards.sugar_detail',
    tone: 'neutral',
    position:
      'left-[-3%] top-[36%] md:left-[2%] md:top-[40%] lg:left-[4%] lg:top-[41%]',
    parallax: 0.95,
    side: 'left',
  },
  {
    labelKey: 'phoneShowcase.cards.allergens',
    detailKey: 'phoneShowcase.cards.allergens_detail',
    tone: 'neutral',
    position:
      'right-[-3%] top-[34%] md:right-[2%] md:top-[38%] lg:right-[5%] lg:top-[39%]',
    parallax: 1.08,
    side: 'right',
  },
  {
    labelKey: 'phoneShowcase.cards.protein',
    detailKey: 'phoneShowcase.cards.protein_detail',
    tone: 'neutral',
    position:
      'left-[1%] bottom-[9%] md:left-[8%] md:bottom-[13%] lg:left-[12%] lg:bottom-[16%]',
    parallax: 1.18,
    side: 'left',
  },
  {
    labelKey: 'phoneShowcase.cards.calories',
    detailKey: 'phoneShowcase.cards.calories_detail',
    tone: 'neutral',
    position:
      'right-[1%] bottom-[7%] md:right-[7%] md:bottom-[11%] lg:right-[11%] lg:bottom-[14%]',
    parallax: 1.0,
    side: 'right',
  },
]

function toneStyles(tone: CardTone) {
  switch (tone) {
    case 'warning':
      return [
        'border border-orange-200/65',
        'bg-white/75',
        'text-stone-900',
        'shadow-[0_12px_40px_-14px_rgba(234,88,12,0.12)]',
      ].join(' ')
    case 'safe':
      return [
        'border border-emerald-200/60',
        'bg-white/75',
        'text-stone-900',
        'shadow-[0_12px_40px_-14px_rgba(16,185,129,0.1)]',
      ].join(' ')
    default:
      return [
        'border border-stone-200/75',
        'bg-white/72',
        'text-stone-900',
        'shadow-[0_12px_40px_-14px_rgba(0,0,0,0.1)]',
      ].join(' ')
  }
}

function Dot({ tone }: { tone: CardTone }) {
  const color =
    tone === 'warning'
      ? 'bg-gradient-to-br from-orange-500 to-red-500'
      : tone === 'safe'
        ? 'bg-emerald-500'
        : 'bg-stone-500'
  return <span className={cn('h-2 w-2 shrink-0 rounded-full', color)} />
}

/** x reaches 0 (phone plane) near this scroll progress */
const CROSS_PROGRESS = 0.38
/** Cards start very close to the phone (reduced from 0.4 to 0.15) */
const START_FR = 0.15
/** Stronger overshoot past center (~+21% vs 1.04) so motion reads on the handset */
const END_FR = 1.26

/**
 * Post-crossing: ease-out on progress so displacement into/overlap builds quickly after x≈0.
 */
function overshootEase(q: number) {
  const clamped = Math.min(1, Math.max(0, q))
  return 1 - (1 - clamped) ** 1.45
}

/**
 * Convergence: very tight starts; x→0 at crossP; second leg overshoots past phone, then opacity drops.
 * Right: +x → 0 → −x. Left: −x → 0 → +x.
 */
function useCardScrollMotion(
  scrollYProgress: MotionValue<number>,
  side: CardSide,
  mult: number,
  index: number,
) {
  const travel =
    (118 + (index % 4) * 14 + (index % 2) * 8) * mult
  const speed = 0.94 + (index % 5) * 0.034
  const crossP = CROSS_PROGRESS + (index % 3) * 0.012

  const x = useTransform(scrollYProgress, (p) => {
    const t = travel * speed
    const q = (p - crossP) / (1 - crossP)
    if (side === 'right') {
      const start = t * START_FR
      const end = -t * END_FR
      if (p <= crossP) {
        return start * (1 - p / crossP)
      }
      return end * overshootEase(q)
    }
    const start = -t * START_FR
    const end = t * END_FR
    if (p <= crossP) {
      return start * (1 - p / crossP)
    }
    return end * overshootEase(q)
  })

  const y = useTransform(scrollYProgress, (p) => {
    const base = (14 + (index % 3) * 4) * mult
    const start = base + 8
    const end = -base - 14
    const q = (p - crossP) / (1 - crossP)
    if (p <= crossP) {
      return start + (0 - start) * (p / crossP)
    }
    return 0 + (end - 0) * overshootEase(q)
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.11, 0.44, 0.48, 0.63, 1],
    [0, 0.42, 1, 1, 0.15, 0, 0],
  )

  return { x, y, opacity }
}

function usePhoneScrollMotion(scrollYProgress: MotionValue<number>) {
  const x = useTransform(scrollYProgress, [0, 1], [5, -5])
  const y = useTransform(scrollYProgress, [0, 1], [7, -9])
  return { x, y }
}

function FloatingCard({
  scrollYProgress,
  index,
  parallaxMult,
  side,
  className,
  label,
  tone,
  detail,
}: {
  scrollYProgress: MotionValue<number>
  index: number
  parallaxMult: number
  side: CardSide
  className: string
  label: string
  tone: CardTone
  detail: string
}) {
  const { x, y, opacity } = useCardScrollMotion(
    scrollYProgress,
    side,
    parallaxMult,
    index,
  )

  return (
    <motion.div
      style={{ x, y, opacity }}
      className={cn(
        'absolute z-10 w-[min(10.75rem,calc(46vw))] sm:w-44 md:w-48',
        className,
      )}
    >
      <div
        className={cn(
          'rounded-2xl px-3.5 py-3 backdrop-blur-md sm:px-4 sm:py-3.5',
          'pointer-events-none will-change-transform',
          toneStyles(tone),
        )}
      >
        <div className="flex items-center gap-2">
          <Dot tone={tone} />
          <span className="text-xs font-semibold tracking-tight">{label}</span>
        </div>
        <p
          className={cn(
            'mt-1.5 text-xs leading-snug sm:text-[13px]',
            tone === 'warning' && 'text-orange-950/85',
            tone === 'safe' && 'text-emerald-950/85',
            tone === 'neutral' && 'text-stone-600',
          )}
        >
          {detail}
        </p>
      </div>
    </motion.div>
  )
}

function PhoneFrame({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { x, y } = usePhoneScrollMotion(scrollYProgress)
  const { t } = useTranslation()

  return (
    <motion.div
      style={{ x, y }}
      className="relative z-[2] w-[min(16.5rem,72vw)] will-change-transform sm:w-72"
    >
      <img
        src={webMockup}
        alt={t('phoneShowcase.phoneAlt')}
        className="w-full h-auto drop-shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)]"
      />
      {/* Bottom fade overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(250, 250, 249, 0) 0%,
            rgba(250, 250, 249, 0.6) 25%,
            rgba(250, 250, 249, 0.9) 50%,
            rgba(250, 250, 249, 1) 75%
          )`,
        }}
      />
    </motion.div>
  )
}

export function PhoneShowcase() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const { t } = useTranslation()

  return (
    <section
      ref={ref}
      className="relative overflow-visible px-3 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12"
    >
      <div className="relative mx-auto min-h-[min(60vh,28rem)] max-w-6xl">
        <div className="relative mx-auto min-h-[420px] w-full max-w-[min(100%,26rem)] md:max-w-5xl md:min-h-[480px] lg:min-h-[520px]">
          <div className="absolute left-1/2 top-[48%] z-[2] flex -translate-x-1/2 -translate-y-1/2 justify-center md:top-1/2">
            <PhoneFrame scrollYProgress={scrollYProgress} />
          </div>

          {cardsMeta.map((c, i) => (
            <FloatingCard
              key={c.labelKey}
              scrollYProgress={scrollYProgress}
              index={i}
              parallaxMult={c.parallax}
              side={c.side}
              label={t(c.labelKey)}
              tone={c.tone}
              detail={t(c.detailKey)}
              className={c.position}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
