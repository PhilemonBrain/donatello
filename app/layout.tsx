import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Telecommunications Infrastructure Partner',
  description: 'Enterprise-grade telecommunications infrastructure services including FTTH deployment, wireless installations, and large-scale telecom contracts.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
