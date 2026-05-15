'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
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

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = localStorage.getItem('bcm-lang') as Lang | null
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('bcm-lang', l)
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
