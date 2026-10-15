import { useTranslation } from 'react-i18next'
import { LocaleLink } from '../components/LocaleLink'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-xl px-5 pb-24 pt-32 text-center sm:pt-40">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {t('notFound.title')}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-stone-600">{t('notFound.body')}</p>
      <LocaleLink
        to="/"
        className="mt-8 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        {t('notFound.home')}
      </LocaleLink>
    </div>
  )
}
