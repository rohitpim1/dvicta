import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { arrived } from '../data/Arrived';
import ProductCard from "./ProductCard";



const NewArrived = () => {
  const [scrollX, setScrollX] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(document.querySelector(".inner").clientWidth);
      
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    const step =300; 
    // Adjust the step size as per your requirement
   
    setScrollX((prev) => Math.max(prev + step));
    
  }

  const handleNext = () => {
    const step = 300; // Adjust the step size as per your requirement
    const containerWidth = document.querySelector(".inner").scrollWidth;
    const visibleWidth = document.querySelector(".inner").clientWidth ;
    setScrollX((prev) => Math.min(prev - step, containerWidth - visibleWidth));
  };

  return (
    <section className="newArrived">
      <div className="top">
        <p className="heading">New Arrived Brands</p>
        <div className="view">
          <a href="#product" style={{ textDecoration: "none", color: "inherit" }}>
            View All &nbsp; <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="inner" style={{ transform: `translateX(${scrollX}px)` }}>
          {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
        </div>
        <div className="arrowBtn">
          <div className="prev">
            <button onClick={handlePrev}  >
              <FaArrowLeft />
            </button>
          </div>
          <div className="next">
            <button onClick={handleNext} disabled={scrollX >= (document.querySelector(".inner")?.scrollWidth || 0 ) + innerWidth}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrived;
