import React from 'react';
import {Link} from 'react-router-dom'
import { Item } from 'semantic-ui-react';
class ArticleAuthor extends React.Component {
  render () {
    // const article = this.props.article;
    const {updatedAt} = this.props.article;
    const {username, image} = this.props.article.author;
    return (
      
      <Item>
        <Link to={`/profiles/${username}`}>
        <Item.Image
          size='tiny'
          src={image||'https://static.productionready.io/images/smiley-cyrus.jpg'}
        />

        <Item.Content>
          <Item.Header as='a'>{username}</Item.Header>
          <Item.Meta>{new Date(updatedAt).toDateString()}</Item.Meta>
          
        </Item.Content>
        </Link>
      </Item>
    )
  }
}
export default ArticleAuthor
