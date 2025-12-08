import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrLinkNext } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'

export default function EventsList() {
  const events = [
    {
      title: 'Sunday Worship Experience',
      country: 'Newman Church',
      date: 'Mar 18, 2025',
      desc: 'Join us for a powerful time of worship, biblical teaching, and community as we gather to encounter God together.',
      img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Community Prayer Night',
      country: 'Newman Church',
      date: 'Apr 05, 2025',
      desc: 'An uplifting evening of prayer, intercession, and worship as we seek God’s heart for our church and city.',
      img: 'https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Youth Alive Gathering',
      country: 'Newman Church',
      date: 'Jun 12, 2025',
      desc: 'A high-energy gathering for youth filled with worship, teaching, games, and Christ-centered connection.',
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Bible Study & Discipleship Class',
      country: 'Newman Church',
      date: 'Jul 22, 2025',
      desc: 'Dive deep into Scripture and grow in your faith through guided teaching and open discussion.',
      img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Worship & Revival Night',
      country: 'Newman Church',
      date: 'Aug 09, 2025',
      desc: 'A powerful night of extended worship, prayer, and surrender as we pursue the presence of God together.',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Volunteer Appreciation Banquet',
      country: 'Newman Church',
      date: 'Nov 21, 2025',
      desc: 'Celebrating and honoring the incredible volunteers who make ministry happen every week.',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <section className="relative bg-[#fffff6] min-h-screen md:min-h-[60vh] lg:min-h-screen rounded-t-3xl z-30 px-6 md:px-12 2xl:px-18 py-12 overflow-hidden">
      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-[#104179]/5 border border-[#fcb129] hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden rounded-b-xl shadow-lg shadow-[#000000]/20 border-b-2 border-[#fcb129]">
              <Image
                width={500}
                height={500}
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex justify-center items-center gap-3">
              <div className="flex flex-col gap-2">
                <h2 className="flex items-center gap-1 text-[#104179] text-sm">
                  <span>
                    <IoLocationSharp className="text-[#fcb129]" />
                  </span>
                  {event.country}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-[#104179] font-semibold text-xl">{event.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#104179]">{event.title}</h3>
                <p className="text-sm">{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* links */}
      <div className="flex justify-center items-center mt-12">
        <Link
          href="#"
          className="flex items-center justify-center gap-2 border border-[#104179] text-[#104179] text-xl rounded-xl px-4 py-2 hover:scale-105 transition-transform delay-200"
        >
          Next Page <GrLinkNext className="-rotate-45" />
        </Link>
      </div>
    </section>
  )
}
