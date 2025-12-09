import React from 'react'
import { RiMailSendFill } from "react-icons/ri";

export default function Newsletter() {
  return (
    <section>
      <div className="bg-[url('/prayer.jpg')] bg-cover bg-center bg-fixed relative text-white h-[70vh] md:h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-b from-[#243061]/80 via-[#000000]/30 to-[#000000]/80"></div>
        
        <h2 className='font-light mb-8 text-[#fcb129] z-50 uppercase flex justify-center items-center gap-2'><span><RiMailSendFill size={20}/></span>Subscribe To Our Newsletter</h2>

        <h2 className="text-5xl uppercase font-bold mb-4 text-center z-50">
          Keep Up With Our <span className="text-[#fcb129]">Latest News</span>
        </h2>
        <p className="mb-6 text-center max-w-2xl z-50">
          Stay updated with the latest news, events, and inspirational content from Newman
          Ministries. Join our community and never miss an update!
        </p>
        <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 z-50 mt-8 bg-[#fffff6] px-4 py-2 rounded-xl md:rounded-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md text-gray-800 focus:outline-none text-center md:text-left"
          />
          <button
            type="submit"
            className="bg-[#fcb129] hover:bg-[#e0a21a] text-white font-semibold px-6 py-4 rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
