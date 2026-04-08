import { Link } from 'react-router-dom'

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Updates', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-black px-5 py-16 text-stone-400 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <Link to="/" className="text-lg font-semibold tracking-tight text-white">
              Nutru
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Nutrition intelligence for people who value substance over hype.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') && link.href !== '#' ? (
                        <Link
                          to={link.href}
                          className="text-sm text-stone-400 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-stone-400 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs text-stone-600 sm:text-left">
          © {new Date().getFullYear()} Nutru. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
