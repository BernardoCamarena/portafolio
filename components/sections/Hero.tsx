'use client'

import { HeroCanvasWrapper } from '@/components/sections/HeroCanvasWrapper'
import { useLang } from '@/hooks/useLang'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <HeroCanvasWrapper />
      </div>

      <div className="hero-tag">
        <span className="pill">
          <span className="live" />
          {t.hero.available}
        </span>
        <span>Fullstack · React Native · NestJS</span>
      </div>

      <h1 className="hero-title">
        <span className="hero-line">
          <span>Your Dreams.</span>
        </span>
        <span className="hero-line delay-1">
          <span>
            <span className="ital">
              I build <span className="accent">them.</span>
            </span>
          </span>
        </span>
      </h1>

      <div className="hero-foot">
        <p className="sub">
          <strong>Bernardo Camarena Morales</strong> —<br />
          {t.hero.sub}
        </p>
        <a href="#contact" className="cta" data-hover>
          <span>{t.hero.cta}</span>
          <span className="arrow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        </a>
        <div className="hero-meta">
          <span>
            Based in <strong>México</strong>
          </span>
          <span>Worldwide remote</span>
          <span>
            Portfolio · <strong>&apos;26</strong>
          </span>
        </div>
      </div>
    </section>
  )
}
