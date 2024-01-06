import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="flex flex-row h-auto w-full justify-around m-0 mb-4">
      {/* ... other code ... */}
      <div id="navbar" className="flex flex-row text-2xl font-semibold gap-x-5">
        <Link to="/">Products</Link>
        <Link to="/add-products">Add Product</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/items">Suggestions</Link>
      </div>
      {/* ... other code ... */}
    </div>
  );
};


export default Header;
