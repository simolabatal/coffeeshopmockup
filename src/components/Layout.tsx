import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { scrollToTop, refreshScroll } from '../lib/smooth'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop(true)
  }, [pathname])

  useEffect(() => {
    const refresh = () => refreshScroll()
    window.addEventListener('load', refresh)
    if (document.fonts) {
      document.fonts.ready.then(refresh).catch(() => undefined)
    }
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <div className="site">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
