export const SITE_ORIGIN = 'https://nutru.app'

export const APP_STORE_URL = 'https://apps.apple.com/at/app/nutru/id6761933899'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nutru.app'

export type Locale = 'en' | 'mk'
export type PageId =
  | 'home'
  | 'about'
  | 'microplastics'
  | 'additives'
  | 'snacks'
  | 'privacy'
  | 'terms'
  | 'delete-account'
  | 'not-found'

export type PageKind = 'home' | 'article' | 'page' | 'not-found'
export type ArticleKey = 'microplastics' | 'additives' | 'snacks'

type PageDef = {
  id: PageId
  path: string
  indexable: boolean
  kind: PageKind
  ogImage: string
  articleKey?: ArticleKey
}

type PageCopy = {
  title: string
  description: string
}

export const PAGES: PageDef[] = [
  { id: 'home', path: '/', indexable: true, kind: 'home', ogImage: '/og.jpg' },
  { id: 'about', path: '/about', indexable: true, kind: 'page', ogImage: '/og.jpg' },
  {
    id: 'microplastics',
    path: '/research/microplastics',
    indexable: true,
    kind: 'article',
    articleKey: 'microplastics',
    ogImage: '/og-microplastics.jpg',
  },
  {
    id: 'additives',
    path: '/research/additives',
    indexable: true,
    kind: 'article',
    articleKey: 'additives',
    ogImage: '/og-additives.jpg',
  },
  {
    id: 'snacks',
    path: '/research/snacks',
    indexable: true,
    kind: 'article',
    articleKey: 'snacks',
    ogImage: '/og-snacks.jpg',
  },
  { id: 'privacy', path: '/privacy-policy', indexable: true, kind: 'page', ogImage: '/og.jpg' },
  { id: 'terms', path: '/terms-and-conditions', indexable: true, kind: 'page', ogImage: '/og.jpg' },
  {
    id: 'delete-account',
    path: '/delete-account',
    indexable: false,
    kind: 'page',
    ogImage: '/og.jpg',
  },
  { id: 'not-found', path: '/404', indexable: false, kind: 'not-found', ogImage: '/og.jpg' },
]

const COPY: Record<Locale, Record<PageId, PageCopy>> = {
  en: {
    home: {
      title: 'Scan Food Barcodes for Ingredients and Additives | Nutru',
      description:
        'Scan a barcode or ingredient label and see additives, allergens, and contaminants explained in plain language. Download free on the App Store and Google Play.',
    },
    about: {
      title: 'About Nutru | Scanner for Food Labels and Additives',
      description:
        'Nutru is a food product information app. It reads a barcode or label and explains ingredients, additives, allergens, and contaminants in plain language.',
    },
    microplastics: {
      title: 'Microplastics in Bottled Water: Hidden Truth | Nutru',
      description:
        'What published research has found about plastic particles in bottled water, where they come from, and everyday swaps that can lower how many you drink.',
    },
    additives: {
      title: 'Food Additives and E-Numbers: Safe or Scary? | Nutru',
      description:
        'What an E-number on a food label means, how EFSA tests and evaluates food additives, and why that code is a safety check rather than a warning sign.',
    },
    snacks: {
      title: 'Ultra-Processed Healthy Snacks, Explained | Nutru',
      description:
        'Why many snacks sold as healthy are ultra-processed, how to read past the front of the pack, and what to look for on the ingredients list instead.',
    },
    privacy: {
      title: 'Nutru Privacy Policy | How Your Scan Data Is Used',
      description:
        'How Nutru collects, uses, and protects personal data when you scan products, including the GDPR legal bases and how to contact us about your rights.',
    },
    terms: {
      title: 'Nutru Terms and Conditions | Accounts and App Use',
      description:
        'The terms for using the Nutru app, including accounts, product data, subscriptions, acceptable use, and the limits of the nutrition information we show.',
    },
    'delete-account': {
      title: 'Delete Your Nutru Account | Data Removal Request',
      description:
        'How to ask Nutru to delete your account, and what happens to your email, usage data, and billing records after you send the request.',
    },
    'not-found': {
      title: 'Page not found | Nutru',
      description: 'This page does not exist. Go back to Nutru to scan a food barcode and read the ingredients.',
    },
  },
  mk: {
    home: {
      title: 'Скенирај баркод и види состојки, адитиви и алергени | Nutru',
      description:
        'Скенирај баркод или етикета и за неколку секунди види адитиви, алергени и контаминанти објаснети на јасен јазик. Бесплатно на App Store и Google Play.',
    },
    about: {
      title: 'За Nutru | Скенер за етикети, состојки и адитиви во храна',
      description:
        'Nutru е апликација за информации за прехранбени производи. Го чита баркодот или етикетата и на јасен јазик ги објаснува состојките, адитивите и контаминантите.',
    },
    microplastics: {
      title: 'Микропластика во флаширана вода: што велат студиите | Nutru',
      description:
        'Што покажале објавените истражувања за пластични честички во флаширана вода, од каде доаѓаат и кои секојдневни промени можат да го намалат внесот.',
    },
    additives: {
      title: 'Адитиви и Е-броеви: безбедни или страшни? | Nutru',
      description:
        'Што значат Е-броевите на етикетата на храната, како EFSA ги оценува адитивите и зошто тој код е безбедносна проверка, а не знак за тревога.',
    },
    snacks: {
      title: 'Ултра-преработени „здрави“ грицки, објаснето | Nutru',
      description:
        'Зошто многу грицки што се продаваат како здрави се ултра-преработени, како да ја читаш листата на состојки и што да бараш наместо тврдењата од пакувањето.',
    },
    privacy: {
      title: 'Политика за приватност на Nutru | Податоци од скенирање',
      description:
        'Како Nutru ги собира, користи и штити личните податоци кога скенираш производи, вклучувајќи ги основите според GDPR и како да не контактираш.',
    },
    terms: {
      title: 'Услови за користење на Nutru | Сметки и апликација',
      description:
        'Условите за користење на апликацијата Nutru: сметки, податоци за производи, претплати, дозволена употреба и границите на нутритивните информации.',
    },
    'delete-account': {
      title: 'Избриши ја сметката на Nutru | Барање за бришење',
      description:
        'Како да побараш Nutru да ја избрише твојата сметка и што се случува со е-поштата, податоците за користење и записите за наплата.',
    },
    'not-found': {
      title: 'Страницата не постои | Nutru',
      description: 'Оваа страница не постои. Врати се на Nutru за да скенираш баркод и да ги прочиташ состојките.',
    },
  },
}

