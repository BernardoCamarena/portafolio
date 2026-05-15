'use client'

import { useEffect, useRef } from 'react'

// ─── 5×5 pixel-font glyphs ────────────────────────────────────────────────────
const GLYPHS: Record<string, Array<[number, number]>> = {
  A: [[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[4,2],[0,3],[4,3],[0,4],[4,4]],
  B: [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4]],
  C: [[1,0],[2,0],[3,0],[4,0],[0,1],[0,2],[0,3],[1,4],[2,4],[3,4],[4,4]],
  D: [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4]],
  E: [[0,0],[1,0],[2,0],[3,0],[4,0],[0,1],[0,2],[1,2],[2,2],[3,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4]],
  H: [[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[4,2],[0,3],[4,3],[0,4],[4,4]],
  N: [[0,0],[4,0],[0,1],[1,1],[4,1],[0,2],[2,2],[4,2],[0,3],[3,3],[4,3],[0,4],[4,4]],
  O: [[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[1,4],[2,4],[3,4]],
  R: [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[1,2],[2,2],[3,2],[0,3],[2,3],[0,4],[3,4],[4,4]],
  T: [[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4]],
  V: [[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[1,3],[3,3],[2,4]],
  W: [[0,0],[4,0],[0,1],[4,1],[0,2],[2,2],[4,2],[0,3],[2,3],[4,3],[1,4],[3,4]],
  X: [[0,0],[4,0],[1,1],[3,1],[2,2],[1,3],[3,3],[0,4],[4,4]],
}

const WORDS = ['DEV', 'CODE', 'WEB', 'NEXT', 'TECH', 'REACT']
const COUNT  = 210

interface Dot {
  x: number; y: number
  vx: number; vy: number
  r: number
  // formation
  tx: number; ty: number
  assigned: boolean
  scatter:  boolean   // was just released — damp separately
  lit:      number    // 0→1 glow intensity
}

type Phase = 'idle' | 'forming' | 'holding' | 'scattering'

function buildTargets(
  word: string, cx: number, cy: number, cell: number, gap: number,
): Array<{ tx: number; ty: number }> {
  const lw = 4 * cell
  const lh = 4 * cell
  const tw = word.length * lw + (word.length - 1) * gap
  const ox = cx - tw / 2
  const oy = cy - lh / 2

  const out: { tx: number; ty: number }[] = []
  for (let li = 0; li < word.length; li++) {
    const glyph = GLYPHS[word[li]]
    if (!glyph) continue
    const lx = ox + li * (lw + gap)
    for (const [col, row] of glyph) {
      out.push({ tx: lx + col * cell, ty: oy + row * cell })
    }
  }
  return out
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, dpr = 1
    let mouseX = -9999, mouseY = -9999
    let raf: number

    const dots: Dot[] = []

    let phase: Phase = 'idle'
    let phaseStart   = 0
    let idleEnd      = 0
    let wordIdx      = 0
    let curCell      = 16
    let curGap       = 20
    let litThresh    = 26

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      w   = canvas.clientWidth
      h   = canvas.clientHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const mkDot = (): Dot => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.3 + 0.45,
      tx: 0, ty: 0, assigned: false, scatter: false, lit: 0,
    })

    const init = () => {
      dots.length = 0
      for (let i = 0; i < COUNT; i++) dots.push(mkDot())
      phase   = 'idle'
      idleEnd = performance.now() + 3000 + Math.random() * 3000
    }

    const startForming = (now: number) => {
      // Responsive sizing: REACT (5 letters) ≤ 72% canvas width
      curCell   = Math.max(10, Math.min(22, Math.floor(w * 0.027)))
      curGap    = Math.round(curCell * 1.3)
      litThresh = Math.round(curCell * 1.6)

      const word = WORDS[wordIdx % WORDS.length]
      wordIdx++

      const lw    = 4 * curCell
      const tw    = word.length * lw + (word.length - 1) * curGap
      const th    = 4 * curCell
      const pad   = 28
      const cx    = pad + tw / 2 + Math.random() * Math.max(0, w - tw - pad * 2)
      const cy    = pad + th / 2 + Math.random() * Math.max(0, h - th - pad * 2)

      const targets = buildTargets(word, cx, cy, curCell, curGap)

      // Release any previous assignment (don't clear lit — let it fade)
      for (const d of dots) d.assigned = false

      // Greedy nearest-particle assignment
      const used = new Set<number>()
      for (const ft of targets) {
        let best = -1, bestD = Infinity
        for (let i = 0; i < dots.length; i++) {
          if (used.has(i)) continue
          const dd = Math.hypot(dots[i].x - ft.tx, dots[i].y - ft.ty)
          if (dd < bestD) { bestD = dd; best = i }
        }
        if (best !== -1) {
          used.add(best)
          dots[best].assigned = true
          dots[best].scatter  = false
          dots[best].tx = ft.tx
          dots[best].ty = ft.ty
        }
      }

      phase      = 'forming'
      phaseStart = now
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    }

    const tick = (now: number) => {
      ctx.clearRect(0, 0, w, h)
      const accent  = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim() || '#6366f1'
      const elapsed = now - phaseStart

      // ── Phase transitions ──────────────────────────────────────────────────
      if (phase === 'idle' && now >= idleEnd) {
        startForming(now)
      } else if (phase === 'forming' && elapsed > 6000) {
        phase      = 'holding'
        phaseStart = now
      } else if (phase === 'holding' && elapsed > 4000) {
        phase      = 'scattering'
        phaseStart = now
        for (const d of dots) {
          if (d.assigned) {
            d.assigned = false
            d.scatter  = true
            d.vx = (Math.random() - 0.5) * 2.4
            d.vy = (Math.random() - 0.5) * 2.4
            // keep d.lit so particles glow briefly as they fly away
          }
        }
      } else if (phase === 'scattering' && elapsed > 2800) {
        phase   = 'idle'
        idleEnd = now + 4000 + Math.random() * 4500
      }

      // ── Update particles ───────────────────────────────────────────────────
      for (const d of dots) {
        if (d.assigned) {
          const dx   = d.tx - d.x
          const dy   = d.ty - d.y
          const dist = Math.hypot(dx, dy)

          // Gentle constant-magnitude attraction + tiny random drift
          if (dist > 1.5) {
            const pull = 0.024
            d.vx += (dx / dist) * pull
            d.vy += (dy / dist) * pull
          }
          d.vx += (Math.random() - 0.5) * 0.014   // organic wander noise
          d.vy += (Math.random() - 0.5) * 0.014

          // Cap speed so they drift, not race
          const spd = Math.hypot(d.vx, d.vy)
          if (spd > 1.0) { d.vx = d.vx / spd; d.vy = d.vy / spd }

          d.vx *= 0.972
          d.vy *= 0.972
          d.x  += d.vx
          d.y  += d.vy

          // Wall bounce
          if (d.x < 0) { d.x = 0; d.vx *= -1 }
          else if (d.x > w) { d.x = w; d.vx *= -1 }
          if (d.y < 0) { d.y = 0; d.vy *= -1 }
          else if (d.y > h) { d.y = h; d.vy *= -1 }

          // Glow: bloom slowly as particle approaches target
          if (dist < 5) {
            d.lit = Math.min(1, d.lit + 0.035)
          } else if (dist < 22) {
            d.lit = Math.min(0.55, d.lit + 0.01)
          } else {
            d.lit = Math.max(0, d.lit - 0.008)
          }

        } else {
          // Normal organic drift
          d.x += d.vx
          d.y += d.vy

          if (d.x < 0 || d.x > w) d.vx *= -1
          if (d.y < 0 || d.y > h) d.vy *= -1

          // Mouse repel (only non-assigned particles)
          const rx = d.x - mouseX, ry = d.y - mouseY
          const rd = Math.hypot(rx, ry)
          if (rd < 180 && rd > 0) {
            d.x += (rx / rd) * 0.45
            d.y += (ry / rd) * 0.45
          }

          // Damp only scatter-burst particles, leaving background untouched
          if (d.scatter) {
            d.vx *= 0.962
            d.vy *= 0.962
            if (Math.hypot(d.vx, d.vy) < 0.32) d.scatter = false
          }

          // Fade out residual glow
          if (d.lit > 0) d.lit = Math.max(0, d.lit - 0.022)
        }
      }

      // ── Background network lines (skip assigned particles) ─────────────────
      ctx.lineWidth = 0.9
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        if (a.assigned) continue
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          if (b.assigned) continue
          const dx   = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            ctx.strokeStyle = 'rgba(255,255,255,0.16)'
            ctx.globalAlpha = (1 - dist / 120) * 0.75
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // ── Glyph lines — only between particles that are close AND both glowing ─
      ctx.lineWidth = 1.2
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        if (a.lit < 0.45) continue
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          if (b.lit < 0.45) continue
          const dx   = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < litThresh) {
            ctx.strokeStyle = accent
            ctx.globalAlpha = Math.min(a.lit, b.lit) * 0.82
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // ── Draw particles ─────────────────────────────────────────────────────
      ctx.globalAlpha = 1
      for (const d of dots) {
        if (d.lit > 0.06) {
          // Soft outer halo
          const hr  = curCell * 0.72
          const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, hr)
          grd.addColorStop(0, accent + 'bb')
          grd.addColorStop(1, accent + '00')
          ctx.globalAlpha = d.lit * 0.42
          ctx.fillStyle   = grd
          ctx.beginPath()
          ctx.arc(d.x, d.y, hr, 0, Math.PI * 2)
          ctx.fill()

          // Core dot
          ctx.globalAlpha = 0.6 + d.lit * 0.4
          ctx.fillStyle   = accent
          ctx.beginPath()
          ctx.arc(d.x, d.y, 1.8 + d.lit * 1.5, 0, Math.PI * 2)
          ctx.fill()
        } else {
          const dm = Math.hypot(d.x - mouseX, d.y - mouseY)
          ctx.globalAlpha = 1
          ctx.fillStyle   = dm < 150 && !d.assigned ? accent : 'rgba(255,255,255,0.30)'
          ctx.beginPath()
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    const onResize = () => { resize(); init() }

    resize()
    init()
    window.addEventListener('resize',    onResize)
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize',    onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} style={{ width: '100%', height: '100%' }} />
}
