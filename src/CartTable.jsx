import React from 'react'
import './CartTable.css'

const CartTable = ({ cart }) => {
  //console.log(cart)

  const cartItems = cart.map((item) => {
    return (
      <tr key={item.id}>
        {/*<td><img
                className='product-thumb'
                src='image-product-1-thumbnail.jpg'
                alt='product 1'
              /></td>*/}
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.price * item.quantity}</td>
      </tr>
    )
  })

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
          {cartItems}
        </tbody>
      </table>
    </>
  )
}

export default CartTable
