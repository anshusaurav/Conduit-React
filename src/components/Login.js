import React from 'react';
import {Input, Button} from 'semantic-ui-react';
class Login extends React.Component {
  render () {
    return (
      <div>
        <h2>Sign In</h2>
        <Input type='email' placeholder='email'/>
        <Input type='password' placeholder='password' />
        <Button primary>Sign In</Button>
        <Button secondary>Reset</Button>
      </div>
    )
  }
}
export default Login
