'use client'

import { useState } from 'react'
import { Loader } from '@/components/ui/Loader'
import { LangProvider } from '@/hooks/useLang'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <LangProvider>
      {!loaderDone && (
        <Loader onDone={() => setLoaderDone(true)} />
      )}
      {children}
    </LangProvider>
  )
}
