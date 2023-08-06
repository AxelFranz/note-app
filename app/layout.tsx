import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Axel qui s\'amuse',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <h1 className='text-center font-sans'>Bienvenue dans l'app de prises de notes</h1>

        {children}
        
      </body>
    </html>
  )
}
