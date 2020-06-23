import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
class Conduit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: true,


    }
  }
  render () {
    return (
      <Router>
        <div className='container'>
          <div className='header'>
            <h1>
              <Link to='/'>conduit</Link>
            </h1>
            {!this.state.isLoggedIn ? (
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
            ) : (
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/login'>New Post</Link>
                </li>
                <li>
                  <Link to='/register'>Settings</Link>
                </li>
                <li>
                  <Link to='/anshusaurav'>anshusaurav</Link>
                </li>
              </ul>
            )}
          </div>
          <Switch>
            <Route exact path='/'>
              <Home isLoggedIn={this.state.isLoggedIn}/>
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
