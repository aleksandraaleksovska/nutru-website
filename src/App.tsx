import { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Layout } from './components/Layout'
import { Seo } from './components/Seo'
import { createI18n } from './i18n'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { MicroplasticsPage } from './pages/MicroplasticsPage'
import { AdditivesPage } from './pages/AdditivesPage'
import { SnacksPage } from './pages/SnacksPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage'
import { DeleteAccountPage } from './pages/DeleteAccountPage'
import { NotFoundPage } from './pages/NotFoundPage'
import type { Locale } from './seo/routes'

function LocaleLayout({ locale }: { locale: Locale }) {
  const i18n = useMemo(() => createI18n(locale), [locale])

  return (
    <I18nextProvider i18n={i18n}>
      <Seo />
      <Layout />
    </I18nextProvider>
  )
}

function localeRoutes(locale: Locale) {
  return (
    <Route path={locale === 'mk' ? '/mk' : '/'} element={<LocaleLayout locale={locale} />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="research/microplastics" element={<MicroplasticsPage />} />
      <Route path="research/additives" element={<AdditivesPage />} />
      <Route path="research/snacks" element={<SnacksPage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="delete-account" element={<DeleteAccountPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
}

export default function App() {
  return (
    <Routes>
      {localeRoutes('mk')}
      {localeRoutes('en')}
    </Routes>
  )
}
