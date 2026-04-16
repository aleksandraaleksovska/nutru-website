import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { PhoneShowcase } from '../components/PhoneShowcase'
import { FeatureSection } from '../components/FeatureSection'
import { ResearchSection } from '../components/ResearchSection'
import { FAQSection } from '../components/FAQSection'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#download') {
      requestAnimationFrame(() => {
        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    if (hash === '#top') {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    }
  }, [hash])

  return (
    <>
      <Hero />
      <PhoneShowcase />
      <FeatureSection />
      <ResearchSection />
      <FAQSection />
    </>
  )
}
