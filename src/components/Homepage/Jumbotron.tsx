import React from 'react'
import Marquee from 'react-fast-marquee'
import { GoNorthStar } from "react-icons/go";

export default function Jumbotron() {
  return (
    // macquee section
    <section>
      <div className="bg-[#1e254b] text-white py-4 overflow-hidden">
        <div className="whitespace-nowrap flex space-x-8 md:space-x-16 px-4 md:px-8">
          <Marquee className='flex gap-4'>
            <span className="text-lg md:text-lg font-semibold flex items-center">
              Welcome to Newman Ministries &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-lg md:text-lg font-semibold flex items-center">
              Join us for Sunday Services at 10 AM &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-lg md:text-lg font-semibold flex items-center">
              Get Involved in Our Community Programs &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-lg md:text-lg font-semibold flex items-center">
              Support Our Mission &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;
            </span>
            <span className="text-lg md:text-lg font-semibold flex items-center">Contact Us at: +254 707 019270 &nbsp; &nbsp; &nbsp; <GoNorthStar /> &nbsp; &nbsp;</span>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