export type HreflangLink = {
  hreflang: string
  href: string
}

export type RouteMeta = {
  id: PageId
  locale: Locale
  pathname: string
  title: string
  description: string
  canonical?: string
  indexable: boolean
  ogImage: string
  ogType: 'website' | 'article'
  hreflang: HreflangLink[]
  kind: PageKind
  articleKey?: ArticleKey
}

export function splitHash(path: string): { pathname: string; hash: string } {
  const index = path.indexOf('#')
  if (index === -1) return { pathname: path || '/', hash: '' }
  return { pathname: path.slice(0, index) || '/', hash: path.slice(index) }
}

export function normalizePathname(pathname: string): string {
  if (!pathname.startsWith('/')) pathname = `/${pathname}`
  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1)
  return pathname
}

export function localeFromPath(pathname: string): Locale {
  const path = normalizePathname(pathname)
  return path === '/mk' || path.startsWith('/mk/') ? 'mk' : 'en'
}

export function stripLocale(pathname: string): string {
  const path = normalizePathname(pathname)
  if (path === '/mk') return '/'
  if (path.startsWith('/mk/')) return path.slice(3) || '/'
  return path
}

export function localizePath(locale: Locale, path: string): string {
  const { pathname, hash } = splitHash(path)
  const bare = stripLocale(pathname.startsWith('/') ? pathname : `/${pathname}`)
  const localized = locale === 'en' ? bare : bare === '/' ? '/mk' : `/mk${bare}`
  return `${localized}${hash}`
}

export function absoluteUrl(pathname: string): string {
  return `${SITE_ORIGIN}${pathname}`
}

export function hreflangFor(barePath: string): HreflangLink[] {
  const english = absoluteUrl(localizePath('en', barePath))
  const macedonian = absoluteUrl(localizePath('mk', barePath))
  return [
    { hreflang: 'en', href: english },
    { hreflang: 'mk', href: macedonian },
    { hreflang: 'x-default', href: english },
  ]
}

function pageByBarePath(barePath: string): PageDef | undefined {
  return PAGES.find((page) => page.id !== 'not-found' && page.path === barePath)
}

export function matchRoute(pathname: string, assetOrigin = SITE_ORIGIN): RouteMeta {
  const path = normalizePathname(splitHash(pathname).pathname)
  const locale = localeFromPath(path)
  const bare = stripLocale(path)
  const page = pageByBarePath(bare) ?? PAGES.find((item) => item.id === 'not-found')!
  const copy = COPY[locale][page.id]
  const localized = page.id === 'not-found' ? path : localizePath(locale, page.path)
  const indexable = page.indexable
  const imageOrigin = assetOrigin.replace(/\/$/, '')
  return {
    id: page.id,
    locale,
    pathname: localized,
    title: copy.title,
    description: copy.description,
    canonical: indexable ? absoluteUrl(localized) : undefined,
    indexable,
    ogImage: `${imageOrigin}${page.ogImage}`,
    ogType: page.kind === 'article' ? 'article' : 'website',
    hreflang: indexable ? hreflangFor(page.path) : [],
    kind: page.kind,
    articleKey: page.articleKey,
  }
}

export function prerenderTargets(): Array<{ path: string; file: string }> {
  return PAGES.filter((page) => page.id !== 'not-found').flatMap((page) =>
    (['en', 'mk'] as const).map((locale) => {
      const path = localizePath(locale, page.path)
      const file = path === '/' ? 'index.html' : `${path.slice(1)}/index.html`
      return { path, file }
    }),
  )
}

export function renderSitemap(): string {
  const urls = PAGES.filter((page) => page.indexable).flatMap((page) =>
    (['en', 'mk'] as const).map((locale) => {
      const loc = absoluteUrl(localizePath(locale, page.path))
      const links = hreflangFor(page.path)
        .map(
          (link) =>
            `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`,
        )
        .join('\n')
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-10-15</lastmod>\n${links}\n  </url>`
    }),
  )

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
}

export const ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`
