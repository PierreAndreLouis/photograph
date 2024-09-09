import React from 'react'
import HeroAbout from './HeroAbout'
import About from './About'
import CTA1 from './CTA1'
// import Footer3 from '../home/Footer4'
import AboutSeo from '../../seo/AboutSeo'
import Statistic4 from './Statistic4'

export default function About_page() {
  return (
    <div>
      <AboutSeo />
      <HeroAbout />
      <About />
      <Statistic4 />
      <CTA1 />
      {/* <Footer3 /> */}
    </div>
  )
}
