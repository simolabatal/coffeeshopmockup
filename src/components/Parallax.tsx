import { useLayoutEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/smooth'

gsap.registerPlugin(ScrollTrigger)

export default function Parallax({
  children,
  speed = 12,
  className = '',
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const o = outer.current
    const i = inner.current
    if (!o || !i || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        i,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: { trigger: o, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    }, o)

    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={outer} className={`parallax ${className}`.trim()}>
      <div ref={inner} className="parallax__inner">
        {children}
      </div>
    </div>
  )
}
