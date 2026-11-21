import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/smooth'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
        },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={ref} className="scroll-progress__bar" />
    </div>
  )
}
