import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import HomePage from './HomePage'
import Cart from './Cart'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path=':id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
