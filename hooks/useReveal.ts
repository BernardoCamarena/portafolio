'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const observed = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          io.observe(el)
        }
      })
    }
    scan()

    const mo = new MutationObserver(() => scan())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
