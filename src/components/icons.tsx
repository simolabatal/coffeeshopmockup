import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

export const Instagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const Pin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const Search = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
)

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
)

export const Minus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
)

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </svg>
)

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h16" />
    <path d="M4 16h16" />
  </svg>
)

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 19c0-8 5-13 14-14-.5 9-5 14-13 14" />
    <path d="M5 19c2-5 5-8 9-10" />
  </svg>
)

export const Snow = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 2 2.4 2.4L12 6.8 9.6 4.4 12 2Z" />
    <path d="M12 6.8V22" />
    <path d="m5 8 2.6 1.5L5 12l2.6 2.5L5 17" />
    <path d="m19 8-2.6 1.5L19 12l-2.6 2.5L19 17" />
  </svg>
)

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z" />
  </svg>
)
