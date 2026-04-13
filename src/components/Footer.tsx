import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// href values stay static; labels come from i18n
const colHrefs = [
  ['#', '#', '#'],
  ['/about', '#', '#'],
  ['#', '#', '#'],
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
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
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
        <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs text-stone-600 sm:text-left">
          © {new Date().getFullYear()} Nutru. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
