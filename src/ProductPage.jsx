import React from 'react'
import './ProductPage.css'

const ProductPage = () => {
  return (
    <>
      <div className='page'>
        <div className='productImage'></div>
        <div className='gallery'>
          <img className='galleryImage' />
          <img className='galleryImage' />
          <img className='galleryImage' />
          <img className='galleryImage' />
        </div>
        <div className='productInfo'>
          <h1>Product Name</h1>
          <p>Product Description</p>
          <p>Product Price</p>
          <button className='addToCart'>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ProductPage
