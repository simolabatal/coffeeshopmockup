import { useLayoutEffect, useRef, useState } from 'react'

export interface PillOption<T extends string> {
  id: T
  label: string
}

export default function PillTabs<T extends string>({
  options,
  value,
  onChange,
}: {
  options: PillOption<T>[]
  value: T
  onChange: (id: T) => void
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const el = wrap.current
    if (!el) return
    const measure = () => {
      const active = el.querySelector<HTMLElement>('.pill.is-active')
      if (active) {
        setThumb({ left: active.offsetLeft, width: active.offsetWidth })
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [value])

  return (
    <div className="pills" ref={wrap} role="tablist">
      <span
        className="pills__thumb"
        style={{ transform: `translateX(${thumb.left}px)`, width: thumb.width }}
        aria-hidden="true"
      />
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="tab"
          aria-selected={value === o.id}
          className={`pill ${value === o.id ? 'is-active' : ''}`}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
