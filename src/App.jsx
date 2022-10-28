import './App.css'
import Nav from './Nav'
import ProductPage from './ProductPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/'>
            <Homepage />
          </Route>
          <Nav />
          <ProductPage />
        </Switch>
      </Router>
    </div>
  )
}

export default App
