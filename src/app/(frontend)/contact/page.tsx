import React from 'react'
import ContactHero from '@/components/contactpage/ContactHero'
import ContactForm from '@/components/contactpage/ContactForm'
import ContactImage from '@/components/contactpage/ContactImage'
import ContactCTA from '@/components/contactpage/ContactCTA'
import ContactInfo from '@/components/contactpage/ContactInfo'
import ContactMap from '@/components/contactpage/ContactMap'
import AboutCTA from '@/components/AboutPage/AboutCTA'

export default function page() {
  return (
    <>
      <ContactHero />

      {/* Main Content */}
      <div className="py-10 md:py-12 bg-[#fffff6] relative z-30 overflow-hidden">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-10 md:px-12 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <ContactForm />
              <ContactImage />
            </div>
          </div>
        </section>
      </div>

      <ContactCTA />

      <div className="py-10 md:py-18 bg-[#fffff6] relative z-30 overflow-hidden">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-10 md:px-12 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className='order-2 md:order-1'>
                {' '}
                <ContactMap />
              </div>{' '}
              <div className='order-1 md:order-2'> 
                {' '}
                <ContactInfo />
              </div>{' '}
            </div>
          </div>
        </section>
      </div>

      <AboutCTA/>
    </>
  )
}
