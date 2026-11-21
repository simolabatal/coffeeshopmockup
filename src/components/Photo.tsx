import { useState, type CSSProperties } from 'react'
import { FALLBACK_PHOTO } from '../lib/photos'

interface PhotoProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
  style?: CSSProperties
}

export default function Photo({ src, alt, className = '', eager = false, style }: PhotoProps) {
  const [usingFallback, setUsingFallback] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`photo-fallback ${className}`.trim()} role="img" aria-label={alt} style={style} />
  }

  const current = usingFallback ? FALLBACK_PHOTO : src

  return (
    <img
      className={`photo ${className}`.trim()}
      src={current}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      style={style}
      onError={() => {
        if (!usingFallback) {
          setUsingFallback(true)
        } else {
          setFailed(true)
        }
      }}
    />
  )
}
