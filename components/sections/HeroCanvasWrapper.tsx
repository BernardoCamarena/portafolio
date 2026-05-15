'use client'

import dynamic from 'next/dynamic'

const HeroCanvas = dynamic(
  () => import('@/components/sections/HeroCanvas').then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%' }} />,
  }
)

export function HeroCanvasWrapper() {
  return <HeroCanvas />
}
