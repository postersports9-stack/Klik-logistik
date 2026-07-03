import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const GA_ID = 'G-LK958Z7NQW'

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
  alternates: { canonical: '/' },
  keywords: [
    'Klik Logistik',
    'Клик Логистик',
    'Klik Group',
    'транспорт Скопје',
    'превоз на роба Македонија',
    'логистика Скопје',
    'транспорт на палети',
  ],
  authors: [{ name: 'Klik Logistik', url: 'https://klikgroup.mk' }],
  creator: 'Klik Logistik',
  publisher: 'Klik Logistik',
  category: 'logistics',
  openGraph: {
    type: 'website',
    locale: 'mk_MK',
    siteName: 'Клик Логистик',
    url: 'https://klikgroup.mk',
    title: 'Клик Логистик (Klik Group) — Транспорт и превоз на роба Скопје',
    description:
      'Фирма за транспорт и превоз на роба и палети во Скопје и низ цела Македонија.',
    images: [{ url: '/images/hero-cover-updated.webp', width: 1200, height: 630, alt: 'Клик Логистик — превоз на роба' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Клик Логистик (Klik Group) — Транспорт Скопје',
    description: 'Фирма за транспорт и превоз на роба и палети во Скопје и низ Македонија.',
    images: ['/images/hero-cover-updated.webp'],
  },
  other: {
    google: 'notranslate'
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

import { Suspense } from 'react'
import { HashScroll } from '@/components/ui/hash-scroll'
import { ScrollHighway } from '@/components/ui/scroll-highway'
import { JsonLd, siteSchema } from '@/components/seo/json-ld'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mk" className={roboto.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {/* End Google tag (gtag.js) */}
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd data={siteSchema} />
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
