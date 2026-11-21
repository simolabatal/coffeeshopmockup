import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import Button from './Button'
import { Instagram, Close } from './icons'
import { INSTAGRAM_URL } from '../lib/data'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Carte' },
  { to: '/spots', label: 'Spots' },
  { to: '/univers', label: "L'Esprit" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloque le scroll de l'arrière-plan tant que le menu est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Fermeture au clavier (Échap).
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <Wordmark />

          <nav className="header__nav" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <a
              className="header__icon-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @kesh_cup"
            >
              <Instagram width={19} height={19} />
            </a>
            <Button to="/take-away" variant="primary" className="header__cta">
              Commander
            </Button>
            <button
              className="header__burger"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`burger ${open ? 'is-open' : ''}`}>
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile — sibling du header (fixed plein écran, 100% opaque) */}
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu__top">
          <Wordmark />
          <button className="mobile-menu__close" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
            <Close width={22} height={22} />
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Navigation mobile">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="mobile-menu__link"
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <a
            className="mobile-menu__insta"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram width={18} height={18} /> @kesh_cup
          </a>
          <p className="mobile-menu__note">Coffee shop &amp; cold drinks · Take away</p>
        </div>
      </div>
    </>
  )
}
