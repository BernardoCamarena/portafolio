'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

type Props = {
  images:   { src: string; alt: string }[]
  captions: string[]
  start:    number
  labels:   { close: string; prev: string; next: string; of: string }
  onClose:  (lastIndex: number) => void
}

export function Lightbox({ images, captions, start, labels, onClose }: Props) {
  const [i, setI] = useState(start)
  const closeRef = useRef<HTMLButtonElement>(null)
  const n = images.length

  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n])
  const next = useCallback(() => setI((v) => (v + 1) % n), [n])
  const close = useCallback(() => onClose(i), [onClose, i])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, prev, next])

  // Lock page scroll and move focus into the dialog while it is open
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [])

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={images[i].alt}
      onClick={close}
    >
      <div className="lightbox-top" onClick={(e) => e.stopPropagation()}>
        <span>{i + 1} {labels.of} {n}</span>
        <button ref={closeRef} type="button" className="lightbox-btn" onClick={close} data-hover>
          {labels.close} ✕
        </button>
      </div>

      <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <Image src={images[i].src} alt={images[i].alt} fill sizes="100vw" priority />
      </div>

      <div className="lightbox-bottom" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-btn" onClick={prev} aria-label={labels.prev} data-hover>←</button>
        <p>{captions[i]}</p>
        <button type="button" className="lightbox-btn" onClick={next} aria-label={labels.next} data-hover>→</button>
      </div>
    </div>,
    document.body,
  )
}
