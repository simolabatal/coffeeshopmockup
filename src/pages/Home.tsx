import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import ScaleIn from '../components/ScaleIn'
import Parallax from '../components/Parallax'
import Marquee from '../components/Marquee'
import Button from '../components/Button'
import Photo from '../components/Photo'
import { ArrowRight, ArrowUpRight, Instagram, Pin } from '../components/icons'
import { photos } from '../lib/photos'
import { INSTAGRAM_URL, MAPS_URL, MARQUEE_ITEMS } from '../lib/data'

const highlights = [
  {
    id: 'hot',
    label: 'Incontournable',
    title: 'Hot Coffee & Latte Art',
    desc: 'Espresso soigné, lait vapeur et un latte art dessiné à la main, dans une tasse à emporter.',
    to: '/menu',
    photo: photos.hotCoffeeLatte,
    alt: 'Cappuccino avec latte art',
  },
  {
    id: 'cold',
    label: 'Incontournable',
    title: 'Cold Drinks',
    desc: 'Cold brew, iced lattes et citronnades fraîches, pensés pour la chaleur et la balade.',
    to: '/menu',
    photo: photos.icedLatte,
    alt: 'Iced latte avec glaçons',
  },
]

const previews = [
  {
    id: 'marrakech',
    district: 'Médina',
    city: 'Marrakech',
    desc: "L'énergie de la Médina, en une tasse à emporter.",
    photo: photos.marrakech,
    alt: 'Ruelle de la Médina de Marrakech',
  },
  {
    id: 'essaouira',
    district: 'Bord de mer',
    city: 'Essaouira',
    desc: "La fraîcheur de l'Atlantique, des cold drinks à emporter.",
    photo: photos.essaouira,
    alt: 'Côte atlantique d\u2019Essaouira',
  },
]

export default function Home() {
  return (
    <Page>
      {/* Hero éditorial */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <RevealText
              className="hero__title"
              lines={['Le goût du café,', 'la fraîcheur en plus.']}
              delay={0.05}
            />
            <Reveal y={20} delay={0.35} className="hero__body">
              <p className="hero__eyebrow">Join us for a cup!</p>
              <p className="hero__subtitle">
                Coffee shop &amp; cold drinks · Take away — Marrakech Médina &amp; Essaouira.
              </p>
              <div className="hero__cta">
                <Button to="/menu" variant="primary" magnetic className="hero__btn">
                  Découvrir la carte <ArrowRight width={17} height={17} />
                </Button>
                <Button to="/take-away" variant="ghost" className="hero__btn">
                  Commander Take Away <ArrowUpRight width={17} height={17} />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="hero__media">
            <ScaleIn className="hero__frame" delay={0.2}>
              <Parallax speed={9} className="hero__frame-parallax">
                <Photo src={photos.heroCoffee} eager alt="Barista versant du latte art en gros plan" />
              </Parallax>
            </ScaleIn>
            <div className="hero__float">
              <span className="hero__float-dot" />
              <div>
                <span className="hero__float-title">Préparé minute</span>
                <span className="hero__float-sub">Marrakech Médina &amp; Essaouira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* Incontournables */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">La carte</span>
            <h2 className="section__title">Les incontournables</h2>
          </Reveal>

          <div className="highlights">
            {highlights.map((h, i) => (
              <Reveal key={h.id} delay={i * 0.08} className="highlights__item" motion={h.id === 'hot' ? 'steam' : 'cold'}>
                <Link to={h.to} className="card">
                  <div className="card__media">
                    <Photo src={h.photo} alt={h.alt} />
                  </div>
                  <div className="card__body">
                    <span className="card__label">{h.label}</span>
                    <h3 className="card__title">{h.title}</h3>
                    <p className="card__desc">{h.desc}</p>
                    <span className="card__link">
                      Voir la carte <ArrowRight width={16} height={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spots */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow">Où nous trouver</span>
            <h2 className="section__title">Deux adresses, un même esprit.</h2>
          </Reveal>

          <div className="spots-grid">
            {previews.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08} className="spots-grid__item">
                <Link to="/spots" className="spot-card">
                  <div className="spot-card__media">
                    <Photo src={s.photo} alt={s.alt} />
                    <div className="spot-card__scrim" />
                    <span className="spot-card__district">{s.district}</span>
                  </div>
                  <div className="spot-card__content">
                    <h3 className="spot-card__city">{s.city}</h3>
                    <p className="spot-card__desc">{s.desc}</p>
                    <span className="spot-card__link">
                      Voir le spot <ArrowRight width={16} height={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA social / maps */}
      <section className="section">
        <div className="container">
          <Reveal className="social-cta">
            <Photo src={photos.heroCoffee} alt="Préparation d'un café" />
            <div className="social-cta__scrim" />
            <div className="social-cta__content">
              <div className="social-cta__text">
                <h2 className="social-cta__title">Rejoignez-nous.</h2>
                <p className="social-cta__desc">
                  Suivez nos boissons du moment et trouvez le spot le plus proche, en un geste.
                </p>
              </div>
              <div className="social-cta__actions">
                <Button href={INSTAGRAM_URL} variant="primary" magnetic>
                  <Instagram width={17} height={17} /> @kesh_cup
                </Button>
                <Button href={MAPS_URL} variant="ghost">
                  <Pin width={17} height={17} /> Google Maps
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
