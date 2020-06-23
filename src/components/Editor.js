import React from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
class Editor extends React.Component {
  render () {
    return (
      <Form className='editor-form'>
        <Form.Field>
          <input placeholder='Article Title' />
        </Form.Field>
        <Form.Field>
          <input placeholder="What's this article about?" />
        </Form.Field>
        <Form.Field>
          <TextArea placeholder='Tell us more' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Enter Tags' />
        </Form.Field>
        <Button type='submit'>Publish</Button>
      </Form>
    )
  }
}

export default Editor
