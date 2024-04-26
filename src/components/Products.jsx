import React from "react";
import ProductsCatTabs from "./ProductsCatTabs";



const Products = () => {
  return (
    <section className="products" id="product">
      <div className="top">
        <p className="heading">Products</p>
       
      </div>
      <div className="bottom">
       <ProductsCatTabs/>
      </div>
    </section>
  );
};

export default Products;
