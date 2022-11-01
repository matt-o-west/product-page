import React from 'react'
//import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import CartTable from '../CartTable'

const CartModal = ({ open, onClose }) => {
  return (
    <>
      <Drawer anchor='right' open={open} onClose={onClose}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <CartTable />
      </Drawer>
    </>
  )
}

export default CartModal
