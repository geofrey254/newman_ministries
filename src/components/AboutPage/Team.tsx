import React from 'react'
import Image from 'next/image'

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
    <section className="bg-[#1e254b] w-full px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-3 mb-8 md:mb-16">
          <h4 className="text-[#fffff6] text-sm md:text-base tracking-wider uppercase font-light">
            Our Team
          </h4>
          <h3 className="text-[#fffff6] text-4xl md:text-5xl lg:text-6xl text-center font-semibold">
            Our Pastors
          </h3>
          <div className="w-24 h-1 bg-[#fcb129] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Image container with gradient overlay */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-400/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 text-center">
                <h4 className="text-[#fffff6] text-xl font-semibold mb-2 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-blue-200/80 text-sm font-light tracking-wide">{member.role}</p>

                {/* Animated underline */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-transparent via-[#fcb129] to-transparent transition-all duration-500 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
