import React from "react";
import Items from "./Items";
import AddProducts from "./AddProducts";
import Sales from "./Sales";
import Login from "./Login";

const Products = () => {
  return (
    <>
      {/* Show Admin Name */}
      <div id="products" className="flex flex-col w-full h-screen mx-0">
        {/* <Login /> */}
        <Sales />
        {/* <AddProducts /> */}
        <div id="itemContainer" className="flex">
          <div id="productContainer" className=" grid grid-cols-3 w-full gap-5">
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
