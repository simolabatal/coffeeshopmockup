import { useMemo, useState } from 'react'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import Photo from '../components/Photo'
import PillTabs, { type PillOption } from '../components/PillTabs'
import { Search } from '../components/icons'
import { menuItems, formatPrice } from '../lib/data'

type Filter = 'all' | 'hot' | 'cold' | 'takeaway'

const filters: PillOption<Filter>[] = [
  { id: 'all', label: 'Tout' },
  { id: 'hot', label: 'Hot Coffee & Latte Art' },
  { id: 'cold', label: 'Cold Drinks' },
  { id: 'takeaway', label: 'Take Away' },
]

export default function Menu() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuItems.filter((item) => {
      if (filter === 'hot' && item.category !== 'hot') return false
      if (filter === 'cold' && item.category !== 'cold') return false
      if (filter === 'takeaway' && !item.grabAndGo) return false
      if (q && !`${item.name} ${item.description}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [filter, query])

  return (
    <Page>
      <section className="page-head">
        <div className="container">
          <RevealText className="page-head__title" lines={['La carte.']} />
          <Reveal y={16} delay={0.25}>
            <p className="page-head__subtitle">
              Une sélection courte et précise — café d'exception, latte art et boissons fraîches à emporter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section menu">
        <div className="container">
          <Reveal className="menu__toolbar">
            <div className="menu__search">
              <Search width={18} height={18} className="menu__search-icon" />
              <input
                type="search"
                className="menu__search-input"
                placeholder="Rechercher une boisson…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Rechercher une boisson"
              />
            </div>
            <PillTabs options={filters} value={filter} onChange={setFilter} />
          </Reveal>

          <div className="menu__list">
            {items.length > 0 ? (
              items.map((item) => (
                <Reveal key={item.id} className="menu-row" motion={item.category === 'hot' ? 'steam' : 'cold'}>
                  <div className="menu-row__thumb">
                    <Photo src={item.photo} alt={item.name} />
                  </div>
                  <div className="menu-row__info">
                    <div className="menu-row__name">
                      <h3>{item.name}</h3>
                      {item.tag && <span className="badge">{item.tag}</span>}
                      {item.grabAndGo && <span className="badge badge--soft">À emporter</span>}
                    </div>
                    <p className="menu-row__desc">{item.description}</p>
                  </div>
                  <div className="menu-row__meta">
                    <span className={`chip chip--${item.format === 'Chaud' ? 'hot' : 'cold'}`}>{item.format}</span>
                    <span className="menu-row__price">{formatPrice(item.price)}</span>
                  </div>
                </Reveal>
              ))
            ) : (
              <p className="menu__empty">Aucune boisson ne correspond à votre recherche.</p>
            )}
          </div>

          <p className="menu__note">Aperçu carte — prix indicatifs · Boissons disponibles en take away.</p>
        </div>
      </section>
    </Page>
  )
}
