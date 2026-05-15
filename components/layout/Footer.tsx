'use client'

import { useLang } from '@/hooks/useLang'

export function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="foot-col">
        <h5>Elsewhere</h5>
        <a href="https://www.linkedin.com/in/bernardo-camarena-morales-666500199/" target="_blank" rel="noreferrer" data-hover>
          LinkedIn ↗
        </a>
        <a href="https://github.com/BernardoCamarena" target="_blank" rel="noreferrer" data-hover>
          GitHub ↗
        </a>
      </div>
      <div className="foot-col">
        <h5>Sitemap</h5>
        <a href="#about"    data-hover>{t.nav.about}</a>
        <a href="#projects" data-hover>{t.nav.work}</a>
        <a href="#contact"  data-hover>{t.nav.contact}</a>
      </div>
      <div className="foot-col">
        <h5>Stack</h5>
        <p>NestJS · PHP · React · React Native · TypeScript</p>
      </div>
      <div className="foot-col">
        <h5>Status</h5>
        <p>{t.footer.status}</p>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Bernardo Camarena Morales</span>
        <span>{t.footer.madeWith}</span>
      </div>
    </footer>
  )
}
