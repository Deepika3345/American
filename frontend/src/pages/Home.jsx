import React, { useEffect } from 'react'
import ProductContainer from '../Components/ProductContainer'
import HeroSection from '../Components/HeroSection'
import SecondSection from '../Components/SecondSection'
import BagContainer from '../Components/BagContainer'
import TwinGirls from '../Components/TwinGirls'
import InterNation from '../Components/InterNation'
import Discover from '../Components/Discover'
import EmailPage from '../Components/EmailPage'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {

    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
  
  
    useEffect(() => {
      if (!user) {
        navigate("/login")
      }
  
    }, [user])







    return (
        <>
            <Carousel />
            <ProductContainer />
            <HeroSection />
            <SecondSection />
            <BagContainer />
            <TwinGirls />
            <InterNation />
            <Discover />
         
            <EmailPage />
           
            <Footer />
        </>
    )
}

export default Home