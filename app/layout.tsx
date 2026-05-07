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
  title: 'Клик Логистик | Превоз на роба - Скопје',
  description: 'Klik Logistik DOOEL Skopje — сигурен превоз на роба низ Македонија и Европа.',
  generator: 'v0.app',
  other: {
    google: 'notranslate'
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: '/logo.png',
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
    <html lang="mk" className={roboto.variable}>
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
