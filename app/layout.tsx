import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "400", "600"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ЛАМБЕЛ ТЕРМ | Градежни и Инсталатерски Услуги',
  description: 'Вашиот доверлив партнер за градба, реновирање и машински инсталации во Македонија.',
  generator: 'v0.app',
  other: {
    google: 'notranslate'
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

import { Suspense } from 'react'
import { HashScroll } from '@/components/ui/hash-scroll'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mk" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <HashScroll />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
