import { Link } from 'react-router-dom'

export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`wordmark ${className}`.trim()} aria-label="Kesh Cup — accueil">
      <span className="wordmark__name">Kesh Cup</span>
      <span className="wordmark__badge">Mockup</span>
    </Link>
  )
}
