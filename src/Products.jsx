import React from 'react'
import Header from './Header'
import Items from './Items'


const Products = () => {
  return (
    <>
    {/* Show Admin Name */}
    <div id="products" className='flex flex-col w-full h-screen'>
    <Header/>
      <div id="productContainer" className='flex flex-row '>
        <div id="sidebar" className='flex flex-col w-1/4 border-2 '>
          <div id="products">Products</div>
          <div id="Addproducts">Add Products</div>
          <div id="Logout">Logout</div>
        </div>
        <div id="showProducts" className='flex flex-row gap-2 w-auto h-full border-2'>
          
          
        <Items/>
        <Items/>
        
        
        </div>
      </div>
    </div>
    
    
    </>
    
  )
}

export default Products