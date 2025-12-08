import React from 'react'
import AboutHero from '@/components/AboutPage/AboutHero'
import About from '@/components/AboutPage/About'
import Jumbotron from '@/components/AboutPage/Jumbotron'
import Mission from '@/components/AboutPage/Mission'
import Team from '@/components/AboutPage/Team'
import FAQ from '@/components/AboutPage/FAQ'
import AboutCTA from '@/components/AboutPage/AboutCTA'

export default function page() {
  return (
    <>
    <AboutHero/>
    <About/>
    <Jumbotron/>
    <Mission/>
    <Team/>
    <FAQ/>
    <AboutCTA/>
    </>
  )
}
