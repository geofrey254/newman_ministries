'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

export default function ContactInfo() {

    const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactInfo = [
   
    {
      icon: Phone,
      title: 'Contact Number',
      value: '+254 707 019270',
      description: 'Call us for prayers, support, or inquiries.',
      href: 'tel:+15552348890',
    },
    {
      icon: Clock,
      title: 'Church Hours',
      value: 'Sun: 9:00 AM – 1:00 PM',
      description: 'Weekly services, bible study, and prayer sessions.',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gikambura, Opposite Shell Petrol Station',
      description: 'Visit us or worship with us in person.',
      href: '#map',
    },
     {
      icon: Mail,
      title: 'Email',
      value: 'support@newmanministriesintl.org',
      description: 'For all ministry and support inquiries.',
      href: 'mailto:support@newmanministriesintl.org',
    },
  ]
  return (
    <motion.div
      id="contact-info"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10 pb-8"
    >
      {/* Section Title */}
      <motion.div variants={itemVariants}>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#243061] mb-4">
          Contact Newman Ministries Intl
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We’re here to serve you with love, support, and prayer.  
          Reach out through any of the contacts below and we’ll respond soon.
        </p>
      </motion.div>

      {/* Contact Items */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-12"
      >
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            href={info.href}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group block transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#243061] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#243061] text-xl mb-1">
                  {info.title}
                </h3>
                <p className="text-[#fcb129] md:font-medium mb-1 text-sm">
                  {info.value}
                </p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}
