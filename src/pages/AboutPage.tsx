import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AboutStorySection } from '../components/about/AboutStorySection'

const headline =
  'text-balance font-semibold tracking-tight text-stone-900 text-[1.65rem] leading-[1.2] sm:text-3xl sm:leading-[1.15] md:text-[2.125rem] md:leading-[1.12] lg:text-[2.375rem]'

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Vision */}
      <AboutStorySection>
        <p className={headline}>
          Imagine a world where understanding your food is effortless.
        </p>
      </AboutStorySection>

      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>Clean ingredients.</p>
          <p className={headline}>Clear signals.</p>
          <p className={headline}>No guesswork.</p>
        </div>
      </AboutStorySection>

      {/* The Problem */}
      <AboutStorySection>
        <p className={headline}>But today, labels are complex.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Ingredients are hard to interpret.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Important details stay hidden.</p>
      </AboutStorySection>

      {/* Human Reality */}
      <AboutStorySection>
        <p className={headline}>Most people care what they eat.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>They just can't see what matters.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>So choices become assumptions.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>And assumptions become habits.</p>
      </AboutStorySection>

      {/* Transition: The Shift */}
      <AboutStorySection>
        <p className={`${headline} text-stone-800`}>But that's starting to change.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>People are reading labels.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Questioning ingredients.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Looking beyond marketing claims.</p>
      </AboutStorySection>

      {/* Product Introduction */}
      <AboutStorySection>
        <p className={headline}>Nutru exists to make the invisible visible.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Scan any product.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>See what's really inside.</p>
      </AboutStorySection>

      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>Ingredients.</p>
          <p className={headline}>Contaminants.</p>
          <p className={headline}>Quality signals.</p>
        </div>
      </AboutStorySection>

      <AboutStorySection>
        <p className={headline}>Explained in seconds.</p>
      </AboutStorySection>

      <AboutStorySection>
        <div className="mx-auto max-w-lg space-y-6 sm:space-y-8">
          <p className={headline}>No hype.</p>
          <p className={headline}>No noise.</p>
          <p className={headline}>Just clarity.</p>
        </div>
      </AboutStorySection>

      {/* Philosophy */}
      <AboutStorySection>
        <p className={headline}>Because understanding what you eat shouldn't be hard.</p>
      </AboutStorySection>

      <AboutStorySection>
        <p className={`${headline} font-normal text-stone-600`}>It should be natural.</p>
      </AboutStorySection>

      {/* Call to Action */}
      <AboutStorySection className="pb-24 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/#download"
            className="inline-flex rounded-full bg-stone-900 px-9 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get the app
          </Link>
        </motion.div>
      </AboutStorySection>
    </div>
  )
}
