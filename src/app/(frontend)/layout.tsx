import React from 'react'
import './styles.css'
import Navbar from '@/components/Navigation/Navbar'
import Footer from '@/components/Navigation/Footer'

// google fonts
import { Fira_Sans_Condensed } from 'next/font/google'


const fira = Fira_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fira',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${fira.className} font-sans bg-white text-black dark:bg-black dark:text-white`}>
        <main>
          <Navbar />
          {children}
          <Footer />
          </main>
      </body>
    </html>
  )
}
