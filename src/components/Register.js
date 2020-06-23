import React from 'react'
import { Input, Button } from 'semantic-ui-react'

class Register extends React.Component {
  render () {
    return (
      <div className='login-div'>
        <h2>Sign Up</h2>
        <div className='login-input-div'>
          <Input size='large' type='text' placeholder='name' />
          <Input size='large' type='email' placeholder='email' />
          <Input size='large' type='password' placeholder='password' />
          <div className='login-btn-div'>
            <Button primary>Sign In</Button>
            <Button secondary>Reset</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default Register
