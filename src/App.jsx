import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <ProductPage />
    </div>
  )
}

export default App
