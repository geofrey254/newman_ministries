import React from 'react'
import { Satisfy } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

// team members dummy data
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Senior Pastor',
    photo: '/person4.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Worship Leader',
    photo: '/person2.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Youth Pastor',
    photo: '/person3.jpg',
  },
  {
    name: 'Emily Davis',
    role: "Children's Ministry Director",
    photo: '/person1.jpg',
  },
]

export default function Team() {
  return (
    <section className="px-4 md:px-8 py-16 flex justify-center items-center w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-2">
          <h3 className={`${satisfy.className} text-xl text-[#243061]`}>Lead in Faith</h3>
          <h3 className="uppercase text-4xl md:text-5xl font-bold tracking-wide text-[#243061] leading-tight">
            Meet the Heart Behind Our Faithful Church Mission{' '}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our dedicated team of pastors, staff, and volunteers is committed to guiding you on your
            spiritual journey. With a passion for serving our community and fostering meaningful
            connections, we are here to support and inspire you every step of the way.
          </p>
          <Link
            href="/team"
            className="mt-4 inline-block bg-[#243061] text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#e0a01a] transition"
          >
            Meet Our Team
          </Link>
        </div>

        {/* right side */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center mt-12 md:mt-0">
          {/* team members */}
          <div className="grid grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col justify-center items-center">
                <div className="w-40 h-50 md:w-40 md:h-40 overflow-hidden rounded-3xl border-4 border-[#243061]/50 shadow-lg">
                  <Image
                    width={320}
                    height={320}
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition duration-300"
                  />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#243061]">{member.name}</h4>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
