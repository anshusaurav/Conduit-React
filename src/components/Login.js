import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onChange (event) {
    const tName = event.target.name
    if (tName === 'email') {
      this.setState({ email: event.target.value })
    } else if (tName === 'password') {
      this.setState({ password: event.target.value })
    }
  }
  onClickHandler (event) {
    event.preventDefault()
    this.props.history.push('/register')
  }
  async onSubmit (event) {
    event.preventDefault()
    const { email, password } = this.state
    const user = { user: { email, password } }
    console.log(JSON.stringify(user))

    try {
      let response = await fetch(
        'https://conduit.productionready.io/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }
      )
      let data = await response.json()
      console.log(data)
      if (!data.error) {
        // console.log(data);
        this.props.onLogin()
        localStorage.setItem('token', data.user.token)
        this.props.history.push('/')
      } else {
        throw data.error
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  render () {
    return (
      <div className='login-div'>
        <div className='login-div-header'>
          <h2>Sign In</h2>
          <div>
            <Button
              positive
              onClick={this.onClickHandler}
            >
              Have an account?
            </Button>
          </div>
        </div>
        <Form className='login-input-div' onSubmit={this.onSubmit}>
          <Input
            size='large'
            name='email'
            type='email'
            placeholder='email'
            onChange={this.onChange}
          />
          <Input
            size='large'
            name='password'
            type='password'
            placeholder='password'
            onChange={this.onChange}
          />
          <div className='login-btn-div'>
            <Button secondary>Sign In</Button>
            {/* <Button primary>Reset</Button> */}
          </div>
        </Form>
      </div>
    )
  }
}
export default withRouter(Login)
