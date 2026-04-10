import type { Metadata } from 'next'
import { Caveat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'byMi | Stickers para tu vida',
  description: 'Stickers divertidos para decorar tu termo, laptop, ventana y todo lo que quieras. Nacionalidades, series, arte, deportes y mucho mas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${caveat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
