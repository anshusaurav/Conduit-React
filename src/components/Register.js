import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state= {username:'', email:'', password:''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChange(event) {
    const tName = event.target.name;
    if(tName === 'username'){
      this.setState({username: event.target.value})
    }
    else if(tName === 'email'){
      this.setState({email: event.target.value})
    }
    else if(tName === 'password'){
      this.setState({password: event.target.value})
    }
  }
  onClickHandler(event){
    event.preventDefault();
    this.props.history.push('/login');
  }
  async onSubmit(event) {
    event.preventDefault();
    const {username, email, password} = this.state;
    const user = {user:{username, email, password}};
    console.log(JSON.stringify(user));
    try {
      let response = await fetch ('https://conduit.productionready.io/api/users/login',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
  
      })
      let data = await response.json();
      console.log(data);
      if(!data.error) {
            console.log(data);
            this.props.onLogin();
            localStorage.setItem('token', data.token);
            this.props.history.push('/');
          }
      else{
        throw(data.error);
      }
    } catch(err) {
      console.error('Error:', err);
    }
  }
  render () {
    // console.log(this.props)
    return (
      <div className='login-div'>
        <div className='login-div-header'>
          <h2>Sign Up</h2>
          <div>
            <Button
              positive
              onClick={this.onClickHandler}
            >
              Need an account?
            </Button>
          </div>
        </div>
        
        <Form className='login-input-div' onSubmit = {this.onSubmit}>
          <Input size='large' name='username' type='text' placeholder='name' value={this.state.name} onChange={this.onChange}/>
          <Input size='large' name='email' type='email' placeholder='email' value={this.state.email} onChange={this.onChange}/>
          <Input size='large' name='password' type='password' placeholder='password' value={this.state.password} onChange={this.onChange}/>
          <div className='login-btn-div'>
            <Button primary>Sign In</Button>
            {/* <Button secondary>Reset</Button> */}
          </div>
        </Form>
      </div>
    )
  }
}
export default withRouter(Register)
