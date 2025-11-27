import React from 'react'
import './styles.css'
import Navbar from '@/components/Homepage/Navigation/Navbar'
import Footer from '@/components/Homepage/Navigation/Footer'

// google fonts
import { Barlow_Semi_Condensed } from 'next/font/google'

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${barlow.className} font-sans bg-white text-black dark:bg-black dark:text-white`}>
        <main>
          <Navbar />
          {children}
          <Footer />
          </main>
      </body>
    </html>
  )
}
