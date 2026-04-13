import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoMark from '../assets/logo.png'
import { cn } from '../lib/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-[background,backdrop-filter,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-stone-200/80 bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto h-16 max-w-6xl sm:h-[4.25rem]">
        <div className="flex h-full items-center justify-between px-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center opacity-100 transition-opacity hover:opacity-80"
            aria-label="Nutru home"
          >
            <img
              src={logoMark}
              alt=""
              width={96}
              height={22}
              className="h-[1.26rem] w-auto sm:h-[1.44rem]"
            />
          </Link>
          <nav
            className="flex items-center gap-4 sm:gap-6"
            aria-label="Primary"
          >
            <Link
              to="/about"
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {t('nav.about')}
            </Link>
            {/* Language switcher — two static pills */}
            <div className={cn(
              'flex items-center rounded-full border text-xs font-semibold uppercase tracking-wide overflow-hidden',
              scrolled
                ? 'border-stone-200'
                : 'border-white/25',
            )}>
              {(['en', 'mk'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  aria-label={`Switch to ${lang.toUpperCase()}`}
                  className={cn(
                    'px-3 py-1.5 transition-colors',
                    i18n.language === lang
                      ? scrolled
                        ? 'bg-stone-900 text-white'
                        : 'bg-white text-stone-900'
                      : scrolled
                        ? 'text-stone-500 hover:text-stone-800'
                        : 'text-white/70 hover:text-white',
                  )}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="/#download"
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-5"
            >
              {t('nav.getApp')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
