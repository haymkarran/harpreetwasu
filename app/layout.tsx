import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNav from './components/top-nav/TopNav'
import Footer from './components/Footer/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harpreet Portfolio',
  description: 'Your Trusted Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`inter.className m-0 outline-0`}>
          <Providers>
              <TopNav />
                {children}
              <Footer />
          </Providers>
      </body>
    </html>
  )
}
