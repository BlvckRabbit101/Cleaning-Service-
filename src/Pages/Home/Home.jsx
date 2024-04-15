import React, { useState } from 'react'
import {useRef} from 'react'
import Header from '../../Pages/Header/Header'
import Footer from '../../Pages/Footer/Footer'
import Banner from '../../Pages/Banner/Banner'
import Subhero from '../../Pages/Home/SubHero/Subhero'
import OurServices from '../../Pages/Home/OurServices/OurServices'
import Reviews from '../../Pages/Home/Review/Reviews'
import Hero from '../../Pages/Home/Hero/Hero'
import Contact from '../../Pages/Home/Contact/Contact'
import Login from '../Login/Login'
import Pricing from './Pricing/Pricing'

const Home = () => {
    const ref = useRef(null)

    const [toggle, setToggle] = useState(false) 
    const onToggle = ()=> {
        if (window.scrollY >= 100){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }

    window.addEventListener('scroll', onToggle)
  return (
    
    <div>
        <Banner />
      <Header />
      <Hero />
      <Subhero />
      <OurServices />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home