import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { combo } from '../data/comboOffer';
import ComboCard from './ComboCard';

const ComboOffer = () => {
  return (
    <section className="comboOffer" id="offer">
    <div className="top">
      <p className="heading">Combo Offer</p>
      <div className="view">
          <a href="#product" style={{ textDecoration: "none", color: "inherit" }}>
            View All &nbsp; <FaArrowRight />
          </a>
        </div>
    </div>
    <div className="bottom">
      {combo?.map((item) => (
        <div className="cat" key={combo.id}>
          <ComboCard item={item}/>
        </div>
      ))}
    </div>
  </section>
  )
}

export default ComboOffer