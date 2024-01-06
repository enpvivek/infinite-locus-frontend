import React from "react";
const User = "User";
const Header = () => {
  return (
    <div className="flex flex-row h-auto w-full  justify-around  m-0 mb-4">
      <div id="logo" className="flex">
        <img
          src="https://static.wixstatic.com/media/4006d0_a651b03946a645eba283b75ec2c6f613~mv2.png/v1/fill/w_186,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/inifnite_locus_logo_v1_edited.png"
          alt="Infinite Locus"
        />
      </div>
      <div id="navbar" className="flex flex-row text-2xl font-semibold gap-x-5">
        <div>Products</div>
        <div>Add Product</div>
        <div>Sales</div>
        <div>Suggestions</div>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
