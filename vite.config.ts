import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function staticRoutes(): Plugin {
  return {
    name: 'static-routes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const pathname = req.url?.split('?')[0] ?? ''
        if (
          pathname.startsWith('/@') ||
          pathname.startsWith('/src/') ||
          pathname.startsWith('/node_modules/') ||
          pathname.startsWith('/assets/') ||
          pathname.includes('.')
        ) {
          return next()
        }
        req.url = '/index.html'
        next()
      })
    },
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          const dist = path.resolve('dist')
          const pathname = decodeURIComponent((req.url ?? '/').split('?')[0] || '/')
          const rel = pathname.replace(/^\//, '')
          const candidates =
            pathname.endsWith('/')
              ? [path.join(dist, rel, 'index.html')]
              : [path.join(dist, `${rel}.html`), path.join(dist, rel, 'index.html')]

          const match = candidates.find((file) => fs.existsSync(file))
          if (match) {
            const served = `/${path.relative(dist, match).split(path.sep).join('/')}`
            req.url = served
            next()
            return
          }

          if (pathname.includes('.')) {
            next()
            return
          }

          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(fs.readFileSync(path.join(dist, '404.html')))
        })
      }
    },
  }
}

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), tailwindcss(), staticRoutes()],
})
