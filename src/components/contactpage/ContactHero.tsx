import React from 'react'
import Link from 'next/link'
import { MdNavigateNext } from 'react-icons/md'

export default function ContactHero() {
  return (
     <section className="bg-[url(/events.jpg)] relative flex justify-center items-center h-[20vh] md:h-[40vh] 2xl:h-[20vh] bg-center bg-cover">
      <div className="absolute inset-0 bg-[#243061] opacity-60 z-10"></div>
      <div className='z-30'>
        <h3 className="text-[#fffff6] text-5xl md:text-6xl font-bold">Contact Us </h3>
        <div className='text-[#fffff6] flex justify-center items-center gap-2 text-lg'>
          <Link href="/">
            Home
          </Link>{' '}
          <MdNavigateNext /> <h3>Contact Us</h3>
        </div>
      </div>
    </section>
  )
}
