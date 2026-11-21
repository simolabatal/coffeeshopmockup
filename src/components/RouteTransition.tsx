import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { prefersReducedMotion } from '../lib/smooth'

export default function RouteTransition() {
  const { pathname } = useLocation()
  const overlay = useRef<HTMLDivElement>(null)
  const first = useRef(true)

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const el = overlay.current
    if (!el || prefersReducedMotion()) return

    const tl = gsap.timeline()
    tl.set(el, { autoAlpha: 1, scaleY: 1, transformOrigin: '50% 0%' })
      .set(el, { transformOrigin: '50% 100%' })
      .to(el, { scaleY: 0, duration: 0.55, ease: 'power4.inOut' })
      .set(el, { autoAlpha: 0 })

    return () => {
      tl.kill()
    }
  }, [pathname])

  return <div ref={overlay} className="route-overlay" aria-hidden="true" />
}
