import React from 'react'
import './ProductPage.css'
import Counter from './Counter'
import AddToCart from './AddToCart'
import { useState } from 'react'

const ProductPage = () => {
  const [imageShown, setImageShown] = useState('image-product-1.jpg')

  console.log(imageShown)

  const handleImageClick = (e) => {
    setImageShown(`image-product-${e.target.id}.jpg`)
    console.log(e.target.id)
  }

  return (
    <>
      <div className='page'>
        <div className='productImage'>
          <img className='main-img' src={imageShown} />
        </div>
        <div className='gallery'>
          <img
            className='galleryImage'
            src='image-product-1-thumbnail.jpg'
            alt='thumbnail image 1'
            onClick={handleImageClick}
            id='1'
          />
          <img
            className='galleryImage'
            src='image-product-2-thumbnail.jpg'
            alt='thumbnail image 2'
            onClick={handleImageClick}
            id='2'
          />
          <img
            className='galleryImage'
            src='image-product-3-thumbnail.jpg'
            alt='thumbnail image 3'
            onClick={handleImageClick}
            id='3'
          />
          <img
            className='galleryImage'
            src='image-product-4-thumbnail.jpg'
            alt='thumbnail image 4'
            onClick={handleImageClick}
            id='4'
          />
        </div>
        <div className='productInfo'>
          <h1>Limited Edition Sneakers</h1>
          <p id='description'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p id='price'>$125.00</p>
          <p id='strikethrough'>$250.00</p>
          <Counter />
          <AddToCart />
        </div>
      </div>
    </>
  )
}

export default ProductPage
