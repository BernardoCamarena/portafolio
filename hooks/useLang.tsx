'use client'

import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react'
import { T, type Lang } from '@/lib/i18n'

type Translations = (typeof T)[Lang]

type LangCtx = {
  lang:    Lang
  setLang: (l: Lang) => void
  t:       Translations
}

const LangContext = createContext<LangCtx>({
  lang:    'es',
  setLang: () => {},
  t:       T.es,
})

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener('storage', callback)
  window.addEventListener('bcm-lang-change', callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener('bcm-lang-change', callback)
  }
}

function getSnapshot(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = localStorage.getItem('bcm-lang')
  return stored === 'en' ? 'en' : 'es'
}

function getServerSnapshot(): Lang {
  return 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function setLang(l: Lang) {
    localStorage.setItem('bcm-lang', l)
    window.dispatchEvent(new Event('bcm-lang-change'))
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: T[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
