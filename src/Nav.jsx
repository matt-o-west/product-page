import './Nav.css'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import CartTable from './CartTable'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleToggleCart = () => {
    setOpen(!open)
    console.log(open ? 'block' : 'none')
  }

  return (
    <nav>
      <img src='logo.svg' alt='company logo' id='logo' />
      <button className='navButton'>Collections</button>
      <button display={open ? 'block' : 'none'} className='navButton'>
        Men
      </button>
      <button className='navButton'>Women</button>
      <button className='navButton'>About</button>
      <button className='navButton'>Contact</button>
      <div className='ui'>
        <Button onClick={handleToggleCart}>
          <img src='icon-cart.svg' aria-hidden='true' id='cart' />
        </Button>
        <Box>
          <CartTable />
        </Box>
        <img src='image-avatar.png' alt='avatar' id='avatar' />
      </div>
    </nav>
  )
}

export default Nav
