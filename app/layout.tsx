import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luminarity',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${inter.className} overflow-x-hidden bg-primary-100/90 dark:bg-primary-950`}
      >
        <main>
          <div className="w-screen bg-white dark:bg-zinc-950">{children}</div>
        </main>
      </body>
    </html>
  )
}
