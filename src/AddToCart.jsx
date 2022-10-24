import React from 'react'
import { doc, setDoc } from 'firebase/firestore'
import './AddToCart.css'

const AddToCart = () => {
  // Add a new document in collection "cities"

  const handleAddToCartClick = async () => {
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
