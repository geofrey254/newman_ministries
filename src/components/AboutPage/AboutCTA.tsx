import React from 'react'
import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="bg-[#1e254b] w-full px-6 md:px-12 lg:px-16 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-[#fcb129]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl'></div>
      
      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='bg-[#fcb129] p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden'>
          {/* Decorative patterns */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32'></div>
          <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-[#171e3c]/5 rounded-full -mb-48'></div>
          
          <div className='relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            
           

            {/* Text Content */}
            <div className='grow text-center lg:text-left space-y-4'>
              <div className='inline-block'>
                <h3 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#171e3c] uppercase leading-tight'>
                  This Is Your
                  <span className='block mt-2'>
                    Moment.
                  </span>
                </h3>
                <div className='w-24 h-1.5 bg-[#171e3c] rounded-full mt-4 mx-auto lg:mx-0'></div>
              </div>
              
              <p className='text-[#171e3c] text-lg md:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed'>
                God has an incredible plan for your life, and we{"'"}d love to walk with you as you discover it.
              </p>

              {/* Stats or additional info */}
              <div className='flex flex-wrap gap-6 justify-center lg:justify-start pt-4'>
                <div className='flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full'>
                  <svg className='w-5 h-5 text-[#171e3c]' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'/>
                  </svg>
                  <span className='text-[#171e3c] font-semibold text-sm'>Join Our Community</span>
                </div>
                <div className='flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full'>
                  <svg className='w-5 h-5 text-[#171e3c]' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd'/>
                  </svg>
                  <span className='text-[#171e3c] font-semibold text-sm'>Sundays 10:30 AM</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className='shrink-0'>
              <Link 
                href="#" 
                className='group relative bg-[#243061] text-[#fffff6] px-10 py-4 text-lg md:text-xl rounded-2xl uppercase font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 overflow-hidden'
              >
                <span className='relative z-10'>Join Us</span>
                <svg 
                  className='w-6 h-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300' 
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
                {/* Hover effect overlay */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}