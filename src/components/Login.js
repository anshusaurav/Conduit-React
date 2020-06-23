import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Login extends React.Component {
  render () {
    return (
      <div className='login-div'>
        <h2>Sign In</h2>
        <Form className='login-input-div'>
          <Input size='large' type='email' placeholder='email' />
          <Input size='large' type='password' placeholder='password' />
          <div className='login-btn-div'>
            <Button primary>Sign In</Button>
            <Button secondary>Reset</Button>
          </div>
        </Form>
      </div>
    )
  }
}
export default Login
