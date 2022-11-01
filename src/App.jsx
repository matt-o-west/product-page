import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import Cart from './Cart'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const handleProductAdd = () => {
    console.log('product added to cart')
  }

  const handleProductDelete = () => {
    console.log('product deleted from cart')
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
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
