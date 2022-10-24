import React from 'react'
import './AddToCart.css'

const AddToCart = () => {
  const handleAddToCartClick = () => {
    alert('Added to cart!')
  }

  return (
    <button className='addToCart' onClick={handleAddToCartClick}>
      <img src='icon-cart.svg' aria-hidden='true' id='cart' />
      Add to Cart
    </button>
  )
}

export default AddToCart
