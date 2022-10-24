import React from 'react'
import './CartTable.css'

const CartTable = () => {
  return (
    <>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <img src='image-product-1-thumbnail.jpg' alt='product 1' />
            <p>Emroided Hooded</p>
            <p>Pullover-Fleece</p>
          </td>
          <td>$35.00</td>
          <td>1</td>
        </tr>
      </table>
    </>
  )
}

export default CartTable
