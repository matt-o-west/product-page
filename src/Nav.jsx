import React from 'react'

const Nav = () => {
  return (
    <nav>
      <img src='logo.svg' alt='company logo' />
      <button>Collections</button>
      <button>Men</button>
      <button>Women</button>
      <button>About</button>
      <button>Contact</button>
      <div className='ui'>
        <img src='icon-cart.svg' aria-hidden='true' />
        <img src='image-avatar.png' alt='avatar' />
      </div>
    </nav>
  )
}

export default Nav
