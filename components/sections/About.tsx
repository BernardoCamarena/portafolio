'use client'

import { useLang } from '@/hooks/useLang'

export function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about">
      <div className="section-head">
        <span className="num">{a.num}</span>
        <h2>{a.h2}</h2>
      </div>
      <div className="about-grid">
        <div className="about-portrait reveal" />
        <div className="about-copy reveal">
          <h3 dangerouslySetInnerHTML={{ __html: a.h3 }} />
          <p dangerouslySetInnerHTML={{ __html: a.p1 }} />
          <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
          <div className="about-stats">
            <div className="stat">
              <div className="num">5+</div>
              <div className="label">{a.stats[0]}</div>
            </div>
            <div className="stat">
              <div className="num">20+</div>
              <div className="label">{a.stats[1]}</div>
            </div>
            <div className="stat">
              <div className="num">∞</div>
              <div className="label">{a.stats[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
