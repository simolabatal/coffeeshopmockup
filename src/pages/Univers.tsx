import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import Marquee from '../components/Marquee'
import Button from '../components/Button'
import Photo from '../components/Photo'
import { Instagram, Leaf, Sparkle, Snow } from '../components/icons'
import { INSTAGRAM_URL, MARQUEE_ITEMS } from '../lib/data'
import { photos } from '../lib/photos'

const pillars = [
  {
    icon: Sparkle,
    title: 'Latte Art',
    desc: "Un espresso net, un lait vapeur velouté, et un motif dessiné à la main. Chaque tasse est une parenthèse de précision, même à emporter.",
    photo: photos.hotCoffeeLatte,
    alt: 'Latte art sur cappuccino',
  },
  {
    icon: Snow,
    title: 'Cold Drinks',
    desc: 'Cold brew infusé lentement, iced lattes et citronnades maison. Des boissons fraîches, calibrées pour la chaleur et la balade.',
    photo: photos.coldDrinks,
    alt: 'Boisson glacée',
  },
  {
    icon: Leaf,
    title: 'Take Away',
    desc: "Penser l'essentiel, soigner le détail, et tout emporter. Une sélection courte, des formats qui se glissent dans la main.",
    photo: photos.heroCoffee,
    alt: 'Préparation d\u2019un café à emporter',
  },
]

const gallery = [
  { photo: photos.heroCoffee, alt: 'Latte art versé', caption: 'Latte art, dessiné à la main', big: true },
  { photo: photos.coldDrinks, alt: 'Boisson glacée', caption: 'Iced coffee' },
  { photo: photos.coldBrew, alt: 'Café glacé', caption: 'Cold brew, infusion lente' },
  { photo: photos.icedLatte, alt: 'Iced latte', caption: 'Iced latte' },
  { photo: photos.marrakech, alt: 'Ruelle de la Médina de Marrakech', caption: 'Marrakech Médina' },
  { photo: photos.essaouira, alt: "Côte d'Essaouira", caption: 'Essaouira' },
]

export default function Univers() {
  return (
    <Page>
      <section className="page-head">
        <div className="container">
          <RevealText className="page-head__title" lines={["L'esprit Kesh Cup."]} />
          <Reveal y={16} delay={0.25}>
            <p className="page-head__subtitle">
              L'approche latte art &amp; cold drinks — un café précis, des boissons fraîches, zéro superflu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section univers">
        <div className="container">
          <div className="univers__grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="univers__card" motion={i === 1 ? 'cold' : 'steam'}>
                <div className="univers__card-media">
                  <Photo src={p.photo} alt={p.alt} />
                </div>
                <div className="univers__card-body">
                  <span className="univers__icon">
                    <p.icon width={20} height={20} />
                  </span>
                  <h2 className="univers__title">{p.title}</h2>
                  <p className="univers__desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Marquee items={MARQUEE_ITEMS} />

          <div className="univers__gallery-head">
            <Reveal>
              <span className="eyebrow">Galerie</span>
              <h2 className="section__title">Instantanés</h2>
            </Reveal>
          </div>

          <div className="gallery">
            {gallery.map((g) => (
              <Reveal
                key={g.caption}
                y={24}
                className={`gallery__item ${g.big ? 'gallery__item--big' : ''}`}
              >
                <figure className="gallery__figure">
                  <Photo src={g.photo} alt={g.alt} />
                  <figcaption className="gallery__caption">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="univers__cta">
            <Photo src={photos.cappuccino} alt="Cappuccino" />
            <div className="univers__cta-scrim" />
            <div className="univers__cta-content">
              <h2 className="univers__cta-title">Découvrez le quotidien de Kesh Cup.</h2>
              <p className="univers__cta-desc">Boissons du moment, latte art et coulisses, sur Instagram.</p>
              <Button href={INSTAGRAM_URL} variant="primary" magnetic>
                <Instagram width={17} height={17} /> Suivre @kesh_cup
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
