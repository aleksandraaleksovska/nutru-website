import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { applyRouteMeta } from '../seo/head'
import { matchRoute } from '../seo/routes'

export function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    applyRouteMeta(matchRoute(pathname))
  }, [pathname])

  return null
}
