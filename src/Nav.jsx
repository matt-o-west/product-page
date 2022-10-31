import './Nav.css'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import CartTable from './CartTable'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const handleToggleCart = () => {
    setOpen(!open)
    console.log(open ? 'block' : 'none')
  }

  return (
    <nav>
      <img src='logo.svg' alt='company logo' id='logo' />
      <NavLink
        exact
        activeClassName='navButton'
        className='link'
        to='/products'
      >
        Products
      </NavLink>
      <NavLink exact activeClassName='navButton' className='link' to='/about'>
        About
      </NavLink>
      <NavLink exact activeClassName='navButton' className='link' to='/contact'>
        Contact
      </NavLink>
      <div className='ui'>
        <Button onClick={handleToggleCart}>
          <img src='icon-cart.svg' aria-hidden='true' id='cart' />
        </Button>
        {/*<Box display={open ? 'block' : 'none'}>
                  <CartTable />
              </Box>*/}
        <img src='image-avatar.png' alt='avatar' id='avatar' />
      </div>
    </nav>
  )
}

export default Nav
