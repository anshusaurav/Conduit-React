import React from 'react';
import { Input, Button} from 'semantic-ui-react';

class Register extends React.Component {
  render () {
    return (
      <div>
        <h2>Sign Up</h2>
        <Input type='text' placeholder='name' />
        <Input type='email' placeholder='email'/>
        <Input type='password' placeholder='password' />
        <Button primary>Sign In</Button>
        <Button secondary>Reset</Button>
      </div>
    )
  }
}
export default Register
