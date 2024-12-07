import React from 'react'
import NavbarHome from './NavbarHome'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Workflow from './Workflow'
import Pricing from './Pricing'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='bg-black min-h-screen overflow-visible'>
        <NavbarHome/>
        <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Footer/>
        </div>
    </div>
  )
}

export default LandingPage