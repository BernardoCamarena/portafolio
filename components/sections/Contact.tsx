'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'

const EMAIL = 'bernardo.camarena.m@gmail.com'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const { t } = useLang()
  const c = t.contact

  const copy = () => {
    try { navigator.clipboard.writeText(EMAIL) } catch {}
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-head" style={{ justifyContent: 'center', borderBottom: 'none' }}>
        <span className="num">{c.num}</span>
      </div>
      <h2 className="reveal">
        {c.h2Pre} <em>{c.h2Dream}</em>?<br />
        {c.h2Post} <span className="accent">{c.h2Accent}</span>
      </h2>

      <p className="contact-sub reveal">{c.sub}</p>

      <div className="contact-links reveal">
        <button className="contact-link" onClick={copy} data-hover>
          <span className="contact-link-platform">Email</span>
          <span className="contact-link-val">
            {EMAIL}
            <span className="contact-link-hint">
              {copied ? '✓ copiado' : 'click para copiar'}
            </span>
          </span>
        </button>
        <a
          href="https://www.linkedin.com/in/bernardo-camarena-morales-666500199/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
          data-hover
        >
          <span className="contact-link-platform">LinkedIn</span>
          <span className="contact-link-val">Bernardo Camarena Morales ↗</span>
        </a>
        <a
          href="https://github.com/BernardoCamarena"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
          data-hover
        >
          <span className="contact-link-platform">GitHub</span>
          <span className="contact-link-val">BernardoCamarena ↗</span>
        </a>
      </div>
    </section>
  )
}
