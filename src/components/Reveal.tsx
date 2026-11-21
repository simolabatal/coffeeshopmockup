import { useLayoutEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/smooth'

gsap.registerPlugin(ScrollTrigger)

export type Motion = 'rise' | 'steam' | 'cold'

interface RevealProps {
  children: ReactNode
  className?: string
  /** 'rise' = apparition neutre · 'steam' = montée de vapeur (chaud) · 'cold' = glisse fraîche (froid) */
  motion?: Motion
  y?: number
  delay?: number
  stagger?: number
}

const MOTIONS: Record<Motion, { x: number; y: number; duration: number; ease: string }> = {
  rise: { x: 0, y: 28, duration: 1, ease: 'power3.out' },
  steam: { x: 0, y: 18, duration: 1.15, ease: 'power2.out' },
  cold: { x: -24, y: 0, duration: 1, ease: 'power3.out' },
}

export default function Reveal({
  children,
  className = '',
  motion = 'rise',
  y,
  delay = 0,
  stagger = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const items = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))
    const targets = items.length ? items : [el]
    const st = stagger || (items.length > 1 ? 0.09 : 0)
    const vars = MOTIONS[motion]

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { x: vars.x, y: y ?? vars.y, autoAlpha: 0 },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: vars.duration,
          ease: vars.ease,
          delay,
          stagger: st,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [motion, y, delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
