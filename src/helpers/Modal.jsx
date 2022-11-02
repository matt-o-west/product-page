import React from 'react'
//import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import CartTable from '../CartTable'

const CartModal = ({ open, onClose, cart }) => {
  return (
    <Drawer anchor='right' open={open} onClose={onClose} sx={{ width: 200 }}>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Your Cart
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {cart.length > 0 ? (
          <CartTable cart={cart} />
        ) : (
          <p>Your cart is empty</p>
        )}
      </Typography>
    </Drawer>
  )
}

export default CartModal
