import React from 'react';
import freeDelivery from '../assests/freeDelivery.png';
import offer from '../assests/offer.png';
import quality from '../assests/quality.png';
import saving from '../assests/saving.png';
import pay from '../assests/securePayment.png';

const Banner2 = () => {
  return (
    <section className='banner2' style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div className='b'>
        <img src={freeDelivery} alt=''/> 
        <p>free Delivery</p>
      </div>
      <div className='b'>
        
        <img src={pay} alt=''/> 
        <p>100% secure payment</p> 
        
      </div>
      <div className='b'>
      <img src={quality} alt=''/> 
        <p>Quality Guarantee</p>
      </div>
      <div className='b'>
      <img src={saving} alt=''/> 
        <p>Guarented Saving</p>
      </div>
      <div className='b'>
      <img src={offer} alt=''/> 
        <p>Daily Offer</p>
      </div>
    </section>
  )
}

export default Banner2
