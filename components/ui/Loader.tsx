'use client'

import { useEffect, useState } from 'react'

interface LoaderProps {
  onRevealStart?: () => void
  onDone?: () => void
}

const T = {
  point:   400,
  lines:   1100,
  curtain: 2000,
  done:    5600,
}

export function Loader({ onRevealStart, onDone }: LoaderProps) {
  const [phase, setPhase] = useState(0)
  const [curtainOpen, setCurtainOpen] = useState(false)

  useEffect(() => {
    const ts: ReturnType<typeof setTimeout>[] = []
    const rafs: number[] = []

    ts.push(setTimeout(() => setPhase(1), T.point))
    ts.push(setTimeout(() => setPhase(2), T.lines))

    ts.push(setTimeout(() => {
      setPhase(3)
      onRevealStart?.()
      rafs.push(
        requestAnimationFrame(() =>
          rafs.push(requestAnimationFrame(() => setCurtainOpen(true))),
        ),
      )
    }, T.curtain))

    ts.push(setTimeout(() => {
      setPhase(4)
      onDone?.()
    }, T.done))

    return () => {
      ts.forEach(clearTimeout)
      rafs.forEach(cancelAnimationFrame)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === 4) return null

  return (
    <div className={`ldr${phase >= 3 ? ' curtain-active' : ''}`}>
      {phase >= 1 && phase < 3 && <div className="ldr-point" />}
      {phase < 3 && <div className={`ldr-line-h${phase >= 2 ? ' open' : ''}`} />}
      {phase >= 3 && (
        <>
          <div className={`ldr-panel ldr-panel-top${curtainOpen ? ' open' : ''}`} />
          <div className={`ldr-panel ldr-panel-bot${curtainOpen ? ' open' : ''}`} />
        </>
      )}
    </div>
  )
}
