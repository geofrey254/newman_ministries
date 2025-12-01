"use client"
import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="px-4 md:px-8 py-20 flex justify-center items-center w-full">
      <div className="max-w-7xl w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#e0a01a] uppercase tracking-widest">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#243061] leading-tight mb-6">
            Let{"'"}s Connect & Pray Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you have a prayer request, need guidance, want to get involved, 
            or simply want to say hello — Newman Ministries is here for you.  
            We look forward to walking with you in faith.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-64 md:h-80 bg-linear-to-br from-[#243061] to-[#1a2447] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-[#e0a01a] rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#e0a01a] rounded-full blur-3xl"></div>
                </div>

                <div className="relative text-center z-10 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-white mb-2">We{"'"}re Here for You</h3>
                  <p className="text-gray-200">You are loved, seen, and welcomed</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#243061] mb-4">Why Reach Out?</h4>
                  <ul className="space-y-3">

                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#e0a01a] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Request prayer or spiritual support</span>
                    </li>

                    <li className="flex items-start gap-3">
                       <svg className="w-6 h-6 text-[#e0a01a] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Learn more about our ministries and programs</span>
                    </li>

                    <li className="flex items-start gap-3">
                       <svg className="w-6 h-6 text-[#e0a01a] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Connect with a pastor or ministry leader</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#e0a01a] shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Get involved or join a volunteer team</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-[#243061] mb-4">We Respond with Care</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our ministry team prayerfully reviews every message and typically responds 
                    within 24-48 hours. If you require urgent pastoral support, please indicate it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#243061] mb-2">Send Us a Message</h3>
            <p className="text-gray-600 mb-8">We’re grateful to connect with you.</p>

            {/* Form Fields */}
            {/* (unchanged except placeholder text) */}

            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-semibold text-[#243061] mb-2">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                  focusedField === 'name' ? 'border-[#243061] shadow-lg shadow-[#243061]/10' : 'border-gray-200 hover:border-gray-300'
                }`}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="block text-sm font-semibold text-[#243061] mb-2">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                    focusedField === 'email' ? 'border-[#243061] shadow-lg shadow-[#243061]/10' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#243061] mb-2">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white ${
                    focusedField === 'phone' ? 'border-[#243061] shadow-lg shadow-[#243061]/10' : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
              </div>
            </div>

        

            {/* Message */}
            <div className="mt-5">
              <label className="block text-sm font-semibold text-[#243061] mb-2">Your Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we support you today?"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white resize-none ${
                  focusedField === 'message' ? 'border-[#243061] shadow-lg shadow-[#243061]/10' : 'border-gray-200 hover:border-gray-300'
                }`}
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full bg-[#243061] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e0a01a] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
