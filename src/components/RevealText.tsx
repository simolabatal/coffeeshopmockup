import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../lib/smooth'

interface RevealTextProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
}

export default function RevealText({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.12,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-line]',
        { yPercent: 112 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: 'power4.out',
          stagger,
          delay,
        },
      )
    }, el)

    return () => ctx.revert()
  }, [delay, stagger])

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span data-line className={lineClassName}>
            {line}
          </span>
        </span>
      ))}
    </div>
  )
}
