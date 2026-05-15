'use client'

import { useEffect, useRef, useState } from 'react'

interface LoaderProps {
  onRevealStart?: () => void
  onDone?: () => void
}

const NAME = 'Mi Portafolio'

const T = {
  lettersIn: 300,
  suck:      1800,
  point:     3100,
  lines:     3800,
  curtain:   5200,
  done:      9000,
}

export function Loader({ onRevealStart, onDone }: LoaderProps) {
  const [phase, setPhase] = useState(0)
  const [curtainOpen, setCurtainOpen] = useState(false)
  const nameRef = useRef<HTMLDivElement>(null)
  const [suckOffsets, setSuckOffsets] = useState<{ dx: number; dy: number }[]>([])

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = []
    const rafs: number[] = []

    ts.push(setTimeout(() => setPhase(1), T.lettersIn))

    ts.push(setTimeout(() => {
      if (nameRef.current) {
        const cx = window.innerWidth / 2
        const cy = window.innerHeight / 2
        const spans = nameRef.current.querySelectorAll<HTMLSpanElement>('[data-l]')
        setSuckOffsets(
          Array.from(spans).map((s) => {
            const r = s.getBoundingClientRect()
            return { dx: cx - (r.left + r.width / 2), dy: cy - (r.top + r.height / 2) }
          }),
        )
      }
      setPhase(2)
    }, T.suck))

    ts.push(setTimeout(() => setPhase(3), T.point))
    ts.push(setTimeout(() => setPhase(4), T.lines))

    ts.push(setTimeout(() => {
      // phase 5: .ldr goes transparent + panels mount (same render, no flash)
      // children render behind via onRevealStart
      setPhase(5)
      onRevealStart?.()
      // Double rAF — browser paints panels at translateY(0) before transition fires
      rafs.push(
        requestAnimationFrame(() =>
          rafs.push(requestAnimationFrame(() => setCurtainOpen(true))),
        ),
      )
    }, T.curtain))

    ts.push(setTimeout(() => {
      setPhase(6)
      onDone?.()
    }, T.done))

    return () => {
      ts.forEach(clearTimeout)
      rafs.forEach(cancelAnimationFrame)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === 6) return null

  const lettersIn = phase >= 1
  const isSucking = phase >= 2

  return (
    <div className={`ldr${phase >= 5 ? ' curtain-active' : ''}`}>
      {/* Name */}
      <div ref={nameRef} className="ldr-name" aria-label={NAME}>
        {NAME.split('').map((letter, i) => {
          const offset = suckOffsets[i]
          const suckStyle =
            isSucking && offset
              ? {
                  transform: `translate(${offset.dx}px,${offset.dy}px) scale(0.04)`,
                  opacity: 0,
                  filter: 'blur(16px)',
                  transition: [
                    `transform 0.9s cubic-bezier(0.4,0,1,1) ${i * 35}ms`,
                    `opacity 0.7s ease-in ${i * 35}ms`,
                    `filter 0.8s ease-in ${i * 35}ms`,
                  ].join(', '),
                }
              : {}

          return (
            <span
              key={i}
              data-l=""
              className={`ldr-letter${lettersIn ? ' is-in' : ''}`}
              style={{
                ...(lettersIn && !isSucking ? { transitionDelay: `${i * 70}ms` } : {}),
                ...suckStyle,
              }}
            >
              {letter}
            </span>
          )
        })}
      </div>

      {/* Point — hidden once curtain takes over */}
      {phase >= 3 && phase < 5 && <div className="ldr-point" />}

      {/* Horizontal line — hidden once curtain panels provide the seam */}
      {phase < 5 && <div className={`ldr-line-h${phase >= 4 ? ' open' : ''}`} />}

      {/* Curtain panels — mount at phase 5 covering the screen (same render ldr goes transparent).
          Double rAF later: panels get .open and slide away revealing the site. */}
      {phase >= 5 && (
        <>
          <div className={`ldr-panel ldr-panel-top${curtainOpen ? ' open' : ''}`} />
          <div className={`ldr-panel ldr-panel-bot${curtainOpen ? ' open' : ''}`} />
        </>
      )}
    </div>
  )
}
