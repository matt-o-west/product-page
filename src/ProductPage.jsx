import React from 'react'
import './ProductPage.css'
import Counter from './Counter'
import AddToCart from './AddToCart'

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
          <h1>Limited Edition Sneakers</h1>
          <p id='description'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p id='price'>$125.00</p>

          <Counter />
          <AddToCart />
        </div>
      </div>
    </>
  )
}

export default ProductPage
