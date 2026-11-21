import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null
let cleanup: (() => void) | null = null

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initSmoothScroll(): void {
  if (lenis || prefersReducedMotion()) return

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', () => ScrollTrigger.update())

  const raf = (time: number) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)

  cleanup = () => {
    gsap.ticker.remove(raf)
    lenis?.destroy()
    lenis = null
  }
}

export function destroySmoothScroll(): void {
  cleanup?.()
  cleanup = null
}

export function scrollToTop(immediate = true): void {
  if (lenis) {
    lenis.scrollTo(0, { immediate })
  } else if (immediate) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function refreshScroll(): void {
  ScrollTrigger.refresh()
}
