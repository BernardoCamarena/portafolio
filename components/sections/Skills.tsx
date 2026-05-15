'use client'

import { SKILLS } from '@/lib/constants'
import { useLang } from '@/hooks/useLang'

export function Skills() {
  const { t } = useLang()

  return (
    <section id="skills">
      <div className="section-head">
        <span className="num">{t.skills.num}</span>
        <h2>{t.skills.h2}</h2>
      </div>
      <div className="skills-grid">
        {SKILLS.map((s, i) => {
          const card = t.skills.cards[i]
          return (
            <div key={s.code} className="skill reveal" data-hover>
              <div className="head">
                <span>{s.code}</span>
                <span className="accent-dot" />
              </div>
              <div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <div className="tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
