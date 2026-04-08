import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoMark from '../assets/logo.png'
import { cn } from '../lib/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-stone-200/80 bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
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
            className="h-[1.4rem] w-auto sm:h-[1.6rem]"
          />
        </Link>
        <nav
          className="flex items-center gap-6 sm:gap-8"
          aria-label="Primary"
        >
          <Link
            to="/about"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            About
          </Link>
          <a
            href="/#download"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-5"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  )
}
