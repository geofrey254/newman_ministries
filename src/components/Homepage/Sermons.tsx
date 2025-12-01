import React from 'react'
import { Satisfy } from 'next/font/google'
import Image from 'next/image'
import { GoPersonFill } from 'react-icons/go'
import { IoMdPricetag } from 'react-icons/io'
import { IoCalendarSharp } from 'react-icons/io5'
import Link from 'next/link'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

// Dummy Sermons List
const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    category: 'Faith',
    preacher: 'Pastor John Doe',
    date: '2025-02-10',
    time: '10:30 AM',
    image: '/bg.jpg',
    description: 'Discover how to walk in unwavering faith through every season of life.',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    category: 'Prayer',
    preacher: 'Pastor Sarah Williams',
    date: '2025-02-17',
    time: '9:00 AM',
    image: '/worship1.jpg',
    description: 'Learn the true power of a consistent and heartfelt prayer life.',
  },
  {
    id: 3,
    title: 'Living with Purpose',
    category: 'Purpose',
    preacher: 'Pastor Mark Thompson',
    date: '2025-02-24',
    time: '11:00 AM',
    image: '/worship2.jpg',
    description: 'Understand what it means to live a life driven by God’s purpose.',
  },
]

export default function Sermons() {
  return (
    <section className='flex items-center justify-center px-4 md:px-8 py-16 bg-[#fffff6]'>
      <div className="flex flex-col justify-center items-center w-full relative">
        <div className="flex justify-center items-center mb-8 text-xl text-[#243061]">
          <h3 className={`${satisfy.className}`}>Our Sermons</h3>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#243061] uppercase">
          Our Latest Sermons
        </h2>

        <p className="max-w-2xl text-center text-lg text-gray-700 mb-12">
          Explore our collection of recent sermons that inspire, challenge, and encourage you in
          your faith journey. Whether you missed a service or want to revisit a powerful message,
          our sermons are available for you to watch or listen to at your convenience.
        </p>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-br-[80px] overflow-hidden relative">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {sermon.image ? (
                  <Image
                    width={400}
                    height={200}
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Sermon Thumbnail</span>
                )}
              </div>

              <div className="p-4 bg-[#243061] px-8 flex flex-col gap-2 h-full">
                <h3 className="text-xl font-semibold mb-2 text-[#fffff6]">{sermon.title}</h3>
                <hr className='mb-2'/>
                <p className="text-[#fffff6] mb-1 flex items-center gap-2">
                  <span>
                    <GoPersonFill className='text-[#fcb129]' size={20}/>
                  </span>
                  <strong>By:</strong> {sermon.preacher}
                </p>
                <p className="text-[#fffff6] mb-1 flex items-center gap-2">
                  <span>
                    <IoMdPricetag className='text-[#fcb129]' size={20}/>
                  </span>
                  <strong>Category:</strong> {sermon.category}
                </p>
                <p className="text-[#fffff6] mb-4 flex items-center gap-2">
                  <span>
                    <IoCalendarSharp className='text-[#fcb129]' size={20}/>
                  </span>
                  <strong>Date:</strong> {sermon.date}
                </p>
              </div>

              {/* floating date label with bg */}
              <div className="absolute top-2 left-2 bg-[#fcb129] text-white rounded-br-3xl w-14 h-14 flex flex-col justify-center items-center shadow-lg">
                <h3 className="text-lg font-bold">{new Date(sermon.date).toLocaleString('default', { day: '2-digit' })}</h3>
                <p className="text-sm">{new Date(sermon.date).toLocaleString('default', { month: 'short' })}</p>
              </div>
            </div>
          ))}
        </div>

        {/* view more link */}
        <div className="mt-12">
          <Link
            href="#"
            className="bg-[#243061] hover:bg-[#1e254b] text-white font-semibold py-4 px-6 rounded-sm shadow-lg transition duration-300"
          >
            View More Sermons
          </Link>
        </div>
      </div>
    </section>
  )
}
