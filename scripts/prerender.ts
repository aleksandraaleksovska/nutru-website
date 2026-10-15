import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { renderHeadHtml } from '../src/seo/head.ts'
import { ROBOTS_TXT, matchRoute, prerenderTargets, renderSitemap } from '../src/seo/routes.ts'

const dist = path.resolve('dist')
const templatePath = path.join(dist, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')

if (!template.includes('<!--seo:start-->') || !template.includes('<!--seo:end-->')) {
  throw new Error('SEO markers missing from dist/index.html')
}

const serverEntry = pathToFileURL(path.join(dist, 'server', 'entry-server.js')).href
const { render } = (await import(serverEntry)) as { render: (url: string) => string }

function apply(body: string, pathname: string) {
  const meta = matchRoute(pathname)
  const head = renderHeadHtml(meta)
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${meta.locale}">`)
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, `<!--seo:start-->\n    ${head}\n    <!--seo:end-->`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  if (!html.includes(meta.title)) {
    throw new Error(`Title missing after prerender: ${pathname}`)
  }
  if (!body.includes('<h1')) {
    throw new Error(`Rendered page has no h1: ${pathname}`)
  }
  return html
}

function writePage(pathname: string, file: string) {
  const body = render(pathname)
  const html = apply(body, pathname)
  const target = path.join(dist, file)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, html)
  return body
}

for (const target of prerenderTargets()) {
  const body = writePage(target.path, target.file)
  const meta = matchRoute(target.path)
  if (meta.locale === 'mk' && !body.includes('Преземи ја апликацијата')) {
    throw new Error(`Macedonian chrome missing from ${target.path}`)
  }
  if (meta.locale === 'en' && !body.includes('Get the app')) {
    throw new Error(`English chrome missing from ${target.path}`)
  }
}

writePage('/__not-found__', '404.html')

fs.writeFileSync(path.join(dist, 'sitemap.xml'), renderSitemap())
fs.writeFileSync(path.join(dist, 'robots.txt'), ROBOTS_TXT)

console.log(`Prerendered ${prerenderTargets().length} routes plus 404.html`)
