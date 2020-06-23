import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Editor from './Editor'
import Settings from './Settings'
import Profile from './Profile'
class Conduit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: true,
      isTagClicked: true,
      topTwentyTags:[]
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
                  <Link to='/editor'>New Post</Link>
                </li>
                <li>
                  <Link to='/settings'>Settings</Link>
                </li>
                <li>
                  <Link to='/profile'>anshusaurav</Link>
                </li>
              </ul>
            )}
          </div>
          <Switch>
            <Route exact path='/'>
              <Home isLoggedIn={this.state.isLoggedIn} isTagClicked={this.state.isTagClicked} tags={this.state.topTwentyTags}/>
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/editor'>
              <Editor />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Conduit
