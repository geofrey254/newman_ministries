'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function ContactCTA() {

  return (
    <section className="w-full bg-[url(/events.jpg)] bg-cover bg-center min-h-[50vh] md:min-h-[80vh] relative z-30 overflow-hidden pb-0">
      <div className="absolute bottom-0 z-10 w-full leading-none">
        <Marquee className="overflow-hidden leading-none! flex gap-8">
          <span className="text-[7rem] md:text-[9rem] text-white font-semibold tracking-tight leading-none! block pb-0">
            Welcome to Newman Ministries International !
          </span>
          <span>{" "}</span>
        </Marquee>
      </div>

      {/* Background with Gradient */}
      <div className="absolute inset-0 z-20 bg-linear-to-t from-black/90 via-black/10 to-transparent pointer-events-none"></div>
    </section>
  )
}
