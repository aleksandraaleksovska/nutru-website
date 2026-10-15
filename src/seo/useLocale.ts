import { useLocation } from 'react-router-dom'
import { localeFromPath, type Locale } from './routes'

export function useLocale(): Locale {
  const { pathname } = useLocation()
  return localeFromPath(pathname)
}
