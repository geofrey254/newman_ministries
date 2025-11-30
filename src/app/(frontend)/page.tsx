import React from 'react'
import Hero from '@/components/Homepage/Hero'
import Jumbotron from '@/components/Homepage/Jumbotron'
import About from '@/components/Homepage/About'
import Stats from '@/components/Homepage/Stats'
import Sermons from '@/components/Homepage/Sermons'

export default function page() {
  return (
    <>
      <Hero />
      <Jumbotron />
      <About />
      <Stats />
      <Sermons />
    </>
  )
}
