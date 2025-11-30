import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGlobeEurope } from 'react-icons/fa'
import { IoMdArrowForward, IoMdArrowDown } from 'react-icons/io'

export default function Hero() {
  return (
    <section className="px-8 relative h-[60vh] md:h-screen">
      <div className="absolute inset-0">
        <Image
          src="/BG.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* multi-layer gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 bg-[#243061] opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="flex justify-center items-center gap-2 mb-6">
          <FaGlobeEurope className="mx-auto text-[#fcb129]" />
          <h4 className="uppercase text-[#fcb129] font-semibold">Make a difference today</h4>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg uppercase md:max-w-4xl">
          Loving God, Loving Others and Serving the world !{' '}
        </h1>
        <p className="text-lg md:text-xl max-w-lg mb-8 drop-shadow-lg">
          Spreading hope, faith, and love through our various programs and initiatives.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link
            href="#about"
            className="bg-[#fcb129] hover:bg-[#1e254b] text-white font-semibold py-2 px-0 rounded-full shadow-lg transition duration-300 flex items-center"
          >
            <h3 className="px-4">Plan Your Visit</h3>
            <IoMdArrowForward className="inline-block ml-4 mr-1.5 bg-[#fffff6] shrink-0 text-[#fcb129] text-4xl rounded-full p-1.5 -rotate-45" />
          </Link>

          <Link
            href="#about"
            className="bg-[#fffff6] text-[#fcb129] hover:text-[#fffff6] hover:bg-[#1e254b] font-semibold py-2 px-0 rounded-full shadow-lg transition-transform duration-300 flex items-center"
          >
            <h3 className="px-4">Events Schedule</h3>
            <IoMdArrowForward className="inline-block ml-1 mr-1.5 bg-[#fcb129] shrink-0 text-[#fffff6] text-4xl rounded-full p-1.5 -rotate-45" />
          </Link>
        </div>

        {/* scroll down */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <Link href="#about">
            
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-center">
              <IoMdArrowDown className="text-white text-4xl" />{' '}
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
