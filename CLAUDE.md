# Portfolio BCM — CLAUDE.md

Portfolio personal de Bernardo Camarena Morales. Next.js 16 App Router.

## Package manager
**Solo `pnpm`.** Nunca `npm` ni `yarn`.

## Stack fijo
- Next.js 16 (App Router, Turbopack)
- TypeScript 5.1+
- Tailwind CSS v4 (`@import "tailwindcss"`, sin `tailwind.config.ts`)
- Framer Motion 11
- React Hook Form + Zod
- Resend (email)
- `next/font/google` para fuentes

## Decisiones de diseño (NO cambiar sin actualizar SPRINT_portfolio_BCM.md)
| Token | Valor |
|---|---|
| Tema | Dark (`data-theme="dark"`) |
| Acento | `#6366f1` + Aurora gradient |
| Fuente display | Space Grotesk (`--font-display`) |
| Fuente body | Inter (`--font-body`) |
| Fuente mono | JetBrains Mono (`--font-mono`) |
| Cursor | Ring |
| Hero | Canvas particles |

## Reglas críticas
- `'use client'` solo cuando usa hooks/eventos/browser APIs. Nunca en `layout.tsx` ni `page.tsx`.
- Canvas/browser APIs → `dynamic(() => import(...), { ssr: false })`.
- Tailwind v4: `@import "tailwindcss"` y `@theme {}` en `globals.css`. Sin `tailwind.config.ts`.
- `next.config.ts` → `turbopack: {}` a nivel raíz (no en `experimental`).
- Secrets sin prefijo `NEXT_PUBLIC_`.
- No `console.log` en producción.

## Estructura de directorios
```
app/          → layout.tsx, page.tsx, globals.css, api/contact/route.ts
components/   → layout/{Nav,Footer}, sections/{Hero,HeroCanvas,About,Skills,Projects,Contact}, ui/{CustomCursor,Loader,Marquee,Clock,RevealOnScroll}
hooks/        → useReveal.ts
lib/          → constants.ts, utils.ts
public/       → og-image.png
```

## Comandos
```bash
pnpm dev        # dev server (Turbopack)
pnpm build      # build producción
pnpm lint       # linting (separado del build en Next.js 16)
```
