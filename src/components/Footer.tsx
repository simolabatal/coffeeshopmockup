import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { Instagram, Pin } from './icons'
import { INSTAGRAM_URL, MAPS_URL } from '../lib/data'

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Carte' },
  { to: '/take-away', label: 'Take Away' },
  { to: '/spots', label: 'Nos Spots' },
  { to: '/univers', label: "L'Esprit Kesh Cup" },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Wordmark />
            <p className="footer__tagline">Coffee shop &amp; cold drinks · Take away</p>
            <p className="footer__join">Join us for a cup!</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__list">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Nos spots</h4>
            <ul className="footer__list">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Pin width={15} height={15} /> Marrakech Médina
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Pin width={15} height={15} /> Essaouira
                </a>
              </li>
            </ul>
            <p className="footer__note">Horaires à confirmer</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Suivre</h4>
            <ul className="footer__list">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Instagram width={15} height={15} /> @kesh_cup
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Pin width={15} height={15} /> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Kesh Cup — @kesh_cup</p>
          <p className="footer__mockup">Site mockup non officiel · Coffee shop &amp; cold drinks · Take away</p>
        </div>
      </div>
    </footer>
  )
}
