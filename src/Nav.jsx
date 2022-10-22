import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <img src='logo.svg' alt='company logo' id='logo' />
      <button className='navButton'>Collections</button>
      <button className='navButton'>Men</button>
      <button className='navButton'>Women</button>
      <button className='navButton'>About</button>
      <button className='navButton'>Contact</button>
      <div className='ui'>
        <img src='icon-cart.svg' aria-hidden='true' id='cart' />
        <img src='image-avatar.png' alt='avatar' id='avatar' />
      </div>
    </nav>
  )
}

export default Nav
