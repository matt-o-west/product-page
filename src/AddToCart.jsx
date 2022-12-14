import React from 'react'
import { doc, setDoc } from 'firebase/firestore'
import './AddToCart.css'

const AddToCart = ({ onClick }) => {
  return (
    <button className='addToCart' onClick={onClick}>
      <img src='icon-cart.svg' aria-hidden='true' id='cart' />
      Add to Cart
    </button>
  )
}

export default AddToCart
