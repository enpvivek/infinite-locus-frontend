import React from "react";
import Header from "./Header";
import Items from "./Items";
import AddProducts from "./AddProducts";
import Sales from "./Sales";

const Products = () => {
  return (
    <>
      {/* Show Admin Name */}
      <div id="products" className="flex flex-col w-full h-screen mx-0">
        <Header />
        <Sales />
        {/* <AddProducts /> */}
        {/* <div id="itemContainer" className="flex">
          <div id="productContainer" className=" grid grid-cols-2 w-full gap-5">
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Products;
