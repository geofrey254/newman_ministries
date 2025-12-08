import Link from 'next/link'
import React from 'react'
import { FaChurch, FaVideo } from 'react-icons/fa'
import Image from 'next/image'
import { Satisfy } from 'next/font/google'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

export default function SermonList() {
  const sermons = [
    {
      title: 'The Power of Faith in Difficult Seasons',
      preacher: 'Pastor David Newman',
      date: 'Feb 23, 2025',
      desc: 'A heartfelt message reminding us of God’s faithfulness even in the storms of life.',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Walking in God’s Purpose',
      preacher: 'Pastor Grace Muli',
      date: 'Mar 02, 2025',
      desc: 'Discover how to align your daily steps with the calling and purpose God designed for you.',
      img: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Living a Life of Worship',
      preacher: 'Pastor Daniel K.',
      date: 'Mar 09, 2025',
      desc: 'Learn how worship is more than a song — it’s a lifestyle that honors God every day.',
      img: 'https://images.unsplash.com/photo-1519680772-6d0136c85f2d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Strength for the Weary',
      preacher: 'Pastor Ruth N.',
      date: 'Mar 16, 2025',
      desc: 'An uplifting sermon centered on God’s promise to renew the strength of those who wait on Him.',
      img: 'https://images.unsplash.com/photo-1526045431048-e56f0682c4c1?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'The Heart of Generosity',
      preacher: 'Pastor Michael O.',
      date: 'Mar 23, 2025',
      desc: 'A powerful teaching on how giving transforms both the church and the believer.',
      img: 'https://images.unsplash.com/photo-1528031049390-7aa6d0a3b117?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Hope That Anchors the Soul',
      preacher: 'Pastor Ann W.',
      date: 'Mar 30, 2025',
      desc: 'A message of hope reminding us that Christ is our firm and unshakable foundation.',
      img: 'https://images.unsplash.com/photo-1525973601809-8f47f3e84e5a?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section className="relative bg-[#fffff6] min-h-screen rounded-t-3xl px-6 md:px-12 2xl:px-18 py-16">
      <div className="flex justify-center items-center mb-8 text-xl text-[#243061] gap-3">
        <FaChurch />
        <h3 className={`${satisfy.className}`}>Sermon Highlights</h3>
      </div>

      <div>
        <h3 className="text-[#243061] font-semibold text-4xl md:text-5xl text-center mb-8">
          Discover True Sermons
        </h3>
      </div>
      {/* Sermons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {sermons.map((sermon, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden group shadow-md bg-[#fffff6] hover:bg-[#243061] = cursor-pointer border border-[#fcb129] hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-[40vh] md:h-[60vh] w-full overflow-hidden p-4">
              <Image
                width={600}
                height={400}
                src={sermon.img}
                alt={sermon.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-0">
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-[#243061] group-hover:text-[#fffff6] font-medium">
                  {sermon.preacher}
                </span>
                <span className="text-gray-600 group-hover:text-[#fffff6]">{sermon.date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#243061] group-hover:text-[#fffff6]">
                {sermon.title}
              </h3>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center px-6 pb-4">
              <Link
                href="#"
                className="text-[#243061] group-hover:text-[#fffff6] underline hover:text-[#fcb129] transition-colors"
              >
                Read Message
              </Link>

              <Link
                href="#"
                className="bg-[#243061] rounded-lg p-3 text-white hover:bg-[#fcb129] transition-colors"
              >
                <FaVideo />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
