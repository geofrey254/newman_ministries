import React from 'react'
import Image from 'next/image'
import { LuBookOpen } from "react-icons/lu";
import { Satisfy } from 'next/font/google'
import Link from 'next/link'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

export default function Stats() {
  return (
    <section className="bg-[#243061] px-4 md:px-8 py-16 flex w-full">
      <div className="grid grid-cols-12 gap-4 md:gap-8 items-center w-full">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-2 justify-center">
          <div className="flex justify-start items-center gap-2 text-xl text-[#fffff6]">
            <LuBookOpen />
            <h3 className={`${satisfy.className}`}>Faith in Action</h3>
          </div>
          <div className="gap-2">
            <h3 className="uppercase text-3xl md:text-4xl font-bold tracking-wide text-[#fffff6] leading-tight max-w-lg">
              Honoring Spiritual Rituals While Encouraging Modern fAITH For The Every New Generation
            </h3>
          </div>

          <div className="flex justify-center items-center gap-8">
            <Image
              src="/cross1.png"
              alt="Church Group"
              width={200}
              height={200}
              className="invert opacity-25 hidden md:block"
            />
            <div>
              <p className="text-lg text-gray-200">
                We are a Christ-centered community committed to worship, discipleship, and genuine
                connection. Whether you{"'"}re exploring faith or looking for a place to grow
                deeper, our church is a home where you can experience God{"'"}s love, build
                meaningful relationships, and discover your purpose in Him.
              </p>
              {/* button */}
              <div className="mt-12">
                <Link
                  href="#"
                  className="bg-[#fcb129] hover:bg-[#1e254b] text-white font-semibold py-4 px-6 rounded-sm shadow-lg transition duration-300"
                >
                  Our Location
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex justify-center items-center mt-0 order-first md:order-last relative">
          <Image
            src="/bg.jpg"
            alt="Church Group"
            width={500}
            height={500}
            className="rounded-3xl shadow-lg h-[400px] md:h-[550px] object-cover mb-8 md:mb-0 "
          />

            <div className="absolute -top-4 md:-top-6 -left-2 md:-left-6 bg-[#fffff6] text-[#243061] rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-lg">
              <h3 className="text-xl md:text-3xl font-bold">150+</h3>
              <p className="text-xs text-center w-1/2">Active Members</p>
            </div>

            <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-[#fffff6] text-[#243061] rounded-full w-24 h-24 flex flex-col justify-center items-center shadow-lg">
                <h3 className="text-xl md:text-3xl font-bold">25+</h3> 
                <p className="text-xs text-center w-1/2">Community Programs</p>
            </div>
        </div>
      </div>
    </section>
  )
}
