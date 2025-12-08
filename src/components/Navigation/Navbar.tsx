'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhoneCall } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseLargeLine } from 'react-icons/ri'

// social icons
import { IoLogoTiktok } from 'react-icons/io5'
import { FaFacebookF } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoWhatsapp } from 'react-icons/io5'

export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuopen)
  }

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
    {name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Events', link: '/events' },
    { name: 'Sermons', link: '/sermons' },
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
          <div className="hidden md:flex mx-4 gap-6 items-center">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.link} className="mx-2 font-semibold text-[#243061] hover:text-[#fcb129] transition-colors duration-300">
                {item.name}
              </Link>
            ))}
          </div>

          {/* right side */}
          <div className="flex gap-2 items-center">
            <Link
              href="/give"
              className="bg-[#fcb129] px-6 md:px-4 py-2 font-semibold ml-4 rounded-md text-[#fffff6]"
            >
              Give
            </Link>

            <Link
              href="https://www.youtube.com/@NewmanMinistriesIntl"
              className="hidden px-4 py-2 font-semibold rounded-md md:flex items-center gap-2 border-2 border-[#243061] text-[#243061]"
            >
              <FaYoutube size={20} />
              Watch Sermons
            </Link>

            {/* mobile menu button */}
            <button className="ml-2 md:hidden cursor-pointer" onClick={toggleMenu}>
              <HiMenuAlt2 size={35} className="text-[#243061]" />
            </button>
          </div>

          {/* mobile nav */}
          {isMenuopen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-[#243061]/40 backdrop-blur-xs"></div>
              <div className="absolute top-0 right-0 h-screen w-1/2 bg-[#fffff6] flex flex-col p-4 space-y-6 animate-in fade-in transition-transform duration-700">
                <div className="flex justify-end">
                  <button className="right-0 ml-0 md:hidden cursor-pointer" onClick={toggleMenu}>
                    <RiCloseLargeLine size={30} className="text-[#243061]" />
                  </button>
                </div>

                <div className="flex flex-col gap-8 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="mx-2 text-[#243061] font-semibold border-b-2 pb-2 border-[#fcb129] cursor-pointer hover:border-b-2 hover:border-[#243061] hover:scale-105 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* social links */}
                <div className="flex justify-center items-center">
                  <Link
                    href="/youtube"
                    className="flex px-4 py-2 font-semibold rounded-md items-center gap-2 border-2 border-[#243061] text-[#243061] w-max"
                  >
                    <FaYoutube size={20} />
                    Watch Sermons
                  </Link>
                </div>

                {/* other socials in grid*/}
                <div className="flex justify-center items-center mt-auto flex-col gap-4 p-4 rounded-md">
                  <div className='mb-2'>
                    <h4 className="text-center font-semibold text-lg text-[#243061]">
                      Follow Us
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12 justify-center items-center">
                    <Link
                      href="https://www.tiktok.com/@newmanministries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#243061] hover:text-[#fcb129] transition-colors duration-300"
                    >
                      <IoLogoTiktok size={30} />
                    </Link>
                    <Link
                      href="https://www.facebook.com/NewmanMinistries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#243061] hover:text-[#fcb129] transition-colors duration-300"
                    >
                      <FaFacebookF size={30} />
                    </Link>
                    <Link
                      href="https://www.instagram.com/newmanministries/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#243061] hover:text-[#fcb129] transition-colors duration-300"
                    >
                      <IoLogoInstagram size={30} />
                    </Link>
                    <Link
                      href="https://wa.me/254707019270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#243061] hover:text-[#fcb129] transition-colors duration-300"
                    >
                      <IoLogoWhatsapp size={30} />
                    </Link>
                  </div>{' '}
                </div>

                {/* copyright date */}
                <div className="flex justify-center items-center mt-auto">
                  <h4 className="text-sm text-center text-[#243061]">
                    &copy; {new Date().getFullYear()} Newman Ministries
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
