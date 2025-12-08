/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'
import { FaQrcode } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import { toast } from 'sonner'

export default function GivePage() {
  // Replace with real information
  const MPESA_PAYBILL = '123456'
  const MPESA_ACCOUNT_PREFIX = 'NM'
  const SUPPORT_EMAIL = 'giving@newmanministries.org'
  const SUPPORT_PHONE = '+254 700 000 000'

  const [phone, setPhone] = useState<string>('')
  const [copied, setCopied] = useState<{ what: string | null }>({ what: null })

 

  async function copy(text: string, what: string) {
    await navigator.clipboard.writeText(text)
    setCopied({ what })

    toast.success(`${what === 'paybill' ? 'Paybill Number' : 'Account'} copied!`, {
      description: text,
    })

    setTimeout(() => setCopied({ what: null }), 2000)
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-[#fbf7ef] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#243061]">
            Give to Newman Ministries International
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your generosity fuels our mission — worship, discipleship, outreach, and compassion.
            Thank you for giving faithfully.
          </p>
        </header>

        {/* Main Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Donation & Paybill Display */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#243061] mb-4">Give via M-PESA</h2>

            {/* PAYBILL DISPLAY */}
            <div className="bg-[#fffaf0] border border-[#f1d79a] rounded-xl p-6 mb-10">
              <h3 className="text-xl font-bold text-[#243061] mb-3">Lipa na M-PESA</h3>

              <div className="flex flex-col gap-4">
                {/* Paybill */}
                <div>
                  <p className="text-sm text-gray-600">Business Number</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                    <span className="text-2xl font-bold text-[#104179]">{MPESA_PAYBILL}</span>
                    <button
                      onClick={() => copy(MPESA_PAYBILL, 'paybill')}
                      className="text-[#104179] flex cursor-pointer items-center gap-1 px-3 py-2 rounded-lg border border-[#104179]"
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>

                {/* Account */}
                <div>
                  <p className="text-sm text-gray-600">Account (Use your name or phone)</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-200">
                    <span className="text-lg font-semibold text-[#104179]">
                      {MPESA_ACCOUNT_PREFIX}
                      {phone || '07XXXXXXXX'}
                    </span>
                    <button
                      onClick={() => copy(`${MPESA_ACCOUNT_PREFIX}${phone || ''}`, 'account')}
                      className="text-[#104179] flex cursor-pointer items-center gap-1 px-3 py-2 rounded-lg border border-[#104179]"
                    >
                      <FiCopy /> Copy
                    </button>
                  </div>
                </div>

                {/* QR Placeholder */}
                <div className="mx-auto mt-4">
                  <div className="w-32 h-32 bg-white rounded-xl border border-gray-300 flex flex-col items-center justify-center">
                    <FaQrcode className="text-gray-400 text-4xl" />
                    <p className="text-xs text-gray-500 mt-1">Scan to Give</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  For faster reconciliation, use your phone number in the account field.
                </p>
              </div>
            </div>

           
          </div>

          {/* Right: Why We Give */}
          <aside className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#243061] mb-3">Why We Give</h3>
            <p className="text-gray-700 mb-4">
              Your generosity helps Newman Ministries bring hope, support, and transformation to our
              community.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">Impact</h4>
                <p className="text-sm text-gray-600 mt-2">
                  “Your giving allowed us to support families and expand discipleship programs.” —
                  Outreach Lead
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Giving Options</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  <li>One-time giving</li>
                  <li>Monthly partnership</li>
                  <li>Ministry-specific giving</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Support</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Email:{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#243061] underline">
                    {SUPPORT_EMAIL}
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Phone:{' '}
                  <a href={`tel:${SUPPORT_PHONE}`} className="text-[#243061] underline">
                    {SUPPORT_PHONE}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 border-t pt-6 text-sm text-gray-500">
              <p>
                <strong>Note:</strong> Replace the Paybill & account details with your official
                church credentials.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
