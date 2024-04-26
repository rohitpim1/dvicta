import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className="newCard" key={item.id}>
    <div className="image">
      <img src={item.image} alt="" />
    </div>
    <div className="content">
      <h5 className="brandName">{item.name}</h5>
      <p>{item.desc}</p>
      <p>{item.dPrice} &nbsp;&nbsp;&nbsp; <span style={{textDecoration:"line-through"}}>{item.price}</span></p>
    </div>
  </div>
    
  )
}

export default ProductCard
