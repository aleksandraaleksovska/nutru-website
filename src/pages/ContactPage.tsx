import { type FormEvent, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactPage() {
  const { t, i18n } = useTranslation()
  const isMk = i18n.language?.toLowerCase().startsWith('mk')
  const [form, setForm] = useState<FormState>(initialState)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.subject.trim() && form.message.trim()
  }, [form])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canSubmit) return

    const bodyLines = [
      `${isMk ? 'Име' : 'Name'}: ${form.name}`,
      `${isMk ? 'Е-пошта' : 'Email'}: ${form.email}`,
      '',
      form.message,
    ]
    const subject = encodeURIComponent(`[Nutru Contact] ${form.subject}`)
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:nutruapp@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <article className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t('articles.back')}
        </Link>

        <div className="mt-8 space-y-4">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl">
            {t('contact.title')}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">{t('contact.subtitle')}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">{t('contact.fields.name')}</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder={t('contact.placeholders.name')}
                className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-stone-500"
                required
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-stone-700">{t('contact.fields.email')}</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder={t('contact.placeholders.email')}
                className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-stone-500"
                required
              />
            </label>
          </div>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-stone-700">{t('contact.fields.subject')}</span>
            <input
              type="text"
              value={form.subject}
              onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
              placeholder={t('contact.placeholders.subject')}
              className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-stone-500"
              required
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-stone-700">{t('contact.fields.message')}</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder={t('contact.placeholders.message')}
              className="min-h-36 w-full resize-y rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none transition-colors focus:border-stone-500"
              required
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-500">{t('contact.helper')}</p>
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('contact.submit')}
            </button>
          </div>
          {sent && <p className="text-sm font-medium text-emerald-700">{t('contact.success')}</p>}
        </form>
      </div>
    </article>
  )
}
