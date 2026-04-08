import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-svh bg-[var(--color-surface)] text-stone-900 antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
