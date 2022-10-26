import './Nav.css'
import { Box, Modal, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleToggleCart = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <img src='logo.svg' alt='company logo' id='logo' />
      <button className='navButton'>Collections</button>
      <button className='navButton'>Men</button>
      <button className='navButton'>Women</button>
      <button className='navButton'>About</button>
      <button className='navButton'>Contact</button>
      <div className='ui'>
        <Button onClick={handleToggleCart}>
          <img src='icon-cart.svg' aria-hidden='true' id='cart' />
        </Button>

        <Modal open={open}></Modal>
        <img src='image-avatar.png' alt='avatar' id='avatar' />
      </div>
    </nav>
  )
}

export default Nav
