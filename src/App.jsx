import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import db from '../firebase.config'
import {
  setDoc,
  getDocs,
  doc,
  collection,
  CollectionReference,
} from 'firebase/firestore/lite'

//import 'firebase/firestore'

const colRef = new CollectionReference(db, 'cart')

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  //uncommenting this line breaks the app currently
  //const cartRef = collection(db, 'cart')

  useEffect(() => {
    const getCart = async () => {
      const data = await getDocs(colRef)
      const cart = data.docs.map((doc) => doc.data())

      setCart(cart)
    }
    getCart()
  }, [])

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
