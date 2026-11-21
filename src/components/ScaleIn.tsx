import { useLayoutEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../lib/smooth'

export default function ScaleIn({
  children,
  className = '',
  delay = 0,
  from = 1.08,
  duration = 1.4,
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: from, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration, ease: 'power3.out', delay },
      )
    }, el)
    return () => ctx.revert()
  }, [from, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
