import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import Parallax from '../components/Parallax'
import Button from '../components/Button'
import Photo from '../components/Photo'
import { Pin, ArrowUpRight } from '../components/icons'
import { spots, MAPS_URL } from '../lib/data'
import { photos } from '../lib/photos'

const ambiance = [
  { photo: photos.marrakech, alt: 'Ruelle de la Médina de Marrakech', caption: 'Médina' },
  { photo: photos.essaouira, alt: "Côte d'Essaouira", caption: 'Essaouira' },
  { photo: photos.heroCoffee, alt: 'Geste barista, latte art', caption: 'Geste barista' },
]

export default function Spots() {
  return (
    <Page>
      <section className="page-head">
        <div className="container">
          <RevealText className="page-head__title" lines={['Nos spots.']} />
          <Reveal y={16} delay={0.25}>
            <p className="page-head__subtitle">
              Deux adresses take away, pensées pour la balade — Marrakech Médina &amp; Essaouira.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section spots">
        <div className="container">
          <div className="spots-page">
            {spots.map((spot, i) => (
              <Reveal key={spot.id} y={30} className={`spot-hero ${i % 2 === 1 ? 'spot-hero--flip' : ''}`}>
                <div className="spot-hero__media">
                  <Parallax speed={10}>
                    <Photo src={spot.photo} alt={spot.city} />
                  </Parallax>
                </div>
                <div className="spot-hero__body">
                  <div className="spot-hero__top">
                    <span className="spot-hero__district">{spot.district}</span>
                    <span className="spot-hero__index">0{i + 1}</span>
                  </div>
                  <h2 className="spot-hero__title">{spot.city}</h2>
                  <p className="spot-hero__tagline">{spot.tagline}</p>
                  <p className="spot-hero__desc">{spot.description}</p>
                  <div className="spot-hero__vibe">
                    {spot.vibe.map((v) => (
                      <span className="chip chip--neutral" key={v}>
                        {v}
                      </span>
                    ))}
                  </div>
                  <div className="spot-hero__actions">
                    <Button href={MAPS_URL} variant="primary" magnetic>
                      <Pin width={17} height={17} /> Ouvrir dans Google Maps <ArrowUpRight width={16} height={16} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="ambiance">
            {ambiance.map((a) => (
              <figure className="ambiance__item" key={a.caption}>
                <Photo src={a.photo} alt={a.alt} />
                <figcaption className="ambiance__caption">{a.caption}</figcaption>
              </figure>
            ))}
          </Reveal>

          <Reveal className="spots-note">
            <p>Horaires à confirmer — suivez @kesh_cup pour les annonces.</p>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
