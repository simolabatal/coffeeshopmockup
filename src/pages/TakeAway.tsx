import { useEffect, useMemo, useState } from 'react'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import RevealText from '../components/RevealText'
import Photo from '../components/Photo'
import { Plus, Minus, Clock, Check, Pin, ArrowUpRight } from '../components/icons'
import { menuItems, formatPrice, MAPS_URL } from '../lib/data'
import { photos } from '../lib/photos'

type SpotId = 'marrakech' | 'essaouira'
type Size = 'S' | 'M' | 'L'
type Milk = 'Classique' | "Lait d'avoine" | "Lait d'amande"
type Ice = 'Sans glace' | 'Peu' | 'Normal' | 'Beaucoup'

interface Draft {
  itemId: string
  size: Size
  milk: Milk
  ice: Ice
}

interface CartLine {
  key: string
  name: string
  price: number
  size: Size
  milk: Milk
  ice: Ice | null
  qty: number
  photo: string
}

const SIZES: Size[] = ['S', 'M', 'L']
const MILKS: Milk[] = ['Classique', "Lait d'avoine", "Lait d'amande"]
const ICES: Ice[] = ['Sans glace', 'Peu', 'Normal', 'Beaucoup']
const MILK_SURCHARGE = 2

const emptyDraft: Draft = { itemId: '', size: 'M', milk: 'Classique', ice: 'Normal' }

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: T[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="opt">
      <span className="opt__label">{label}</span>
      <div className="opt__options">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className={`opt__choice ${value === o ? 'is-active' : ''}`}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function TakeAway() {
  const [spot, setSpot] = useState<SpotId>('marrakech')
  const [draft, setDraft] = useState<Draft>(emptyDraft)
  const [cart, setCart] = useState<CartLine[]>([])
  const [placed, setPlaced] = useState(false)
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const total = useMemo(() => cart.reduce((sum, l) => sum + l.price * l.qty, 0), [cart])
  const totalQty = useMemo(() => cart.reduce((sum, l) => sum + l.qty, 0), [cart])
  const estimate = totalQty === 0 ? null : Math.min(15 + totalQty * 2, 30)

  const editingItem = menuItems.find((m) => m.id === draft.itemId)
  const previewPhoto = editingItem?.photo ?? cart[cart.length - 1]?.photo ?? photos.coldDrinks

  const startDraft = (itemId: string) => {
    setPlaced(false)
    setDraft({ itemId, size: 'M', milk: 'Classique', ice: 'Normal' })
  }

  const addToCart = () => {
    if (!editingItem) return
    const milkCost = draft.milk !== 'Classique' ? MILK_SURCHARGE : 0
    const price = editingItem.price + milkCost
    const ice = editingItem.category === 'cold' ? draft.ice : null
    const key = `${editingItem.id}-${draft.size}-${draft.milk}-${ice ?? 'none'}`

    setCart((prev) => {
      const existing = prev.find((l) => l.key === key)
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + 1 } : l))
      }
      return [
        ...prev,
        {
          key,
          name: editingItem.name,
          price,
          size: draft.size,
          milk: draft.milk,
          ice,
          qty: 1,
          photo: editingItem.photo,
        },
      ]
    })
    setToast({ id: Date.now(), text: `${editingItem.name} ajouté au panier` })
    setDraft(emptyDraft)
  }

  const changeQty = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((l) => (l.key === key ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    )
  }

  const placeOrder = () => {
    if (totalQty === 0) return
    setPlaced(true)
    setCart([])
    setToast({ id: Date.now(), text: 'Commande de démonstration validée — merci !' })
  }

  return (
    <Page>
      <section className="page-head">
        <div className="container">
          <RevealText className="page-head__title" lines={['Take away.']} />
          <Reveal y={16} delay={0.25}>
            <p className="page-head__subtitle">
              Composez votre boisson, choisissez votre point de retrait, récupérez — simple et rapide.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section takeaway">
        <div className="container">
          <div className="takeaway__layout">
            <div className="takeaway__menu">
              <Reveal className="takeaway__step">
                <span className="step-num">01</span>
                <h2 className="takeaway__heading">Point de retrait</h2>
              </Reveal>
              <Reveal className="spot-select">
                <button
                  type="button"
                  className={`spot-select__card ${spot === 'marrakech' ? 'is-active' : ''}`}
                  onClick={() => setSpot('marrakech')}
                >
                  <span className="spot-select__check">
                    {spot === 'marrakech' && <Check width={14} height={14} />}
                  </span>
                  <span className="spot-select__name">Marrakech Médina</span>
                </button>
                <button
                  type="button"
                  className={`spot-select__card ${spot === 'essaouira' ? 'is-active' : ''}`}
                  onClick={() => setSpot('essaouira')}
                >
                  <span className="spot-select__check">
                    {spot === 'essaouira' && <Check width={14} height={14} />}
                  </span>
                  <span className="spot-select__name">Essaouira</span>
                </button>
              </Reveal>

              <Reveal className="takeaway__step takeaway__step--gap">
                <span className="step-num">02</span>
                <h2 className="takeaway__heading">Votre boisson</h2>
              </Reveal>

              <div className="drinks">
                {menuItems.map((item) => (
                  <Reveal key={item.id} motion={item.category === 'hot' ? 'steam' : 'cold'}>
                    <div className="drink">
                      <div className="drink__thumb">
                        <Photo src={item.photo} alt={item.name} />
                      </div>
                      <div className="drink__info">
                        <div className="drink__name">
                          <h3>{item.name}</h3>
                          <span className={`chip chip--${item.category === 'hot' ? 'hot' : 'cold'}`}>
                            {item.format}
                          </span>
                        </div>
                        <p className="drink__desc">{item.description}</p>
                      </div>
                      <div className="drink__side">
                        <span className="drink__price">{formatPrice(item.price)}</span>
                        <button
                          type="button"
                          className="drink__add"
                          aria-label={`Ajouter ${item.name}`}
                          onClick={() => startDraft(item.id)}
                        >
                          <Plus width={18} height={18} />
                        </button>
                      </div>
                    </div>

                    {editingItem?.id === item.id && (
                      <div className="drink-options">
                        <OptionGroup
                          label="Taille"
                          options={SIZES}
                          value={draft.size}
                          onChange={(v) => setDraft((d) => ({ ...d, size: v }))}
                        />
                        <OptionGroup
                          label="Lait"
                          options={MILKS}
                          value={draft.milk}
                          onChange={(v) => setDraft((d) => ({ ...d, milk: v }))}
                        />
                        {item.category === 'cold' && (
                          <OptionGroup
                            label="Glace"
                            options={ICES}
                            value={draft.ice}
                            onChange={(v) => setDraft((d) => ({ ...d, ice: v }))}
                          />
                        )}
                        <div className="drink-options__footer">
                          <span className="drink-options__price">
                            {formatPrice(item.price + (draft.milk !== 'Classique' ? MILK_SURCHARGE : 0))}
                          </span>
                          <button type="button" className="btn btn--primary btn--sm" onClick={addToCart}>
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="summary">
              <Reveal className="summary__inner">
                <div className="summary__photo">
                  <Photo src={previewPhoto} alt="Boisson sélectionnée" />
                </div>

                <div className="summary__head">
                  <div className="summary__title-row">
                    <h2 className="summary__title">Récapitulatif</h2>
                    {totalQty > 0 && (
                      <span key={totalQty} className="summary__badge">
                        {totalQty}
                      </span>
                    )}
                  </div>
                  <span className="summary__spot">
                    <Pin width={14} height={14} /> {spot === 'marrakech' ? 'Marrakech Médina' : 'Essaouira'}
                  </span>
                </div>

                {cart.length === 0 ? (
                  <p className="summary__empty">
                    {placed
                      ? 'Commande de démonstration validée. Merci !'
                      : 'Votre panier est vide. Ajoutez une boisson pour commencer.'}
                  </p>
                ) : (
                  <>
                    <ul className="summary__lines">
                      {cart.map((l) => (
                        <li key={l.key} className="summary__line">
                          <div className="summary__line-info">
                            <span className="summary__line-name">{l.name}</span>
                            <span className="summary__line-opts">
                              {l.size} · {l.milk}
                              {l.ice ? ` · ${l.ice}` : ''}
                            </span>
                          </div>
                          <div className="summary__line-qty">
                            <button type="button" onClick={() => changeQty(l.key, -1)} aria-label="Diminuer">
                              <Minus width={13} height={13} />
                            </button>
                            <span>{l.qty}</span>
                            <button type="button" onClick={() => changeQty(l.key, 1)} aria-label="Augmenter">
                              <Plus width={13} height={13} />
                            </button>
                          </div>
                          <span className="summary__line-price">{formatPrice(l.price * l.qty)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="summary__row">
                      <span>Total</span>
                      <strong>{formatPrice(total)}</strong>
                    </div>

                    <div className="summary__eta">
                      <Clock width={15} height={15} />
                      <span>Retrait estimé : {estimate ? `≈ ${estimate} min` : '—'}</span>
                    </div>

                    <button type="button" className="btn btn--primary btn--block" onClick={placeOrder}>
                      Commander <ArrowUpRight width={16} height={16} />
                    </button>
                  </>
                )}

                <p className="summary__note">Commande de démonstration — aucun paiement réel.</p>
                <a className="summary__maps" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  <Pin width={14} height={14} /> Localiser le spot sur Google Maps
                </a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {toast && (
        <div className="toast" role="status">
          <span className="toast__icon">
            <Check width={15} height={15} />
          </span>
          {toast.text}
        </div>
      )}
    </Page>
  )
}
