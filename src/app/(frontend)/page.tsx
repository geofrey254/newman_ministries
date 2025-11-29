import React from 'react'
import Hero from '@/components/Homepage/Hero'
import Jumbotron from '@/components/Homepage/Jumbotron'
import About from '@/components/Homepage/About'

export default function page() {
  return (
    <>
      <Hero />
      <Jumbotron />
      <About />
    </>
  )
}
