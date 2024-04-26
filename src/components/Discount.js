import React from 'react'
import banner2 from '../assests/—Pngtree—cricket logo vector and clipart_9163535.png'
const Discount = () => {
  return (
    <section className='discount' id='contact'>
        <div className='content'>
        <div>
           <p>
            Get 10% discount on your first purchase
           </p> 
           </div>
           <div>
           <a href="tel:+917057399327">Call us</a>
           <a href="https://wa.me/917057399327">WhatsApp us</a>
           </div>
           
          
        </div>
        <div className='image'>
        <img src={banner2} alt=''/>
        </div>
    </section>
  )
}

export default Discount