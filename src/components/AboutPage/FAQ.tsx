'use client'
import React, { useState } from 'react'

const faqs = [
  {
    question: 'What time are Sunday services?',
    answer:
      'Our Sunday services are held at 8:00 AM and 10:30 AM. Both services feature inspiring worship, biblical teaching, and a welcoming community. We also offer a Spanish service at 1:00 PM.',
  },
  {
    question: 'What should I wear to church?',
    answer:
      "Come as you are! We believe that church is a place where everyone is welcome, regardless of what you wear. You'll see people in everything from casual jeans to business attire. The most important thing is that you feel comfortable.",
  },
  {
    question: 'Do you have programs for children?',
    answer:
      "Yes! We have age-appropriate programs for children from infants through 6th grade during our Sunday services. Our Children's Ministry provides a safe, fun, and engaging environment where kids can learn about God's love.",
  },
  {
    question: 'Is there parking available?',
    answer:
      'We have ample parking available in our main lot and overflow parking across the street. Our parking team will be happy to direct you when you arrive. We also have designated parking for first-time guests near the main entrance.',
  },
  {
    question: 'How can I get involved in the church?',
    answer:
      'There are many ways to get connected! You can join a small group, volunteer in one of our ministries, attend our newcomers class, or participate in our community outreach programs. Visit our Connect page or speak with our welcome team on Sunday.',
  },
  {
    question: 'Do you offer Bible studies or small groups?',
    answer:
      'Yes! We have various small groups that meet throughout the week in different locations. These groups provide opportunities for deeper relationships, Bible study, prayer, and mutual support. Check our website or connect with our small groups coordinator for more information.',
  },
  {
    question: 'How can I support the church financially?',
    answer:
      'You can give through our online giving platform, mobile app, by mail, or in person during services. We also accept stock donations and recurring gifts. All donations are tax-deductible, and we provide end-of-year giving statements.',
  },
  {
    question: 'Do you stream services online?',
    answer:
      'Yes! All our services are livestreamed and archived on our website, YouTube channel, and Facebook page. This allows you to worship with us from anywhere in the world or catch up on a message you missed.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#fffff6] w-full px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Text content */}
          <div className="lg:sticky lg:top-24">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[#fcb129] text-sm md:text-base font-semibold tracking-wider uppercase">
                  Have Questions?
                </span>
                <div className="w-20 h-1 bg-[#fcb129] mt-2"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e254b] leading-tight">
                Frequently Asked Questions
              </h2>

              <p className="text-[#1e254b]/70 text-lg leading-relaxed">
                We{"'"}re here to help answer your questions about our church, services, and
                community. If you don{"'"}t find what you{"'"}re looking for, please don{"'"}t
                hesitate to reach out to us.
              </p>

              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#243061] flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#fffff6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e254b] mb-1">Call Us</h4>
                    <p className="text-[#1e254b]/70 text-sm">+254 707 019270</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#243061] flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-[#fffff6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e254b] mb-1">Email Us</h4>
                    <p className="text-[#1e254b]/70 text-sm">info@newmanministries.com</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 px-8 py-3 bg-[#1e254b] text-white rounded-full font-medium hover:bg-[#fcb129] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[#1e254b] text-lg group-hover:text-[#fcb129] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#fcb129]/10 flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-[#fcb129] rotate-180' : 'group-hover:bg-[#fcb129]/20'}`}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-[#fcb129]'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <div className="w-12 h-1 bg-[#fcb129] rounded-full mb-4"></div>
                    <p className="text-[#1e254b]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
