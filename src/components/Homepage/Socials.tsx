import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

export default function Socials() {
  return (
    <section className='bg-[#243061] px-4 md:px-8 py-16 flex justify-center items-center w-full text-white'>
        {/* social section with follow us text on left and social links on the right */}
        <div className='max-w-5xl w-full flex flex-col md:flex-row justify-between md:items-center gap-8'>
            {/* left side */}
            <div className='flex flex-col items-start text-left gap-4'>
                <h3 className='text-3xl md:text-4xl font-bold'>Stay Connected with Us!</h3>
                <p className='text-lg max-w-2xl'>Follow us on social media to stay updated on our latest news, events, and inspirational content. Join our online community and be part of the conversation!</p>
            </div>
            
            {/* right side - social links */}
            <div className='flex md:justify-center items-center gap-6'>
                <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='bg-white text-[#243061] p-3 rounded-full hover:bg-[#e0a01a] hover:text-white transition'>
                    <FaFacebookF size={24} />
                </Link>
                <Link href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className='bg-white text-[#243061] p-3 rounded-full hover:bg-[#e0a01a] hover:text-white transition'>
                    <FaXTwitter size={24} />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='bg-white text-[#243061] p-3 rounded-full hover:bg-[#e0a01a] hover:text-white transition'>
                    <FaInstagram size={24} />
                </Link>
                <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='bg-white text-[#243061] p-3 rounded-full hover:bg-[#e0a01a] hover:text-white transition'>
                    <FaYoutube size={24} />
                </Link>
            </div>
        </div>
    </section>
  )
}
