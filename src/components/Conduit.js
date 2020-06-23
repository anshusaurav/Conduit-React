import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
class Conduit extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Sign In</Link>
              </li>
              <li>
                <Link to='/register'>Sign Up</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Conduit
