import { buildJsonLd } from './schema'
import type { RouteMeta } from './routes'

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function jsonLdScript(meta: RouteMeta): string | undefined {
  const data = buildJsonLd(meta)
  if (!data) return undefined
  return JSON.stringify(data).replaceAll('<', '\\u003c')
}

export function renderHeadHtml(meta: RouteMeta): string {
  const lines = [
    `<title data-seo>${escapeHtml(meta.title)}</title>`,
    `<meta data-seo name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="robots" content="${meta.indexable ? 'index,follow' : 'noindex,nofollow'}" />`,
  ]

  if (meta.canonical) {
    lines.push(`<link data-seo rel="canonical" href="${escapeHtml(meta.canonical)}" />`)
  }

  for (const link of meta.hreflang) {
    lines.push(
      `<link data-seo rel="alternate" hreflang="${escapeHtml(link.hreflang)}" href="${escapeHtml(link.href)}" />`,
    )
  }

  lines.push(
    `<meta data-seo property="og:type" content="${meta.ogType}" />`,
    `<meta data-seo property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo property="og:image" content="${escapeHtml(meta.ogImage)}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:site_name" content="Nutru" />`,
    `<meta data-seo property="og:locale" content="${meta.locale === 'mk' ? 'mk_MK' : 'en_US'}" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta data-seo name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta data-seo name="twitter:image" content="${escapeHtml(meta.ogImage)}" />`,
  )

  if (meta.canonical) {
    lines.push(`<meta data-seo property="og:url" content="${escapeHtml(meta.canonical)}" />`)
  }

  const jsonLd = jsonLdScript(meta)
  if (jsonLd) {
    lines.push(`<script data-seo id="seo-jsonld" type="application/ld+json">${jsonLd}</script>`)
  }

  return lines.join('\n    ')
}

export function applyRouteMeta(meta: RouteMeta): void {
  document.documentElement.lang = meta.locale
  document.querySelectorAll('[data-seo]').forEach((node) => node.remove())

  const slot = document.createElement('template')
  slot.innerHTML = renderHeadHtml(meta)
  document.head.append(slot.content.cloneNode(true))
}
