import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { Instagram, Pin } from './icons'
import { INSTAGRAM_URL, MAPS_URL } from '../lib/data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,64 C1332,16 1188,112 1044,64 C900,16 756,112 612,64 C468,16 324,112 180,64 C96,36 36,36 0,64 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="container footer__inner">
        <div className="footer__brand">
          <Wordmark />
          <p className="footer__tagline">Coffee shop &amp; cold drinks · Take away</p>
          <p className="footer__join">Join us for a cup!</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__heading">La Carte</h4>
            <ul className="footer__list">
              <li><Link to="/menu" className="footer__link">Hot Coffee &amp; Latte Art</Link></li>
              <li><Link to="/menu" className="footer__link">Cold Drinks</Link></li>
              <li><Link to="/menu" className="footer__link">Toute la carte</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Nos Spots</h4>
            <ul className="footer__list">
              <li><Link to="/spots" className="footer__link">Marrakech Médina</Link></li>
              <li><Link to="/spots" className="footer__link">Essaouira</Link></li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Pin width={14} height={14} /> Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Take Away</h4>
            <ul className="footer__list">
              <li><Link to="/take-away" className="footer__link">Commander</Link></li>
              <li><Link to="/take-away" className="footer__link">Click &amp; Collect</Link></li>
              <li className="footer__note">Horaires à confirmer</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Suivez-nous</h4>
            <ul className="footer__list">
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--icon">
                  <Instagram width={14} height={14} /> @kesh_cup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Kesh Cup — @kesh_cup</p>
        <p className="footer__mockup">Site mockup non officiel · Coffee shop &amp; cold drinks · Take away</p>
      </div>
    </footer>
  )
}
