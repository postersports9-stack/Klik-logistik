import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://klikgroup.mk'),
  title: {
    default: 'Клик Логистик (Klik Group) — Транспорт и превоз на роба Скопје',
    template: '%s | Клик Логистик',
  },
  description:
    'Клик Логистик (Klik Group) — фирма за транспорт и сигурен превоз на роба и палети во Скопје и низ цела Македонија.',
  applicationName: 'Клик Логистик',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'mk_MK',
    siteName: 'Клик Логистик',
    url: 'https://klikgroup.mk',
    title: 'Клик Логистик (Klik Group) — Транспорт и превоз на роба Скопје',
    description:
      'Фирма за транспорт и превоз на роба и палети во Скопје и низ цела Македонија.',
    images: [{ url: '/images/hero-cover.webp', width: 1200, height: 630, alt: 'Клик Логистик — превоз на роба' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Клик Логистик (Klik Group) — Транспорт Скопје',
    description: 'Фирма за транспорт и превоз на роба и палети во Скопје и низ Македонија.',
    images: ['/images/hero-cover.webp'],
  },
  other: {
    google: 'notranslate'
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

import { Suspense } from 'react'
import { HashScroll } from '@/components/ui/hash-scroll'
import { ScrollHighway } from '@/components/ui/scroll-highway'
import { JsonLd, organizationSchema } from '@/components/seo/json-ld'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mk" className={roboto.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <Suspense fallback={null}>
          <HashScroll />
        </Suspense>
        <ScrollHighway />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
