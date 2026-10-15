import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import mk from './locales/mk.json'
import type { Locale } from '../seo/routes'

export function createI18n(locale: Locale) {
  const instance = i18n.createInstance()
  instance.use(initReactI18next).init({
    lng: locale,
    fallbackLng: 'en',
    supportedLngs: ['en', 'mk'],
    resources: {
      en: { translation: en },
      mk: { translation: mk },
    },
    interpolation: { escapeValue: false },
    initAsync: false,
    react: { useSuspense: false },
  })
  return instance
}
