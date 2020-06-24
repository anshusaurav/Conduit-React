import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'',password:''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const tName = event.target.name;
    if(tName === 'email'){
      this.setState({email: event.target.value})
    }
    else if(tName === 'password'){
      this.setState({password: event.target.value})
    }
  }
  async onSubmit(event){
    event.preventDefault();
    const {email, password} = this.state;
    const user = {user:{email, password}};
    console.log(JSON.stringify(user));
    fetch ('https://conduit.productionready.io/api/users/login',{
      method: 'POST',
      headers: {
        'Content-Type' :'application/json'
      },
      body:JSON.stringify(user)

    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(!data.error) {
        console.log(data);
        this.props.onLogin();
        localStorage.setItem('token', data.token);
        this.props.history.push('/');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  render () {
    return (
      <div className='login-div'>
        <h2>Sign In</h2>
        <Form className='login-input-div' onSubmit={this.onSubmit}>
          <Input size='large' name='email' type='email' placeholder='email' onChange={this.onChange}/>
          <Input size='large' name='password' type='password' placeholder='password' onChange={this.onChange}/>
          <div className='login-btn-div'>
            <Button primary>Sign In</Button>
            {/* <Button secondary>Reset</Button> */}
          </div>
        </Form>
      </div>
    )
  }
}
export default withRouter(Login)
