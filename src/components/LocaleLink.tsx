import { Link, type LinkProps } from 'react-router-dom'
import { useLocale } from '../seo/useLocale'
import { localizePath } from '../seo/routes'

export function LocaleLink({ to, ...props }: LinkProps) {
  const locale = useLocale()
  const href = typeof to === 'string' && to.startsWith('/') ? localizePath(locale, to) : to
  return <Link to={href} {...props} />
}
