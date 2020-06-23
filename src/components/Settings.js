import React from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
class Settings extends React.Component {
  render () {
    return (
        <div>
      <Form className='settings-form'>
        <Form.Field>
          <input placeholder='URL of profile picture' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <TextArea placeholder='Short bio about you' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <input type="password" placeholder='New Password' />
        </Form.Field>
        <Button type='submit'>Update Settings</Button>
      </Form>
      <div className='settings-form'>
      <Button>Logout</Button>
      </div>
      </div>
    )
  }
}

export default Settings;
