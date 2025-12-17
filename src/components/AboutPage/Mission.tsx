import React from 'react'
import { FaChurch } from 'react-icons/fa6'
import { PiCrossLight } from 'react-icons/pi'
import { GiPeaceDove } from "react-icons/gi";
import Image from 'next/image'

import { Satisfy } from 'next/font/google'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
})

export default function Mission() {
  return (
    <section id='about' className="px-8 md:px-8 py-12 md:py-16 flex flex-col justify-center items-center bg-white w-full relative">
         <div className="max-w-3xl flex justify-center items-start flex-col">
           <div className="flex justify-center items-center gap-2 text-xl text-[#243061]">
             <FaChurch />
             <h3 className={`${satisfy.className}`}>Love, Light, Grace</h3>
           </div>
      
   
           {/* mission and vision */}
           <div className="flex flex-col md:flex-row md:gap-36 items-start justify-center max-w-2xl mt-10">
             <div className="mission flex flex-col text-left md:text-right">
               <div className="flex items-center md:justify-end">
                 <div className="h-0.5 w-8 md:w-16 bg-gray-400 mr-4"></div>
                 <h3 className="font-semibold text-[#243061] text-xl uppercase tracking-tighter">
                   Our mission
                 </h3>
                 <div className="h-0.5 w-16 md:w-8 bg-gray-400 ml-4"></div>
               </div>
               <p className="mt-2 md:mt-6 ml-4 md:ml-0 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                 To lead people into a growing relationship with Jesus Christ by creating a welcoming
                 community, cultivating spiritual transformation, and empowering believers to live out
                 God{"'"}s love in the world.{' '}
               </p>
             </div>
   
             <div className="absolute hidden md:flex items-center justify-center left-1/2 transform -translate-x-1/2">
               <PiCrossLight size={120} className="mx-8 text-[#243061]/10" />
             </div>
   
             <div className="vision mt-8 items-center text-left md:mt-0">
               <div className="flex items-center md:justify-start">
                 <div className="h-0.5 w-8 md:w-16 bg-gray-400 mr-4"></div>
                 <h3 className="font-semibold text-[#243061] text-xl uppercase tracking-tighter">
                   Our vision
                 </h3>
                 <div className="h-0.5 w-16 md:w-8 bg-gray-400 ml-4"></div>
               </div>
               <p className="mt-2 md:mt-6 ml-4 md:ml-0 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
                 To become a vibrant, Spirit-led church that transforms lives, strengthens families,
                 and impacts our city and beyond with the hope and power of the Gospel.
               </p>
             </div>
           </div>
         </div>
         {/* images */}
         <div className="flex justify-center items-center gap-8 md:gap-0">
           <div className="md:absolute left-8 2xl:left-40 top-0 mt-12 md:mb-12">
             <Image
               src="/worship1.jpg"
               alt="About us image"
               width={220}
               height={80}
               className="rounded-lg shadow-lg object-cover max-w-full h-[300px] md:h-auto md:border-4 border-[#fcb129]"
             />
           </div>
   
           <div className="md:absolute right-8 2xl:right-40 bottom-0 mt-12 md:mb-12">
             <Image
               src="/worship2.jpg"
               alt="About us image"
               width={220}
               height={80}
               className="rounded-lg shadow-lg object-cover max-w-full h-[300px] md:h-auto md:border-4 border-[#fcb129]"
             />
         </div>
         </div>
   
         {/* random absolute images */}
         <div className='hidden md:block'>
           <GiPeaceDove size={200} className="absolute top-8 right-12 text-[#243061]/20 opacity-30" />
           <Image
             src="/christ.png"
             alt="Jesus"
             width={600}
             height={600}
             className="absolute -bottom-16 left-32 transform -translate-x-1/2 opacity-20"
           />
         </div>
       </section>
  )
}
