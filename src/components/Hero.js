import React from 'react'
import banner1 from '../assests/—Pngtree—cricket logo vector and clipart_9163535.png'
import BrandBanner from './BrandBanner'

const Hero = () => {
  return (
    <div className='heroSec' id='home' >
     <section className='hero'>
      <div className='content'>
      <h1>DreamVicta</h1>
        <p>"Ease into shopping bliss with us! No forms, no logins, no fuss. Just chat or call, 
        share your order, and relax. We'll safeguard your shipment and guarantee delivery within 7-10 days!"</p>
        
      </div>
      <div className='image'>
        <img src={banner1} alt='DreamVicta'/>
      </div>
     </section>
     <BrandBanner/>
    </div>
  )
}

export default Hero
