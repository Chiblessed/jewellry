import React from 'react'
import Home from '../../pages/home/Home'
import Display from '../display/Display'
import Details from '../details/Details'
import Promise from '../promise/Promise'
import Reviews from '../reviews/Reviews'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'

const Hero = () => {
  return (
    <div>
        <Home />
        <Display />
        <Details />
        <Promise />
        <Reviews />
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default Hero