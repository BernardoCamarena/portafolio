'use client'

import { useEffect, useRef } from 'react'

// ─── 10-particle shapes ───────────────────────────────────────────────────────

const N = 8
const R = 18  // octagon radius

function makeOctagon(): Array<[number, number]> {
  return Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2
    return [Math.cos(a) * R, Math.sin(a) * R] as [number, number]
  })
}

// Arrow pointer — tip at index 0, lines connect i → (i+1)%N
// "coy" shifts the ring down so tip (y=-16) lands on the cursor hot-point
const POINTER: Array<[number, number]> = [
  [0,   -8],   // 0  tip
  [10,   3],   // 1  upper-right
  [12,     13],   // 2  right-indent
  [14,    26],   // 3  lower-right
  [0,     13],   // 4  V-notch
  [-14,   26],   // 5  lower-left
  [-12,    13],   // 6  left-indent
  [-10,  3],   // 7  upper-left
]
const POINTER_COY = 16  // shift center down so tip (y=-16) aligns with cursor

const DECA = makeOctagon()

// ─── Component ────────────────────────────────────────────────────────────────

export function CustomCursor() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (navigator.maxTouchPoints > 0 || window.matchMedia('(hover: none)').matches) return

    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = 1
    const resize = () => {
      dpr           = window.devicePixelRatio || 1
      canvas.width  = window.innerWidth  * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#6366f1'

    // Mouse
    let mx = -300, my = -300, visible = false
    // Lagged ring center
    let rx = -300, ry = -300
    // Vertical center offset (shifts ring so pointer tip lands on cursor)
    let coy = 0, targetCoy = 0

    let isHover = false

    // Per-particle current / target shape offsets
    const cur: Array<[number, number]> = DECA.map(p => [...p] as [number, number])
    const tgt: Array<[number, number]> = DECA.map(p => [...p] as [number, number])

    // Organic wobble — random phase per particle
    const wpx = Array.from({ length: N }, () => Math.random() * Math.PI * 2)
    const wpy = Array.from({ length: N }, () => Math.random() * Math.PI * 2)

    // ── Slow spin in default mode ─────────────────────────────────────────────
    let rot = 0

    const onMove  = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; visible = true }
    const onLeave = () => { visible = false }

    const onOver  = (e: MouseEvent) => {
      const hit = !!(e.target as Element).closest('a, button, [data-hover]')
      if (hit === isHover) return
      isHover = hit
      const shape = isHover ? POINTER : null  // null → recompute from rotation
      if (shape) {
        for (let i = 0; i < N; i++) { tgt[i][0] = shape[i][0]; tgt[i][1] = shape[i][1] }
      }
      targetCoy = isHover ? POINTER_COY : 0
    }

    let raf: number
    const tick = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      if (!visible) { raf = requestAnimationFrame(tick); return }

      // Lag ring center toward cursor
      rx += (mx - rx) * 0.20
      ry += (my - ry) * 0.20

      // Lerp center-y offset
      coy += (targetCoy - coy) * 0.13

      // In default mode: slowly spin the decagon target
      if (!isHover) {
        rot += 0.003  // ~10 deg/sec — subtle
        const c = Math.cos(rot), s = Math.sin(rot)
        for (let i = 0; i < N; i++) {
          tgt[i][0] = DECA[i][0] * c - DECA[i][1] * s
          tgt[i][1] = DECA[i][0] * s + DECA[i][1] * c
        }
      }

      // Lerp shape
      for (let i = 0; i < N; i++) {
        cur[i][0] += (tgt[i][0] - cur[i][0]) * 0.13
        cur[i][1] += (tgt[i][1] - cur[i][1]) * 0.13
      }

      // Final positions = ring center + shape offset + tiny wobble
      const pts: Array<[number, number]> = cur.map((off, i) => [
        rx + off[0] + Math.sin(now * 0.00088 + wpx[i]) * 1.2,
        ry + coy + off[1] + Math.cos(now * 0.00072 + wpy[i]) * 1.2,
      ])

      // ── Lines ───────────────────────────────────────────────────────────────
      ctx.lineWidth   = 0.85
      ctx.strokeStyle = isHover ? accent : 'rgba(255,255,255,0.40)'
      ctx.globalAlpha = isHover ? 0.70 : 0.45
      ctx.beginPath()
      for (let i = 0; i < N; i++) {
        const j = (i + 1) % N
        ctx.moveTo(pts[i][0], pts[i][1])
        ctx.lineTo(pts[j][0], pts[j][1])
      }
      ctx.stroke()

      // ── Dots ────────────────────────────────────────────────────────────────
      for (const [px, py] of pts) {
        if (isHover) {
          // Soft glow halo
          const g = ctx.createRadialGradient(px, py, 0, px, py, 6)
          g.addColorStop(0, accent + '99')
          g.addColorStop(1, accent + '00')
          ctx.globalAlpha = 0.48
          ctx.fillStyle   = g
          ctx.beginPath()
          ctx.arc(px, py, 6, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = isHover ? 0.92 : 0.70
        ctx.fillStyle   = isHover ? accent : 'rgba(255,255,255,0.85)'
        ctx.beginPath()
        ctx.arc(px, py, isHover ? 2.1 : 1.7, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove',  onMove)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mouseover',  onOver)
    window.addEventListener('resize',     resize)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mouseover',  onOver)
      window.removeEventListener('resize',     resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position:      'fixed',
        inset:         0,
        width:         '100vw',
        height:        '100vh',
        pointerEvents: 'none',
        zIndex:        99999,
      }}
    />
  )
}
