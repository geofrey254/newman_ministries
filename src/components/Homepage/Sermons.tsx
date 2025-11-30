import React from 'react'
import { Satisfy } from 'next/font/google'
import Image from 'next/image'

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
    <section>
      <div className="px-8 py-16 flex flex-col justify-center items-center bg-[#f9f9f4] w-full relative">
        <div className="flex justify-center items-center gap-2 text-xl text-[#243061]">
          <h3 className={`${satisfy.className}`}>Our Sermons</h3>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#243061]">
          Latest Sermons
        </h2>

        <p className="max-w-2xl text-center text-lg text-gray-700 mb-12">
          Explore our collection of recent sermons that inspire, challenge, and encourage you in
          your faith journey. Whether you missed a service or want to revisit a powerful message,
          our sermons are available for you to watch or listen to at your convenience.
        </p>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-br-[100px] shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
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

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mb-1">
                  <strong>By:</strong> {sermon.preacher}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Category:</strong> {sermon.category}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Date:</strong> {sermon.date} • <strong>Time:</strong> {sermon.time}
                </p>

                <button className="bg-[#fcb129] hover:bg-[#1e254b] text-white font-semibold py-2 px-4 rounded-sm shadow-lg transition duration-300">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
