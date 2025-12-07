import React from 'react'
import { Satisfy } from 'next/font/google'
import Image from 'next/image'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})
export default function About() {
  return (
    <section className="px-8 md:px-12 py-16 flex justify-center items-center w-full">
      <div className="grid grid-cols-2 gap-12 md:gap-24">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-start gap-2">
          <h3 className={`${satisfy.className} text-xl text-[#243061]`}>Hope in Christ</h3>
          <h3 className="uppercase text-4xl md:text-5xl font-bold tracking-wide text-[#243061] leading-tight">
            A Community Rooted in Faith, Hope, and the Love of Christ{' '}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Newman Ministries is a joyful, Christ-centered community dedicated to helping people
            experience God{"'"}s love in a real and transformative way. We believe the church isn
            {"'"}t just a building - it{"'"}s a family. And from the moment you walk through our
            doors, our prayer is that you feel welcomed, seen, and deeply cared for.
          </p>
        </div>

        {/* right side */}
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">
          <Image
            src="/pray.jpg"
            width={500}
            height={200}
            alt="About us image"
            className="rounded-3xl border-6 border-[#243061] md:h-[60vh] md:rotate-6"
          />
        </div>
      </div>
    </section>
  )
}
