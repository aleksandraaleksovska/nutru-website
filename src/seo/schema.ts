import en from '../i18n/locales/en.json'
import mk from '../i18n/locales/mk.json'
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  SITE_ORIGIN,
  type ArticleKey,
  type Locale,
  type RouteMeta,
} from './routes'

const locales = { en, mk }

type ArticleFields = {
  title: string
  author: string
  date: string
  dateModified: string
}

function articleFields(locale: Locale, key: ArticleKey): ArticleFields {
  return locales[locale].articles[key]
}

export function buildJsonLd(meta: RouteMeta): Record<string, unknown> | undefined {
  if (meta.kind === 'home') {
    const faq = locales[meta.locale].faq.items
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'MobileApplication',
          name: 'Nutru',
          description: meta.description,
          url: meta.canonical,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'iOS, Android',
          inLanguage: meta.locale,
          installUrl: APP_STORE_URL,
          sameAs: [PLAY_STORE_URL],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'FAQPage',
          url: meta.canonical,
          inLanguage: meta.locale,
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        },
      ],
    }
  }

  if (meta.kind === 'article' && meta.articleKey && meta.canonical) {
    const article = articleFields(meta.locale, meta.articleKey)
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: meta.description,
      datePublished: article.date,
      dateModified: article.dateModified,
      inLanguage: meta.locale,
      image: meta.ogImage,
      mainEntityOfPage: meta.canonical,
      author: {
        '@type': 'Organization',
        name: article.author,
        url: SITE_ORIGIN,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Nutru',
        url: SITE_ORIGIN,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_ORIGIN}/icon.jpg`,
        },
      },
    }
  }

  return undefined
}
