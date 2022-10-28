import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/'>
            <Homepage />
          </Route>
          <Route path='/products'>
            <ProductPage />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
