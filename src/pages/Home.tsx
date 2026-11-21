import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import Parallax from '../components/Parallax'
import Marquee from '../components/Marquee'
import Button from '../components/Button'
import Photo from '../components/Photo'
import { ArrowRight, ArrowUpRight, Pin } from '../components/icons'
import { photos } from '../lib/photos'
import { MAPS_URL, MARQUEE_ITEMS, categories, featuredDrinks, formatPrice } from '../lib/data'

export default function Home() {
  return (
    <Page>
      {/* Hero sombre */}
      <section className="hero-dark">
        <Parallax speed={8} className="hero-dark__parallax">
          <Photo src={photos.coffeeBeans} alt="" />
        </Parallax>
        <div className="hero-dark__scrim" />
        <div className="container hero-dark__inner">
          <RevealText
            className="hero-dark__title"
            lines={['LE GOÛT DU CAFÉ', 'FRESHLY BREWED']}
            delay={0.05}
            stagger={0.12}
          />
          <Reveal y={16} delay={0.25} className="hero-dark__body">
            <p className="hero-dark__eyebrow">Join us for a cup!</p>
            <p className="hero-dark__subtitle">
              Coffee shop &amp; cold drinks · Take away — Marrakech Médina &amp; Essaouira.
            </p>
            <div className="hero-dark__cta">
              <Button to="/take-away" variant="light" magnetic>
                Commander Take Away <ArrowRight width={17} height={17} />
              </Button>
              <Button to="/menu" variant="ghost-light">
                Voir la carte <ArrowUpRight width={16} height={16} />
              </Button>
            </div>
          </Reveal>
        </div>
        <svg className="hero-dark__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C108,112 252,16 396,64 C540,112 684,16 828,64 C972,112 1116,16 1260,64 C1344,92 1404,92 1440,64 L1440,120 L0,120 Z" fill="#F6F9F8" />
        </svg>
      </section>

      {/* Catégories */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Nos Catégories</span>
            <h2 className="section__title">L'essentiel du comptoir</h2>
          </Reveal>

          <div className="categories">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="categories__item">
                <Link to={c.to} className="category-card">
                  <div className="category-card__media">
                    <Parallax speed={8}>
                      <Photo src={c.photo} alt={c.alt} />
                    </Parallax>
                  </div>
                  <div className="category-card__scrim" />
                  <div className="category-card__content">
                    <h3 className="category-card__title">{c.title}</h3>
                    <span className="category-card__link">Voir plus <ArrowRight width={15} height={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Boissons vedettes */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Nos Incontournables</span>
            <h2 className="section__title">À commander sans hésiter</h2>
          </Reveal>

          <div className="featured">
            {featuredDrinks.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08} className="featured__item">
                <div className="featured-card">
                  <span className="featured-card__badge">{d.badge}</span>
                  <div className="featured-card__media">
                    <Photo src={d.photo} alt={d.alt} />
                  </div>
                  <h3 className="featured-card__name">{d.name}</h3>
                  <div className="featured-card__footer">
                    <span className="featured-card__price">{formatPrice(d.price)}</span>
                    <Link to={`/take-away?drink=${d.id}`} className="btn btn--primary btn--sm">
                      Commander
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Spots */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Nos Spots</span>
            <h2 className="section__title">Marrakech &amp; Essaouira</h2>
          </Reveal>

          <div className="spots-home">
            <Reveal className="spots-home__item" delay={0}>
              <a className="spot-card" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <div className="spot-card__media">
                  <Photo src={photos.marrakech} alt="Minaret de la Koutoubia, Marrakech" />
                  <div className="spot-card__scrim" />
                </div>
                <div className="spot-card__content">
                  <span className="spot-card__district">Médina</span>
                  <h3 className="spot-card__city">Marrakech</h3>
                  <p className="spot-card__desc">La Koutoubia et l'énergie de la Médina, en une tasse à emporter.</p>
                  <span className="spot-card__link">
                    <Pin width={15} height={15} /> Google Maps
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal className="spots-home__item" delay={0.08}>
              <a className="spot-card" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <div className="spot-card__media">
                  <Photo src={photos.essaouira} alt="Côte et remparts d'Essaouira" />
                  <div className="spot-card__scrim" />
                </div>
                <div className="spot-card__content">
                  <span className="spot-card__district">Bord de mer</span>
                  <h3 className="spot-card__city">Essaouira</h3>
                  <p className="spot-card__desc">La brise atlantique et des cold drinks pensés pour la balade.</p>
                  <span className="spot-card__link">
                    <Pin width={15} height={15} /> Google Maps
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal className="spots-home__item" delay={0.16}>
              <Link className="spot-card" to="/univers">
                <div className="spot-card__media">
                  <Photo src={photos.heroCoffee} alt="Geste barista, latte art" />
                  <div className="spot-card__scrim" />
                </div>
                <div className="spot-card__content">
                  <span className="spot-card__district">Notre univers</span>
                  <h3 className="spot-card__city">L'Esprit Kesh Cup</h3>
                  <p className="spot-card__desc">Latte art et culture take-away, du geste barista à la tasse.</p>
                  <span className="spot-card__link">
                    Découvrir <ArrowRight width={15} height={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  )
}
