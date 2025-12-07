import React from 'react'
import Marquee from 'react-fast-marquee'
import { GoNorthStar } from "react-icons/go";

export default function Jumbotron() {
  return (
    // macquee section
    <section className='w-full'>
      <div className="bg-[#1e254b] w-full text-white py-6 overflow-hidden">
        <div className="whitespace-nowrap flex space-x-8 md:space-x-16 px-4 md:px-8 w-full">
          <Marquee direction='right' pauseOnClick className='flex gap-4 uppercase w-full'>
            <span className="text-xl md:text-2xl font-semibold flex items-center">
              Grace guiding our path &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-xl md:text-2xl font-semibold flex items-center">
              Grounded Firm in Truth &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-xl md:text-2xl font-semibold flex items-center">
              Embrace the Journey &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-xl md:text-2xl font-semibold flex items-center">
              Our Hope in Christ &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-xl md:text-2xl font-semibold flex items-center">Faith, Hope, Love Abound &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;</span>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
