export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            <span>{t}</span>
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
