import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from './Logo';
const Footer = () => {
  return (
    <section className='footer'>
        <div className='foot'>
         <div className="left">
          <Logo/>
          <div className='socialIcons'>
            <a href=''><FaFacebook/></a>
            <a href=''><FaInstagram/></a>
            <a href=''><FaYoutube/></a>
            <a href=''><FaTwitter/></a>
            <a href=''><FaLinkedin/></a>
          </div>
         </div>
         <div className='middle'>
         <a href='#home'>Home</a>
         <a href='#product'>Shop</a>
         <a href='#offer'>Offer</a>
         <a href='#contact'>GetItNow</a>
         <a href='#contact'>Contact</a>
         </div>
         <div className='right'>
            <p>
                adrress
            </p>
            <p>
                phone number
            </p>
            <p>
                emailid
            </p>
         </div>
        </div>
        <p style={{marginTop:"30px"}}>@2024 Dvicta All Right Reserved.</p>
    </section>
  )
}

export default Footer