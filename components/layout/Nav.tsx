'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about',   label: t.nav.about },
    { href: '#skills',  label: t.nav.services },
    { href: '#projects',label: t.nav.work },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className="nav" data-scrolled={scrolled}>
      <Link href="/" className="nav-mark" data-hover>
        <span className="dot" />
        <span>BCM · Portfolio</span>
      </Link>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <a key={href} href={href} data-hover>
            {label}
          </a>
        ))}
      </div>
      <button
        className="lang-toggle"
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        aria-label="Toggle language"
        data-hover
      >
        <span className={lang === 'es' ? 'on' : ''}>ES</span>
        <span className="sep">·</span>
        <span className={lang === 'en' ? 'on' : ''}>EN</span>
      </button>
    </nav>
  )
}
