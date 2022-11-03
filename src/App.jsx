import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

//Firebase Config

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCp6gvwHYFXVU88hCYjK0CzGPMEqp5f1eA',
  authDomain: 'shopping-cart-d2e9e.firebaseapp.com',
  projectId: 'shopping-cart-d2e9e',
  storageBucket: 'shopping-cart-d2e9e.appspot.com',
  messagingSenderId: '445024795050',
  appId: '1:445024795050:web:6a3252c4cea4f4c84f13d3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
console.log(db)
*/

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // to visualize the cart in the console every time in changes
    // you can also use React dev tools
    console.log(cart)
  }, [cart])

  const handleProductAdd = (newProduct) => {
    console.log('product added to cart')
    const existingProduct = cart.find((product) => product.id === newProduct.id)

    if (existingProduct) {
      const updatedCart = cart.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }])
    }
  }

  const handleProductDelete = (newProduct) => {
    console.log('product deleted from cart')
    const updatedCart = cart.filter((product) => product.id !== newProduct.id)
    setCart(updatedCart)
  }

  return (
    <div className='App'>
      <Router>
        <Nav cart={cart} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/products'
            element={
              <ProductPage
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          />
          <Route
            path=':id'
            element={<ProductPage onProductAdd={handleProductAdd} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
