import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

type Variant = 'primary' | 'ghost' | 'outline' | 'light' | 'ghost-light'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  magnetic?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  magnetic = false,
  type = 'button',
}: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim()

  let content: ReactNode
  if (href) {
    content = (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
      </a>
    )
  } else if (to) {
    content = (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  } else {
    content = (
      <button type={type} className={cls} onClick={onClick}>
        {children}
      </button>
    )
  }

  return magnetic ? <Magnetic>{content}</Magnetic> : content
}
