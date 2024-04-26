import React from 'react'
import adidas from '../assests/adidas-cricket_1567323646__18137.original.jpg'
import asics from '../assests/asics-cricket_1567324413__48203.original.jpg'
import bas from '../assests/bas vampire logo cricketershop.com_1567322917__29244.original.jpg'
import ceat from '../assests/ceat logo_1591945959__60782.original.png'
import mrf from '../assests/mrf-logo-png-3_1591945131__24495.original.png'
import ss from '../assests/ss-cricket_old1_1567324543__29506.original.jpg'
const BrandBanner = () => {
  return (
    <section className='brand'>
    
     <div className='brandImg'>
        <div>
          <img src={adidas} alt='adidas'/>
        </div>
        <div>
          <img src={asics} alt='asics'/>
        </div>
        <div>
          <img src={bas} alt='bas'/>
        </div>
        <div>
          <img src={ceat} alt='ceat'/>
        </div>
        <div>
          <img src={mrf} alt='mrf'/>
        </div>
        <div>
          <img src={ss} alt='ss'/>
        </div>
     </div>
    </section>
  )
}

export default BrandBanner