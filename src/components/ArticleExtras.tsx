export type ArticleSource = {
  label: string
  href: string
}

export function ArticleByline({
  author,
  date,
  dateLabel,
}: {
  author: string
  date: string
  dateLabel: string
}) {
  return (
    <p className="mt-4 text-sm text-stone-500">
      <time dateTime={date}>{dateLabel}</time>
      <span aria-hidden="true"> · </span>
      <span>{author}</span>
    </p>
  )
}

export function ArticleSources({ title, sources }: { title: string; sources: ArticleSource[] }) {
  return (
    <section className="mt-12 border-t border-stone-200 pt-8">
      <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              className="text-sm leading-relaxed text-stone-600 underline decoration-stone-300 underline-offset-2 transition-colors hover:text-stone-900"
              rel="noopener noreferrer"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
