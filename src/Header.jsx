import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-row h-auto w-full  justify-around  m-0 mb-4">
        <Link to="/">
          <div id="logo" className="flex">
            <img
              src="https://static.wixstatic.com/media/4006d0_a651b03946a645eba283b75ec2c6f613~mv2.png/v1/fill/w_186,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/inifnite_locus_logo_v1_edited.png"
              alt="Infinite Locus"
            />
          </div>
        </Link>
        <div
          id="navbar"
          className="flex flex-row text-2xl font-semibold gap-x-5 mt-4"
        >
          <div
            id="navbar"
            className="flex flex-row text-2xl font-semibold gap-x-5"
          >
            <Link to="/" className=" hover:bg-gray-100 rounded-md hover:border-2">Products</Link>
            <Link to="/add-products" className=" hover:bg-gray-100 rounded-md hover:border-2">Add Product</Link>
            <Link to="/sales" className=" hover:bg-gray-100 rounded-md hover:border-2">Sales</Link>
            <Link to="/items" className=" hover:bg-gray-100 rounded-md hover:border-2">Suggestions</Link>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded my-2">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
