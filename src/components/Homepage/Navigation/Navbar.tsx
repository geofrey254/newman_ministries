import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhoneCall } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'

export default function Navbar() {
  const toSunday = () => {
    const today = new Date()
    const daysUntilSunday = (7 - today.getDay()) % 7
    const nextSunday = new Date(today)
    nextSunday.setDate(today.getDate() + daysUntilSunday)
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }
    return nextSunday.toLocaleDateString(undefined, options)
  }

  // Nav Links
  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Events', link: '/programs' },
    { name: 'Sermons', link: '/programs' },
    { name: 'Donate', link: '/donate' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <>
      {/* top nav */}
      <div className="bg-[#243061] text-white px-8 py-2 flex justify-between items-center">
        <h3 className="font-bold text-sm md:text-lg">
          Upcoming Programs: <span className="font-normal">{toSunday()}</span>{' '}
        </h3>

        <div className="flex items-center justify-center gap-4">
          <FiPhoneCall className="text-xl" />
          <h4 className="md:text-lg">+254 707 019270</h4>
        </div>
      </div>

      {/* bottom nav */}
      <nav className="bg-[#fffff6] px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Newman Logo" width={150} height={50} />
          </Link>

          {/* mid section */}
          <div>
            {menuItems.map((item) => (
              <Link key={item.name} href="/contact" className="mx-2 font-semibold">
                {item.name}
              </Link>
            ))}
          </div>

          {/* right side */}
          <div className="flex gap-2 items-center">
            <Link
              href="/donate"
              className="bg-[#fcb129] px-4 py-2 font-semibold ml-4 rounded-md text-[#fffff6]"
            >
              Give
            </Link>

            <Link
              href="/youtube"
              className="px-4 py-2 font-semibold rounded-md flex items-center gap-2 border-2 border-[#243061] text-[#243061]"
            >
              <FaYoutube size={20}/>
              Watch Sermons
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
