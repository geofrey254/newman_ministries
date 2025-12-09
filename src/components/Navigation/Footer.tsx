import React from 'react'
import { FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import { IoMdMailUnread } from 'react-icons/io'
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#fffff6] text-[#243061] py-12 mt-12 flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center justify-center mb-12">
          <Image
          width={300}
          height={140}
            src="/logo.png"
            alt="Newman Ministries Logo"
            className="h-16 w-auto mb-4"
          />
          <p className="text-center max-w-2xl text-sm sm:text-base leading-relaxed">
            Newman Ministries is dedicated to spreading the message of hope, faith, and love through
            our various programs and initiatives.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12 max-w-6xl mx-auto">
          {/* Address */}
          <div className="flex flex-col items-center sm:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-2xl md:text-4xl bg-[#243061] text-[#fffff6] p-1.5 rounded-full shrink-0" />
              <h3 className="font-semibold text-sm md:text-lg uppercase tracking-wide">Our Address</h3>
            </div>
            <p className="text-xs md:text-lg leading-relaxed ml-0 sm:ml-10">123 Faith Avenue, Nairobi, Kenya</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-2xl md:text-4xl bg-[#243061] text-[#fffff6] p-1.5 rounded-full shrink-0" />
              <h3 className="font-semibold text-sm md:text-lg uppercase tracking-wide">Call Us</h3>
            </div>
            <p className="text-xs md:text-lg leading-relaxed ml-0 sm:ml-10">+254 707 019270</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-3">
              <IoMdMailUnread className="text-2xl md:text-4xl bg-[#243061] text-[#fffff6] p-1.5 rounded-full shrink-0" />
              <h3 className="font-semibold text-sm md:text-lg uppercase tracking-wide">Email Us</h3>
            </div>
            <p className="text-xs md:text-lg leading-relaxed ml-0 sm:ml-10 break-all">info@newmanministries.org</p>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-3">
              <FaGlobe className="text-2xl md:text-4xl bg-[#243061] text-[#fffff6] p-1.5 rounded-full shrink-0" />
              <h3 className="font-semibold text-sm md:text-lg uppercase tracking-wide">Visit Us</h3>
            </div>
            <p className="text-xs md:text-lg leading-relaxed ml-0 sm:ml-10 break-all">www.newmanministries.org</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#243061]/10 pt-6">
          <p className="text-center text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Newman Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}