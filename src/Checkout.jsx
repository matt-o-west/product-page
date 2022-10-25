import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

const Checkout = () => {
  const stripePromise = loadStripe('pk_test_KV7IYWTnNz5JTeOvwdm4yfhw')

  const handleCheckoutClick = async () => {
    const stripe = await stripePromise

    try {
      const result = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1LwrRfINkMpPiCNdkoTCgIK7',
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: 'PLACEHOLDER',
        cancelUrl: 'PLACEHOLDER',
      })
      console.log(result.error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={handleCheckoutClick}>Checkout</button>
    </div>
  )
}

export default Checkout
