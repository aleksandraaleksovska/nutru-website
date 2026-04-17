import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function DeleteAccountPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 [&_li]:leading-7 [&_p]:leading-7">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t('articles.back')}
        </Link>

        <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
          Delete Account - Nutru
        </h1>

        <section className="mt-8 space-y-3 text-base leading-relaxed text-stone-700">
          <p>
            To request deletion of your Nutru account and associated data, please contact us at{' '}
            <a
              className="text-stone-900 underline decoration-stone-300 underline-offset-2"
              href="mailto:support@nutru.app"
            >
              support@nutru.app
            </a>
            .
          </p>

          <p>When you request deletion:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Your account information, including your email, will be permanently deleted</li>
            <li>Your usage data will be removed from active systems</li>
            <li>Active subscriptions must be cancelled through Google Play before deletion</li>
          </ul>

          <p>Data retention policy:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Subscription and billing records may be retained for legal, tax, or billing obligations</li>
            <li>Any retained data is kept only for the minimum period required by applicable law</li>
          </ul>

          <p>All account deletion requests are processed within 30 days.</p>
        </section>
      </div>
    </article>
  )
}
