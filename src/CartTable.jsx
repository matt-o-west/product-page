import React from 'react'
import './CartTable.css'

const CartTable = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <p>Emroided Hooded</p>
              <img
                className='product-thumb'
                src='image-product-1-thumbnail.jpg'
                alt='product 1'
              />
            </td>
            <td>$35.00</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CartTable
