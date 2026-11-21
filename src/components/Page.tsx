import { useLayoutEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion, refreshScroll } from '../lib/smooth'

gsap.registerPlugin(ScrollTrigger)

export default function Page({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      refreshScroll()
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: 'power2.out' })
    }, el)

    refreshScroll()
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
