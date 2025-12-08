'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactImage() {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  }

  return (
    <motion.div
      id="contact-info"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10 pb-8"
    >
      <Image src="/worship1.jpg" width={500} height={300} alt="contact info image" className='rounded-xl h-[50vh] md:h-auto' />
    </motion.div>
  )
}
