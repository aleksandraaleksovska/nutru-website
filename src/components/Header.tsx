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
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-stone-600 hover:text-stone-900'
                  : 'text-stone-700 hover:text-stone-900',
              )}
            >
              {t('nav.about')}
            </Link>
            <a
              href="/#download"
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5',
                scrolled
                  ? 'bg-stone-900 text-white hover:opacity-90'
                  : 'bg-stone-900 text-white hover:opacity-90',
              )}
            >
              {t('nav.getApp')}
            </a>
            {/* Language switcher — EN | MK with a plain divider, no border */}
            <div className="flex items-center gap-0 text-xs font-semibold uppercase tracking-wide">
              {(['en', 'mk'] as const).map((lang, idx) => (
                <>
                  {idx > 0 && (
                    <span key={`sep-${lang}`} className="text-stone-300 select-none">|</span>
                  )}
                  <button
                    key={lang}
                    onClick={() => i18n.changeLanguage(lang)}
                    aria-label={`Switch to ${lang.toUpperCase()}`}
                    className={cn(
                      'px-2 py-1 transition-colors',
                      i18n.language === lang
                        ? 'text-stone-900'
                        : 'text-stone-400 hover:text-stone-700',
                    )}
                  >
                    {lang.toUpperCase()}
                  </button>
                </>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
