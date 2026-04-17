import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// href values stay static; labels come from i18n
const colHrefs = [
  ['/privacy-policy', '/terms-and-conditions'],
  ['mailto:nutruapp@gmail.com'],
]

export function Footer() {
  const { t } = useTranslation()
  const cols = t('footer.cols', { returnObjects: true }) as Array<{
    title: string
    links: string[]
  }>

  return (
    <footer className="bg-black px-5 py-16 text-stone-400 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <Link to="/" className="text-lg font-semibold tracking-tight text-white">
              Nutru
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="flex items-start justify-between gap-10 lg:justify-end lg:gap-14">
            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              {cols.map((col, ci) => (
                <div key={ci}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((label, li) => {
                      const href = colHrefs[ci][li]
                      return (
                        <li key={li}>
                          {href.startsWith('/') ? (
                            <Link
                              to={href}
                              className="text-sm text-stone-400 transition-colors hover:text-white"
                            >
                              {label}
                            </Link>
                          ) : (
                            <a
                              href={href}
                              className="text-sm text-stone-400 transition-colors hover:text-white"
                            >
                              {label}
                            </a>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-stone-800 pt-8 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Nutru. {t('footer.copyright')}</p>
          <a
            href="https://www.instagram.com/nutru.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-stone-400 transition-colors hover:text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.94a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
