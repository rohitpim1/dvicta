import React from 'react'
import Banner2 from '../components/Banner2'
import Category from '../components/Category'
import ComboOffer from '../components/ComboOffer'
import Discount from '../components/Discount'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import NewArrived from '../components/NewArrived'
import Products from '../components/Products'


const Home = () => {
  return (
    <div>
    <Header/>
      <Hero/>
      <Category/>
     <ComboOffer/>
      <NewArrived/>
      <Products/>
      <Discount/>
      
      <Banner2/>
      <hr/>
      <Footer/>
    </div>
  )
}

export default Home
