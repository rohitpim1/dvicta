import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { category } from '../data/category';


const Category = () => {
  return (
    <section className="category">
      <div className="top">
        <p className="heading">Category</p>
        <div className="view">
          <a href="#product" style={{ textDecoration: "none", color: "inherit" }}>
            View All &nbsp; <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="bottom">
        {category?.map((item) => (
          <a href="#product" key={item.id}>
          <div className="cat" >
            <p>{item.name}</p>
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Category;
