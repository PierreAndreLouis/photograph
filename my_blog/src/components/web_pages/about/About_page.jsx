import React from 'react'
import HeroAbout from './HeroAbout'
import About from './About'
import CTA1 from './CTA1'
import Statistic4 from '../home/Statistic4'
import Footer3 from '../home/Footer3'
import AboutSeo from '../../seo/AboutSeo'

export default function About_page() {
  return (
    <div>
      <AboutSeo />
      <HeroAbout />
      <About />
      <Statistic4 />
      <CTA1 />
      <Footer3 />
    </div>
  )
}
