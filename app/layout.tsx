import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portafolio-qgwf0zwo5-bernardo-camarena-morales-projects.vercel.app'),
  title: 'Bernardo Camarena — Fullstack & Mobile Developer',
  description: 'Construyo productos web y mobile end-to-end con NestJS, React y React Native.',
  openGraph: {
    title: 'Bernardo Camarena — Fullstack & Mobile Developer',
    description: 'Tus sueños, mi código.',
    url: 'https://bernardocamarena.dev',
    siteName: 'Bernardo Camarena Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernardo Camarena — Fullstack & Mobile Developer',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bernardo Camarena Morales',
  url: 'https://bernardocamarena.dev',
  jobTitle: 'Fullstack & Mobile Developer',
  description: 'Construyo productos web y mobile end-to-end con NestJS, React y React Native.',
  sameAs: [
    'https://www.linkedin.com/in/bernardo-camarena-morales-666500199/',
    'https://github.com/BernardoCamarena',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
