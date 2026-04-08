import { motion } from 'framer-motion'

const articles = [
  {
    title: 'How mineral balance shapes daily vitality',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    alt: 'Fresh vegetables and ingredients on a surface',
  },
  {
    title: 'Reading labels without the overwhelm',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    alt: 'Produce at a market stall',
  },
  {
    title: 'Emerging research on trace contaminants',
    image:
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    alt: 'Laboratory glassware in soft light',
  },
]

export function ResearchSection() {
  return (
    <section className="bg-[var(--color-surface)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-nutru)]"
        >
          From the desk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          Research & insights
        </motion.h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-stone-200/80"
            >
              <a href="#" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-5 text-lg font-semibold leading-snug text-white">
                    {a.title}
                  </h3>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
