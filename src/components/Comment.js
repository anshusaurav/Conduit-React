import React from 'react'
import { Comment } from 'semantic-ui-react'
class Comment extends React.Component {
  render () {
    return (
    <Comment>
      <Comment.Avatar
        as='a'
        src='https://react.semantic-ui.com/images/avatar/small/christian.jpg'
      />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
      </Comment.Content>
    </Comment>
    )
  }
}
