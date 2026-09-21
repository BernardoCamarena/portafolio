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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portafolio-dusky-one-68.vercel.app'),
  title: 'Bernardo Camarena Morales — React Engineer · React Native & Full-Stack',
  description: 'Portfolio de Bernardo Camarena Morales — React Engineer especializado en React, React Native, TypeScript, Redux, NestJS y PHP.',
  openGraph: {
    title: 'Bernardo Camarena Morales — React Engineer · React Native & Full-Stack',
    description: 'React Engineer con 2 años de experiencia profesional en producción y apps en App Store & Google Play.',
    url: 'https://portafolio-dusky-one-68.vercel.app',
    siteName: 'Bernardo Camarena Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernardo Camarena Morales — React Engineer · React Native & Full-Stack',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bernardo Camarena Morales',
  url: 'https://portafolio-dusky-one-68.vercel.app',
  jobTitle: 'React Engineer · React Native · Full-Stack Developer',
  description: 'React Engineer con experiencia en React, React Native, TypeScript, Redux, NestJS y PHP.',
  sameAs: [
    'https://www.linkedin.com/in/bernardo-camarena-morales-666500199/',
    'https://github.com/BernardoCamarena',
    'https://cert.efset.org/es/wFTR6q',
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
