import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoMark from '../assets/logo.png'
import { cn } from '../lib/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen])

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
            to="/#top"
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
          <nav className="flex items-center gap-3 sm:gap-6" aria-label="Primary">
            <Link
              to="/#download"
              onClick={() => {
                if (pathname !== '/') return
                requestAnimationFrame(() => {
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
                })
              }}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-all sm:px-5',
                scrolled
                  ? 'bg-stone-900 text-white hover:opacity-90'
                  : 'bg-stone-900 text-white hover:opacity-90',
              )}
            >
              {t('nav.getApp')}
            </Link>
            <Link
              to="/about"
              onClick={() => {
                requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: 'instant' })
                })
              }}
              className={cn(
                'hidden text-sm font-medium transition-colors sm:inline-flex',
                scrolled
                  ? 'text-stone-600 hover:text-stone-900'
                  : 'text-stone-700 hover:text-stone-900',
              )}
            >
              {t('nav.about')}
            </Link>
            {/* Language switcher — EN | MK with a plain divider, no border */}
            <div className="hidden items-center gap-0 text-xs font-semibold uppercase tracking-wide sm:flex">
              {(['en', 'mk'] as const).map((lang, idx) => (
                <span key={lang} className="flex items-center">
                  {idx > 0 && (
                    <span className="select-none text-stone-300">|</span>
                  )}
                  <button
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
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors sm:hidden',
                scrolled
                  ? 'border-stone-300 bg-white text-stone-900 hover:bg-stone-50'
                  : 'border-stone-300/70 bg-white/80 text-stone-900 hover:bg-white',
              )}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-stone-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur-sm sm:hidden">
          <div className="mx-auto max-w-6xl space-y-4">
            <Link
              to="/about"
              onClick={() => {
                setMobileMenuOpen(false)
                requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: 'instant' })
                })
              }}
              className="block text-sm font-medium text-stone-700 transition-colors hover:text-stone-900"
            >
              {t('nav.about')}
            </Link>
            <div className="flex items-center gap-0 text-xs font-semibold uppercase tracking-wide">
              {(['en', 'mk'] as const).map((lang, idx) => (
                <span key={`mobile-${lang}`} className="flex items-center">
                  {idx > 0 && <span className="select-none text-stone-300">|</span>}
                  <button
                    onClick={() => {
                      i18n.changeLanguage(lang)
                      setMobileMenuOpen(false)
                    }}
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
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
