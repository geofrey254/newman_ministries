import React from 'react'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'

export default function Verse() {
  return (
    <section className="bg-[url('/pray.jpg')] relative bg-cover bg-top bg-no-repeat md:h-screen 2xl:h-[60vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-16">
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#243061] via-[#243061] to-transparent opacity-60"></div>

      {/* grid with right side empty */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* left side content */}
        <div className="text-white flex flex-col justify-center order-first md:order-last md:ml-16">
          <h2 className="mb-4 font-semibold text-[#fcb129] uppercase text-lg">Verse of the Day</h2>
          <p className="text-3xl md:text-5xl font-bold mb-6 uppercase">
            The Lord is my shepherd; I shall not want.
          </p>

          {/* meaning */}
          <p className="text-md md:text-lg mb-4">
            This verse from Psalm 23 expresses trust and confidence in God{"'"}s provision and care. It
            signifies that with God as our guide and protector, we lack nothing essential for our
            well-being.
          </p>

          {/* reference */}
          <p className="text-md md:text-lg">- Psalm 23:1</p>

          {/* button */}
          <div className="mt-8">
            <Link
              href="https://www.bible.com/verse-of-the-day"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fcb129] hover:bg-[#1e254b] text-white font-semibold py-1 px-0 rounded-full shadow-lg transition duration-300 flex items-center w-max"
            >
              <h3 className="px-4">Read More</h3>
              <IoMdArrowForward className="inline-block ml-4 mr-1.5 bg-[#fffff6] shrink-0 text-[#fcb129] text-4xl rounded-full p-1.5 -rotate-45" />
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className='hidden md:flex'></div>
      </div>
    </section>
  )
}
