import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductsCatTabs from "./ProductsCatTabs";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
 
];

const Products = () => {
  return (
    <section className="products" id="product">
      <div className="top">
        <p className="heading">Products</p>
        <div className="view" style={{display:"none"}}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            View All &nbsp; <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="bottom">
       <ProductsCatTabs categories={categories}/>
      </div>
    </section>
  );
};

export default Products;
