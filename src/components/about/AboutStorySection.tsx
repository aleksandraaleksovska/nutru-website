import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type AboutStorySectionProps = {
  children: ReactNode
  className?: string
}

/**
 * Full-viewport narrative beat — white field, centered copy, calm entrance.
 */
export function AboutStorySection({ children, className }: AboutStorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex min-h-[100dvh] flex-col items-center justify-center',
        'bg-white px-6 pt-[5.5rem] pb-16 sm:px-10 sm:pt-24 sm:pb-20',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl">{children}</div>
    </motion.section>
  )
}
