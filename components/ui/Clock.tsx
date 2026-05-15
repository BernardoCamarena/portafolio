'use client'

import { useState, useEffect } from 'react'

export function Clock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local'
  const city = tz.split('/').pop()?.replace('_', ' ') ?? 'Local'
  const formatted = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className="clock" data-hover>
      <span className="dot" />
      <span>
        {city} · {formatted}
      </span>
    </div>
  )
}
