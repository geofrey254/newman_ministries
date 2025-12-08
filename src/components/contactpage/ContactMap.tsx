import React from 'react'

export default function ContactMap() {
  return (
    <section className="flex justify-center items-center md:px-4">
      <div className="w-full max-w-5xl">
        {/* Responsive height box */}
        <div
          className="
            relative w-full overflow-hidden rounded-xl border-4 border-[#243061] shadow-2xl
            pt-[75%]   
            md:pt-[60%]    
            lg:pt-[80%]     
            xl:pt-[90%]     
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2632.7630906745994!2d36.65779794411639!3d-1.2826606577992392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ske!4v1765210728111!5m2!1sen!2ske"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
